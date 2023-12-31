/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Size28ThemeRegular1 = ({ color = "#212121", className }) => {
  return (
    <svg
      className={`size-28-theme-regular-1 ${className}`}
      fill="none"
      height="28"
      viewBox="0 0 28 28"
      width="28"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M6.25 5H21.75C23.483 5 24.8992 6.35646 24.9949 8.06558L25 8.25V19.75C25 21.483 23.6435 22.8992 21.9344 22.9949L21.75 23H6.25C4.51697 23 3.10075 21.6435 3.00514 19.9344L3 19.75V8.25C3 6.51697 4.35645 5.10075 6.06558 5.00514L6.25 5H21.75H6.25ZM23.5 10.905L14.346 15.6654C14.1653 15.7594 13.9558 15.7751 13.7655 15.7124L13.654 15.6654L4.5 10.905V19.75C4.5 20.6682 5.20711 21.4212 6.10647 21.4942L6.25 21.5H21.75C22.6682 21.5 23.4212 20.7929 23.4942 19.8935L23.5 19.75V10.905ZM21.75 6.5H6.25C5.33183 6.5 4.57881 7.20711 4.5058 8.10647L4.5 8.25V9.214L14 14.1547L23.5 9.214V8.25C23.5 7.33183 22.7929 6.57881 21.8935 6.5058L21.75 6.5Z"
        fill={color}
      />
    </svg>
  );
};

Size28ThemeRegular1.propTypes = {
  color: PropTypes.string,
};
