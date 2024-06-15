import "./App.css";
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Header from "./component/Headers";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import RegisterScreen from "./screens/RegisterScreen";

function App() {
  //const baseUrl = (process.env.NODE_ENV === 'development') ? '' : `${process.env.PUBLIC_URL}`;
  //console.log(baseUrl);

  return (
    <BrowserRouter>
      <Header />

      <main className="py-3">
        <Container>
          <Routes>
            <Route exact path="/" element={<LoginScreen />} />
            <Route path="/dashboard" element={<HomeScreen />} />
            <Route path="/register" element={<RegisterScreen />} />
          </Routes>
        </Container>
      </main>
    </BrowserRouter>
  );
}

export default App;
