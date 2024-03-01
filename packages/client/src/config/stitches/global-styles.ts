import "@fontsource/source-sans-pro";
import { pwaCameraStyle } from "./capacitor";
import { global } from "./index";
import { preflight } from "./preflight";

const globalValues = {
  ...preflight,
  ...pwaCameraStyle,

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  body: {
    // @ts-expect-error we can't spread parts of the CSS type
    ...preflight.body,
    "*:focus": {
      /* disable outline everywhere */
      outline: "none !important",
    },
    // To disable the quick blinking effect when a link has been hit on iOS
    a: {
      "-webkit-tap-highlight-color": "transparent",
    },
    backgroundColor: "$gray50",
  },
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-argument
const globalStyles = global(globalValues as any);

export { globalStyles };