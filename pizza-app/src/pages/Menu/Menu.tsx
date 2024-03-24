import axios, { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import Headling from '../../components/Headling/Headling';
import Search from '../../components/Search/Search';
import { PREFIX } from '../../helpers/API';
import { Product } from '../../interfaces/product.interface';
import styles from './Menu.module.css';
import { MenuList } from './MenuList/MenuList';

function Menu() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>(undefined);

  const getMenu = async () => {
    try {
      await new Promise<void>((resolve) => {
        setIsLoading(true);
        resolve();
      });
      const { data } = await axios.get<Product[]>(`${PREFIX}/products`);
      setProducts(data);
      setIsLoading(false);
      setError(undefined);
    } catch (e) {
      console.error(e);
      if (e instanceof AxiosError) {
        setError(e.message);
      }
      setIsLoading(false);
      return;
    }
  };

  useEffect(() => {
    getMenu();
  }, []);

  return (
    <>
      <div className={styles['head']}>
        <Headling>MENU</Headling>
        <Search placeholder="Введите блюдо или состав" />
      </div>
      <div>
        {error && <>{error}</>}
        {!isLoading && <MenuList products={products} />}
        {isLoading && <>Загружаем продукты...</>}
      </div>
    </>
  );
}

export default Menu;
