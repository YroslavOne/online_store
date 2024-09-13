import { Suspense } from "react";
import { Await, useLoaderData, useNavigate } from "react-router-dom";
import { Product } from "../../interfaces/product.interface";
import Headling from "../../components/Headling/Headling";
import ButtonWithIcon from "../../components/ButtonWithIcon/ButtonWithIcon";
import styles from "./Product.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart.slice";

export function Product() {
  const data = useLoaderData() as { data: Product };
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <>
      <Suspense fallback={"Загружаю..."}>
        <Await resolve={data.data}>
          {({ data }: { data: Product }) => (
            <div key={data.id}>
              <div className={styles["header"]}>
                <div className={styles["button-and-title"]}>
                  <button
                    className={styles["arrow"]}
                    onClick={() => navigate("")}
                  >
                    <img src="/online_store/arrow.png" alt="" />
                  </button>
                  <Headling>{data.name} </Headling>
                </div>
                <ButtonWithIcon
                  className={styles["button"]}
                  onClick={() => dispatch(cartActions.add(data.id))}
                  image="/online_store/cart.png"
                >
                  В корзину
                </ButtonWithIcon>
              </div>
              <div className={styles["contant"]}>
                <img className={styles["image"]} src={data.image} alt="" />
                <div className={styles["description"]}>
                  <div className={styles["container-description"]}>
                    <div className={styles["title"]}>Цена</div>
                    <div className={styles["price"]}>
                      {data.price} <span>₽</span>
                    </div>
                  </div>
                  <hr className={styles["hr"]} />
                  <div className={styles["container-description"]}>
                    <div className={styles["title"]}>Рейтинг</div>
                    <div className={styles["container-rating"]}>
                      <div className={styles["rating"]}>
                        {data.rating}
                        <img
                          className={styles["star"]}
                          src="/online_store/star.png"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles["container-compound"]}>
                    <div className={styles["title-ul"]}>Состав</div>
                    <ul className={styles["ul"]}>
                      {data.ingredients.map((i, index) => (
                        <li key={index}>{i}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Await>
      </Suspense>
    </>
  );
}
