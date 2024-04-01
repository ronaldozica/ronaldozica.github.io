import React from "react"
import Product from "./product"
import productsData from '../public/productsFile.json';
import { ProductType } from "./product-modal";

interface Props {
    amount: number
}

export function Products({ amount }: Props) {
    const products: ProductType[] = productsData.slice(0, amount);

    return (
        <>
            {products.map((product) => (
                <Product
                    id={product.id}
                    caption={product.caption}
                    media_product_type={product.media_product_type}
                    media_type={product.media_type}
                    media_url={product.media_url}
                    permalink={product.permalink}
                />
            ))}
        </>
    )
}
