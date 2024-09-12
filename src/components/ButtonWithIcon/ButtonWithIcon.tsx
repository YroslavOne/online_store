import styles from './ButtonWithIcon.module.css';
import cn from "classnames";
import { ButtonWithIconProps } from './ButtonWithIcon.props';



function ButtonWithIcon({children, className, image, ...props}: ButtonWithIconProps) {
	return(
		<button className={cn(styles['button'],styles['accent'], className)} {...props}>
			<img src={image} alt="" />
			{children}
		</button>
	);
}

export default ButtonWithIcon;