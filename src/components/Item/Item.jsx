import "./Item.css"
import { Link } from 'react-router-dom';

const Item = ({ product }) => {
  return (
        <div className='item-container'>
            <img className='item-image' src={product.image} alt="" />
            <p className='item-title'>{product.name}</p>
            <p className='item-description'>{product.description}</p>
            <p className='item-price'>Precio: ${product.price}</p>
            <p className='item-stock'>Stock: {product.stock}</p>
            <Link to={ "/detail/" + product.id }>
              <button className='item-button'> Comprar</button>
            </Link>
        </div>
  )
}

export default Item