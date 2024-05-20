


import React from 'react';
import 'animate.css';

function ManagementPage() {
  return (
    <>
      <div className="mb-10 mt-20 h-20 flex items-center justify-center" style={{
        backgroundImage: 'url(/bg.jpg)', 
        backgroundSize: '100% 100%', 
        backgroundPosition: 'right', 
        minHeight: '50vh',
      }}>
        <div className="text-white text-left md:text-center md:ml-0 mr-10 md:mr-0">
          <h1 className="text-3xl md:text-5xl  w-1/2 animate__zoomIn animate__animated font-bold md:ml-0">Business Process Management</h1>
        </div>     
      </div>
      
      <div className="mx-auto px-4 mt-10 md:px-8">
        <div className="flex flex-col md:flex-row px-4 w-full">
          <div className="md:w-1/2">
            <img src="ac.jpg" alt="Image Description" className="w-96  mb-5 mt-5 md:mb-0 md:mt-22 md:ml-24 animate__zoomIn animate__animated rounded-lg h-full" />
          </div>
          <div className="w-full md:w-1/2 animate__zoomIn px-4">
            <p className="text-5xl  mb-5 ml-20 md:text-7xl text-black font-bold">Overview</p>
            <p className="text-base  mb-5 md:text-xl text-black">Every company plans differently based on its unique requirements; however, more and more enterprises have begun re-orienting themselves into a process-centric customer-focused organization. This paradigm shift has led to the evolution of Business Process Management (BPM) as a principal management discipline to enable strategic planning of business goals and driving process improvements. As organizations seek to increase agility, and respond to changing market demands, they require systems that change quickly too.</p>
          </div>
        </div>
      </div>

      <div>
        <h1 className="text-3xl md:text-5xl ml-8 mr-8 md:ml-24 md:mr-96 mt-10 animate__zoomIn animate__animated text-center md:text-left font-bold ">RBK Advantage</h1>
        <div className="mx-auto px-4 mt-5 mb-10 md:px-8">
          <p className="text-base md:text-lg text-black ml-5 md:ml-24 mr-5 md:mr-52">Today’s unstable and dynamic business environment and the increasing complexity and proliferation of high-impact technologies pose tough challenges to management teams. To address these challenges, companies across all industries and geographies are focusing more attention and resources on business process management.</p>
          <p className="text-base md:text-lg text-black ml-5 md:ml-24 mr-5 md:mr-52">RBK’s comprehensive and model-based Business Process Management (BPM) services deliver business empowerment to adapt to operational needs. Our expert consultants help you to gain real-time, context-relevant insight into your critical business operations and provide the right tools to transform business rules and logic, enabling you to run the business in a smooth manner.</p>
          <p className="text-base md:text-lg text-black ml-5 md:ml-24 mr-5 md:mr-52">Our unique combination of skills, approaches, assets, and tools generates value quickly, delivers measurable results, and creates durable BPM solutions.</p>
        </div>
      </div>

      <div>
        <h1 className="text-3xl md:text-5xl ml-8 mr-8 md:ml-24 md:mr-72 mt-10 animate__zoomIn animate__animated text-center md:text-left font-bold ">Challenges And Opportunities</h1>
        <div className="mx-auto px-4 mt-5 mb-10 md:px-8">
          <p className="text-base md:text-lg text-black ml-5 md:ml-24 mr-5 md:mr-52 mb-5">Business process improvement and alignment are constant challenges in today’s complex business environment. Customer satisfaction, cutting costs, and increasing efficiency across organizational disciplines are becoming the primary goals of every organization. However, few organizations are truly ready for business improvement initiatives. The major challenges that the organizations are facing today can be summarized as below:</p>
          <p className="text-base md:text-lg text-black ml-5 md:ml-24 mr-5 md:mr-52">(1) Legacy tools incapable of handling multiple pain points</p>
          <p className="text-base md:text-lg text-black ml-5 md:ml-24 mr-5 md:mr-52">(2) High implementation and maintenance costs</p>
          <p className="text-base md:text-lg text-black ml-5 md:ml-24 mr-5 md:mr-52">(3) Security</p>
          <p className="text-base md:text-lg text-black ml-5 md:ml-24 mr-5 md:mr-52">(4) Performance issues</p>
          <p className="text-base md:text-lg text-black ml-5 md:ml-24 mr-5 md:mr-52 mt-5">At RBK, we understand these challenges and help remove the complexity and risk with our top-of-class and fully-managed BPM services.</p>
        </div>
      </div>

      <div className="mx-auto px-4 mt-10 md:px-8">
  <div className="flex flex-col md:flex-row px-4 w-full">
    <div className="w-full md:w-1/2 animate__zoomIn mr-5 mb-10 animate__animated px-4">
      <h2 className="text-lg md:text-7xxl lg:text-7xl xxl:text-7xl font-bold text-black ml-5  md:mt-20 mb-5 md:mb-10">Key Areas</h2>
      <p className="text-base md:text-lg lg:text-xl xl:text-2xl mt-2 text-black ml-5 mb-2">At RBK, we leverage our best resources and immense capabilities to provide you the following cost-effective and risk-free services:</p>
      <p className="text-base md:text-lg lg:text-xl xl:text-2xl mt-2 text-black ml-5 mb-2">(1) Consulting</p>
      <p className="text-base md:text-lg lg:text-xl xl:text-2xl mt-2 text-black ml-5 mb-2">(2) Technical Advisory</p>
      <p className="text-base md:text-lg lg:text-xl xl:text-2xl mt-2 text-black ml-5 mb-2">(3) Implementation Services</p>
      <p className="text-base md:text-lg lg:text-xl xl:text-2xl mt-2 text-black ml-5 mb-2">(4) Testing Services</p>
      <p className="text-base md:text-lg lg:text-xl xl:text-2xl mt-2 text-black ml-5 mb-2">(5) Support Services</p>
      <p className="text-base md:text-lg lg:text-xl xl:text-2xl mt-2 text-black ml-5 mb-2">(6) Optimization</p>
      <p className="text-base md:text-lg lg:text-xl xl:text-2xl mt-2 text-black ml-5 mb-2">(7) Risk Management</p>
      <p className="text-base md:text-lg lg:text-xl xl:text-2xl mt-2 text-black ml-5 mb-2">(8) Business Analysis</p>
      <p className="text-base md:text-lg lg:text-xl xl:text-2xl mt-2 text-black ml-5 mb-2">(9) Business Test Design</p>
      <p className="text-base md:text-lg lg:text-xl xl:text-2xl mt-2 text-black ml-5 mb-2">(10) Customer Relationship Management</p>
    </div>
    <div className="md:w-1/2">
      <img src="ke.jpg" alt="Image Description" className="w-full mb-5 mt-60 animate__zoomIn animate__animated rounded-lg md:mr-10 h-82" />
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

export default ManagementPage;

