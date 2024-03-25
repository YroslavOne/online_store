import { useSelector } from "react-redux";
import Headling from "../../components/Headling/Headling";
import { RootState } from "../../store/store";
import CartItem from "../../components/CartItem/CartItem";
import { useEffect, useState } from "react";
import { Product } from "../../interfaces/product.interface";
import axios from "axios";
import { PREFIX } from "../../helpers/API";
import styles from './Cart.module.css';
import Button from "../../components/Button/Button";

export function Cart() {
	const [cartProducts, setCartProducts] = useState<Product[]>([]);
	const items = useSelector((s: RootState)=> s.cart.items);
	const DELIVERY_FEE = 169;
	const total = items.map(i=>{
		const product = cartProducts.find(p=>p.id===i.id);
		if(!product){
			return;
		}
		return i.count*product.price;
	}).reduce((acc, i)=>acc+=i, 0);


	const getItem = async(id: number)=>{
		const { data } = await axios.get<Product>(`${PREFIX}/products/${id}`);
		return data;
	};

	const loadAllItems = async () => {
		const res = await Promise.all(items.map(i=>getItem(i.id)));
		setCartProducts(res);
	};
	useEffect(()=>{
		loadAllItems();
	}, [items]);


	return (<>
		<Headling> Корзина</Headling>
		{items.map(i=>{
			const product = cartProducts.find(p=>p.id===i.id);
			if(!product){
				return;
			}
			return <CartItem key={i.id} count={i.count} {...product}/>;
		})}
		<div className={styles['line']}>
			<div className={styles['text']}>Итог</div>
			<div className={styles['price']}>{total} ₽</div>
		</div>
		<hr className={styles['hr']}/>
		<div className={styles['line']}>
			<div className={styles['text']}>Доставка</div>
			<div className={styles['price']}>{DELIVERY_FEE} ₽</div>
		</div>
		<hr className={styles['hr']}/>
		<div className={styles['line']}>
			<div className={styles['text']}>Итог <span className={styles['total-count']}>(2)</span></div>
			<div className={styles['price']}>{DELIVERY_FEE+ total} ₽</div>
		</div>
		<hr className={styles['hr']}/>
		<div className={styles['checkout']}>
    
			<Button appearence="big" className={styles['checkout']}>оформить</Button>
		</div>
	</>);
}
