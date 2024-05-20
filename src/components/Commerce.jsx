

import React from 'react';
import 'animate.css';

function CommercePage() {
  return (
    <>
      <div className="mb-10 mt-20 h-auto md:h-96 flex items-center justify-center" style={{
        backgroundImage: 'url(/bg.jpg)', 
        backgroundSize: 'cover', 
        backgroundPosition: 'right', 
      }}>
        <div className="text-white text-center md:text-left px-4 md:px-0">
          <h1 className="text-3xl md:text-5xl w-1/2 lg:text-6xl ml-5 xl:text-7xl font-bold animate__animated animate__zoomIn">Ecommerce Website Development</h1>
        </div>
      </div>

      <div className="mx-auto px-4 mt-10 md:px-8">
        <div className="flex flex-col md:flex-row px-4 w-full">
          <div className="md:w-1/2">
            <img src="x.jpg" alt="Image Description" className="w-full mb-5 mt-5 animate__zoomIn animate__animated rounded-lg h-full" />
          </div>
          <div className="w-full  animate__zoomIn animate__animated md:w-1/2 px-4">
            <p className="text-lg md:text-xl lg:text-5xl xl:text-7xl mt-5 text-black font-bold">Ecommerce Website Development</p>
            <p className="text-base md:text-lg lg:text-xl xl:text-2xl mt-2 text-black mb-5">A solid ecommerce website is the foundation of your online business and a means to drive greater traffic. We, at RBK Technologies, are one of the pioneering web development companies that understand the importance of building an ecommerce website using the latest technology to increase your profitability. We offer totally customizable solutions with the best standard features and functionality. This will help to promote your brand effectively while bringing success as well as online sales. Our professionals use current industry trends to deliver prolific results and can tailor a solution that matches your online brand and ecommerce goals.</p>
          </div>
        </div>
      </div>

      <div className="mx-auto px-4 mt-10 md:px-8">
  <div className="flex flex-col md:flex-row px-4 w-full">
    <div className="w-full md:w-1/2 animate__zoomIn mr-5 mb-10 animate__animated px-4">
      <h2 className="text-lg md:text-2xl lg:text-7xl xl:text-7xl font-bold text-black ml-5 mt-10 md:mt-20 mb-5 md:mb-10">Features</h2>
      <p className="text-base md:text-lg lg:text-xl xl:text-2xl mt-2 text-black ml-5 mb-2">(1) Build fully-loaded marketplace website.</p>
      <p className="text-base md:text-lg lg:text-xl xl:text-2xl mt-2 text-black ml-5 mb-2">(2) 100% customizable while being search engine and social media friendly</p>
      <p className="text-base md:text-lg lg:text-xl xl:text-2xl mt-2 text-black ml-5 mb-2">(3) Dashboards for Admin and sellers to offer real-time sales updates</p>
      <p className="text-base md:text-lg lg:text-xl xl:text-2xl mt-2 text-black ml-5 mb-2">(4) Flexibility to set unique commission, shipping & seller subscription rates</p>
      <p className="text-base md:text-lg lg:text-xl xl:text-2xl mt-2 text-black ml-5 mb-2">(5) Exclusive profile pages for sellers and custom URLs for stores</p>
    </div>
    <div className="md:w-1/2">
      <img src="k.jpg" alt="Image Description" className="w-full mb-10 mt-28 animate__zoomIn animate__animated rounded-lg md:mr-10 md:h-96" />
    </div>
  </div>
</div>

<div className="w-full bg-white animate__animated animate__zoomIn">
  <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl mb-10 animate__animated animate__zoomIn text-center md:text-left ml-4 md:ml-10 font-bold">OBJECTIVE</h1>
</div>

<div className="w-full bg-white animate__animated animate__zoomIn">
  <p className="text-base md:text-lg lg:text-xl xl:text-2xl mb-10 text-center md:text-left ml-4 md:ml-10 mt-5 mr-4 md:mr-52 text-black">Application development is complex and dynamic. To meet business needs, managers must align with an application development services partner that possesses a proven track record, a quality approach to delivering consistent results, and the expertise required to drive successful outcomes. We are Helping enterprises build sophisticated business applications that are robust, scalable, and extensible. Our practice specializes in application services that span the full software development lifecycle.</p>
</div>

    </>
  );
};

export default CommercePage;

