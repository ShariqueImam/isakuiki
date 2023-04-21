import React, { useEffect, useState } from "react";
import Menu from "../../components/Menu/Menu";
import Navbar from "../../components/Navbar1/Navbar";
import Footer from "../../components/Footer/Footer";
import client from "../api/client";
const index = () => {
  const [MenuItems, setMenuItems] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let p = await client.fetch(`*[_type == "menu"]`);
      p.sort((a, b) => {
        return a.position - b.position;
      });
      setMenuItems(p);
    };
    fetchData();
  }, []);

  return (
    <div className="z-0">
      <div className="border-b-2 border-green-700">
        <Navbar />
      </div>
      <Menu MenuItems={MenuItems} />
      <Footer />
    </div>
  );
};

export default index;
