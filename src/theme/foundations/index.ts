/* eslint-disable import/no-anonymous-default-export */
// ===================first way=================
// export * as borders from "./borders";
// export * as colors from "./colors";
// export * as spacing from "./spacing";
// export * as layerStyles from "./layerStyle";

// =============second way ================
import borders from "./borders";
import colors from "./colors";
import space from "./spacing";
import layerStyles from "./layerStyle";
import textStyles from "./textStyle";

export default {
  space,
  colors,
  borders,
  layerStyles,
  textStyles,
};
