import { Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import LeftAside from "./component/LeftAside";
import Home from "./pages/Home";
import "./styles.css";
import "./css/Home.css";
import "./css/Component.css";
import "./css/Alert.css";
import "./css/Input.css";
import "./css/Avatars.css";
import "./css/Badges.css";
import "./css/Button.css";
import "./css/Card.css";
import "./css/Grid.css";
import "./css/Input.css";
import "./css/List.css";
import "./css/Modals.css";
import "./css/Navigation.css";
import "./css/Rating.css";
import "./css/Snackbar.css";
import "./css/ResponsiveImage.css";
import "./css/Text.css";
import { useState } from "react";
import Installation from "./pages/Installation";
import Alert from "./pages/Alert";
import Avatars from "./pages/Avatars";
import Badges from "./pages/Badges";
import Button from "./pages/Button";
import Card from "./pages/Card";
import Grids from "./pages/Grids";
import Inputs from "./pages/Inputs";
import List from "./pages/List";
import Modals from "./pages/Modals";
import Navigation from "./pages/Navigation";
import Rating from "./pages/Rating";
import Snackbar from "./pages/Snackbar";
import ResponsiveImage from "./pages/ResponsiveImage";
import Text from "./pages/Text";

export default function App() {
  const [showAside, setShowAside] = useState(false);
  return (
    <div className="main-container">
      <Header />
      {showAside && <LeftAside />}

      <Routes>
        <Route path="/" element={<Home funcAside={setShowAside} />} />
        <Route
          path="/installation"
          element={<Installation funcAside={setShowAside} />}
        />
        <Route path="/alert" element={<Alert funcAside={setShowAside} />} />
        <Route path="/avatars" element={<Avatars funcAside={setShowAside} />} />
        <Route path="/badges" element={<Badges funcAside={setShowAside} />} />
        <Route path="/buttons" element={<Button funcAside={setShowAside} />} />
        <Route path="/cards" element={<Card funcAside={setShowAside} />} />
        <Route path="/grids" element={<Grids funcAside={setShowAside} />} />
        <Route path="/inputs" element={<Inputs funcAside={setShowAside} />} />
        <Route path="/list" element={<List funcAside={setShowAside} />} />
        <Route path="/modals" element={<Modals funcAside={setShowAside} />} />
        <Route
          path="/navigation"
          element={<Navigation funcAside={setShowAside} />}
        />
        <Route path="/rating" element={<Rating funcAside={setShowAside} />} />
        <Route
          path="/snackbar"
          element={<Snackbar funcAside={setShowAside} />}
        />
        <Route
          path="/responsive-images"
          element={<ResponsiveImage funcAside={setShowAside} />}
        />
        <Route path="/text" element={<Text funcAside={setShowAside} />} />
      </Routes>
    </div>
  );
}
