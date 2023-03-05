import * as React from "react";
const SvgHamburger = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" {...props}>
    <path
      className="line top"
      d="M35 35h50c14.1 0 50.6 13 20.5 53.5s-121.9 21.6-94.4-40.3S111.6 8.4 85 35L35 85"
    />
    <path
      className="line bottom"
      d="M35 85h50c14.1 0 50.6-13 20.5-53.5S-16.4 9.9 11.1 71.8 111.6 111.6 85 85L35 35"
    />
    <path className="line cross" d="M35 60h50" />
  </svg>
);
export default SvgHamburger;
