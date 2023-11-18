import { useState, useContext, useEffect } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import { db } from "../../services/config"
import { collection, addDoc, updateDoc, doc, getDoc } from "firebase/firestore"


const Checkout = () => {
    const [nombre, setNombre ] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmacion, setEmailConfirmacion] = useState("");
    const [error, setError] = useState("");
    const [ordenId, setOrdenId] = useState("");
    
    const {carrito, vaciarCarrito, total, totalCantidad} = useContext(CarritoContext);

    const manejadorFormulario = (event) => {
        event.preventDefault();
        if(!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
            setError("Por favor completa todos los campos");
            return;
        }
    

        if(email !== emailConfirmacion) {
            setError("Los campos del email no coinciden");
            return;
        }

        const orden = {
            items: carrito.map(producto => ({
                id: producto.item.id,
                titulo: producto.item.titulo,
                cantidad: producto.cantidad
            })),
            total: total,
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            email
        };
     

        Promise.all(
            orden.items.map( async (productoOrden) => {
                const productoRef = doc(db, "productos", productoOrden.id);
                const productoDoc = await getDoc(productoRef);
                const stockActual = productoDoc.data().stock;

                await updateDoc( productoRef, {
                    stock: stockActual - productoOrden.cantidad
                })
                
            })
        )
        .then(() => {
            
            addDoc(collection(db, "ordenes"), orden)
            .then(docRef => {
                setOrdenId(docRef.id);
                vaciarCarrito();
                event.target.reset();
            })
            .catch( error => {
                console.log("Error al crear la orden", error);
                setError("Se produjo un error al crear la orden!!!");
            })
        })
        .catch((error) => {
            console.log("No se pudo actualizar el stock", error);
            setError("No se puede actualizar el stock");
        })
    }
   

    return (
    <div>
        <h2>Checkout</h2>

        <form onSubmit={manejadorFormulario} >
           {
                carrito.map(producto => (
                    <div key={producto.item.id}>
                        <p>{producto.item.titulo} x {producto.cantidad}</p>
                        <p>Valor de cada libro: ${producto.item.precio} (clp)</p>
                        
                        <hr />
                    </div>
                ))
           }
           <p>Total a pagar: ${total} (clp)</p>
           <div>
                <label htmlFor="">Nombre: </label>
                <input type="text" onChange={(e)=> setNombre(e.target.value)}/>
           </div>
           <div>
                <label htmlFor="">Apellido: </label>
                <input type="text" onChange={(e)=> setApellido(e.target.value)}/>
           </div>
           <div>
                <label htmlFor="">Teléfono: </label>
                <input type="tel" onChange={(e)=> setTelefono(e.target.value)}/>
           </div>
           <div>
                <label htmlFor="">Email: </label>
                <input type="email" onChange={(e)=> setEmail(e.target.value)}/>
           </div>
           <div>
                <label htmlFor="">Email confirmación: </label>
                <input type="email" onChange={(e)=> setEmailConfirmacion(e.target.value)}/>
           </div>
           {
            error && <p style={{color:"red"}}>{error}</p>
           }
           <button type="submit"> Confirmar Compra </button>
           {
                ordenId && (
                    <strong> <br/>¡Gracias por tu compra {nombre}! <br /> Tu número de orden es: {ordenId}</strong>
                )
           }
        </form>

    </div>
  )
}

export default Checkout