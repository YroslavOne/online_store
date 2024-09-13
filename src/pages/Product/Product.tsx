import { Suspense } from "react";
import { Await, useLoaderData, useNavigate } from "react-router-dom";
import { Product as ProductType } from "../../interfaces/product.interface";
import Headling from "../../components/Headling/Headling";
import ButtonWithIcon from "../../components/ButtonWithIcon/ButtonWithIcon";
import styles from "./Product.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart.slice";

export function Product() {
  const { data } = useLoaderData() as { data: ProductType };
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className={styles["product"]}>
      <Suspense fallback={"Загружаю..."}>
        <Await resolve={data}>
          {(product: ProductType) => (
            <div key={product.id}>
              <div className={styles["header"]}>
                <div className={styles["button-and-title"]}>
                  <button
                    className={styles["arrow"]}
                    onClick={() => navigate("/online_store/")}
                  >
                    <img src="/online_store/arrow.png" alt="Back" />
                  </button>
                  <Headling>{product.name}</Headling>
                </div>
                <ButtonWithIcon
                  className={styles["button"]}
                  onClick={() => dispatch(cartActions.add(product.id))}
                  image="/online_store/cart.png"
                >
                  В корзину
                </ButtonWithIcon>
              </div>
              <div className={styles["contant"]}>
                <img
                  className={styles["image"]}
                  src={product.image}
                  alt={product.name}
                />
                <div className={styles["description"]}>
                  <div className={styles["container-description"]}>
                    <div className={styles["title"]}>Цена</div>
                    <div className={styles["price"]}>
                      {product.price} <span>₽</span>
                    </div>
                  </div>
                  <hr className={styles["hr"]} />
                  <div className={styles["container-description"]}>
                    <div className={styles["title"]}>Рейтинг</div>
                    <div className={styles["container-rating"]}>
                      <div className={styles["rating"]}>
                        {product.rating}
                        <img
                          className={styles["star"]}
                          src="/online_store/star.png"
                          alt="Star"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles["container-compound"]}>
                    <div className={styles["title-ul"]}>Состав</div>
                    <ul className={styles["ul"]}>
                      {product.ingredients.map((i, index) => (
                        <li key={index}>{i}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <ButtonWithIcon
                  className={styles["button-mob"]}
                  onClick={() => dispatch(cartActions.add(product.id))}
                  image="/online_store/cart.png"
                >
                  В корзину
                </ButtonWithIcon>
              </div>
            </div>
          )}
        </Await>
      </Suspense>
    </div>
  );
}
