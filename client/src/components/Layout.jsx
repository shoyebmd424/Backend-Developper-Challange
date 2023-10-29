import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ToastContainer } from "react-toastify";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <ToastContainer />

      <main style={{ minHeight: "90vh" }}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
