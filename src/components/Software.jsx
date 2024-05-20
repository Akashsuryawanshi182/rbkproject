

import React from 'react';
import 'animate.css';

function SoftwarePage() {
  return (
    <>
      <div className="mb-10 mt-20 h-auto md:h-96 flex items-center justify-center" style={{
        backgroundImage: 'url(/bg.jpg)', 
        backgroundSize: 'cover', 
        backgroundPosition: 'right', 
      }}>
        <div className="text-white text-center md:text-left px-4 md:px-0">
          <h1 className="text-3xl md:text-5xl w-1/2 lg:text-6xl xl:text-7xl font-bold animate__animated animate__zoomIn">Software Development</h1>
        </div>
      </div>

      <div className="mx-auto px-4 mt-10 md:px-8">
        <div className="flex flex-col md:flex-row px-4 w-full">
          <div className="md:w-1/2">
            <img src="v.jpg" alt="Image Description" className="w-full mb-5 mt-5 animate__zoomIn animate__animated rounded-lg md:h-64" />
          </div>
          <div className="w-full animate__zoomIn animate__animated md:w-1/2 px-4">
            <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl mt-5 text-black font-bold">Software Development</p>
            <p className="text-base md:text-lg lg:text-xl xl:text-2xl mt-2 text-black mb-5">At RBK Technologies, we provide top-quality custom application development services and quality assurance, delivering complex world-class software solutions on a variety of technology platforms. We offer a full range of custom software development services for diverse business domains. From startups to corporate giants, we strive to provide the best results in creating websites that stand out among competitors.</p>
          </div>
        </div>
      </div>

      <p className="text-base animate__zoomIn animate__animated md:text-lg lg:text-xl xl:text-2xl mt-5 mx-auto px-4 md:px-8">At RBK Technologies, we provide top-quality custom application development services and quality assurance, delivering complex world-class software solutions on a variety of technology platforms. We offer a full range of custom software development services for diverse business domains. From startups to corporate giants, we strive to provide the best results in creating websites that stand out among competitors.</p>

      <div className="w-full bg-white animate__animated animate__zoomIn">
        <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl mb-10 animate__animated animate__zoomIn text-center md:text-left ml-4 md:ml-40  mt-10 font-bold">OBJECTIVE</h1>
      </div>

      <div className="w-full bg-white animate__animated animate__zoomIn">
        <p className="text-base md:text-lg lg:text-xl xl:text-2xl mb-10 text-center md:text-left ml-4 md:ml-96 text-black">In the new economy, Information Technology has taken a pivotal and central role in advancing the strategic vision of a modern enterprise. It has become paramount important for organizations to make sure that their technical, domain, and process expertise maintain crucial competitive advantage. We offer unique expertise in all ranges of services from our offerings, making sure that the client's expectations are met during development and implementation of critical business applications. As clients increasingly focus on widening their offering range and developing new capabilities, we position ourselves in the background in such a way that the business success and productivity are always backed up. The focus of TESTQs comprehensive services portfolio is to help customers understand where they need to start, how to get there, and the impact they wish to achieve on their business. From consulting, development, and managed services, TESTQ has the capacity to deliver the innovation needed to help our clients maximize potential.</p>
      </div>
    </>
  );
};

export default SoftwarePage;
