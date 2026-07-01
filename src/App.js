import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Features/Home";
import Menu from "./Features/Menu";
import ReCruit from "./Features/Recruit";
import Branch from "./Features/Branch";
import New from "./Features/New";
import Detail from "./Features/Detail";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" ex element={<Home />} />
        <Route exact path="/thuc-don" ex element={<Menu />} />
        <Route exact path="/tuyen-dung" ex element={<ReCruit />} />
        <Route exact path="/chi-nhanh" ex element={<Branch />} />
        <Route exact path="/bang-tin" ex element={<New />} />
        <Route exact path="/bai-viet/:id" ex element={<Detail />} />
      </Routes>
    </>
  );
}

export default App;
