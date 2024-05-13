"use client"

import React from "react"
import Image from "next/image"
import { Instagram, PlusSquare } from "lucide-react"
import { tags } from "./product"

export interface ProductType {
    id: string,
    caption?: string,
    media_url?: string,
    permalink?: string
}

export default function ProductModal({
    id,
    caption,
    media_url,
    permalink
}: ProductType) {
    return (
        <>
            <div>
                <div className="rounded-lg bg-white shadow-md dark:border-gray-700 dark:bg-gray-800">
                    <Image
                        src={require(`../public/${id}.png`)}
                        className="aspect-square w-full rounded-[40px] object-cover p-8"
                        alt={`product image_${id}`}
                        width={300}
                        height={300}
                    />
                    <div className="px-5 pb-5">
                        <div>
                            <h3 className="text-left text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
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
                        <div className="flex items-center justify-end gap-2">
                            {permalink && (
                                <a target="_blank" rel="noopener noreferrer" href={permalink}>
                                    <Instagram />
                                </a>
                            )}
                            <PlusSquare />
                            <a
                                rel="noopener noreferrer"
                                href={`https://api.whatsapp.com/send?phone=1531998648448&text=Olá!%20Gostaria%20de%20saber%20a%20disponibilidade%20do%20produto:%20${permalink}`}
                                target="_blank"
                                className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                Comprar
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
