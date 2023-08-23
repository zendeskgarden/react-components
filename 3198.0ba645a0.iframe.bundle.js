"use strict";(self.webpackChunk_zendeskgarden_react_components=self.webpackChunk_zendeskgarden_react_components||[]).push([[3198],{"./packages/colorpickers/demo/stories/data.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>COLOR_SWATCH_COLORS});var _zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/theming/src/elements/palette/index.ts");const SHADES=[100,200,300,400,500,600,700,800],toLabeledValues=hue=>{const colors=_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_0__.Z[hue];return SHADES.map((shade=>({label:`${hue}-${shade}`,value:colors[shade]})))},COLOR_SWATCH_COLORS=[toLabeledValues("blue"),toLabeledValues("green"),toLabeledValues("red"),toLabeledValues("yellow")]},"./packages/colorpickers/src/elements/ColorSwatch/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{b:()=>ColorSwatch});var react=__webpack_require__("./node_modules/react/index.js"),prop_types=__webpack_require__("./packages/colorpickers/node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Tooltip=__webpack_require__("./packages/tooltips/src/elements/Tooltip.tsx"),index_esm=__webpack_require__("./packages/colorpickers/node_modules/@zendeskgarden/container-grid/dist/index.esm.js"),dist_index_esm=__webpack_require__("./packages/colorpickers/node_modules/@zendeskgarden/container-utilities/dist/index.esm.js"),check_sm_fill=__webpack_require__("./packages/colorpickers/node_modules/@zendeskgarden/svg-icons/src/12/check-sm-fill.svg"),retrieveComponentStyles=__webpack_require__("./packages/theming/src/utils/retrieveComponentStyles.ts"),theme=__webpack_require__("./packages/theming/src/elements/theme/index.ts");const StyledColorSwatch=styled_components_browser_esm.ZP.table.attrs({"data-garden-id":"colorpickers.color_swatch","data-garden-version":"storybook",role:"grid"}).withConfig({displayName:"StyledColorSwatch",componentId:"sc-ajx440-0"})(["border-collapse:collapse;line-height:normal;",";"],(props=>(0,retrieveComponentStyles.Z)("colorpickers.color_swatch",props)));StyledColorSwatch.defaultProps={theme:theme.Z};const StyledCell=styled_components_browser_esm.ZP.td.attrs({"data-garden-id":"colorpickers.swatch_cell","data-garden-version":"storybook"}).withConfig({displayName:"StyledCell",componentId:"sc-qr3oit-0"})(["padding:","px;font-size:0;",";"],(props=>props.theme.space.base),(props=>(0,retrieveComponentStyles.Z)("colorpickers.swatch_cell",props)));StyledCell.defaultProps={theme:theme.Z};var focusStyles=__webpack_require__("./packages/theming/src/utils/focusStyles.ts"),StyledButtonPreview=__webpack_require__("./packages/colorpickers/src/styled/ColorpickerDialog/StyledButtonPreview.ts");const StyledSwatchButton=(0,styled_components_browser_esm.ZP)(StyledButtonPreview.a).attrs((props=>({as:"button","data-garden-id":"colorpickers.swatch_button","data-test-id":props.backgroundColor,"data-garden-version":"storybook"}))).withConfig({displayName:"StyledSwatchButton",componentId:"sc-edpwpp-0"})(["transition:box-shadow 0.1s ease-in-out;outline:none;border:none;border-radius:",";cursor:pointer;padding:0;"," ",";"],(props=>props.theme.borderRadii.md),(props=>(0,focusStyles.j)({theme:props.theme})),(props=>(0,retrieveComponentStyles.Z)("colorpickers.swatch_button",props)));StyledSwatchButton.defaultProps={theme:theme.Z};var polished_esm=__webpack_require__("./packages/colorpickers/node_modules/polished/dist/polished.esm.js");const StyledIcon=(0,styled_components_browser_esm.ZP)((_ref=>{let{children,color,theme,...props}=_ref;return react.cloneElement(react.Children.only(children),props)})).attrs({"data-garden-id":"colorpickers.colorswatch_check","data-garden-version":"storybook"}).withConfig({displayName:"StyledIcon",componentId:"sc-8oigif-0"})(["transition:opacity 0.2s ease-in-out;opacity:",";width:","px;height:","px;"," ",";"],(props=>props.selected?1:0),(props=>5*props.theme.space.base),(props=>5*props.theme.space.base),(props=>{const{theme,color}=props,{alpha}=(0,polished_esm.Oq)(color);let checkColor=(0,polished_esm.XV)(color,theme.colors.foreground,theme.colors.background);return void 0!==alpha&&alpha<.4&&(checkColor=theme.colors.foreground),`\n    color: ${checkColor}\n  `}),(props=>(0,retrieveComponentStyles.Z)("colorpickers.colorswatch_check",props)));StyledIcon.defaultProps={theme:theme.Z};var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const ColorSwatch=(0,react.forwardRef)(((_ref,ref)=>{let{colors,...props}=_ref;const{rtl}=(0,react.useContext)(styled_components_browser_esm.Ni),{getGridCellProps}=(0,index_esm.N)({rtl,matrix:colors,selection:!0,wrap:!0,idPrefix:(0,dist_index_esm.Me)(void 0),...props});return(0,jsx_runtime.jsx)(StyledColorSwatch,{ref,children:(0,jsx_runtime.jsx)("tbody",{children:colors.map(((row,rowIdx)=>(0,jsx_runtime.jsx)("tr",{children:row.map(((color,colIdx)=>{const{label,value}=color,{"aria-selected":ariaSelected,...other}=getGridCellProps({colIdx,rowIdx,type:"button",role:void 0});return(0,jsx_runtime.jsx)(StyledCell,{"aria-selected":ariaSelected,children:(0,jsx_runtime.jsx)(Tooltip.u,{content:label,children:(0,jsx_runtime.jsx)(StyledSwatchButton,{backgroundColor:value,"aria-pressed":ariaSelected,"aria-label":label,...other,children:(0,jsx_runtime.jsx)(StyledIcon,{color:value,selected:ariaSelected,children:(0,jsx_runtime.jsx)(check_sm_fill.Z,{})})})})},value)}))},row[0].value)))})})}));ColorSwatch.displayName="ColorSwatch",ColorSwatch.propTypes={colors:prop_types_default().arrayOf(prop_types_default().any).isRequired,rowIndex:prop_types_default().number,colIndex:prop_types_default().number,selectedRowIndex:prop_types_default().number,selectedColIndex:prop_types_default().number,defaultRowIndex:prop_types_default().number,defaultColIndex:prop_types_default().number,defaultSelectedRowIndex:prop_types_default().number,defaultSelectedColIndex:prop_types_default().number,onChange:prop_types_default().func,onSelect:prop_types_default().func};try{ColorSwatch.displayName="ColorSwatch",ColorSwatch.__docgenInfo={description:"",displayName:"ColorSwatch",props:{colors:{defaultValue:null,description:"Sets the two-dimension array of labeled HEX and RGB/A string colors",name:"colors",required:!0,type:{name:"{ value: string; label: string; }[][]"}},rowIndex:{defaultValue:null,description:"Sets the focused row index in a controlled color swatch",name:"rowIndex",required:!1,type:{name:"number"}},colIndex:{defaultValue:null,description:"Sets the focused column index in a controlled color swatch.\nCan be set to `-1` to clear the row focus.",name:"colIndex",required:!1,type:{name:"number"}},selectedRowIndex:{defaultValue:null,description:"Sets the selected row index in a controlled color swatch.\nCan be set to `-1` to clear the column focus.",name:"selectedRowIndex",required:!1,type:{name:"number"}},selectedColIndex:{defaultValue:null,description:"Sets the selected column index in a controlled color swatch.\nCan be set to `-1` to clear the row selection.",name:"selectedColIndex",required:!1,type:{name:"number"}},defaultRowIndex:{defaultValue:null,description:"Sets the default focused row index in an uncontrolled color swatch.\nCan be set to `-1` to clear the column selection.",name:"defaultRowIndex",required:!1,type:{name:"number"}},defaultColIndex:{defaultValue:null,description:"Sets the default focused column index in an uncontrolled color swatch",name:"defaultColIndex",required:!1,type:{name:"number"}},defaultSelectedRowIndex:{defaultValue:null,description:"Sets the default selected row index in an uncontrolled color swatch",name:"defaultSelectedRowIndex",required:!1,type:{name:"number"}},defaultSelectedColIndex:{defaultValue:null,description:"Sets the default selected column index in an uncontrolled color swatch",name:"defaultSelectedColIndex",required:!1,type:{name:"number"}},onChange:{defaultValue:null,description:"Handles color swatch changes",name:"onChange",required:!1,type:{name:"((rowIndex: number, colIndex: number) => void)"}},onSelect:{defaultValue:null,description:"Handles color swatch select event",name:"onSelect",required:!1,type:{name:"((rowIndex: number, colIndex: number) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/colorpickers/src/elements/ColorSwatch/index.tsx#ColorSwatch"]={docgenInfo:ColorSwatch.__docgenInfo,name:"ColorSwatch",path:"packages/colorpickers/src/elements/ColorSwatch/index.tsx#ColorSwatch"})}catch(__react_docgen_typescript_loader_error){}},"./packages/colorpickers/src/styled/ColorpickerDialog/StyledButtonPreview.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>StyledButtonPreview});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),polished__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/colorpickers/node_modules/polished/dist/polished.esm.js"),_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/theming/src/utils/retrieveComponentStyles.ts"),_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/theming/src/elements/theme/index.ts"),_common_checkeredBackground__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/colorpickers/src/styled/common/checkeredBackground.ts");const background=props=>{const{backgroundColor}=props;let color;if("string"==typeof backgroundColor)color=backgroundColor;else if(void 0===backgroundColor)color=props.theme.palette.white;else{const{red,green,blue,alpha=1}=backgroundColor;color=`rgba(${red}, ${green}, ${blue}, ${alpha?alpha/100:0})`}return`linear-gradient(${color}, ${color})`},StyledButtonPreview=styled_components__WEBPACK_IMPORTED_MODULE_0__.ZP.span.attrs((props=>({style:{background:`${background(props)}, ${(0,_common_checkeredBackground__WEBPACK_IMPORTED_MODULE_1__.z)(props.theme,8)}`},"data-garden-id":"colorpickers.colordialog_preview","data-garden-version":"storybook","data-test-id":"dialog-preview"}))).withConfig({displayName:"StyledButtonPreview",componentId:"sc-1jzysg3-0"})(["display:inline-block;bottom:","px;border-radius:",";box-shadow:inset 0 0 0 "," ",";width:","px;height:","px;",";"],(props=>props.theme.space.base),(props=>props.theme.borderRadii.sm),(props=>props.theme.borderWidths.sm),(props=>(0,polished__WEBPACK_IMPORTED_MODULE_2__.m4)(props.theme.palette.black,.19)),(props=>5*props.theme.space.base),(props=>5*props.theme.space.base),(props=>(0,_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_3__.Z)("colorpickers.colordialog_preview",props)));StyledButtonPreview.defaultProps={theme:_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_4__.Z}},"./packages/colorpickers/src/styled/common/checkeredBackground.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>checkeredBackground});var _zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/theming/src/utils/getColor.ts");const checkeredBackground=function(theme,size){let positionY=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,repeat=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"repeat";const color=(0,_zendeskgarden_react_theming__WEBPACK_IMPORTED_MODULE_0__.L)("neutralHue",400,theme),dimensions=`${size}px ${size}px`,positionX1=theme.rtl?"100%":"0",positionX2=theme.rtl?`calc(100% - ${size/2}px)`:size/2+"px";return`\n    linear-gradient(45deg, ${color} 25%, transparent 25%) ${`${positionX1} ${positionY}px`} / ${dimensions} ${repeat},\n    linear-gradient(45deg, transparent 75%, ${color} 75%) ${`${positionX2} ${size/2+positionY}px`} / ${dimensions} ${repeat},\n    linear-gradient(135deg, ${color} 25%, transparent 25%) ${`${positionX2} ${positionY}px`} / ${dimensions} ${repeat},\n    linear-gradient(135deg, transparent 75%, ${color} 75%) ${`${positionX1} ${size/-2+positionY}px`} / ${dimensions} ${repeat}\n  `}},"./packages/theming/src/utils/focusStyles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>SELECTOR_FOCUS_VISIBLE,j:()=>focusStyles});var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),polished__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/theming/node_modules/polished/dist/polished.esm.js"),_getFocusBoxShadow__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/theming/src/utils/getFocusBoxShadow.ts");const SELECTOR_FOCUS_VISIBLE='&:focus-visible, &[data-garden-focus-visible="true"]',focusStyles=_ref=>{let{condition=!0,selector=SELECTOR_FOCUS_VISIBLE,shadowWidth="md",spacerWidth="xs",styles:{boxShadow,...styles}={},theme,...options}=_ref;const _boxShadow=condition?(0,_getFocusBoxShadow__WEBPACK_IMPORTED_MODULE_0__.F)({boxShadow,shadowWidth,spacerWidth,theme,...options}):boxShadow;let outline,outlineOffset;return null===spacerWidth?outline=theme.shadowWidths[shadowWidth]:(outline=`${(0,polished__WEBPACK_IMPORTED_MODULE_1__.mA)(`${theme.shadowWidths[shadowWidth]} - ${theme.shadowWidths[spacerWidth]}`)} solid transparent`,outlineOffset=theme.shadowWidths[spacerWidth]),(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.iv)(["&:focus{outline:none;}","{outline:",";outline-offset:",";box-shadow:",";","}"],selector,outline,outlineOffset,_boxShadow,styles)}},"./packages/theming/src/utils/getColor.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>getColor,d:()=>DEFAULT_SHADE});var _elements_theme__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/theming/src/elements/theme/index.ts"),polished__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/theming/node_modules/polished/dist/polished.esm.js"),lodash_memoize__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/theming/node_modules/lodash.memoize/index.js");const DEFAULT_SHADE=600,adjust=(color,expected,actual)=>{if(expected!==actual){const amount=Math.abs(expected-actual)/100*.05;return expected>actual?(0,polished__WEBPACK_IMPORTED_MODULE_1__._j)(amount,color):(0,polished__WEBPACK_IMPORTED_MODULE_1__.$n)(amount,color)}return color},getColor=__webpack_require__.n(lodash_memoize__WEBPACK_IMPORTED_MODULE_0__)()((function(hue){let retVal,shade=arguments.length>1&&void 0!==arguments[1]?arguments[1]:DEFAULT_SHADE,theme=arguments.length>2?arguments[2]:void 0,transparency=arguments.length>3?arguments[3]:void 0;if(isNaN(shade))return;const palette=theme&&theme.palette?theme.palette:_elements_theme__WEBPACK_IMPORTED_MODULE_2__.Z.palette,colors=theme&&theme.colors?theme.colors:_elements_theme__WEBPACK_IMPORTED_MODULE_2__.Z.colors;let _hue;if(_hue="string"==typeof hue&&colors[hue]||hue,Object.prototype.hasOwnProperty.call(palette,_hue)&&(_hue=palette[_hue]),"object"==typeof _hue){if(retVal=_hue[shade],!retVal){const _shade=Object.keys(_hue).map((hueKey=>parseInt(hueKey,10))).reduce(((previous,current)=>Math.abs(current-shade)<Math.abs(previous-shade)?current:previous));retVal=adjust(_hue[_shade],shade,_shade)}}else retVal=adjust(_hue,shade,DEFAULT_SHADE);return transparency&&(retVal=(0,polished__WEBPACK_IMPORTED_MODULE_1__.m4)(retVal,transparency)),retVal}),((hue,shade,theme,transparency)=>JSON.stringify({hue,shade,palette:theme?.palette,colors:theme?.colors,transparency})))},"./packages/theming/src/utils/getFocusBoxShadow.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{F:()=>getFocusBoxShadow});var _elements_theme__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/theming/src/elements/theme/index.ts"),_getColor__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/theming/src/utils/getColor.ts");const getFocusBoxShadow=_ref=>{let{boxShadow,inset=!1,hue="primaryHue",shade=_getColor__WEBPACK_IMPORTED_MODULE_0__.d,shadowWidth="md",spacerHue="background",spacerShade=_getColor__WEBPACK_IMPORTED_MODULE_0__.d,spacerWidth="xs",theme=_elements_theme__WEBPACK_IMPORTED_MODULE_1__.Z}=_ref;const color=(0,_getColor__WEBPACK_IMPORTED_MODULE_0__.L)(hue,shade,theme),shadow=theme.shadows[shadowWidth](color);if(null===spacerWidth)return`${inset?"inset":""} ${shadow}`;const spacerColor=(0,_getColor__WEBPACK_IMPORTED_MODULE_0__.L)(spacerHue,spacerShade,theme),retVal=`\n    ${inset?"inset":""} ${theme.shadows[spacerWidth](spacerColor)},\n    ${inset?"inset":""} ${shadow}`;return boxShadow?`${retVal}, ${boxShadow}`:retVal}},"./packages/theming/src/utils/getLineHeight.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>getLineHeight});var polished__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/theming/node_modules/polished/dist/polished.esm.js");function getLineHeight(height,fontSize){const[heightValue,heightUnit]=(0,polished__WEBPACK_IMPORTED_MODULE_0__.dJ)(height.toString()),[fontSizeValue,fontSizeUnit]=(0,polished__WEBPACK_IMPORTED_MODULE_0__.dJ)(fontSize.toString());if(heightUnit&&"px"!==heightUnit)throw new Error(`Unexpected \`height\` with '${heightUnit}' units.`);if(fontSizeUnit&&"px"!==fontSizeUnit)throw new Error(`Unexpected \`fontSize\` with '${fontSizeUnit}' units.`);return heightValue/fontSizeValue}},"./packages/theming/src/utils/retrieveComponentStyles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function retrieveComponentStyles(componentId,props){const components=props.theme&&props.theme.components;if(!components)return;const componentStyles=components[componentId];return"function"==typeof componentStyles?componentStyles(props):componentStyles}__webpack_require__.d(__webpack_exports__,{Z:()=>retrieveComponentStyles})},"./packages/colorpickers/README.md":module=>{module.exports="# @zendeskgarden/react-colorpickers [![npm version](https://flat.badgen.net/npm/v/@zendeskgarden/react-colorpickers)](https://www.npmjs.com/package/@zendeskgarden/react-colorpickers)\n\nThis package includes components related to color pickers in the\n[Garden Design System](https://zendeskgarden.github.io/).\n\n## Installation\n\n```sh\nnpm install @zendeskgarden/react-colorpickers\n\n# Peer Dependencies - Also Required\nnpm install react react-dom styled-components @zendeskgarden/react-theming\n```\n\n## Usage\n\n```jsx\nimport { ThemeProvider } from '@zendeskgarden/react-theming';\nimport { Colorpicker } from '@zendeskgarden/react-colorpickers';\n\n\n/**\n * Place a `ThemeProvider` at the root of your React application\n */\n<ThemeProvider>\n  <Colorpicker defaultColor=\"#17494D\">\n</ThemeProvider>\n```\n"}}]);