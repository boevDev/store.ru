import { Link, useNavigate } from 'react-router-dom';
import cartIcon from '../../assets/icons/cart-icon.svg';
import { useContext, useState } from 'react';
import { CustomContext } from './../../utils/Context';
import CartEmpty from '../CartEmpty/CartEmpty';

const Header = () => {
  const navigate = useNavigate();

  const { cart } = useContext(CustomContext);

  const [show, setShow] = useState(false);

  return (
    <header className=' bg-pink-2 font-roboto text-5xl border-b-1 border-grey w-full flex items-center justify-center sticky top-0 z-40'>
      <div className='flex flex-row justify-between text-black p-4 w-full max-w-screen-2xl'>
        <Link to={'/'} className='active:opacity-80'>
          store.ru
        </Link>
        <div className='relative w-16'>
          <div className='flex justify-center absolute right-0 w-[28px] h-[28px] bg-pink-3 border-1 border-white rounded-full z-10'>
            <div className='flex text-base font-bold text-center text-white justify-center self-center'>
              {cart.length}
            </div>
          </div>
          <button
            className='bg-white w-14 flex justify-center rounded-full hover:bg-primary active:opacity-80 border-2 border-white'
            onClick={() => (cart.length ? navigate('cart') : setShow(true))}
          >
            <img
              src={cartIcon}
              alt='cart'
              className='p-2 w-[52px] h-[52px] text-sm'
            />
          </button>
        </div>
      </div>
      <CartEmpty show={show} setShow={setShow} />
    </header>
  );
};

export default Header;
