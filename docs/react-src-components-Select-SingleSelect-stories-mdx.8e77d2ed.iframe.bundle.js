"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[866],{"./packages/react/src/components/Select/SingleSelect.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:()=>Template,deaktivert:()=>deaktivert,default:()=>__WEBPACK_DEFAULT_EXPORT__,defaultArgs:()=>defaultArgs,formaterteAlternativer:()=>formaterteAlternativer,medFeil:()=>medFeil,normal:()=>normal});__webpack_require__("./node_modules/react/index.js");var _storybook_addon_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),___WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/react/src/components/Select/Select.tsx"),_docs_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./docs-components/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const defaultArgs={label:"Velg et fylke",multiple:!1,options:[{label:"Agder",value:"Agd",keywords:["agder","aust-agder","vest-agder"]},{label:"Innlandet",value:"Inn",keywords:["innlandet","hedmark","oppland"]},{label:"Møre og Romsdal",value:"MoR",keywords:["møre og romsdal","møre","romsdal"]},{label:"Nordland",value:"Nor",keywords:["nordland"]},{label:"Oslo",value:"Osl",keywords:["oslo"]},{label:"Rogaland",value:"Rog",keywords:["rogaland"]},{label:"Vestfold og Telemark",value:"VoT",keywords:["vestfold og telemark","vestfold","telemark"]},{label:"Troms og Finnmark",value:"ToF",keywords:["troms og finnmark","troms","finnmark"]},{label:"Trøndelag",value:"Trø",keywords:["trøndelag","nord-trøndelag","sør-trøndelag"]},{label:"Vestland",value:"Ves",keywords:["vestland","hordaland","sogn og fjordane"]},{label:"Viken",value:"Vik",keywords:["viken","østfold","akershus","buskerud"]}]},Template=(args={})=>{const _components=Object.assign({div:"div"},(0,_storybook_addon_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.ah)());return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.div,{style:{width:"440px"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(___WEBPACK_IMPORTED_MODULE_5__.P,{...defaultArgs,...args})})};const normal=Template.bind({});normal.storyName="Normal",normal.args={},normal.parameters={storySource:{source:'(args = {}) => <div style={{\n  width: "440px"\n}}>\n    <Select {...{ ...defaultArgs,\n    ...args\n  }} />\n</div>'}};const deaktivert=Template.bind({});deaktivert.storyName="Deaktivert",deaktivert.args={disabled:!0},deaktivert.parameters={storySource:{source:'(args = {}) => <div style={{\n  width: "440px"\n}}>\n    <Select {...{ ...defaultArgs,\n    ...args\n  }} />\n</div>'}};const medFeil=Template.bind({});medFeil.storyName="Med feil",medFeil.args={error:!0},medFeil.parameters={storySource:{source:'(args = {}) => <div style={{\n  width: "440px"\n}}>\n    <Select {...{ ...defaultArgs,\n    ...args\n  }} />\n</div>'}};const formaterteAlternativer=Template.bind({});formaterteAlternativer.storyName="Formaterte alternativer",formaterteAlternativer.args={options:[{label:"Agder",value:"Agd",keywords:["agder"],formattedLabel:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span",{style:{display:"flex",flexDirection:"column"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("strong",{children:"Agder"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{children:"Arendal, Farsund, Flekkefjord, Grimstad, Kristiansand, Lillesand, Lyngdal, Mandal, Risør, Tvedestrand"})]})},{label:"Innlandet",value:"Inn",keywords:["innlandet"],formattedLabel:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span",{style:{display:"flex",flexDirection:"column"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("strong",{children:"Innlandet"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{children:"Brumunddal, Elverum, Fagernes, Gjøvik, Hamar, Kongsvinger, Lillehammer, Moelv, Otta, Raufoss, Vinstra"})]})},{label:"Møre og Romsdal",value:"MoR",keywords:["møre og romsdal","møre","romsdal"],formattedLabel:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span",{style:{display:"flex",flexDirection:"column"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("strong",{children:"Møre og Romsdal"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{children:"Fosnavåg, Kristiansund, Molde, Ulsteinvik, Ålesund, Åndalsnes"})]})},{label:"Nordland",value:"Nor",keywords:["nordland"],formattedLabel:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span",{style:{display:"flex",flexDirection:"column"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("strong",{children:"Nordland"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{children:"Bodø, Brønnøysund, Fauske, Leknes, Mo i Rana, Mosjøen, Narvik, Sandnessjøen, Sortland, Stokmarknes, Svolvær"})]})},{label:"Oslo",value:"Osl",keywords:["oslo"],formattedLabel:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span",{style:{display:"flex",flexDirection:"column"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("strong",{children:"Oslo"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{children:"Oslo"})]})},{label:"Rogaland",value:"Rog",keywords:["rogaland"],formattedLabel:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span",{style:{display:"flex",flexDirection:"column"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("strong",{children:"Rogaland"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{children:"Bryne, Egersund, Haugesund, Jørpeland, Kopervik, Sandnes, Sauda, Skudeneshavn, Stavanger, Åkrehamn"})]})},{label:"Troms og Finnmark",value:"ToF",keywords:["troms og finnmark","troms","finnmark"],formattedLabel:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span",{style:{display:"flex",flexDirection:"column"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("strong",{children:"Troms og Finnmark"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{children:"Alta, Bardufoss, Finnsnes, Hammerfest, Harstad, Honningsvåg, Kirkenes, Tromsø, Vadsø, Vardø"})]})},{label:"Trøndelag",value:"Trø",keywords:["trøndelag","nord-trøndelag","sør-trøndelag"],formattedLabel:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span",{style:{display:"flex",flexDirection:"column"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("strong",{children:"Trøndelag"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{children:"Brekstad, Kolvereid, Levanger, Namsos, Orkanger, Røros, Rørvik, Steinkjer, Stjørdalshalsen, Trondheim, Verdalsøra"})]})},{label:"Vestfold og Telemark",value:"VoT",keywords:["vestfold og telemark","vestfold","telemark"],formattedLabel:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span",{style:{display:"flex",flexDirection:"column"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("strong",{children:"Vestfold og Telemark"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{children:"Brevik, Holmestrand, Horten, Kragerø, Langesund, Larvik, Notodden, Porsgrunn, Rjukan, Sandefjord, Skien, Stathelle, Stavern, Tønsberg"})]})},{label:"Vestland",value:"Ves",keywords:["vestland","hordaland","sogn og fjordane"],formattedLabel:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span",{style:{display:"flex",flexDirection:"column"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("strong",{children:"Vestland"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{children:"Bergen, Florø, Førde, Måløy, Odda, Stord"})]})},{label:"Viken",value:"Vik",keywords:["viken","østfold","akershus","buskerud"],formattedLabel:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span",{style:{display:"flex",flexDirection:"column"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("strong",{children:"Viken"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{children:"Askim, Drammen, Drøbak, Fredrikstad, Halden, Hokksund, Hønefoss, Jessheim, Kongsberg, Lillestrøm, Moss, Mysen, Sandvika, Sarpsborg, Ski, Svelvik"})]})}]},formaterteAlternativer.parameters={storySource:{source:'(args = {}) => <div style={{\n  width: "440px"\n}}>\n    <Select {...{ ...defaultArgs,\n    ...args\n  }} />\n</div>'}};const componentMeta={title:"Kjernekomponenter/Select/Enkel",parameters:{status:{type:"beta",url:"http://www.url.com/status"}},component:___WEBPACK_IMPORTED_MODULE_5__.P,argTypes:{label:{description:"Tekst som vises over feltet.",control:{type:"text"}},disabled:{description:"Settes for å deaktivere feltet.",control:{type:"boolean"}},error:{description:"Settes for å indikere at det er en feil tilknyttet feltet.",control:{type:"boolean"}},options:{description:"Liste med alternativer som skal vises i nedtrekkslisten. Alternativene er av typen `SingleSelectOption` og har følgende egenskaper:\n- `value` er verdien som brukes av `onChange`-funksjonen.\n- `label` er teksten som vises i listen.\n- `formattedLabel` vises i listen i stedet for `label` hvis den er satt. Dette gir mulighet til å formatere teksten. `label` vil fortsatt være det som vises for det valgte alternativet når boksen er lukket.\n- `keywords` er en valgfri liste med nøkkelord som brukes som oppslag når brukeren skriver i søkefeltet. Dette er nyttig hvis brukeren skal kunne søke etter andre ting enn det som står i `label`, f.eks. tekst som brukes i `formattedLabel`.",control:{type:"object"}},onChange:{description:"Funksjon som kalles når brukeren velger et alternativ. Alternativets `value` sendes som parameter til funksjonen.",control:{type:"function"}},value:{description:"Kan brukes til å overstyre hvilken verdi som er valgt.",control:{type:"text"}},hideLabel:{description:"Skjuler teksten over feltet, men gjør den likevel tilgjengelig for verktøy som skjermlesere.",control:{type:"boolean"}},inputId:{description:"Gir input-feltet en ID. Dersom denne ikke satt, genereres en unik ID automatisk.",control:{type:"text"}}},tags:["stories-mdx"],includeStories:["normal","deaktivert","medFeil","formaterteAlternativer"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_createMdxContent,{})}):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",h3:"h3",span:"span",strong:"strong"},(0,_storybook_addon_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.h_,{title:"Kjernekomponenter/Select/Enkel",component:___WEBPACK_IMPORTED_MODULE_5__.P,parameters:{status:{type:"beta",url:"http://www.url.com/status"}},argTypes:{label:{description:"Tekst som vises over feltet.",control:{type:"text"}},disabled:{description:"Settes for å deaktivere feltet.",control:{type:"boolean"}},error:{description:"Settes for å indikere at det er en feil tilknyttet feltet.",control:{type:"boolean"}},options:{description:"Liste med alternativer som skal vises i nedtrekkslisten. Alternativene er av typen `SingleSelectOption` og har følgende egenskaper:\n- `value` er verdien som brukes av `onChange`-funksjonen.\n- `label` er teksten som vises i listen.\n- `formattedLabel` vises i listen i stedet for `label` hvis den er satt. Dette gir mulighet til å formatere teksten. `label` vil fortsatt være det som vises for det valgte alternativet når boksen er lukket.\n- `keywords` er en valgfri liste med nøkkelord som brukes som oppslag når brukeren skriver i søkefeltet. Dette er nyttig hvis brukeren skal kunne søke etter andre ting enn det som står i `label`, f.eks. tekst som brukes i `formattedLabel`.",control:{type:"object"}},onChange:{description:"Funksjon som kalles når brukeren velger et alternativ. Alternativets `value` sendes som parameter til funksjonen.",control:{type:"function"}},value:{description:"Kan brukes til å overstyre hvilken verdi som er valgt.",control:{type:"text"}},hideLabel:{description:"Skjuler teksten over feltet, men gjør den likevel tilgjengelig for verktøy som skjermlesere.",control:{type:"boolean"}},inputId:{description:"Gir input-feltet en ID. Dersom denne ikke satt, genereres en unik ID automatisk.",control:{type:"text"}}}}),"\n","\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h1,{id:"select-enkel",children:"Select (enkel)"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_docs_components__WEBPACK_IMPORTED_MODULE_2__.AL,{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"Select"})," er en nedtrekksmeny som lar brukeren velge et alternativ fra en liste."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2,{id:"eksempler",children:"Eksempler"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h3,{id:"normal-visning",children:"Normal visning"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Normal",args:{},children:Template.bind({})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h3,{id:"deaktivert",children:"Deaktivert"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Deaktivert",args:{disabled:!0},children:Template.bind({})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h3,{id:"med-feil",children:"Med feil"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Med feil",args:{error:!0},children:Template.bind({})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h3,{id:"med-formaterte-alternativer",children:"Med formaterte alternativer"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Formaterte alternativer",args:{options:[{label:"Agder",value:"Agd",keywords:["agder"],formattedLabel:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.span,{style:{display:"flex",flexDirection:"column"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.strong,{children:"Agder"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.span,{children:"Arendal, Farsund, Flekkefjord, Grimstad, Kristiansand, Lillesand, Lyngdal, Mandal, Risør, Tvedestrand"})]})},{label:"Innlandet",value:"Inn",keywords:["innlandet"],formattedLabel:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.span,{style:{display:"flex",flexDirection:"column"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.strong,{children:"Innlandet"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.span,{children:"Brumunddal, Elverum, Fagernes, Gjøvik, Hamar, Kongsvinger, Lillehammer, Moelv, Otta, Raufoss, Vinstra"})]})},{label:"Møre og Romsdal",value:"MoR",keywords:["møre og romsdal","møre","romsdal"],formattedLabel:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.span,{style:{display:"flex",flexDirection:"column"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.strong,{children:"Møre og Romsdal"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.span,{children:"Fosnavåg, Kristiansund, Molde, Ulsteinvik, Ålesund, Åndalsnes"})]})},{label:"Nordland",value:"Nor",keywords:["nordland"],formattedLabel:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.span,{style:{display:"flex",flexDirection:"column"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.strong,{children:"Nordland"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.span,{children:"Bodø, Brønnøysund, Fauske, Leknes, Mo i Rana, Mosjøen, Narvik, Sandnessjøen, Sortland, Stokmarknes, Svolvær"})]})},{label:"Oslo",value:"Osl",keywords:["oslo"],formattedLabel:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.span,{style:{display:"flex",flexDirection:"column"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.strong,{children:"Oslo"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.span,{children:"Oslo"})]})},{label:"Rogaland",value:"Rog",keywords:["rogaland"],formattedLabel:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.span,{style:{display:"flex",flexDirection:"column"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.strong,{children:"Rogaland"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.span,{children:"Bryne, Egersund, Haugesund, Jørpeland, Kopervik, Sandnes, Sauda, Skudeneshavn, Stavanger, Åkrehamn"})]})},{label:"Troms og Finnmark",value:"ToF",keywords:["troms og finnmark","troms","finnmark"],formattedLabel:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.span,{style:{display:"flex",flexDirection:"column"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.strong,{children:"Troms og Finnmark"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.span,{children:"Alta, Bardufoss, Finnsnes, Hammerfest, Harstad, Honningsvåg, Kirkenes, Tromsø, Vadsø, Vardø"})]})},{label:"Trøndelag",value:"Trø",keywords:["trøndelag","nord-trøndelag","sør-trøndelag"],formattedLabel:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.span,{style:{display:"flex",flexDirection:"column"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.strong,{children:"Trøndelag"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.span,{children:"Brekstad, Kolvereid, Levanger, Namsos, Orkanger, Røros, Rørvik, Steinkjer, Stjørdalshalsen, Trondheim, Verdalsøra"})]})},{label:"Vestfold og Telemark",value:"VoT",keywords:["vestfold og telemark","vestfold","telemark"],formattedLabel:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.span,{style:{display:"flex",flexDirection:"column"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.strong,{children:"Vestfold og Telemark"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.span,{children:"Brevik, Holmestrand, Horten, Kragerø, Langesund, Larvik, Notodden, Porsgrunn, Rjukan, Sandefjord, Skien, Stathelle, Stavern, Tønsberg"})]})},{label:"Vestland",value:"Ves",keywords:["vestland","hordaland","sogn og fjordane"],formattedLabel:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.span,{style:{display:"flex",flexDirection:"column"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.strong,{children:"Vestland"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.span,{children:"Bergen, Florø, Førde, Måløy, Odda, Stord"})]})},{label:"Viken",value:"Vik",keywords:["viken","østfold","akershus","buskerud"],formattedLabel:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.span,{style:{display:"flex",flexDirection:"column"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.strong,{children:"Viken"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.span,{children:"Askim, Drammen, Drøbak, Fredrikstad, Halden, Hokksund, Hønefoss, Jessheim, Kongsberg, Lillestrøm, Moss, Mysen, Sandvika, Sarpsborg, Ski, Svelvik"})]})}]},children:Template.bind({})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2,{id:"egenskaper",children:"Egenskaper"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.$4,{story:"Normal"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2,{id:"tilgjengelighet",children:"Tilgjengelighet"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h3,{id:"mus",children:"Mus"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p,{children:"Nedtrekkslisten åpnes ved å klikke på feltet med musen. Deretter kan man klikke på alternativet man ønsker å velge.\nHvis alternativet ikke er synlig, kan man rulle seg frem til det ved bruk av rullefelt eller musehjul."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h3,{id:"tastatur",children:"Tastatur"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p,{children:["Nedtrekkslisten åpnes ved å trykke på ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"Enter"})," eller ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"Space"})," når feltet har fokus.\nDeretter kan man navigere seg frem til ønsket alternativ ved bruk av piltastene."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2,{id:"tokens",children:"Tokens"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_docs_components__WEBPACK_IMPORTED_MODULE_2__.jq,{jsonKey:"component.select",componentName:"select",showPreview:!1,description:!0})]})}}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta}}]);