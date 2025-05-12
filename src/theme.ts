import { alpha, createTheme, darken, lighten } from '@mui/material/styles';

const BRAND_NAVY = '#212443';
const BRAND_BLUE = '#0079CC';
const BRAND_GREEN = '#1F8466';
const BRAND_RED = '#E81212';
const BRAND_YELLOW = '#F6DC9F';
const BRAND_PURPLE = '#6C0E7C';
const BRAND_BROWN = '#CC996C';
const STANDARD_FONT_FAMILY =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';
const MONOSPACE_FONT_FAMILY =
  'ui-monospace, Menlo, Monaco, "Cascadia Mono", "Segoe UI Mono", "Roboto Mono", "Oxygen Mono", "Ubuntu Monospace", "Source Code Pro", "Fira Mono", "Droid Sans Mono", "Courier New", monospace';

const BASE_THEME = createTheme({
  palette: {
    background: {
      default: '#f2f5f7',
    },
    text: {
      primary: '#1F1F21',
      secondary: '#4F4F4F',
    },
  },
  typography: {
    fontFamily: STANDARD_FONT_FAMILY,
  },
});

const theme = createTheme(BASE_THEME, {
  palette: {
    brand: {
      navy: BRAND_NAVY,
      blue: BRAND_BLUE,
      red: BRAND_RED,
      green: BRAND_GREEN,
      yellow: BRAND_YELLOW,
      purple: BRAND_PURPLE,
      brown: BRAND_BROWN,
    },
    success: {
      main: BRAND_GREEN,
      light: lighten(BRAND_GREEN, 0.15),
      dark: darken(BRAND_GREEN, 0.15),
    },
    error: {
      main: BRAND_RED,
      light: lighten(BRAND_RED, 0.15),
      dark: darken(BRAND_RED, 0.15),
    },
    cadet: {
      100: '#F9FAFB',
      200: '#F2F5F7',
      300: '#DCE4EA',
      400: '#A8BBCA',
      500: '#6A8BA4',
    },
    highlight: {
      100: lighten(BRAND_YELLOW, 0.8),
      200: lighten(BRAND_YELLOW, 0.6),
      300: lighten(BRAND_YELLOW, 0.4),
      400: lighten(BRAND_YELLOW, 0.2),
      500: BRAND_YELLOW,
    },
    info: {
      main: BRAND_BLUE,
    },
    primary: {
      main: BRAND_BLUE,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        address {
          font-style: normal;
        }
        fieldset {
          border: none;
          padding: 0;
        }
        pre {
          font-family: ${MONOSPACE_FONT_FAMILY}
          white-space: pre-wrap;
          font-size: 12px;
        }
      `,
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
  },
});

export default theme;