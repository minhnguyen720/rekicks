import { AppContainer, GlobalStyle } from "./components/Global";
import Nav from "./components/navbar/Nav";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { Home, NotFoundView, Products } from "./views/AppViews";

function App() {
  return (
    <Router>
      <AppContainer>
        <GlobalStyle />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route
            path="*"
            element={<NotFoundView />}
          />
        </Routes>
      </AppContainer>
    </Router>
  );
}

export default App;