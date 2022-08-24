import React from "react";
import loading from "./loading.gif";

const Loader = () => {
  return (
    <div
      className="text-center"
      style={{ marginTop: "100px", marginBottom: "100px" }}
    >
      <img src={loading} alt="loading" height={100} />
    </div>
  );
};

export default Loader;
