import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const {cantidadTotal} = useContext(CarritoContext);
  
  return (
    <div>
      <Link style={{textDecoration:"none"}} to="/cart">
          <img style={{width:"3rem"}}src="../img/carritoBlanco1.png" alt="Carrito Blanco de compras" />
            {
              cantidadTotal > 0 && <strong style={{color:"white"}}> {cantidadTotal} </strong>
            }
      
          
      </Link> 
    </div>
  )
}

export default CartWidget