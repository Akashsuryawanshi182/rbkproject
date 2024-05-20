// import React from 'react';
// function  Homepage() {
//   return (
//    <>
//   <div className="flex justify-center items-center h-screen bg-gray-100">
//     <img className="h-full w-full object-cover" src="clientrbk.jpg" alt="background image" />
//     <div className="absolute bg-[#FFFFFFE6] h-1/3 w-2/4 border border-inherit rounded-lg flex flex-col justify-center items-center text-center p-4">
//         <p className="text-indigo-900 text-5xl font-bold">Design & Development</p>
//         <p className="text-indigo-800 text-lg mt-4 mb-4">Excellent IT services for your success</p>
//         <div className="flex space-x-4">
//         <a href="your-call-us-url" className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
//     Call Us</a>
//             <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">Get in Touch</button>
//         </div>
//     </div>
// </div>
// <div className=' flex flex-col justify-center items-center text-center p-4 ml-32 mr-32 '>
// <h className='text-5xl font-bold font-sans mt-10'>WELCOME TO RBK Technologies</h>
// <p className='text-2xl mt-5'> Welcome to RBK Technologies! Do you have a great business idea? Have you kick started a new business? Want to change the format or structure of your family business? Come to us at any stage of your business. Share your ideas with us and transform the ideas into reality through a digital platform. We expertise in software development and data analytical solutions.We custom make solutions for your business model. We will be happy to help you design and implement your ideas. Every business is unique and the requirements are various and variable. We have a solution for each kind.</p>
// </div>
// <div className="flex flex-wrap justify-start mt-10 ml-10 pb-10">
//   <div className="bg-orange-100 rounded-lg shadow-lg mx-4 p-4 w-full md:w-2/5 h-auto">
//     <img
//       src="/img-industry-02.jpg"
//       alt="Sample Image 3"
//       className="rounded-lg w-full h-64 object-cover mb-4 transition-transform duration-300 transform hover:scale-105"
//     />
//     <div>
//       <button className="px-4 py-2 bg-slate-200 font-bold rounded-lg mb-2">
//         About Us
//       </button>
//       <p className="font-bold text-3xl pt-2">Connecting People & Technology</p>
//       <p className="text-xl pt-4">RBK Technologies is a global IT and business consulting company. Our offerings span over a variety of industry sectors with strong technical, domain, and process expertise helping clients grow their businesses and decrease operational costs on a continuous basis in an ever-changing business environment.</p>
//       <p className="text-xl pt-2 mb-5">Our engagement offers tremendous value by optimizing your processes, driving efficiency, and helping clients establish an agile and solid business and technical background, achieving higher business growth and customer satisfaction.</p>
//     </div>
//   </div>
// <div className='pt-32 ml-20'>
//   <div className="bg-orange-200 rounded-lg  mx-4 p-4">
//     <img
//       src="/Digital Marketing.jpg"
//       alt="Sample Image 3"
//       className="rounded-lg ml-6 pt-2 h-64 object-cover mb-4 transition-transform  duration-300 transform hover:scale-105"
//     />
//     <div>
//       <button className="px-4 py-2 bg-slate-300 font-bold  rounded-lg mb-2">
//         About Us
//       </button>
//       <p className="font-bold text-3xl pt-2">Digital Marketing Services</p>
//       <p className="text-xl pt-2 font-bold">Rank your website at the top of the search engines</p>
//       <p className="text-xl pt-2 ">Ensuring the best return on investment for your  </p>
//       <p className="text-xl  ">bespoke SEO campaign requirement.</p>
//     </div>
//   </div>
//   </div> 
// </div>
// <div className="flex">
//   <div className="flex-1 pt-5">
//         <div className='bg-red-400 text-2xl inline-block rounded-lg ml-10  '>
//             <p className="ml-3 mr-3 pt-2 pb-2">OUR LATEST SERVICES</p>
//         </div>
//         <div>
//             <p className='font-bold mt-4 text-5xl  ml-10'>What Kind Of Services We Are Offering</p>
//         </div>
//         <div>
//             <p className='text-2xl font-bold pt-10 ml-20 mb-2 '>Web Design & Development</p>
//             <div className='ml-16  bg-[#F8F7F7] shadow-xl rounded-full'>
//             <p className='ml-10 mr-10 pt-5  text-indigo-900 inline-block rounded-lg'>You don’t have to worry about your website getting out-of-date as we will redesign your website for FREE every two years as a complementary service.
//            </p>
//            <div className='pb-5 pt-3   ml-10'> <a href="your-call-us-url" className="bg-white py-1 border border-black  text-black font-bold px-4 rounded-full hover:bg-indigo-500">
//     learn more</a></div>
//         </div>
//         </div>
//     </div>
//     <div className="flex-1 ml-16 pt-32 ">
//     <div className="w-full">
//       <video className="w-full rounded-lg" autoPlay loop muted>
//         <source src="message.mp4" type="video/mp4" />
//       </video>
//     </div>
// </div>
// </div>
// <div className="flex pt-10">
//     <div className="flex-1 ml-16">
//         <div className="w-2/3">
//             <video className="w-full rounded-full" autoPlay loop muted>
//                 <source src="marketing.mp4" type="video/mp4" />
//             </video>
//         </div>
//     </div>
//   <div className="flex-1">
//         <div>
//             <p className='text-2xl font-bold ml-16  mb-2'>Digital Marketing</p>
//             <div className=' mr-16 bg-[#F8F7F7] shadow-xl rounded-full'>
//                 <p className='ml-10 mr-10 pt-5  text-indigo-900 inline-block rounded-lg'>
//                 We understand the value of open communication. We are committed to being accessible, accommodating, and transparent at all times.
//                 </p>
//                 <div className='pb-5 pt-3   ml-10'> <a href="your-call-us-url" className="bg-white py-1 border border-black  text-black font-bold px-4 rounded-full hover:bg-indigo-500">
//     learn more</a></div>
//             </div>
//         </div>
//     </div>
// </div>
// <div className="flex pt-10  ">
//     <div className="flex-1">
//         <div>
//             <p className='text-2xl font-bold  ml-20 mb-2 pt-20 '>Aap Development</p>
//             <div className='ml-16  bg-[#F8F7F7] shadow-xl rounded-full'>
//             <p className='ml-10 mr-10 pt-5 pb-5 text-indigo-900 inline-block rounded-lg'>If customers can’t find it, it doesn’t exist. Clearly list and describe the services you offer. Also, be sure to showcase a premium service.</p>
//             <div className='pb-5 pt-3   ml-10'> <a href="your-call-us-url" className="bg-white py-1 border border-black  text-black font-bold px-4 rounded-full hover:bg-indigo-500">
//     learn more</a></div>
//         </div>
//         </div>
//     </div> 
//     <div className="w-1/2">
//             <video className="w-full rounded-full mr-16" autoPlay loop muted>
//                 <source src="Developmentg.mp4" type="video/mp4" />
//             </video>
//         </div>
// </div>
// <div className="flex pt-16">
//     <div className="flex-1 ml-16">
//         <div className="w-2/3">
//             <video className="w-full rounded-full" autoPlay loop muted>
//                 <source src="Software Services.mp4" type="video/mp4" />
//             </video>
//         </div>
//     </div>
//     <div className="flex-1">
//         <div>
//             <p className='text-2xl font-bold  ml-16 mb-2'>Software Services</p>
//             <div className='mr-16 bg-[#F8F7F7] shadow-xl rounded-full'>
//                 <p className='ml-10 mr-10 pt-5  text-indigo-900 inline-block rounded-lg'>
//                 At RBK Technologies we provide top-Quality Custom Application Development Services and quality assurance delivering complex world-class software solutions on a variety of technology platforms. We offer a full range of custom software development services for diverse business domains.
//                 </p>
//                 <div className='pb-5 pt-3   ml-10'> <a href="your-call-us-url" className="bg-white py-1 border border-black  text-black font-bold px-4 rounded-full hover:bg-indigo-500">
//     learn more</a></div>
//             </div>
//         </div>
//     </div>
// </div>
// <div className="flex pt-16">
//     <div className="flex-1">
//         <div>
//             <p className='text-2xl font-bold ml-24 mb-2 '>Ecommerce</p>
//             <div className='ml-16 bg-[#F8F7F7] shadow-xl rounded-full'>
//                 <p className='ml-10 mr-10 pt-5  text-indigo-900 inline-block rounded-lg'>
//                     A solid ecommerce website is the foundation of your online business and a means to drive greater traffic. We, at RBK Technologies, are one of the pioneered web development companies that understand the importance of building an ecommerce website using the latest technology to increase your profitability.
//                 </p>
//                 <div className='pb-5 pt-3   ml-10'> <a href="your-call-us-url" className="bg-white py-1 border border-black  text-black font-bold px-4 rounded-full hover:bg-indigo-500">
//     learn more</a></div>
//             </div>
//         </div>
//     </div>
//    <div className="flex-1 mr-16  flex justify-end items-center">
//         <video className="h-64 w-w-2/3 rounded-full" autoPlay loop muted>
//             <source src="Ecommerce.mp4" type="video/mp4" />
//         </video>
//     </div>
// </div>
// <div className="flex pt-16">
   
//     <div className="flex-1 ml-16">
//         <div className="w-2/3">
//             <video className="w-full rounded-full" autoPlay loop muted>
//                 <source src="Business Process.mp4" type="video/mp4" />
//             </video>
//         </div>
//     </div>
//   <div className="flex-1">
//         <div>
//             <p className='text-2xl font-bold  ml-16  mb-2'>Business Process Management</p>
//             <div className='mr-16 bg-[#F8F7F7] shadow-xl rounded-full'>
//                 <p className='ml-10 mr-10 pt-5  text-indigo-900 inline-block rounded-lg'>
//                 Every company plans differently based on its unique requirements; however, more and more enterprises have begun re-orienting themselves into a process-centric customer-focused organization. This paradigm shift has led to the evolution of Business Process Management (BPM) as a principal management discipline to enable strategic planning of business goals and driving process improvements.
//                 </p>
//                 <div className='pb-5 pt-3   ml-10'> <a href="your-call-us-url" className="bg-white py-1 border border-black  text-black font-bold px-4 rounded-full hover:bg-indigo-500">
//     learn more</a></div>
//             </div>
//         </div>
//     </div>
// </div>
// <div className='pt-32 border border-slate-50 '>
//     <h className='text-6xl ml-20 font-serif '>Why Choose RBK Technologies</h>
//    <p className='text-6xl ml-20 font-serif '> As Your IT Company?</p>
// </div>
// <div className="flex pt-16 justify-center items-center">
//     <div className="flex-1  text-center">
//         <img src='idea.png' alt='icon' className="mx-auto mr-10" />
//     </div>
//     <div className="flex-1">
//         <div>
//             <p className='text-6xl font-bold pt-20 mb-2'>Creative</p>
//             <div>
//                 <p className='pt-5 mr-20 text-2xl text-indigo-900 inline-block rounded-lg'>
//                     We unite innovation and creativity to build stunning web designs and insurance-relevant marketing solutions.
//                 </p>
//             </div>
//         </div>
//     </div>
// </div>
// <div className="pt-24 flex">
//     <div className=" ml-20">
//         <img src='Collaborative.png' alt='icon' className=" h-40" />
//     </div>
//     <div className="flex flex-col justify-start ml-4"> 
//         <p className='text-6xl pt-20 font-bold mb-2'>Collaborative</p>
//         <div>
//             <p className='pt-5 text-2xl text-indigo-900'>
//             We work with you to understand your insurance agency’s 
//             </p>
//             <p className=' text-2xl text-indigo-900'>specific needs and fulfill your marketing objectives.</p>
//         </div>
//     </div>
// </div>
// <div className="flex pt-16 justify-center items-center">
//     <div className="flex-1 ">
//         <img src='communication.png' alt='icon' className="h-40  ml-96" />
//     </div>
//     <div className="flex-1">
//         <div>
//             <p className='text-6xl  font-bold pt-20 mb-2'>Creative</p>
//             <div>
//                 <p className='pt-5 mr-20 text-2xl text-indigo-900 inline-block rounded-lg'>
//                     We unite innovation and creativity to build stunning web designs and insurance-relevant marketing solutions.
//                 </p>
//             </div>
//         </div>
//     </div>
// </div>
// <div className="pt-24 flex">
//     <div className=" ml-20">
//         <img src='Developing.png' alt='icon' className=" h-40" />
//     </div>
//     <div className="flex flex-col justify-start ml-4"> 
//         <p className='text-6xl pt-20 font-bold mb-2'>Developing</p>
//         <div>
//             <p className='pt-5 text-2xl text-indigo-900'>
//             We are a company that you can rely on for all your insurance marketing needs. 
//             </p>
//             <p className=' text-2xl text-indigo-900'>We are ready to go the extra mile to ensure your agency’s success.</p>
//         </div>
//     </div>
// </div>
// <div className="flex pt-16 justify-center items-center">
//     <div className="flex-1  text-center">
//         <img src='Problem.png' alt='icon' className="mx-auto mr-10" />
//     </div>
//     <div className="flex-1">
//         <div>
//             <p className='text-6xl font-bold pt-20 mb-2'>Problem Solving</p>
//             <div>
//                 <p className='pt-5 mr-20 text-2xl text-indigo-900 inline-block rounded-lg'>
//                 We have the industry knowledge, connections, and resources to develop innovative solutions to satisfy all of your insurance marketing needs.
//                 </p>
//             </div>
//         </div>
//     </div>
// </div>
// <div className="pt-24 flex">
//     <div className=" ml-20">
//         <img src='Industry.png' alt='icon' className=" h-40" />
//     </div>
//     <div className="flex flex-col justify-start ml-4"> 
//         <p className='text-6xl pt-20 font-bold mb-2'>Industry Experts</p>
//         <div>
//             <p className='pt-5  text-2xl text-indigo-900'>
//             With our years of experience serving the insurance industry, 
//             </p>
//             <p className=' text-2xl   text-indigo-900'>we know exactly how to meet industry standards and assure your agency’s growth.</p>
//         </div>
//     </div>
// </div>
// <div className="flex flex-col pt-32  justify-center items-center text-center">
//     <p className="text-6xl font-bold mb-6">RBK Technologies Track Record</p>
//     <div>
//         <p className='text-2xl text-indigo-900 bg-gradient-to-l from-white via-blue-200 to-white inline-block rounded-lg pt-3 ml-32 mr-32'>
//             A multi-site business enterprise and British specialist distributor has decided to implement a market-leading enterprise resource system. RBK Technologies consultants were deployed to provide assistance with the implementation of a customized ERP solution across multiple sites.
//         </p>
//         <p  className='text-2xl text-indigo-900 bg-gradient-to-l from-white via-blue-200 to-white inline-block rounded-lg pt-3 ml-32 mr-32 pb-10'> A technology and service partner of a major UK mobile phone service provider roped in RBK Technologies consultants to set up data-warehouse testing expertise within their existing test team, moving from an existing "one-stop-team" model.</p>
//     </div>
// </div>
//  </>
//   );
// }

// export default  Homepage;


import React from 'react';
function  Homepage() {
  return (
   <>
  <div className="flex justify-center items-center xl:h-screen bg-gray-100">
    <img className="xl:h-full xl:w-full object-cover" src="clientrbk.jpg" alt="background image" />
    <div className="absolute bg-[#FFFFFFE6] xl:h-1/3 sm:mt-10 xl:w-2/4 border border-inherit rounded-lg flex flex-col justify-center items-center text-center p-4">
        <p className="text-indigo-900 xl:text-5xl font-bold">Design & Development</p>
        <p className="text-indigo-800 xl:text-lg xl:mt-4 xl:mb-4">Excellent IT services for your success</p>
        <div className="flex space-x-4">
        <a href="/" className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
    Call Us</a>
            <a href="/" className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
            Get in Touch</a>
        </div>
    </div>
 </div>
 
  <div className=' flex flex-col justify-center items-center text-center p-4 xl:ml-32 xl:mr-32 max-sm:mx-4 '>
     <h className='xl:text-5xl font-bold font-sans xl:mt-10 max-md:text-4xl max-sm:text-3xl'>WELCOME TO RBK Technologies</h>
      <p className='xl:text-2xl xl:mt-5 max-md:text-xl max-sm:text-base'> Welcome to RBK Technologies! Do you have a great business idea? Have you kick started a new business? Want to change the format or structure of your family business? Come to us at any stage of your business. Share your ideas with us and transform the ideas into reality through a digital platform. We expertise in software development and data analytical solutions.We custom make solutions for your business model. We will be happy to help you design and implement your ideas. Every business is unique and the requirements are various and variable. We have a solution for each kind.</p>
  </div>

<div className="flex flex-wrap justify-start mt-10 xl:ml-10 pb-10">
  <div className="bg-orange-100 rounded-lg shadow-lg mx-4 p-4 w-full md:w-2/5 h-auto">
    <img
      src="/img-industry-02.jpg"
      alt="Sample Image 3"
      className="rounded-lg w-full h-64 object-cover mb-4 transition-transform duration-300 transform hover:scale-105"
    />
    <div>
      <button className="px-4 py-2 bg-slate-200 font-bold rounded-lg xl:mb-2">
        About Us
      </button>
      <p className="font-bold text-3xl pt-2">Connecting People & Technology</p>
      <p className="text-xl pt-4">RBK Technologies is a global IT and business consulting company. Our offerings span over a variety of industry sectors with strong technical, domain, and process expertise helping clients grow their businesses and decrease operational costs on a continuous basis in an ever-changing business environment.</p>
      <p className="text-xl pt-2 mb-5">Our engagement offers tremendous value by optimizing your processes, driving efficiency, and helping clients establish an agile and solid business and technical background, achieving higher business growth and customer satisfaction.</p>
    </div>
  </div>
<div className='pt-32 xl:ml-20'>
  <div className="bg-orange-200 rounded-lg  mx-4 p-4">
    <img
      src="/Digital Marketing.jpg"
      alt="Sample Image 3"
      className="rounded-lg xl:ml-6 xl:pt-2 h-64 object-cover mb-4 transition-transform  duration-300 transform hover:scale-105"
    />
    <div>
      <button className="px-4 py-2 bg-slate-300 font-bold  rounded-lg mb-2">
        About Us
      </button>
      <p className="font-bold text-3xl pt-2">Digital Marketing Services</p>
      <p className="text-xl pt-2 font-bold">Rank your website at the top of the search engines</p>
      <p className="text-xl pt-2 ">Ensuring the best return on investment for your  </p>
      <p className="text-xl  ">bespoke SEO campaign requirement.</p>
    </div>
  </div>
  </div> 
</div>

<div className="flex">
  <div className="flex-1 xl:pt-5">
        <div className='bg-red-400 xl:text-2xl inline-block rounded-lg ml-10  '>
            <p className="ml-3 mr-3 pt-2 pb-2">OUR LATEST SERVICES</p>
        </div>
        <div>
            <p className='font-bold xl:mt-4 text-5xl  ml-10'>What Kind Of Services We Are Offering</p>
        </div>
        <div>
            <p className='text-2xl font-bold pt-10 ml-20 mb-2 '>Web Design & Development</p>
            <div className='ml-16  bg-[#F8F7F7] shadow-xl rounded-full'>
            <p className='ml-10 mr-10 pt-5  text-indigo-900 inline-block rounded-lg'>You don’t have to worry about your website getting out-of-date as we will redesign your website for FREE every two years as a complementary service.
           </p>
           <div className='pb-5 pt-3   ml-10'> <a href="your-call-us-url" className="bg-white py-1 border border-black  text-black font-bold px-4 rounded-full hover:bg-indigo-500">
    learn more</a></div>
        </div>
        </div>
    </div>
    <div className="flex-1 ml-16 pt-32 ">
    <div className="w-full">
      <video className="w-full  rounded-lg" autoPlay loop muted>
        <source src="message.mp4" type="video/mp4" />
      </video>
    </div>
</div>
</div>

<div className="flex pt-10">
    <div className="flex-1 ml-16">
        <div className="w-2/3">
            <video className="w-full rounded-full" autoPlay loop muted>
                <source src="marketing.mp4" type="video/mp4" />
            </video>
        </div>
    </div>
  <div className="flex-1">
        <div>
            <p className='text-2xl font-bold ml-16  mb-2'>Digital Marketing</p>
            <div className=' mr-16 bg-[#F8F7F7] shadow-xl rounded-full'>
                <p className='ml-10 mr-10 pt-5  text-indigo-900 inline-block rounded-lg'>
                We understand the value of open communication. We are committed to being accessible, accommodating, and transparent at all times.
                </p>
                <div className='pb-5 pt-3   ml-10'> <a href="your-call-us-url" className="bg-white py-1 border border-black  text-black font-bold px-4 rounded-full hover:bg-indigo-500">
    learn more</a></div>
            </div>
        </div>
    </div>
</div>
<div className="flex pt-10  ">
    <div className="flex-1">
        <div>
            <p className='text-2xl font-bold  ml-20 mb-2 pt-20 '>Aap Development</p>
            <div className='ml-16  bg-[#F8F7F7] shadow-xl rounded-full'>
            <p className='ml-10 mr-10 pt-5 pb-5 text-indigo-900 inline-block rounded-lg'>If customers can’t find it, it doesn’t exist. Clearly list and describe the services you offer. Also, be sure to showcase a premium service.</p>
            <div className='pb-5 pt-3   ml-10'> <a href="your-call-us-url" className="bg-white py-1 border border-black  text-black font-bold px-4 rounded-full hover:bg-indigo-500">
    learn more</a></div>
        </div>
        </div>
    </div> 
    <div className="w-1/2">
            <video className="w-full rounded-full mr-16" autoPlay loop muted>
                <source src="Developmentg.mp4" type="video/mp4" />
            </video>
        </div>
</div>
<div className="flex pt-16">
    <div className="flex-1 ml-16">
        <div className="w-2/3">
            <video className="w-full rounded-full" autoPlay loop muted>
                <source src="Software Services.mp4" type="video/mp4" />
            </video>
        </div>
    </div>
    <div className="flex-1">
        <div>
            <p className='text-2xl font-bold  ml-16 mb-2'>Software Services</p>
            <div className='mr-16 bg-[#F8F7F7] shadow-xl rounded-full'>
                <p className='ml-10 mr-10 pt-5  text-indigo-900 inline-block rounded-lg'>
                At RBK Technologies we provide top-Quality Custom Application Development Services and quality assurance delivering complex world-class software solutions on a variety of technology platforms. We offer a full range of custom software development services for diverse business domains.
                </p>
                <div className='pb-5 pt-3   ml-10'> <a href="your-call-us-url" className="bg-white py-1 border border-black  text-black font-bold px-4 rounded-full hover:bg-indigo-500">
    learn more</a></div>
            </div>
        </div>
    </div>
</div>
<div className="flex pt-16">
    <div className="flex-1">
        <div>
            <p className='text-2xl font-bold ml-24 mb-2 '>Ecommerce</p>
            <div className='ml-16 bg-[#F8F7F7] shadow-xl rounded-full'>
                <p className='ml-10 mr-10 pt-5  text-indigo-900 inline-block rounded-lg'>
                    A solid ecommerce website is the foundation of your online business and a means to drive greater traffic. We, at RBK Technologies, are one of the pioneered web development companies that understand the importance of building an ecommerce website using the latest technology to increase your profitability.
                </p>
                <div className='pb-5 pt-3   ml-10'> <a href="your-call-us-url" className="bg-white py-1 border border-black  text-black font-bold px-4 rounded-full hover:bg-indigo-500">
    learn more</a></div>
            </div>
        </div>
    </div>
   <div className="flex-1 mr-16  flex justify-end items-center">
        <video className="h-64 w-w-2/3 rounded-full" autoPlay loop muted>
            <source src="Ecommerce.mp4" type="video/mp4" />
        </video>
    </div>
</div>
<div className="flex pt-16">
   
    <div className="flex-1 ml-16">
        <div className="w-2/3">
            <video className="w-full rounded-full" autoPlay loop muted>
                <source src="Business Process.mp4" type="video/mp4" />
            </video>
        </div>
    </div>
  <div className="flex-1">
        <div>
            <p className='text-2xl font-bold  ml-16  mb-2'>Business Process Management</p>
            <div className='mr-16 bg-[#F8F7F7] shadow-xl rounded-full'>
                <p className='ml-10 mr-10 pt-5  text-indigo-900 inline-block rounded-lg'>
                Every company plans differently based on its unique requirements; however, more and more enterprises have begun re-orienting themselves into a process-centric customer-focused organization. This paradigm shift has led to the evolution of Business Process Management (BPM) as a principal management discipline to enable strategic planning of business goals and driving process improvements.
                </p>
                <div className='pb-5 pt-3   ml-10'> <a href="your-call-us-url" className="bg-white py-1 border border-black  text-black font-bold px-4 rounded-full hover:bg-indigo-500">
    learn more</a></div>
            </div>
        </div>
    </div>
</div>
<div className='pt-32 border border-slate-50 '>
    <h className='text-6xl ml-20 font-serif '>Why Choose RBK Technologies</h>
   <p className='text-6xl ml-20 font-serif '> As Your IT Company?</p>
</div>
<div className="flex pt-16 justify-center items-center">
    <div className="flex-1  text-center">
        <img src='idea.png' alt='icon' className="mx-auto mr-10" />
    </div>
    <div className="flex-1">
        <div>
            <p className='text-6xl font-bold pt-20 mb-2'>Creative</p>
            <div>
                <p className='pt-5 mr-20 text-2xl text-indigo-900 inline-block rounded-lg'>
                    We unite innovation and creativity to build stunning web designs and insurance-relevant marketing solutions.
                </p>
            </div>
        </div>
    </div>
</div>
<div className="pt-24 flex">
    <div className=" ml-20">
        <img src='Collaborative.png' alt='icon' className=" h-40" />
    </div>
    <div className="flex flex-col justify-start ml-4"> 
        <p className='text-6xl pt-20 font-bold mb-2'>Collaborative</p>
        <div>
            <p className='pt-5 text-2xl text-indigo-900'>
            We work with you to understand your insurance agency’s 
            </p>
            <p className=' text-2xl text-indigo-900'>specific needs and fulfill your marketing objectives.</p>
        </div>
    </div>
</div>
<div className="flex pt-16 justify-center items-center">
    <div className="flex-1 ">
        <img src='communication.png' alt='icon' className="h-40  ml-96" />
    </div>
    <div className="flex-1">
        <div>
            <p className='text-6xl  font-bold pt-20 mb-2'>Creative</p>
            <div>
                <p className='pt-5 mr-20 text-2xl text-indigo-900 inline-block rounded-lg'>
                    We unite innovation and creativity to build stunning web designs and insurance-relevant marketing solutions.
                </p>
            </div>
        </div>
    </div>
</div>
<div className="pt-24 flex">
    <div className=" ml-20">
        <img src='Developing.png' alt='icon' className=" h-40" />
    </div>
    <div className="flex flex-col justify-start ml-4"> 
        <p className='text-6xl pt-20 font-bold mb-2'>Developing</p>
        <div>
            <p className='pt-5 text-2xl text-indigo-900'>
            We are a company that you can rely on for all your insurance marketing needs. 
            </p>
            <p className=' text-2xl text-indigo-900'>We are ready to go the extra mile to ensure your agency’s success.</p>
        </div>
    </div>
</div>
<div className="flex pt-16 justify-center items-center">
    <div className="flex-1  text-center">
        <img src='Problem.png' alt='icon' className="mx-auto mr-10" />
    </div>
    <div className="flex-1">
        <div>
            <p className='text-6xl font-bold pt-20 mb-2'>Problem Solving</p>
            <div>
                <p className='pt-5 mr-20 text-2xl text-indigo-900 inline-block rounded-lg'>
                We have the industry knowledge, connections, and resources to develop innovative solutions to satisfy all of your insurance marketing needs.
                </p>
            </div>
        </div>
    </div>
</div>
<div className="pt-24 flex">
    <div className=" ml-20">
        <img src='Industry.png' alt='icon' className=" h-40" />
    </div>
    <div className="flex flex-col justify-start ml-4"> 
        <p className='text-6xl pt-20 font-bold mb-2'>Industry Experts</p>
        <div>
            <p className='pt-5  text-2xl text-indigo-900'>
            With our years of experience serving the insurance industry, 
            </p>
            <p className=' text-2xl   text-indigo-900'>we know exactly how to meet industry standards and assure your agency’s growth.</p>
        </div>
    </div>
</div>
<div className="flex flex-col pt-32  justify-center items-center text-center">
    <p className="text-6xl font-bold mb-6">RBK Technologies Track Record</p>
    <div>
        <p className='text-2xl text-indigo-900 bg-gradient-to-l from-white via-blue-200 to-white inline-block rounded-lg pt-3 ml-32 mr-32'>
            A multi-site business enterprise and British specialist distributor has decided to implement a market-leading enterprise resource system. RBK Technologies consultants were deployed to provide assistance with the implementation of a customized ERP solution across multiple sites.
        </p>
        <p  className='text-2xl text-indigo-900 bg-gradient-to-l from-white via-blue-200 to-white inline-block rounded-lg pt-3 ml-32 mr-32 pb-10'> A technology and service partner of a major UK mobile phone service provider roped in RBK Technologies consultants to set up data-warehouse testing expertise within their existing test team, moving from an existing "one-stop-team" model.</p>
    </div>
</div>
 </>
  );
}

export default  Homepage;


// className="bg-gradient-to-r from-red-500 via-blue-200 to-yellow-300
// className="bg-gradient-to-l from-red-500 via-blue-200 to-yellow-300
// className="bg-gradient-to-l from-red-500 via-blue-200 to-yellow-300
// className="bg-gradient-to-t from-red-500 via-blue-200 to-yellow-300
// bg-gradient-to-r from-white via-blue-200 to-white