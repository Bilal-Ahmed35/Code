import React from "react";

export const Footer = () => {
  return (
    <footer
      className="bg-dark text-light py-3 text-center"
      style={{
        position: "relative",
        bottom: 0,
        width: "100%",
        marginTop: "auto",
      }}
    >
      <p className="mb-0">
        Copyright &copy; {new Date().getFullYear()} MyTodosList.com
      </p>
    </footer>
  );
};
