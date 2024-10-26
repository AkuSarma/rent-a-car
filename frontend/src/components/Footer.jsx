const Footer = () => {
  return (
    <footer className="bg-gray-200 p-8 w-full text-black flex justify-center items-center">
      &copy; Aku Sarma and Abhishek Kumar Das 2024{" "}
      {new Date().getFullYear() !== 2024
        ? `to ${new Date().getFullYear()}`
        : ""}
    </footer>
  );
}

export default Footer