"use client"

import React from "react"
import Image from "next/image"
import { Instagram, PlusSquare } from "lucide-react"

import ProductModal, { ProductType } from "./product-modal"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "./ui/dialog"

export const tags = [
    {
        name: "Divino",
        id: "divino",
        backgroundColor: "#dcdeca"
    },
    {
        name: "Mandala",
        id: "mandala",
        backgroundColor: "#d9c6a5"
    },
    {
        name: "Madeira",
        id: "madeira",
        backgroundColor: "#d19e38"
    },
    {
        name: "Mdf",
        id: "mdf",
        backgroundColor: "#a18047"
    },
    {
        name: "Natal",
        id: "natal",
        backgroundColor: "#d13848"
    },
    {
        name: "Tecido",
        id: "tecido",
        backgroundColor: "#8a8a88"
    },
    {
        name: "Páscoa",
        id: "páscoa",
        backgroundColor: "#f4f5ed"
    }
];

export default function Product({
    id,
    caption,
    media_product_type,
    media_type,
    media_url,
    permalink
}: ProductType) {
    return (
        <>
            <Dialog>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Comprar produto</DialogTitle>
                        <ProductModal
                            id={id}
                            caption={caption}
                            media_product_type={media_product_type}
                            media_type={media_type}
                            media_url={media_url}
                            permalink={permalink}
                        />
                    </DialogHeader>
                </DialogContent>
                <div className="mx-auto max-w-lg">
                    <div className="max-w-sm rounded-lg bg-white shadow-md dark:border-gray-700 dark:bg-gray-800">
                        <DialogTrigger className="w-full">
                            <Image
                                src={media_url!}
                                className="aspect-square w-full rounded-[40px] object-cover p-8"
                                alt={`product image_${id}`}
                                width={300}
                                height={300}
                            />
                        </DialogTrigger>
                        <div className="px-5 pb-5">
                            <DialogTrigger>
                                <div>
                                    <h3 className="line-clamp-3 min-h-[80px] text-left text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                        {caption?.split("\n")[0]}
                                    </h3>
                                </div>
                                <div className="mb-5 mt-2.5 flex items-center">
                                    {
                                        tags.map(tag => {
                                            if (caption?.toLowerCase().match(tag.id)) {
                                                return (
                                                    <div
                                                        key={tag.id}
                                                        className="mx-auto flex items-center justify-center rounded-lg bg-green-200 px-2 py-1"
                                                        style={{ backgroundColor: tag.backgroundColor }}
                                                    >
                                                        <span className="text-xs font-semibold text-white">
                                                            {tag.name}
                                                        </span>
                                                    </div>
                                                )
                                            }
                                        })
                                    }
                                </div>
                            </DialogTrigger>
                            <div className="flex items-center justify-end gap-2">
                                {permalink && (
                                    <a target="_blank" rel="noopener noreferrer" href={permalink}>
                                        <Instagram />
                                    </a>
                                )}
                                <PlusSquare />
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href={`https://api.whatsapp.com/send?phone=1531998648448&text=Olá!%20Gostaria%20de%20saber%20a%20disponibilidade%20do%20produto:%20${permalink}`}
                                    className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    Comprar
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </Dialog>
        </>
    )
}
