import React from "react";
import "./Loading.scss"
const Loading = () => {
  return (
    <div className="d-flex justify-content-center">
     <div class="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  );
};

export default Loading;
