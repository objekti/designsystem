/*! For license information please see react-src-components-TextArea-TextArea-mdx.1f603f48.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkroot=self.webpackChunkroot||[]).push([[6297],{"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./packages/react/src/components/TextArea/TextArea.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_storybook_addon_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_docs_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./docs-components/index.ts"),_TextArea_stories__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/react/src/components/TextArea/TextArea.stories.tsx");const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{})})):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre",h3:"h3"},(0,_storybook_addon_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{of:_TextArea_stories__WEBPACK_IMPORTED_MODULE_5__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"textarea",children:"TextArea"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_docs_components__WEBPACK_IMPORTED_MODULE_2__.AL,{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"TextArea"})," brukes til å ta imot lengre tekster, gjerne over flere linjer."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"bruk",children:"Bruk"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-tsx",children:"import { TextArea } from '@digdir/design-system-react';\n\n<TextArea {...props} />;\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"props",children:"Props"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.sq,{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.ZX,{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"eksempler",children:"Eksempler"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"standard",children:"Standard"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.oG,{of:_TextArea_stories__WEBPACK_IMPORTED_MODULE_5__.Standard})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"med-feil",children:"Med feil"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.oG,{of:_TextArea_stories__WEBPACK_IMPORTED_MODULE_5__.MedFeil})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"skrivebeskyttet",children:"Skrivebeskyttet"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.oG,{of:_TextArea_stories__WEBPACK_IMPORTED_MODULE_5__.Skrivebeskyttet})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"bekreftelsesvisning",children:"Bekreftelsesvisning"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.oG,{of:_TextArea_stories__WEBPACK_IMPORTED_MODULE_5__.Bekreftelsesvisning})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"deaktivert",children:"Deaktivert"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.oG,{of:_TextArea_stories__WEBPACK_IMPORTED_MODULE_5__.Deaktivert})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"viser-antall-tegn-igjen-å-skrive",children:"Viser antall tegn igjen å skrive"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.oG,{of:_TextArea_stories__WEBPACK_IMPORTED_MODULE_5__.AntallTegnIgjenASkrive})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"tokens",children:"Tokens"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_docs_components__WEBPACK_IMPORTED_MODULE_2__.jq,{jsonKey:"component.textfield",componentName:"textfield",showPreview:!1,description:!0})]})}}},"./packages/react/src/components/TextArea/TextArea.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AntallTegnIgjenASkrive:()=>AntallTegnIgjenASkrive,Bekreftelsesvisning:()=>Bekreftelsesvisning,Deaktivert:()=>Deaktivert,MedFeil:()=>MedFeil,Skrivebeskyttet:()=>Skrivebeskyttet,Standard:()=>Standard,__namedExportsOrder:()=>__namedExportsOrder,default:()=>TextArea_stories});var react=__webpack_require__("./node_modules/react/index.js"),enums=__webpack_require__("./packages/react/src/types/enums.ts"),InputWrapper=__webpack_require__("./packages/react/src/components/_InputWrapper/InputWrapper.tsx"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),TextArea_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./packages/react/src/components/TextArea/TextArea.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(TextArea_module.Z,options);const TextArea_TextArea_module=TextArea_module.Z&&TextArea_module.Z.locals?TextArea_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const TextArea=(0,react.forwardRef)((({isValid=!0,disabled=!1,readOnly=!1,resize="none",label,characterLimit,value,onChange,"aria-describedby":ariaDescribedBy,...rest},ref)=>{const[currentInputValue,setCurrentInputValue]=(0,react.useState)(value?value.toString():""),generatedTextareaId=(0,react.useId)(),textAreaId=rest.id??generatedTextareaId,handleOnChange=event=>{setCurrentInputValue(event.target.value),onChange&&onChange(event)};return(0,jsx_runtime.jsx)(InputWrapper.S,{value:currentInputValue,disabled,inputId:textAreaId,characterLimit,ariaDescribedBy,inputRenderer:({className,inputId,describedBy})=>(0,jsx_runtime.jsx)("textarea",{...rest,ref,value,onChange:handleOnChange,id:inputId,"aria-describedby":describedBy,disabled,readOnly:Boolean(readOnly),className:[className,TextArea_TextArea_module.textArea,TextArea_TextArea_module[`resize-${resize}`]].join(" ")}),isValid,label,readOnly})}));try{TextArea.displayName="TextArea",TextArea.__docgenInfo={description:"",displayName:"TextArea",props:{isValid:{defaultValue:{value:"true"},description:"Whether the textarea value is valid.",name:"isValid",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:{value:"false"},description:"Whether the textarea is read-only.",name:"readOnly",required:!1,type:{name:"boolean | ReadOnlyVariant_"}},resize:{defaultValue:{value:"none"},description:"The resize behavior of the text area.",name:"resize",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"both"'},{value:'"horizontal"'},{value:'"vertical"'}]}},characterLimit:{defaultValue:null,description:"The characterLimit function calculates remaining characters.\nProvide a `label` function that takes count as parameter and returns a message.\nUse `srLabel` to describe `maxCount` for screen readers.",name:"characterLimit",required:!1,type:{name:"CharacterLimit"}},label:{defaultValue:null,description:"Label for the textarea.",name:"label",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/TextArea/TextArea.tsx#TextArea"]={docgenInfo:TextArea.__docgenInfo,name:"TextArea",path:"packages/react/src/components/TextArea/TextArea.tsx#TextArea"})}catch(__react_docgen_typescript_loader_error){}const TextArea_stories={title:"Kjernekomponenter/TextArea",component:TextArea,parameters:{status:{type:"beta",url:"http://www.url.com/status"}}},Template=args=>(0,jsx_runtime.jsx)(TextArea,{...args});Template.displayName="Template";const createTemplate=(name,args)=>({render:Template,name,args:{...args}}),Standard=createTemplate("Standard"),MedFeil=createTemplate("Med feil",{isValid:!1}),Skrivebeskyttet=createTemplate("Skrivebeskyttet",{readOnly:enums.Hx.ReadOnlyInfo,value:"Dette er en skrivebeskyttet tekst."}),Bekreftelsesvisning=createTemplate("Bekreftelsesvisning",{readOnly:enums.Hx.ReadOnlyConfirm,value:"Dette er en bekreftelsesvisning av en tekst som er skrevet inn i et tekstfelt."}),Deaktivert=createTemplate("Deaktivert",{disabled:!0}),AntallTegnIgjenASkrive=createTemplate("Antall tegn igjen å skrive",{label:"Kommentar",characterLimit:{maxCount:10,label:count=>count>=0?`Du har ${count} tegn igjen`:`Du har ${Math.abs(count)} tegn for mye`,srLabel:"Tekstområdet har plass til 10 tegn."}});Standard.parameters={...Standard.parameters,docs:{...Standard.parameters?.docs,source:{originalSource:"createTemplate('Standard')",...Standard.parameters?.docs?.source}}},MedFeil.parameters={...MedFeil.parameters,docs:{...MedFeil.parameters?.docs,source:{originalSource:"createTemplate('Med feil', {\n  isValid: false\n})",...MedFeil.parameters?.docs?.source}}},Skrivebeskyttet.parameters={...Skrivebeskyttet.parameters,docs:{...Skrivebeskyttet.parameters?.docs,source:{originalSource:"createTemplate('Skrivebeskyttet', {\n  readOnly: ReadOnlyVariant.ReadOnlyInfo,\n  value: 'Dette er en skrivebeskyttet tekst.'\n})",...Skrivebeskyttet.parameters?.docs?.source}}},Bekreftelsesvisning.parameters={...Bekreftelsesvisning.parameters,docs:{...Bekreftelsesvisning.parameters?.docs,source:{originalSource:"createTemplate('Bekreftelsesvisning', {\n  readOnly: ReadOnlyVariant.ReadOnlyConfirm,\n  value: 'Dette er en bekreftelsesvisning av en tekst som er skrevet inn i et tekstfelt.'\n})",...Bekreftelsesvisning.parameters?.docs?.source}}},Deaktivert.parameters={...Deaktivert.parameters,docs:{...Deaktivert.parameters?.docs,source:{originalSource:"createTemplate('Deaktivert', {\n  disabled: true\n})",...Deaktivert.parameters?.docs?.source}}},AntallTegnIgjenASkrive.parameters={...AntallTegnIgjenASkrive.parameters,docs:{...AntallTegnIgjenASkrive.parameters?.docs,source:{originalSource:"createTemplate('Antall tegn igjen å skrive', {\n  label: 'Kommentar',\n  characterLimit: {\n    maxCount: 10,\n    label: (count: number) => count >= 0 ? `Du har ${count} tegn igjen` : `Du har ${Math.abs(count)} tegn for mye`,\n    srLabel: 'Tekstområdet har plass til 10 tegn.'\n  }\n})",...AntallTegnIgjenASkrive.parameters?.docs?.source}}};const __namedExportsOrder=["Standard","MedFeil","Skrivebeskyttet","Bekreftelsesvisning","Deaktivert","AntallTegnIgjenASkrive"]},"./packages/react/src/types/enums.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{DX:()=>RadioGroupVariant,Hx:()=>ReadOnlyVariant,TZ:()=>CheckboxGroupVariant,Wu:()=>ButtonVariant,YN:()=>RadioGroupSize,Yi:()=>LegacyAccordionIconVariant,jq:()=>RadioButtonSize,oU:()=>PopoverVariant,qE:()=>ButtonSize,rp:()=>ButtonColor,wO:()=>FieldSetSize});let ReadOnlyVariant=function(ReadOnlyVariant){return ReadOnlyVariant.ReadOnlyInfo="readonlyInfo",ReadOnlyVariant.ReadOnlyConfirm="readonlyConfirm",ReadOnlyVariant}({}),LegacyAccordionIconVariant=function(LegacyAccordionIconVariant){return LegacyAccordionIconVariant.Primary="primary",LegacyAccordionIconVariant.Secondary="secondary",LegacyAccordionIconVariant}({}),ButtonSize=function(ButtonSize){return ButtonSize.Small="small",ButtonSize.Medium="medium",ButtonSize.Large="large",ButtonSize}({}),ButtonColor=function(ButtonColor){return ButtonColor.Primary="primary",ButtonColor.Secondary="secondary",ButtonColor.Success="success",ButtonColor.Danger="danger",ButtonColor.Inverted="inverted",ButtonColor}({}),ButtonVariant=function(ButtonVariant){return ButtonVariant.Filled="filled",ButtonVariant.Outline="outline",ButtonVariant.Quiet="quiet",ButtonVariant}({}),CheckboxGroupVariant=function(CheckboxGroupVariant){return CheckboxGroupVariant.Vertical="vertical",CheckboxGroupVariant.Horizontal="horizontal",CheckboxGroupVariant}({}),FieldSetSize=function(FieldSetSize){return FieldSetSize.Xsmall="xsmall",FieldSetSize.Small="small",FieldSetSize}({}),RadioGroupSize=function(RadioGroupSize){return RadioGroupSize.Xsmall="xsmall",RadioGroupSize.Small="small",RadioGroupSize}({}),RadioButtonSize=function(RadioButtonSize){return RadioButtonSize.Xsmall="xsmall",RadioButtonSize.Small="small",RadioButtonSize}({}),PopoverVariant=function(PopoverVariant){return PopoverVariant.Default="default",PopoverVariant.Info="info",PopoverVariant.Warning="warning",PopoverVariant.Danger="danger",PopoverVariant}({}),RadioGroupVariant=function(RadioGroupVariant){return RadioGroupVariant.Vertical="vertical",RadioGroupVariant.Horizontal="horizontal",RadioGroupVariant}({})},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./packages/react/src/components/TextArea/TextArea.module.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".TextArea-module_textArea__UKULF {\n  font-family: inherit;\n  font-size: var(--component-textarea-font_size-sm);\n}\n\n.TextArea-module_textArea__UKULF.TextArea-module_resize-none__ASAqx {\n  resize: none;\n}\n\n.TextArea-module_textArea__UKULF.TextArea-module_resize-both__WPaYv {\n  resize: both;\n}\n\n.TextArea-module_textArea__UKULF.TextArea-module_resize-horizontal__hEbtG {\n  resize: horizontal;\n}\n\n.TextArea-module_textArea__UKULF.TextArea-module_resize-vertical__luOND {\n  resize: vertical;\n}\n","",{version:3,sources:["webpack://./packages/react/src/components/TextArea/TextArea.module.css"],names:[],mappings:"AAAA;EACE,oBAAoB;EACpB,iDAAiD;AACnD;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;AAClB",sourcesContent:[".textArea {\n  font-family: inherit;\n  font-size: var(--component-textarea-font_size-sm);\n}\n\n.textArea.resize-none {\n  resize: none;\n}\n\n.textArea.resize-both {\n  resize: both;\n}\n\n.textArea.resize-horizontal {\n  resize: horizontal;\n}\n\n.textArea.resize-vertical {\n  resize: vertical;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={textArea:"TextArea-module_textArea__UKULF","resize-none":"TextArea-module_resize-none__ASAqx","resize-both":"TextArea-module_resize-both__WPaYv","resize-horizontal":"TextArea-module_resize-horizontal__hEbtG","resize-vertical":"TextArea-module_resize-vertical__luOND"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);