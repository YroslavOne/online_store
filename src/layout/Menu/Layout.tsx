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
    navigate("/online_store/auth/login");
  };

  useEffect(() => {
  }, [location]);
const openMenu = ()=>{
  setMenuOpen(!menuOpen);
  console.log(menuOpen);
}
  return (
    <div className={styles["layout"]}>
      <button onClick={openMenu} className={styles["menu-button"]}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div className={styles["sidebar"]} style={{ display: menuOpen ? 'flex' : 'none' }}>
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
