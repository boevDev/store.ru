import { useContext } from 'react';
import { CustomContext } from '../../utils/Context';
import CartItem from '../../components/CartItem/CartItem';
import closeIcon from '../../assets/icons/close-icon.svg';
import { Link, useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cart, removeCart } = useContext(CustomContext);
  const navigate = useNavigate();

  const total = cart.reduce((acc, rec) => {
    return acc + rec.price * rec.count;
  }, 0);

  const freeShipping = 1000;

  const delivery = 400;

  const difference = () => {
    return freeShipping - total;
  };

  return (
    <div className='flex flex-col gap-4 my-4 self-center'>
      <div className='py-4 font-thin text-xl flex flex-row'>
        <Link to={'/'} className='hover:text-black text-grey'>
          Главная
        </Link>
        <div className='text-grey'>&nbsp;/&nbsp;</div>
        <h1>Корзина</h1>&nbsp;({Object.keys(cart).length} товаров)
      </div>

      {Object.keys(cart).length > 0 ? (
        <div className='flex flex-col gap-4'>
          <button
            type='button'
            className='bg-pink-3 flex flex-row items-center justify-center gap-2 w-full max-w-[200px] py-4 rounded-xl shadow-sm hover:shadow-md text-white font-bold active:scale-90 transition-all'
            onClick={() => {
              removeCart();
            }}
          >
            <img className='w-[20px]' src={closeIcon} alt='closeIcon' />
            Очистить корзину
          </button>
          <div className='flex flex-col bg-gray-3 rounded-xl shadow-lg'>
            {cart.map((item) => {
              return <CartItem {...item} key={item.id} />;
            })}
          </div>
          <div className='flex flex-row justify-between items-center py-4 px-8 bg-gray-3 rounded-xl text-white font-regular w-[70%] self-center shadow-lg'>
            <div className='flex flex-col gap-2 font-light'>
              <div className='flex flex-row items-end font-bold text-gray-4'>
                Итого:&nbsp;
                <p className='text-3xl text-white'>
                  {difference() > 0 ? total + delivery : total} &#8381;
                </p>
              </div>
              <div>Сумма заказа: {total} &#8381;</div>
              {difference() > 0 ? (
                <div className='flex flex-col gap-2'>
                  <div>Доставка: {delivery} &#8381;</div>
                  <div className='flex flex-row items-end'>
                    До бесплатной доставки не хватает:&nbsp;
                    <p className='text-pink-3'>{difference()} ₽</p>
                  </div>
                  <div className='text-grey'>
                    Минимальная сумма заказа для бесплатной доставки:{' '}
                    {freeShipping} &#8381;
                  </div>
                </div>
              ) : (
                <div className='flex flex-row'>
                  Доставка: <p className='text-pink-3'>&nbsp;Бесплатно</p>
                </div>
              )}
            </div>
            <div>
              <button
                type='button'
                onClick={() => navigate('/gocheckout')}
                className='bg-pink-3 text-white hover:bg-white hover:text-pink-3 py-4 px-12 rounded-xl font-bold text-base shadow-md hover:shadow-lg active:scale-90 transition-all'
              >
                Оформить заказ
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className='font-regular text-5xl h-[50vh] w-full flex justify-center items-center'>
          Корзина пустая&#128543;
        </div>
      )}
    </div>
  );
};

export default Cart;
