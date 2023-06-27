/*! For license information please see react-src-components-Tabs-Tabs-stories.38eea82b.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkroot=self.webpackChunkroot||[]).push([[3688,4142,5947,379,216],{"./packages/react/src/components/Tabs/Tabs.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Eksempel:()=>Eksempel,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Tabs_stories});var react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),useUpdate=__webpack_require__("./packages/react/src/hooks/useUpdate.ts"),arrayUtils=__webpack_require__("./packages/react/src/utils/arrayUtils.ts"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Tabs_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./packages/react/src/components/Tabs/Tabs.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Tabs_module.Z,options);const Tabs_Tabs_module=Tabs_module.Z&&Tabs_module.Z.locals?Tabs_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const validId=str=>str.replace(/\s/,"_"),Tabs=({activeTab,items,onChange})=>{const idBase=(0,react.useId)(),tabs=items.map((({name,content,value:optionalValue,tabId:optionalTabId,panelId:optionalPanelId})=>{const value=optionalValue??name;return{name,content,value,tabId:optionalTabId??idBase+validId(value)+"-tab",panelId:optionalPanelId??idBase+validId(value)+"-panel"}}));if(!(0,arrayUtils.zb)(tabs.map((({value})=>value))))throw Error("Each tab value must be unique.");if(void 0!==activeTab&&!tabs.some((tab=>tab.value===activeTab)))throw Error("The given active tab value must exist in the list of items.");const findTabIndexByValue=value=>tabs.findIndex((tab=>tab.value===value)),initialTab=activeTab??tabs[0].value,[visiblePanel,setVisiblePanel]=(0,react.useState)(initialTab),[focusIndex,setFocusIndex]=(0,react.useState)(findTabIndexByValue(initialTab));(0,react.useEffect)((()=>setVisiblePanel(initialTab)),[initialTab]);const tablistRef=(0,react.useRef)(null),lastIndex=tabs.length-1;(0,useUpdate.P)((()=>{tablistRef.current?.querySelectorAll('[role="tab"]')[focusIndex].focus()}),[focusIndex]);const selectTab=value=>{visiblePanel!==value&&onChange&&onChange(value),setVisiblePanel(value),setFocusIndex(findTabIndexByValue(value))},onKeyDown=name=>event=>{switch(event.key){case"ArrowRight":void 0!==focusIndex&&setFocusIndex(focusIndex===lastIndex?0:focusIndex+1);break;case"ArrowLeft":void 0!==focusIndex&&setFocusIndex(0===focusIndex?lastIndex:focusIndex-1);break;case"Space":selectTab(name)}};return(0,jsx_runtime.jsxs)("div",{className:Tabs_Tabs_module.tabs,children:[(0,jsx_runtime.jsx)("div",{className:Tabs_Tabs_module.tablist,ref:tablistRef,role:"tablist",children:tabs.map(((tab,i)=>{const isSelected=tab.value===visiblePanel;return(0,jsx_runtime.jsx)("button",{"aria-controls":tab.panelId,"aria-selected":isSelected,className:classnames_default()(Tabs_Tabs_module.tab,isSelected&&Tabs_Tabs_module.selected),id:tab.tabId,onClick:()=>selectTab(tab.value),onKeyDown:onKeyDown(tab.value),role:"tab",tabIndex:focusIndex===i?0:-1,children:tab.name},tab.value)}))}),(0,jsx_runtime.jsx)("hr",{className:Tabs_Tabs_module.divider}),tabs.map((tab=>(0,jsx_runtime.jsx)("div",{className:Tabs_Tabs_module.tabpanel,"aria-labelledby":tab.tabId,hidden:tab.value!==visiblePanel,id:tab.panelId,role:"tabpanel",children:tab.content},tab.panelId)))]})};Tabs.displayName="Tabs",Tabs.displayName="Tabs";try{Tabs.displayName="Tabs",Tabs.__docgenInfo={description:"",displayName:"Tabs",props:{activeTab:{defaultValue:null,description:"",name:"activeTab",required:!1,type:{name:"string"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"TabItem[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((name: string) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/Tabs/Tabs.tsx#Tabs"]={docgenInfo:Tabs.__docgenInfo,name:"Tabs",path:"packages/react/src/components/Tabs/Tabs.tsx#Tabs"})}catch(__react_docgen_typescript_loader_error){}const Tabs_stories={title:"Kjernekomponenter/Tabs",component:Tabs,parameters:{status:{type:"beta",url:"http://www.url.com/status"}}},Eksempel=args=>(0,jsx_runtime.jsx)(Tabs,{...args});Eksempel.displayName="Eksempel",Eksempel.args={items:[{name:"Ild",content:(0,jsx_runtime.jsx)("p",{children:"Nulla nec rutrum libero. Curabitur lorem est, tempor nec iaculis in, egestas eu lacus. Ut malesuada risus ut ipsum consequat mattis. Donec quis nunc ut lorem suscipit pharetra. Nulla ornare sed nisl nec facilisis. Sed in lacinia elit. Sed et eleifend nisi. Sed egestas nulla lobortis sapien scelerisque, at venenatis risus elementum. Aliquam eleifend, metus non molestie viverra, erat sem ornare enim, nec suscipit nulla nisi vel dolor. Etiam volutpat sapien arcu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla sollicitudin molestie leo sit amet faucibus. Sed interdum condimentum interdum. Praesent volutpat turpis mattis purus venenatis egestas. In iaculis condimentum fringilla. Duis dignissim turpis mattis tristique vulputate."})},{name:"Jord",content:(0,jsx_runtime.jsx)("p",{children:"Vestibulum nisl diam, tempus sit amet justo eu, semper facilisis dolor. Proin scelerisque tellus sit amet consectetur condimentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et dui vehicula, semper arcu vitae, posuere odio. Pellentesque eu ante in elit semper pellentesque. Donec cursus eros non diam condimentum viverra. Pellentesque at odio lorem. Aenean ac enim et risus bibendum scelerisque et a purus. Donec ultricies, ex et ornare fringilla, turpis ex consectetur ante, ut porta libero metus quis magna. Nulla eu hendrerit ex, non dapibus quam. Nulla dictum ligula tellus, et elementum orci convallis sit amet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce dolor orci, sagittis vel elit eget, viverra ultrices nulla."})},{name:"Luft",content:(0,jsx_runtime.jsx)("p",{children:"Integer dictum lacus vitae urna lobortis, scelerisque varius metus maximus. Integer ornare pharetra metus, vel mattis urna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla consectetur ipsum ac magna sollicitudin, ac fermentum sem tempus. Proin rutrum aliquam eros eu accumsan. Duis rhoncus urna a tellus sagittis, eu aliquam dui pharetra. Praesent eu libero consectetur, varius urna quis, volutpat magna. Vivamus ornare magna at vehicula pulvinar. Curabitur risus lorem, placerat sit amet mollis venenatis, placerat sed ligula. Donec pellentesque quis est nec viverra. Sed ultricies aliquam nunc, sit amet faucibus augue tempor quis. Pellentesque porttitor sapien quis risus placerat, in facilisis augue molestie."})},{name:"Vann",content:(0,jsx_runtime.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel leo nibh. Fusce neque nulla, semper quis rutrum eu, volutpat nec mauris. In lacinia iaculis venenatis. Aliquam pulvinar lectus lorem, a congue nulla dictum vel. Donec augue eros, cursus ut porta eu, mollis sodales odio. Vestibulum rutrum sollicitudin nisi, sed facilisis nibh dictum at. Nulla arcu mi, iaculis quis luctus at, vulputate hendrerit quam. Suspendisse condimentum pellentesque varius. Nullam molestie dictum pellentesque. Nunc felis sem, elementum a sapien a, consectetur ullamcorper tellus. Nullam porta tempus nisl, in vehicula quam congue eget."})}]},Eksempel.parameters={...Eksempel.parameters,docs:{...Eksempel.parameters?.docs,source:{originalSource:"args => <Tabs {...args} />",...Eksempel.parameters?.docs?.source}}};const __namedExportsOrder=["Eksempel"]},"./packages/react/src/hooks/useUpdate.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{P:()=>useUpdate});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const useUpdate=(effect,deps)=>{const isFirst=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!0);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{if(!isFirst.current)return effect();isFirst.current=!1}),deps)}},"./packages/react/src/utils/arrayUtils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function arraysEqual(array1,array2){if(array1===array2)return!0;if(void 0===array1||void 0===array2)return!1;if(array1.length!==array2.length)return!1;for(const[i]of array1.entries())if(array1[i]!==array2[i])return!1;return!0}function areItemsUnique(array){return array.length===new Set(array).size}__webpack_require__.d(__webpack_exports__,{cO:()=>arraysEqual,zb:()=>areItemsUnique})},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./packages/react/src/components/Tabs/Tabs.module.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"@import url(https://altinncdn.no/fonts/altinn-din/altinn-din.css);"]),___CSS_LOADER_EXPORT___.push([module.id,".Tabs-module_tabs__Q9Etc {\n  --divider-color: #c9c9c9;\n  --divider-width: 1px;\n  --tab-border_bottom_color-selected: var(--colors-blue-700);\n  --tab-border_bottom_color: transparent;\n  --tab-border_bottom_width: 4px;\n  --tab-font_size: var(--font_size-component-size-sm);\n  --tab-font_weight: 500;\n  --tab-height: 32px;\n  --tab-text_color-hover: var(--colors-black);\n  --tab-text_color-selected: var(--colors-blue-700);\n  --tab-text_color: #68707c;\n  --tablist-gap: 1.5rem;\n  --tablist-margin_horizontal: 20px;\n  --tabpanel-margin_horizontal: 20px;\n  --tabpanel-margin_vertical: 20px;\n\n  position: relative;\n}\n\n.Tabs-module_tablist__XrWqe {\n  display: flex;\n  gap: var(--tablist-gap);\n  margin: 0 var(--tablist-margin_horizontal);\n  position: relative;\n  z-index: 1;\n}\n\n.Tabs-module_tab__Suw9B {\n  background-color: transparent;\n  border-bottom-color: var(--tab-border_bottom_color);\n  border-bottom-style: solid;\n  border-width: 0 0 var(--tab-border_bottom_width) 0;\n  color: var(--tab-text_color);\n  cursor: pointer;\n  font-family: inherit;\n  font-size: var(--tab-font_size);\n  font-weight: var(--tab-font_weight);\n  line-height: var(--tab-height);\n  margin: 0;\n  overflow: hidden;\n  padding: 0;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.Tabs-module_tab__Suw9B.Tabs-module_selected__hKa7r {\n  --tab-text_color: var(--tab-text_color-selected);\n  --tab-border_bottom_color: var(--tab-border_bottom_color-selected);\n}\n\n.Tabs-module_tab__Suw9B:hover {\n  --tab-text_color: var(--tab-text_color-hover);\n}\n\n.Tabs-module_tab__Suw9B:focus-visible {\n  outline: var(--semantic-tab_focus-outline-color) auto var(--semantic-tab_focus-outline-width);\n  outline-offset: var(--semantic-tab_focus-outline-offset);\n}\n\n.Tabs-module_divider__DXC4W {\n  border-color: var(--divider-color);\n  border-style: solid;\n  border-width: var(--divider-width) 0 0 0;\n  height: var(--divider-width);\n  margin: 0;\n  position: absolute;\n  top: var(--tab-height);\n  width: 100%;\n}\n\n.Tabs-module_tabpanel__fxmui {\n  margin: var(--tabpanel-margin_vertical) var(--tabpanel-margin_horizontal);\n}\n","",{version:3,sources:["webpack://./packages/react/src/components/Tabs/Tabs.module.css"],names:[],mappings:"AAEA;EACE,wBAAwB;EACxB,oBAAoB;EACpB,0DAA0D;EAC1D,sCAAsC;EACtC,8BAA8B;EAC9B,mDAAmD;EACnD,sBAAsB;EACtB,kBAAkB;EAClB,2CAA2C;EAC3C,iDAAiD;EACjD,yBAAyB;EACzB,qBAAqB;EACrB,iCAAiC;EACjC,kCAAkC;EAClC,gCAAgC;;EAEhC,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,0CAA0C;EAC1C,kBAAkB;EAClB,UAAU;AACZ;;AAEA;EACE,6BAA6B;EAC7B,mDAAmD;EACnD,0BAA0B;EAC1B,kDAAkD;EAClD,4BAA4B;EAC5B,eAAe;EACf,oBAAoB;EACpB,+BAA+B;EAC/B,mCAAmC;EACnC,8BAA8B;EAC9B,SAAS;EACT,gBAAgB;EAChB,UAAU;EACV,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,gDAAgD;EAChD,kEAAkE;AACpE;;AAEA;EACE,6CAA6C;AAC/C;;AAEA;EACE,6FAA6F;EAC7F,wDAAwD;AAC1D;;AAEA;EACE,kCAAkC;EAClC,mBAAmB;EACnB,wCAAwC;EACxC,4BAA4B;EAC5B,SAAS;EACT,kBAAkB;EAClB,sBAAsB;EACtB,WAAW;AACb;;AAEA;EACE,yEAAyE;AAC3E",sourcesContent:["@import url('https://altinncdn.no/fonts/altinn-din/altinn-din.css');\n\n.tabs {\n  --divider-color: #c9c9c9;\n  --divider-width: 1px;\n  --tab-border_bottom_color-selected: var(--colors-blue-700);\n  --tab-border_bottom_color: transparent;\n  --tab-border_bottom_width: 4px;\n  --tab-font_size: var(--font_size-component-size-sm);\n  --tab-font_weight: 500;\n  --tab-height: 32px;\n  --tab-text_color-hover: var(--colors-black);\n  --tab-text_color-selected: var(--colors-blue-700);\n  --tab-text_color: #68707c;\n  --tablist-gap: 1.5rem;\n  --tablist-margin_horizontal: 20px;\n  --tabpanel-margin_horizontal: 20px;\n  --tabpanel-margin_vertical: 20px;\n\n  position: relative;\n}\n\n.tablist {\n  display: flex;\n  gap: var(--tablist-gap);\n  margin: 0 var(--tablist-margin_horizontal);\n  position: relative;\n  z-index: 1;\n}\n\n.tab {\n  background-color: transparent;\n  border-bottom-color: var(--tab-border_bottom_color);\n  border-bottom-style: solid;\n  border-width: 0 0 var(--tab-border_bottom_width) 0;\n  color: var(--tab-text_color);\n  cursor: pointer;\n  font-family: inherit;\n  font-size: var(--tab-font_size);\n  font-weight: var(--tab-font_weight);\n  line-height: var(--tab-height);\n  margin: 0;\n  overflow: hidden;\n  padding: 0;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.tab.selected {\n  --tab-text_color: var(--tab-text_color-selected);\n  --tab-border_bottom_color: var(--tab-border_bottom_color-selected);\n}\n\n.tab:hover {\n  --tab-text_color: var(--tab-text_color-hover);\n}\n\n.tab:focus-visible {\n  outline: var(--semantic-tab_focus-outline-color) auto var(--semantic-tab_focus-outline-width);\n  outline-offset: var(--semantic-tab_focus-outline-offset);\n}\n\n.divider {\n  border-color: var(--divider-color);\n  border-style: solid;\n  border-width: var(--divider-width) 0 0 0;\n  height: var(--divider-width);\n  margin: 0;\n  position: absolute;\n  top: var(--tab-height);\n  width: 100%;\n}\n\n.tabpanel {\n  margin: var(--tabpanel-margin_vertical) var(--tabpanel-margin_horizontal);\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={tabs:"Tabs-module_tabs__Q9Etc",tablist:"Tabs-module_tablist__XrWqe",tab:"Tabs-module_tab__Suw9B",selected:"Tabs-module_selected__hKa7r",divider:"Tabs-module_divider__DXC4W",tabpanel:"Tabs-module_tabpanel__fxmui"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);