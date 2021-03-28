/// <reference types="react-scripts" />

import "@emotion/react";
import { ControlTheme } from "./components/theme/theme";

declare module "@emotion/react" {
  export interface Theme extends ControlTheme {}
}
