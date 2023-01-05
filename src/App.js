import React from "react";
import Products from "./Components/Products";

import MyButton from "./Components/Button";
import MyHeader from "./Components/MyHeader";
import ReactNavbar from "./Components/ReactNavbar";
import Footer from "./Components/Footer";
function App() {
  return (
    <>
      <div>
        <ReactNavbar />
        <MyHeader></MyHeader>
        <h2
          style={{
            textAlign: "center",
            fontWeight: "bold",
            fontFamily: "Metal Mania",
            paddingTop: 5,
          }}
        >
          Music
        </h2>
        <Products></Products>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
