import styles from "./Headling.module.css";
import cn from "classnames";
import { HeadlingProps } from "./Headling.props";

function Headling({ children, className, ...props }: HeadlingProps) {
  return (
    <h1 className={cn(styles["h1"], className)} {...props}>
      {children}
    </h1>
  );
}
export default Headling;
