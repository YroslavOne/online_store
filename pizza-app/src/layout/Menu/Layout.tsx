import { useEffect } from 'react';
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import styles from './Layout.module.css';
import cn from 'classnames';
import { useDispatch } from 'react-redux';
import { AppDispath } from '../../store/store';
import { userActions } from '../../store/user.slice';

export function Layout() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch<AppDispath>();

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
          <div className={styles['name']}>Ярослав Берилло</div>
          <div className={styles['email']}>yaroslavB@gmail.com</div>
        </div>
        <div className={styles['menu']}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              cn(styles['link'], {
                [styles.active]: isActive,
              })
            }
          >
            <img src="/menu-icon.png" alt="" />
            Menu
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              cn(styles['link'], {
                [styles.active]: isActive,
              })
            }
          >
            <img src="/cart-icon.png" alt="" />
            Cart
          </NavLink>
        </div>
        <Button onClick={logout} className={styles['exit']}>
          <img src="/exit-icon.png" alt="" />
          Выход
        </Button>
      </div>

      <div className={styles['content']}>
        <Outlet />
      </div>
    </div>
  );
}
