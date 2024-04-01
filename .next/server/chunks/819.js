"use strict";
exports.id = 819;
exports.ids = [819];
exports.modules = {

/***/ 8680:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Product),
  tags: () => (/* binding */ tags)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(2451);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/cjs/lucide-react.js
var lucide_react = __webpack_require__(1158);
;// CONCATENATED MODULE: ./components/product-modal.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 




function ProductModal({ id, caption, media_product_type, media_type, media_url, permalink }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "rounded-lg bg-white shadow-md dark:border-gray-700 dark:bg-gray-800",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: media_url,
                        className: "aspect-square w-full rounded-[40px] object-cover p-8",
                        alt: `product image_${id}`,
                        width: 300,
                        height: 300
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "px-5 pb-5",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    className: "text-left text-xl font-semibold tracking-tight text-gray-900 dark:text-white",
                                    children: caption?.split("\n")[0]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "mb-5 mt-2.5 flex items-center",
                                children: tags.map((tag)=>{
                                    if (caption?.toLowerCase().match(tag.id)) {
                                        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "mx-auto flex items-center justify-center rounded-lg bg-green-200 px-2 py-1",
                                            style: {
                                                backgroundColor: tag.backgroundColor
                                            },
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "text-xs font-semibold text-white",
                                                children: tag.name
                                            })
                                        }, tag.id);
                                    }
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex items-center justify-end gap-2",
                                children: [
                                    permalink && /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        href: permalink,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(lucide_react/* Instagram */.mre, {})
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(lucide_react/* PlusSquare */.gIb, {}),
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        rel: "noopener noreferrer",
                                        href: `https://api.whatsapp.com/send?phone=1531998648448&text=Olá!%20Gostaria%20de%20saber%20a%20disponibilidade%20do%20produto:%20${permalink}`,
                                        target: "_blank",
                                        className: "rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
                                        children: "Comprar"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
}

// EXTERNAL MODULE: ./node_modules/@radix-ui/react-dialog/dist/index.mjs
var dist = __webpack_require__(7589);
// EXTERNAL MODULE: ./lib/utils.ts
var utils = __webpack_require__(2857);
;// CONCATENATED MODULE: ./components/ui/dialog.tsx
/* __next_internal_client_entry_do_not_use__ Dialog,DialogTrigger,DialogContent,DialogHeader,DialogFooter,DialogTitle,DialogDescription auto */ 




const Dialog = dist/* Root */.fC;
const DialogTrigger = dist/* Trigger */.xz;
const DialogPortal = ({ className, ...props })=>/*#__PURE__*/ jsx_runtime_.jsx(dist/* Portal */.h_, {
        className: (0,utils.cn)(className),
        ...props
    });
DialogPortal.displayName = dist/* Portal */.h_.displayName;
const DialogOverlay = /*#__PURE__*/ react_.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx(dist/* Overlay */.aV, {
        ref: ref,
        className: (0,utils.cn)("fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
        ...props
    }));
DialogOverlay.displayName = dist/* Overlay */.aV.displayName;
const DialogContent = /*#__PURE__*/ react_.forwardRef(({ className, children, ...props }, ref)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(DialogPortal, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(DialogOverlay, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(dist/* Content */.VY, {
                ref: ref,
                className: (0,utils.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg md:w-full", className),
                ...props,
                children: [
                    children,
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(dist/* Close */.x8, {
                        className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(lucide_react.X, {
                                className: "h-4 w-4"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "sr-only",
                                children: "Close"
                            })
                        ]
                    })
                ]
            })
        ]
    }));
DialogContent.displayName = dist/* Content */.VY.displayName;
const DialogHeader = ({ className, ...props })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (0,utils.cn)("flex flex-col space-y-1.5 text-center sm:text-left", className),
        ...props
    });
DialogHeader.displayName = "DialogHeader";
const DialogFooter = ({ className, ...props })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (0,utils.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
        ...props
    });
DialogFooter.displayName = "DialogFooter";
const DialogTitle = /*#__PURE__*/ react_.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx(dist/* Title */.Dx, {
        ref: ref,
        className: (0,utils.cn)("text-lg font-semibold leading-none tracking-tight", className),
        ...props
    }));
DialogTitle.displayName = dist/* Title */.Dx.displayName;
const DialogDescription = /*#__PURE__*/ react_.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx(dist/* Description */.dk, {
        ref: ref,
        className: (0,utils.cn)("text-sm text-muted-foreground", className),
        ...props
    }));
DialogDescription.displayName = dist/* Description */.dk.displayName;


;// CONCATENATED MODULE: ./components/product.tsx
/* __next_internal_client_entry_do_not_use__ tags,default auto */ 





const tags = [
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
        name: "P\xe1scoa",
        id: "p\xe1scoa",
        backgroundColor: "#f4f5ed"
    }
];
function Product({ id, caption, media_product_type, media_type, media_url, permalink }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Dialog, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(DialogContent, {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(DialogHeader, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(DialogTitle, {
                                children: "Comprar produto"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(ProductModal, {
                                id: id,
                                caption: caption,
                                media_product_type: media_product_type,
                                media_type: media_type,
                                media_url: media_url,
                                permalink: permalink
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "mx-auto max-w-lg",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "max-w-sm rounded-lg bg-white shadow-md dark:border-gray-700 dark:bg-gray-800",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(DialogTrigger, {
                                className: "w-full",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: media_url,
                                    className: "aspect-square w-full rounded-[40px] object-cover p-8",
                                    alt: `product image_${id}`,
                                    width: 300,
                                    height: 300
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "px-5 pb-5",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(DialogTrigger, {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                    className: "line-clamp-3 min-h-[80px] text-left text-xl font-semibold tracking-tight text-gray-900 dark:text-white",
                                                    children: caption?.split("\n")[0]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "mb-5 mt-2.5 flex items-center",
                                                children: tags.map((tag)=>{
                                                    if (caption?.toLowerCase().match(tag.id)) {
                                                        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "mx-auto flex items-center justify-center rounded-lg bg-green-200 px-2 py-1",
                                                            style: {
                                                                backgroundColor: tag.backgroundColor
                                                            },
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "text-xs font-semibold text-white",
                                                                children: tag.name
                                                            })
                                                        }, tag.id);
                                                    }
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "flex items-center justify-end gap-2",
                                        children: [
                                            permalink && /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                href: permalink,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(lucide_react/* Instagram */.mre, {})
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(lucide_react/* PlusSquare */.gIb, {}),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                href: `https://api.whatsapp.com/send?phone=1531998648448&text=Olá!%20Gostaria%20de%20saber%20a%20disponibilidade%20do%20produto:%20${permalink}`,
                                                className: "rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
                                                children: "Comprar"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    });
}


/***/ }),

/***/ 9422:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  SearchBar: () => (/* binding */ SearchBar)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(7114);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/cjs/lucide-react.js
var lucide_react = __webpack_require__(1158);
// EXTERNAL MODULE: ./components/ui/button.tsx
var ui_button = __webpack_require__(4368);
// EXTERNAL MODULE: ./lib/utils.ts
var utils = __webpack_require__(2857);
;// CONCATENATED MODULE: ./components/ui/input.tsx



const Input = /*#__PURE__*/ react_.forwardRef(({ className, type, ...props }, ref)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("input", {
        type: type,
        className: (0,utils.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", className),
        ref: ref,
        ...props
    });
});
Input.displayName = "Input";


;// CONCATENATED MODULE: ./components/search-bar.tsx
/* __next_internal_client_entry_do_not_use__ SearchBar auto */ 





function SearchBar() {
    const { push } = (0,navigation.useRouter)();
    const [query, setQuery] = (0,react_.useState)("");
    const handleSearch = ()=>{
        push(`/search?query=${query}`);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "relative flex w-full items-center space-x-2",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Input, {
                value: query,
                onChange: (e)=>setQuery(e.target.value),
                className: "w-full",
                type: "search",
                placeholder: "Pesquisar"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ui_button/* Button */.z, {
                onClick: handleSearch,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(lucide_react/* Search */.olm, {
                        className: "mr-2 h-4 w-4"
                    }),
                    "Pesquisar"
                ]
            })
        ]
    });
}


/***/ }),

/***/ 3094:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ e0)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/home/ronaldozica/Documents/CEFET/artesdajackeline/components/search-bar.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["SearchBar"];


/***/ })

};
;