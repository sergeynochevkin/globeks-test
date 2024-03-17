import { Route, Routes } from "react-router-dom";
import "./App.css";
import { MAIN_ROUTE } from "./constants";
import { Main } from "./pages/main/Main";
import { AppWrapper } from "./hoc/AppWrapper";

function App() {
  return (
    <AppWrapper>
      <Routes>
        <Route path={MAIN_ROUTE} element={<Main />} />
      </Routes>
    </AppWrapper>
  );
}

export default App;
