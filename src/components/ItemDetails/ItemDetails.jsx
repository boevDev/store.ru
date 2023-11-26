import { useState, useEffect, useContext } from 'react';
import { getProductColor, getSizes } from '../../services/api';
import { CustomContext } from '../../utils/Context';
import plusIcon from '../../assets/icons/plus-icon.svg';
import minusIcon from '../../assets/icons/minus-icon.svg';
import { useParams } from 'react-router-dom';

const ItemDetails = (props) => {
  const [sizes, setSizes] = useState();
  const [takeSize, setTakeSize] = useState([]);
  const [product, setProduct] = useState();
  const [productId, setProductId] = useState();
  const [error, setError] = useState(false);

  const { category } = useParams();

  const categoryName = () => {
    if (category === 't-shirt') {
      return 'Футболка';
    } else if (category === 'tank-top') {
      return 'Майка';
    } else {
      return console.log('Товар не найден');
    }
  };

  const categoryId = () => {
    if (category === 't-shirt') {
      return 1;
    } else if (category === 'tank-top') {
      return 2;
    } else {
      return console.log('Товар не найден');
    }
  };

  const size = props.sizes;

  const { addCart, cart, plusOneCart, minusOneCart } =
    useContext(CustomContext);

  useEffect(() => {
    getSizes()
      .then((item) => {
        setSizes(item);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    getProductColor(categoryId(), props.id)
      .then((item) => {
        setProduct(item);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className='flex flex-row gap-12 flex-nowrap justify-between relative'>
      <div className='flex flex-row gap-12 w-[calc(100%/3*2)]'>
        <div className='bg-white p-12 rounded-xl shadow-xl max-h-[596px] sticky top-44'>
          <img src={props.images[0]} alt='front' />
        </div>

        <div className='bg-white p-12 rounded-xl shadow-xl max-h-[596px] sticky top-44'>
          <img src={props.images[1]} alt='back' />
        </div>
      </div>

      <div className='flex flex-col w-[calc(100%/3)] gap-4 text-2xl bg-white p-12 rounded-xl shadow-xl float-right'>
        <div className=' whitespace-nowrap text-5xl pb-4'>
          {categoryName()} {props.id}
        </div>
        <div className='whitespace-nowrap'>
          Цвет: <b>{props.name}</b>
        </div>
        {error ? (
          <p className='text-error text-sm font-regular'>
            &#8595; Выберите размер, чтобы добавить товар в корзину
          </p>
        ) : null}
        <div className='whitespace-nowrap flex flex-row'>
          <select
            id='select'
            placeholder='Выберите размер'
            onChange={(e) => {
              setTakeSize(e.target.value);
              setProductId(`${category}-${props.id}-${e.target.value}`);
              setError(false);
            }}
            className='border-2 rounded-xl text-center p-2'
          >
            <option disabled selected>
              Выберите размер
            </option>
            {sizes
              ? size.map((item) => (
                  <option
                    key={item}
                    value={sizes.find((i) => i.id === item).label}
                  >
                    {sizes.find((i) => i.id === item).label}&nbsp;/&nbsp;
                    {sizes.find((i) => i.id === item).number}
                  </option>
                ))
              : null}
          </select>
        </div>
        <div className='whitespace-nowrap font-bold text-3xl'>
          {props.price} &#8381;
        </div>
        {cart.findIndex((product) => product.id === productId) > -1 ? (
          <div className='w-full flex flex-row flex-nowrap justify-between items-center my-4'>
            <button
              onClick={() => minusOneCart(productId)}
              className='bg-pink-3 w-[52px] h-[52px] rounded-xl shadow-md hover:shadow-lg transition-all active:scale-90'
            >
              <img src={minusIcon} alt='-' className='p-3' />
            </button>
            <p className='text-black font-light text-2xl'>
              {cart.find((product) => product.id === productId).count} шт.
            </p>
            <button
              onClick={() => plusOneCart(productId)}
              className='bg-pink-3 w-[52px] h-[52px] rounded-xl shadow-md hover:shadow-lg transition-all active:scale-90'
            >
              <img src={plusIcon} alt='+' className='p-3' />
            </button>
          </div>
        ) : (
          <button
            type='button'
            style={{
              backgroundColor: takeSize.length > 0 ? '#F875AA' : '#4e5254',
              cursor: takeSize.length > 0 ? 'pointer' : 'default',
              opacity: takeSize.length > 0 ? '1' : '0.2',
            }}
            onClick={() => {
              let x = { ...product };
              x.id = productId;
              x.sizes = takeSize;
              x.title = `${categoryName()} ${props.id}`;
              takeSize.length > 0
                ? addCart(product ? x : null)
                : setError(true);
            }}
            className='bg-pink-3 my-4 py-4 rounded-xl font-bold text-base text-white shadow-md hover:shadow-lg active:scale-90 transition-all'
          >
            В корзину
          </button>
        )}

        <div className='text-2xl font-light'>Описание: </div>
        <div className='text-base bg-primary p-4 rounded-xl'>
          <b>{props.description}</b>
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
          sapiente enim cupiditate, at laudantium in repellat eligendi sequi
          reiciendis rerum vero sunt nulla, esse aliquid eaque, autem natus
          tenetur facilis! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Aperiam sapiente enim cupiditate, at laudantium in repellat
          eligendi sequi reiciendis rerum vero sunt nulla, esse aliquid eaque,
          autem natus tenetur facilis! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Aperiam sapiente enim cupiditate, at laudantium in
          repellat eligendi sequi reiciendis rerum vero sunt nulla, esse aliquid
          eaque, autem natus tenetur facilis! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Aperiam sapiente enim cupiditate, at
          laudantium in repellat eligendi sequi reiciendis rerum vero sunt
          nulla, esse aliquid eaque, autem natus tenetur facilis! Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Aperiam sapiente enim
          cupiditate, at laudantium in repellat eligendi sequi reiciendis rerum
          vero sunt nulla, esse aliquid eaque, autem natus tenetur facilis!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
          sapiente enim cupiditate, at laudantium in repellat eligendi sequi
          reiciendis rerum vero sunt nulla, esse aliquid eaque, autem natus
          tenetur facilis! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Aperiam sapiente enim cupiditate, at laudantium in repellat
          eligendi sequi reiciendis rerum vero sunt nulla, esse aliquid eaque,
          autem natus tenetur facilis! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Aperiam sapiente enim cupiditate, at laudantium in
          repellat eligendi sequi reiciendis rerum vero sunt nulla, esse aliquid
          eaque, autem natus tenetur facilis!
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
