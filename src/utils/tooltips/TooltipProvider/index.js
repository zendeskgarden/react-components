import PropTypes from "prop-types";
import ThemedComponent from "../../theming/ThemedComponent";
import createTooltipManager from "../createTooltipManager";
import uuid from "uuid";

export default class TooltipProvider extends ThemedComponent {
  static propTypes = {
    children: PropTypes.node,
    /** Used to identify the provider and the element that will contain the tooltips. Defaults to a generated UUID */
    id: PropTypes.string,
    dir: PropTypes.oneOf(["rtl", "ltr"]),
    zIndex: PropTypes.number
  };

  static defaultProps = {
    dir: "ltr",
    zIndex: 600
  };

  static childContextTypes = {
    tooltips: PropTypes.object
  };

  constructor(props, context) {
    super(props, context, { namespace: "TooltipProvider" });
    this.id = props.id || `tooltips-${uuid.v4()}`;
  }

  componentWillMount() {
    let container = document.getElementById(this.id);

    if (!container) {
      container = document.createElement("div");
      container.id = this.id;
      document.body.appendChild(container);
    }

    const { dir, zIndex } = this.props;
    const { rcTheme: theme } = this.context;

    this.tooltipManager = createTooltipManager(container, {
      dir,
      zIndex,
      theme
    });
  }

  getChildContext() {
    return { tooltips: this.tooltipManager };
  }

  render() {
    const { children } = this.props;

    return children;
  }
}
