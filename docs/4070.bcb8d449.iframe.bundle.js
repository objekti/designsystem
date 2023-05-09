/*! For license information please see 4070.bcb8d449.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[4070,4142],{"./node_modules/@navikt/ds-icons/esm/Information.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_util_useId__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@navikt/ds-icons/esm/util/useId.js"),__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};const __WEBPACK_DEFAULT_EXPORT__=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((_a,ref)=>{var{title,titleId:_titleId}=_a,props=__rest(_a,["title","titleId"]);let titleId=(0,_util_useId__WEBPACK_IMPORTED_MODULE_1__.M)();return titleId=title?_titleId||"title-"+titleId:void 0,react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,role:"img",ref,"aria-labelledby":titleId},props),title?react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",{id:titleId},title):null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0Zm0 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2ZM9 19v-2h2v-5H9v-2h4v7h2v2H9Zm3-14a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z",fill:"currentColor"}))}))},"./node_modules/@navikt/ds-icons/esm/util/useId.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>useId});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");let globalId=0;const maybeReactUseId=react__WEBPACK_IMPORTED_MODULE_0__.useId;function useId(idOverride){var _a;if(void 0!==maybeReactUseId){const reactId=maybeReactUseId();return null!=idOverride?idOverride:reactId.replace(/(:)/g,"")}return null!==(_a=function useGlobalId(idOverride){const[defaultId,setDefaultId]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(idOverride),id=idOverride||defaultId;return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{null==defaultId&&(globalId+=1,setDefaultId(`aksel-icon-${globalId}`))}),[defaultId]),id}(idOverride))&&void 0!==_a?_a:""}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./node_modules/@altinn/figma-design-tokens/dist/tokens.json":module=>{module.exports=JSON.parse('{"tokenSetOrder":{"0":{"value":"Base","type":"other"},"1":{"value":"Components","type":"other"}},"Felles":{"id":"edeff752fe55f2581f6ceee82c66aac8b8a8622d","selectedTokenSets":{"Base":"source"},"$figmaStyleReferences":{},"type":"other","value":"[object Object]"},"Altinn":{"id":"df8b73b683752ef5f35b3cf293bbe5a0cba9f88d","selectedTokenSets":{"Base":"source"},"$figmaStyleReferences":{},"type":"other","value":"[object Object]"},"component":{"icon":{"size":{"xs":{"value":"1.5rem","type":"sizing"},"sm":{"value":"1.875rem","type":"sizing"},"md":{"value":"2.25rem","type":"sizing"},"lg":{"value":"3rem","type":"sizing"},"xl":{"value":"3.75rem","type":"sizing"}}},"panel":{"color":{"background":{"default":{"value":"#e6eff8","type":"color"},"success":{"value":"#d1f4e1","type":"color"},"warning":{"value":"#fffbe6","type":"color"}},"arrow":{"default":{"value":"#e6eff8","type":"color"},"success":{"value":"#d1f4e1","type":"color"},"warning":{"value":"#fffbe6","type":"color"}}},"font_size":{"header":{"breakpoint_sm":{"value":"1.5rem","type":"fontSizes"},"breakpoint_md":{"value":"1.75rem","type":"fontSizes"},"breakpoint_lg":{"value":"2.25rem","type":"fontSizes"}},"body":{"breakpoint_sm":{"value":"1rem","type":"fontSizes"},"breakpoint_md":{"value":"1.125rem","type":"fontSizes"}}},"space":{"padding":{"x":{"xs":{"value":"1.5rem","type":"spacing"},"md":{"value":"6rem","type":"spacing"}},"y":{"xs":{"value":"1.5rem","type":"spacing"},"md":{"value":"2.25rem","type":"spacing"}}},"gap":{"xs":{"value":"0.75rem","type":"spacing"},"md":{"value":"0.75rem","type":"spacing"}},"text_group":{"gap":{"xs":{"value":"0.375rem","type":"spacing"}}},"arrow_left":{"md":{"value":"6.688rem","type":"spacing"},"xs":{"value":"4rem","type":"spacing"}}},"size":{"icon":{"xs":{"value":"2.25rem","type":"sizing"},"md":{"value":"3.75rem","type":"sizing"}}},"typography":{"default":{"fontFamily":{"value":"Altinn-DIN","type":"fontFamily"},"fontWeight":{"value":"Regular","type":"fontWeight"},"lineHeight":{"value":1.5,"type":"lineHeight"},"fontSize":{"value":"1rem","type":"fontSize"},"letterSpacing":{"value":"3%","type":"letterSpacing"},"paragraphSpacing":{"value":0,"type":"paragraphSpacing"},"textDecoration":{"value":"none","type":"textDecoration"},"textCase":{"value":"none","type":"textCase"}}},"font_weight":{"heading":{"value":"bold","type":"fontWeights"}}},"legend":{"font_weight":{"default":{"value":"medium","type":"fontWeights"}}},"label":{"font_weight":{"default":{"value":"medium","type":"fontWeights"}}},"expandable_row":{"color":{"border_top":{"default":{"value":"#d2d5d8","type":"color"}},"border_bottom":{"default":{"value":"#d2d5d8","type":"color"}}},"space":{"padding":{"x":{"xs":{"value":"0.75rem","type":"spacing"},"md":{"value":"1.5rem","type":"spacing"}},"top":{"xs":{"value":"0.25rem","type":"spacing"}},"bottom":{"xs":{"value":"0.5rem","type":"spacing"}}},"gap":{"title":{"xs":{"value":0.75,"type":"spacing"},"md":{"value":"1.5rem","type":"spacing"}}}},"size":{"icon":{"xs":{"value":"1.5rem","type":"sizing"}}},"font_weight":{"header":{"value":"medium","type":"fontWeights"}},"font_size":{"header":{"breakpoint_sm":{"value":"1rem","type":"fontSizes"},"breakpoint_md":{"value":"1.125rem","type":"fontSizes"}}},"border_width":{"default":{"value":"1px","type":"borderWidth"}}},"checkbox":{"space":{"gap":{"xsmall":{"value":"0.5rem","type":"spacing"},"small":{"value":"0.75rem","type":"spacing"}}},"size":{"width":{"xsmall":{"value":"1.125rem","type":"sizing"},"small":{"value":"1.5rem","type":"sizing"}},"height":{"xsmall":{"value":"1.125rem","type":"sizing"},"small":{"value":"1.5rem","type":"sizing"}}},"color":{"border":{"default":{"value":"#1e2b3c","type":"color"},"hover":{"value":"#0062ba","type":"color"},"checked":{"value":"#0062ba","type":"color"},"error":{"value":"#b3253a","type":"color"}},"background":{"default":{"value":"#ffffff","type":"color"},"hover":{"value":"#e6eff8","type":"color"},"checked":{"value":"#0062ba","type":"color"},"error":{"value":"#ffffff","type":"color"}},"text":{"default":{"value":"#1e2b3c","type":"color"},"hover":{"value":"#0062ba","type":"color"},"checked":{"value":"#1e2b3c","type":"color"},"error":{"value":"#1e2b3c","type":"color"}}},"border_width":{"xsmall":{"value":"2px","type":"borderWidth"},"small":{"value":"2px","type":"borderWidth"}},"font_size":{"xs":{"value":"0.875rem","type":"fontSizes"},"sm":{"value":"1rem","type":"fontSizes"}}},"fieldset":{"space":{"gap":{"y":{"xsmall":{"value":"0.75rem","type":"spacing"},"small":{"value":"1.125rem","type":"spacing"},"medium":{"value":"1.5rem","type":"spacing"},"large":{"value":"1.5rem","type":"spacing"}}}}},"field_description":{"color":{"text":{"default":{"value":"#1e2b3c","type":"color"}}},"space":{"top":{"small":{"value":"0.5rem","type":"spacing"},"xsmall":{"value":"0.375rem","type":"spacing"}}}},"textarea":{"border_width":{"normal":{"value":"2px","type":"borderWidth"}},"color":{"border":{"default":{"value":"#1e2b3c","type":"color"},"hover":{"value":"#0062ba","type":"color"},"error":{"value":"#b3253a","type":"color"}},"background":{"default":{"value":"#ffffff","type":"color"},"hover":{"value":"#ffffff","type":"color"},"focus":{"value":"#ffffff","type":"color"}},"text":{"default":{"value":"#1e2b3c","type":"color"}}},"space":{"padding":{"x":{"value":"0.75rem","type":"spacing"},"y":{"value":"0.375rem","type":"spacing"}}},"size":{"min_height":{"xsmall":{"value":"6.25rem","type":"sizing"},"small":{"value":"9.375rem","type":"sizing"},"medium":{"value":"12.5rem","type":"sizing"},"large":{"value":"18.75rem","type":"sizing"},"xlarge":{"value":"25rem","type":"sizing"}}},"font_size":{"sm":{"value":"1rem","type":"fontSizes"}}},"checkbox-group":{"space":{"gap":{"x":{"xsmall":{"value":"1.5rem","type":"spacing"},"small":{"value":"2.25rem","type":"spacing"}},"y":{"xsmall":{"value":"0.563rem","type":"spacing"},"small":{"value":"1.125rem","type":"spacing"}}}}},"toggle_button":{"font_size":{"sm":{"value":"1rem","type":"fontSizes"}},"size":{"min_width":{"sm":{"value":"100%","type":"sizing"},"md":{"value":"auto","type":"sizing"}}},"border_width":{"inactive":{"value":"2px","type":"borderWidth"}},"color":{"background":{"active":{"value":"#0062ba","type":"color"},"inactive":{"value":"#ffffff","type":"color"}},"text":{"active":{"value":"#ffffff","type":"color"},"inactive":{"value":"#1e2b3c","type":"color"}},"border":{"inactive":{"value":"#0062ba","type":"color"}}},"space":{"padding":{"x":{"value":"1.5rem","type":"spacing"},"top":{"value":"0.125rem","type":"spacing"},"bottom":{"value":"0.25rem","type":"spacing"}}}},"icon_button":{"size":{"large":{"circle":{"value":"2.25rem","type":"sizing"},"icon":{"value":"1.4rem","type":"sizing"}},"medium":{"circle":{"value":"1.5rem","type":"sizing"},"icon":{"value":"0.875rem","type":"sizing"}},"small":{"circle":{"value":"1.125rem","type":"sizing"},"icon":{"value":"0.688rem","type":"sizing"}}},"border_width":{"default":{"value":"1px","type":"borderWidth"}}},"button":{"filled":{"primary":{"color":{"background":{"default":{"value":"#0062ba","type":"color"},"hover":{"value":"#004e95","type":"color"},"pressed":{"value":"#00315d","type":"color"}}}},"color":{"text":{"all":{"value":"#ffffff","type":"color"}}},"success":{"color":{"background":{"default":{"value":"#118849","type":"color"},"hover":{"value":"#0c6536","type":"color"},"pressed":{"value":"#084826","type":"color"}}}},"danger":{"color":{"background":{"default":{"value":"#e02e49","type":"color"},"hover":{"value":"#b3253a","type":"color"},"pressed":{"value":"#861c2c","type":"color"}}}}},"space":{"gap":{"small":{"value":"0.5rem","type":"spacing"},"medium":{"value":"0.5rem","type":"spacing"},"large":{"value":"0.5rem","type":"spacing"}},"padding":{"x":{"small":{"value":"1.125rem","type":"spacing"},"medium":{"value":"2.25rem","type":"spacing"},"large":{"value":"3rem","type":"spacing"}}}},"quiet":{"space":{"padding":{"x":{"small":{"value":"0.375rem","type":"spacing"},"medium":{"value":"0.563rem","type":"spacing"},"large":{"value":"0.563rem","type":"spacing"}}}},"primary":{"color":{"text":{"default":{"value":"#0062ba","type":"color"},"pressed":{"value":"#ffffff","type":"color"}},"background":{"hover":{"value":"#e6eff8","type":"color"},"pressed":{"value":"#004e95","type":"color"}}}}},"outline":{"primary":{"color":{"text":{"default":{"value":"#0062ba","type":"color"},"pressed":{"value":"#ffffff","type":"color"}},"border":{"default":{"value":"#0062ba","type":"color"},"hover":{"value":"#004e95","type":"color"}},"background":{"default":{"value":"#ffffff","type":"color"},"hover":{"value":"#e6eff8","type":"color"},"pressed":{"value":"#004e95","type":"color"}}}}},"border_width":{"default":{"value":"1px","type":"borderWidth"}},"size":{"height":{"small":{"value":"2.25rem","type":"sizing"},"medium":{"value":"3rem","type":"sizing"},"large":{"value":"3.75rem","type":"sizing"}},"icon":{"small":{"value":"1.5rem","type":"sizing"},"medium":{"value":"1.875rem","type":"sizing"},"large":{"value":"2.5rem","type":"sizing"}}}},"input":{"color":{"border":{"default":{"value":"#1e2b3c","type":"color"},"hover":{"value":"#0062ba","type":"color"}},"background":{"default":{"value":"#ffffff","type":"color"},"hover":{"value":"#ffffff","type":"color"},"focus":{"value":"#ffffff","type":"color"}}},"error":{"color":{"border":{"default":{"value":"#b3253a","type":"color"}}}},"space":{"padding":{"x":{"value":"0.75rem","type":"spacing"},"y":{"value":"0.375rem","type":"spacing"}}},"border_width":{"default":{"value":"2px","type":"borderWidth"},"focus":{"value":"4px","type":"borderWidth"}},"read_only_info":{"color":{"border":{"default":{"value":"#fff4b4","type":"color"}},"background":{"default":{"value":"#fff4b4","type":"color"}}}},"read_only_confirm":{"color":{"background":{"default":{"value":"#d1f4e1","type":"color"}},"border":{"default":{"value":"#d1f4e1","type":"color"}}}},"size":{"min_height":{"default":{"value":"2.25rem","type":"sizing"}}},"font_size":{"sm":{"value":"1rem","type":"fontSizes"},"md":{"value":"1.125rem","type":"fontSizes"}}},"error_message":{"space":{"padding":{"top":{"value":"0.375rem","type":"spacing"}}},"color":{"text":{"value":"#b3253a","type":"color"}},"font_size":{"xs":{"value":"0.875rem","type":"fontSizes"}}}},"border_width":{"thin":{"value":"1px","type":"borderWidth"},"standard":{"value":"2px","type":"borderWidth"}},"space":{"half":{"value":0.375,"type":"spacing"},"base":{"value":0.75,"type":"spacing"},"x2":{"value":1.5,"type":"spacing"},"x3":{"value":2.25,"type":"spacing"},"x4":{"value":3,"type":"spacing"},"x5":{"value":3.75,"type":"spacing"},"x6":{"value":4.5,"type":"spacing"},"x7":{"value":5.25,"type":"spacing"},"x8":{"value":6,"type":"spacing"},"x16":{"value":12,"type":"spacing"}},"interactive_components":{"border_radius":{"normal":{"value":"3px","type":"borderRadius"}},"border_width":{"normal":{"value":"2px","type":"borderWidth"}}},"paragraph_space":{"default":{"value":"2.25rem","type":"paragraphSpacing"}},"font_size":{"100":{"value":"0.75rem","type":"fontSizes"},"200":{"value":"0.875rem","type":"fontSizes"},"300":{"value":"1rem","type":"fontSizes"},"400":{"breakpoint_sm":{"value":"1rem","type":"fontSizes"},"breakpoint_md":{"value":"1.125rem","type":"fontSizes"}},"500":{"breakpoint_sm":{"value":"1rem","type":"fontSizes"},"breakpoint_md":{"value":"1.125rem","type":"fontSizes"},"breakpoint_lg":{"value":"1.25rem","type":"fontSizes"}},"600":{"breakpoint_sm":{"value":"1.125rem","type":"fontSizes","description":"18px"},"breakpoint_md":{"value":"1.25rem","type":"fontSizes","description":"20px"},"breakpoint_lg":{"value":"1.5rem","type":"fontSizes","description":"24px"}},"700":{"breakpoint_sm":{"value":"1.25rem","type":"fontSizes","description":"20px"},"breakpoint_md":{"value":"1.5rem","type":"fontSizes","description":"24px"},"breakpoint_lg":{"value":"1.75rem","type":"fontSizes","description":"28px"}},"800":{"breakpoint_sm":{"value":"1.5rem","type":"fontSizes","description":"24px"},"breakpoint_md":{"value":"1.75rem","type":"fontSizes","description":"28px"},"breakpoint_lg":{"value":"2.25rem","type":"fontSizes","description":"36px"}},"900":{"breakpoint_sm":{"value":"1.75rem","type":"fontSizes","description":"28px"},"breakpoint_md":{"value":"2.25rem","type":"fontSizes","description":"36px"},"breakpoint_lg":{"value":"2.75rem","type":"fontSizes","description":"44px"}},"heading":{"h1":{"breakpoint_sm":{"value":"1.75rem","type":"fontSizes"},"breakpoint_md":{"value":"2.25rem","type":"fontSizes"},"breakpoint_lg":{"value":"2.75rem","type":"fontSizes"}},"h2":{"breakpoint_sm":{"value":"1.5rem","type":"fontSizes"},"breakpoint_md":{"value":"1.75rem","type":"fontSizes"},"breakpoint_lg":{"value":"2.25rem","type":"fontSizes"}},"h3":{"breakpoint_sm":{"value":"1.25rem","type":"fontSizes"},"breakpoint_md":{"value":"1.5rem","type":"fontSizes"},"breakpoint_lg":{"value":"1.75rem","type":"fontSizes"}},"h4":{"breakpoint_sm":{"value":"1.125rem","type":"fontSizes"},"breakpoint_md":{"value":"1.25rem","type":"fontSizes"},"breakpoint_lg":{"value":"1.5rem","type":"fontSizes"}},"h5":{"breakpoint_sm":{"value":"1rem","type":"fontSizes"},"breakpoint_md":{"value":"1.125rem","type":"fontSizes"},"breakpoint_lg":{"value":"1.25rem","type":"fontSizes"}}},"component-size":{"xs":{"value":"0.875rem","type":"fontSizes","description":"14px"},"sm":{"value":"1rem","type":"fontSizes","description":"16px"},"md":{"value":"1.125rem","type":"fontSizes","description":"18px"},"lg":{"value":"1.5rem","type":"fontSizes","description":"24px"}},"body":{"medium":{"value":"1rem","type":"fontSizes","description":"Body text should never be smaller than 16px"},"large":{"breakpoint_sm":{"value":"1rem","type":"fontSizes"},"breakpoint_md":{"value":"1.125rem","type":"fontSizes"}}},"label":{"small":{"breakpoint_sm":{"value":"1rem","type":"fontSizes"},"breakpoint_md":{"value":"1.125rem","type":"fontSizes"}}},"detail":{"default":{"value":"0.875rem","type":"fontSizes"}},"ingress":{"small":{"breakpoint_sm":{"value":"1.125rem","type":"fontSizes","description":"18px (Ingress should never be smaller than 18px, to keep a visual difference from the body text that is 16px.)"},"breakpoint_md":{"value":"1.25rem","type":"fontSizes","description":"20px"}},"medium":{"breakpoint_sm":{"value":"1.25rem","type":"fontSizes","description":"20px"},"breakpoint_md":{"value":"1.5rem","type":"fontSizes","description":"24px"}}}},"font_family":{"default":{"value":"Altinn-DIN","type":"fontFamilies"},"heading":{"value":"Altinn-DIN","type":"fontFamilies"},"ingress":{"value":"Altinn-DIN","type":"fontFamilies"},"body":{"value":"Altinn-DIN","type":"fontFamilies"},"label":{"value":"Altinn-DIN","type":"fontFamilies"}},"breakpoints":{"xs":{"value":"0px","type":"sizing","description":"Specific styling for the smallest mobile sizes and up. Will affect screen sizes with the set size and larger."},"sm":{"value":"540px","type":"sizing","description":"Specific styling for the largest mobile sizes and up. Will affect screen sizes with the set size and larger."},"md":{"value":"768px","type":"sizing","description":"Specific styling for tablet and up. Will affect screen sizes with the set size and larger."},"lg":{"value":"960px","type":"sizing","description":"Specific styling for the largest tablets and up. Will affect screen sizes with the set size and larger.Will affect screen sizes with this size and larger"},"xl":{"value":"1200px","type":"sizing","description":"Specific styling for laptops and up. Will affect screen sizes with the set size and larger."},"xxl":{"value":"1600px","type":"sizing","description":"Specific styling for desktops and up. Will affect screen sizes with the set size and larger."}},"typography":{"default":{"fontFamily":{"value":"Altinn-DIN","type":"fontFamily"},"fontWeight":{"value":"Regular","type":"fontWeight"},"lineHeight":{"value":1.5,"type":"lineHeight"},"fontSize":{"value":"1rem","type":"fontSize"},"letterSpacing":{"value":"0.3px","type":"letterSpacing"},"paragraphSpacing":{"value":0,"type":"paragraphSpacing"},"textDecoration":{"value":"none","type":"textDecoration"},"textCase":{"value":"none","type":"textCase"}}},"size":{"base":{"value":0.75,"type":"sizing"},"x2":{"value":1.5,"type":"sizing"},"x3":{"value":2.25,"type":"sizing"},"x4":{"value":3,"type":"sizing"},"x5":{"value":3.75,"type":"sizing"},"x6":{"value":4.5,"type":"sizing"},"x7":{"value":5.25,"type":"sizing"},"x8":{"value":6,"type":"sizing"},"x10":{"value":7.5,"type":"sizing"},"x16":{"value":12,"type":"sizing"}},"opacity":{"disabled":{"value":"30%","type":"opacity"}},"colors":{"grey":{"100":{"value":"#f4f5f6","type":"color","description":"AAA 13.1 on grey 800\\nAA 6.5 as bkdg for interaction blue"},"200":{"value":"#e9eaec","type":"color","description":"AAA 11.9 on grey 800\\nAA 5.9 as bkdg for interaction blue"},"300":{"value":"#d2d5d8","type":"color","description":"AAA 11.9 on grey 800\\nAA 5.9 as bkdg for interaction blue"},"400":{"value":"#bcbfc5","type":"color","description":"AAA 8.7 on grey 800\\nAA18 4.4 as bkdg for interaction blue"},"500":{"value":"#a5aab1","type":"color","description":"AA 6.1 on grey 800\\nAA18 3 as bkdg for interaction blue"},"600":{"value":"#68707c","type":"color","description":"AA18 3.5 on grey 800\\nAA18 4 on white"},"700":{"value":"#4b5563","type":"color","description":"AAA 7.5 on white"},"800":{"value":"#1e2b3c","type":"color","description":"Main Text Color\\nAAA 14.3 on white"},"900":{"value":"#141e29","type":"color","description":"AAA 16.8 on white"}},"white":{"value":"#ffffff","type":"color","description":"Standard bckd color.\\nAAA 13.1 on grey 800\\nAAA 7.2 as bkdg for interaction blue"},"black":{"value":"#000000","type":"color"},"red":{"100":{"value":"#f9d5db","type":"color"},"200":{"value":"#f3abb6","type":"color"},"300":{"value":"#ec8292","type":"color"},"400":{"value":"#e6586d","type":"color"},"500":{"value":"#e02e49","type":"color"},"600":{"value":"#b3253a","type":"color"},"700":{"value":"#861c2c","type":"color"},"800":{"value":"#5a121d","type":"color"},"900":{"value":"#480e17","type":"color"}},"orange":{"100":{"value":"#ffe8cd","type":"color"},"200":{"value":"#ffd19b","type":"color"},"300":{"value":"#ffba6a","type":"color"},"400":{"value":"#ffa338","type":"color"},"500":{"value":"#ff8c06","type":"color"},"600":{"value":"#cc7005","type":"color"},"700":{"value":"#995404","type":"color"},"800":{"value":"#663802","type":"color"},"900":{"value":"#522d02","type":"color"}},"yellow":{"100":{"value":"#fffbe6","type":"color"},"200":{"value":"#fff4b4","type":"color"},"300":{"value":"#ffed83","type":"color"},"400":{"value":"#ffe551","type":"color"},"500":{"value":"#ffda06","type":"color"},"600":{"value":"#e6c405","type":"color"},"700":{"value":"#ccae05","type":"color"},"800":{"value":"#998304","type":"color"},"900":{"value":"#665702","type":"color"}},"green":{"100":{"value":"#e8faf0","type":"color"},"200":{"value":"#d1f4e1","type":"color"},"300":{"value":"#8be4b5","type":"color"},"400":{"value":"#5dd997","type":"color"},"500":{"value":"#2ece7a","type":"color"},"600":{"value":"#15b560","type":"color"},"700":{"value":"#118849","type":"color"},"800":{"value":"#0c6536","type":"color"},"900":{"value":"#084826","type":"color"}},"blue":{"100":{"value":"#e6eff8","type":"color"},"200":{"value":"#b3d0ea","type":"color"},"300":{"value":"#80b1dd","type":"color"},"400":{"value":"#66a1d6","type":"color"},"500":{"value":"#3381c8","type":"color"},"600":{"value":"#1a72c1","type":"color"},"700":{"value":"#0062ba","type":"color"},"800":{"value":"#004e95","type":"color"},"900":{"value":"#00315d","type":"color"}},"purple":{"100":{"value":"#f5e8f2","type":"color"},"200":{"value":"#e0b9d8","type":"color"},"300":{"value":"#cc8bbf","type":"color"},"400":{"value":"#b75da5","type":"color"},"500":{"value":"#a22e8b","type":"color"},"600":{"value":"#98177e","type":"color"},"700":{"value":"#7a1265","type":"color"},"800":{"value":"#5b0e4c","type":"color"},"900":{"value":"#490b3d","type":"color"}}},"semantic":{"background":{"default":{"value":"#ffffff","type":"color"},"subtle":{"value":"#f4f5f6","type":"color"}},"surface":{"neutral":{"default":{"value":"#ffffff","type":"color"},"subtle":{"value":"#f4f5f6","type":"color"},"subtle-hover":{"value":"#e9eaec","type":"color"},"selected":{"value":"#e6eff8","type":"color"},"inverted":{"value":"#1e2b3c","type":"color"}},"action":{"subtle":{"value":"#e6eff8","type":"color"},"default":{"value":"#0062ba","type":"color"},"hover":{"value":"#004e95","type":"color"},"active":{"value":"#00315d","type":"color","description":"Standard farge for handlinger"}},"success":{"subtle":{"value":"#d1f4e1","type":"color"},"default":{"value":"#118849","type":"color"},"hover":{"value":"#0c6536","type":"color"},"active":{"value":"#084826","type":"color"}},"warning":{"subtle":{"value":"#fffbe6","type":"color"}},"danger":{"subtle":{"value":"#f9d5db","type":"color"},"default":{"value":"#e02e49","type":"color"},"hover":{"value":"#b3253a","type":"color"},"active":{"value":"#861c2c","type":"color"}},"info":{"subtle":{"value":"#e6eff8","type":"color"}}},"border":{"info":{"default":{"value":"#004e95","type":"color"}},"action":{"subtle":{"value":"#e6eff8","type":"color"},"default":{"value":"#0062ba","type":"color"},"hover":{"value":"#004e95","type":"color"},"active":{"value":"#00315d","type":"color"}},"neutral":{"default":{"value":"#68707c","type":"color"},"subtle":{"value":"#d2d5d8","type":"color"},"strong":{"value":"#1e2b3c","type":"color"},"divider":{"value":"#bcbfc5","type":"color"}},"success":{"default":{"value":"#0c6536","type":"color"}},"warning":{"default":{"value":"#cc7005","type":"color"}},"danger":{"default":{"value":"#b3253a","type":"color"}}},"tab_focus":{"outline":{"color":{"value":"#98177e","type":"color"},"offset":{"value":"2px","type":"spacing"},"width":{"value":"2px","type":"borderWidth"}}},"text":{"success":{"default":{"value":"#0c6536","type":"color"},"on_success":{"value":"#ffffff","type":"color"}},"neutral":{"default":{"value":"#1e2b3c","type":"color"},"subtle":{"value":"#68707c","type":"color"},"on_inverted":{"value":"#ffffff","type":"color"}},"action":{"default":{"value":"#0062ba","type":"color"},"on_action":{"value":"#ffffff","type":"color"}},"warning":{"default":{"value":"#995404","type":"color"},"on_warning":{"value":"#663802","type":"color"},"icon_warning":{"value":"#cc7005","type":"color"}},"danger":{"default":{"value":"#b3253a","type":"color"},"on_danger":{"value":"#ffffff","type":"color"}},"visited":{"default":{"value":"#7a1265","type":"color"}}}},"brand":{"default":{"first":{"100":{"value":"#feefef","type":"color","description":"AAA 12.8 on grey 800\\nAA 6.4 as bkdg for interaction blue"},"200":{"value":"#fddfe0","type":"color","description":"Light error color\\nAAA 11.4 on grey 800\\nAA 5.7 as bkdg for interaction blue"},"300":{"value":"#fbbfc1","type":"color","description":"AAA 9 on grey 800\\nAA 4.5 as bkdg for interaction blue"},"400":{"value":"#f89fa1","type":"color","description":"AAA 7.1 on grey 800\\nAA18 3.5 as bkdg for interaction blue"},"500":{"value":"#f67f82","type":"color","description":"AA 5.6 on grey 800"},"600":{"value":"#f45f63","type":"color","description":"AA 4.5 on grey 800"},"700":{"value":"#dc5659","type":"color","description":"AA18 3.7 on grey 800"},"800":{"value":"#c34c4f","type":"color","description":"AA 4.7 on white"}},"second":{"100":{"value":"#fcf7e9","type":"color","description":"AAA 13.3 on grey 800\\nAA 6.7 as bkdg for interaction blue"},"200":{"value":"#faeec2","type":"color","description":"Light warning color\\nAAA 12.3 on grey 800\\nAA 1.1 as bkdg for interaction blue"},"300":{"value":"#f5dda6","type":"color","description":"AAA 10 on grey 800\\nAA 5.4 as bkdg for interaction blue"},"400":{"value":"#efcc79","type":"color","description":"AAA 9.2 on grey 800\\nAA 4.6 as bkdg for interaction blue"},"500":{"value":"#eabb4d","type":"color","description":"AAA 7.9 on grey 800\\nAA18 4 as bkdg for interaction blue"},"600":{"value":"#e5aa20","type":"color","description":"AA 6.8 on grey 800\\nAA18 3.4 as bkdg for interaction blue"},"700":{"value":"#ce991d","type":"color","description":"AA 5.5 on grey 800"},"800":{"value":"#b7881a","type":"color","description":"AA18 4.4 on grey 800\\nAA18 3.2 on white"}},"third":{"100":{"value":"#e9f5ff","type":"color","description":"AAA 12.9 on grey 800\\nAA 6.5 as bkdg for interaction blue"},"200":{"value":"#d2eafd","type":"color","description":"Light information color \\nAAA 11.5 on grey 800\\nAA 5.8 as bkdg for interaction blue"},"300":{"value":"#a5d6fb","type":"color","description":"AAA 9.2 on grey 800\\nAA 4.6 as bkdg for interaction blue"},"400":{"value":"#78c1f9","type":"color","description":"AAA 7.3 on grey 800\\nAA18 3.7 as bkdg for interaction blue"},"500":{"value":"#4badf7","type":"color","description":"AA 5.8 on grey 800"},"600":{"value":"#1e98f5","type":"color","description":"AA 4.6 on grey 800"},"700":{"value":"#1b88dd","type":"color","description":"AA18 3.8 on grey 800"},"800":{"value":"#156aac","type":"color","description":"AA 5.6 on white"}}}}}')}}]);