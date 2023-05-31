"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[3724],{"./packages/react/src/components/Popover/Popover.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ComplexTemplate:()=>ComplexTemplate,Template:()=>Template,default:()=>__WEBPACK_DEFAULT_EXPORT__,defaultArgs:()=>defaultArgs,merKomplekstInnhold:()=>merKomplekstInnhold,popover:()=>popover});__webpack_require__("./node_modules/react/index.js");var _storybook_addon_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),_index__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/react/src/components/Popover/Popover.tsx"),_types_enums__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./packages/react/src/types/enums.ts"),_Button_index__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/react/src/components/Button/Button.tsx"),_docs_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./docs-components/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const defaultArgs={trigger:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Button_index__WEBPACK_IMPORTED_MODULE_4__.zx,{children:"My trigger"})},Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_index__WEBPACK_IMPORTED_MODULE_5__.J2,{placement:args.placement,variant:args.variant,arrow:args.arrow,offset:args.offset,...defaultArgs,children:"Lorem ipsum dolor sit amet..."}),ComplexTemplate=args=>{const _components=Object.assign({div:"div",ul:"ul",li:"li"},(0,_storybook_addon_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_6__.ah)());return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_index__WEBPACK_IMPORTED_MODULE_5__.J2,{placement:args.placement,variant:args.variant,arrow:args.arrow,offset:args.offset,...defaultArgs,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.div,{style:{display:"flex","align-items":"center",gap:"1rem"},children:["Hallo!",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.ul,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.li,{children:"Coffee"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.li,{children:"Tea"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.li,{children:"Milk"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Button_index__WEBPACK_IMPORTED_MODULE_4__.zx,{children:"Click me!"})]})})};const popover=Template.bind({});popover.storyName="Popover",popover.args={placement:"top",variant:_types_enums__WEBPACK_IMPORTED_MODULE_7__.oU.Default},popover.parameters={storySource:{source:"args => {\n  return <Popover placement={args.placement} variant={args.variant} arrow={args.arrow} offset={args.offset} {...defaultArgs}>\n      Lorem ipsum dolor sit amet...\n    </Popover>;\n}"},layout:"centered"},popover.decorators=[Story=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{style:{margin:"3em"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Story,{})})];const merKomplekstInnhold=ComplexTemplate.bind({});merKomplekstInnhold.storyName="Mer komplekst innhold",merKomplekstInnhold.args={placement:"right",variant:_types_enums__WEBPACK_IMPORTED_MODULE_7__.oU.Warning},merKomplekstInnhold.parameters={storySource:{source:'args => {\n  return <Popover placement={args.placement} variant={args.variant} arrow={args.arrow} offset={args.offset} {...defaultArgs}>\n      <div style={{\n      display: "flex",\n      "align-items": "center",\n      gap: "1rem"\n    }}>\n        Hallo!\n        <ul>\n          <li>Coffee</li>\n          <li>Tea</li>\n          <li>Milk</li>\n        </ul>\n        <Button>Click me!</Button>\n      </div>\n    </Popover>;\n}'},layout:"centered"},merKomplekstInnhold.decorators=[Story=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{style:{margin:"3em"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Story,{})})];const componentMeta={title:"Kjernekomponenter/Popover",parameters:{status:{type:"beta",url:"http://www.url.com/status"}},component:_index__WEBPACK_IMPORTED_MODULE_5__.J2,argTypes:{trigger:{description:"En `ReactNode` som brukes til å åpne og lukke popoveren. Fungerer også som ankringspunkt til popoverens posisjon. Denne komponenten må ha en `ref`. Dette er en egenskap som finnes på alle primitive React-komponenter, men dersom det er en egendefinert komponent, må man bruke `React.forwardRef` i definisjonen av komponenten til å sette `ref`-egenskapen på riktig plass.",control:{type:"object"}},children:{description:"En valgfri ReactNode som blir popoverens innhold.",control:{type:"object"}},arrow:{description:"Bestemmer om pilen på popoveren som peker til triggeren skal vises eller ikke.",control:{type:"boolean"}},placement:{description:"Bestemmer hvilken side popoveren skal plasseres på, samt om plasseringen skal rettes inn etter hvor triggeren starter eller slutter."},open:{description:"Bestemmer om popoveren skal vises eller ikke. Om denne ikke settes håndteres den internt i popover komponenten. Om den settes anbefales det å bruke den sammen med `onOpenChange`.",control:{type:"boolean"}},onOpenChange:{description:"Funksjon som håndterer ednring av `open`. Om denne ikke settes håndteres den internt i popover komponenten. Om den settes anbefales det å bruke den sammen med `onOpenChange`."},initialOpen:{description:"Bestemmer om tilstanden `open` skal settes til `true` ved rendering.",control:{type:"boolean"}},offset:{description:"Overstyrer avstanden fra triggeren til popoveren i åpen tilstand.",control:{type:"number"}}},tags:["stories-mdx"],includeStories:["popover","merKomplekstInnhold"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_6__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_createMdxContent,{})}):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",h3:"h3",div:"div"},(0,_storybook_addon_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_6__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.h_,{title:"Kjernekomponenter/Popover",component:_index__WEBPACK_IMPORTED_MODULE_5__.J2,parameters:{status:{type:"beta",url:"http://www.url.com/status"}},argTypes:{trigger:{description:"En `ReactNode` som brukes til å åpne og lukke popoveren. Fungerer også som ankringspunkt til popoverens posisjon. Denne komponenten må ha en `ref`. Dette er en egenskap som finnes på alle primitive React-komponenter, men dersom det er en egendefinert komponent, må man bruke `React.forwardRef` i definisjonen av komponenten til å sette `ref`-egenskapen på riktig plass.",control:{type:"object"}},children:{description:"En valgfri ReactNode som blir popoverens innhold.",control:{type:"object"}},arrow:{description:"Bestemmer om pilen på popoveren som peker til triggeren skal vises eller ikke.",control:{type:"boolean"}},placement:{description:"Bestemmer hvilken side popoveren skal plasseres på, samt om plasseringen skal rettes inn etter hvor triggeren starter eller slutter."},open:{description:"Bestemmer om popoveren skal vises eller ikke. Om denne ikke settes håndteres den internt i popover komponenten. Om den settes anbefales det å bruke den sammen med `onOpenChange`.",control:{type:"boolean"}},onOpenChange:{description:"Funksjon som håndterer ednring av `open`. Om denne ikke settes håndteres den internt i popover komponenten. Om den settes anbefales det å bruke den sammen med `onOpenChange`."},initialOpen:{description:"Bestemmer om tilstanden `open` skal settes til `true` ved rendering.",control:{type:"boolean"}},offset:{description:"Overstyrer avstanden fra triggeren til popoveren i åpen tilstand.",control:{type:"number"}}}}),"\n","\n","\n","\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h1,{id:"popover",children:"Popover"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_docs_components__WEBPACK_IMPORTED_MODULE_2__.d,{text:"beta"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p,{children:["Popover er et felt som plasseres over annet innhold og kan vises og skjules ved hjelp av å aktivere en gitt ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"trigger"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2,{id:"varianter",children:"Varianter"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h3,{id:"default",children:"Default"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Popover",decorators:[Story=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.div,{style:{margin:"3em"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Story,{})})],parameters:{layout:"centered"},args:{placement:"top",variant:_types_enums__WEBPACK_IMPORTED_MODULE_7__.oU.Default},children:Template.bind({})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h3,{id:"mer-komplekst-innhold",children:"Mer komplekst innhold"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Mer komplekst innhold",decorators:[Story=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.div,{style:{margin:"3em"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Story,{})})],parameters:{layout:"centered"},args:{placement:"right",variant:_types_enums__WEBPACK_IMPORTED_MODULE_7__.oU.Warning},children:ComplexTemplate.bind({})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2,{id:"props",children:"Props"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.$4,{story:"Popover"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2,{id:"tokens",children:"Tokens"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_docs_components__WEBPACK_IMPORTED_MODULE_2__.jq,{componentName:"popover",description:!0,jsonKey:"component.popover",showPreview:!1})]})}}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta},"./packages/react/src/components/Popover/Popover.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J2:()=>Popover});var react=__webpack_require__("./node_modules/react/index.js"),floating_ui_react_esm=__webpack_require__("./node_modules/@floating-ui/react/dist/floating-ui.react.esm.js"),floating_ui_dom_browser_min=__webpack_require__("./node_modules/@floating-ui/dom/dist/floating-ui.dom.browser.min.mjs"),floating_ui_core_browser_min=__webpack_require__("./node_modules/@floating-ui/core/dist/floating-ui.core.browser.min.mjs"),floating_ui_react_dom_esm=__webpack_require__("./node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.esm.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Popover_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./packages/react/src/components/Popover/Popover.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Popover_module.Z,options);const Popover_Popover_module=Popover_module.Z&&Popover_module.Z.locals?Popover_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function usePopover({variant="default",arrow,initialOpen,placement,offset,open:controlledOpen,onOpenChange:setControlledOpen,...restOptions}){const[uncontrolledOpen,setUncontrolledOpen]=(0,react.useState)(initialOpen),open=controlledOpen??uncontrolledOpen,setOpen=setControlledOpen??setUncontrolledOpen,arrowRef=(0,react.useRef)(null),data=(0,floating_ui_react_esm.YF)({placement,open,onOpenChange:setOpen,whileElementsMounted:floating_ui_dom_browser_min.Me,middleware:[(0,floating_ui_core_browser_min.cv)(offset??(arrow?12:4)),(0,floating_ui_core_browser_min.RR)({padding:5,fallbackPlacements:["bottom","top"]}),(0,floating_ui_core_browser_min.uY)({padding:5}),(0,floating_ui_react_dom_esm.x7)({element:arrowRef,padding:8})]}),context=data.context,click=(0,floating_ui_react_esm.eS)(context,{enabled:null==controlledOpen}),dismiss=(0,floating_ui_react_esm.bQ)(context,{referencePress:!1}),role=(0,floating_ui_react_esm.qs)(context),interactions=(0,floating_ui_react_esm.NI)([click,dismiss,role]);return(0,react.useMemo)((()=>({open,setOpen,...interactions,...data,...restOptions,arrow,arrowRef,variant})),[open,setOpen,interactions,data,restOptions,arrow,arrowRef,variant])}const PopoverContext=(0,react.createContext)(null),usePopoverContext=()=>{const context=(0,react.useContext)(PopoverContext);if(null==context)throw new Error("Popover components must be wrapped in <Popover />");return context};function Popover({children,trigger,arrow=!0,initialOpen=!1,...restOptions}){const popover=usePopover({arrow,initialOpen,...restOptions});return(0,jsx_runtime.jsxs)(PopoverContext.Provider,{value:popover,children:[(0,jsx_runtime.jsx)(PopoverTrigger,{children:trigger}),(0,jsx_runtime.jsxs)(PopoverContent,{children:[children,popover.arrow&&(0,jsx_runtime.jsx)(PopoverArrow,{})]})]})}Popover.displayName="Popover",Popover.displayName="Popover";const PopoverTrigger=(0,react.forwardRef)((function PopoverTrigger({children,...props},propRef){const context=usePopoverContext(),child=(0,react.isValidElement)(children)?children:null,ref=(0,floating_ui_react_esm.qq)([context.refs.setReference,propRef]);if(child){const childProps={ref,...props,...child.props,...context.getReferenceProps(),"data-state":context.open?"open":"closed","aria-expanded":context.open};return(0,react.cloneElement)(child,childProps)}return null})),PopoverContent=(0,react.forwardRef)((function PopoverContent(props,propRef){const context=usePopoverContext(),ref=(0,floating_ui_react_esm.qq)([context.refs.setFloating,propRef]);return context.open?(0,jsx_runtime.jsx)("div",{ref,style:{position:context.strategy,top:context.y??0,left:context.x??0},"data-placement":context.placement,className:classnames_default()(Popover_Popover_module.popover,Popover_Popover_module[context.variant],context.className),...context.getFloatingProps(props),tabIndex:-1,role:context.role||"dialog",children:props.children}):null})),PopoverArrow=(0,react.forwardRef)((function PopoverContent(props,propRef){const context=usePopoverContext(),ref=(0,floating_ui_react_esm.qq)([context.arrowRef,propRef]),arrowX=context.middlewareData.arrow?.x,arrowY=context.middlewareData.arrow?.y,staticSide={top:"bottom",right:"left",bottom:"top",left:"right"}[context.placement.split("-")[0]];return(0,jsx_runtime.jsx)("div",{ref,style:{...null!=arrowX?{left:arrowX}:{},...null!=arrowY?{top:arrowY}:{},...staticSide?{[staticSide]:"-7px"}:{}},className:Popover_Popover_module.arrow,...props})}));try{usePopover.displayName="Popover",usePopover.__docgenInfo={description:"",displayName:"Popover",props:{variant:{defaultValue:{value:"default"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"danger"'},{value:'"default"'},{value:'"info"'},{value:'"warning"'}]}},arrow:{defaultValue:null,description:"",name:"arrow",required:!1,type:{name:"boolean"}},offset:{defaultValue:null,description:"",name:"offset",required:!1,type:{name:"number"}},initialOpen:{defaultValue:null,description:"",name:"initialOpen",required:!1,type:{name:"boolean"}},placement:{defaultValue:null,description:"",name:"placement",required:!1,type:{name:"enum",value:[{value:'"right"'},{value:'"left"'},{value:'"top"'},{value:'"bottom"'},{value:'"right-end"'},{value:'"right-start"'},{value:'"left-end"'},{value:'"left-start"'},{value:'"top-end"'},{value:'"top-start"'},{value:'"bottom-end"'},{value:'"bottom-start"'}]}},open:{defaultValue:null,description:"",name:"open",required:!1,type:{name:"boolean"}},onOpenChange:{defaultValue:null,description:"",name:"onOpenChange",required:!1,type:{name:"((open: boolean) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/Popover/Popover.tsx#Popover"]={docgenInfo:Popover.__docgenInfo,name:"Popover",path:"packages/react/src/components/Popover/Popover.tsx#Popover"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/types/enums.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{DX:()=>RadioGroupVariant,Hx:()=>ReadOnlyVariant,TZ:()=>CheckboxGroupVariant,Wu:()=>ButtonVariant,YN:()=>RadioGroupSize,Yi:()=>LegacyAccordionIconVariant,jq:()=>RadioButtonSize,oU:()=>PopoverVariant,qE:()=>ButtonSize,rp:()=>ButtonColor,wO:()=>FieldSetSize});let ReadOnlyVariant=function(ReadOnlyVariant){return ReadOnlyVariant.ReadOnlyInfo="readonlyInfo",ReadOnlyVariant.ReadOnlyConfirm="readonlyConfirm",ReadOnlyVariant}({}),LegacyAccordionIconVariant=function(LegacyAccordionIconVariant){return LegacyAccordionIconVariant.Primary="primary",LegacyAccordionIconVariant.Secondary="secondary",LegacyAccordionIconVariant}({}),ButtonSize=function(ButtonSize){return ButtonSize.Small="small",ButtonSize.Medium="medium",ButtonSize.Large="large",ButtonSize}({}),ButtonColor=function(ButtonColor){return ButtonColor.Primary="primary",ButtonColor.Secondary="secondary",ButtonColor.Success="success",ButtonColor.Danger="danger",ButtonColor.Inverted="inverted",ButtonColor}({}),ButtonVariant=function(ButtonVariant){return ButtonVariant.Filled="filled",ButtonVariant.Outline="outline",ButtonVariant.Quiet="quiet",ButtonVariant}({}),CheckboxGroupVariant=function(CheckboxGroupVariant){return CheckboxGroupVariant.Vertical="vertical",CheckboxGroupVariant.Horizontal="horizontal",CheckboxGroupVariant}({}),FieldSetSize=function(FieldSetSize){return FieldSetSize.Xsmall="xsmall",FieldSetSize.Small="small",FieldSetSize}({}),RadioGroupSize=function(RadioGroupSize){return RadioGroupSize.Xsmall="xsmall",RadioGroupSize.Small="small",RadioGroupSize}({}),RadioButtonSize=function(RadioButtonSize){return RadioButtonSize.Xsmall="xsmall",RadioButtonSize.Small="small",RadioButtonSize}({}),PopoverVariant=function(PopoverVariant){return PopoverVariant.Default="default",PopoverVariant.Info="info",PopoverVariant.Warning="warning",PopoverVariant.Danger="danger",PopoverVariant}({}),RadioGroupVariant=function(RadioGroupVariant){return RadioGroupVariant.Vertical="vertical",RadioGroupVariant.Horizontal="horizontal",RadioGroupVariant}({})},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./packages/react/src/components/Popover/Popover.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".Popover-module_popover__EgBfp {\n  width: max-content;\n  z-index: 2;\n  padding: 12px;\n  max-width: calc(100vw - 20px);\n  border: 1px solid gray;\n  border-radius: 3px;\n  box-shadow: 0 3px 6px 0 #0003;\n}\n\n.Popover-module_popover__EgBfp:focus-visible {\n  outline: var(--semantic-tab_focus-outline-color) solid var(--semantic-tab_focus-outline-width);\n  outline-offset: var(--semantic-tab_focus-outline-offset);\n}\n\n.Popover-module_popover__EgBfp:focus:not(:focus-visible) {\n  outline: none;\n}\n\n.Popover-module_popover__EgBfp.Popover-module_default__OzVoe {\n  background-color: #fff;\n  border-color: #68707c;\n}\n\n.Popover-module_popover__EgBfp.Popover-module_info__YveyY {\n  background-color: #e6eff8;\n  border-color: #004c8f;\n}\n\n.Popover-module_popover__EgBfp.Popover-module_warning__lcTZO {\n  background-color: #fffbe6;\n  border-color: #cc7005;\n}\n\n.Popover-module_popover__EgBfp.Popover-module_danger__a8NYf {\n  background-color: #f9d5db;\n  border-color: #b3253a;\n}\n\n.Popover-module_arrow__pdTot {\n  position: absolute;\n  box-sizing: content-box;\n  z-index: -1;\n  transform: rotate(45deg);\n  background-color: inherit;\n  border: 1px solid;\n\n  /* Set border color separately in order to make inheritance work. */\n  border-color: inherit;\n  width: 12px;\n  height: 12px;\n}\n\n.Popover-module_popover__EgBfp[data-placement^='top'] > .Popover-module_arrow__pdTot {\n  box-shadow: 3px 3px 6px 0 #0003;\n  clip-path: inset(0 -10px -10px 0);\n  border-left-color: transparent;\n  border-top-color: transparent;\n}\n\n.Popover-module_popover__EgBfp[data-placement^='bottom'] > .Popover-module_arrow__pdTot {\n  clip-path: inset(-10px 0 0 -10px);\n  border-bottom-color: transparent;\n  border-right-color: transparent;\n}\n\n.Popover-module_popover__EgBfp[data-placement^='left'] > .Popover-module_arrow__pdTot {\n  box-shadow: 1px 3px 6px 0 #0003;\n  clip-path: inset(-10px -10px 0 0);\n  border-left-color: transparent;\n  border-bottom-color: transparent;\n}\n\n.Popover-module_popover__EgBfp[data-placement^='right'] > .Popover-module_arrow__pdTot {\n  box-shadow: -1px 3px 6px 0 #0003;\n  clip-path: inset(0 0 -10px -10px);\n  border-right-color: transparent;\n  border-top-color: transparent;\n}\n","",{version:3,sources:["webpack://./packages/react/src/components/Popover/Popover.module.css"],names:[],mappings:"AAAA;EACE,kBAAkB;EAClB,UAAU;EACV,aAAa;EACb,6BAA6B;EAC7B,sBAAsB;EACtB,kBAAkB;EAClB,6BAA6B;AAC/B;;AAEA;EACE,8FAA8F;EAC9F,wDAAwD;AAC1D;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,sBAAsB;EACtB,qBAAqB;AACvB;;AAEA;EACE,yBAAyB;EACzB,qBAAqB;AACvB;;AAEA;EACE,yBAAyB;EACzB,qBAAqB;AACvB;;AAEA;EACE,yBAAyB;EACzB,qBAAqB;AACvB;;AAEA;EACE,kBAAkB;EAClB,uBAAuB;EACvB,WAAW;EACX,wBAAwB;EACxB,yBAAyB;EACzB,iBAAiB;;EAEjB,mEAAmE;EACnE,qBAAqB;EACrB,WAAW;EACX,YAAY;AACd;;AAEA;EACE,+BAA+B;EAC/B,iCAAiC;EACjC,8BAA8B;EAC9B,6BAA6B;AAC/B;;AAEA;EACE,iCAAiC;EACjC,gCAAgC;EAChC,+BAA+B;AACjC;;AAEA;EACE,+BAA+B;EAC/B,iCAAiC;EACjC,8BAA8B;EAC9B,gCAAgC;AAClC;;AAEA;EACE,gCAAgC;EAChC,iCAAiC;EACjC,+BAA+B;EAC/B,6BAA6B;AAC/B",sourcesContent:[".popover {\n  width: max-content;\n  z-index: 2;\n  padding: 12px;\n  max-width: calc(100vw - 20px);\n  border: 1px solid gray;\n  border-radius: 3px;\n  box-shadow: 0 3px 6px 0 #0003;\n}\n\n.popover:focus-visible {\n  outline: var(--semantic-tab_focus-outline-color) solid var(--semantic-tab_focus-outline-width);\n  outline-offset: var(--semantic-tab_focus-outline-offset);\n}\n\n.popover:focus:not(:focus-visible) {\n  outline: none;\n}\n\n.popover.default {\n  background-color: #fff;\n  border-color: #68707c;\n}\n\n.popover.info {\n  background-color: #e6eff8;\n  border-color: #004c8f;\n}\n\n.popover.warning {\n  background-color: #fffbe6;\n  border-color: #cc7005;\n}\n\n.popover.danger {\n  background-color: #f9d5db;\n  border-color: #b3253a;\n}\n\n.arrow {\n  position: absolute;\n  box-sizing: content-box;\n  z-index: -1;\n  transform: rotate(45deg);\n  background-color: inherit;\n  border: 1px solid;\n\n  /* Set border color separately in order to make inheritance work. */\n  border-color: inherit;\n  width: 12px;\n  height: 12px;\n}\n\n.popover[data-placement^='top'] > .arrow {\n  box-shadow: 3px 3px 6px 0 #0003;\n  clip-path: inset(0 -10px -10px 0);\n  border-left-color: transparent;\n  border-top-color: transparent;\n}\n\n.popover[data-placement^='bottom'] > .arrow {\n  clip-path: inset(-10px 0 0 -10px);\n  border-bottom-color: transparent;\n  border-right-color: transparent;\n}\n\n.popover[data-placement^='left'] > .arrow {\n  box-shadow: 1px 3px 6px 0 #0003;\n  clip-path: inset(-10px -10px 0 0);\n  border-left-color: transparent;\n  border-bottom-color: transparent;\n}\n\n.popover[data-placement^='right'] > .arrow {\n  box-shadow: -1px 3px 6px 0 #0003;\n  clip-path: inset(0 0 -10px -10px);\n  border-right-color: transparent;\n  border-top-color: transparent;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={popover:"Popover-module_popover__EgBfp",default:"Popover-module_default__OzVoe",info:"Popover-module_info__YveyY",warning:"Popover-module_warning__lcTZO",danger:"Popover-module_danger__a8NYf",arrow:"Popover-module_arrow__pdTot"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);