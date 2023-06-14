/*! For license information please see 3803.deee0d1c.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkroot=self.webpackChunkroot||[]).push([[3803],{"./packages/react/src/components/Tag/Tag.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Colors:()=>Colors,Preview:()=>Preview,Sizes:()=>Sizes,Variants:()=>Variants,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Tag_stories});var react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),Paragraph=__webpack_require__("./packages/react/src/components/Typography/Paragraph/Paragraph.tsx"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Tag_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./packages/react/src/components/Tag/Tag.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Tag_module.Z,options);const Tag_Tag_module=Tag_module.Z&&Tag_module.Z.locals?Tag_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Tag=(0,react.forwardRef)((({children,color="neutral",size="medium",variant="filled",className,...restHTMLProps},ref)=>(0,jsx_runtime.jsx)(Paragraph.n,{as:"span",size,...restHTMLProps,className:classnames_default()(Tag_Tag_module.tag,Tag_Tag_module[color],Tag_Tag_module[size],Tag_Tag_module[variant],className),ref,children})));try{Tag.displayName="Tag",Tag.__docgenInfo={description:"",displayName:"Tag",props:{color:{defaultValue:{value:"neutral"},description:"Color of the tag",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"neutral"'},{value:'"success"'},{value:'"warning"'},{value:'"danger"'},{value:'"info"'}]}},size:{defaultValue:{value:"medium"},description:"Size of the tag",name:"size",required:!1,type:{name:"enum",value:[{value:'"xsmall"'},{value:'"small"'},{value:'"medium"'}]}},variant:{defaultValue:{value:"filled"},description:"Variant of the tag",name:"variant",required:!1,type:{name:"enum",value:[{value:'"filled"'},{value:'"outlined"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/Tag/Tag.tsx#Tag"]={docgenInfo:Tag.__docgenInfo,name:"Tag",path:"packages/react/src/components/Tag/Tag.tsx#Tag"})}catch(__react_docgen_typescript_loader_error){}const Tag_stories={title:"Kjernekomponenter/Tag",component:Tag,parameters:{status:{type:"beta",url:"http://www.url.com/status"}}},Preview={args:{children:"New",size:"medium",variant:"outlined",color:"neutral"}},Sizes=({...rest})=>(0,jsx_runtime.jsx)(StoryContainer,{row:!1,children:["xsmall","small","medium"].map((size=>(0,jsx_runtime.jsx)(Tag,{size,...rest,children:size},size)))});Sizes.displayName="Sizes";const Variants=({...rest})=>(0,jsx_runtime.jsx)(StoryContainer,{children:["filled","outlined"].map((variant=>(0,jsx_runtime.jsx)(Tag,{variant,...rest,children:variant},variant)))});Variants.displayName="Variants";const Colors=({...rest})=>{const colors=["neutral","success","warning","danger","info","primary","secondary","tertiary"];return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(StoryContainer,{children:colors.map((color=>(0,jsx_runtime.jsx)(Tag,{color,...rest,children:color},color)))}),(0,jsx_runtime.jsx)(StoryContainer,{children:colors.map((color=>(0,jsx_runtime.jsx)(Tag,{color,variant:"outlined",...rest,children:color},color)))})]})},StoryContainer=({children,row=!0})=>(0,jsx_runtime.jsx)("div",{style:{display:row?"flex":"grid",gap:"8px",marginBottom:"8px"},children});StoryContainer.displayName="StoryContainer",Preview.parameters={...Preview.parameters,docs:{...Preview.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: 'New',\n    size: 'medium',\n    variant: 'outlined',\n    color: 'neutral'\n  }\n}",...Preview.parameters?.docs?.source}}},Sizes.parameters={...Sizes.parameters,docs:{...Sizes.parameters?.docs,source:{originalSource:"({\n  ...rest\n}): JSX.Element => {\n  const sizes: TagProps['size'][] = ['xsmall', 'small', 'medium'];\n  return <StoryContainer row={false}>\n      {sizes.map(size => <Tag key={size} size={size} {...rest}>\n          {size}\n        </Tag>)}\n    </StoryContainer>;\n}",...Sizes.parameters?.docs?.source}}},Variants.parameters={...Variants.parameters,docs:{...Variants.parameters?.docs,source:{originalSource:"({\n  ...rest\n}): JSX.Element => {\n  const variants: TagProps['variant'][] = ['filled', 'outlined'];\n  return <StoryContainer>\n      {variants.map(variant => <Tag key={variant} variant={variant} {...rest}>\n          {variant}\n        </Tag>)}\n    </StoryContainer>;\n}",...Variants.parameters?.docs?.source}}},Colors.parameters={...Colors.parameters,docs:{...Colors.parameters?.docs,source:{originalSource:"({\n  ...rest\n}): JSX.Element => {\n  const colors: TagProps['color'][] = ['neutral', 'success', 'warning', 'danger', 'info', 'primary', 'secondary', 'tertiary'];\n  return <>\n      <StoryContainer>\n        {colors.map(color => <Tag key={color} color={color} {...rest}>\n            {color}\n          </Tag>)}\n      </StoryContainer>\n      <StoryContainer>\n        {colors.map(color => <Tag key={color} color={color} variant='outlined' {...rest}>\n            {color}\n          </Tag>)}\n      </StoryContainer>\n    </>;\n}",...Colors.parameters?.docs?.source}}};const __namedExportsOrder=["Preview","Sizes","Variants","Colors"]},"./packages/react/src/components/Typography/Paragraph/Paragraph.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{n:()=>Paragraph});var react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Paragraph_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./packages/react/src/components/Typography/Paragraph/Paragraph.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Paragraph_module.Z,options);const Paragraph_Paragraph_module=Paragraph_module.Z&&Paragraph_module.Z.locals?Paragraph_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Paragraph=(0,react.forwardRef)((({className,size="medium",spacing,as:Component="p",short,...rest},ref)=>(0,jsx_runtime.jsx)(Component,{...rest,ref,className:classnames_default()(Paragraph_Paragraph_module.paragraph,Paragraph_Paragraph_module[size],{[Paragraph_Paragraph_module.spacing]:!!spacing,[Paragraph_Paragraph_module.short]:short},className)})));try{Paragraph.displayName="Paragraph",Paragraph.__docgenInfo={description:"Use `Paragraph` to display text with paragraph text styles.",displayName:"Paragraph",props:{size:{defaultValue:{value:"medium"},description:"Changes text sizing",name:"size",required:!1,type:{name:"enum",value:[{value:'"xsmall"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},spacing:{defaultValue:null,description:"Adds margin-bottom",name:"spacing",required:!1,type:{name:"boolean"}},short:{defaultValue:null,description:"Reduces line-height for short paragraphs",name:"short",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/Typography/Paragraph/Paragraph.tsx#Paragraph"]={docgenInfo:Paragraph.__docgenInfo,name:"Paragraph",path:"packages/react/src/components/Typography/Paragraph/Paragraph.tsx#Paragraph"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./packages/react/src/components/Tag/Tag.module.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".Tag-module_tag__lGr8_ {\n  --fdsc-tag-border: var(--fds-semantic-border-neutral-default);\n  --fdsc-tag-background: var(--fds-semantic-surface-neutral-subtle);\n  --fdsc-tag-text: var(--fds-semantic-text-neutral-default);\n  --fdsc-tag-padding: var(--fds-spacing-2);\n  --fdsc-tag-min-height: var(--fds-sizing-7);\n\n  color: var(--fdsc-tag-text);\n  padding: 0 var(--fdsc-tag-padding);\n  border: var(--fds-border_width-default) solid var(--fdsc-tag-border);\n  background-color: var(--fdsc-tag-background);\n  min-height: var(--fdsc-tag-min-height);\n  display: flex;\n  align-items: center;\n  box-sizing: border-box;\n  word-break: break-word;\n  border-radius: 2px;\n  width: max-content;\n}\n\n.Tag-module_xsmall__jymcC {\n  --fdsc-tag-padding: var(--fds-spacing-1);\n  --fdsc-tag-min-height: var(--fds-sizing-5);\n}\n\n.Tag-module_small__jVPPx {\n  --fdsc-tag-padding: var(--fds-spacing-1);\n  --fdsc-tag-min-height: var(--fds-sizing-6);\n}\n\n.Tag-module_medium__PLF5n {\n  --fdsc-tag-padding: var(--fds-spacing-2);\n  --fdsc-tag-min-height: var(--fds-sizing-7);\n}\n\n.Tag-module_outlined__EoFQX.Tag-module_neutral__tcw8E {\n  --fdsc-tag-border: var(--fds-semantic-border-neutral-default);\n  --fdsc-tag-background: var(--fds-semantic-surface-neutral-subtle);\n  --fdsc-tag-text: var(--fds-semantic-text-neutral-default);\n}\n\n.Tag-module_outlined__EoFQX.Tag-module_info__irsu5 {\n  --fdsc-tag-border: var(--fds-semantic-border-info-default);\n  --fdsc-tag-background: var(--fds-semantic-surface-info-subtle);\n  --fdsc-tag-text: var(--fds-semantic-text-neutral-default);\n}\n\n.Tag-module_outlined__EoFQX.Tag-module_success__qewen {\n  --fdsc-tag-border: var(--fds-semantic-border-success-default);\n  --fdsc-tag-background: var(--fds-semantic-surface-success-subtle);\n  --fdsc-tag-text: var(--fds-semantic-text-success-on_success_subtle);\n}\n\n.Tag-module_outlined__EoFQX.Tag-module_warning__EYGdX {\n  --fdsc-tag-border: var(--fds-semantic-border-warning-default);\n  --fdsc-tag-background: var(--fds-semantic-surface-warning-subtle);\n  --fdsc-tag-text: var(--fds-semantic-text-neutral-default);\n}\n\n.Tag-module_outlined__EoFQX.Tag-module_danger__e18IX {\n  --fdsc-tag-border: var(--fds-semantic-border-danger-default);\n  --fdsc-tag-background: var(--fds-semantic-surface-danger-subtle);\n  --fdsc-tag-text: var(--fds-semantic-text-danger-on_danger_subtle);\n}\n\n.Tag-module_outlined__EoFQX.Tag-module_primary__ZhqmX {\n  --fdsc-tag-border: var(--fds-semantic-surface-primary-dark);\n  --fdsc-tag-background: var(--fds-semantic-surface-primary-light);\n  --fdsc-tag-text: var(--fds-semantic-text-neutral-default);\n}\n\n.Tag-module_outlined__EoFQX.Tag-module_secondary__ph90X {\n  --fdsc-tag-border: var(--fds-semantic-surface-secondary-dark);\n  --fdsc-tag-background: var(--fds-semantic-surface-secondary-light);\n  --fdsc-tag-text: var(--fds-semantic-text-neutral-default);\n}\n\n.Tag-module_outlined__EoFQX.Tag-module_tertiary__TBHpp {\n  --fdsc-tag-border: var(--fds-semantic-surface-tertiary-dark);\n  --fdsc-tag-background: var(--fds-semantic-surface-tertiary-light);\n  --fdsc-tag-text: var(--fds-semantic-text-neutral-default);\n}\n\n.Tag-module_filled__GRw83.Tag-module_neutral__tcw8E {\n  --fdsc-tag-border: var(--fds-semantic-surface-neutral-dark);\n  --fdsc-tag-background: var(--fds-semantic-surface-neutral-dark);\n  --fdsc-tag-text: var(--fds-semantic-text-neutral-on_inverted);\n}\n\n.Tag-module_filled__GRw83.Tag-module_info__irsu5 {\n  --fdsc-tag-border: var(--fds-semantic-surface-info-subtle-hover);\n  --fdsc-tag-background: var(--fds-semantic-surface-info-subtle-hover);\n  --fdsc-tag-text: var(--fds-semantic-text-neutral-default);\n}\n\n.Tag-module_filled__GRw83.Tag-module_success__qewen {\n  --fdsc-tag-border: var(--fds-semantic-surface-success-default);\n  --fdsc-tag-background: var(--fds-semantic-surface-success-default);\n  --fdsc-tag-text: var(--fds-semantic-text-success-on_success);\n}\n\n.Tag-module_filled__GRw83.Tag-module_warning__EYGdX {\n  --fdsc-tag-border: var(--fds-semantic-surface-warning-default);\n  --fdsc-tag-background: var(--fds-semantic-surface-warning-default);\n  --fdsc-tag-text: var(--fds-semantic-text-neutral-default);\n}\n\n.Tag-module_filled__GRw83.Tag-module_danger__e18IX {\n  --fdsc-tag-border: var(--fds-semantic-surface-danger-default);\n  --fdsc-tag-background: var(--fds-semantic-surface-danger-default);\n  --fdsc-tag-text: var(--fds-semantic-text-danger-on_danger);\n}\n\n.Tag-module_filled__GRw83.Tag-module_primary__ZhqmX {\n  --fdsc-tag-border: var(--fds-semantic-surface-primary-dark);\n  --fdsc-tag-background: var(--fds-semantic-surface-primary-dark);\n  --fdsc-tag-text: var(--fds-semantic-text-neutral-on_inverted);\n}\n\n.Tag-module_filled__GRw83.Tag-module_secondary__ph90X {\n  --fdsc-tag-border: var(--fds-semantic-surface-secondary-dark);\n  --fdsc-tag-background: var(--fds-semantic-surface-secondary-dark);\n  --fdsc-tag-text: var(--fds-semantic-text-neutral-on_inverted);\n}\n\n.Tag-module_filled__GRw83.Tag-module_tertiary__TBHpp {\n  --fdsc-tag-border: var(--fds-semantic-surface-tertiary-dark);\n  --fdsc-tag-background: var(--fds-semantic-surface-tertiary-dark);\n  --fdsc-tag-text: var(--fds-semantic-text-neutral-on_inverted);\n}\n","",{version:3,sources:["webpack://./packages/react/src/components/Tag/Tag.module.css"],names:[],mappings:"AAAA;EACE,6DAA6D;EAC7D,iEAAiE;EACjE,yDAAyD;EACzD,wCAAwC;EACxC,0CAA0C;;EAE1C,2BAA2B;EAC3B,kCAAkC;EAClC,oEAAoE;EACpE,4CAA4C;EAC5C,sCAAsC;EACtC,aAAa;EACb,mBAAmB;EACnB,sBAAsB;EACtB,sBAAsB;EACtB,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,wCAAwC;EACxC,0CAA0C;AAC5C;;AAEA;EACE,wCAAwC;EACxC,0CAA0C;AAC5C;;AAEA;EACE,wCAAwC;EACxC,0CAA0C;AAC5C;;AAEA;EACE,6DAA6D;EAC7D,iEAAiE;EACjE,yDAAyD;AAC3D;;AAEA;EACE,0DAA0D;EAC1D,8DAA8D;EAC9D,yDAAyD;AAC3D;;AAEA;EACE,6DAA6D;EAC7D,iEAAiE;EACjE,mEAAmE;AACrE;;AAEA;EACE,6DAA6D;EAC7D,iEAAiE;EACjE,yDAAyD;AAC3D;;AAEA;EACE,4DAA4D;EAC5D,gEAAgE;EAChE,iEAAiE;AACnE;;AAEA;EACE,2DAA2D;EAC3D,gEAAgE;EAChE,yDAAyD;AAC3D;;AAEA;EACE,6DAA6D;EAC7D,kEAAkE;EAClE,yDAAyD;AAC3D;;AAEA;EACE,4DAA4D;EAC5D,iEAAiE;EACjE,yDAAyD;AAC3D;;AAEA;EACE,2DAA2D;EAC3D,+DAA+D;EAC/D,6DAA6D;AAC/D;;AAEA;EACE,gEAAgE;EAChE,oEAAoE;EACpE,yDAAyD;AAC3D;;AAEA;EACE,8DAA8D;EAC9D,kEAAkE;EAClE,4DAA4D;AAC9D;;AAEA;EACE,8DAA8D;EAC9D,kEAAkE;EAClE,yDAAyD;AAC3D;;AAEA;EACE,6DAA6D;EAC7D,iEAAiE;EACjE,0DAA0D;AAC5D;;AAEA;EACE,2DAA2D;EAC3D,+DAA+D;EAC/D,6DAA6D;AAC/D;;AAEA;EACE,6DAA6D;EAC7D,iEAAiE;EACjE,6DAA6D;AAC/D;;AAEA;EACE,4DAA4D;EAC5D,gEAAgE;EAChE,6DAA6D;AAC/D",sourcesContent:[".tag {\n  --fdsc-tag-border: var(--fds-semantic-border-neutral-default);\n  --fdsc-tag-background: var(--fds-semantic-surface-neutral-subtle);\n  --fdsc-tag-text: var(--fds-semantic-text-neutral-default);\n  --fdsc-tag-padding: var(--fds-spacing-2);\n  --fdsc-tag-min-height: var(--fds-sizing-7);\n\n  color: var(--fdsc-tag-text);\n  padding: 0 var(--fdsc-tag-padding);\n  border: var(--fds-border_width-default) solid var(--fdsc-tag-border);\n  background-color: var(--fdsc-tag-background);\n  min-height: var(--fdsc-tag-min-height);\n  display: flex;\n  align-items: center;\n  box-sizing: border-box;\n  word-break: break-word;\n  border-radius: 2px;\n  width: max-content;\n}\n\n.xsmall {\n  --fdsc-tag-padding: var(--fds-spacing-1);\n  --fdsc-tag-min-height: var(--fds-sizing-5);\n}\n\n.small {\n  --fdsc-tag-padding: var(--fds-spacing-1);\n  --fdsc-tag-min-height: var(--fds-sizing-6);\n}\n\n.medium {\n  --fdsc-tag-padding: var(--fds-spacing-2);\n  --fdsc-tag-min-height: var(--fds-sizing-7);\n}\n\n.outlined.neutral {\n  --fdsc-tag-border: var(--fds-semantic-border-neutral-default);\n  --fdsc-tag-background: var(--fds-semantic-surface-neutral-subtle);\n  --fdsc-tag-text: var(--fds-semantic-text-neutral-default);\n}\n\n.outlined.info {\n  --fdsc-tag-border: var(--fds-semantic-border-info-default);\n  --fdsc-tag-background: var(--fds-semantic-surface-info-subtle);\n  --fdsc-tag-text: var(--fds-semantic-text-neutral-default);\n}\n\n.outlined.success {\n  --fdsc-tag-border: var(--fds-semantic-border-success-default);\n  --fdsc-tag-background: var(--fds-semantic-surface-success-subtle);\n  --fdsc-tag-text: var(--fds-semantic-text-success-on_success_subtle);\n}\n\n.outlined.warning {\n  --fdsc-tag-border: var(--fds-semantic-border-warning-default);\n  --fdsc-tag-background: var(--fds-semantic-surface-warning-subtle);\n  --fdsc-tag-text: var(--fds-semantic-text-neutral-default);\n}\n\n.outlined.danger {\n  --fdsc-tag-border: var(--fds-semantic-border-danger-default);\n  --fdsc-tag-background: var(--fds-semantic-surface-danger-subtle);\n  --fdsc-tag-text: var(--fds-semantic-text-danger-on_danger_subtle);\n}\n\n.outlined.primary {\n  --fdsc-tag-border: var(--fds-semantic-surface-primary-dark);\n  --fdsc-tag-background: var(--fds-semantic-surface-primary-light);\n  --fdsc-tag-text: var(--fds-semantic-text-neutral-default);\n}\n\n.outlined.secondary {\n  --fdsc-tag-border: var(--fds-semantic-surface-secondary-dark);\n  --fdsc-tag-background: var(--fds-semantic-surface-secondary-light);\n  --fdsc-tag-text: var(--fds-semantic-text-neutral-default);\n}\n\n.outlined.tertiary {\n  --fdsc-tag-border: var(--fds-semantic-surface-tertiary-dark);\n  --fdsc-tag-background: var(--fds-semantic-surface-tertiary-light);\n  --fdsc-tag-text: var(--fds-semantic-text-neutral-default);\n}\n\n.filled.neutral {\n  --fdsc-tag-border: var(--fds-semantic-surface-neutral-dark);\n  --fdsc-tag-background: var(--fds-semantic-surface-neutral-dark);\n  --fdsc-tag-text: var(--fds-semantic-text-neutral-on_inverted);\n}\n\n.filled.info {\n  --fdsc-tag-border: var(--fds-semantic-surface-info-subtle-hover);\n  --fdsc-tag-background: var(--fds-semantic-surface-info-subtle-hover);\n  --fdsc-tag-text: var(--fds-semantic-text-neutral-default);\n}\n\n.filled.success {\n  --fdsc-tag-border: var(--fds-semantic-surface-success-default);\n  --fdsc-tag-background: var(--fds-semantic-surface-success-default);\n  --fdsc-tag-text: var(--fds-semantic-text-success-on_success);\n}\n\n.filled.warning {\n  --fdsc-tag-border: var(--fds-semantic-surface-warning-default);\n  --fdsc-tag-background: var(--fds-semantic-surface-warning-default);\n  --fdsc-tag-text: var(--fds-semantic-text-neutral-default);\n}\n\n.filled.danger {\n  --fdsc-tag-border: var(--fds-semantic-surface-danger-default);\n  --fdsc-tag-background: var(--fds-semantic-surface-danger-default);\n  --fdsc-tag-text: var(--fds-semantic-text-danger-on_danger);\n}\n\n.filled.primary {\n  --fdsc-tag-border: var(--fds-semantic-surface-primary-dark);\n  --fdsc-tag-background: var(--fds-semantic-surface-primary-dark);\n  --fdsc-tag-text: var(--fds-semantic-text-neutral-on_inverted);\n}\n\n.filled.secondary {\n  --fdsc-tag-border: var(--fds-semantic-surface-secondary-dark);\n  --fdsc-tag-background: var(--fds-semantic-surface-secondary-dark);\n  --fdsc-tag-text: var(--fds-semantic-text-neutral-on_inverted);\n}\n\n.filled.tertiary {\n  --fdsc-tag-border: var(--fds-semantic-surface-tertiary-dark);\n  --fdsc-tag-background: var(--fds-semantic-surface-tertiary-dark);\n  --fdsc-tag-text: var(--fds-semantic-text-neutral-on_inverted);\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={tag:"Tag-module_tag__lGr8_",xsmall:"Tag-module_xsmall__jymcC",small:"Tag-module_small__jVPPx",medium:"Tag-module_medium__PLF5n",outlined:"Tag-module_outlined__EoFQX",neutral:"Tag-module_neutral__tcw8E",info:"Tag-module_info__irsu5",success:"Tag-module_success__qewen",warning:"Tag-module_warning__EYGdX",danger:"Tag-module_danger__e18IX",primary:"Tag-module_primary__ZhqmX",secondary:"Tag-module_secondary__ph90X",tertiary:"Tag-module_tertiary__TBHpp",filled:"Tag-module_filled__GRw83"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./packages/react/src/components/Typography/Paragraph/Paragraph.module.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".Paragraph-module_paragraph__OD_LH {\n  --fdsc-typography-font-family: inherit;\n\n  color: var(--fds-semantic-text-neutral-default);\n  margin: 0;\n}\n\n.Paragraph-module_spacing__J5h34 {\n  margin-bottom: var(--fds-spacing-4);\n}\n\n.Paragraph-module_paragraph__OD_LH.Paragraph-module_large__JYiVy {\n  font: var(--fds-typography-paragraph-large);\n  font-family: var(--fdsc-typography-font-family);\n}\n\n.Paragraph-module_paragraph__OD_LH.Paragraph-module_large__JYiVy.Paragraph-module_short__LhdTO {\n  font: var(--fds-typography-paragraph-short-large);\n  font-family: var(--fdsc-typography-font-family);\n}\n\n.Paragraph-module_paragraph__OD_LH.Paragraph-module_medium__WzZv8 {\n  font: var(--fds-typography-paragraph-medium);\n  font-family: var(--fdsc-typography-font-family);\n}\n\n.Paragraph-module_paragraph__OD_LH.Paragraph-module_medium__WzZv8.Paragraph-module_short__LhdTO {\n  font: var(--fds-typography-paragraph-short-medium);\n  font-family: var(--fdsc-typography-font-family);\n}\n\n.Paragraph-module_paragraph__OD_LH.Paragraph-module_small__c4bBZ {\n  font: var(--fds-typography-paragraph-small);\n  font-family: var(--fdsc-typography-font-family);\n}\n\n.Paragraph-module_paragraph__OD_LH.Paragraph-module_small__c4bBZ.Paragraph-module_short__LhdTO {\n  font: var(--fds-typography-paragraph-short-small);\n  font-family: var(--fdsc-typography-font-family);\n}\n\n.Paragraph-module_paragraph__OD_LH.Paragraph-module_xsmall__rvc3s {\n  font: var(--fds-typography-paragraph-xsmall);\n  font-family: var(--fdsc-typography-font-family);\n}\n\n.Paragraph-module_paragraph__OD_LH.Paragraph-module_xsmall__rvc3s.Paragraph-module_short__LhdTO {\n  font: var(--fds-typography-paragraph-short-xsmall);\n  font-family: var(--fdsc-typography-font-family);\n}\n","",{version:3,sources:["webpack://./packages/react/src/components/Typography/Paragraph/Paragraph.module.css"],names:[],mappings:"AAAA;EACE,sCAAsC;;EAEtC,+CAA+C;EAC/C,SAAS;AACX;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,2CAA2C;EAC3C,+CAA+C;AACjD;;AAEA;EACE,iDAAiD;EACjD,+CAA+C;AACjD;;AAEA;EACE,4CAA4C;EAC5C,+CAA+C;AACjD;;AAEA;EACE,kDAAkD;EAClD,+CAA+C;AACjD;;AAEA;EACE,2CAA2C;EAC3C,+CAA+C;AACjD;;AAEA;EACE,iDAAiD;EACjD,+CAA+C;AACjD;;AAEA;EACE,4CAA4C;EAC5C,+CAA+C;AACjD;;AAEA;EACE,kDAAkD;EAClD,+CAA+C;AACjD",sourcesContent:[".paragraph {\n  --fdsc-typography-font-family: inherit;\n\n  color: var(--fds-semantic-text-neutral-default);\n  margin: 0;\n}\n\n.spacing {\n  margin-bottom: var(--fds-spacing-4);\n}\n\n.paragraph.large {\n  font: var(--fds-typography-paragraph-large);\n  font-family: var(--fdsc-typography-font-family);\n}\n\n.paragraph.large.short {\n  font: var(--fds-typography-paragraph-short-large);\n  font-family: var(--fdsc-typography-font-family);\n}\n\n.paragraph.medium {\n  font: var(--fds-typography-paragraph-medium);\n  font-family: var(--fdsc-typography-font-family);\n}\n\n.paragraph.medium.short {\n  font: var(--fds-typography-paragraph-short-medium);\n  font-family: var(--fdsc-typography-font-family);\n}\n\n.paragraph.small {\n  font: var(--fds-typography-paragraph-small);\n  font-family: var(--fdsc-typography-font-family);\n}\n\n.paragraph.small.short {\n  font: var(--fds-typography-paragraph-short-small);\n  font-family: var(--fdsc-typography-font-family);\n}\n\n.paragraph.xsmall {\n  font: var(--fds-typography-paragraph-xsmall);\n  font-family: var(--fdsc-typography-font-family);\n}\n\n.paragraph.xsmall.short {\n  font: var(--fds-typography-paragraph-short-xsmall);\n  font-family: var(--fdsc-typography-font-family);\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={paragraph:"Paragraph-module_paragraph__OD_LH",spacing:"Paragraph-module_spacing__J5h34",large:"Paragraph-module_large__JYiVy",short:"Paragraph-module_short__LhdTO",medium:"Paragraph-module_medium__WzZv8",small:"Paragraph-module_small__c4bBZ",xsmall:"Paragraph-module_xsmall__rvc3s"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);