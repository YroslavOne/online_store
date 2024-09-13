import { Link } from "react-router-dom";
import styles from "./ProductCard.module.css";
import { ProductCardProps } from "./ProductCard.props";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart.slice";

function ProductCard({
  title,
  description,
  price,
  rating,
  image,
  id,
}: ProductCardProps) {
  const dispatch = useDispatch();
  const add = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(cartActions.add(id));
  };

  return (
    <Link to={`/online_store/product/${id}`} className={styles["link"]}>
      <div className={styles["card"]} key={id}>
        <div className={styles["head"]}>
          <div className={styles["price"]}>
            {price} <span className={styles["currency"]}>₽</span>
          </div>
          <button className={styles["add-to-cart"]} onClick={add}>
            <img src="/online_store/cart.png" />
          </button>

          <img className={styles["img"]} src={image} />
          <div className={styles["rating"]}>
            {rating}
            <img className={styles["star"]} src="/online_store/star.png" />
          </div>
        </div>
        <div className={styles["footer"]}>
          <div className={styles["title"]}>{title}</div>
          <div className={styles["description"]}>{description}</div>
        </div>
      </div>
    </Link>
  );
}
export default ProductCard;
