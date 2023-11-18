import { useState, useEffect } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import { db } from "../../services/config"
import { collection, addDoc } from "firebase/firestore"


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
    addDoc(collection(db, "ordenes"), orden)
        .then(docRef => {
            setOrdenId(docRef.id);
            vaciarCarrito();
        })
        .catch(error => {
            console.log("Error al crear la orden", error);
            setError("Se produjo un erorr al crear la orden");
        })


    return (
    <div>
        <h2>Checkout</h2>

        <form onSubmit={manejadorFormulario}>
           {
                carrito.map(producto => (
                    <div key={producto.item.id}>
                        <p>{producto.item.titulo} x {producto.cantidad}</p>
                        <p>{producto.item.precio}</p>
                        <hr />
                    </div>
                ))
           }
           <div>
                <label htmlFor="">Nombre</label>
                <input type="text" onChange={(e)=> setNombre(e.target.value)}/>
           </div>
           <div>
                <label htmlFor="">Apellido</label>
                <input type="text" onChange={(e)=> setApellido(e.target.value)}/>
           </div>
           <div>
                <label htmlFor="">Teléfono</label>
                <input type="tel" onChange={(e)=> setTelefono(e.target.value)}/>
           </div>
           <div>
                <label htmlFor="">Email</label>
                <input type="email" onChange={(e)=> setEmail(e.target.value)}/>
           </div>
           <div>
                <label htmlFor="">Email confirmación</label>
                <input type="email" onChange={(e)=> setEmailConfirmacion(e.target.value)}/>
           </div>
           {
            error && <p style={{color:"red"}}>{error}</p>
           }
           <button type="submit"> Confirmar Compra </button>
           {
                ordenId && (
                    <strong>¡Gracias por tu compra! Tu número de orden es: {ordenId}</strong>
                )
           }
        </form>

    </div>
  )
}

export default Checkout