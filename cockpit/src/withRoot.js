import React from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";
import CssBaseline from "@material-ui/core/CssBaseline";

// A theme with custom primary and secondary color.
// It's optional.
const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#FFFFFF",
      main: "#CC0033",
      dark: "#CC0033"
    },
    secondary: {
      light: green[300],
      main: green[500],
      dark: green[700]
    },
    background: {
      default: "#f4f0e6"
    }
  }
});

// /* Page 1: */
// background: #FFFFFF;
// /* rote linie: */
// background: #CC0033;
// /* logo bekb: */
// /* Login: */
// font - family: .AppleSystemUIFont;
// font - size: 16px;
// color: #000000;
// /* schloss: */

function withRoot(Component) {
  function WithRoot(props) {
    // MuiThemeProvider makes the theme available down the React tree
    // thanks to React context.
    return (
      <MuiThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...props} />
      </MuiThemeProvider>
    );
  }

  return WithRoot;
}

export default withRoot;
