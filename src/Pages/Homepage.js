import React from "react";
import Landingsection from "../Components/Landingsection";
import Whowearesection from "../Components/Whowearesection";
import Services from "../Components/Services";
import Projectsection from "../Components/Projectsection";
import Foundersection from "../Components/Foundersection";
import Blogsection from "../Components/Blogsection";
import Joinsection from "../Components/Joinsection";

function Homepage() {
  return (
    <div>
      <Landingsection />
      <Whowearesection />
      <Services />
      <Projectsection />
      <Foundersection />
      <Blogsection />
      <Joinsection />
    </div>
  );
}

export default Homepage;
