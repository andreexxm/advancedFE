import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";

//jsx syntax
function App() {
  return (
    <React.Fragment>
      {/* {<h1>Hello World</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>} */}

      <Header></Header>
      <Body randomText={"Hello world"}></Body>
    </React.Fragment>
  );
}

export default App;
