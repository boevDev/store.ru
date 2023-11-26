import { useNavigate, useParams } from 'react-router';
import { Link } from 'react-router-dom';

const ProductCard = (props) => {
  const navigate = useNavigate();

  const { category } = useParams();

  return (
    <div className=' bg-primary rounded-b-xl text-black shadow-xl hover:scale-[101%] transition-all'>
      <img
        src={props.images[0]}
        alt='img'
        onClick={() => navigate(`../product/${category}/${props.id}`)}
        className='cursor-pointer'
      />
      <div className='p-5 flex flex-col gap-4 justify-between'>
        <div className='font-bold text-2xl'>{props.price} &#8381;</div>
        <div className='text-lg'>Цвет: {props.name}</div>
        <div className='flex flex-col justify-between gap-2 whitespace-nowrap'>
          <button
            className='bg-pink-3 py-2 rounded-xl font-bold text-base text-white shadow-md hover:text-pink-3 hover:bg-white hover:shadow-xl active:scale-90 transition-all'
            onClick={() => navigate(`../product/${category}/${props.id}`)}
          >
            Подробнее
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
