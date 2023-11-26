import cartEmptyIcon from '../../assets/icons/cartEmpty-icon.svg';
import closeIcon from '../../assets/icons/close-icon.svg';
import sadSmileIcon from '../../assets/icons/sad-smile-icon.svg';

const CartEmpty = (props) => {
  return (
    <div
      style={{ display: props.show === true ? 'flex' : 'none' }}
      className='fixed top-0 left-0 w-full h-screen z-50 bg-bgOpacity justify-center items-center'
    >
      <div className='bg-gray-3 w-[calc(100%-20px)] max-w-[350px] p-8 rounded-xl shadow-2xl flex flex-col justify-center items-center relative'>
        <img src={cartEmptyIcon} alt='cart-empty-icon' className='w-[150px]' />
        <div className='text-center uppercase font-bold text-white text-2xl flex flex-row gap-2 flex-nowrap justify-center items-center'>
          <p>Корзина пустая</p>
          <img src={sadSmileIcon} alt='...' className='w-full max-w-[32px]' />
        </div>
        <button
          onClick={() => props.setShow(false)}
          className='absolute top-4 right-4'
        >
          <img
            className='w-full max-w-[32px]'
            src={closeIcon}
            alt='close-icon'
          />
        </button>
      </div>
    </div>
  );
};

export default CartEmpty;
