import { Route, Routes } from "react-router-dom";
import "./categories.styles.scss";
import Home from "./routes/home/home";
import Navigation from "./routes/navigation/navigation";
import Authentication from "./routes/authentication/authentication.component";

const Shop = () => {
  return <div>I am Shop</div>;
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
}

export default App;
