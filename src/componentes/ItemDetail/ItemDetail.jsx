import React, {useState} from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { CarritoContext } from "../../context/CarritoContext";
import { useContext } from "react";

const ItemDetail = ({id, nombre, precio, img, stock}) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0);


  const {agregarProducto} = useContext(CarritoContext);


  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    

    const item = {id, nombre, precio};
    agregarProducto(item,cantidad);
  }

  return (
    <div className="container">
      <div className="row col-md-4 p-4">
        <h2> {nombre}</h2>
        <h3>Precio: {precio}</h3>
        <h3>ID: {id}</h3>
        <p>Veladores y Lamparas de la mas alta calidad!</p>
        <img src={img} alt={nombre} />
        {agregarCantidad > 0 ? (
          <Link to="/cart"> Terminar compra </Link>
        ) : (
          <ItemCount
            inicial={1}
            stock={stock}
            funcionAgregar={manejadorCantidad}
          />
        )}
      </div>
    </div>
  );
};

export default ItemDetail
