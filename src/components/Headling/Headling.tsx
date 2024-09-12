import { ButtonProps } from '../Button/Button.props';
import styles from './Headling.module.css';
import cn from 'classnames';

function Headling({ children, className, ...props }: ButtonProps) {
  return (
    <h1 className={cn(styles['h1'], className)} {...props}>
      {children}
    </h1>
  );
}
export default Headling;
