"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[8836],{"./packages/react/src/components/ErrorMessage/ErrorMessage.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B:()=>ErrorMessage});__webpack_require__("./node_modules/react/index.js");var injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),ErrorMessage_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./packages/react/src/components/ErrorMessage/ErrorMessage.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(ErrorMessage_module.Z,options);const ErrorMessage_ErrorMessage_module=ErrorMessage_module.Z&&ErrorMessage_module.Z.locals?ErrorMessage_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const ErrorMessage=({id,children,ariaLabel})=>(0,jsx_runtime.jsx)("div",{"aria-label":ariaLabel,className:ErrorMessage_ErrorMessage_module.errorMessageWrapper,"data-testid":"ErrorMessage",id,role:"alertdialog",children});ErrorMessage.displayName="ErrorMessage",ErrorMessage.displayName="ErrorMessage";try{ErrorMessage.displayName="ErrorMessage",ErrorMessage.__docgenInfo={description:"",displayName:"ErrorMessage",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},ariaLabel:{defaultValue:null,description:"",name:"ariaLabel",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/ErrorMessage/ErrorMessage.tsx#ErrorMessage"]={docgenInfo:ErrorMessage.__docgenInfo,name:"ErrorMessage",path:"packages/react/src/components/ErrorMessage/ErrorMessage.tsx#ErrorMessage"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/components/FieldSet/FieldSet.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C:()=>FieldSet});__webpack_require__("./node_modules/react/index.js");var classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),HelpText=__webpack_require__("./packages/react/src/components/HelpText/HelpText.tsx"),ErrorMessage=__webpack_require__("./packages/react/src/components/ErrorMessage/ErrorMessage.tsx"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),FieldSet_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./packages/react/src/components/FieldSet/FieldSet.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(FieldSet_module.Z,options);const FieldSet_FieldSet_module=FieldSet_module.Z&&FieldSet_module.Z.locals?FieldSet_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const FieldSet=({children,className,contentClassName,description,error,helpText,legend,size="small",...rest})=>(0,jsx_runtime.jsxs)("fieldset",{...rest,className:classnames_default()(FieldSet_FieldSet_module.fieldSet,FieldSet_FieldSet_module[size],className),children:[legend&&(0,jsx_runtime.jsx)("legend",{className:FieldSet_FieldSet_module.legend,children:(0,jsx_runtime.jsxs)("span",{className:FieldSet_FieldSet_module.legendAndHelpText,children:[(0,jsx_runtime.jsx)("span",{className:FieldSet_FieldSet_module.legendContent,children:legend}),helpText&&(0,jsx_runtime.jsx)(HelpText.R,{size,title:"string"==typeof legend?`Help text for ${legend}`:"",children:helpText})]})}),description&&(0,jsx_runtime.jsx)("p",{className:FieldSet_FieldSet_module.description,children:description}),(0,jsx_runtime.jsx)("div",{className:classnames_default()(FieldSet_FieldSet_module.content,contentClassName),children}),error&&(0,jsx_runtime.jsx)("div",{className:FieldSet_FieldSet_module.errorMessage,children:(0,jsx_runtime.jsx)(ErrorMessage.B,{children:error})})]});FieldSet.displayName="FieldSet",FieldSet.displayName="FieldSet";try{FieldSet.displayName="FieldSet",FieldSet.__docgenInfo={description:"",displayName:"FieldSet",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},contentClassName:{defaultValue:null,description:"",name:"contentClassName",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"ReactNode"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"ReactNode"}},helpText:{defaultValue:null,description:"",name:"helpText",required:!1,type:{name:"ReactNode"}},legend:{defaultValue:null,description:"",name:"legend",required:!1,type:{name:"ReactNode"}},size:{defaultValue:{value:"small"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"xsmall"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/FieldSet/FieldSet.tsx#FieldSet"]={docgenInfo:FieldSet.__docgenInfo,name:"FieldSet",path:"packages/react/src/components/FieldSet/FieldSet.tsx#FieldSet"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/types/enums.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{let CheckboxRadioTemplateSize,InputVariant,ReadOnlyVariant,IconVariant,LegacyAccordionIconVariant,ButtonSize,ButtonColor,ButtonVariant,CheckboxGroupVariant,FieldSetSize,HelpTextSize,RadioGroupSize,RadioButtonSize,PopoverVariant,RadioGroupVariant,HeadingSize,HeadingLevel;__webpack_require__.d(__webpack_exports__,{DX:()=>RadioGroupVariant,Hx:()=>ReadOnlyVariant,TZ:()=>CheckboxGroupVariant,Wu:()=>ButtonVariant,YN:()=>RadioGroupSize,Yi:()=>LegacyAccordionIconVariant,jq:()=>RadioButtonSize,oU:()=>PopoverVariant,qE:()=>ButtonSize,rp:()=>ButtonColor,wO:()=>FieldSetSize}),function(CheckboxRadioTemplateSize){CheckboxRadioTemplateSize.Xsmall="xsmall",CheckboxRadioTemplateSize.Small="small"}(CheckboxRadioTemplateSize||(CheckboxRadioTemplateSize={})),function(InputVariant){InputVariant.Default="default",InputVariant.Error="error",InputVariant.Disabled="disabled",InputVariant.ReadOnlyInfo="readonlyInfo",InputVariant.ReadOnlyConfirm="readonlyConfirm"}(InputVariant||(InputVariant={})),function(ReadOnlyVariant){ReadOnlyVariant.ReadOnlyInfo="readonlyInfo",ReadOnlyVariant.ReadOnlyConfirm="readonlyConfirm"}(ReadOnlyVariant||(ReadOnlyVariant={})),function(IconVariant){IconVariant.None="none",IconVariant.Error="error",IconVariant.Search="search"}(IconVariant||(IconVariant={})),function(LegacyAccordionIconVariant){LegacyAccordionIconVariant.Primary="primary",LegacyAccordionIconVariant.Secondary="secondary"}(LegacyAccordionIconVariant||(LegacyAccordionIconVariant={})),function(ButtonSize){ButtonSize.Small="small",ButtonSize.Medium="medium",ButtonSize.Large="large"}(ButtonSize||(ButtonSize={})),function(ButtonColor){ButtonColor.Primary="primary",ButtonColor.Secondary="secondary",ButtonColor.Success="success",ButtonColor.Danger="danger",ButtonColor.Inverted="inverted"}(ButtonColor||(ButtonColor={})),function(ButtonVariant){ButtonVariant.Filled="filled",ButtonVariant.Outline="outline",ButtonVariant.Quiet="quiet"}(ButtonVariant||(ButtonVariant={})),function(CheckboxGroupVariant){CheckboxGroupVariant.Vertical="vertical",CheckboxGroupVariant.Horizontal="horizontal"}(CheckboxGroupVariant||(CheckboxGroupVariant={})),function(FieldSetSize){FieldSetSize.Xsmall="xsmall",FieldSetSize.Small="small"}(FieldSetSize||(FieldSetSize={})),function(HelpTextSize){HelpTextSize.Xsmall="xsmall",HelpTextSize.Small="small"}(HelpTextSize||(HelpTextSize={})),function(RadioGroupSize){RadioGroupSize.Xsmall="xsmall",RadioGroupSize.Small="small"}(RadioGroupSize||(RadioGroupSize={})),function(RadioButtonSize){RadioButtonSize.Xsmall="xsmall",RadioButtonSize.Small="small"}(RadioButtonSize||(RadioButtonSize={})),function(PopoverVariant){PopoverVariant.Default="default",PopoverVariant.Info="info",PopoverVariant.Warning="warning",PopoverVariant.Danger="danger"}(PopoverVariant||(PopoverVariant={})),function(RadioGroupVariant){RadioGroupVariant.Vertical="vertical",RadioGroupVariant.Horizontal="horizontal"}(RadioGroupVariant||(RadioGroupVariant={})),function(HeadingSize){HeadingSize.XLarge="xlarge",HeadingSize.Large="large",HeadingSize.Medium="medium",HeadingSize.Small="small",HeadingSize.XSmall="xsmall"}(HeadingSize||(HeadingSize={})),function(HeadingLevel){HeadingLevel[HeadingLevel.H1=1]="H1",HeadingLevel[HeadingLevel.H2=2]="H2",HeadingLevel[HeadingLevel.H3=3]="H3",HeadingLevel[HeadingLevel.H4=4]="H4",HeadingLevel[HeadingLevel.H5=5]="H5",HeadingLevel[HeadingLevel.H6=6]="H6"}(HeadingLevel||(HeadingLevel={}))},"./packages/react/src/components/FieldSet/FieldSet.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:()=>Template,default:()=>__WEBPACK_DEFAULT_EXPORT__,fieldSet:()=>fieldSet});__webpack_require__("./node_modules/react/index.js");var _storybook_addon_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),_index__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/react/src/components/FieldSet/FieldSet.tsx"),_types_enums__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/react/src/types/enums.ts"),_docs_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./docs-components/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_index__WEBPACK_IMPORTED_MODULE_4__.C,{...args,children:args.children});const fieldSet=Template.bind({});fieldSet.storyName="FieldSet",fieldSet.args={children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p",{children:"Her er det noe innhold."}),legend:"Dette er en tittel",description:"Dette er en beskrivelse av innholdet.",size:_types_enums__WEBPACK_IMPORTED_MODULE_6__.wO.Small,helpText:"Help"},fieldSet.parameters={storySource:{source:"args => <FieldSet {...args}>{args.children}</FieldSet>"}};const componentMeta={title:"Kjernekomponenter/FieldSet",parameters:{status:{type:"beta",url:"http://www.url.com/status"}},component:_index__WEBPACK_IMPORTED_MODULE_4__.C,tags:["stories-mdx"],includeStories:["fieldSet"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_createMdxContent,{})}):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2"},(0,_storybook_addon_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.h_,{title:"Kjernekomponenter/FieldSet",component:_index__WEBPACK_IMPORTED_MODULE_4__.C,parameters:{status:{type:"beta",url:"http://www.url.com/status"}}}),"\n","\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h1,{id:"fieldset",children:"FieldSet"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_docs_components__WEBPACK_IMPORTED_MODULE_2__.AL,{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"FieldSet"})," brukes til å gruppere innhold i et skjema."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2,{id:"eksempel",children:"Eksempel"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"FieldSet",args:{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p,{children:"Her er det noe innhold."}),legend:"Dette er en tittel",description:"Dette er en beskrivelse av innholdet.",size:_types_enums__WEBPACK_IMPORTED_MODULE_6__.wO.Small,helpText:"Help"},children:Template.bind({})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2,{id:"egenskaper",children:"Egenskaper"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p,{children:["Det er mulig å legge til en tittel (",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"legend"}),") og en beskrivelse (",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"description"}),").\nMan kan legge til en hjelpetekst som vises ved aktivering av hjelpetekst-knappen\nved å bruke ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"helpText"}),"-attributten. Man kan også vise en feilmelding relatert til\ngruppen ved å bruke ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"error"}),"-attributten. Setter man ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"disabled"})," til ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"true"}),", vil alle\nfeltene i gruppen bli deaktivert."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.$4,{of:_index__WEBPACK_IMPORTED_MODULE_4__.C}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2,{id:"tokens",children:"Tokens"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_docs_components__WEBPACK_IMPORTED_MODULE_2__.jq,{jsonKey:"component.fieldset",componentName:"fieldset",showPreview:!1,description:!0})]})}}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./packages/react/src/components/ErrorMessage/ErrorMessage.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".ErrorMessage-module_errorMessageWrapper__nFOgx {\n  color: var(--component-error_message-color-text);\n  font-size: var(--component-error_message-font_size-xs);\n}\n","",{version:3,sources:["webpack://./packages/react/src/components/ErrorMessage/ErrorMessage.module.css"],names:[],mappings:"AAAA;EACE,gDAAgD;EAChD,sDAAsD;AACxD",sourcesContent:[".errorMessageWrapper {\n  color: var(--component-error_message-color-text);\n  font-size: var(--component-error_message-font_size-xs);\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={errorMessageWrapper:"ErrorMessage-module_errorMessageWrapper__nFOgx"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./packages/react/src/components/FieldSet/FieldSet.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".FieldSet-module_fieldSet__zm8qr {\n  --color: var(--component-checkbox-color-text-default);\n  --content-margin_top: var(--component-fieldset-space-gap-y-small);\n  --description-color: var(--component-field_description-color-text-default);\n  --description-margin_top: var(--component-field_description-space-top-small);\n  --error_message-margin_top: var(--component-fieldset-space-gap-y-small);\n  --help_text-gap: var(--component-field_description-space-top-small);\n  --font_size: var(--component-checkbox-font_size-sm);\n\n  color: var(--color);\n  border: 0;\n  font-size: var(--font_size);\n  line-height: var(--typography-default-line-height);\n  margin: 0;\n  padding: 0;\n}\n\n.FieldSet-module_small__vC3Sl {\n  --content-margin_top: var(--component-fieldset-space-gap-y-small);\n  --description-margin_top: var(--component-field_description-space-top-small);\n  --error_message-margin_top: var(--component-fieldset-space-gap-y-small);\n  --help_text-gap: var(--component-field_description-space-top-small);\n  --font_size: var(--component-checkbox-font_size-xs);\n}\n\n.FieldSet-module_xsmall__oe01L {\n  --content-margin_top: var(--component-fieldset-space-gap-y-xsmall);\n  --description-margin_top: var(--component-field_description-space-top-xsmall);\n  --error_message-margin_top: var(--component-fieldset-space-gap-y-xsmall);\n  --help_text-gap: var(--component-field_description-space-top-xsmall);\n  --font_size: var(--component-checkbox-font_size-xs);\n}\n\n.FieldSet-module_fieldSet__zm8qr:disabled {\n  opacity: var(--opacity-disabled);\n}\n\n.FieldSet-module_fieldSet__zm8qr:disabled * {\n  opacity: 1;\n}\n\n.FieldSet-module_legendAndHelpText__EMqwe {\n  display: flex;\n  gap: var(--help_text-gap);\n  padding: 0;\n}\n\n.FieldSet-module_legend__OE0W6 {\n  padding: 0;\n}\n\n.FieldSet-module_legendContent__MWrTX {\n  font-weight: bold;\n}\n\n.FieldSet-module_description__eXyLx {\n  color: var(--description-color);\n  margin: 0;\n}\n\n.FieldSet-module_legend__OE0W6 + .FieldSet-module_description__eXyLx {\n  margin-top: var(--description-margin_top);\n}\n\n.FieldSet-module_content__kUK0X:not(:first-child) {\n  margin-top: var(--content-margin_top);\n}\n\n.FieldSet-module_errorMessage__Ni8xX {\n  margin-top: var(--error_message-margin_top);\n}\n","",{version:3,sources:["webpack://./packages/react/src/components/FieldSet/FieldSet.module.css"],names:[],mappings:"AAAA;EACE,qDAAqD;EACrD,iEAAiE;EACjE,0EAA0E;EAC1E,4EAA4E;EAC5E,uEAAuE;EACvE,mEAAmE;EACnE,mDAAmD;;EAEnD,mBAAmB;EACnB,SAAS;EACT,2BAA2B;EAC3B,kDAAkD;EAClD,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,iEAAiE;EACjE,4EAA4E;EAC5E,uEAAuE;EACvE,mEAAmE;EACnE,mDAAmD;AACrD;;AAEA;EACE,kEAAkE;EAClE,6EAA6E;EAC7E,wEAAwE;EACxE,oEAAoE;EACpE,mDAAmD;AACrD;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,yBAAyB;EACzB,UAAU;AACZ;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,+BAA+B;EAC/B,SAAS;AACX;;AAEA;EACE,yCAAyC;AAC3C;;AAEA;EACE,qCAAqC;AACvC;;AAEA;EACE,2CAA2C;AAC7C",sourcesContent:[".fieldSet {\n  --color: var(--component-checkbox-color-text-default);\n  --content-margin_top: var(--component-fieldset-space-gap-y-small);\n  --description-color: var(--component-field_description-color-text-default);\n  --description-margin_top: var(--component-field_description-space-top-small);\n  --error_message-margin_top: var(--component-fieldset-space-gap-y-small);\n  --help_text-gap: var(--component-field_description-space-top-small);\n  --font_size: var(--component-checkbox-font_size-sm);\n\n  color: var(--color);\n  border: 0;\n  font-size: var(--font_size);\n  line-height: var(--typography-default-line-height);\n  margin: 0;\n  padding: 0;\n}\n\n.small {\n  --content-margin_top: var(--component-fieldset-space-gap-y-small);\n  --description-margin_top: var(--component-field_description-space-top-small);\n  --error_message-margin_top: var(--component-fieldset-space-gap-y-small);\n  --help_text-gap: var(--component-field_description-space-top-small);\n  --font_size: var(--component-checkbox-font_size-xs);\n}\n\n.xsmall {\n  --content-margin_top: var(--component-fieldset-space-gap-y-xsmall);\n  --description-margin_top: var(--component-field_description-space-top-xsmall);\n  --error_message-margin_top: var(--component-fieldset-space-gap-y-xsmall);\n  --help_text-gap: var(--component-field_description-space-top-xsmall);\n  --font_size: var(--component-checkbox-font_size-xs);\n}\n\n.fieldSet:disabled {\n  opacity: var(--opacity-disabled);\n}\n\n.fieldSet:disabled * {\n  opacity: 1;\n}\n\n.legendAndHelpText {\n  display: flex;\n  gap: var(--help_text-gap);\n  padding: 0;\n}\n\n.legend {\n  padding: 0;\n}\n\n.legendContent {\n  font-weight: bold;\n}\n\n.description {\n  color: var(--description-color);\n  margin: 0;\n}\n\n.legend + .description {\n  margin-top: var(--description-margin_top);\n}\n\n.content:not(:first-child) {\n  margin-top: var(--content-margin_top);\n}\n\n.errorMessage {\n  margin-top: var(--error_message-margin_top);\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={fieldSet:"FieldSet-module_fieldSet__zm8qr",small:"FieldSet-module_small__vC3Sl",xsmall:"FieldSet-module_xsmall__oe01L",legendAndHelpText:"FieldSet-module_legendAndHelpText__EMqwe",legend:"FieldSet-module_legend__OE0W6",legendContent:"FieldSet-module_legendContent__MWrTX",description:"FieldSet-module_description__eXyLx",content:"FieldSet-module_content__kUK0X",errorMessage:"FieldSet-module_errorMessage__Ni8xX"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);