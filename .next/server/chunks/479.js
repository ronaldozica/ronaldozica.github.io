"use strict";
exports.id = 479;
exports.ids = [479];
exports.modules = {

/***/ 6226:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  o: () => (/* binding */ Cards)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/react.shared-subset.js
var react_shared_subset = __webpack_require__(2947);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(4178);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./lib/utils.ts
var utils = __webpack_require__(5839);
;// CONCATENATED MODULE: ./components/ui/card.tsx



const Card = /*#__PURE__*/ react_shared_subset.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        ref: ref,
        className: (0,utils.cn)("rounded-lg border bg-card text-card-foreground shadow-sm", className),
        ...props
    }));
Card.displayName = "Card";
const CardHeader = /*#__PURE__*/ react_shared_subset.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        ref: ref,
        className: (0,utils.cn)("flex flex-col space-y-1.5 p-6", className),
        ...props
    }));
CardHeader.displayName = "CardHeader";
const CardTitle = /*#__PURE__*/ react_shared_subset.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx("h3", {
        ref: ref,
        className: (0,utils.cn)("text-2xl font-semibold leading-none tracking-tight", className),
        ...props
    }));
CardTitle.displayName = "CardTitle";
const CardDescription = /*#__PURE__*/ react_shared_subset.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx("p", {
        ref: ref,
        className: (0,utils.cn)("text-sm text-muted-foreground", className),
        ...props
    }));
CardDescription.displayName = "CardDescription";
const CardContent = /*#__PURE__*/ react_shared_subset.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        ref: ref,
        className: (0,utils.cn)("pt-0", className),
        ...props
    }));
CardContent.displayName = "CardContent";
const CardFooter = /*#__PURE__*/ react_shared_subset.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        ref: ref,
        className: (0,utils.cn)(" flex items-center p-6 pt-0", className),
        ...props
    }));
CardFooter.displayName = "CardFooter";


;// CONCATENATED MODULE: ./components/cards.tsx




const cards = [
    {
        description: "Realizamos entregas para todo o Brasil, converse conosco para verificar nossas taxas!",
        url: "/card_1.png"
    },
    {
        description: "Criamos produtos artesanais personalizados a cada compra, converse conosco e saiba mais!",
        url: "/card_2.png"
    },
    {
        description: "Aten\xe7\xe3o: Nossas estampas est\xe3o sujeitas a estoque, verifique a que mais te agrada.",
        url: "/card_3.png"
    }
];
function Cards() {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "grid w-full gap-4 lg:grid-cols-3",
        children: cards.map((card, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(CardHeader, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(CardTitle, {
                            children: card.description
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(CardContent, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            width: 1080,
                            height: 1080,
                            alt: "...",
                            src: card.url
                        })
                    })
                ]
            }))
    });
}


/***/ }),

/***/ 8682:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Categories)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2947);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5124);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4094);
/* harmony import */ var _ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3284);





function Categories() {
    const categories = [
        "Divino",
        "Mandala",
        "Madeira",
        "Mdf",
        "Natal",
        "Tecido"
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "hidden h-5 items-center space-x-4 text-sm md:flex",
                children: categories.map((category)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            className: "rounded-lg bg-primary-foreground p-4 font-bold uppercase",
                            href: `/search?query=${category}`,
                            children: category
                        })
                    }))
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "md:hidden",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__/* .DropdownMenu */ .h_, {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__/* .DropdownMenuTrigger */ .$F, {
                            className: "flex items-center justify-center rounded-lg bg-primary-foreground p-4 font-bold",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_4__/* .ChevronDown */ ._ME, {
                                    className: "relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180",
                                    "aria-hidden": "true"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: "Categorias"
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__/* .DropdownMenuContent */ .AW, {
                            children: categories.map((category)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__/* .DropdownMenuItem */ .Xi, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        className: "font-bold",
                                        href: `/search?query=${category}`,
                                        children: category
                                    })
                                }))
                        })
                    ]
                })
            })
        ]
    });
}


/***/ })

};
;