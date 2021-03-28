/// <reference types="react-scripts" />

import "@emotion/react";
import { ThemeInterface } from "./components/theme/theme";

declare module "@emotion/react" {
  export interface Theme extends ThemeInterface {}
}
