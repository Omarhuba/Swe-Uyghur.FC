import React from "react";
import { Navbar } from "./Navbar";

import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="font-poppins max-w-[1440px] m-auto flex flex-col">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
