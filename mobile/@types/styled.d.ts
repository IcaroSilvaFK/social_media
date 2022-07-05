import 'styled-components';
import { theme } from '../src/styles/theme';

declare module 'styled-components' {
  type ThemeProps = typeof theme;

  export interface DefaultTheme extends ThemeProps {}
}
