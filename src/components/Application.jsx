
import React from 'react';
import 'animate.css';

function ApplicationPage() {
  return (
    <>
      <div className="mt-10 md:mt-20 h-20 flex items-center justify-center" style={{
        backgroundImage: 'url(/bg.jpg)', 
        backgroundSize: '100% 100%', 
        backgroundPosition: 'right', 
        minHeight: '50vh',
      }}>
        <div className="text-white text-center md:text-left ml-20">
          <h1 className="text-3xl md:text-5xl w-1/2 lg:text-6xl  xl:text-7xl mb-2 md:mb-10 animate__zoomIn animate__animated font-bold ">
            Business Application Services
          </h1>
        </div>
      </div>

      <div className="ml-5 sm:ml-20  mt-10 animate__zoomIn animate__animated mb-10">
        <h1 className="text-base md:text-lg lg:text-xl xl:text-2xl mb-5 text-center md:text-left ml-5 md:ml-28 mr-5 md:mr-52 text-black ">
          In the new economy, Information Technology has taken a pivotal and central role in advancing the strategic vision of a modern enterprise. It has become paramount important for organizations to make sure that their technical, domain, and process expertise maintain crucial competitive advantage.
        </h1>
        <h1 className="text-base md:text-lg lg:text-xl xl:text-2xl mb-5 text-center md:text-left ml-5 md:ml-28 mr-5 md:mr-52 text-black ">
          We offer unique expertise in all ranges of services from our offerings, making sure that the client's expectations are met during development and implementation of critical business applications. As clients increasingly focus on widening their offering range and develop new capabilities, we position ourselves in the background in such a way that the business success and productivity are always backed up.
        </h1>
        <h1 className="text-base md:text-lg lg:text-xl xl:text-2xl mb-5 text-center md:text-left ml-5 md:ml-28 mr-5 md:mr-52 text-black ">
          The focus of TESTQs comprehensive services portfolio is to help customers understand where they need to start, how to get there, and the impact they wish to achieve on their business. From consulting, development, and managed services, TESTQ has the capacity to deliver the innovation needed to help our clients maximize the potential.
        </h1>
      </div>
    </>
  );
};

export default ApplicationPage;
