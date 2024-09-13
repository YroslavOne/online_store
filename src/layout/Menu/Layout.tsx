import { useEffect, useState } from "react";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import ButtonWithIcon from "../../components/ButtonWithIcon/ButtonWithIcon";
import styles from "./Layout.module.css";
import cn from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { AppDispath, RootState } from "../../store/store";
import { getProfile, userActions } from "../../store/user.slice";

export function Layout() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [smallerWidth, setSmallerWidth] = useState(false)
  const [width, setWidth] = useState(window.innerWidth);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch<AppDispath>();
  const profile = useSelector((s: RootState) => s.user.profile);
  const items = useSelector((s: RootState) => s.cart.items);

  useEffect(() => {
    const handleResize = (event) => {
      setWidth(event.target.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if(width<1000){
      setSmallerWidth(true)
    } else{
      setSmallerWidth(false)

    }
  }, [width]);

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  const logout = () => {
    dispatch(userActions.logout());
    navigate("/online_store/auth/login");
  };

  useEffect(() => {
  }, [location]);
const openMenu = ()=>{
  setMenuOpen(!menuOpen);
}
  return (
    <div className={styles["layout"]}>
      <button onClick={openMenu} className={styles["menu-button"]}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div style={smallerWidth ? { display: menuOpen ? 'flex' : 'none' } : {}} className={styles["sidebar"]} >
        <div className={styles["user"]}>
          <img src="/online_store/avatar.png" alt="" />
          <div className={styles["name"]}>{profile?.name}</div>
          <div className={styles["email"]}>{profile?.email}</div>
        </div>
        <div className={styles["menu"]}>
          <NavLink
            to=""
            className={({ isActive }) =>
              cn(styles["link"], {
                [styles.active]: isActive,
              })
            }
          >
            <img src="/online_store/menu-icon.png" alt="" />
            Меню
          </NavLink>
          <NavLink
            to="/online_store/cart"
            className={({ isActive }) =>
              cn(styles["link"], {
                [styles.active]: isActive,
              })
            }
          >
            <img src="/online_store/cart-icon.png" alt="" />
            Корзина{" "}
            <span className={styles["cart-count"]}>
              {items.reduce((acc, item) => (acc += item.count), 0)}
            </span>
          </NavLink>
        </div>
        <ButtonWithIcon className={styles["exit"]} onClick={logout} image="/online_store/exit-icon.png">
          Выход
        </ButtonWithIcon>
      </div>

      <div className={styles["content"]}>
        <Outlet />
      </div>
    </div>
  );
}
