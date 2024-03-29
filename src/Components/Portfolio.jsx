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
import image from "../images/professional_portrait.jpg";

const imageAltText = "My  picture in Professional suit as a professional portrait";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Life Leap: Virtual Career Fair as a Rehabilitation Program for Prisoners",
    description:
      "A summer school project which topic aims to help prisoners reintegrate into society by providing them with career preparation.",
    url: "https://www.canva.com/design/DAFIRFdNrso/IsyXCSNMOnIEAit31Eskyg/view?utm_content=DAFIRFdNrso&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
  },
  {
    title: "Learning Deep Learning and Pytorch",
    description:
      "Learned about how to train a basic Deep learning model by using Pytorch (Guided by an incredible Youtuber, MrdBourke, and his outstanding one-day tutorial)",
    url: "https://colab.research.google.com/drive/1f7yPCMbh4PY3gqvM0_7J-uEOCvOSrUK6?usp=sharing",
  },
  {
    title: "My Resume",
    description:
      "Discover further information about my experience and professional life.",
    url: "https://drive.google.com/file/d/1SXcxt9ylsi3FyqoUPtoZpB59KLLUShIQ/view?usp=sharing",
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
            style={{height: "90%", width: "100%", objectFit: "cover", animation: "1s ease-out 0s 1 slideIn"}}
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
