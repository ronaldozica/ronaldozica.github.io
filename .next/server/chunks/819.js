exports.id = 819;
exports.ids = [819];
exports.modules = {

/***/ 6467:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./1.png": 2677,
	"./2.png": 9202,
	"./about.png": 7519,
	"./about_wood.png": 9686,
	"./card_1.png": 5809,
	"./card_2.png": 4154,
	"./card_3.png": 345,
	"./carousel_christmas_1.png": 2420,
	"./carousel_christmas_1_mobile.png": 3805,
	"./carousel_christmas_2.png": 8509,
	"./carousel_christmas_2_mobile.png": 9974,
	"./carousel_christmas_3.png": 3414,
	"./carousel_christmas_3_mobile.png": 7187,
	"./carousel_mobile_christmas_3.png": 6210,
	"./carousel_wood_1.png": 5676,
	"./carousel_wood_2.png": 5950,
	"./carousel_wood_3.png": 9311,
	"./faq.png": 9794,
	"./faq_wood.png": 5869,
	"./favicon.png": 7514,
	"./footer.png": 6721,
	"./footer_wood.png": 6369,
	"./logo.png": 1315,
	"./logo_sem_wpp.png": 861
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 6467;

/***/ }),

/***/ 8680:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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




function ProductModal({ id, caption, media_url, permalink }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "rounded-lg bg-white shadow-md dark:border-gray-700 dark:bg-gray-800",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: __webpack_require__(6467)(`./${id}.png`),
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
function Product({ id, caption, media_url, permalink }) {
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
                                    src: __webpack_require__(6467)(`./${id}.png`),
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

"use strict";
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

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ e0)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/home/ronaldozica/Documents/GitHub/artesdajackeline/components/search-bar.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["SearchBar"];


/***/ }),

/***/ 2677:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/1.7e91d248.png","height":350,"width":353,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAb1BMVEWnpp7m5uVXW0jCu7d3emaCgXWbm5KhoJmOj4Hc2NReYk18c0yzsKZwXBqijk9JPRvKqizevDKxoX1OWjhIVDrVzc3RxWKRjGoyORqzpD3d0HeijzLTv0NMFgxcDgtyYlZgMhqln4mtmF1YOSiPLhgLJCUMAAAACXBIWXMAAAsTAAALEwEAmpwYAAAARElEQVR4nBXBhRGAMAAEsK+74q77z8iRwBCj8euIaTiUAvOMtkpKCOEt1UJjf3gIg+V4Uzo3NzrEXO5jmXrUXOoV1/kDV/MDZ8okFYwAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 9202:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/2.32bbf134.png","height":547,"width":674,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAXVBMVEVGSUFsd2KXn5k3W2C8vLWsq6CSi4O5tqxBOjYsJByLlHtiUlRTRzNjWD14dJQTFxh4UzI6OjiThppdW1d9cFpkeX5MSDJ4aHCAbmsxSlJuWU0aLTVnV2KQmq+hfYZg/p1GAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAOUlEQVR4nAXBBwKAIAwAsQNaaN176/+facKrRY8shZRC3BctnDdxaivhe7a1a4JwmVP7mGE2G7znBzoRAiBrwu9bAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":6});

/***/ }),

/***/ 7519:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/about.33f785fe.png","height":1080,"width":1920,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAP1BMVEXXsZ/Yu6fbqZrrz7/b5szX28HahnvbuabCmIXYoJLrxrje99rjr6LkkYrNmo3YkoXotqjbxbG+p5XMW1HYtaMCM7+7AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAL0lEQVR4nAXBhwEAIAjAsDoQcI//fzXBC0efX1Ldsdc0aFlEcusEVCEMltks0fwDHYYBN86hyUoAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":5});

/***/ }),

/***/ 9686:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/about_wood.3b975754.png","height":1080,"width":1920,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAPFBMVEXMwZ3O0sTexpvpzanDupTHuYjYsoru4r3LxbnPu5TR2dHb0qzlzZa/u4LkqoDcvJPYwaHTl3fgw4TLblDz5D7LAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAL0lEQVR4nAXBhwEAIAjAsKoo4B7//2pCObu154Jqikm1U4OZhdrBQYRLGdlnzOsDHKUBMPaeNS8AAAAASUVORK5CYII=","blurWidth":8,"blurHeight":5});

/***/ }),

/***/ 5809:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/card_1.6eaa2bb4.png","height":1080,"width":1080,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAASFBMVEXeaGKbeGLkXGIbrWPdXGLfYWLNa2PqXmPfYmLgYmKXs19O115Fn2K/cGLeYWHRZGLnamHoXWH7wlrokl6Q1F3K4Fr+d195vF9pYjVSAAAAEXRSTlMZ+PD+0csnH/DU/f398P///noTu30AAAAJcEhZcwAACxMAAAsTAQCanBgAAAA+SURBVHicLcZRFoAQEAXQR4MZ6RGl/e+0k9P9uoj4WRARCwZy9FFJsPX72ipBtrLnldM9k4SqP5xXRfogxRdT8wJzD5v0YQAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 4154:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/card_2.9d31c837.png","height":1080,"width":1080,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAS1BMVEXiZWvfW1uVw97ZYVbbZWHeYmLfe3PeXV/eYGDdY2Grqqmf0uzsy6qz3+jZhn3gYmPUZVrWlZTEkIi0vtHPgFy7j3HArp+Aqa/AbVewTY3hAAAAEnRSTlMZ/v7w6fD6Ic3+/f3+/fD///65kr3RAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAPklEQVR4nC3GCQ6AIBAEwRH2cL0G8Pz/Sw3GSjppOH4yfgQsBy2CGGype+tT1zRPQfC503UWQrNsllXhcO+9S08COd50GEIAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 345:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/card_3.f76f65e2.png","height":1080,"width":1080,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAM1BMVEXdZWTdfHvfYWLgYGDfW1vfi4ry6+ndYmHfa2reW1vYgoPh1tjdYmL+//vSrKbeqqnVurPFiay4AAAADHRSTlMg/t/Uz/798Bn+/f1dTlLeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAANklEQVR4nDXBQQKAIAwDsIrdcNgN/v9aD0ICPD803iTZIMnMLkExM3MGYrzuPgKqVask9A3HB0Y0AeATgBp1AAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 2420:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/carousel_christmas_1.4d45eded.png","height":1080,"width":1920,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAD1BMVEXgbWzfYmLpybnntanlsaQ5g+5mAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAHklEQVR4nGNgggIGKGBkYGQEUYxgBohgZGAGAxYWAAP/ADebw3kVAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":5});

/***/ }),

/***/ 3805:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/carousel_christmas_1_mobile.b6efd669.png","height":1080,"width":1080,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAD1BMVEXgbWvifXnfYmLr28js59PQ9TwIAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAJklEQVR4nC3KQRIAQAwBwSH7/zdvRfQBB0yBAmwunSRjtdZ9JV59DHcAXG3eusQAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 8509:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/carousel_christmas_2.638d333d.png","height":1080,"width":1920,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAPFBMVEXpyrrWu6netabzY2ZVVj+3b2ixYljlt6rnX2DFb2ns0cGbWk/foaPhdnTZnJrUfHe9ZF/bb2p3WkzduansdUkDAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAALUlEQVR4nAXBCQIAEAgAwUWp3Pz/sWYAaA1Y00O0OGNrPK2BVznlSsdyMrOUPxabAQuyBfraAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":5});

/***/ }),

/***/ 9974:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/carousel_christmas_2_mobile.6f54bc07.png","height":1080,"width":1080,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAASFBMVEXt5tLifnuCZldaV0TfdnLs3svw2sjdbGrgXl/jjYrEgHrLhH7RaWbin53QiXzJb2o6QC3OoqifbGGOWUno2MWMZlFlUzRbSDT/tRD7AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAPklEQVR4nBXBhxGAMAwEsHfcU+nsvymHhMtMzVThtXmr4ujMztsK9PPwUigQlCl3cUTuQ543IDmS5iQAit8HS3sB8v3HsrsAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 3414:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/carousel_christmas_3.cb551ee9.png","height":1080,"width":1920,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAFVBMVEXgaGfns6fhd3PqzLzkkorlpZvoyrqx5CRJAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAHklEQVR4nGNgY2YDITYGJghgYGBlYGAEkywwxAgFAApVAFiN+DMDAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":5});

/***/ }),

/***/ 7187:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/carousel_christmas_3_mobile.f95ee969.png","height":1080,"width":1080,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAG1BMVEXhenbfZ2bjhoHfYGDs6dTgcm/q2sfnsKTr3coWfPXNAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAMElEQVR4nD3BwRGAAAwCQQ4kSf8V+3Hc1czMzZ2oLRclVpUIY2PU7W63CoEQ/Z7PCyAJAMhIuHmbAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 6210:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/carousel_mobile_christmas_3.9a04128a.png","height":1080,"width":1920,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAFVBMVEXgaGfns6fhd3PqzLzkkorlpZvoyrqx5CRJAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAHklEQVR4nGNgY2YDITYGJghgYGBlYGAEkywwxAgFAApVAFiN+DMDAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":5});

/***/ }),

/***/ 5676:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/carousel_wood_1.2fb1931d.png","height":1080,"width":1920,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAElBMVEXMplnVrFvq3rnp2KngtmLj0qPkmvzFAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAIklEQVR4nC3GQQ4AIAzDsGSU/395QsUnMx8RMKEMor6cugsFoQBHAawGawAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":5});

/***/ }),

/***/ 5950:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/carousel_wood_2.e06c338c.png","height":1080,"width":1920,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAANlBMVEXp3rqxlmLu5MLYsGDEqXDm1qiQgHfVsnPoul3e0au5nni7nWrTpWy8nV6FblmajJHOxqewlna3dLhvAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAL0lEQVR4nBXEyREAIAgEsEXABW/7b9YxjwAAyq8yuBmKZmJ3GBFSZ+jq8DzpnvkAEZUA/nF1scAAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":5});

/***/ }),

/***/ 9311:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/carousel_wood_3.54831c72.png","height":1080,"width":1920,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAIVBMVEXk2rbq2KnUq1u8mVPOpljCnVV4YTPey51cSymJbjiSdTzC4Xt6AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAJUlEQVR4nDXBAQ4AEBADwVrVw/8fLCFmpK+P2wpMHLRM8EbtqQMJEgB1jmqjjwAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":5});

/***/ }),

/***/ 9794:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/faq.e803d9b7.png","height":1080,"width":1920,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAANlBMVEXVsqG+ln/auqnpxLXbiH7Gl4nS0bniqZzTqpnX2L/e8tjim5LVj4LWn47ptqjbxbG+p5XNYFVld4rmAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAALUlEQVR4nAXBiQEAEAwEwUW4xK//Zs2wjJOfX4q2pDLorUVEF9kBx5ipVvM0PhrkAQ5x6O6nAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":5});

/***/ }),

/***/ 5869:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/faq_wood.01d5b8c4.png","height":1080,"width":1920,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAPFBMVEXhv5m+tX/Syrnaz6nk17TGtonWsIjSyJvVzKLX0L/e5Njl0JjZwqHUnHzpzKjepHu+upXfw4PNdFXVupfNlYUAAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAALklEQVR4nAXBhwEAIAjAsKoo4B7//2pCGV3SfRthAtKoMbp7bSQ1U7VDCTkvDXwbqAEkG33ZDwAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":5});

/***/ }),

/***/ 7514:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/favicon.e147201b.png","height":756,"width":756,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAPFBMVEX////4+Pjs7Ov4+PhMaXHl5eX19fbh4eHs7OzR0dH4+Pj9/f339/fs7OvFxcXNzc3Z2dnn5+fCwsKsrKwPNsqEAAAAEHRSTlP++uu3ACiy/S376fT1sPGvbiqX8gAAAAlwSFlzAAASdAAAEnQB3mYfeAAAAD5JREFUeJwVxckRwCAMBLC18QkkGNJ/rxn0EUSNRguB8k7fM/CUbyI0vJ97ZjHyeB0vxipcDTHuMyBqvVvID0d7AeD1FKl1AAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 6721:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/footer.2462c0fb.png","height":1080,"width":1920,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAASFBMVEXiuancdXTlsanq19bRnI3ahnrcopvasaG/n4rcwa3kgIDi3cbDmIrXkoXpv7Dbmo/s5M/e0r3iw8PZ5ubWqZrPYFXv4uTl9fQSkXK/AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAM0lEQVR4nAXBBwKAIAwAsSsUWkBlOPj/T03QZMXexyFfyIqVVubI9w5gBIlf5fRDk3n/AR9dAWIFx8jpAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":5});

/***/ }),

/***/ 6369:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/footer_wood.7d7f8241.png","height":1080,"width":1920,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAASFBMVEXWxZ/Yvp3dunTkw4Dr5dPXs4vcupLCuojYyaLm1a7f5O3StKfhyKfaysLLuIzVnHzb1K7eo3jezaDWwrni1sO9uJHv6uTPclVSBfF3AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAMElEQVR4nAXBBwIAEAwEsENpa2///6kEvpkuzxzkoGo3OZS0CDEqAJmWroNnrkM4fCEkAWidTlVUAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":5});

/***/ }),

/***/ 1315:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/logo.9be54768.png","height":756,"width":756,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAANlBMVEXh4uDk4ePEw8Ts7+rs7OzR0dFMaXH5+fn////39/fw7+/39/fp6enPzs/Y2djl5OXo6OisrKxmsoDDAAAADnRSTlP9KPrvLfsA+Py1sOnqr51bdBIAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAA9SURBVHicFcrJEcAgDACxBXxgIHbSf7MZ9BbWwj3EaKOU14WVlPsM+geqedBe2cnDk/MKZFB5s7W19xL7AUGnAehTSulnAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 861:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/logo_sem_wpp.e147201b.png","height":756,"width":756,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAPFBMVEX////4+Pjs7Ov4+PhMaXHl5eX19fbh4eHs7OzR0dH4+Pj9/f339/fs7OvFxcXNzc3Z2dnn5+fCwsKsrKwPNsqEAAAAEHRSTlP++uu3ACiy/S376fT1sPGvbiqX8gAAAAlwSFlzAAASdAAAEnQB3mYfeAAAAD5JREFUeJwVxckRwCAMBLC18QkkGNJ/rxn0EUSNRguB8k7fM/CUbyI0vJ97ZjHyeB0vxipcDTHuMyBqvVvID0d7AeD1FKl1AAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});

/***/ })

};
;