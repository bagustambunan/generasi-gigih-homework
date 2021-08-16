import React from "react";
import AppRouter from "./routes";
import "./App.css";

import { useSelector } from "react-redux";
import { selectTheme } from "./redux/themeSlice";

const LightMode = React.lazy(() => import("./styles/themes/light-mode"));
const DarkMode = React.lazy(() => import("./styles/themes/dark-mode"));

function App() {

  const theme = useSelector(selectTheme);
  
  return(
    <>
      <React.Suspense fallback={<></>}>
        {(theme === true) && <DarkMode/>}
        {(theme === false) && <DarkMode/>}
      </React.Suspense>
      <AppRouter/>
    </>
  );
}

export default App;
