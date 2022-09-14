import { Home } from "./pages/home/Home";
import { List } from "./pages/list/List";
import { Login } from "./pages/login/Login";
import { Single } from "./pages/single/Single";
import { New } from "./pages/new/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style/dark.scss";

function App() {
  return (
    <div className="app dark">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />

            <Route path="users">
              <Route>
                <Route index element={<List />} />
                <Route path=":userId" element={<Single />} />
                <Route path="new" element={<New title="Add New User"/>} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
