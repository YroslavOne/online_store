import { useEffect } from 'react';
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import ButtonWithIcon from '../../components/ButtonWithIcon/ButtonWithIcon';
import styles from './Layout.module.css';
import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispath, RootState } from '../../store/store';
import { getProfile, userActions } from '../../store/user.slice';

export function Layout() {
	const navigate = useNavigate();
	const location = useLocation();
	const dispatch = useDispatch<AppDispath>();
	const profile = useSelector((s: RootState) => s.user.profile);
	const items = useSelector((s: RootState) => s.cart.items);

	useEffect(() => {
		dispatch(getProfile());
	}, [dispatch]);

	const logout = () => {
		dispatch(userActions.logout());
		navigate('/auth/login');
	};

	useEffect(() => {
		console.log('location');
	}, [location]);

	return (
		<div className={styles['layout']}>
			<div className={styles['sidebar']}>
				<div className={styles['user']}>
					<img src="/avatar.png" alt="" />
					<div className={styles['name']}>{profile?.name}</div>
					<div className={styles['email']}>{profile?.email}</div>
				</div>
				<div className={styles['menu']}>
					<NavLink
						to="/"
						className={({ isActive }) =>
							cn(styles['link'], {
								[styles.active]: isActive
							})
						}
					>
						<img src="/menu-icon.png" alt="" />
            Меню
					</NavLink>
					<NavLink
						to="/cart"
						className={({ isActive }) =>
							cn(styles['link'], {
								[styles.active]: isActive
							})
						}
					>
						<img src="/cart-icon.png" alt="" />
            Корзина <span className={styles["cart-count"]}>{items.reduce((acc, item) => (acc += item.count), 0)}</span>
					</NavLink>
					
				</div>
				<ButtonWithIcon onClick={logout} image="/exit-icon.png">
          Выход
				</ButtonWithIcon>
			</div>

			<div className={styles['content']}>
				<Outlet />
			</div>
		</div>
	);
}
