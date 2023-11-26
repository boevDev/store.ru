import { useEffect, useState } from 'react';
import { getProducts } from '../../services/api.js';
import { Link } from 'react-router-dom';
import { catalogData } from '../../utils/catalogData.js';

const CatalogsList = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    getProducts()
      .then((item) => {
        setList(item);
      })
      .catch((err) => console.log(err));
  }, []);

  return list.length ? (
    <div className='font-roboto text-5xl text-black py-10 h-screen'>
      <div className='pb-5 font-light'>Выберите каталог: </div>
      <div className='grid lg:grid-cols-2 gap-10'>
        {catalogData.map((item) => {
          return (
            <Link
              to={`/catalog/${item.en}`}
              key={item.en}
              className='p-10 font-bold text-center justify-between bg-primary rounded-xl text-black shadow-md hover:shadow-lg transition-all uppercase'
            >
              {item.ru}
            </Link>
          );
        })}
      </div>
    </div>
  ) : (
    <p className='font-bold text-5xl absolute top-[45%] left-[45%] text-black'>
      Загрузка...
    </p>
  );
};

export default CatalogsList;
