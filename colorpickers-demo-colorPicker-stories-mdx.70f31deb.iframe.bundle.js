(self.webpackChunk_zendeskgarden_react_components=self.webpackChunk_zendeskgarden_react_components||[]).push([[5054],{"./packages/colorpickers/demo/colorPicker.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,controlled:()=>controlled,default:()=>__WEBPACK_DEFAULT_EXPORT__,uncontrolled:()=>uncontrolled});__webpack_require__("./node_modules/react/index.js");var _home_circleci_project_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),_storybook_client_api__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("@storybook/client-api"),_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/theming/src/elements/palette/index.ts"),_zendeskgarden_react_colorpickers__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/colorpickers/src/elements/Colorpicker/index.tsx"),_README_md__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./packages/colorpickers/README.md"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({h1:"h1",h2:"h2"},(0,_home_circleci_project_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.h_,{title:"Packages/Colorpickers/Colorpicker",component:_zendeskgarden_react_colorpickers__WEBPACK_IMPORTED_MODULE_5__.O,parameters:{design:{allowFullscreen:!0,type:"figma",url:"https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=2178%3A344"}}}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h1,{id:"api",children:"API"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.$4,{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h1,{id:"demo",children:"Demo"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2,{id:"uncontrolled",children:"Uncontrolled"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Uncontrolled",argTypes:{color:{control:!1}},children:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_zendeskgarden_react_colorpickers__WEBPACK_IMPORTED_MODULE_5__.O,{...args})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2,{id:"controlled",children:"Controlled"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Controlled",args:{color:_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_6__.Z.blue[600]},argTypes:{defaultColor:{control:!1}},children:args=>{const updateArgs=(0,_storybook_client_api__WEBPACK_IMPORTED_MODULE_2__.useArgs)()[1];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_zendeskgarden_react_colorpickers__WEBPACK_IMPORTED_MODULE_5__.O,{...args,onChange:color=>updateArgs({color})})}})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.UG,{children:_README_md__WEBPACK_IMPORTED_MODULE_7__})]})}const uncontrolled=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_zendeskgarden_react_colorpickers__WEBPACK_IMPORTED_MODULE_5__.O,{...args});uncontrolled.storyName="Uncontrolled",uncontrolled.argTypes={color:{control:!1}},uncontrolled.parameters={storySource:{source:"args => <Colorpicker {...args} />"}};const controlled=args=>{const updateArgs=(0,_storybook_client_api__WEBPACK_IMPORTED_MODULE_2__.useArgs)()[1];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_zendeskgarden_react_colorpickers__WEBPACK_IMPORTED_MODULE_5__.O,{...args,onChange:color=>updateArgs({color})})};controlled.storyName="Controlled",controlled.argTypes={defaultColor:{control:!1}},controlled.args={color:_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_6__.Z.blue[600]},controlled.parameters={storySource:{source:"args => {\n  const updateArgs = useArgs()[1];\n  const handleChange = color => updateArgs({\n    color\n  });\n  return <Colorpicker {...args} onChange={handleChange} />;\n}"}};const componentMeta={title:"Packages/Colorpickers/Colorpicker",parameters:{design:{allowFullscreen:!0,type:"figma",url:"https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=2178%3A344"}},component:_zendeskgarden_react_colorpickers__WEBPACK_IMPORTED_MODULE_5__.O,tags:["stories-mdx"],includeStories:["uncontrolled","controlled"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_circleci_project_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta,__namedExportsOrder=["uncontrolled","controlled"]},"./packages/theming/src/utils/focusStyles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{i:()=>SELECTOR_FOCUS_VISIBLE,j:()=>focusStyles});var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),polished__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/polished/dist/polished.esm.js"),_getFocusBoxShadow__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/theming/src/utils/getFocusBoxShadow.ts");const SELECTOR_FOCUS_VISIBLE='&:focus-visible, &[data-garden-focus-visible="true"]',focusStyles=_ref=>{let{condition=!0,selector=SELECTOR_FOCUS_VISIBLE,shadowWidth="md",spacerWidth="xs",styles:{boxShadow,...styles}={},theme,...options}=_ref;const _boxShadow=condition?(0,_getFocusBoxShadow__WEBPACK_IMPORTED_MODULE_0__.F)({boxShadow,shadowWidth,spacerWidth,theme,...options}):boxShadow;let outline,outlineOffset;return null===spacerWidth?outline=theme.shadowWidths[shadowWidth]:(outline=`${(0,polished__WEBPACK_IMPORTED_MODULE_1__.mA)(`${theme.shadowWidths[shadowWidth]} - ${theme.shadowWidths[spacerWidth]}`)} solid transparent`,outlineOffset=theme.shadowWidths[spacerWidth]),(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.iv)(["&:focus{outline:none;}","{outline:",";outline-offset:",";box-shadow:",";","}"],selector,outline,outlineOffset,_boxShadow,styles)}},"./packages/theming/src/utils/getColor.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{L:()=>getColor,d:()=>DEFAULT_SHADE});var _elements_theme__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/theming/src/elements/theme/index.ts"),polished__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/polished/dist/polished.esm.js"),lodash_memoize__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lodash.memoize/index.js");const DEFAULT_SHADE=600,adjust=(color,expected,actual)=>{if(expected!==actual){const amount=Math.abs(expected-actual)/100*.05;return expected>actual?(0,polished__WEBPACK_IMPORTED_MODULE_1__._j)(amount,color):(0,polished__WEBPACK_IMPORTED_MODULE_1__.$n)(amount,color)}return color},getColor=__webpack_require__.n(lodash_memoize__WEBPACK_IMPORTED_MODULE_0__)()((function(hue){let retVal,shade=arguments.length>1&&void 0!==arguments[1]?arguments[1]:DEFAULT_SHADE,theme=arguments.length>2?arguments[2]:void 0,transparency=arguments.length>3?arguments[3]:void 0;if(isNaN(shade))return;const palette=theme&&theme.palette?theme.palette:_elements_theme__WEBPACK_IMPORTED_MODULE_2__.Z.palette,colors=theme&&theme.colors?theme.colors:_elements_theme__WEBPACK_IMPORTED_MODULE_2__.Z.colors;let _hue;if(_hue="string"==typeof hue&&colors[hue]||hue,Object.prototype.hasOwnProperty.call(palette,_hue)&&(_hue=palette[_hue]),"object"==typeof _hue){if(retVal=_hue[shade],!retVal){const _shade=Object.keys(_hue).map((hueKey=>parseInt(hueKey,10))).reduce(((previous,current)=>Math.abs(current-shade)<Math.abs(previous-shade)?current:previous));retVal=adjust(_hue[_shade],shade,_shade)}}else retVal=adjust(_hue,shade,DEFAULT_SHADE);return transparency&&(retVal=(0,polished__WEBPACK_IMPORTED_MODULE_1__.m4)(retVal,transparency)),retVal}),((hue,shade,theme,transparency)=>JSON.stringify({hue,shade,palette:theme?.palette,colors:theme?.colors,transparency})))},"./packages/theming/src/utils/getFocusBoxShadow.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{F:()=>getFocusBoxShadow});var _elements_theme__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/theming/src/elements/theme/index.ts"),_getColor__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/theming/src/utils/getColor.ts");const getFocusBoxShadow=_ref=>{let{boxShadow,inset=!1,hue="primaryHue",shade=_getColor__WEBPACK_IMPORTED_MODULE_0__.d,shadowWidth="md",spacerHue="background",spacerShade=_getColor__WEBPACK_IMPORTED_MODULE_0__.d,spacerWidth="xs",theme=_elements_theme__WEBPACK_IMPORTED_MODULE_1__.Z}=_ref;const color=(0,_getColor__WEBPACK_IMPORTED_MODULE_0__.L)(hue,shade,theme),shadow=theme.shadows[shadowWidth](color);if(null===spacerWidth)return`${inset?"inset":""} ${shadow}`;const spacerColor=(0,_getColor__WEBPACK_IMPORTED_MODULE_0__.L)(spacerHue,spacerShade,theme),retVal=`\n    ${inset?"inset":""} ${theme.shadows[spacerWidth](spacerColor)},\n    ${inset?"inset":""} ${shadow}`;return boxShadow?`${retVal}, ${boxShadow}`:retVal}},"./packages/theming/src/utils/retrieveComponentStyles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function retrieveComponentStyles(componentId,props){const components=props.theme&&props.theme.components;if(!components)return;const componentStyles=components[componentId];return"function"==typeof componentStyles?componentStyles(props):componentStyles}__webpack_require__.d(__webpack_exports__,{Z:()=>retrieveComponentStyles})},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/react-merge-refs/dist/react-merge-refs.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=function mergeRefs(refs){return function(value){refs.forEach((function(ref){"function"==typeof ref?ref(value):null!=ref&&(ref.current=value)}))}}}}]);