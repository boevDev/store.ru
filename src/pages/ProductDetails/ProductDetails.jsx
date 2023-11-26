import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getProductColor } from '../../services/api';
import ItemDetails from '../../components/ItemDetails/ItemDetails';
import { Link } from 'react-router-dom';
import { catalogData } from '../../utils/catalogData';

const ProductDetails = (props) => {
  const [product, setProduct] = useState();

  const { id, category } = useParams();

  const categoryId = () => {
    if (category === 't-shirt') {
      return 1;
    } else if (category === 'tank-top') {
      return 2;
    } else {
      return console.log('Товар не найден');
    }
  };

  useEffect(() => {
    getProductColor(categoryId(), id)
      .then((item) => {
        setProduct(item);
      })
      .catch((err) => console.log(err));
  }, []);

  return product ? (
    <div className='w-full flex items-center justify-center'>
      <div className='py-4 w-full max-w-screen-2xl'>
        <div className='font-thin text-xl w-full text-start py-4 sticky top-28 flex flex-row'>
          <Link to='../' className='text-grey hover:text-black'>
            Главная
          </Link>
          <div className='text-grey'>&nbsp;/&nbsp;</div>
          <Link
            to={`../catalog/${category}`}
            className='text-grey hover:text-black'
          >
            {catalogData.find((item) => item.en === category).ru}
          </Link>
          <div className='text-grey'>&nbsp;/&nbsp;</div>Подробная информация:
        </div>
        <div>
          {product ? <ItemDetails {...product} key={product.id} /> : null}
        </div>
      </div>
    </div>
  ) : (
    <p className='font-bold text-5xl absolute top-[45%] left-[45%] text-black'>
      Загрузка...
    </p>
  );
};

export default ProductDetails;
