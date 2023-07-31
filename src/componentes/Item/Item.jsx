import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import "./item.css";

const Item = ({id, nombre, precio, img, stock}) => {
   return (
    <Card className="cardProducto"style={{ width: '18rem', backgroundColor:"dlightskyblue"}}  >
      <Card.Img className="imgProducto" style={{ objectFit: "cover"}} variant="top"  src={img}  alt={nombre}/>
      <Card.Body>
        <Card.Title> {nombre}</Card.Title>
        <Card.Title>Precio $ {precio}</Card.Title>
        <Card.Title>ID: {id}</Card.Title>
        <Card.Title>Stock: {stock}</Card.Title>
        <Card.Text>
          Lamparas y Veladores de la mas alta calidad
        </Card.Text>
        <Link to={`/item/${id}`} style={{ color:"black"}} > Ver Detalles </Link>

      </Card.Body>
    </Card>
  );
}


export default Item