import React from 'react';

type Props = {};

const Times = (props: Props) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15.2803 0.21967C15.5466 0.485936 15.5708 0.9026 15.3529 1.19621L15.2803 1.28033L8.811 7.75L15.2803 14.2197C15.5466 14.4859 15.5708 14.9026 15.3529 15.1962L15.2803 15.2803C15.0141 15.5466 14.5974 15.5708 14.3038 15.3529L14.2197 15.2803L7.21967 8.28033C6.9534 8.01406 6.9292 7.5974 7.14705 7.30379L7.21967 7.21967L14.2197 0.21967C14.5126 -0.0732233 14.9874 -0.0732233 15.2803 0.21967Z"
        fill="currentColor"
      />
      <path
        d="M0.21967 0.21967C-0.0465966 0.485936 -0.0708027 0.9026 0.147052 1.19621L0.21967 1.28033L6.689 7.75L0.21967 14.2197C-0.0465966 14.4859 -0.0708027 14.9026 0.147052 15.1962L0.21967 15.2803C0.485936 15.5466 0.9026 15.5708 1.19621 15.3529L1.28033 15.2803L8.28033 8.28033C8.5466 8.01406 8.5708 7.5974 8.35295 7.30379L8.28033 7.21967L1.28033 0.21967C0.987437 -0.0732233 0.512563 -0.0732233 0.21967 0.21967Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Times;
