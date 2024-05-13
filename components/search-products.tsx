"use client"

import React, { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { AlertCircle } from "lucide-react"

import Product from "./product"
import { Alert, AlertDescription, AlertTitle } from "./ui/alert"
import { useToast } from "./ui/use-toast"

export function SearchProducts() {
    const searchParams = useSearchParams()
    const query = searchParams.get("query")
    const { toast } = useToast()

    const [products, setProducts] = useState<any>(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        ; (async () => {
            const response = await fetch("/api/productsSearch", {
                method: "POST",
                body: JSON.stringify({
                    query: query,
                }),
            })

            const resultProducts = await response.json()

            if (!resultProducts || !resultProducts.length) {
                toast({
                    variant: "destructive",
                    title: "Erro ao pesquisar produtos",
                    description: "Nenhum produto corresponde a sua pesquisa",
                })
            }

            setProducts(resultProducts)
            setIsLoading(false)
        })()
    }, [query, toast])

    return (
        <>
            {products && products.length > 0 ? (
                products.map((product: any) => (
                    <div key={product.id}>
                        <Product
                            id={product.id}
                            title={product.title}
                            caption={product.caption}
                            price={product.price}
                            permalink={product.permalink}
                        />
                    </div>
                ))
            ) : isLoading ? (
                <></>
            ) : (
                <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Erro</AlertTitle>
                    <AlertDescription>
                        Não foi possível carregar produtos com a sua pesquisa
                    </AlertDescription>
                </Alert>
            )}
        </>
    )
}
