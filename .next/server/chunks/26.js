exports.id = 26;
exports.ids = [26];
exports.modules = {

/***/ 5382:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 8739));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 954, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 9313));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 3380, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 806));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 2195))

/***/ }),

/***/ 8739:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ providers)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./node_modules/next-themes/dist/index.js
var dist = __webpack_require__(1072);
;// CONCATENATED MODULE: ./components/theme-provider.tsx
/* __next_internal_client_entry_do_not_use__ ThemeProvider auto */ 


function ThemeProvider({ children, ...props }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(dist/* ThemeProvider */.f, {
        ...props,
        children: children
    });
}

;// CONCATENATED MODULE: ./components/providers.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 


const Providers = ({ children })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(ThemeProvider, {
        attribute: "class",
        defaultTheme: "system",
        enableSystem: true,
        children: children
    });
};
/* harmony default export */ const providers = (Providers);


/***/ }),

/***/ 806:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ThemeToggle: () => (/* binding */ ThemeToggle)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./node_modules/next-themes/dist/index.js
var dist = __webpack_require__(1072);
// EXTERNAL MODULE: ./components/ui/button.tsx
var ui_button = __webpack_require__(4368);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/cjs/lucide-react.js
var lucide_react = __webpack_require__(1158);
;// CONCATENATED MODULE: ./components/icons.tsx


const Icons = {
    sun: lucide_react/* SunMedium */.j1h,
    moon: lucide_react/* Moon */.JFe,
    twitter: lucide_react/* Twitter */.tLe,
    logo: (props)=>/*#__PURE__*/ jsx_runtime_.jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            ...props,
            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "currentColor",
                d: "M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z"
            })
        }),
    gitHub: (props)=>/*#__PURE__*/ jsx_runtime_.jsx("svg", {
            viewBox: "0 0 438.549 438.549",
            ...props,
            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "currentColor",
                d: "M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
            })
        }),
    profile: lucide_react/* UserCircle */.Ys9,
    signOut: lucide_react/* LogOut */.d6Z
};

;// CONCATENATED MODULE: ./components/theme-toggle.tsx
/* __next_internal_client_entry_do_not_use__ ThemeToggle auto */ 




function ThemeToggle() {
    const { setTheme, theme } = (0,dist/* useTheme */.F)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ui_button/* Button */.z, {
        variant: "ghost",
        size: "sm",
        onClick: ()=>setTheme(theme === "light" ? "dark" : "light"),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Icons.sun, {
                className: "rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Icons.moon, {
                className: "absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "sr-only",
                children: "Toggle theme"
            })
        ]
    });
}


/***/ }),

/***/ 4368:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   z: () => (/* binding */ Button)
/* harmony export */ });
/* unused harmony export buttonVariants */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1085);
/* harmony import */ var class_variance_authority__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1914);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2857);





const buttonVariants = (0,class_variance_authority__WEBPACK_IMPORTED_MODULE_2__/* .cva */ .j)("inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "underline-offset-4 hover:underline text-primary"
        },
        size: {
            default: "h-10 py-2 px-4",
            sm: "h-9 px-3 rounded-md",
            lg: "h-11 px-8 rounded-md"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_4__/* .Slot */ .g7 : "button";
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Comp, {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    });
});
Button.displayName = "Button";



/***/ }),

/***/ 9313:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DropdownMenu: () => (/* binding */ DropdownMenu),
/* harmony export */   DropdownMenuCheckboxItem: () => (/* binding */ DropdownMenuCheckboxItem),
/* harmony export */   DropdownMenuContent: () => (/* binding */ DropdownMenuContent),
/* harmony export */   DropdownMenuGroup: () => (/* binding */ DropdownMenuGroup),
/* harmony export */   DropdownMenuItem: () => (/* binding */ DropdownMenuItem),
/* harmony export */   DropdownMenuLabel: () => (/* binding */ DropdownMenuLabel),
/* harmony export */   DropdownMenuPortal: () => (/* binding */ DropdownMenuPortal),
/* harmony export */   DropdownMenuRadioGroup: () => (/* binding */ DropdownMenuRadioGroup),
/* harmony export */   DropdownMenuRadioItem: () => (/* binding */ DropdownMenuRadioItem),
/* harmony export */   DropdownMenuSeparator: () => (/* binding */ DropdownMenuSeparator),
/* harmony export */   DropdownMenuShortcut: () => (/* binding */ DropdownMenuShortcut),
/* harmony export */   DropdownMenuSub: () => (/* binding */ DropdownMenuSub),
/* harmony export */   DropdownMenuSubContent: () => (/* binding */ DropdownMenuSubContent),
/* harmony export */   DropdownMenuSubTrigger: () => (/* binding */ DropdownMenuSubTrigger),
/* harmony export */   DropdownMenuTrigger: () => (/* binding */ DropdownMenuTrigger)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3435);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1158);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2857);
/* __next_internal_client_entry_do_not_use__ DropdownMenu,DropdownMenuTrigger,DropdownMenuContent,DropdownMenuItem,DropdownMenuCheckboxItem,DropdownMenuRadioItem,DropdownMenuLabel,DropdownMenuSeparator,DropdownMenuShortcut,DropdownMenuGroup,DropdownMenuPortal,DropdownMenuSub,DropdownMenuSubContent,DropdownMenuSubTrigger,DropdownMenuRadioGroup auto */ 




const DropdownMenu = _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__/* .Root */ .fC;
const DropdownMenuTrigger = _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__/* .Trigger */ .xz;
const DropdownMenuGroup = _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__/* .Group */ .ZA;
const DropdownMenuPortal = _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__/* .Portal */ .Uv;
const DropdownMenuSub = _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__/* .Sub */ .Tr;
const DropdownMenuRadioGroup = _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__/* .RadioGroup */ .Ee;
const DropdownMenuSubTrigger = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, inset, children, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__/* .SubTrigger */ .fF, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent", inset && "pl-8", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_4__/* .ChevronRight */ ._Qn, {
                className: "ml-auto h-4 w-4"
            })
        ]
    }));
DropdownMenuSubTrigger.displayName = _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__/* .SubTrigger */ .fF.displayName;
const DropdownMenuSubContent = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__/* .SubContent */ .tu, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className),
        ...props
    }));
DropdownMenuSubContent.displayName = _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__/* .SubContent */ .tu.displayName;
const DropdownMenuContent = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, sideOffset = 4, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__/* .Portal */ .Uv, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__/* .Content */ .VY, {
            ref: ref,
            sideOffset: sideOffset,
            className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className),
            ...props
        })
    }));
DropdownMenuContent.displayName = _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__/* .Content */ .VY.displayName;
const DropdownMenuItem = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, inset, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__/* .Item */ .ck, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", inset && "pl-8", className),
        ...props
    }));
DropdownMenuItem.displayName = _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__/* .Item */ .ck.displayName;
const DropdownMenuCheckboxItem = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, children, checked, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__/* .CheckboxItem */ .oC, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
        checked: checked,
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__/* .ItemIndicator */ .wU, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_4__/* .Check */ .JrY, {
                        className: "h-4 w-4"
                    })
                })
            }),
            children
        ]
    }));
DropdownMenuCheckboxItem.displayName = _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__/* .CheckboxItem */ .oC.displayName;
const DropdownMenuRadioItem = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, children, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__/* .RadioItem */ .Rk, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__/* .ItemIndicator */ .wU, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_4__/* .Circle */ .Cdc, {
                        className: "h-2 w-2 fill-current"
                    })
                })
            }),
            children
        ]
    }));
DropdownMenuRadioItem.displayName = _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__/* .RadioItem */ .Rk.displayName;
const DropdownMenuLabel = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, inset, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__/* .Label */ .__, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className),
        ...props
    }));
DropdownMenuLabel.displayName = _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__/* .Label */ .__.displayName;
const DropdownMenuSeparator = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__/* .Separator */ .Z0, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("-mx-1 my-1 h-px bg-muted", className),
        ...props
    }));
DropdownMenuSeparator.displayName = _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__/* .Separator */ .Z0.displayName;
const DropdownMenuShortcut = ({ className, ...props })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("ml-auto text-xs tracking-widest opacity-60", className),
        ...props
    });
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";



/***/ }),

/***/ 2195:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Toaster: () => (/* binding */ Toaster)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-toast/dist/index.mjs + 1 modules
var dist = __webpack_require__(5402);
// EXTERNAL MODULE: ./node_modules/class-variance-authority/dist/index.cjs.js
var index_cjs = __webpack_require__(1914);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/cjs/lucide-react.js
var lucide_react = __webpack_require__(1158);
// EXTERNAL MODULE: ./lib/utils.ts
var utils = __webpack_require__(2857);
;// CONCATENATED MODULE: ./components/ui/toast.tsx






const ToastProvider = dist/* Provider */.zt;
const ToastViewport = /*#__PURE__*/ react_.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx(dist/* Viewport */.l_, {
        ref: ref,
        className: (0,utils.cn)("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", className),
        ...props
    }));
ToastViewport.displayName = dist/* Viewport */.l_.displayName;
const toastVariants = (0,index_cjs/* cva */.j)("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
    variants: {
        variant: {
            default: "border bg-background",
            destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
const Toast = /*#__PURE__*/ react_.forwardRef(({ className, variant, ...props }, ref)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(dist/* Root */.fC, {
        ref: ref,
        className: (0,utils.cn)(toastVariants({
            variant
        }), className),
        ...props
    });
});
Toast.displayName = dist/* Root */.fC.displayName;
const ToastAction = /*#__PURE__*/ react_.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx(dist/* Action */.aU, {
        ref: ref,
        className: (0,utils.cn)("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive", className),
        ...props
    }));
ToastAction.displayName = dist/* Action */.aU.displayName;
const ToastClose = /*#__PURE__*/ react_.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx(dist/* Close */.x8, {
        ref: ref,
        className: (0,utils.cn)("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", className),
        "toast-close": "",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx(lucide_react.X, {
            className: "h-4 w-4"
        })
    }));
ToastClose.displayName = dist/* Close */.x8.displayName;
const ToastTitle = /*#__PURE__*/ react_.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx(dist/* Title */.Dx, {
        ref: ref,
        className: (0,utils.cn)("text-sm font-semibold", className),
        ...props
    }));
ToastTitle.displayName = dist/* Title */.Dx.displayName;
const ToastDescription = /*#__PURE__*/ react_.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx(dist/* Description */.dk, {
        ref: ref,
        className: (0,utils.cn)("text-sm opacity-90", className),
        ...props
    }));
ToastDescription.displayName = dist/* Description */.dk.displayName;


// EXTERNAL MODULE: ./components/ui/use-toast.ts
var use_toast = __webpack_require__(4388);
;// CONCATENATED MODULE: ./components/ui/toaster.tsx
/* __next_internal_client_entry_do_not_use__ Toaster auto */ 


function Toaster() {
    const { toasts } = (0,use_toast/* useToast */.pm)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ToastProvider, {
        children: [
            toasts.map(function({ id, title, description, action, ...props }) {
                return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Toast, {
                    ...props,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "grid gap-1",
                            children: [
                                title && /*#__PURE__*/ jsx_runtime_.jsx(ToastTitle, {
                                    children: title
                                }),
                                description && /*#__PURE__*/ jsx_runtime_.jsx(ToastDescription, {
                                    children: description
                                })
                            ]
                        }),
                        action,
                        /*#__PURE__*/ jsx_runtime_.jsx(ToastClose, {})
                    ]
                }, id);
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ToastViewport, {})
        ]
    });
}


/***/ }),

/***/ 4388:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pm: () => (/* binding */ useToast)
/* harmony export */ });
/* unused harmony exports reducer, toast */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
// Inspired by react-hot-toast library

const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1000000;
const actionTypes = {
    ADD_TOAST: "ADD_TOAST",
    UPDATE_TOAST: "UPDATE_TOAST",
    DISMISS_TOAST: "DISMISS_TOAST",
    REMOVE_TOAST: "REMOVE_TOAST"
};
let count = 0;
function genId() {
    count = (count + 1) % Number.MAX_VALUE;
    return count.toString();
}
const toastTimeouts = new Map();
const addToRemoveQueue = (toastId)=>{
    if (toastTimeouts.has(toastId)) {
        return;
    }
    const timeout = setTimeout(()=>{
        toastTimeouts.delete(toastId);
        dispatch({
            type: "REMOVE_TOAST",
            toastId: toastId
        });
    }, TOAST_REMOVE_DELAY);
    toastTimeouts.set(toastId, timeout);
};
const reducer = (state, action)=>{
    switch(action.type){
        case "ADD_TOAST":
            return {
                ...state,
                toasts: [
                    action.toast,
                    ...state.toasts
                ].slice(0, TOAST_LIMIT)
            };
        case "UPDATE_TOAST":
            return {
                ...state,
                toasts: state.toasts.map((t)=>t.id === action.toast.id ? {
                        ...t,
                        ...action.toast
                    } : t)
            };
        case "DISMISS_TOAST":
            {
                const { toastId } = action;
                // ! Side effects ! - This could be extracted into a dismissToast() action,
                // but I'll keep it here for simplicity
                if (toastId) {
                    addToRemoveQueue(toastId);
                } else {
                    state.toasts.forEach((toast)=>{
                        addToRemoveQueue(toast.id);
                    });
                }
                return {
                    ...state,
                    toasts: state.toasts.map((t)=>t.id === toastId || toastId === undefined ? {
                            ...t,
                            open: false
                        } : t)
                };
            }
        case "REMOVE_TOAST":
            if (action.toastId === undefined) {
                return {
                    ...state,
                    toasts: []
                };
            }
            return {
                ...state,
                toasts: state.toasts.filter((t)=>t.id !== action.toastId)
            };
    }
};
const listeners = [];
let memoryState = {
    toasts: []
};
function dispatch(action) {
    memoryState = reducer(memoryState, action);
    listeners.forEach((listener)=>{
        listener(memoryState);
    });
}
function toast({ ...props }) {
    const id = genId();
    const update = (props)=>dispatch({
            type: "UPDATE_TOAST",
            toast: {
                ...props,
                id
            }
        });
    const dismiss = ()=>dispatch({
            type: "DISMISS_TOAST",
            toastId: id
        });
    dispatch({
        type: "ADD_TOAST",
        toast: {
            ...props,
            id,
            open: true,
            onOpenChange: (open)=>{
                if (!open) dismiss();
            }
        }
    });
    return {
        id: id,
        dismiss,
        update
    };
}
function useToast() {
    const [state, setState] = react__WEBPACK_IMPORTED_MODULE_0__.useState(memoryState);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{
        listeners.push(setState);
        return ()=>{
            const index = listeners.indexOf(setState);
            if (index > -1) {
                listeners.splice(index, 1);
            }
        };
    }, [
        state
    ]);
    return {
        ...state,
        toast,
        dismiss: (toastId)=>dispatch({
                type: "DISMISS_TOAST",
                toastId
            })
    };
}



/***/ }),

/***/ 2857:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cn: () => (/* binding */ cn)
/* harmony export */ });
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(391);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tailwind_merge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9610);


function cn(...inputs) {
    return (0,tailwind_merge__WEBPACK_IMPORTED_MODULE_1__/* .twMerge */ .m)((0,clsx__WEBPACK_IMPORTED_MODULE_0__.clsx)(inputs));
}


/***/ }),

/***/ 5520:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(7633);
;// CONCATENATED MODULE: ./config/site.ts
const siteConfig = {
    name: "Artes da Jackeline",
    description: "Uma loja de artesanatos",
    mainNav: [
        {
            title: "P\xe1gina inicial",
            href: "/"
        },
        {
            title: "Loja",
            href: "/store"
        },
        {
            title: "Sobre n\xf3s",
            href: "/about"
        },
        {
            title: "Perguntas frequentes",
            href: "/faq"
        }
    ],
    links: {
        twitter: "https://twitter.com/shadcn",
        github: "https://github.com/shadcn/ui",
        docs: "https://ui.shadcn.com"
    }
};

// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"lib/fonts.ts","import":"Inter","arguments":[{"subsets":["latin"],"variable":"--font-sans"}],"variableName":"fontSans"}
var fonts_ts_import_Inter_arguments_subsets_latin_variable_font_sans_variableName_fontSans_ = __webpack_require__(679);
var fonts_ts_import_Inter_arguments_subsets_latin_variable_font_sans_variableName_fontSans_default = /*#__PURE__*/__webpack_require__.n(fonts_ts_import_Inter_arguments_subsets_latin_variable_font_sans_variableName_fontSans_);
// EXTERNAL MODULE: ./lib/utils.ts
var utils = __webpack_require__(5839);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(1363);
;// CONCATENATED MODULE: ./components/ui/toaster.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`/home/ronaldozica/Documents/CEFET/artesdajackeline/components/ui/toaster.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["Toaster"];

;// CONCATENATED MODULE: ./components/providers.tsx

const providers_proxy = (0,module_proxy.createProxy)(String.raw`/home/ronaldozica/Documents/CEFET/artesdajackeline/components/providers.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: providers_esModule, $$typeof: providers_$$typeof } = providers_proxy;
const providers_default_ = providers_proxy.default;


/* harmony default export */ const providers = (providers_default_);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/react.shared-subset.js
var react_shared_subset = __webpack_require__(2947);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(4178);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(5124);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/main-nav.tsx






function MainNav({ items }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex gap-6 md:gap-10",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                href: "/",
                className: "flex items-center space-x-2",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: "/logo_sem_wpp.png",
                        width: 40,
                        height: 40,
                        alt: "Logotipo Artes da Jackeline"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "inline-block font-bold",
                        children: siteConfig.name
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "hidden sm:flex",
                children: items?.length ? /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                    className: "flex gap-6",
                    children: items?.map((item, index)=>item.href && /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: item.href,
                            className: (0,utils.cn)("flex items-center text-sm font-medium text-muted-foreground", item.disabled && "cursor-not-allowed opacity-80"),
                            children: item.title
                        }, index))
                }) : null
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/theme-toggle.tsx

const theme_toggle_proxy = (0,module_proxy.createProxy)(String.raw`/home/ronaldozica/Documents/CEFET/artesdajackeline/components/theme-toggle.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: theme_toggle_esModule, $$typeof: theme_toggle_$$typeof } = theme_toggle_proxy;
const theme_toggle_default_ = theme_toggle_proxy.default;

const theme_toggle_e0 = theme_toggle_proxy["ThemeToggle"];

// EXTERNAL MODULE: ./node_modules/lucide-react/dist/cjs/lucide-react.js
var lucide_react = __webpack_require__(4094);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-slot/dist/index.mjs + 2 modules
var dist = __webpack_require__(3809);
// EXTERNAL MODULE: ./node_modules/class-variance-authority/dist/index.cjs.js
var index_cjs = __webpack_require__(70);
;// CONCATENATED MODULE: ./components/ui/button.tsx





const buttonVariants = (0,index_cjs/* cva */.j)("inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "underline-offset-4 hover:underline text-primary"
        },
        size: {
            default: "h-10 py-2 px-4",
            sm: "h-9 px-3 rounded-md",
            lg: "h-11 px-8 rounded-md"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ react_shared_subset.forwardRef(({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? dist/* Slot */.g7 : "button";
    return /*#__PURE__*/ jsx_runtime_.jsx(Comp, {
        className: (0,utils.cn)(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    });
});
Button.displayName = "Button";


// EXTERNAL MODULE: ./components/ui/dropdown-menu.tsx
var dropdown_menu = __webpack_require__(3284);
;// CONCATENATED MODULE: ./components/small-navbar.tsx






function SmallNavBar({ items }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(dropdown_menu/* DropdownMenu */.h_, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(dropdown_menu/* DropdownMenuTrigger */.$F, {
                asChild: true,
                children: /*#__PURE__*/ jsx_runtime_.jsx(Button, {
                    variant: "outline",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(lucide_react/* Menu */.v2r, {})
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(dropdown_menu/* DropdownMenuContent */.AW, {
                className: "w-56",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(dropdown_menu/* DropdownMenuLabel */.Ju, {
                        children: "Menu"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(dropdown_menu/* DropdownMenuSeparator */.VD, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(dropdown_menu/* DropdownMenuGroup */.Qk, {
                        children: items?.map((item, index)=>item.href && /*#__PURE__*/ jsx_runtime_.jsx(dropdown_menu/* DropdownMenuItem */.Xi, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: item.href,
                                    className: (0,utils.cn)("flex items-center text-sm font-medium text-muted-foreground", item.disabled && "cursor-not-allowed opacity-80"),
                                    children: item.title
                                }, index)
                            }))
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/site-header.tsx





function SiteHeader() {
    return /*#__PURE__*/ jsx_runtime_.jsx("header", {
        className: "sticky top-0 z-40 w-full border-b bg-background",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(MainNav, {
                    items: siteConfig.mainNav
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-1 items-center justify-end space-x-4",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                            className: "flex items-center space-x-1",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(theme_toggle_e0, {})
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                            className: "sm:hidden",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(SmallNavBar, {
                                items: siteConfig.mainNav
                            })
                        })
                    ]
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ./node_modules/react-social-icons/build/react-social-icons.js
var react_social_icons = __webpack_require__(9874);
;// CONCATENATED MODULE: ./components/social-media-icons.tsx


const SocialMidiaIcons = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "fixed bottom-8 right-12 flex gap-4",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(react_social_icons/* SocialIcon */.QZ, {
                url: "https://api.whatsapp.com/send?phone=1531998648448",
                network: "whatsapp",
                target: "_blank"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_social_icons/* SocialIcon */.QZ, {
                url: "https://www.instagram.com/artesdajackeline/?hl=en",
                network: "instagram",
                target: "_blank"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_social_icons/* SocialIcon */.QZ, {
                url: "https://www.facebook.com/people/Artes-da-Jackeline/100063003952353",
                network: "facebook",
                target: "_blank"
            })
        ]
    });
};
/* harmony default export */ const social_media_icons = (SocialMidiaIcons);

;// CONCATENATED MODULE: ./app/layout.tsx









const metadata = {
    title: {
        default: siteConfig.name,
        template: `%s - ${siteConfig.name}`
    },
    description: siteConfig.description,
    themeColor: [
        {
            media: "(prefers-color-scheme: light)",
            color: "white"
        },
        {
            media: "(prefers-color-scheme: dark)",
            color: "black"
        }
    ],
    icons: {
        icon: "/logo_sem_wpp.png",
        shortcut: "/favicon-16x16.png",
        apple: "/apple-touch-icon.png"
    }
};
function RootLayout({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("html", {
            lang: "en",
            suppressHydrationWarning: true,
            children: /*#__PURE__*/ jsx_runtime_.jsx("body", {
                className: (0,utils.cn)("min-h-screen bg-background font-sans antialiased", (fonts_ts_import_Inter_arguments_subsets_latin_variable_font_sans_variableName_fontSans_default()).variable),
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(providers, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "relative flex min-h-screen flex-col",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(SiteHeader, {}),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "flex-1",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                                        className: "container grid items-center gap-6 pb-8 pt-6 md:py-10",
                                        children: [
                                            children,
                                            /*#__PURE__*/ jsx_runtime_.jsx(social_media_icons, {})
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(e0, {})
                    ]
                })
            })
        })
    });
}


/***/ }),

/***/ 8958:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ FooterImage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2947);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4178);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);



function FooterImage() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
            width: 1920,
            height: 1080,
            alt: "...",
            src: "/footer.png"
        })
    });
}


/***/ }),

/***/ 3284:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $F: () => (/* binding */ e1),
/* harmony export */   AW: () => (/* binding */ e2),
/* harmony export */   Ju: () => (/* binding */ e6),
/* harmony export */   Qk: () => (/* binding */ e9),
/* harmony export */   VD: () => (/* binding */ e7),
/* harmony export */   Xi: () => (/* binding */ e3),
/* harmony export */   h_: () => (/* binding */ e0)
/* harmony export */ });
/* unused harmony exports DropdownMenuCheckboxItem, DropdownMenuRadioItem, DropdownMenuShortcut, DropdownMenuPortal, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuRadioGroup */
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/home/ronaldozica/Documents/CEFET/artesdajackeline/components/ui/dropdown-menu.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["DropdownMenu"];

const e1 = proxy["DropdownMenuTrigger"];

const e2 = proxy["DropdownMenuContent"];

const e3 = proxy["DropdownMenuItem"];

const e4 = proxy["DropdownMenuCheckboxItem"];

const e5 = proxy["DropdownMenuRadioItem"];

const e6 = proxy["DropdownMenuLabel"];

const e7 = proxy["DropdownMenuSeparator"];

const e8 = proxy["DropdownMenuShortcut"];

const e9 = proxy["DropdownMenuGroup"];

const e10 = proxy["DropdownMenuPortal"];

const e11 = proxy["DropdownMenuSub"];

const e12 = proxy["DropdownMenuSubContent"];

const e13 = proxy["DropdownMenuSubTrigger"];

const e14 = proxy["DropdownMenuRadioGroup"];


/***/ }),

/***/ 5839:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cn: () => (/* binding */ cn)
/* harmony export */ });
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7369);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tailwind_merge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2794);


function cn(...inputs) {
    return (0,tailwind_merge__WEBPACK_IMPORTED_MODULE_1__/* .twMerge */ .m)((0,clsx__WEBPACK_IMPORTED_MODULE_0__.clsx)(inputs));
}


/***/ }),

/***/ 7633:
/***/ (() => {



/***/ })

};
;