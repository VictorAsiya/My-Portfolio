import React from "react";
import Final from "../Understanding_API/Blog/Final";
import Header from "../Header";
import * as SC from "../style";
import About from "../About";

function Container() {
  return (
    <SC.Main>
      <SC.homeSection>
        <Header />
        <Final />
      </SC.homeSection>

      <About/>
    </SC.Main>
  );
}

export default Container;
