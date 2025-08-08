import useProduct from '../../hooks/useProduct.js';
import Loading from '../Loading/Loading';
import { useNavigate } from 'react-router-dom';
import { ItemList } from '../ItemList/ItemList';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import './ItemDetailContainer.css';

const ItemDetailContainer = () => {
  const { productId } = useParams();
    const { product, loading } = useProduct(productId);
    const navigate = useNavigate();
  
  if (loading) {
    return <Loading />;
  }

  if (!product) {
    return (
      <div className="error">
        <h2>El producto no existe o fue eliminado.</h2>
        <button onClick={() => navigate("/")}>Volver al inicio</button>
      </div>
    );
  }

  if (product.stock === 0) {
    return (
      <div className="error">
        <h2>Este producto no tiene stock disponible.</h2>
        <button onClick={() => navigate("/")}>Volver al inicio</button>
      </div>
    );
  }

  return (
    <div>
        {
          loading ? <Loading /> : <ItemDetail product={product}/>  
        }
    </div>
  )
}

export default ItemDetailContainer