"use strict";
exports.id = 720;
exports.ids = [720];
exports.modules = {

/***/ 5720:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Q: () => (/* binding */ Products)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/react.shared-subset.js
var react_shared_subset = __webpack_require__(2947);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(1363);
;// CONCATENATED MODULE: ./components/product.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`/home/ronaldozica/Documents/GitHub/artesdajackeline/components/product.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["tags"];


/* harmony default export */ const components_product = (__default__);
;// CONCATENATED MODULE: ./public/productsFile.json
const productsFile_namespaceObject = JSON.parse('[{"id":"1","title":"Cachepôs para plantas","caption":"Cachepôs em crochê para plantas","media_url":"","permalink":""},{"id":"2","title":"Cachepôs para plantas","caption":"Cachepôs em crochê para plantas","media_url":"","permalink":""}]');
;// CONCATENATED MODULE: ./components/products.tsx




function Products({ amount }) {
    const products = productsFile_namespaceObject.slice(0, amount);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: products.map((product)=>/*#__PURE__*/ jsx_runtime_.jsx(components_product, {
                id: product.id,
                caption: product.caption,
                media_url: product.media_url,
                permalink: product.permalink
            }))
    });
}


/***/ })

};
;