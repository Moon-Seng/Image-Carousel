import React from "react";
import FooterCarousel from "./Components/FooterCarousel";
import AppStyle from './App.module.sass'

function App() {
  return (
    <div className="App">
      <h2 className={AppStyle.message}>Hello Wrold</h2>
      <FooterCarousel></FooterCarousel>
    </div>
  );
}

export default App;
