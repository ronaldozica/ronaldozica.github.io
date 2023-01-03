import Product from '../Product/Product';
import './Products.css';

export default function Products() {
    return (
        <div>
            <div className="ProductList">
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
            <div className="ProductListBottom">
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
        </div>
    );
}  