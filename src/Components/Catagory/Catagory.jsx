import React from "react";
import { CatagoryInfos } from "./CatagoryFullInfos";
import CatagoryCard from "./CatagoryCard";
import classes from "./Catagory.module.css";

function Catagory() {
  return (
    <section className={classes.catagory_container}>
      {CatagoryInfos.map((infos, index) =>
        <CatagoryCard key={index} data={infos} />
      )}
    </section>
  );
}

export default Catagory;
