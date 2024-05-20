
import axios from "axios";
import {useEffect, useState} from "react";
import 'animate.css';

export default function Servicespage(){
    const [isLogin, setIsLogin] = useState(false);
    useEffect(() => {
        axios
            .get(`http://localhost:3001/api/checkToken`)
            .then((response) => {
                if (response.status === 200) {
                    setIsLogin(true);
                }
            })
            .catch((err) => {
            });
    }, []);
    return(
      <>
      
      <div class="mx-auto px-4 mt-10 md:px-8">
    <div>
        <h1 class="text-7xl md:text-7xl animate__zoomIn animate__animated text-center mt-32 mb-10 md:mb-0 text-black font-bold">Our Services</h1>
    </div>
    <div class=" animate__zoomIn animate__animated mt-10 mb-10">
        <h1 class="text-lg md:text-xl text-center md:ml-28 mt-5 md:mt-0 md:mr-52 text-black ">In the new economy, Information Technology has taken a pivotal and central role in advancing the strategic vision of a modern enterprise. It has become paramount for organizations to ensure that their technical, domain, and process expertise maintain a crucial competitive advantage.</h1>
        <h1 class="text-lg md:text-xl text-center md:ml-28 mt-5 md:mt-0 md:mr-52 text-black ">We offer unique expertise in all ranges of services from our offerings, ensuring that clients' expectations are met during the development and implementation of critical business applications. As clients increasingly focus on widening their offering range and developing new capabilities, we position ourselves in the background in such a way that business success and productivity are always backed up.</h1>
        <h1 class="text-lg md:text-xl text-center md:ml-28 mt-5 md:mt-0 md:mr-52 text-black ">The focus of our comprehensive services portfolio is to help customers understand where they need to start, how to get there, and the impact they wish to achieve on their business. From consulting, development, and managed services, we have the capacity to deliver the innovation needed to help our clients maximize their potential.</h1>
    </div>
</div>

  <div class="flex flex-wrap justify-center">

  <div class="w-full animate__zoomIn animate__animated md:w-2/3 p-4">
    <div class="border border-gray-200 bg-green-200 p-6 rounded-lg shadow-2xl">
      <a href="/web" className="xl:w-1/3 md:w-1/2 p-4">
      <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
      <img src="y.jpg"></img>
      </div>
      <h2 class="text-3xl text-black font-medium title-font mb-2">Web Design And Development</h2>
      <p class="leading-relaxed text-base text-justify">RBK Technologies is a professional website design company that has helped diverse businesses create just the right website to serve their online audience. We help you craft sites that will not only look great but also cater to the demands of both you and your target audience. With rich experience in the field of website design, you can rely on us for delivering quality work and excellent support.</p>
      <p class="leading-relaxed text-base font-bold text-justify">Learn More...</p>
      </a>
    </div>

  </div>
  
 
  <div class="w-full animate__zoomIn animate__animated md:w-1/3 p-4">
    <div class="border border-gray-200 p-6 bg-blue-200 rounded-lg shadow-2xl">
    <a href="/digital" className="xl:w-1/3 md:w-1/2 p-4">
      <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-200 text-indigo-500 mb-4">
      <img src="d.jpg"></img>
      </div>
      <h2 class="text-3xl text-black font-medium title-font mb-2">Digital Marketing</h2>
      <p class="leading-relaxed text-base text-justify">RBK Technologies is the leader in providing independent and objective-based Digital marketing services.</p>
      <p class="leading-relaxed text-base font-bold text-justify">Learn More...</p>
      </a>
    </div>
  </div>

  <div class="w-full animate__zoomIn animate__animated  md:w-1/3 p-4">
    <div class="border border-gray-200 bg-pink-200 p-6 rounded-lg shadow-2xl">
    <a href="/software" className="xl:w-1/3 md:w-1/2 p-4">
      <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
      <img src="s.jpg"></img>
      </div>
      <h2 class="text-3xl text-black font-medium title-font mb-2">Software Services</h2>
      <p class="leading-relaxed text-base text-justify">RBK Technologies is a professional website design company that has helped diverse businesses create just the right website to serve their online audience.</p>
      <p class="leading-relaxed text-base font-bold text-justify">Learn More...</p>
      </a>
    </div>
  </div>

  <div class="w-full animate__zoomIn animate__animated  md:w-1/3 p-4">
    <div class="border border-gray-200 bg-red-300 p-6 rounded-lg shadow-2xl">
    <a href="/commerce" className="xl:w-1/3 md:w-1/2 p-4">
      <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
      <img src="e.jpg"></img>
      </div>
      <h2 class="text-3xl text-black font-medium title-font mb-2">Ecommerce</h2>
      <p class="leading-relaxed text-base text-justify">RBK Technologies is the leader in providing independent and objective-based Digital marketing services.</p>
      <p class="leading-relaxed text-base font-bold text-justify">Learn More...</p>
      </a>
    </div>
  </div>
  </div>


  <div class="flex animate__zoomIn animate__animated flex-wrap justify-center">
  <div class="w-full md:w-1/3 p-4">
    <div class="border border-gray-200 p-6 bg-orange-200 rounded-lg shadow-2xl">
    <a href="/management" className="xl:w-1/3 md:w-1/2 p-4">
      <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
      <img src="i.jpg"></img>
      </div>
      <h2 class="text-3xl text-black font-medium title-font mb-2">Business Process Management</h2>
      <p class="leading-relaxed text-base text-justify">RBK Technologies is a professional website design company that has helped diverse businesses create just the right website to serve their online audience.</p>
      <p class="leading-relaxed text-base font-bold text-justify">Learn More...</p>
      </a>
    </div>
  </div>
  <></>

  <div class="w-full animate__zoomIn animate__animated md:w-1/3 p-4">
    <div class="border border-gray-200 p-6 bg-cyan-200  rounded-lg shadow-2xl">
    <a href="/application" className="xl:w-1/3 md:w-1/2 p-4">
      <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
      <img src="h.jpg"></img>
      </div>
      <h2 class="text-3xl text-black font-medium title-font mb-2">Business Application Services</h2>
      <p class="leading-relaxed text-base text-justify">RBK Technologies is the leader in providing independent and objective-based Digital marketing services.</p>
      <p class="leading-relaxed text-base font-bold text-justify">Learn More...</p>
      </a>
    </div>
  </div>

  <div class="w-full animate__zoomIn animate__animated md:w-1/3 p-4">
    <div class="border border-gray-200 p-6 bg-yellow-100 rounded-lg shadow-2xl">
    <a href="/cunsulting" className="xl:w-1/3 md:w-1/2 p-4">
      <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
      <img src="h.jpg"></img>
      </div>
      <h2 class="text-3xl text-black font-medium title-font mb-2">Business Consulting Services</h2>
      <p class="leading-relaxed text-base text-justify">RBK Technologies is a professional website design company that has helped diverse businesses create just the right website to serve their online audience.</p>
      <p class="leading-relaxed text-base font-bold text-justify">Learn More...</p>
      </a>
    </div>
  </div>

  <div class="w-fullanimate__zoomIn animate__animated  md:w-1/3 p-4">
    <div class="border border-gray-200 p-6  bg-green-200 rounded-lg shadow-2xl">
    <a href="/enterprice" className="xl:w-1/3 md:w-1/2 p-4">
      <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
      <img src="m.jpg"></img>
      </div>
      <h2 class="text-3xl text-black font-medium title-font mb-2">Enterprise Solutions</h2>
      <p class="leading-relaxed text-base text-justify">RBK Technologies is a professional website design company that has helped diverse businesses create just the right website to serve their online audience.</p>
      <p class="leading-relaxed text-base font-bold text-justify">Learn More...</p>
      </a>
    </div>
</div>
</div>
</>
    );
};




