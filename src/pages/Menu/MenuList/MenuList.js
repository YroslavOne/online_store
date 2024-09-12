import { jsx as _jsx } from "react/jsx-runtime";
import ProductCard from '../../../components/ProductCard/ProductCard';
import styles from './MenuList.module.css';
export function MenuList(_a) {
    var products = _a.products;
    return (_jsx("div", { className: styles['wrapper'], children: products.map(function (product) { return (_jsx(ProductCard, { id: product.id, title: product.name, description: product.ingredients.join(', '), price: product.price, rating: product.rating, image: product.image }, product.id)); }) }));
}
