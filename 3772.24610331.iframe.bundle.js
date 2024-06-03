/*! For license information please see 3772.24610331.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_zendeskgarden_react_components=self.webpackChunk_zendeskgarden_react_components||[]).push([[3772],{"./node_modules/@storybook/react/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _chunk_JWY6Y6NU_mjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/react/dist/chunk-JWY6Y6NU.mjs"),_storybook_global__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("@storybook/global"),_storybook_preview_api__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("@storybook/preview-api"),{window:globalWindow}=(__webpack_require__("@storybook/client-logger"),_storybook_global__WEBPACK_IMPORTED_MODULE_1__.global);globalWindow&&(globalWindow.STORYBOOK_ENV="react");var api=(0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_2__.start)(_chunk_JWY6Y6NU_mjs__WEBPACK_IMPORTED_MODULE_0__.o,{render:_chunk_JWY6Y6NU_mjs__WEBPACK_IMPORTED_MODULE_0__.X});api.forceReRender,api.clientApi.raw;_chunk_JWY6Y6NU_mjs__WEBPACK_IMPORTED_MODULE_0__.X},"./packages/modals/node_modules/@zendeskgarden/svg-icons/src/16/x-stroke.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const __WEBPACK_DEFAULT_EXPORT__=function SvgXStroke(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,focusable:"false",viewBox:"0 0 16 16","aria-hidden":"true"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{stroke:"currentColor",strokeLinecap:"round",d:"M3 13L13 3m0 10L3 3"})))}},"./node_modules/@zendeskgarden/container-modal/dist/index.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>useModal});var react=__webpack_require__("./node_modules/react/index.js"),reach_auto_id=__webpack_require__("./node_modules/@reach/auto-id/dist/reach-auto-id.mjs");function composeEventHandlers(){for(var _len=arguments.length,fns=new Array(_len),_key=0;_key<_len;_key++)fns[_key]=arguments[_key];return function(event){for(var _len2=arguments.length,args=new Array(_len2>1?_len2-1:0),_key2=1;_key2<_len2;_key2++)args[_key2-1]=arguments[_key2];return fns.some((fn=>(fn&&fn(event,...args),event&&event.defaultPrevented)))}}const KEYS_ESCAPE="Escape";var DocumentPosition;!function(DocumentPosition){DocumentPosition[DocumentPosition.DISCONNECTED=1]="DISCONNECTED",DocumentPosition[DocumentPosition.PRECEDING=2]="PRECEDING",DocumentPosition[DocumentPosition.FOLLOWING=4]="FOLLOWING",DocumentPosition[DocumentPosition.CONTAINS=8]="CONTAINS",DocumentPosition[DocumentPosition.CONTAINED_BY=16]="CONTAINED_BY",DocumentPosition[DocumentPosition.IMPLEMENTATION_SPECIFIC=32]="IMPLEMENTATION_SPECIFIC"}(DocumentPosition||(DocumentPosition={}));let idCounter=0;function index_esm_composeEventHandlers(){for(var _len=arguments.length,fns=new Array(_len),_key=0;_key<_len;_key++)fns[_key]=arguments[_key];return function(event){for(var _len2=arguments.length,args=new Array(_len2>1?_len2-1:0),_key2=1;_key2<_len2;_key2++)args[_key2-1]=arguments[_key2];return fns.some((fn=>(fn&&fn(event,...args),event&&event.defaultPrevented)))}}const index_esm_KEYS_TAB="Tab";var index_esm_DocumentPosition;!function(DocumentPosition){DocumentPosition[DocumentPosition.DISCONNECTED=1]="DISCONNECTED",DocumentPosition[DocumentPosition.PRECEDING=2]="PRECEDING",DocumentPosition[DocumentPosition.FOLLOWING=4]="FOLLOWING",DocumentPosition[DocumentPosition.CONTAINS=8]="CONTAINS",DocumentPosition[DocumentPosition.CONTAINED_BY=16]="CONTAINED_BY",DocumentPosition[DocumentPosition.IMPLEMENTATION_SPECIFIC=32]="IMPLEMENTATION_SPECIFIC"}(index_esm_DocumentPosition||(index_esm_DocumentPosition={}));var candidateSelectors=["input:not([inert])","select:not([inert])","textarea:not([inert])","a[href]:not([inert])","button:not([inert])","[tabindex]:not(slot):not([inert])","audio[controls]:not([inert])","video[controls]:not([inert])",'[contenteditable]:not([contenteditable="false"]):not([inert])',"details>summary:first-of-type:not([inert])","details:not([inert])"],candidateSelector=candidateSelectors.join(","),NoElement="undefined"==typeof Element,matches=NoElement?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,getRootNode=!NoElement&&Element.prototype.getRootNode?function(element){var _element$getRootNode;return null==element||null===(_element$getRootNode=element.getRootNode)||void 0===_element$getRootNode?void 0:_element$getRootNode.call(element)}:function(element){return null==element?void 0:element.ownerDocument},isInert=function isInert(node,lookUp){var _node$getAttribute;void 0===lookUp&&(lookUp=!0);var inertAtt=null==node||null===(_node$getAttribute=node.getAttribute)||void 0===_node$getAttribute?void 0:_node$getAttribute.call(node,"inert");return""===inertAtt||"true"===inertAtt||lookUp&&node&&isInert(node.parentNode)},getCandidates=function getCandidates(el,includeContainer,filter){if(isInert(el))return[];var candidates=Array.prototype.slice.apply(el.querySelectorAll(candidateSelector));return includeContainer&&matches.call(el,candidateSelector)&&candidates.unshift(el),candidates=candidates.filter(filter)},getCandidatesIteratively=function getCandidatesIteratively(elements,includeContainer,options){for(var candidates=[],elementsToCheck=Array.from(elements);elementsToCheck.length;){var element=elementsToCheck.shift();if(!isInert(element,!1))if("SLOT"===element.tagName){var assigned=element.assignedElements(),nestedCandidates=getCandidatesIteratively(assigned.length?assigned:element.children,!0,options);options.flatten?candidates.push.apply(candidates,nestedCandidates):candidates.push({scopeParent:element,candidates:nestedCandidates})}else{matches.call(element,candidateSelector)&&options.filter(element)&&(includeContainer||!elements.includes(element))&&candidates.push(element);var shadowRoot=element.shadowRoot||"function"==typeof options.getShadowRoot&&options.getShadowRoot(element),validShadowRoot=!isInert(shadowRoot,!1)&&(!options.shadowRootFilter||options.shadowRootFilter(element));if(shadowRoot&&validShadowRoot){var _nestedCandidates=getCandidatesIteratively(!0===shadowRoot?element.children:shadowRoot.children,!0,options);options.flatten?candidates.push.apply(candidates,_nestedCandidates):candidates.push({scopeParent:element,candidates:_nestedCandidates})}else elementsToCheck.unshift.apply(elementsToCheck,element.children)}}return candidates},hasTabIndex=function hasTabIndex(node){return!isNaN(parseInt(node.getAttribute("tabindex"),10))},getTabIndex=function getTabIndex(node){if(!node)throw new Error("No node provided");return node.tabIndex<0&&(/^(AUDIO|VIDEO|DETAILS)$/.test(node.tagName)||function isContentEditable(node){var _node$getAttribute2,attValue=null==node||null===(_node$getAttribute2=node.getAttribute)||void 0===_node$getAttribute2?void 0:_node$getAttribute2.call(node,"contenteditable");return""===attValue||"true"===attValue}(node))&&!hasTabIndex(node)?0:node.tabIndex},sortOrderedTabbables=function sortOrderedTabbables(a,b){return a.tabIndex===b.tabIndex?a.documentOrder-b.documentOrder:a.tabIndex-b.tabIndex},isInput=function isInput(node){return"INPUT"===node.tagName},isNonTabbableRadio=function isNonTabbableRadio(node){return function isRadio(node){return isInput(node)&&"radio"===node.type}(node)&&!function isTabbableRadio(node){if(!node.name)return!0;var radioSet,radioScope=node.form||getRootNode(node),queryRadios=function queryRadios(name){return radioScope.querySelectorAll('input[type="radio"][name="'+name+'"]')};if("undefined"!=typeof window&&void 0!==window.CSS&&"function"==typeof window.CSS.escape)radioSet=queryRadios(window.CSS.escape(node.name));else try{radioSet=queryRadios(node.name)}catch(err){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",err.message),!1}var checked=function getCheckedRadio(nodes,form){for(var i=0;i<nodes.length;i++)if(nodes[i].checked&&nodes[i].form===form)return nodes[i]}(radioSet,node.form);return!checked||checked===node}(node)},isZeroArea=function isZeroArea(node){var _node$getBoundingClie=node.getBoundingClientRect(),width=_node$getBoundingClie.width,height=_node$getBoundingClie.height;return 0===width&&0===height},isHidden=function isHidden(node,_ref){var displayCheck=_ref.displayCheck,getShadowRoot=_ref.getShadowRoot;if("hidden"===getComputedStyle(node).visibility)return!0;var nodeUnderDetails=matches.call(node,"details>summary:first-of-type")?node.parentElement:node;if(matches.call(nodeUnderDetails,"details:not([open]) *"))return!0;if(displayCheck&&"full"!==displayCheck&&"legacy-full"!==displayCheck){if("non-zero-area"===displayCheck)return isZeroArea(node)}else{if("function"==typeof getShadowRoot){for(var originalNode=node;node;){var parentElement=node.parentElement,rootNode=getRootNode(node);if(parentElement&&!parentElement.shadowRoot&&!0===getShadowRoot(parentElement))return isZeroArea(node);node=node.assignedSlot?node.assignedSlot:parentElement||rootNode===node.ownerDocument?parentElement:rootNode.host}node=originalNode}if(function isNodeAttached(node){var _nodeRoot,_nodeRootHost,_nodeRootHost$ownerDo,_node$ownerDocument,nodeRoot=node&&getRootNode(node),nodeRootHost=null===(_nodeRoot=nodeRoot)||void 0===_nodeRoot?void 0:_nodeRoot.host,attached=!1;if(nodeRoot&&nodeRoot!==node)for(attached=!!(null!==(_nodeRootHost=nodeRootHost)&&void 0!==_nodeRootHost&&null!==(_nodeRootHost$ownerDo=_nodeRootHost.ownerDocument)&&void 0!==_nodeRootHost$ownerDo&&_nodeRootHost$ownerDo.contains(nodeRootHost)||null!=node&&null!==(_node$ownerDocument=node.ownerDocument)&&void 0!==_node$ownerDocument&&_node$ownerDocument.contains(node));!attached&&nodeRootHost;){var _nodeRoot2,_nodeRootHost2,_nodeRootHost2$ownerD;attached=!(null===(_nodeRootHost2=nodeRootHost=null===(_nodeRoot2=nodeRoot=getRootNode(nodeRootHost))||void 0===_nodeRoot2?void 0:_nodeRoot2.host)||void 0===_nodeRootHost2||null===(_nodeRootHost2$ownerD=_nodeRootHost2.ownerDocument)||void 0===_nodeRootHost2$ownerD||!_nodeRootHost2$ownerD.contains(nodeRootHost))}return attached}(node))return!node.getClientRects().length;if("legacy-full"!==displayCheck)return!0}return!1},isNodeMatchingSelectorFocusable=function isNodeMatchingSelectorFocusable(options,node){return!(node.disabled||isInert(node)||function isHiddenInput(node){return isInput(node)&&"hidden"===node.type}(node)||isHidden(node,options)||function isDetailsWithSummary(node){return"DETAILS"===node.tagName&&Array.prototype.slice.apply(node.children).some((function(child){return"SUMMARY"===child.tagName}))}(node)||function isDisabledFromFieldset(node){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(node.tagName))for(var parentNode=node.parentElement;parentNode;){if("FIELDSET"===parentNode.tagName&&parentNode.disabled){for(var i=0;i<parentNode.children.length;i++){var child=parentNode.children.item(i);if("LEGEND"===child.tagName)return!!matches.call(parentNode,"fieldset[disabled] *")||!child.contains(node)}return!0}parentNode=parentNode.parentElement}return!1}(node))},isNodeMatchingSelectorTabbable=function isNodeMatchingSelectorTabbable(options,node){return!(isNonTabbableRadio(node)||getTabIndex(node)<0||!isNodeMatchingSelectorFocusable(options,node))},isValidShadowRootTabbable=function isValidShadowRootTabbable(shadowHostNode){var tabIndex=parseInt(shadowHostNode.getAttribute("tabindex"),10);return!!(isNaN(tabIndex)||tabIndex>=0)},sortByOrder=function sortByOrder(candidates){var regularTabbables=[],orderedTabbables=[];return candidates.forEach((function(item,i){var isScope=!!item.scopeParent,element=isScope?item.scopeParent:item,candidateTabindex=function getSortOrderTabIndex(node,isScope){var tabIndex=getTabIndex(node);return tabIndex<0&&isScope&&!hasTabIndex(node)?0:tabIndex}(element,isScope),elements=isScope?sortByOrder(item.candidates):element;0===candidateTabindex?isScope?regularTabbables.push.apply(regularTabbables,elements):regularTabbables.push(element):orderedTabbables.push({documentOrder:i,tabIndex:candidateTabindex,item,isScope,content:elements})})),orderedTabbables.sort(sortOrderedTabbables).reduce((function(acc,sortable){return sortable.isScope?acc.push.apply(acc,sortable.content):acc.push(sortable.content),acc}),[]).concat(regularTabbables)},prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types);function activeElement(doc){void 0===doc&&(doc=function ownerDocument(node){return node&&node.ownerDocument||document}());try{var active=doc.activeElement;return active&&active.nodeName?active:null}catch(e){return doc.body}}const useFocusJail=function(_temp){let{focusOnMount=!0,restoreFocus=!0,environment,focusElem,containerRef}=void 0===_temp?{containerRef:(0,react.createRef)()}:_temp;const restoreFocusElement=(0,react.useRef)(null),[currentRef,setCurrentRef]=(0,react.useState)(containerRef.current);(0,react.useEffect)((()=>{containerRef.current!==currentRef&&setCurrentRef(containerRef.current)}));const focusElement=(0,react.useCallback)((element=>{const htmlElement=element;focusElem?focusElem(htmlElement):htmlElement&&htmlElement.focus()}),[focusElem]),getInitialFocusNode=()=>{const activeElem=activeElement(environment||document),containerElem=currentRef;return containerElem.contains(activeElem)?activeElem:containerElem},getTabbableNodes=()=>{const elements=function tabbable(container,options){var candidates;return candidates=(options=options||{}).getShadowRoot?getCandidatesIteratively([container],options.includeContainer,{filter:isNodeMatchingSelectorTabbable.bind(null,options),flatten:!1,getShadowRoot:options.getShadowRoot,shadowRootFilter:isValidShadowRootTabbable}):getCandidates(container,options.includeContainer,isNodeMatchingSelectorTabbable.bind(null,options)),sortByOrder(candidates)}(currentRef);return{firstItem:elements[0]||getInitialFocusNode(),lastItem:elements[elements.length-1]||getInitialFocusNode()}};return(0,react.useEffect)((()=>{const doc=environment||document;return restoreFocusElement.current=activeElement(doc),focusOnMount&&focusElement(currentRef),()=>{const isBodyInactive=restoreFocusElement.current!==doc.body,hasActiveElement=null!==restoreFocusElement.current;isBodyInactive&&hasActiveElement&&restoreFocus&&focusElement(restoreFocusElement.current)}}),[focusOnMount,restoreFocus,environment,focusElement,currentRef]),{getContainerProps:function(_temp2){let{onKeyDown,...other}=void 0===_temp2?{}:_temp2;return{onKeyDown:index_esm_composeEventHandlers(onKeyDown,(event=>{if(event.key!==index_esm_KEYS_TAB)return;(()=>{if(!currentRef)throw new Error("Accessibility Error: You must apply the ref prop to your containing element.")})();const tabbableNodes=getTabbableNodes();!event.shiftKey||event.target!==tabbableNodes.firstItem&&event.target!==currentRef||(focusElement(tabbableNodes.lastItem),event.preventDefault()),event.shiftKey||event.target!==tabbableNodes.lastItem||(focusElement(tabbableNodes.firstItem),event.preventDefault())})),"data-garden-container-id":"containers.focusjail","data-garden-container-version":"2.0.12",...other}},focusElement}},FocusJailContainer=_ref=>{let{children,render=children,...options}=_ref;return react.createElement(react.Fragment,null,render(useFocusJail(options)))};FocusJailContainer.propTypes={children:prop_types_default().func,render:prop_types_default().func,focusOnMount:prop_types_default().bool,restoreFocus:prop_types_default().bool,environment:prop_types_default().any,containerRef:prop_types_default().any.isRequired,focusElem:prop_types_default().func},FocusJailContainer.defaultProps={focusOnMount:!0,restoreFocus:!0};const useModal=_ref=>{let{onClose,modalRef,idPrefix,focusOnMount,restoreFocus,environment}=_ref;const prefix=(id=idPrefix,(0,reach_auto_id.B)(id)||"id:"+idCounter++);var id;const titleId=`${prefix}__title`,contentId=`${prefix}__content`,isModalMousedDownRef=(0,react.useRef)(!1),closeModal=event=>{onClose&&onClose(event)},{getContainerProps}=useFocusJail({containerRef:modalRef,focusOnMount,restoreFocus,environment});return{getBackdropProps:function(_temp){let{onMouseUp,...other}=void 0===_temp?{}:_temp;return{onMouseUp:composeEventHandlers(onMouseUp,(event=>{const isModalContainer="containers.modal"===event.target.getAttribute("data-garden-container-id");!isModalMousedDownRef.current&&isModalContainer&&closeModal(event),isModalMousedDownRef.current=!1})),"data-garden-container-id":"containers.modal","data-garden-container-version":"1.0.12",...other}},getModalProps:props=>getContainerProps(function(_temp2){let{role="dialog",onKeyDown,onMouseDown,...other}=void 0===_temp2?{}:_temp2;return{role:null===role?void 0:role,tabIndex:-1,"aria-modal":!0,"aria-labelledby":titleId,"aria-describedby":contentId,onMouseDown:composeEventHandlers(onMouseDown,(()=>{isModalMousedDownRef.current=!0})),onKeyDown:composeEventHandlers(onKeyDown,(event=>{event.key===KEYS_ESCAPE&&closeModal(event)})),...other}}(props)),getTitleProps:function(_temp3){let{id=titleId,...other}=void 0===_temp3?{}:_temp3;return{id,...other}},getContentProps:function(_temp4){let{id=contentId,...other}=void 0===_temp4?{}:_temp4;return{id,...other}},getCloseProps:_ref2=>{let{onClick,...other}=_ref2;return{onClick:composeEventHandlers(onClick,(event=>{closeModal(event)})),...other}},closeModal}},ModalContainer=_ref=>{let{children,render=children,...options}=_ref;return react.createElement(react.Fragment,null,render(useModal(options)))};ModalContainer.propTypes={children:prop_types_default().func,render:prop_types_default().func,onClose:prop_types_default().func,modalRef:prop_types_default().any.isRequired,idPrefix:prop_types_default().string,focusOnMount:prop_types_default().bool,restoreFocus:prop_types_default().bool,environment:prop_types_default().any},ModalContainer.defaultProps={focusOnMount:!0,restoreFocus:!0}}}]);