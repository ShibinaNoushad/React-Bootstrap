import React from "react";
import Products from "./Components/Products";

import MyHeader from "./Components/Header/MyHeader";
import ReactNavbar from "./Components/Navbar/ReactNavbar";
import Footer from "./Components/Footer/Footer";
import Music from "./Components/Music/Music";
function App() {
  return (
    <>
      <div>
        <ReactNavbar />
        <MyHeader></MyHeader>
        <Music></Music>
        <Products></Products>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
