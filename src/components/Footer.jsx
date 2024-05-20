import React from 'react';
function Footer() {
  return (
    <footer className="text-gray-600 bg-indigo-900 body-font">
      <div className="container px-5 py-10 mx-auto flex flex-wrap flex-col md:flex-row">
        <div className="md:w-1/3 md:text-left text-center mb-4 md:mb-0">
          <a href="#" className="flex title-font font-medium items-center justify-center md:justify-start text-gray-900">
            <img src="go.jpg" alt="Health and Fitness Logo" className="h-16 w-auto" />
            <span className="ml-3 text-gray-200 text-xl"></span>
          </a>
          <p className="mt-5 text-sm text-gray-300">RBK Technologies is a global IT and business consulting company. Our offerings span over a variety of industry sectors with strong technical, domain, and process expertise helping clients grow their businesses and decrease operational costs continuously in an ever-changing business environment.</p>
        </div>
        <div className="md:w-1/2 flex flex-wrap md:pl-10 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest mb-5">Useful Links</h2>
            <nav className="list-none mb-10">
              <li>
                <a href="#" className="text-white">Home</a>
              </li>
              <li>
                <a href="#" className="text-white">About Us</a>
              </li>
              <li>
                <a href="#" className="text-white">Business Unit</a>
              </li>
              <li>
                <a href="#" className="text-white">Contact Us</a>
              </li>
            </nav>
          </div>
          <div className="md:w-1/2 w-full px-4 md:pl-10 mb-8 md:mb-0">
  <h2 className="title-font font-medium text-white tracking-widest mb-5">Contacts Us</h2>
  <ul className="list-none">
    <li>
      <a href="tel:+16504570277" className="text-white">+1 (650) 457-0277</a>
    </li>
    <li>
      <a href="mailto:info@rbktechnologies.com" className="text-white">info@rbktechnologies.com</a>
    </li>
    <li>
      <span className="text-white block">RBK Technologies LLC</span>
      <span className="text-white block">809 Cuesta Dr Suite B PMB 1133 Mountain View, San Francisco California 94040 United States</span>
      <span className="text-white block font-bold mt-2">India</span>
      <span className="text-white block">RBK Technologies Limited</span>
      <span className="text-white block">#704-07 Maker Chambers - V, Nariman Point, Mumbai 400 021, India.</span>
      <a href="tel:+912035010486" className="text-white block">Tel: +91 (20) 3501 0486</a>
      <a href="tel:+919823123103" className="text-white block">+91 9823123103</a>
    </li>
  </ul>
</div>

        </div>
      </div>
      <div className="bg-white">
        <div className="mx-auto py-2 px-5 w-full flex flex-wrap sm:flex-row">
          <p className="text-gray-500 text-sm mr-auto text-center sm:text-left">Copyright @ 2024 RBK International | All Rights Reserved</p>
          <div className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 mx-2">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer" className="text-teal-500 mx-2">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-orange-500 mx-2">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 mx-2">
              <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

