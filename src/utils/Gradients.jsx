import React from "react";

const Gradients = () => (
  <svg className="w-0 h-0" viewBox="0 0 0 0">
    <defs>
      <linearGradient id="gradLi" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop
          offset="0%"
          style={{ stopColor: "rgb(58,92,180)", stopOpacity: 1 }}
        />
        <stop
          offset="50%"
          style={{ stopColor: "rgb(29,173,253)", stopOpacity: 1 }}
        />
        <stop
          offset="100%"
          style={{ stopColor: "rgb(69,188,252)", stopOpacity: 1 }}
        />
      </linearGradient>
      <linearGradient id="gradGh" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop
          offset="0%"
          style={{ stopColor: "rgb(102,58,180)", stopOpacity: 1 }}
        />
        <stop
          offset="50%"
          style={{ stopColor: "rgb(151,29,253)", stopOpacity: 1 }}
        />
        <stop
          offset="100%"
          style={{ stopColor: "rgb(252,69,251)", stopOpacity: 1 }}
        />
      </linearGradient>
      <linearGradient id="gradIg" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop
          offset="0%"
          style={{ stopColor: "rgb(131,58,180)", stopOpacity: 1 }}
        />
        <stop
          offset="50%"
          style={{ stopColor: "rgb(253,29,29)", stopOpacity: 1 }}
        />
        <stop
          offset="100%"
          style={{ stopColor: "rgb(252,176,69)", stopOpacity: 1 }}
        />
      </linearGradient>
      <linearGradient id="gradTw" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop
          offset="0%"
          style={{ stopColor: "rgb(58,92,180)", stopOpacity: 1 }}
        />
        <stop
          offset="50%"
          style={{ stopColor: "rgb(29,209,253)", stopOpacity: 1 }}
        />
        <stop
          offset="100%"
          style={{ stopColor: "rgb(69,252,227)", stopOpacity: 1 }}
        />
      </linearGradient>
    </defs>
  </svg>
);

export default Gradients;
