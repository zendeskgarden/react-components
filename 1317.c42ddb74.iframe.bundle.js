(self.webpackChunk_zendeskgarden_react_components=self.webpackChunk_zendeskgarden_react_components||[]).push([[1317],{"./packages/typography/node_modules/polished/dist/polished.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function extends_extends(){return extends_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},extends_extends.apply(this,arguments)}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}function _construct(Parent,args,Class){return _construct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()?Reflect.construct.bind():function _construct(Parent,args,Class){var a=[null];a.push.apply(a,args);var instance=new(Function.bind.apply(Parent,a));return Class&&_setPrototypeOf(instance,Class.prototype),instance},_construct.apply(null,arguments)}function _wrapNativeSuper(Class){var _cache="function"==typeof Map?new Map:void 0;return _wrapNativeSuper=function _wrapNativeSuper(Class){if(null===Class||!function _isNativeFunction(fn){try{return-1!==Function.toString.call(fn).indexOf("[native code]")}catch(e){return"function"==typeof fn}}(Class))return Class;if("function"!=typeof Class)throw new TypeError("Super expression must either be null or a function");if(void 0!==_cache){if(_cache.has(Class))return _cache.get(Class);_cache.set(Class,Wrapper)}function Wrapper(){return _construct(Class,arguments,_getPrototypeOf(this).constructor)}return Wrapper.prototype=Object.create(Class.prototype,{constructor:{value:Wrapper,enumerable:!1,writable:!0,configurable:!0}}),_setPrototypeOf(Wrapper,Class)},_wrapNativeSuper(Class)}function last(){var _ref;return(_ref=arguments.length-1)<0||arguments.length<=_ref?void 0:arguments[_ref]}__webpack_require__.d(__webpack_exports__,{mA:()=>math});var defaultSymbolMap={symbols:{"*":{infix:{symbol:"*",f:function multiplication(a,b){return a*b},notation:"infix",precedence:4,rightToLeft:0,argCount:2},symbol:"*",regSymbol:"\\*"},"/":{infix:{symbol:"/",f:function division(a,b){return a/b},notation:"infix",precedence:4,rightToLeft:0,argCount:2},symbol:"/",regSymbol:"/"},"+":{infix:{symbol:"+",f:function addition(a,b){return a+b},notation:"infix",precedence:2,rightToLeft:0,argCount:2},prefix:{symbol:"+",f:last,notation:"prefix",precedence:3,rightToLeft:0,argCount:1},symbol:"+",regSymbol:"\\+"},"-":{infix:{symbol:"-",f:function subtraction(a,b){return a-b},notation:"infix",precedence:2,rightToLeft:0,argCount:2},prefix:{symbol:"-",f:function negation(a){return-a},notation:"prefix",precedence:3,rightToLeft:0,argCount:1},symbol:"-",regSymbol:"-"},",":{infix:{symbol:",",f:function comma(){return Array.of.apply(Array,arguments)},notation:"infix",precedence:1,rightToLeft:0,argCount:2},symbol:",",regSymbol:","},"(":{prefix:{symbol:"(",f:last,notation:"prefix",precedence:0,rightToLeft:0,argCount:1},symbol:"(",regSymbol:"\\("},")":{postfix:{symbol:")",f:void 0,notation:"postfix",precedence:0,rightToLeft:0,argCount:1},symbol:")",regSymbol:"\\)"},min:{func:{symbol:"min",f:function min(){return Math.min.apply(Math,arguments)},notation:"func",precedence:0,rightToLeft:0,argCount:1},symbol:"min",regSymbol:"min\\b"},max:{func:{symbol:"max",f:function max(){return Math.max.apply(Math,arguments)},notation:"func",precedence:0,rightToLeft:0,argCount:1},symbol:"max",regSymbol:"max\\b"}}};var PolishedError=function(_Error){function PolishedError(code){return function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}(_Error.call(this,"An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#"+code+" for more information.")||this)}return function _inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype),subClass.prototype.constructor=subClass,_setPrototypeOf(subClass,superClass)}(PolishedError,_Error),PolishedError}(_wrapNativeSuper(Error)),unitRegExp=/((?!\w)a|na|hc|mc|dg|me[r]?|xe|ni(?![a-zA-Z])|mm|cp|tp|xp|q(?!s)|hv|xamv|nimv|wv|sm|s(?!\D|$)|ged|darg?|nrut)/g;function exec(operators,values){var _ref,op=operators.pop();return values.push(op.f.apply(op,(_ref=[]).concat.apply(_ref,values.splice(-op.argCount)))),op.precedence}function calculate(expression,additionalSymbols){var match,symbolMap=function mergeSymbolMaps(additionalSymbols){var symbolMap={};return symbolMap.symbols=additionalSymbols?extends_extends({},defaultSymbolMap.symbols,additionalSymbols.symbols):extends_extends({},defaultSymbolMap.symbols),symbolMap}(additionalSymbols),operators=[symbolMap.symbols["("].prefix],values=[],pattern=new RegExp("\\d+(?:\\.\\d+)?|"+Object.keys(symbolMap.symbols).map((function(key){return symbolMap.symbols[key]})).sort((function(a,b){return b.symbol.length-a.symbol.length})).map((function(val){return val.regSymbol})).join("|")+"|(\\S)","g");pattern.lastIndex=0;var afterValue=!1;do{var _ref2=(match=pattern.exec(expression))||[")",void 0],token=_ref2[0],bad=_ref2[1],notNumber=symbolMap.symbols[token],notNewValue=notNumber&&!notNumber.prefix&&!notNumber.func,notAfterValue=!notNumber||!notNumber.postfix&&!notNumber.infix;if(bad||(afterValue?notAfterValue:notNewValue))throw new PolishedError(37,match?match.index:expression.length,expression);if(afterValue){var curr=notNumber.postfix||notNumber.infix;do{var prev=operators[operators.length-1];if((curr.precedence-prev.precedence||prev.rightToLeft)>0)break}while(exec(operators,values));afterValue="postfix"===curr.notation,")"!==curr.symbol&&(operators.push(curr),afterValue&&exec(operators,values))}else if(notNumber){if(operators.push(notNumber.prefix||notNumber.func),notNumber.func&&(!(match=pattern.exec(expression))||"("!==match[0]))throw new PolishedError(38,match?match.index:expression.length,expression)}else values.push(+token),afterValue=!0}while(match&&operators.length);if(operators.length)throw new PolishedError(39,match?match.index:expression.length,expression);if(match)throw new PolishedError(40,match?match.index:expression.length,expression);return values.pop()}function reverseString(str){return str.split("").reverse().join("")}function math(formula,additionalSymbols){var reversedFormula=reverseString(formula),formulaMatch=reversedFormula.match(unitRegExp);if(formulaMatch&&!formulaMatch.every((function(unit){return unit===formulaMatch[0]})))throw new PolishedError(41);return""+calculate(reverseString(reversedFormula.replace(unitRegExp,"")),additionalSymbols)+(formulaMatch?reverseString(formulaMatch[0]):"")}},"./packages/typography/node_modules/prop-types/factoryWithThrowingShims.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var ReactPropTypesSecret=__webpack_require__("./packages/typography/node_modules/prop-types/lib/ReactPropTypesSecret.js");function emptyFunction(){}function emptyFunctionWithReset(){}emptyFunctionWithReset.resetWarningCache=emptyFunction,module.exports=function(){function shim(props,propName,componentName,location,propFullName,secret){if(secret!==ReactPropTypesSecret){var err=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw err.name="Invariant Violation",err}}function getShim(){return shim}shim.isRequired=shim;var ReactPropTypes={array:shim,bigint:shim,bool:shim,func:shim,number:shim,object:shim,string:shim,symbol:shim,any:shim,arrayOf:getShim,element:shim,elementType:shim,instanceOf:getShim,node:shim,objectOf:getShim,oneOf:getShim,oneOfType:getShim,shape:getShim,exact:getShim,checkPropTypes:emptyFunctionWithReset,resetWarningCache:emptyFunction};return ReactPropTypes.PropTypes=ReactPropTypes,ReactPropTypes}},"./packages/typography/node_modules/prop-types/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./packages/typography/node_modules/prop-types/factoryWithThrowingShims.js")()},"./packages/typography/node_modules/prop-types/lib/ReactPropTypesSecret.js":module=>{"use strict";module.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);