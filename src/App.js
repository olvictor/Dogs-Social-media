import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import ProtectedRoute from "./Components/Helper/ProtectedRoute";
import Home from "./Components/Home";
import Login from "./Components/Login/Login";
import Photo from "./Components/Photo/Photo";
import User from "./Components/User/User";
import UserProfile from "./Components/User/UserProfile";
import PageNotFound from "./PageNotFound";
import { UserStorage } from "./UserContext";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <Header />
          <main className="AppBody">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="login/*" element={<Login />}></Route>
              <Route path="foto/:id" element={<Photo />}></Route>
              <Route path="perfil/:user" element={<UserProfile />}></Route>
              <Route path="*" element={<PageNotFound />}></Route>
              <Route
                path="conta/*"
                element={
                  <ProtectedRoute>
                    <User />
                  </ProtectedRoute>
                }
              ></Route>
            </Routes>
          </main>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
