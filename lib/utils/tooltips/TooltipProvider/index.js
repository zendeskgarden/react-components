import _classCallCheck from "babel-runtime/helpers/classCallCheck";
import _possibleConstructorReturn from "babel-runtime/helpers/possibleConstructorReturn";
import _inherits from "babel-runtime/helpers/inherits";
import PropTypes from "prop-types";
import ThemedComponent from "../../theming/ThemedComponent";
import createTooltipManager from "../createTooltipManager";
import uuid from "uuid";

var TooltipProvider = function (_ThemedComponent) {
  _inherits(TooltipProvider, _ThemedComponent);

  function TooltipProvider(props, context) {
    _classCallCheck(this, TooltipProvider);

    var _this = _possibleConstructorReturn(this, _ThemedComponent.call(this, props, context, { namespace: "TooltipProvider" }));

    _this.id = props.id || "tooltips-" + uuid.v4();
    return _this;
  }

  TooltipProvider.prototype.componentWillMount = function componentWillMount() {
    var container = document.getElementById(this.id);

    if (!container) {
      container = document.createElement("div");
      container.id = this.id;
      document.body.appendChild(container);
    }

    var _props = this.props,
        dir = _props.dir,
        zIndex = _props.zIndex;
    var theme = this.context.rcTheme;


    this.tooltipManager = createTooltipManager(container, {
      dir: dir,
      zIndex: zIndex,
      theme: theme
    });
  };

  TooltipProvider.prototype.getChildContext = function getChildContext() {
    return { tooltips: this.tooltipManager };
  };

  TooltipProvider.prototype.render = function render() {
    var children = this.props.children;


    return children;
  };

  return TooltipProvider;
}(ThemedComponent);

TooltipProvider.propTypes = {
  children: PropTypes.node,
  /** Used to identify the provider and the element that will contain the tooltips. Defaults to a generated UUID */
  id: PropTypes.string,
  dir: PropTypes.oneOf(["rtl", "ltr"]),
  zIndex: PropTypes.number
};
TooltipProvider.defaultProps = {
  dir: "ltr",
  zIndex: 600
};
TooltipProvider.childContextTypes = {
  tooltips: PropTypes.object
};
export default TooltipProvider;