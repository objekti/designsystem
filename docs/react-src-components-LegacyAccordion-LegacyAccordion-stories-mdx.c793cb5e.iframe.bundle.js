/*! For license information please see react-src-components-LegacyAccordion-LegacyAccordion-stories-mdx.c793cb5e.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkroot=self.webpackChunkroot||[]).push([[6834],{"./node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{_:()=>defaultComponents,r:()=>DocsRenderer});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/react-dom-shim/dist/react-18.mjs"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.bD,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ct,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.lO},ErrorBoundary=class extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException}=this.props;showException(err)}render(){let{hasError}=this.state,{children}=this.props;return hasError?null:children}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components};return new Promise(((resolve,reject)=>{__webpack_require__.e(9506).then(__webpack_require__.bind(__webpack_require__,"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/index.js")).then((({MDXProvider})=>(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.l)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXProvider,{components},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.WI,{context,docsParameter}))),element))).then(resolve)}))},this.unmount=element=>{(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.K)(element)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{$4:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.$4,Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.Xz,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.h_,oG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.oG});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs"),__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-R4NKYYJA.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./packages/react/src/types/enums.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";let CheckboxRadioTemplateSize,InputVariant,ReadOnlyVariant,IconVariant,LegacyAccordionIconVariant,ButtonSize,ButtonColor,ButtonVariant,CheckboxGroupVariant,FieldSetSize,HelpTextSize,RadioGroupSize,RadioButtonSize,PopoverVariant,RadioGroupVariant,HeadingSize,HeadingLevel;__webpack_require__.d(__webpack_exports__,{DX:()=>RadioGroupVariant,Hx:()=>ReadOnlyVariant,TZ:()=>CheckboxGroupVariant,Wu:()=>ButtonVariant,YN:()=>RadioGroupSize,Yi:()=>LegacyAccordionIconVariant,jq:()=>RadioButtonSize,oU:()=>PopoverVariant,qE:()=>ButtonSize,rp:()=>ButtonColor,wO:()=>FieldSetSize}),function(CheckboxRadioTemplateSize){CheckboxRadioTemplateSize.Xsmall="xsmall",CheckboxRadioTemplateSize.Small="small"}(CheckboxRadioTemplateSize||(CheckboxRadioTemplateSize={})),function(InputVariant){InputVariant.Default="default",InputVariant.Error="error",InputVariant.Disabled="disabled",InputVariant.ReadOnlyInfo="readonlyInfo",InputVariant.ReadOnlyConfirm="readonlyConfirm"}(InputVariant||(InputVariant={})),function(ReadOnlyVariant){ReadOnlyVariant.ReadOnlyInfo="readonlyInfo",ReadOnlyVariant.ReadOnlyConfirm="readonlyConfirm"}(ReadOnlyVariant||(ReadOnlyVariant={})),function(IconVariant){IconVariant.None="none",IconVariant.Error="error",IconVariant.Search="search"}(IconVariant||(IconVariant={})),function(LegacyAccordionIconVariant){LegacyAccordionIconVariant.Primary="primary",LegacyAccordionIconVariant.Secondary="secondary"}(LegacyAccordionIconVariant||(LegacyAccordionIconVariant={})),function(ButtonSize){ButtonSize.Small="small",ButtonSize.Medium="medium",ButtonSize.Large="large"}(ButtonSize||(ButtonSize={})),function(ButtonColor){ButtonColor.Primary="primary",ButtonColor.Secondary="secondary",ButtonColor.Success="success",ButtonColor.Danger="danger",ButtonColor.Inverted="inverted"}(ButtonColor||(ButtonColor={})),function(ButtonVariant){ButtonVariant.Filled="filled",ButtonVariant.Outline="outline",ButtonVariant.Quiet="quiet"}(ButtonVariant||(ButtonVariant={})),function(CheckboxGroupVariant){CheckboxGroupVariant.Vertical="vertical",CheckboxGroupVariant.Horizontal="horizontal"}(CheckboxGroupVariant||(CheckboxGroupVariant={})),function(FieldSetSize){FieldSetSize.Xsmall="xsmall",FieldSetSize.Small="small"}(FieldSetSize||(FieldSetSize={})),function(HelpTextSize){HelpTextSize.Xsmall="xsmall",HelpTextSize.Small="small"}(HelpTextSize||(HelpTextSize={})),function(RadioGroupSize){RadioGroupSize.Xsmall="xsmall",RadioGroupSize.Small="small"}(RadioGroupSize||(RadioGroupSize={})),function(RadioButtonSize){RadioButtonSize.Xsmall="xsmall",RadioButtonSize.Small="small"}(RadioButtonSize||(RadioButtonSize={})),function(PopoverVariant){PopoverVariant.Default="default",PopoverVariant.Info="info",PopoverVariant.Warning="warning",PopoverVariant.Danger="danger"}(PopoverVariant||(PopoverVariant={})),function(RadioGroupVariant){RadioGroupVariant.Vertical="vertical",RadioGroupVariant.Horizontal="horizontal"}(RadioGroupVariant||(RadioGroupVariant={})),function(HeadingSize){HeadingSize.XLarge="xlarge",HeadingSize.Large="large",HeadingSize.Medium="medium",HeadingSize.Small="small",HeadingSize.XSmall="xsmall"}(HeadingSize||(HeadingSize={})),function(HeadingLevel){HeadingLevel[HeadingLevel.H1=1]="H1",HeadingLevel[HeadingLevel.H2=2]="H2",HeadingLevel[HeadingLevel.H3=3]="H3",HeadingLevel[HeadingLevel.H4=4]="H4",HeadingLevel[HeadingLevel.H5=5]="H5",HeadingLevel[HeadingLevel.H6=6]="H6"}(HeadingLevel||(HeadingLevel={}))},"./packages/react/src/components/LegacyAccordion/LegacyAccordion.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:()=>Template,default:()=>LegacyAccordion_stories,legacyAccordion:()=>legacyAccordion});var react=__webpack_require__("./node_modules/react/index.js"),lib=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs");const AccordionContext=(0,react.createContext)(void 0),useAccordionContext=()=>{const context=(0,react.useContext)(AccordionContext);if(void 0===context)throw new Error("useAccordionContext must be used within an AccordionContext");return context};var injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),LegacyAccordion_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./packages/react/src/components/LegacyAccordion/LegacyAccordion.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(LegacyAccordion_module.Z,options);const LegacyAccordion_LegacyAccordion_module=LegacyAccordion_module.Z&&LegacyAccordion_module.Z.locals?LegacyAccordion_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const LegacyAccordion=({children,open,onClick,iconVariant="primary"})=>{const headerId=(0,react.useId)(),contentId=(0,react.useId)();return(0,jsx_runtime.jsx)("div",{className:LegacyAccordion_LegacyAccordion_module.legacyAccordion,children:(0,jsx_runtime.jsx)(AccordionContext.Provider,{value:{onClick,open,headerId,contentId,iconVariant},children})})};LegacyAccordion.displayName="LegacyAccordion",LegacyAccordion.displayName="LegacyAccordion";try{LegacyAccordion.displayName="LegacyAccordion",LegacyAccordion.__docgenInfo={description:"",displayName:"LegacyAccordion",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"LegacyAccordionClickHandler"}},open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},iconVariant:{defaultValue:{value:"primary"},description:"",name:"iconVariant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/LegacyAccordion/LegacyAccordion.tsx#LegacyAccordion"]={docgenInfo:LegacyAccordion.__docgenInfo,name:"LegacyAccordion",path:"packages/react/src/components/LegacyAccordion/LegacyAccordion.tsx#LegacyAccordion"})}catch(__react_docgen_typescript_loader_error){}var classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),LegacyAccordionHeader_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./packages/react/src/components/LegacyAccordion/LegacyAccordionHeader.module.css"),LegacyAccordionHeader_module_options={};LegacyAccordionHeader_module_options.styleTagTransform=styleTagTransform_default(),LegacyAccordionHeader_module_options.setAttributes=setAttributesWithoutAttributes_default(),LegacyAccordionHeader_module_options.insert=insertBySelector_default().bind(null,"head"),LegacyAccordionHeader_module_options.domAPI=styleDomAPI_default(),LegacyAccordionHeader_module_options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(LegacyAccordionHeader_module.Z,LegacyAccordionHeader_module_options);const LegacyAccordion_LegacyAccordionHeader_module=LegacyAccordionHeader_module.Z&&LegacyAccordionHeader_module.Z.locals?LegacyAccordionHeader_module.Z.locals:void 0;var LegacyAccordionIcon_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./packages/react/src/components/LegacyAccordion/LegacyAccordionIcon.module.css"),LegacyAccordionIcon_module_options={};LegacyAccordionIcon_module_options.styleTagTransform=styleTagTransform_default(),LegacyAccordionIcon_module_options.setAttributes=setAttributesWithoutAttributes_default(),LegacyAccordionIcon_module_options.insert=insertBySelector_default().bind(null,"head"),LegacyAccordionIcon_module_options.domAPI=styleDomAPI_default(),LegacyAccordionIcon_module_options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(LegacyAccordionIcon_module.Z,LegacyAccordionIcon_module_options);const LegacyAccordion_LegacyAccordionIcon_module=LegacyAccordionIcon_module.Z&&LegacyAccordionIcon_module.Z.locals?LegacyAccordionIcon_module.Z.locals:void 0;var tokens_esm=__webpack_require__("./node_modules/@altinn/figma-design-tokens/dist/tokens.esm.js");const Arrow=props=>(0,jsx_runtime.jsx)("svg",{viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg",...props,children:(0,jsx_runtime.jsx)("path",{d:" M 12.8834 34 L 10      31.0909 L 22.9754 18 L 10       4.90909 L 12.8834  2 L 28.7423 18 L 12.8834 34 Z ",fill:tokens_esm.Cwc})});Arrow.displayName="Arrow";try{Arrow.displayName="Arrow",Arrow.__docgenInfo={description:"",displayName:"Arrow",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/LegacyAccordion/icons/Arrow.tsx#Arrow"]={docgenInfo:Arrow.__docgenInfo,name:"Arrow",path:"packages/react/src/components/LegacyAccordion/icons/Arrow.tsx#Arrow"})}catch(__react_docgen_typescript_loader_error){}const CircleArrow=props=>(0,jsx_runtime.jsx)("svg",{viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg",...props,children:(0,jsx_runtime.jsx)("path",{d:" M 18   34 C 26.8 34    34   26.8 34 18 C 34    9.2  26.8  2   18  2 C  9.2  2     2    9.2  2 18 C  2   26.8   9.2 34   18 34 Z M 14.3556 11.1556 L 16.0444 9.37778 L 24.2222 17.5556 L 16.0444 25.7333 L 14.3556 23.9556 L 20.8444 17.5556 L 14.3556 11.1556 Z ",fill:tokens_esm.NBx})});CircleArrow.displayName="CircleArrow";try{CircleArrow.displayName="CircleArrow",CircleArrow.__docgenInfo={description:"",displayName:"CircleArrow",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/LegacyAccordion/icons/CircleArrow.tsx#CircleArrow"]={docgenInfo:CircleArrow.__docgenInfo,name:"CircleArrow",path:"packages/react/src/components/LegacyAccordion/icons/CircleArrow.tsx#CircleArrow"})}catch(__react_docgen_typescript_loader_error){}const LegacyAccordionIcon=()=>{const{onClick,open,iconVariant}=useAccordionContext(),props={className:classnames_default()(LegacyAccordion_LegacyAccordionIcon_module.legacyAccordionIcon,open&&LegacyAccordion_LegacyAccordionIcon_module.opened),onClick};switch(iconVariant){case"primary":return(0,jsx_runtime.jsx)(Arrow,{...props});case"secondary":return(0,jsx_runtime.jsx)(CircleArrow,{...props})}};LegacyAccordionIcon.displayName="LegacyAccordionIcon";const LegacyAccordionHeader=({children,actions,subtitle})=>{const{onClick,open,headerId,contentId}=useAccordionContext();return(0,jsx_runtime.jsxs)("div",{className:classnames_default()(LegacyAccordion_LegacyAccordionHeader_module.legacyAccordionHeader,{[LegacyAccordion_LegacyAccordionHeader_module.withSubtitle]:subtitle}),children:[(0,jsx_runtime.jsx)(LegacyAccordionIcon,{}),(0,jsx_runtime.jsxs)("button",{className:LegacyAccordion_LegacyAccordionHeader_module.title,"aria-expanded":open,type:"button",onClick,id:headerId,"aria-controls":contentId,children:[children,subtitle?.length&&(0,jsx_runtime.jsx)("span",{"data-testid":"LegacyAccordion-header-subtitle",className:LegacyAccordion_LegacyAccordionHeader_module.subtitle,children:subtitle})]}),(0,jsx_runtime.jsx)("div",{className:LegacyAccordion_LegacyAccordionHeader_module.actions,children:actions})]})};LegacyAccordionHeader.displayName="LegacyAccordionHeader",LegacyAccordionHeader.displayName="LegacyAccordionHeader";try{LegacyAccordionHeader.displayName="LegacyAccordionHeader",LegacyAccordionHeader.__docgenInfo={description:"",displayName:"LegacyAccordionHeader",props:{actions:{defaultValue:null,description:"",name:"actions",required:!1,type:{name:"ReactNode"}},subtitle:{defaultValue:null,description:"",name:"subtitle",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/LegacyAccordion/LegacyAccordionHeader.tsx#LegacyAccordionHeader"]={docgenInfo:LegacyAccordionHeader.__docgenInfo,name:"LegacyAccordionHeader",path:"packages/react/src/components/LegacyAccordion/LegacyAccordionHeader.tsx#LegacyAccordionHeader"})}catch(__react_docgen_typescript_loader_error){}var Button=__webpack_require__("./packages/react/src/components/Button/Button.tsx");const LegacyAccordionContent=({children})=>{const{open,contentId,headerId}=useAccordionContext();return(0,jsx_runtime.jsx)("div",{children:open&&(0,jsx_runtime.jsx)("div",{"aria-expanded":open,id:contentId,"aria-labelledby":headerId,children})})};LegacyAccordionContent.displayName="LegacyAccordionContent",LegacyAccordionContent.displayName="LegacyAccordionContent";try{LegacyAccordionContent.displayName="LegacyAccordionContent",LegacyAccordionContent.__docgenInfo={description:"",displayName:"LegacyAccordionContent",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/LegacyAccordion/LegacyAccordionContent.tsx#LegacyAccordionContent"]={docgenInfo:LegacyAccordionContent.__docgenInfo,name:"LegacyAccordionContent",path:"packages/react/src/components/LegacyAccordion/LegacyAccordionContent.tsx#LegacyAccordionContent"})}catch(__react_docgen_typescript_loader_error){}var enums=__webpack_require__("./packages/react/src/types/enums.ts"),docs_components=__webpack_require__("./docs-components/index.ts");const Template=args=>{const[open,setOpen]=(0,react.useState)(!1);return(0,jsx_runtime.jsxs)(LegacyAccordion,{...args,onClick:()=>setOpen(!open),open,children:[(0,jsx_runtime.jsx)(LegacyAccordionHeader,{actions:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Button.zx,{variant:enums.Wu.Filled,color:enums.rp.Primary,size:enums.qE.Small,children:"Separat knapp 1"}),(0,jsx_runtime.jsx)(Button.zx,{variant:enums.Wu.Outline,color:enums.rp.Primary,size:enums.qE.Small,children:"Separat knapp 2"})]}),subtitle:"Valgfri undertittel",children:"Klikk her for å åpne"}),(0,jsx_runtime.jsx)(LegacyAccordionContent,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse condimentum dolor neque, in rutrum ante auctor maximus. Suspendisse lacinia velit eros, in vehicula dui aliquet a. Sed posuere, diam ac gravida tempor, ex enim auctor massa, id aliquet nulla nibh laoreet nisi. Pellentesque volutpat mollis ex eget convallis. Nam lobortis neque sed molestie varius. Suspendisse finibus lacinia orci facilisis elementum. Maecenas bibendum vehicula urna. Integer egestas, tortor at dictum blandit, leo nibh efficitur nulla, id ultrices tortor dolor eu sem. Donec pharetra scelerisque tellus, non mattis ligula fermentum id. Vestibulum vestibulum, tortor ut lobortis gravida, libero neque accumsan tortor, eu facilisis metus mi eget justo. Nullam ac massa massa."})]})};const legacyAccordion=Template.bind({});legacyAccordion.storyName="LegacyAccordion",legacyAccordion.args={open:!1,iconVariant:enums.Yi.Primary},legacyAccordion.parameters={storySource:{source:'args => {\n  const [open, setOpen] = useState(false);\n\n  const onClick = () => setOpen(!open);\n\n  return <LegacyAccordion {...args} onClick={onClick} open={open}>\n      <LegacyAccordionHeader actions={<>\n            <Button variant={ButtonVariant.Filled} color={ButtonColor.Primary} size={ButtonSize.Small}>\n              Separat knapp 1\n            </Button>\n            <Button variant={ButtonVariant.Outline} color={ButtonColor.Primary} size={ButtonSize.Small}>\n              Separat knapp 2\n            </Button>\n          </>} subtitle="Valgfri undertittel">\n        Klikk her for å åpne\n      </LegacyAccordionHeader>\n      <LegacyAccordionContent>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse\n        condimentum dolor neque, in rutrum ante auctor maximus. Suspendisse\n        lacinia velit eros, in vehicula dui aliquet a. Sed posuere, diam ac\n        gravida tempor, ex enim auctor massa, id aliquet nulla nibh laoreet\n        nisi. Pellentesque volutpat mollis ex eget convallis. Nam lobortis neque\n        sed molestie varius. Suspendisse finibus lacinia orci facilisis\n        elementum. Maecenas bibendum vehicula urna. Integer egestas, tortor at\n        dictum blandit, leo nibh efficitur nulla, id ultrices tortor dolor eu\n        sem. Donec pharetra scelerisque tellus, non mattis ligula fermentum id.\n        Vestibulum vestibulum, tortor ut lobortis gravida, libero neque accumsan\n        tortor, eu facilisis metus mi eget justo. Nullam ac massa massa.\n      </LegacyAccordionContent>\n    </LegacyAccordion>;\n}'}};const componentMeta={title:"Utgår/LegacyAccordion",parameters:{status:{type:"deprecated",url:"http://www.url.com/status"}},component:LegacyAccordion,argTypes:{open:{control:{type:"boolean"},description:"Sett til `true` for å vise innholdet, eller `false` for å skjule det."},onClick:{action:"clicked",control:{type:"function"},description:"Funksjon som kalles når brukeren klikker på tittelen."},iconVariant:{control:{type:"radio",labels:{[enums.Yi.Primary]:"Primary",[enums.Yi.Secondary]:"Secondary"}},options:[enums.Yi.Primary,enums.Yi.Secondary]}},tags:["stories-mdx"],includeStories:["legacyAccordion"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{})}):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Utgår/LegacyAccordion",component:LegacyAccordion,parameters:{status:{type:"deprecated",url:"http://www.url.com/status"}},argTypes:{open:{control:{type:"boolean"},description:"Sett til `true` for å vise innholdet, eller `false` for å skjule det."},onClick:{action:"clicked",control:{type:"function"},description:"Funksjon som kalles når brukeren klikker på tittelen."},iconVariant:{control:{type:"radio",labels:{[enums.Yi.Primary]:"Primary",[enums.Yi.Secondary]:"Secondary"}},options:[enums.Yi.Primary,enums.Yi.Secondary]}}}),"\n","\n",(0,jsx_runtime.jsx)(_components.h1,{id:"legacyaccordion",children:"LegacyAccordion"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:'"LegacyAccordion" har sitt navn fordi den kan minne om et trekkspill.\nKomponenten lar brukeren bestemme hva som skal være synlig av innhold og fungerer best som en del av en liste med flere.'}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"eksempel",children:"Eksempel"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"LegacyAccordion",args:{open:!1,iconVariant:enums.Yi.Primary},children:Template.bind({})})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"props",children:"Props"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Per nå må komponentens tilstand håndteres utenfra. Dette gjøres ved å bruke egenskapene ",(0,jsx_runtime.jsx)(_components.code,{children:"open"})," og ",(0,jsx_runtime.jsx)(_components.code,{children:"onClick"}),".\n",(0,jsx_runtime.jsx)(_components.code,{children:"open"})," brukes til å definere hvorvidt innholdet skal vises,\nmens ",(0,jsx_runtime.jsx)(_components.code,{children:"onClick"})," kalles hver gang brukeren klikker på tittelen og kan dermed brukes til å trigge en endring av ",(0,jsx_runtime.jsx)(_components.code,{children:"open"}),"."]}),"\n",(0,jsx_runtime.jsx)(dist.$4,{story:"LegacyAccordion"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"tokens",children:"Tokens"}),"\n",(0,jsx_runtime.jsx)(docs_components.jq,{componentName:"LegacyAccordion",description:!0,jsonKey:"component.LegacyAccordion",showPreview:!1})]})}}};const LegacyAccordion_stories=componentMeta},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./packages/react/src/components/LegacyAccordion/LegacyAccordion.module.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".LegacyAccordion-module_legacyAccordion__Z_Nw2 {\n  --component-LegacyAccordion-color-background: var(--colors-white);\n  --component-panel-size-width: 100%;\n\n  background-color: var(--component-LegacyAccordion-color-background);\n  width: var(--component-panel-size-width);\n}\n","",{version:3,sources:["webpack://./packages/react/src/components/LegacyAccordion/LegacyAccordion.module.css"],names:[],mappings:"AAAA;EACE,iEAAiE;EACjE,kCAAkC;;EAElC,mEAAmE;EACnE,wCAAwC;AAC1C",sourcesContent:[".legacyAccordion {\n  --component-LegacyAccordion-color-background: var(--colors-white);\n  --component-panel-size-width: 100%;\n\n  background-color: var(--component-LegacyAccordion-color-background);\n  width: var(--component-panel-size-width);\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={legacyAccordion:"LegacyAccordion-module_legacyAccordion__Z_Nw2"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./packages/react/src/components/LegacyAccordion/LegacyAccordionHeader.module.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".LegacyAccordionHeader-module_legacyAccordionHeader__aU9h6 {\n  --component-LegacyAccordion_header-border_top_color: var(--colors-grey-200);\n  --component-LegacyAccordion_header-border_top_style: solid;\n  --component-LegacyAccordion_header-border_top_width: var(--border_width-thin);\n  --component-LegacyAccordion_header-color-background: var(--colors-white);\n\n  align-items: center;\n  background-color: var(--component-LegacyAccordion_header-color-background);\n  border-top-color: var(--component-LegacyAccordion_header-border_top_color);\n  border-top-style: var(--component-LegacyAccordion_header-border_top_style);\n  border-top-width: var(--component-LegacyAccordion_header-border_top_width);\n  display: flex;\n}\n\n/* breakpoints-xs */\n@media only screen and (min-width: 0) {\n  .LegacyAccordionHeader-module_subtitle__TjbTN {\n    display: none;\n  }\n}\n\n/* breakpoints-sm */\n@media only screen and (min-width: 540px) {\n  .LegacyAccordionHeader-module_legacyAccordionHeader__aU9h6.LegacyAccordionHeader-module_withSubtitle__jgZ3F {\n    padding-bottom: 0.2rem;\n    padding-right: 0.2rem;\n    padding-top: 0.2rem;\n  }\n\n  .LegacyAccordionHeader-module_subtitle__TjbTN {\n    display: inline-block;\n    font-size: 0.9rem;\n    opacity: 0.6;\n  }\n}\n\n.LegacyAccordionHeader-module_title__dO4Ll {\n  --component-LegacyAccordion_header_title-border_bottom_style: none;\n  --component-LegacyAccordion_header_title-border_left_style: none;\n  --component-LegacyAccordion_header_title-border_right_style: none;\n  --component-LegacyAccordion_header_title-border_top_style: none;\n  --component-LegacyAccordion_header_title-color-background: none;\n  --component-LegacyAccordion_header_title-font_size: var(--font_size-300);\n  --component-LegacyAccordion_header_title-font_weight: var(\n    --component-panel-font_weight-heading\n  );\n  --component-LegacyAccordion_header_title-spacing-margin_left: 1.6rem;\n\n  background-color: var(\n    --component-LegacyAccordion_header_title-color-background\n  );\n  border-bottom-style: var(\n    --component-LegacyAccordion_header_title-border_bottom_style\n  );\n  border-left-style: var(\n    --component-LegacyAccordion_header_title-border_left_style\n  );\n  border-right-style: var(\n    --component-LegacyAccordion_header_title-border_right_style\n  );\n  border-top-style: var(\n    --component-LegacyAccordion_header_title-border_top_style\n  );\n  cursor: pointer;\n  display: inline-flex;\n  flex: 1 1 auto;\n  flex-direction: column;\n  font-family: inherit;\n  font-size: var(--component-LegacyAccordion_header_title-font_size);\n  font-weight: var(--component-LegacyAccordion_header_title-font_weight);\n  line-height: 16px;\n  margin-left: var(\n    --component-LegacyAccordion_header_title-spacing-margin_left\n  );\n  text-align: left;\n  word-break: break-word;\n}\n\n.LegacyAccordionHeader-module_actions__Qi7HB {\n  align-items: center;\n  column-gap: 0.3rem;\n  display: grid;\n  grid-auto-flow: column;\n  padding: 0 0.2rem;\n}\n\n.LegacyAccordionHeader-module_subtitle__TjbTN {\n  word-break: break-word;\n}\n","",{version:3,sources:["webpack://./packages/react/src/components/LegacyAccordion/LegacyAccordionHeader.module.css"],names:[],mappings:"AAAA;EACE,2EAA2E;EAC3E,0DAA0D;EAC1D,6EAA6E;EAC7E,wEAAwE;;EAExE,mBAAmB;EACnB,0EAA0E;EAC1E,0EAA0E;EAC1E,0EAA0E;EAC1E,0EAA0E;EAC1E,aAAa;AACf;;AAEA,mBAAmB;AACnB;EACE;IACE,aAAa;EACf;AACF;;AAEA,mBAAmB;AACnB;EACE;IACE,sBAAsB;IACtB,qBAAqB;IACrB,mBAAmB;EACrB;;EAEA;IACE,qBAAqB;IACrB,iBAAiB;IACjB,YAAY;EACd;AACF;;AAEA;EACE,kEAAkE;EAClE,gEAAgE;EAChE,iEAAiE;EACjE,+DAA+D;EAC/D,+DAA+D;EAC/D,wEAAwE;EACxE;;GAEC;EACD,oEAAoE;;EAEpE;;GAEC;EACD;;GAEC;EACD;;GAEC;EACD;;GAEC;EACD;;GAEC;EACD,eAAe;EACf,oBAAoB;EACpB,cAAc;EACd,sBAAsB;EACtB,oBAAoB;EACpB,kEAAkE;EAClE,sEAAsE;EACtE,iBAAiB;EACjB;;GAEC;EACD,gBAAgB;EAChB,sBAAsB;AACxB;;AAEA;EACE,mBAAmB;EACnB,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,iBAAiB;AACnB;;AAEA;EACE,sBAAsB;AACxB",sourcesContent:[".legacyAccordionHeader {\n  --component-LegacyAccordion_header-border_top_color: var(--colors-grey-200);\n  --component-LegacyAccordion_header-border_top_style: solid;\n  --component-LegacyAccordion_header-border_top_width: var(--border_width-thin);\n  --component-LegacyAccordion_header-color-background: var(--colors-white);\n\n  align-items: center;\n  background-color: var(--component-LegacyAccordion_header-color-background);\n  border-top-color: var(--component-LegacyAccordion_header-border_top_color);\n  border-top-style: var(--component-LegacyAccordion_header-border_top_style);\n  border-top-width: var(--component-LegacyAccordion_header-border_top_width);\n  display: flex;\n}\n\n/* breakpoints-xs */\n@media only screen and (min-width: 0) {\n  .subtitle {\n    display: none;\n  }\n}\n\n/* breakpoints-sm */\n@media only screen and (min-width: 540px) {\n  .legacyAccordionHeader.withSubtitle {\n    padding-bottom: 0.2rem;\n    padding-right: 0.2rem;\n    padding-top: 0.2rem;\n  }\n\n  .subtitle {\n    display: inline-block;\n    font-size: 0.9rem;\n    opacity: 0.6;\n  }\n}\n\n.title {\n  --component-LegacyAccordion_header_title-border_bottom_style: none;\n  --component-LegacyAccordion_header_title-border_left_style: none;\n  --component-LegacyAccordion_header_title-border_right_style: none;\n  --component-LegacyAccordion_header_title-border_top_style: none;\n  --component-LegacyAccordion_header_title-color-background: none;\n  --component-LegacyAccordion_header_title-font_size: var(--font_size-300);\n  --component-LegacyAccordion_header_title-font_weight: var(\n    --component-panel-font_weight-heading\n  );\n  --component-LegacyAccordion_header_title-spacing-margin_left: 1.6rem;\n\n  background-color: var(\n    --component-LegacyAccordion_header_title-color-background\n  );\n  border-bottom-style: var(\n    --component-LegacyAccordion_header_title-border_bottom_style\n  );\n  border-left-style: var(\n    --component-LegacyAccordion_header_title-border_left_style\n  );\n  border-right-style: var(\n    --component-LegacyAccordion_header_title-border_right_style\n  );\n  border-top-style: var(\n    --component-LegacyAccordion_header_title-border_top_style\n  );\n  cursor: pointer;\n  display: inline-flex;\n  flex: 1 1 auto;\n  flex-direction: column;\n  font-family: inherit;\n  font-size: var(--component-LegacyAccordion_header_title-font_size);\n  font-weight: var(--component-LegacyAccordion_header_title-font_weight);\n  line-height: 16px;\n  margin-left: var(\n    --component-LegacyAccordion_header_title-spacing-margin_left\n  );\n  text-align: left;\n  word-break: break-word;\n}\n\n.actions {\n  align-items: center;\n  column-gap: 0.3rem;\n  display: grid;\n  grid-auto-flow: column;\n  padding: 0 0.2rem;\n}\n\n.subtitle {\n  word-break: break-word;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={legacyAccordionHeader:"LegacyAccordionHeader-module_legacyAccordionHeader__aU9h6",subtitle:"LegacyAccordionHeader-module_subtitle__TjbTN",withSubtitle:"LegacyAccordionHeader-module_withSubtitle__jgZ3F",title:"LegacyAccordionHeader-module_title__dO4Ll",actions:"LegacyAccordionHeader-module_actions__Qi7HB"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./packages/react/src/components/LegacyAccordion/LegacyAccordionIcon.module.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".LegacyAccordionIcon-module_legacyAccordionIcon__DuWxx {\n  --size: 20px;\n\n  box-sizing: border-box;\n  cursor: pointer;\n  flex-shrink: 0;\n  height: var(--size);\n  margin-bottom: 0.6rem;\n  margin-left: 0.6rem;\n  margin-top: 0.6rem;\n  width: var(--size);\n}\n\n.LegacyAccordionIcon-module_legacyAccordionIcon__DuWxx.LegacyAccordionIcon-module_opened__ZpjvU {\n  transform: rotate(90deg);\n}\n","",{version:3,sources:["webpack://./packages/react/src/components/LegacyAccordion/LegacyAccordionIcon.module.css"],names:[],mappings:"AAAA;EACE,YAAY;;EAEZ,sBAAsB;EACtB,eAAe;EACf,cAAc;EACd,mBAAmB;EACnB,qBAAqB;EACrB,mBAAmB;EACnB,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,wBAAwB;AAC1B",sourcesContent:[".legacyAccordionIcon {\n  --size: 20px;\n\n  box-sizing: border-box;\n  cursor: pointer;\n  flex-shrink: 0;\n  height: var(--size);\n  margin-bottom: 0.6rem;\n  margin-left: 0.6rem;\n  margin-top: 0.6rem;\n  width: var(--size);\n}\n\n.legacyAccordionIcon.opened {\n  transform: rotate(90deg);\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={legacyAccordionIcon:"LegacyAccordionIcon-module_legacyAccordionIcon__DuWxx",opened:"LegacyAccordionIcon-module_opened__ZpjvU"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);