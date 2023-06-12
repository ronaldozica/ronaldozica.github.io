import { useEffect, useState } from "react";
import Product, { ProductType } from "../Product/Product";
import "./Products.css";
import LoadingProduct from "../LoadingProduct/LoadingProduct";

export default function Products() {
	const [products, setProducts] = useState<ProductType[] | null>(null);

	useEffect(() => {
		setTimeout(() => {
			setProducts([{},{},{},{},{},{},{},{}]);
		}, 4000);
	})

	return (
		<div>
			<div className="ProductList">
				{!products || !products.length
					? Array.from({ length: 8 }, (_, i) => i + 1).map((id) => (
							<LoadingProduct></LoadingProduct>
					  ))
					: products.map((product) => <Product {...product} />)}
			</div>
		</div>
	);
}
