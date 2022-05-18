import React from "react";

function Loading() {
  return (
    <div>
      <div className="spinner-border" role="status" style={{ width: "100px", height: "100px", marginTop: "100px" }}>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}

export default Loading;
