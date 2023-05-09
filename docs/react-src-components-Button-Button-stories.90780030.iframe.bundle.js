/*! For license information please see react-src-components-Button-Button-stories.90780030.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkroot=self.webpackChunkroot||[]).push([[6995],{"./packages/react/src/components/Button/Button.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{FilledWithIcon:()=>FilledWithIcon,FilledWithTextIcon:()=>FilledWithTextIcon,FilledWithTextSpinner:()=>FilledWithTextSpinner,OutlineWithIcon:()=>OutlineWithIcon,OutlineWithTextIcon:()=>OutlineWithTextIcon,OutlineWithTextSpinner:()=>OutlineWithTextSpinner,QuietWithIcon:()=>QuietWithIcon,QuietWithTextIcon:()=>QuietWithTextIcon,QuietWithTextSpinner:()=>QuietWithTextSpinner,Variants:()=>Variants,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__,fullWidth:()=>fullWidth,props:()=>props});__webpack_require__("./node_modules/react/index.js");var _docs_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./docs-components/index.ts"),_Spinner__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/react/src/components/Spinner/Spinner.tsx"),___WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react/src/components/Button/Button.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Kjernekomponenter/Button",component:___WEBPACK_IMPORTED_MODULE_3__.zx,parameters:{status:{type:"beta",url:"http://www.url.com/status"}}},icon=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0Zm0 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2Zm5.047 5.671 1.399 1.43-8.728 8.398L6 14.02l1.395-1.434 2.319 2.118 7.333-7.032Z",fill:"currentColor"})}),LoadingTemplate=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(___WEBPACK_IMPORTED_MODULE_3__.zx,{...args,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Spinner__WEBPACK_IMPORTED_MODULE_4__.$,{size:args.size,variant:"interaction",title:"loading"}),"Laster..."]});LoadingTemplate.displayName="LoadingTemplate";const props={args:{children:"Knapp"}},Variants={render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.zx,{...Filled.args,children:"Fylt"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.zx,{...Outline.args,children:"Omriss"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.zx,{...Quiet.args,children:"Gjennomsiktig"})]}),decorators:[Story=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_docs_components__WEBPACK_IMPORTED_MODULE_1__.Kq,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Story,{})})]},Filled={name:"Fylt med tekst",args:{children:"Fylt",variant:"filled"}},Outline={name:"Omriss med tekst",args:{children:"Omriss",variant:"outline"}},Quiet={name:"Gjennomsiktig med tekst",args:{children:"Gjennomsiktig",variant:"quiet"}},FilledWithIcon={name:"Fylt med ikon",args:{icon,variant:"filled"}},OutlineWithIcon={name:"Omriss med ikon",args:{icon,variant:"outline"}},QuietWithIcon={name:"Gjennomsiktig med ikon",args:{icon,variant:"quiet"}},FilledWithTextIcon={name:"Fylt med tekst og ikon",args:{children:"Fylt",icon,variant:"filled"}},OutlineWithTextIcon={name:"Omriss med tekst og ikon",args:{children:"Med omriss",icon,variant:"outline"}},QuietWithTextIcon={name:"Gjennomsiktig med tekst og ikon",args:{children:"Gjennomsiktig",icon,variant:"quiet"}},FilledWithTextSpinner={render:LoadingTemplate,name:"Fylt med tekst og spinner",args:{variant:"filled","aria-disabled":!0}},OutlineWithTextSpinner={render:LoadingTemplate,name:"Omriss med tekst og spinner",args:{children:"Med omriss",icon,variant:"outline","aria-disabled":!0}},QuietWithTextSpinner={render:LoadingTemplate,name:"Gjennomsiktig med tekst og spinner",args:{children:"Gjennomsiktig",icon,variant:"quiet","aria-disabled":!0}},fullWidth={name:"Full bredde",args:{children:"Full bredde",fullWidth:!0},parameters:{layout:"padded"}};props.parameters={...props.parameters,docs:{...props.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: 'Knapp'\n  }\n}",...props.parameters?.docs?.source}}},Variants.parameters={...Variants.parameters,docs:{...Variants.parameters?.docs,source:{originalSource:"{\n  render: VariantsTemplate,\n  decorators: [Story => <Stack>\n        <Story />\n      </Stack>]\n}",...Variants.parameters?.docs?.source}}},FilledWithIcon.parameters={...FilledWithIcon.parameters,docs:{...FilledWithIcon.parameters?.docs,source:{originalSource:"{\n  name: 'Fylt med ikon',\n  args: {\n    icon,\n    variant: 'filled'\n  }\n}",...FilledWithIcon.parameters?.docs?.source}}},OutlineWithIcon.parameters={...OutlineWithIcon.parameters,docs:{...OutlineWithIcon.parameters?.docs,source:{originalSource:"{\n  name: 'Omriss med ikon',\n  args: {\n    icon,\n    variant: 'outline'\n  }\n}",...OutlineWithIcon.parameters?.docs?.source}}},QuietWithIcon.parameters={...QuietWithIcon.parameters,docs:{...QuietWithIcon.parameters?.docs,source:{originalSource:"{\n  name: 'Gjennomsiktig med ikon',\n  args: {\n    icon,\n    variant: 'quiet'\n  }\n}",...QuietWithIcon.parameters?.docs?.source}}},FilledWithTextIcon.parameters={...FilledWithTextIcon.parameters,docs:{...FilledWithTextIcon.parameters?.docs,source:{originalSource:"{\n  name: 'Fylt med tekst og ikon',\n  args: {\n    children: 'Fylt',\n    icon,\n    variant: 'filled'\n  }\n}",...FilledWithTextIcon.parameters?.docs?.source}}},OutlineWithTextIcon.parameters={...OutlineWithTextIcon.parameters,docs:{...OutlineWithTextIcon.parameters?.docs,source:{originalSource:"{\n  name: 'Omriss med tekst og ikon',\n  args: {\n    children: 'Med omriss',\n    icon,\n    variant: 'outline'\n  }\n}",...OutlineWithTextIcon.parameters?.docs?.source}}},QuietWithTextIcon.parameters={...QuietWithTextIcon.parameters,docs:{...QuietWithTextIcon.parameters?.docs,source:{originalSource:"{\n  name: 'Gjennomsiktig med tekst og ikon',\n  args: {\n    children: 'Gjennomsiktig',\n    icon,\n    variant: 'quiet'\n  }\n}",...QuietWithTextIcon.parameters?.docs?.source}}},FilledWithTextSpinner.parameters={...FilledWithTextSpinner.parameters,docs:{...FilledWithTextSpinner.parameters?.docs,source:{originalSource:"{\n  render: LoadingTemplate,\n  name: 'Fylt med tekst og spinner',\n  args: {\n    variant: 'filled',\n    'aria-disabled': true\n  }\n}",...FilledWithTextSpinner.parameters?.docs?.source}}},OutlineWithTextSpinner.parameters={...OutlineWithTextSpinner.parameters,docs:{...OutlineWithTextSpinner.parameters?.docs,source:{originalSource:"{\n  render: LoadingTemplate,\n  name: 'Omriss med tekst og spinner',\n  args: {\n    children: 'Med omriss',\n    icon,\n    variant: 'outline',\n    'aria-disabled': true\n  }\n}",...OutlineWithTextSpinner.parameters?.docs?.source}}},QuietWithTextSpinner.parameters={...QuietWithTextSpinner.parameters,docs:{...QuietWithTextSpinner.parameters?.docs,source:{originalSource:"{\n  render: LoadingTemplate,\n  name: 'Gjennomsiktig med tekst og spinner',\n  args: {\n    children: 'Gjennomsiktig',\n    icon,\n    variant: 'quiet',\n    'aria-disabled': true\n  }\n}",...QuietWithTextSpinner.parameters?.docs?.source}}},fullWidth.parameters={...fullWidth.parameters,docs:{...fullWidth.parameters?.docs,source:{originalSource:"{\n  name: 'Full bredde',\n  args: {\n    children: 'Full bredde',\n    fullWidth: true\n  },\n  parameters: {\n    layout: 'padded'\n  }\n}",...fullWidth.parameters?.docs?.source}}};const __namedExportsOrder=["props","Variants","FilledWithIcon","OutlineWithIcon","QuietWithIcon","FilledWithTextIcon","OutlineWithTextIcon","QuietWithTextIcon","FilledWithTextSpinner","OutlineWithTextSpinner","QuietWithTextSpinner","fullWidth"]},"./packages/react/src/components/Spinner/Spinner.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{$:()=>Spinner});__webpack_require__("./node_modules/react/index.js");var injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Spinner_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./packages/react/src/components/Spinner/Spinner.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Spinner_module.Z,options);const Spinner_Spinner_module=Spinner_module.Z&&Spinner_module.Z.locals?Spinner_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const sizeMap={xSmall:13,small:20,medium:27,large:40,"1xLarge":44,"2xLarge":56,"3xLarge":79},variantMap={default:{foreground:Spinner_Spinner_module.defaultForeground,background:Spinner_Spinner_module.defaultBackground},interaction:{foreground:Spinner_Spinner_module.interactionForeground,background:Spinner_Spinner_module.interactionBackground},inverted:{foreground:Spinner_Spinner_module.invertedForeground,background:Spinner_Spinner_module.invertedBackground}},Spinner=({title,size="medium",variant="default",className="",...rest})=>(0,jsx_runtime.jsxs)("svg",{className:`${Spinner_Spinner_module.spinner} ${className}`,style:{width:sizeMap[size],height:sizeMap[size]},viewBox:"0 0 50 50",...rest,children:[(0,jsx_runtime.jsx)("title",{children:title}),(0,jsx_runtime.jsx)("circle",{className:variantMap[variant].background,cx:"25",cy:"25",r:"20",fill:"none",strokeWidth:"5"}),(0,jsx_runtime.jsx)("circle",{className:`${Spinner_Spinner_module.spinnerCircle} ${variantMap[variant].foreground}`,cx:"25",cy:"25",r:"20",fill:"none",strokeWidth:"5"})]});Spinner.displayName="Spinner";try{Spinner.displayName="Spinner",Spinner.__docgenInfo={description:"Spinner component used for indicating busy or indeterminate loading",displayName:"Spinner",props:{title:{defaultValue:null,description:"Spinner title",name:"title",required:!0,type:{name:"string"}},size:{defaultValue:{value:"medium"},description:"Spinner size",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"xSmall"'},{value:'"1xLarge"'},{value:'"2xLarge"'},{value:'"3xLarge"'}]}},variant:{defaultValue:{value:"default"},description:"Spinner appearance",name:"variant",required:!1,type:{name:"enum",value:[{value:'"inverted"'},{value:'"default"'},{value:'"interaction"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/Spinner/Spinner.tsx#Spinner"]={docgenInfo:Spinner.__docgenInfo,name:"Spinner",path:"packages/react/src/components/Spinner/Spinner.tsx#Spinner"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./packages/react/src/components/Spinner/Spinner.module.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".Spinner-module_spinner__lKL1F {\n  animation: Spinner-module_rotate-animation__GiOU1 2s linear infinite;\n}\n\n.Spinner-module_spinnerCircle__rz_YC {\n  animation: Spinner-module_stroke-animation__BFhIL 1.5s ease-in-out infinite;\n}\n\n.Spinner-module_defaultForeground__kWSLX {\n  stroke: var(--colors-grey-500);\n}\n\n.Spinner-module_interactionForeground__RITJB {\n  stroke: var(--semantic-border-action-default);\n}\n\n.Spinner-module_invertedForeground___CyKr {\n  stroke: var(--colors-white);\n}\n\n.Spinner-module_defaultBackground__z5kyk,\n.Spinner-module_interactionBackground__HGEyz,\n.Spinner-module_invertedBackground__SdY3Z {\n  stroke: var(--colors-grey-200);\n}\n\n@keyframes Spinner-module_rotate-animation__GiOU1 {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes Spinner-module_stroke-animation__BFhIL {\n  0% {\n    stroke-dasharray: 1, 150;\n    stroke-dashoffset: 0;\n  }\n\n  50% {\n    stroke-dasharray: 90, 150;\n    stroke-dashoffset: -62;\n  }\n\n  100% {\n    stroke-dasharray: 90, 150;\n    stroke-dashoffset: -124;\n  }\n}\n","",{version:3,sources:["webpack://./packages/react/src/components/Spinner/Spinner.module.css"],names:[],mappings:"AAAA;EACE,oEAA8C;AAChD;;AAEA;EACE,2EAAqD;AACvD;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,6CAA6C;AAC/C;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;;;EAGE,8BAA8B;AAChC;;AAEA;EACE;IACE,yBAAyB;EAC3B;AACF;;AAEA;EACE;IACE,wBAAwB;IACxB,oBAAoB;EACtB;;EAEA;IACE,yBAAyB;IACzB,sBAAsB;EACxB;;EAEA;IACE,yBAAyB;IACzB,uBAAuB;EACzB;AACF",sourcesContent:[".spinner {\n  animation: rotate-animation 2s linear infinite;\n}\n\n.spinnerCircle {\n  animation: stroke-animation 1.5s ease-in-out infinite;\n}\n\n.defaultForeground {\n  stroke: var(--colors-grey-500);\n}\n\n.interactionForeground {\n  stroke: var(--semantic-border-action-default);\n}\n\n.invertedForeground {\n  stroke: var(--colors-white);\n}\n\n.defaultBackground,\n.interactionBackground,\n.invertedBackground {\n  stroke: var(--colors-grey-200);\n}\n\n@keyframes rotate-animation {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes stroke-animation {\n  0% {\n    stroke-dasharray: 1, 150;\n    stroke-dashoffset: 0;\n  }\n\n  50% {\n    stroke-dasharray: 90, 150;\n    stroke-dashoffset: -62;\n  }\n\n  100% {\n    stroke-dasharray: 90, 150;\n    stroke-dashoffset: -124;\n  }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={spinner:"Spinner-module_spinner__lKL1F","rotate-animation":"Spinner-module_rotate-animation__GiOU1",spinnerCircle:"Spinner-module_spinnerCircle__rz_YC","stroke-animation":"Spinner-module_stroke-animation__BFhIL",defaultForeground:"Spinner-module_defaultForeground__kWSLX",interactionForeground:"Spinner-module_interactionForeground__RITJB",invertedForeground:"Spinner-module_invertedForeground___CyKr",defaultBackground:"Spinner-module_defaultBackground__z5kyk",interactionBackground:"Spinner-module_interactionBackground__HGEyz",invertedBackground:"Spinner-module_invertedBackground__SdY3Z"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);