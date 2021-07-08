import React from "react";
import ReactDOM from "react-dom";
import Cards from "./component/Cards";

ReactDOM.render(
  <>
    <Cards
      imgsrc="https://th.bing.com/th/id/OIP.0A7fIVPWnWw61bcuc-zRfgHaEc?pid=ImgDet&rs=1"
      title="A Netflix original series"
      sname="Money Heist"
      link="https://www.netflix.com/in/title/80192098"
    />
    <Cards
      imgsrc="https://th.bing.com/th/id/OIP.wDi6nliIJWXb4UvRU4vspAHaFj?pid=ImgDet&rs=1"
      title="A Netflix original series"
      sname="Friends"
      link="https://www.netflix.com/in/title/70153404"
    />
    <Cards
      imgsrc="https://th.bing.com/th/id/OIP.RHGufUSSsFeaR9nXAu0THgHaEK?pid=ImgDet&rs=1"
      title="A Netflix original series"
      sname="Vikings"
      link="https://www.netflix.com/in/title/70301870"
    />
  </>,
  document.getElementById("root")
);
