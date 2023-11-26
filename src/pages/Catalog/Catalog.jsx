import { useEffect, useState } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard.jsx';
import { getProducts } from '../../services/api.js';
import { Link, useParams } from 'react-router-dom';
import { catalogData } from '../../utils/catalogData.js';

const Catalog = () => {
  const [list, setList] = useState();

  const { category } = useParams();

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
    getProducts()
      .then((item) => {
        setList(item.find((product) => product.id === categoryId()).colors);
      })
      .catch((err) => console.log(err));
  }, []);

  return list ? (
    <div className='font-roboto text-5xl text-black py-5'>
      <div className='py-4 font-thin text-xl'>
        <Link to={'/'} className='hover:text-black text-grey'>
          Главная
        </Link>
        &nbsp;/ {catalogData.find((item) => item.en === category).ru}
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5'>
        {list.map((item) => {
          return <ProductCard {...item} key={item.id} />;
        })}
      </div>
    </div>
  ) : (
    <p className='font-bold text-5xl absolute top-[45%] left-[45%] text-black'>
      Загрузка...
    </p>
  );
};

export default Catalog;
