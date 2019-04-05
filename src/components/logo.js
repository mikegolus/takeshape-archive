import React from "react"

export default ({
  fill="#000",
  width="100%",
  viewBox="0 0 32 32",
  className=""
}) => (
  <svg
    width={width}
    viewBox={viewBox}
    className={className}
  >
    <path fill={fill} d="M31.4,16l-8.3-8.3l-2.4,2.4L13.6,3l-13,13l13,13l7.1-7.1l2.4,2.4L31.4,16z M13.6,25.6L4.1,16l9.6-9.6l5.4,5.4L14.8,16
    l4.2,4.2L13.6,25.6z"/>
  </svg>
)