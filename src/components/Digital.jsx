

import React from 'react';
import 'animate.css';

function DigitalPage() {
  return (
    <>
      <div className="mb-10 mt-20 md:mt-20 h-auto md:h-96 flex items-center justify-center" style={{
        backgroundImage: 'url(/bg.jpg)', 
        backgroundSize: 'cover', 
        backgroundPosition: 'right', 
      }}>
        <div className="text-white text-center md:text-left px-4 md:px-0">
          <h1 className="text-3xl md:text-5xl w-1/2 lg:text-6xl xl:text-7xl font-bold animate__animated animate__zoomIn">Digital Marketing</h1>
        </div>
      </div>

      <div className="mx-auto px-4 mt-10 md:px-8">
        <div className="flex flex-col md:flex-row px-4 w-full">
          <div className="md:w-1/2">
            <img src="@.jpg" alt="Image Description" className="w-full animate__zoomIn animate__animated rounded-lg mt-5 md:mt-0 h-full" />
          </div>
          <div className="w-full animate__zoomIn animate__animated md:w-1/2 px-4">
            <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl mt-5 md:mt-0 text-black font-bold">Overview</p>
            <p className="text-base md:text-lg lg:text-xl xl:text-2xl mt-2 text-black mb-5">RBK Technologies is a leader in providing independent and objective-based digital marketing services. Our top-notch digital marketing solutions add value to businesses and improve the information from which marketing decisions are made. We offer affordable SEO services, local SEO, SEM, email marketing, social media, and web development services for all types of businesses. Our managed SEO services will help you generate more organic leads. Our team of SEO professionals optimizes your site for better keyword rankings with content marketing. We employ the best email marketing strategies to market your products and services. Pay for leads with a targeted advertising approach with our managed pay-per-click marketing services. Companies trust us to manage their online presence, monitor the internet for online mentions of their products and brand, and build reliable marketing assets using social media marketing.</p>
          </div>
        </div>
      </div>

      <div>
        <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-center mt-10 animate__zoomIn animate__animated text-black font-bold">Digital Marketing Services</h1>
        <div className="mx-auto px-4 mt-10 md:px-8">
          <div className="flex flex-col md:flex-row px-4 w-full">
            <div className="w-full md:w-1/2 px-4">
              <p className="text-lg md:text-xl lg:text-2xl animate__zoomIn animate__animated xl:text-3xl mt-5 mb-10 text-black font-bold">Search Engine Optimization</p>
              <ul className="list-disc animate__zoomIn animate__animated list-inside text-base md:text-lg lg:text-xl xl:text-2xl text-black ml-5">
                <li>Search Engine Optimization</li>
                <li>Social Media Marketing</li>
                <li>Search Engine Marketing</li>
                <li>E-Commerce Marketing</li>
                <li>E-mail Marketing</li>
                <li>Pay-Per-Click Advertising</li>
                <li>Lead Generation</li>
                <li>Mobile App Marketing</li>
              </ul>
            </div>
            <div className="w-full md:w-1/2">
              <img src="t.jpg" alt="Image Description" className="w-full mt-10 animate__zoomIn animate__animated rounded-lg h-72" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-white animate__animated animate__zoomIn">
        <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl mb-10 animate__animated animate__zoomIn text-center md:text-left ml-4 md:ml-40 font-bold">OBJECTIVE</h1>
      </div>

      <div className="w-full bg-white animate__animated animate__zoomIn">
        <p className="text-base md:text-lg lg:text-xl xl:text-2xl mb-10 text-center md:text-left ml-4 md:ml-96 text-black">Digital Marketing allows brands to reach out beyond their existing networks. Get the best ROI in social advertising through strategic planning. We offer all digital marketing and creative services needed to build your brand and drive growth. Drive more traffic to your website, improve your position on Google, reach more customers, and increase your sales with our digital marketing services.</p>
      </div>
    </>
  );
};

export default DigitalPage;

