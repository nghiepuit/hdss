import React from "react";

type Props = {};

const RotateCcw = (props: Props) => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      {...props}
    >
      <title>rotate_right</title>
      <path d="M16.875 15.469q0.797-1.078 1.031-2.484h2.016q-0.281 2.156-1.594 3.891zM12.984 17.906q1.406-0.234 2.484-1.031l1.453 1.453q-1.688 1.313-3.938 1.594v-2.016zM19.922 11.016h-2.016q-0.234-1.406-1.031-2.484l1.453-1.406q1.359 1.688 1.594 3.891zM15.563 5.531l-4.547 4.453v-3.891q-2.156 0.375-3.586 2.039t-1.43 3.867 1.43 3.867 3.586 2.039v2.016q-2.953-0.375-4.992-2.625t-2.039-5.297 2.039-5.297 4.992-2.625v-3.094z"></path>
    </svg>
  );
};

export default RotateCcw;
