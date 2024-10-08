import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart.slice';
import styles from './CartItem.module.css';
import { CartItemProps } from './CartItem.props';

function CartItem(props: CartItemProps){
	const dispatch = useDispatch();

	const increase = () => {
		dispatch(cartActions.add(props.id));
	};
	const discrease = () => {
		dispatch(cartActions.remove(props.id));
	};
	const remove = () => {
		dispatch(cartActions.delete(props.id));
	};
	return(
		<div className={styles['item']}>
			<div className={styles['image']} style={{background: `url('${props.image}')`}}></div>
			<div className={styles['description']}>
				<div className={styles["name"]}>{props.name}</div>
				 <div className={styles['price']}>{props.price}&nbsp; ₽</div>
			</div>
			<div className={styles['actions']}>
				<button className={styles['minus']} onClick={discrease}>
					<img src="/online_store/minus.svg" />
				</button>
				<div className={styles['number']}>{props.count}</div>
				<button className={styles['plus']} onClick={increase}>
					<img src="/online_store/plus.svg" />
				</button>
				<button className={styles['remove']} onClick={remove}>
					<img src="/online_store/remove.png" />
				</button>
			</div>
		</div>
	);
}
export default CartItem;