import React from "react";

import "./experience.styles.css";

import ExperienceGroupInput from "../../components/common/ExperienceGroupInput";

// Load Companies
import {
  E_Midas,
  E_VIEW9,
  E_ITCITI,
  E_WAPSYDNEY,
} from "../../assets/img/experience";

const Experience = () => {
  return (
    <div id="experience">
      <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
      <ExperienceGroupInput
        imageLogo={E_WAPSYDNEY}
        imageLogoAlt="Wap Sydney Pty Ltd"
        position="Web Application Developer (Internship)"
        domain="Full Stack Developer"
        role="Production Support"
        jobdesc="Working closely with Project Managers and other members of the Development Team to both develop detailed specification documents with clear project deliverables and timelines, and to ensure timely completion of deliverables"
        techUsed="ReactJS, postMan, NodeJS, Adobe XD, VSCode, ExpressJS, PHP"
        date="Feb 2019 – Current"
      />

      <ExperienceGroupInput
        imageLogo={E_ITCITI}
        imageLogoAlt="ITciti Pty Ltd"
        position="Web Application Developer (Internship)"
        domain="Full Stack Developer"
        role="Error Handlerer"
        jobdesc="Working closely with Project Managers and other members of the Development Team to both develop detailed specification documents with clear project deliverables and timelines, and to ensure timely completion of deliverables"
        techUsed="ReactJS, postMan, NodeJS, Google Adwords, Google Garage"
        date="Jul 2018 – Nov 2018"
      />
      <ExperienceGroupInput
        imageLogo={E_VIEW9}
        imageLogoAlt="View9 Pty Ltd"
        position="Software Engineer"
        domain="Web Developer"
        role="Production Support"
        jobdesc="Creating, and Testing the web application along with solving problems in a real-time manner."
        techUsed="PHP, Drupal, AJAX, GIT, SublimeText"
        date="Dec 2013 - Feb 2015"
      />
      <ExperienceGroupInput
        imageLogo={E_Midas}
        imageLogoAlt="Midas Pty Ltd"
        position="Web Developer (Internship)"
        domain="Web Developer"
        role="Production Support"
        jobdesc="Creating and solving real-time problems in production related to UI, Backend and Databases."
        techUsed="PHP, MySQL, GIT, AJAX, SublimeText "
        date="March 2013 - December 2013"
      />
    </div>
  );
};

export default Experience;
