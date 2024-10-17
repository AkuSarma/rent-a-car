import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-slate-800 p-8 w-full text-white flex justify-center items-center">
      &copy; Aku Sarma and Abhishek Kumar Das 2024{" "}
      {new Date().getFullYear() !== 2024
        ? `to ${new Date().getFullYear()}`
        : ""}
    </footer>
  );
}

export default Footer