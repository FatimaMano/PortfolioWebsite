/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Military Selection Management System",
    description:
      "Collaboration to create a business application that contributes to our most crucial part of country, Military selection. ",
    url: "https://github.com/FatimaMano/OOP/tree/master/Military%20Selection%20Management%20System%20GUI",
  },
  {
    title: "Kingdom's Last hope ",
    description:
      "Created this Game to enhance the abilities in problem solving and make the game idea a reality",
    url: "https://github.com/FatimaMano/OOP/tree/master/Kindom's%20Last%20hope%20GUI",
  },
  {
    title: "My Professional Site",
    description:
      "My Professional Site created using wix where i can share my passion, my projects, my articles, where you can find everything about me.",
    url: "https://fr141277.wixsite.com/website",
  },
  {
    title: "Youtube Content Creation",
    description:
      "Welcome to our channel dedicated to productivity and fulfilling living. Join us in optimizing work-life balance and pursuing passions with a Computer Science twist!",
    url: "https://www.youtube.com/channel/UCequ9vnPinAwWKlybGmFPmQ",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
