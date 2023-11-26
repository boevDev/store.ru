import { useContext } from 'react';
import closeIcon from '../../assets/icons/close2-icon.svg';
import { CustomContext } from '../../utils/Context';
import plusIcon from '../../assets/icons/plus-icon.svg';
import minusIcon from '../../assets/icons/minus-icon.svg';
import { Link } from 'react-router-dom';

const CartItem = (props) => {
  const { plusOneCart, minusOneCart, deleteProductCart } =
    useContext(CustomContext);

  return (
    <div className='text-black flex flex-row justify-between items-center w-full text-white relative border-b-2 border-pink-4'>
      <div className='p-5 flex flex-row gap-8 justify-between items-center'>
        <Link
          to={`../Футболка-каталог/${props.id}`}
          className='w-full max-w-[60px]'
        >
          <img src={props.images[0]} alt='img' />
        </Link>
        <div className='flex flex-col gap-2 max-w-[300px] w-full'>
          <Link
            to={`../Футболка-каталог/${props.id}`}
            className='font-bold text-2xl'
          >
            {props.title}
          </Link>
          <div className='leading-4 text-whiteOpacity'>{props.description}</div>
        </div>
        <div className='flex flex-col flex-nowrap whitespace-nowrap justify-start'>
          <div className='flex flex-row gap-1'>
            Цвет: <p className='font-bold'>{props.name}</p>
          </div>
          <div className='flex flex-row gap-1'>
            Размер: <p className='font-bold'>{props.sizes}</p>
          </div>
        </div>
      </div>
      <div className='flex flex-row justify-between items-center gap-8'>
        <button
          onClick={() => minusOneCart(props.id)}
          className='bg-pink-3 w-[52px] h-[52px] rounded-full shadow-md hover:shadow-lg transition-all active:scale-90'
        >
          <img src={minusIcon} alt='-' className='p-3' />
        </button>
        <div className='font-bold text-xl'>{props.count}</div>
        <button
          onClick={() => plusOneCart(props.id)}
          className='bg-pink-3 w-[52px] h-[52px] rounded-full shadow-md hover:shadow-lg transition-all active:scale-90'
        >
          <img src={plusIcon} alt='+' className='p-3' />
        </button>
      </div>
      <div className='p-5 flex flex-row gap-5 items-center'>
        <div className='font-bold text-2xl'>
          {props.price * props.count} &#8381;
        </div>
        <button
          type='button'
          className='bg-pink-3 rounded-full p-2 w-[50px] active:scale-90 transition-all'
          onClick={() => deleteProductCart(props.id)}
        >
          <img src={closeIcon} alt='X' />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
