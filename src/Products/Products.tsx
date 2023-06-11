import { useState } from "react";
import Product, { ProductType } from "../Product/Product";
import "./Products.css";

export default function Products() {
    const [products, setProducts] = useState<ProductType[] | null>(null);

	return (
		<div>
			<div className="ProductList">
				<Product />
				<Product />
				<Product />
				<Product /> 
                <Product />
				<Product />
				<Product />
				<Product />
			</div>
		</div>
	);
}
