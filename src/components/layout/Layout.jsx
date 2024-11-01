import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const Layout = ({ chhokra }) => {
  return (
    <div>
      <Navbar />
      <div className="content">{chhokra}</div>
      <Footer />
    </div>
  );
};

export default Layout;
