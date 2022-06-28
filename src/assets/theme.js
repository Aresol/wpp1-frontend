import { createTheme } from "@mui/material";

const appTheme = createTheme({
    palette: {
        type: 'light',
        primary: {
          main: '#131a7f',
          contrastText: 'rgba(255,255,255,0.87)',
          dark: '#1e1eb5',
        },
        secondary: {
          main: '#f50057',
        },
      },
})

export default appTheme