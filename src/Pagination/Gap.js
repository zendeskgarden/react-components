import React from "react";
import classNames from "classnames";

import View from "../core/View";
import ThemedComponent from "../utils/theming/ThemedComponent";

import styles from "./styles.css";

export default class Gap extends ThemedComponent {
  constructor(props, context) {
    super(props, context, {
      namespace: "Pagination",
      styles
    });
  }

  render() {
    const { theme } = this;
    return <View className={classNames(theme.page, theme.page_gap)} />;
  }
}
