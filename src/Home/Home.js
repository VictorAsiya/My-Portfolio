import React from "react";
import Final from "../Understanding_API/Blog/Final";
import Header from "../Header";
import * as SC from '.././style'

function Home() {
  return (
    <SC.HomeDiv>
      <Header />
      <Final />
    </SC.HomeDiv>
  );
}

export default Home;
