"use strict";(self.webpackChunk_zendeskgarden_react_components=self.webpackChunk_zendeskgarden_react_components||[]).push([[9644],{"./packages/buttons/src/elements/ChevronButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>ChevronButton});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_IconButton__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/buttons/src/elements/IconButton.tsx"),_zendeskgarden_svg_icons_src_16_chevron_down_stroke_svg__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/buttons/node_modules/@zendeskgarden/svg-icons/src/16/chevron-down-stroke.svg"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const ChevronButton=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((_ref,ref)=>{let{...buttonProps}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_IconButton__WEBPACK_IMPORTED_MODULE_3__.h,{ref,...buttonProps,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_zendeskgarden_svg_icons_src_16_chevron_down_stroke_svg__WEBPACK_IMPORTED_MODULE_1__.Z,{})})}));ChevronButton.displayName="ChevronButton",ChevronButton.propTypes=_IconButton__WEBPACK_IMPORTED_MODULE_3__.h.propTypes,ChevronButton.defaultProps={isBasic:!1,isPill:!1,size:"medium"};try{ChevronButton.displayName="ChevronButton",ChevronButton.__docgenInfo={description:"",displayName:"ChevronButton",props:{isRotated:{defaultValue:null,description:"Rotates icon 180 degrees",name:"isRotated",required:!1,type:{name:"boolean"}},focusInset:{defaultValue:null,description:"Applies inset `box-shadow` styling on focus",name:"focusInset",required:!1,type:{name:"boolean"}},isDanger:{defaultValue:null,description:"Applies danger styling",name:"isDanger",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"medium"},description:"Specifies the button size",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},isSelected:{defaultValue:null,description:"@ignore prop used by `ButtonGroup`",name:"isSelected",required:!1,type:{name:"boolean"}},isPill:{defaultValue:{value:"false"},description:"Applies pill button styling",name:"isPill",required:!1,type:{name:"boolean"}},isBasic:{defaultValue:{value:"false"},description:"Applies basic button styling",name:"isBasic",required:!1,type:{name:"boolean"}},isNeutral:{defaultValue:null,description:"Applies neutral button styling",name:"isNeutral",required:!1,type:{name:"boolean"}},isPrimary:{defaultValue:null,description:"Applies primary button styling",name:"isPrimary",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/buttons/src/elements/ChevronButton.tsx#ChevronButton"]={docgenInfo:ChevronButton.__docgenInfo,name:"ChevronButton",path:"packages/buttons/src/elements/ChevronButton.tsx#ChevronButton"})}catch(__react_docgen_typescript_loader_error){}},"./packages/buttons/src/elements/IconButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>IconButton});var react=__webpack_require__("./node_modules/react/index.js"),prop_types=__webpack_require__("./packages/buttons/node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),types=__webpack_require__("./packages/buttons/src/types/index.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),getColor=__webpack_require__("./packages/theming/src/utils/getColor.ts"),retrieveComponentStyles=__webpack_require__("./packages/theming/src/utils/retrieveComponentStyles.ts"),theme=__webpack_require__("./packages/theming/src/elements/theme/index.ts"),StyledButton=__webpack_require__("./packages/buttons/src/styled/StyledButton.ts"),StyledIcon=__webpack_require__("./packages/buttons/src/styled/StyledIcon.ts");const iconButtonStyles=props=>{const width=(0,StyledButton.C)(props);return(0,styled_components_browser_esm.iv)(["border:",";padding:0;width:",";min-width:",";",";&:disabled{background-color:",";}"],props.isBasic&&"none",width,width,props.isBasic&&!(props.isPrimary||props.isDanger||props.disabled)&&(props=>{const baseColor=(0,getColor.L)("neutralHue",600,props.theme),hoverColor=(0,getColor.L)("neutralHue",700,props.theme),activeColor=(0,getColor.L)("neutralHue",800,props.theme);return(0,styled_components_browser_esm.iv)(["color:",";&:hover{color:",";}&:active,&[aria-pressed='true'],&[aria-pressed='mixed']{color:",";}"],baseColor,hoverColor,activeColor)})(props),!props.isPrimary&&"transparent")},StyledIconButton=(0,styled_components_browser_esm.ZP)(StyledButton.S).attrs({"data-garden-id":"buttons.icon_button","data-garden-version":"storybook"}).withConfig({displayName:"StyledIconButton",componentId:"sc-1t0ughp-0"})(["",";& ","{","}",";"],(props=>iconButtonStyles(props)),StyledIcon.x,(props=>(props=>{const size=props.theme.iconSizes.md;return(0,styled_components_browser_esm.iv)(["width:",";height:",";& > svg{transition:opacity 0.15s ease-in-out;}"],size,size)})(props)),(props=>(0,retrieveComponentStyles.Z)("buttons.icon_button",props)));StyledIconButton.defaultProps={theme:theme.Z};var useSplitButtonContext=__webpack_require__("./packages/buttons/src/utils/useSplitButtonContext.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const IconButton=(0,react.forwardRef)(((_ref,ref)=>{let{children,isRotated,...otherProps}=_ref;const focusInset=(0,useSplitButtonContext.i)();return(0,jsx_runtime.jsx)(StyledIconButton,{ref,...otherProps,focusInset:otherProps.focusInset||focusInset,children:(0,jsx_runtime.jsx)(StyledIcon.x,{isRotated,children})})}));IconButton.displayName="IconButton",IconButton.propTypes={isDanger:prop_types_default().bool,size:prop_types_default().oneOf(types.N),isNeutral:prop_types_default().bool,isPrimary:prop_types_default().bool,isBasic:prop_types_default().bool,isPill:prop_types_default().bool,focusInset:prop_types_default().bool,isRotated:prop_types_default().bool},IconButton.defaultProps={isPill:!0,isBasic:!0,size:"medium"};try{IconButton.displayName="IconButton",IconButton.__docgenInfo={description:"",displayName:"IconButton",props:{isRotated:{defaultValue:null,description:"Rotates icon 180 degrees",name:"isRotated",required:!1,type:{name:"boolean"}},focusInset:{defaultValue:null,description:"Applies inset `box-shadow` styling on focus",name:"focusInset",required:!1,type:{name:"boolean"}},isDanger:{defaultValue:null,description:"Applies danger styling",name:"isDanger",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"medium"},description:"Specifies the button size",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},isSelected:{defaultValue:null,description:"@ignore prop used by `ButtonGroup`",name:"isSelected",required:!1,type:{name:"boolean"}},isPill:{defaultValue:{value:"true"},description:"Applies pill button styling",name:"isPill",required:!1,type:{name:"boolean"}},isBasic:{defaultValue:{value:"true"},description:"Applies basic button styling",name:"isBasic",required:!1,type:{name:"boolean"}},isNeutral:{defaultValue:null,description:"Applies neutral button styling",name:"isNeutral",required:!1,type:{name:"boolean"}},isPrimary:{defaultValue:null,description:"Applies primary button styling",name:"isPrimary",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/buttons/src/elements/IconButton.tsx#IconButton"]={docgenInfo:IconButton.__docgenInfo,name:"IconButton",path:"packages/buttons/src/elements/IconButton.tsx#IconButton"})}catch(__react_docgen_typescript_loader_error){}},"./packages/buttons/src/types/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>SIZE});__webpack_require__("./node_modules/react/index.js");const SIZE=["small","medium","large"]},"./packages/buttons/src/utils/useSplitButtonContext.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{P:()=>SplitButtonContext,i:()=>useSplitButtonContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const SplitButtonContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(void 0),useSplitButtonContext=()=>(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(SplitButtonContext)},"./packages/grid/src/elements/pane/Pane.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{X:()=>Pane_Pane});var react=__webpack_require__("./node_modules/react/index.js"),bundle_esm=__webpack_require__("./packages/grid/node_modules/use-resize-observer/dist/bundle.esm.js"),react_merge_refs_esm=__webpack_require__("./packages/grid/node_modules/react-merge-refs/dist/react-merge-refs.esm.js"),prop_types=__webpack_require__("./packages/grid/node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),index_esm=__webpack_require__("./packages/grid/node_modules/@zendeskgarden/container-utilities/dist/index.esm.js"),dist_index_esm=__webpack_require__("./packages/grid/node_modules/@zendeskgarden/container-splitter/dist/index.esm.js"),usePaneProviderContext=__webpack_require__("./packages/grid/src/utils/usePaneProviderContext.ts");const PaneContext=(0,react.createContext)({setId:()=>{}}),utils_usePaneContext=()=>(0,react.useContext)(PaneContext);var types=__webpack_require__("./packages/grid/src/types/index.ts"),polished_esm=__webpack_require__("./packages/grid/node_modules/polished/dist/polished.esm.js"),getColor=__webpack_require__("./packages/theming/src/utils/getColor.ts"),focusStyles=__webpack_require__("./packages/theming/src/utils/focusStyles.ts"),retrieveComponentStyles=__webpack_require__("./packages/theming/src/utils/retrieveComponentStyles.ts"),theme=__webpack_require__("./packages/theming/src/elements/theme/index.ts");const StyledPaneSplitter=styled_components_browser_esm.ZP.div.attrs({"data-garden-id":"pane.splitter","data-garden-version":"storybook"}).withConfig({displayName:"StyledPaneSplitter",componentId:"sc-jylemn-0"})(["display:flex;position:absolute;align-items:center;justify-content:center;z-index:1;user-select:none;",";","{z-index:2;}&::before{position:absolute;transition:box-shadow 0.1s ease-in-out,background-color 0.25s ease-in-out;z-index:-1;content:'';}",";",";"],(props=>{const size=(0,polished_esm.mA)(`${props.theme.shadowWidths.md} * 2`),separatorSize=(0,polished_esm.mA)(`${props.theme.borderWidths.sm} * 2`),offset=(0,polished_esm.mA)(`-${size} / 2`);let cursor,top,right,left,bottom,width,height,separatorWidth,separatorHeight;switch(props.orientation){case"top":cursor="row-resize",top=offset,width="100%",height=size,separatorWidth=width,separatorHeight=props.theme.borderWidths.sm;break;case"bottom":cursor="row-resize",bottom=offset,width="100%",height=size,separatorWidth=width,separatorHeight=props.theme.borderWidths.sm;break;case"start":cursor="col-resize",top=0,width=size,height="100%",separatorWidth=props.theme.borderWidths.sm,separatorHeight=height,props.theme.rtl?right=offset:left=offset;break;default:cursor="col-resize",top=0,width=size,height="100%",separatorWidth=props.theme.borderWidths.sm,separatorHeight=height,props.theme.rtl?left=offset:right=offset}const dimensionProperty="100%"===width?"height":"width";return(0,styled_components_browser_esm.iv)(["top:",";right:",";bottom:",";left:",";cursor:",";width:",";height:",";&::before{width:",";height:",";}&:hover::before{",":",";}&:focus::before,&:focus-visible::before,&[data-garden-focus-visible]::before{",":",";}&:focus-visible::before,&[data-garden-focus-visible]::before{border-radius:",";}"],top,right,bottom,left,props.isFixed?"pointer":cursor,width,height,separatorWidth,separatorHeight,dimensionProperty,props.isHovered&&separatorSize,dimensionProperty,separatorSize,props.theme.borderRadii.md)}),focusStyles.i,(props=>{const color=(0,getColor.L)("neutralHue",300,props.theme),hoverColor=(0,getColor.L)("primaryHue",600,props.theme),activeColor=(0,getColor.L)("primaryHue",800,props.theme);return(0,styled_components_browser_esm.iv)(["&::before{background-color:",";}&:hover::before{background-color:",";}"," &:active::before{background-color:",";}"],color,props.isHovered&&hoverColor,(0,focusStyles.j)({theme:props.theme,hue:hoverColor,styles:{backgroundColor:hoverColor},selector:'&:focus-visible::before, &[data-garden-focus-visible="true"]::before'}),props.isHovered&&activeColor)}),(props=>(0,retrieveComponentStyles.Z)("pane.splitter",props)));StyledPaneSplitter.defaultProps={theme:theme.Z};const PaneSplitterContext=(0,react.createContext)({orientation:"start",min:0,max:0,layoutKey:"",valueNow:0,size:0,isRow:!1}),utils_usePaneSplitterContext=()=>(0,react.useContext)(PaneSplitterContext);var useDocument=__webpack_require__("./packages/theming/src/utils/useDocument.ts"),useText=__webpack_require__("./packages/theming/src/utils/useText.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const paneToSplitterOrientation={start:"vertical",end:"vertical",top:"horizontal",bottom:"horizontal"},orientationToDimension={start:"columns",end:"columns",top:"rows",bottom:"rows"},SplitterComponent=(0,react.forwardRef)(((_ref,ref)=>{let{providerId,layoutKey,min,max,orientation,isFixed,onMouseDown,onTouchStart,onKeyDown,onClick,...props}=_ref;const paneProviderContext=(0,usePaneProviderContext.L4)(providerId),paneContext=utils_usePaneContext(),themeContext=(0,react.useContext)(styled_components_browser_esm.Ni),environment=(0,useDocument.k)(themeContext),[isHovered,setIsHovered]=(0,react.useState)(!1),isRow="rows"===orientationToDimension[orientation],separatorRef=(0,react.useRef)(null),splitterOrientation=paneToSplitterOrientation[orientation||"end"],pixelsPerFr=paneProviderContext?paneProviderContext.pixelsPerFr[orientationToDimension[orientation]]:0,value=isRow?paneProviderContext?.getRowValue(layoutKey,!0):paneProviderContext?.getColumnValue(layoutKey,!0),valueInFr=isRow?paneProviderContext?.getRowValue(layoutKey):paneProviderContext?.getColumnValue(layoutKey),{getSeparatorProps,getPrimaryPaneProps}=(0,dist_index_esm.b)({orientation:splitterOrientation,isLeading:"start"===orientation||"top"===orientation,min:min*pixelsPerFr,max:max*pixelsPerFr,rtl:themeContext.rtl,isFixed,environment,onChange:valueNow=>isRow?paneProviderContext?.setRowValue("top"===orientation,layoutKey,valueNow/pixelsPerFr):paneProviderContext?.setColumnValue("start"===orientation,layoutKey,valueNow/pixelsPerFr),valueNow:value,separatorRef});(0,react.useEffect)((()=>{paneContext.id||paneContext.setId(getPrimaryPaneProps().id)}),[paneContext,getPrimaryPaneProps]);const ariaLabel=(0,useText.X)(SplitterComponent,props,"aria-label",`${splitterOrientation} splitter`),separatorProps=getSeparatorProps({"aria-controls":paneContext.id,"aria-label":ariaLabel,onMouseDown,onTouchStart,onKeyDown,onClick}),size=isRow?separatorRef.current?.clientWidth:separatorRef.current?.clientHeight,onMouseOver=(0,react.useMemo)((()=>(0,index_esm.Mj)(props.onMouseOver,(event=>setIsHovered(event.target===separatorRef.current)))),[props.onMouseOver,separatorRef]);return(0,jsx_runtime.jsx)(PaneSplitterContext.Provider,{value:(0,react.useMemo)((()=>({orientation,layoutKey,min,max,valueNow:valueInFr,size,isRow})),[orientation,layoutKey,min,max,valueInFr,size,isRow]),children:(0,jsx_runtime.jsx)(StyledPaneSplitter,{isHovered,isFixed,orientation,...separatorProps,...props,onMouseOver,ref:(0,react_merge_refs_esm.Z)([separatorRef,ref])})})}));SplitterComponent.displayName="Pane.Splitter",SplitterComponent.propTypes={layoutKey:prop_types_default().string.isRequired,min:prop_types_default().number.isRequired,max:prop_types_default().number.isRequired,orientation:prop_types_default().oneOf(types.eh),isFixed:prop_types_default().bool},SplitterComponent.defaultProps={orientation:"end"};const Splitter=SplitterComponent;try{Splitter.displayName="Pane.Splitter",Splitter.__docgenInfo={description:"",displayName:"Pane.Splitter",props:{providerId:{defaultValue:null,description:"Identifies the associated `PaneProvider`. Assumes the closest parent provider, by default.",name:"providerId",required:!1,type:{name:"string"}},layoutKey:{defaultValue:null,description:"Specifies the splitter key",name:"layoutKey",required:!0,type:{name:"string"}},min:{defaultValue:null,description:"Sets a minimum, in `fr` units, for splitter position",name:"min",required:!0,type:{name:"number"}},max:{defaultValue:null,description:"Sets a maximum, in `fr` units, for splitter position",name:"max",required:!0,type:{name:"number"}},orientation:{defaultValue:{value:"end"},description:"Determines splitter orientation within a pane",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"start"'},{value:'"top"'},{value:'"bottom"'},{value:'"end"'}]}},isFixed:{defaultValue:null,description:"Determines if the splitter only toggles between `min` and `max`",name:"isFixed",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/grid/src/elements/pane/components/Splitter.tsx#Pane.Splitter"]={docgenInfo:Pane.Splitter.__docgenInfo,name:"Pane.Splitter",path:"packages/grid/src/elements/pane/components/Splitter.tsx#Pane.Splitter"})}catch(__react_docgen_typescript_loader_error){}const StyledPaneContent=styled_components_browser_esm.ZP.div.attrs({"data-garden-id":"pane.content","data-garden-version":"storybook"}).withConfig({displayName:"StyledPaneContent",componentId:"sc-1b38mbh-0"})(["height:100%;overflow:auto;&[hidden]{display:none;}",";"],(props=>(0,retrieveComponentStyles.Z)("pane.content",props)));StyledPaneContent.defaultProps={theme:theme.Z};const ContentComponent=(0,react.forwardRef)(((props,ref)=>{const{isVisible}=utils_usePaneContext();return(0,jsx_runtime.jsx)(StyledPaneContent,{hidden:!isVisible,ref,...props})}));ContentComponent.displayName="Pane.Content";const Content=ContentComponent;try{Content.displayName="Pane.Content",Content.__docgenInfo={description:"",displayName:"Pane.Content",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/grid/src/elements/pane/components/Content.tsx#Pane.Content"]={docgenInfo:Pane.Content.__docgenInfo,name:"Pane.Content",path:"packages/grid/src/elements/pane/components/Content.tsx#Pane.Content"})}catch(__react_docgen_typescript_loader_error){}var Tooltip=__webpack_require__("./packages/tooltips/src/elements/Tooltip.tsx"),ChevronButton=__webpack_require__("./packages/buttons/src/elements/ChevronButton.tsx");const StyledPaneSplitterButton=(0,styled_components_browser_esm.ZP)(ChevronButton.A).attrs({"data-garden-id":"pane.splitter_button","data-garden-version":"storybook",isBasic:!0,isPill:!0,size:"small"}).withConfig({displayName:"StyledPaneSplitterButton",componentId:"sc-zh032e-0"})(["position:absolute;transition:box-shadow 0.1s ease-in-out,background-color 0.25s ease-in-out,opacity 0.25s ease-in-out 0.1s;opacity:0;",";",";&::before{position:absolute;z-index:-1;background-color:",";width:100%;height:100%;content:'';}",";",":hover &,",":focus-visible &,","[data-garden-focus-visible] &,","{opacity:1;}",";"],(props=>{const size=6*props.theme.space.base+"px",display=props.splitterSize<=(0,polished_esm.wA)((0,polished_esm.mA)(`${props.theme.shadowWidths.md} * 2 + ${size}`))&&"none",isVertical="start"===props.orientation||"end"===props.orientation;let top,left,right,bottom;return props.splitterSize>=(0,polished_esm.wA)((0,polished_esm.mA)(`${size} * 3`))&&("start"===props.placement?isVertical?top=size:props.theme.rtl?right=size:left=size:"end"===props.placement&&(isVertical?bottom=size:props.theme.rtl?left=size:right=size)),(0,styled_components_browser_esm.iv)(["display:",";top:",";right:",";bottom:",";left:",";width:",";min-width:",";height:",";"],display,top,right,bottom,left,size,size,size)}),(props=>{let degrees=0;return props.isRotated&&(degrees=props.theme.rtl?-180:180),"end"===props.orientation?degrees+=props.theme.rtl?-90:90:"start"===props.orientation?degrees+=props.theme.rtl?90:-90:"bottom"===props.orientation&&(degrees+=180),(0,styled_components_browser_esm.iv)(["& > svg{transform:rotate(","deg);}"],degrees)}),(props=>props.theme.colors.background),(_ref=>{let{theme}=_ref;const boxShadow=theme.shadows.lg(`${theme.space.base}px`,2*theme.space.base+"px",(0,getColor.L)("chromeHue",600,theme,.15));return(0,styled_components_browser_esm.iv)(["box-shadow:",";",""],boxShadow,(0,focusStyles.j)({theme,boxShadow}))}),StyledPaneSplitter,StyledPaneSplitter,StyledPaneSplitter,focusStyles.i,(props=>(0,retrieveComponentStyles.Z)("pane.splitter_button",props)));StyledPaneSplitterButton.defaultProps={theme:theme.Z};const SplitterButtonComponent=(0,react.forwardRef)(((props,ref)=>{const{label,placement:defaultPlacement}=props,{orientation,layoutKey,min,max,isRow,valueNow,size,providerId}=utils_usePaneSplitterContext(),paneProviderContext=(0,usePaneProviderContext.L4)(providerId),isTop="top"===orientation,isStart="start"===orientation,isMin=valueNow===min;let placement=defaultPlacement;defaultPlacement||(placement=isRow?"center":"start");const setValue=(0,react.useCallback)((value=>{isRow?paneProviderContext.setRowValue(isTop,layoutKey,value):paneProviderContext.setColumnValue(isStart,layoutKey,value)}),[isRow,isTop,isStart,layoutKey,paneProviderContext]),onClick=(0,index_esm.Mj)(props.onClick,(()=>{setValue(isMin?max:min)})),onKeyDown=(0,index_esm.Mj)(props.onKeyDown,(event=>event.stopPropagation())),onMouseDown=(0,index_esm.Mj)(props.onMouseDown,(event=>event.stopPropagation()));return(0,jsx_runtime.jsx)(Tooltip.u,{content:label,style:{cursor:"default"},onMouseDown:e=>e.stopPropagation(),children:(0,jsx_runtime.jsx)(StyledPaneSplitterButton,{"aria-label":label,...props,placement,orientation,isRotated:isMin,splitterSize:size||0,ref,onClick,onKeyDown,onMouseDown})})}));SplitterButtonComponent.displayName="Pane.SplitterButton";const SplitterButton=SplitterButtonComponent;try{SplitterButton.displayName="Pane.SplitterButton",SplitterButton.__docgenInfo={description:"",displayName:"Pane.SplitterButton",props:{placement:{defaultValue:null,description:"Adjusts the placement of the splitter button. Assumes start when vertical and center when horizontal, by default.",name:"placement",required:!1,type:{name:"enum",value:[{value:'"start"'},{value:'"end"'},{value:'"center"'}]}},label:{defaultValue:null,description:"Renders the provided label text inside a tooltip",name:"label",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/grid/src/elements/pane/components/SplitterButton.tsx#Pane.SplitterButton"]={docgenInfo:Pane.SplitterButton.__docgenInfo,name:"Pane.SplitterButton",path:"packages/grid/src/elements/pane/components/SplitterButton.tsx#Pane.SplitterButton"})}catch(__react_docgen_typescript_loader_error){}const StyledPane=styled_components_browser_esm.ZP.div.attrs({"data-garden-id":"pane","data-garden-version":"storybook"}).withConfig({displayName:"StyledPane",componentId:"sc-1ltjst7-0"})(["position:relative;min-width:0;min-height:0;",";"],(props=>(0,retrieveComponentStyles.Z)("pane",props)));StyledPane.defaultProps={theme:theme.Z};const PaneComponent=(0,react.forwardRef)(((_ref,ref)=>{let{children,...props}=_ref;const[paneId,setPaneId]=(0,react.useState)(),observerRef=(0,react.useRef)(null),{width=0,height=0}=(0,bundle_esm.Z)({ref:observerRef}),isVisible=(0,react.useMemo)((()=>!observerRef.current||width>0&&height>0),[width,height]),paneContext=(0,react.useMemo)((()=>({isVisible,id:paneId,setId:id=>setPaneId(id)})),[paneId,isVisible]);return(0,jsx_runtime.jsx)(PaneContext.Provider,{value:paneContext,children:(0,jsx_runtime.jsx)(StyledPane,{id:paneId,ref:(0,react_merge_refs_esm.Z)([ref,observerRef]),...props,children})})}));PaneComponent.displayName="Pane";const Pane_Pane=PaneComponent;Pane_Pane.Content=Content,Pane_Pane.Splitter=Splitter,Pane_Pane.SplitterButton=SplitterButton;try{Pane_Pane.displayName="Pane",Pane_Pane.__docgenInfo={description:"",displayName:"Pane",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/grid/src/elements/pane/Pane.tsx#Pane"]={docgenInfo:Pane_Pane.__docgenInfo,name:"Pane",path:"packages/grid/src/elements/pane/Pane.tsx#Pane"})}catch(__react_docgen_typescript_loader_error){}},"./packages/grid/src/elements/pane/PaneProvider.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{f:()=>PaneProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/grid/node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__),_zendeskgarden_container_utilities__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/grid/node_modules/@zendeskgarden/container-utilities/dist/index.esm.js"),_utils_usePaneProviderContext__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/grid/src/utils/usePaneProviderContext.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const getPixelsPerFr=(totalFrs,totalDimension)=>totalDimension/totalFrs,convertToPixels=(values,pixelsPerFr)=>Object.entries(values).reduce(((prev,_ref)=>{let[key,value]=_ref;return prev[key]=value*pixelsPerFr,prev}),{}),PaneProvider=_ref2=>{let{id,totalPanesWidth,totalPanesHeight,defaultRowValues,defaultColumnValues,rowValues,columnValues,onChange,children}=_ref2;const isControlled=null!=rowValues&&null!=columnValues,[rowState,setRowState]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultRowValues||{}),[columnState,setColumnState]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultColumnValues||{}),rowsTrack=isControlled?rowValues:rowState,columnsTrack=isControlled?columnValues:columnState,setRowsTrack=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((values=>isControlled&&onChange?onChange(values(rowsTrack),columnsTrack):setRowState(values)),[isControlled,onChange,setRowState,columnsTrack,rowsTrack]),setColumnsTrack=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((values=>isControlled&&onChange?onChange(rowsTrack,values(columnsTrack)):setColumnState(values)),[isControlled,onChange,setColumnState,rowsTrack,columnsTrack]),totalFractions=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>({rows:Object.values(rowsTrack).reduce(((prev,value)=>value+prev),0),columns:Object.values(columnsTrack).reduce(((prev,value)=>value+prev),0)})),[rowsTrack,columnsTrack]),pixelsPerFr=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>({rows:getPixelsPerFr(totalFractions.rows,totalPanesHeight),columns:getPixelsPerFr(totalFractions.columns,totalPanesWidth)})),[totalFractions,totalPanesHeight,totalPanesWidth]),layoutStateInPixels=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>({rows:convertToPixels(rowsTrack,pixelsPerFr.rows),columns:convertToPixels(columnsTrack,pixelsPerFr.columns)})),[rowsTrack,columnsTrack,pixelsPerFr]),layoutIndices=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>{const rowArray=Object.keys(rowsTrack),columnArray=Object.keys(columnsTrack);return{rows:rowArray.reduce(((prev,key,index)=>(prev[key]=index,prev)),{}),columns:columnArray.reduce(((prev,key,index)=>(prev[key]=index,prev)),{}),rowArray,columnArray}}),[rowsTrack,columnsTrack]),setRowValue=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(((isTop,splitterId,value)=>{const{rows,rowArray}=layoutIndices,stealFromTraversal=isTop?-1:1;setRowsTrack((state=>{const oldValue=rowsTrack[splitterId],stealFromIndex=rows[splitterId]+stealFromTraversal,addToIndex=rows[splitterId]+0,stealFromKey=rowArray[stealFromIndex],addToKey=rowArray[addToIndex],difference=oldValue-value,nextState={...state};return nextState[addToKey]=rowsTrack[addToKey]-difference,nextState[stealFromKey]=rowsTrack[stealFromKey]+difference,nextState}))}),[layoutIndices,rowsTrack,setRowsTrack]),setColumnValue=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(((isStart,splitterId,value)=>{const{columns,columnArray}=layoutIndices,stealFromTraversal=isStart?-1:1;setColumnsTrack((state=>{const stealFromIndex=columns[splitterId]+stealFromTraversal,addToIndex=columns[splitterId]+0,oldValue=columnsTrack[splitterId],stealFromKey=columnArray[stealFromIndex],addToKey=columnArray[addToIndex],difference=oldValue-value,nextState={...state};return nextState[addToKey]=columnsTrack[addToKey]-difference,nextState[stealFromKey]=columnsTrack[stealFromKey]+difference,nextState}))}),[layoutIndices,columnsTrack,setColumnsTrack]),getColumnValue=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(((splitterKey,isPixels)=>isPixels?layoutStateInPixels.columns[splitterKey]:columnsTrack[splitterKey]),[columnsTrack,layoutStateInPixels]),getRowValue=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(((splitterKey,isPixels)=>isPixels?layoutStateInPixels.rows[splitterKey]:rowsTrack[splitterKey]),[rowsTrack,layoutStateInPixels]),getGridTemplateColumns=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((isPixels=>{const{columnArray}=layoutIndices;return isPixels?columnArray.map((col=>`${layoutStateInPixels.columns[col]}px`)).join(" "):columnArray.map((col=>`${columnsTrack[col]}fr`)).join(" ")}),[layoutIndices,columnsTrack,layoutStateInPixels]),getGridTemplateRows=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((isPixels=>{const{rowArray}=layoutIndices;return isPixels?rowArray.map((row=>`${layoutStateInPixels.rows[row]}px`)).join(" "):rowArray.map((row=>`${rowsTrack[row]}fr`)).join(" ")}),[layoutIndices,rowsTrack,layoutStateInPixels]),providerId=(0,_zendeskgarden_container_utilities__WEBPACK_IMPORTED_MODULE_2__.Me)(id),parentPaneProviderContext=(0,_utils_usePaneProviderContext__WEBPACK_IMPORTED_MODULE_3__.ZP)(),paneProviderContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>providerId?{providerId,contextData:{...parentPaneProviderContext.contextData,[providerId]:{columnState,rowState,setRowValue,setColumnValue,getRowValue,getColumnValue,totalPanesHeight,totalPanesWidth,pixelsPerFr}}}:{}),[providerId,parentPaneProviderContext,rowState,columnState,setRowValue,setColumnValue,getRowValue,getColumnValue,totalPanesHeight,totalPanesWidth,pixelsPerFr]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_utils_usePaneProviderContext__WEBPACK_IMPORTED_MODULE_3__.Ph.Provider,{value:paneProviderContext,children:children?.({id:providerId,getRowValue,getColumnValue,getGridTemplateColumns,getGridTemplateRows})})};PaneProvider.displayName="PaneProvider",PaneProvider.displayName="PaneProvider",PaneProvider.propTypes={id:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,totalPanesWidth:prop_types__WEBPACK_IMPORTED_MODULE_4___default().number.isRequired,totalPanesHeight:prop_types__WEBPACK_IMPORTED_MODULE_4___default().number.isRequired,defaultRowValues:prop_types__WEBPACK_IMPORTED_MODULE_4___default().object,defaultColumnValues:prop_types__WEBPACK_IMPORTED_MODULE_4___default().object,rowValues:prop_types__WEBPACK_IMPORTED_MODULE_4___default().object,columnValues:prop_types__WEBPACK_IMPORTED_MODULE_4___default().object,onChange:prop_types__WEBPACK_IMPORTED_MODULE_4___default().func,children:prop_types__WEBPACK_IMPORTED_MODULE_4___default().func};try{PaneProvider.displayName="PaneProvider",PaneProvider.__docgenInfo={description:"",displayName:"PaneProvider",props:{id:{defaultValue:null,description:"Identifies the pane provider",name:"id",required:!1,type:{name:"string"}},totalPanesWidth:{defaultValue:null,description:"Provides the total width, in `px` units, of all panes in the layout",name:"totalPanesWidth",required:!0,type:{name:"number"}},totalPanesHeight:{defaultValue:null,description:"Provides the total height, in `px` units, of all panes in the layout",name:"totalPanesHeight",required:!0,type:{name:"number"}},defaultRowValues:{defaultValue:null,description:"Defines default row values, in `fr` units, for an uncontrolled layout. The values are keyed by splitter.",name:"defaultRowValues",required:!1,type:{name:"Record<string, number>"}},defaultColumnValues:{defaultValue:null,description:"Defines default column values, in `fr` units, for an uncontrolled layout. The values are keyed by splitter.",name:"defaultColumnValues",required:!1,type:{name:"Record<string, number>"}},rowValues:{defaultValue:null,description:"Defines row values, in `fr` units, for a controlled layout. The values are keyed by splitter.",name:"rowValues",required:!1,type:{name:"Record<string, number>"}},columnValues:{defaultValue:null,description:"Defines column values, in `fr` units, for a controlled layout. The values are keyed by splitter.",name:"columnValues",required:!1,type:{name:"Record<string, number>"}},onChange:{defaultValue:null,description:"Handles splitter position changes\n@param rowValues The updated row values\n@param columnValues The updated column values",name:"onChange",required:!1,type:{name:"((rowValues: Record<string, number>, columnValues: Record<string, number>) => void)"}},children:{defaultValue:null,description:"Surfaces render props for applying splitter state to the supporting layout\n@param id Provides the `id` prop, if specified; otherwise, a generated ID.\n@param getColumnValue Gets column value by key\n@param getRowValue Gets row value by key\n@param getGridTemplateRows Gets grid template rows track\n@param getGridTemplateColumns Gets grid template columns track",name:"children",required:!1,type:{name:"(({ id, getColumnValue, getRowValue, getGridTemplateRows, getGridTemplateColumns }: { id: string; getColumnValue: (splitterKey: string, isPixels?: boolean) => number; getRowValue: (splitterKey: string, isPixels?: boolean) => number; getGridTemplateRows: (isPixels?: boolean | undefined) => str..."}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/grid/src/elements/pane/PaneProvider.tsx#PaneProvider"]={docgenInfo:PaneProvider.__docgenInfo,name:"PaneProvider",path:"packages/grid/src/elements/pane/PaneProvider.tsx#PaneProvider"})}catch(__react_docgen_typescript_loader_error){}},"./packages/grid/src/types/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I8:()=>TEXT_ALIGN,LT:()=>ALIGN_ITEMS,L_:()=>SPACE,Qu:()=>WRAP,S9:()=>ALIGN_SELF,XQ:()=>JUSTIFY_CONTENT,eh:()=>ORIENTATION});__webpack_require__("./node_modules/react/index.js");const ALIGN_ITEMS=["start","end","center","baseline","stretch"],ALIGN_SELF=["auto",...ALIGN_ITEMS],JUSTIFY_CONTENT=["start","end","center","between","around"],TEXT_ALIGN=["start","end","center","justify"],SPACE=[!1,"xxs","xs","sm","md","lg","xl","xxl"],WRAP=["nowrap","wrap","wrap-reverse"],ORIENTATION=["top","bottom","start","end"]},"./packages/grid/src/utils/usePaneProviderContext.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L4:()=>usePaneProviderContextData,Ph:()=>PaneProviderContext,ZP:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const PaneProviderContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({}),usePaneProviderContextData=providerId=>{const context=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(PaneProviderContext),id=providerId||context.providerId;return id&&context.contextData?context.contextData[id]:void 0},__WEBPACK_DEFAULT_EXPORT__=()=>(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(PaneProviderContext)},"./packages/theming/src/utils/getLineHeight.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>getLineHeight});var polished__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/theming/node_modules/polished/dist/polished.esm.js");function getLineHeight(height,fontSize){const[heightValue,heightUnit]=(0,polished__WEBPACK_IMPORTED_MODULE_0__.dJ)(height.toString()),[fontSizeValue,fontSizeUnit]=(0,polished__WEBPACK_IMPORTED_MODULE_0__.dJ)(fontSize.toString());if(heightUnit&&"px"!==heightUnit)throw new Error(`Unexpected \`height\` with '${heightUnit}' units.`);if(fontSizeUnit&&"px"!==fontSizeUnit)throw new Error(`Unexpected \`fontSize\` with '${fontSizeUnit}' units.`);return heightValue/fontSizeValue}},"./packages/theming/src/utils/useText.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{X:()=>useText});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const useText=function(component,props,name,text){let condition=!(arguments.length>4&&void 0!==arguments[4])||arguments[4];const value=condition?props[name]:void 0;return(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>{if(condition){if("children"===name)throw new Error("Error: `children` is not a valid `useText` prop.");if(null===value||""===value)throw new Error(component.displayName?`Error: you must provide a valid \`${name}\` text value for <${component.displayName}>.`:`Error: you must provide a valid \`${name}\` text value.`);if(void 0===value)return text}return value}),[component.displayName,value,name,text,condition])}}}]);