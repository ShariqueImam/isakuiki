import React from "react";
import Contact from "../../components/ContactPage/Contact";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar1/Navbar";
const index = () => {
  return (
    <div>
      <div className="border-b-2 border-green-700">
        <Navbar />
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default index;
