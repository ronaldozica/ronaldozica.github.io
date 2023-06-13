import { useEffect, useState } from "react";
import Product, { ProductType } from "../Product/Product";
import "./Products.css";
import LoadingProduct from "../LoadingProduct/LoadingProduct";

export default function Products() {
	const [products, setProducts] = useState<ProductType[] | null>(null);

	useEffect(() => {
		setTimeout(() => {
			setProducts(Array.from({ length: 8 }, (_, i) => i + 1).map((id) => (
                {
                    imageUrl: getLocalUrl(id - 1)
                }
          )));
		}, 100);
	})

	return (
		<div>
			<div className="ProductList">
				{!products || !products.length
					? Array.from({ length: 8 }, (_, i) => i + 1).map((id) => (
							<LoadingProduct key={id}/>
					  ))
					: products.map((product, index) => <Product {...product} key={index} />)}
			</div>
		</div>
	);
}

const localProducts = [
    "https://cdn.discordapp.com/attachments/912368313508712488/1118136806756581428/produto1.png",
    "https://cdn.discordapp.com/attachments/912368313508712488/1118136807025029221/produto2.png",
    "https://cdn.discordapp.com/attachments/912368313508712488/1118136807251513354/produto3.png",
    "https://cdn.discordapp.com/attachments/912368313508712488/1118136807490584588/produto4.png",
    "https://cdn.discordapp.com/attachments/912368313508712488/1118136807750643742/produto5.png",
    "https://cdn.discordapp.com/attachments/912368313508712488/1118136808048431104/produto6.png",
    "https://cdn.discordapp.com/attachments/912368313508712488/1118136808392372234/produto7.png",
    "https://cdn.discordapp.com/attachments/912368313508712488/1118136808685965312/produto8.png"
];

function getLocalUrl(id: number) {
    return localProducts[id];
}
