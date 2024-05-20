import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router'; 

function ContactForm() {
  const router = useRouter();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        workEmail: '',
        jobTitle: '',
        country: '',
        topic: '',
        message: ''
    });

    const [countryLabel, setCountryLabel] = useState('Country');
    const [topicLabel, setTopicLabel] = useState('Topic');
    const [firstNameLabel, setFirstNameLabel] = useState('First Name');
    const [lastNameLabel, setLastNameLabel] = useState('Last Name');
    const [workEmailLabel, setWorkEmailLabel] = useState('Work Email');
    const [jobTitleLabel, setJobTitleLabel] = useState('Job Title');
    const [companyLabel, setCompanyLabel] = useState('Company');
    const [messageLabel, setMessageLabel] = useState('Message');


    useEffect(() => {
      axios
          .get(`http://localhost:3001/api/checkToken`)
          .then((response) => {
              if (response.status === 200) {
                  router.push('/');
              }
          })
          .catch((err) => {
              console.error(err);
          });
  }, [router]); 

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        if (value !== '') {
            switch (name) {
                case 'firstName':
                    setFirstNameLabel('');
                    break;
                case 'lastName':
                    setLastNameLabel('');
                    break;
                case 'workEmail':
                    setWorkEmailLabel('');
                    break;
                case 'jobTitle':
                    setJobTitleLabel('');
                    break;
                case 'company':
                    setCompanyLabel('');
                    break;
                case 'message':
                    setMessageLabel('');
                    break;
                default:
                    break;
            }
        }
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          const response = await axios.post(`http://localhost:3001/api/contactApi/contactuser`, {
              firstName: formData.firstName,
              lastName: formData.lastName,
              workEmail: formData.workEmail,
              jobTitle: formData.jobTitle,
              country: formData.country,
              topic: formData.topic,
              message: formData.message,
          });
          if (response.status === 201) {
            router.push('/success');
              setFormData({
                  firstName: "",
                  lastName: "",
                  workEmail: "",
                  jobTitle: "",
                  country:"",
                  topic:"",
                  message: "",
              });
          } else {
              alert("Contact failed. Please try again.");
          }
      } catch (error) {
          console.error(error);
          alert("Network error, Please try again.");
      }
  }

    return (
        <>
        <section className="text-red-200 body-font pt-12 ">
            <div className="container px-10 py-16 mx-auto flex ">

                <div className="lg:w-3/5 md:w-1/2 md:pr-16 pt-20 lg:pr-0 pr-0 relative">
                    <img src="/contact.png" alt="img" width="400" height="400" />
                </div>


                <form onSubmit={handleSubmit} className="lg:w-3/5 md:w-2/3 text-white rounded-lg p-8  flex flex-col md:ml-auto w-full   bg-orange-100 shadow-2xl relative">
                    <h2 className="text-slate-900 text-2xl font-bold decoration-wavy title-font mb-5 uppercase">
                    You should contact us.
                    </h2>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-4">
    <div className="p-2 relative">
        <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full bg-gray-100 bg-opacity-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
        <label htmlFor="firstName" className="absolute top-0 left-0 ml-3 mt-1 text-lg text-gray-700">{firstNameLabel}</label>
    </div>
    <div className="p-2 relative">
        <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full bg-gray-100 bg-opacity-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
        <label htmlFor="lastName" className="absolute top-0 left-0 ml-3 mt-1 text-lg text-gray-700">{lastNameLabel}</label>
    </div>
    <div className="p-2 relative">
        <input
            type="email"
            id="workEmail"
            name="workEmail"
            value={formData.workEmail}
            onChange={handleChange}
            className="w-full bg-gray-100 bg-opacity-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
        <label htmlFor="workEmail" className="absolute top-0 left-0 ml-3 mt-1 text-lg text-gray-700">{workEmailLabel}</label>
    </div>
    <div className="p-2 relative">
        <input
            type="text"
            id="jobTitle"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleChange}
            className="w-full bg-gray-100 bg-opacity-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
        <label htmlFor="jobTitle" className="absolute top-0 left-0 ml-3 mt-1 text-lg text-gray-700">{jobTitleLabel}</label>
    </div>
    <div className="p-2 relative">
        <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full bg-gray-100 bg-opacity-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
        <label htmlFor="company" className="absolute top-0 left-0 ml-3 mt-1 text-lg text-gray-700">{companyLabel}</label>
    </div>
    <div className="p-2 relative">
        <select
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            onClick={() => setCountryLabel('')}
            className="w-full bg-gray-100 bg-opacity-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        >
            <option value="">{countryLabel}</option>
            <option value="usa">USA</option>
            <option value="uk">UK</option>
            <option value="canada">Canada</option>
        </select>
        <label htmlFor="country" className="absolute top-0 left-0 ml-3 mt-1 text-lg text-gray-700 opacity-0 transition-opacity duration-200 ease-in-out">Select Country</label>
    </div>
    <div className="p-2 col-span-2 relative">
        <select
            id="topic"
            name="topic"
            value={formData.topic}
            onChange={handleChange}
            onClick={() => setTopicLabel('')}
            className="w-full bg-gray-100 bg-opacity-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        >
            <option value="">{topicLabel}</option>
            <option value="topic1">Topic </option>
            <option value="topic2">Topic </option>
            <option value="topic3">Topic </option>
        </select>
        <label htmlFor="topic" className="absolute top-0 left-0 ml-3 mt-1 text-lg text-gray-700 opacity-0 transition-opacity duration-200 ease-in-out">Select Topic</label>
    </div>
    <div className="p-2 col-span-2 relative">
        <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full bg-gray-100 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
        ></textarea>
        {messageLabel && (
            <label htmlFor="message" className="absolute top-0 left-0 ml-3 mt-1 text-lg text-gray-700">{messageLabel}</label>
        )}
    </div>
</div>
     <div className="p-2 col-span-2">
                        <button
                            onClick={handleSubmit}
                            className="flex mx-auto text-white border-0 py-2 px-8 focus:outline-none rounded text-lg font-bold bg-gradient-to-r from-red-300 to-pink-500 hover:from-pink-300 hover:to-blue-500"
                        >
                            SUBMIT
                        </button>
                    </div>
                </form>
            </div>
        </section>

 <div className="flex flex-col xl:justify-center xl:flex-row mt-10">
 <div className="bg-slate-200  rounded-b-full rounded-tl-full shadow-lg mx-4 p-4 relative">
        <img
          src="/headquarter.jpg"
          alt="Sample Image 2"
          className=" xl:w-96 xl:h-56 h-40 ml-10  rounded-b-full rounded-tl-full flex xl:justify-center xl:ml-36 xl:pt-5 items-center"
        />
     
      <div>
        <div className='flex justify-center items-center xl:pt-10'><button className="px-4 py-2  bg-yellow-200 text-xl text-violet-950 font-bold rounded-lg">
        Headquarter:
          </button></div>
      
        <p className="text-violet-950   text-center  text-4xl font-sans font-bold mt-4">RBK Technologies LLC</p>
        <p className="text-violet-950 text-center text-xl mr-5 ml-5">809 Cuesta Dr Suite B PMB 1133 Mountain View, San Francisco</p>
        <p className="text-violet-950 text-center text-xl">United States.</p>
        <p className="text-violet-950 text-center text-xl">+1(650)457 0277</p>
        <p className="text-violet-950 text-center text-xl">+1(585)437 0967</p>
        <p className="text-violet-950 text-center text-xl">info@rbktechnologies.com</p>
      </div>
      
    </div>

    <div className="bg-slate-200  rounded-b-full rounded-tr-full shadow-lg mx-4 p-4 relative">
      <img
          src="/headquarter.jpg"
          alt="Sample Image 2"
          className=" xl:w-96 xl:h-56  h-40 rounded-b-full rounded-tr-full flex xl:justify-center xl:ml-16 pt-5 items-center"
        />
      <div>
        <div className='flex justify-center items-center pt-10'><button className="px-4 py-2 bg-yellow-200 text-xl text-violet-950 font-bold rounded-lg">
        United Kingdom
          </button></div>
      
        <p className="text-violet-950   text-center  text-4xl font-sans font-bold mt-4">RBK Technologies LLC</p>
        <p className="text-violet-950 text-center text-xl mr-4 ml-4">167-169 Great Portland Street, London England W1W 5PF</p>
        <p className="text-violet-950 text-center text-xl">Tel : +44 20 3807 8779</p>
        <p className="text-violet-950 text-center text-xl">Info@rbktechnologies.com</p>
      </div>
      
    </div>
</div>
<div className="flex flex-col xl:justify-center xl:flex-row mt-10">
 <div className="bg-orange-100  rounded-t-full rounded-bl-full shadow-lg  mb-10 mx-4 p-4 relative">
      <a href="/facilities" className="group relative">
        <img
          src="/img-industry-01.jpg"
          alt="Sample Image 2"
          className="xl:w-96 xl:h-56 h-40 ml-10   rounded-t-full rounded-bl-full flex xl:justify-center xl:ml-24 pt-5 items-center"
        />
      </a>
      <div>
        <div className='flex justify-center items-center pt-10'><button className="px-4 py-2 bg-yellow-200 text-xl text-violet-950 font-bold rounded-lg">
        India Branch Office:
          </button></div>
      
        <p className="text-violet-950   text-center  text-4xl font-sans font-bold mt-4">RBK Technologies LLC</p>
        <p className="text-violet-950 text-center text-xl ml-5 mr-5">#704-07 Maker Chambers - V, Nariman Point, Mumbai 400 021,</p>
        <p className="text-violet-950 text-center text-xl">India Tel : +91(20) 3501 0486 +91 9823123103</p>
        <p className="text-violet-950 text-center text-xl">+91 98231 23103</p>
        <p className="text-violet-950 text-center text-xl">info@rbktechnologies.com</p>
      </div>
      
    </div>

    <div className=" bg-orange-100 rounded-t-full rounded-br-full mb-10 shadow-lg mx-4 p-4 relative">
      <a href="/facilities" className="group relative">
        <img
          src="/img-industry-01.jpg"
          alt="Sample Image 2"
          className="xl:w-96 xl:h-56 h-40 ml-10 rounded-t-full rounded-br-full flex xl:justify-center xl:ml-24 pt-5 items-center"
        />
      </a>
      <div>
        <div className='flex justify-center items-center pt-10'><button className="px-4 py-2 bg-yellow-200 text-xl text-violet-950 font-bold rounded-lg">
      India Branch Office:
          </button></div>
      
        <p className="text-violet-950   text-center  text-4xl font-sans font-bold mt-4">RBK Technologies LLC</p>
        <p className="text-violet-950 text-center text-xl mr-5 ml-5">Tech 37, Plot Number 2A, Electronic City, 2nd Phase Bengaluru</p>
        <p className="text-violet-950 text-center text-xl">Karnataka 560100, India Tel : +91 9823123103</p>
        <p className="text-violet-950 text-center text-xl">+91 98231 23103</p>
        <p className="text-violet-950 text-center text-xl">info@rbktechnologies.com</p>
      </div>
      
    </div>

   
</div>

<div className="flex flex-col xl:justify-center xl:flex-row mt-10">
<div className="bg-slate-200 rounded-full rounded-tl-full shadow-lg mx-4 p-4 ml-10 relative">
    <img
    src="/united-arab-emirates.png"
    alt="Sample Image 2"
    className="xl:w-32 xl:h-32 h-40 ml-52  xl:pt-10 "
   />
   <div>
     <div className='flex text-center text-2xl xl:pt-5'>
      <p className="px-4 ml-32 mr-32 py-2 bg-yellow-200 text-xl text-violet-950 font-bold rounded-lg">
        UNITED ARAB EMIRATES
      </p>
     </div>
         <p className="text-violet-950   text-2xl font-sans font-bold mt-3 ml-20 ">RBK International Gulf LLC</p>
       <div  className="text-violet-950 ml-28 mr-16 text-xl ">
          <p >+971 4 55902 54 | +971 5 08792 799</p>
          <p >info@rbkinternational.ae</p>
          <p>rbkinternational.ae</p>
          <p> 18th Floor, Burlington Tower, Business Bay,</p> 
          <p> Dubai, United Arab Emirates.</p>
          <p> +971 50 267 2799 +971 4 36267 79</p>
   </div>
  </div>  
</div>

<div className="bg-slate-200 rounded-full rounded-tl-full shadow-lg mx-4 p-4 mr-10 relative">
    <img
    src="/united-states.png"
    alt="Sample Image 2"
    className="xl:w-32 xl:h-32 h-40 ml-52  xl:pt-10"
   />
   <div>
     <div className='flex text-center text-2xl xl:pt-5'>
      <p className="px-4 ml-32 mr-32 py-2 bg-yellow-200 text-xl text-violet-950 font-bold rounded-lg">
      UNITED STATE OF AMERICA
      </p>
     </div>
         <p className="text-violet-950   text-2xl font-sans font-bold mt-3 ml-20 ">RBK International USA LLC</p>
       <div  className="text-violet-950 ml-24  text-xl ">
          <p >+1(929)563-6077 | +1(585)437-0967 </p>
          <p >info@rbkinternational.us</p>
          <p>www.rbkinternational.us</p>
          <p> RBK International USA LLC 809 Cuesta</p> 
          <p>  Dr Suite B PMB 1133,Mountain View</p>
          <p className='pb-10'>  Tel : +1(650)457 0277 +1(585)437 0967</p>
   </div>
  </div>  
</div>
</div>


<div className="flex flex-col xl:justify-center xl:flex-row mt-10">
<div className="bg-slate-200 rounded-full rounded-tl-full shadow-lg mx-4 p-4 ml-10 relative">
    <img
    src="/south-africa.png"
    alt="Sample Image 2"
    className="xl:w-32 xl:h-32 h-40 ml-48  xl:pt-10 "
   />
   <div>
     <div className='flex text-center text-2xl xl:pt-5'>
      <p className="px-4 ml-40 py-2 bg-yellow-200 text-xl text-violet-950 font-bold rounded-lg">
      SOUTH AFRICA
      </p>
     </div>
         <p className="text-violet-950   text-2xl font-sans font-bold mt-3 ml-20 ">RBK International South Africa Pty Ltd</p>
       <div  className="text-violet-950 ml-20 mr-20 text-xl ">
          <p >+27 738237502</p>
          <p >southafrica@rbkinternational.com</p>
          <p>http://rbkinternational.co.za</p>
          <p>RBK International South Africa Pty Ltd</p> 
          <p> PO Box 15829 LYTTELION Centurion ,</p>
          <p className='pb-10'> Gauteng, 0140 Republic of South Africa </p>
   </div>
  </div>  
</div>

<div className="bg-slate-200 rounded-full rounded-tl-full shadow-lg mx-4 p-4 mr-10 relative">
    <img
    src="/singapore.png"
    alt="Sample Image 2"
    className="xl:w-32 xl:h-32 h-40 ml-48  xl:pt-10"
   />
   <div>
     <div className='flex text-center text-2xl xl:pt-5'>
      <p className="px-4 ml-48 py-2 bg-yellow-200 text-xl text-violet-950 font-bold rounded-lg">
      SINGAPORE
      </p>
     </div>
         <p className="text-violet-950   text-2xl font-sans font-bold mt-3 ml-20 ">  RBK International (SG) Pte Ltd</p>
       <div  className="text-violet-950 ml-24 mr-24 text-xl ">
          <p >+65 69783899 | +65 84070759</p>
          <p >info@rbkinternational.com.sg</p>
          <p>www.rbkinternational.com.sg</p>
          <p> 10 Anson Road, #22-02 International</p> 
          <p>Plaza Singapore 079903.</p>
   </div>
  </div>  
</div>
</div>

<div className="flex flex-col xl:justify-center xl:flex-row mt-10">
<div className="bg-slate-200 rounded-full rounded-tl-full shadow-lg mx-4 p-4 ml-10 relative">
    <img
    src="/indonesia.png"
    alt="Sample Image 2"
    className="xl:w-32 xl:h-32 h-40 ml-52  xl:pt-10 "
   />
   <div>
     <div className='flex text-center text-2xl xl:pt-5'>
      <p className="px-4 ml-48 py-2 bg-yellow-200 text-xl text-violet-950 font-bold rounded-lg">
      INDONESIA
      </p>
     </div>
         <p className="text-violet-950   text-2xl font-sans font-bold mt-3 ml-28 ">PT RBK International Indonesia</p>
       <div  className="text-violet-950 ml-28 mr-20 text-xl ">
          <p >+62 219601505 | +62 82252549696</p>
          <p >info@rbkinternational.id</p>
          <p>www.rbkinternational.id</p>
          <p>Gedung Menara Rajawali, lantai 7, Jl.</p> 
          <p>Mega Kuningan Lot 5.1, kawasan mega </p>
          <p>kuningan,Kel. Kuningan</p>
          <p>Timur, Kec. Setiabudi,  Kota Adm.</p>
           <p  className='pb-10'> Jakarta Selatan, Prov. DKI Jakarta</p>
   </div>
  </div>  
</div>

<div className="bg-slate-200 rounded-full rounded-tl-full shadow-lg mx-4 p-4 mr-10 relative">
    <img
    src="/united-kingdom.png"
    alt="Sample Image 2"
    className="xl:w-32 xl:h-32 h-40 ml-52  xl:pt-10"
   />
   <div>
     <div className='flex text-center text-2xl xl:pt-5'>
      <p className="px-4 ml-40 py-2 bg-yellow-200 text-xl text-violet-950 font-bold rounded-lg">
      UNITED KINGDOM
      </p>
     </div>
         <p className="text-violet-950   text-2xl font-sans font-bold mt-3 ml-20 ">RBK International (UK) Ltd</p>
       <div  className="text-violet-950 ml-20 mr-20 text-xl ">
          <p>+44 20 38078779 | +44 7448350715</p>
          <p>info@rbkinternational.co.uk</p>
          <p>167-169 Great Portland Street,</p>
          <p> London England W1W 5PF</p> 
          <p>Tel : +44 20 3807 8779 +44 74483 50715</p>

   </div>
  </div>  
</div>
</div>

<div className="flex flex-col xl:justify-center xl:flex-row mt-10">
<div className="bg-slate-200 rounded-full rounded-tl-full shadow-lg mx-4 p-4  relative">
    <img
    src="/india.png"
    alt="Sample Image 2"
    className="xl:w-32 xl:h-32 h-40 xl:ml-48  xl:pt-10 "
   />
   <div>
     <div className='flex text-center text-2xl xl:pt-5'>
      <p className="px-4 ml-48 py-2 bg-yellow-200 text-xl text-violet-950 font-bold rounded-lg">
      INDIA
      </p>
     </div>
         <p className="text-violet-950   text-2xl font-sans font-bold mt-3 ml-28 ">RBK Industries Limited</p>
       <div  className="text-violet-950 ml-28 mr-28 text-xl ">
          <p >+91 2029527909</p>
          <p >info@rbkindustriesltd.com</p>
          <p>www.rbkindustriesltd.com</p>
          <p>#114, Platinum Square, </p> 
          <p>Near Hyatt Regency,Viman Nagar,</p>
          <p  className='pb-10'>  Pune, Maharashtra, India</p>
    </div>
  </div>  
</div>

<div className="bg-slate-200 rounded-full rounded-tl-full shadow-lg mx-4 p-4 mr-10 relative">
    <img
    src="/australia.png"
    alt="Sample Image 2"
    className="xl:w-32 xl:h-32 h-40 ml-48  xl:pt-10"
   />
   <div>
     <div className='flex text-center text-2xl xl:pt-5'>
      <p className="px-4 ml-48 py-2 bg-yellow-200 text-xl text-violet-950 font-bold rounded-lg">
      AUSTRALIA
      </p>
     </div>
         <p className="text-violet-950   text-2xl font-sans font-bold mt-3 ml-20 ">RBK International (Australia) Pty Ltd</p>
       <div  className="text-violet-950 ml-20 mr-20  text-xl ">
          <p>+61283810677</p>
          <p>info@rbkinternational.net.au</p>
          <p>www.rbkinternational.net.au</p>
          <p> 66 Bermbing Street The Ponds NSW 2769</p> 
          <p> Sydney, Australia.</p>
   </div>
  </div>  
</div>
</div>

<div className="flex flex-col xl:justify-center xl:flex-row mt-10">
<div className="bg-slate-200 rounded-full rounded-tl-full shadow-lg mx-4 p-4 ml-10 relative">
    <img
    src="/canada.jpg"
    alt="Sample Image 2"
    className="xl:w-32 xl:h-24 rounded-sm h-40 ml-52  xl:pt-10 "
   />
   <div>
     <div className='flex text-center text-2xl xl:pt-5'>
      <p className="px-4 ml-52 py-2 bg-yellow-200 text-xl text-violet-950 font-bold rounded-lg">
      CANADA
      </p>
     </div>
         <p className="text-violet-950   text-2xl font-sans font-bold mt-3 ml-20 ">RBK Global Canada Limited</p>
       <div  className="text-violet-950 ml-16 mr-20 text-xl ">
          <p >+1-647-493-7477</p>
          <p >info@rbkglobal.ca</p>
          <p>rbkglobal.ca</p>
          <p className='pb-10'>Willowmount DR Toronta ON M1L 1Y1 Canada</p> 
    </div>
  </div>  
</div>

<div className="bg-slate-200 rounded-full rounded-tl-full shadow-lg mx-4 p-4 mr-10 relative">
    <img
    src="/netherlands.png"
    alt="Sample Image 2"
    className="xl:w-32 xl:h-24 rounded-sm h-40 ml-52  xl:pt-10"
   />
   <div>
     <div className='flex text-center text-2xl xl:pt-5'>
      <p className="px-4 ml-48 py-2 bg-yellow-200 text-xl text-violet-950 font-bold rounded-lg">
      NETHERLANDS
      </p>
     </div>
         <p className="text-violet-950   text-2xl font-sans font-bold mt-3 ml-20   ">RBK International Netherlands B.V.</p>
       <div  className="text-violet-950 ml-20 mr-20  text-xl ">
          <p>+31 (0) 132 200 079 |+31-68-430-4105</p>
          <p>info@rbkinternational.nl</p>
          <p>www.rbkinternational.nl</p>
          <p>Gustav Mahlerplein 2,1082 MA, </p>
            <p className='pb-10'>AmsterdamThe Netherlands</p> 
   </div>
  </div>  
</div>
</div>

<div className="flex flex-col xl:justify-center xl:flex-row mt-10">
<div className="bg-slate-200 rounded-full rounded-tl-full shadow-lg mx-4 p-4 ml-10 relative">
    <img
    src="/benin.png"
    alt="Sample Image 2"
    className="xl:w-32 xl:h-24 rounded-sm h-40 ml-48  xl:pt-10 "
   />
   <div>
     <div className='flex text-center text-2xl xl:pt-5'>
      <p className="px-4 ml-52  py-2 bg-yellow-200 text-xl text-violet-950 font-bold rounded-lg">
      BENIN
      </p>
     </div>
         <p className="text-violet-950   text-2xl font-sans font-bold mt-3 ml-28 ">RBK International Benin SARL</p>
       <div  className="text-violet-950 ml-28 mr-20 text-xl ">
          <p >+229 53009905 | +229 52700005</p>
          <p >info@rbkinternational.com.bj</p>
          <p>www.rbkinternational.com.bj</p>
          <p>Littoral , Cotonou 11th Arrondissement ,</p> 
          <p> Gbegamey TF 535 , A Maison Yamadjako </p>
          <p className='pb-10'>Immaculee.</p>
    </div>
  </div>  
</div>

<div className="bg-slate-200 rounded-full rounded-tl-full shadow-lg mx-4 p-4 mr-10 relative">
    <img
    src="/hong-kong.png"
    alt="Sample Image 2"
    className="xl:w-32 xl:h-24 h-40 ml-52  xl:pt-10 rounded-sm"
   />
   <div>
     <div className='flex text-center text-2xl xl:pt-5'>
      <p className="px-4 ml-48 py-2 bg-yellow-200 text-xl text-violet-950 font-bold rounded-lg"> 
      HONG KONG
      </p>
     </div>
         <p className="text-violet-950   text-2xl font-sans font-bold mt-3 ml-28 ">RBK Global (HK) Limited</p>
       <div  className="text-violet-950 ml-28 mr-28 text-xl ">
          <p>+85235496513 | +85294105677</p>
          <p>info@rbkinternational.com.hk</p>
          <p>info@rbkinternational.com.hk</p>
          <p>Unit 609, 6/GF Hong Kong Plaza 188</p> 
          <p className='pb-10'>Connaught Road West Hong Kong.</p>
   </div>
  </div>  
</div>
</div>

<div className="flex flex-col xl:justify-center xl:flex-row mt-10">
<div className="bg-slate-200 rounded-full rounded-tl-full shadow-lg mx-4 p-4 ml-10 relative">
    <img
    src="/mauritius.png"
    alt="Sample Image 2"
    className="xl:w-32 xl:h-24 rounded-sm h-40 ml-52  xl:pt-10 "
   />
   <div>
     <div className='flex text-center text-2xl xl:pt-5'>
      <p className="px-4 ml-48  py-2 bg-yellow-200 text-xl text-violet-950 font-bold rounded-lg">
      MAURITIUS
      </p>
     </div>
         <p className="text-violet-950   text-2xl font-sans font-bold mt-3 ml-28 ">RBK International Mauritius Ltd</p>
       <div  className="text-violet-950 ml-28 mr-20 text-xl ">
          <p >+230 58947748</p>
          <p >info@rbkinternational.com.mu</p>
          <p>www.rbkinternational.com.mu</p>
          <p>Freeport Operations (Mauritius) Limited,</p> 
          <p className='pb-10'>Freeport Zone 7, Mer-Rouge, 1112-07 Mauritius.</p>
    </div>
  </div>  
</div>

<div className="bg-slate-200 rounded-full rounded-tl-full shadow-lg mx-4 p-4 mr-10 relative">
    <img
    src="/togo.png"
    alt="Sample Image 2"
    className="xl:w-32 xl:h-24 rounded-sm h-40 ml-48  xl:pt-10"
   />
   <div>
     <div className='flex text-center text-2xl xl:pt-5'>
      <p className="px-4 ml-52  py-2 bg-yellow-200 text-xl text-violet-950 font-bold rounded-lg">
      TOGO
      </p>
     </div>
         <p className="text-violet-950   text-2xl font-sans font-bold mt-3 ml-28 ">RBK INTERNATIONAL TOGO SARL</p>
       <div  className="text-violet-950 ml-28 mr-32  text-xl ">
          <p>+228 93527224</p>
          <p>togo@rbkinternational.com</p>
          <p>Rue AFLAO GAKLI, AGBALEPEDOGAN,</p>
          <p> LOME, TOGO, 13 BP 589</p> 
   </div>
  </div>  
</div>
</div>


<div className="flex flex-col xl:justify-center xl:flex-row mt-10 mb-20">
<div className="bg-slate-200 rounded-full rounded-tl-full shadow-lg mx-4 p-4 ml-10 relative">
    <img
    src="/mozambique.png"
    alt="Sample Image 2"
    className="xl:w-32 xl:h-24 rounded-sm h-40 ml-52  xl:pt-10 "
   />
   <div>
     <div className='flex text-center text-2xl xl:pt-5'>
      <p className="px-4 ml-48 py-2 bg-yellow-200 text-xl text-violet-950 font-bold rounded-lg">
      MOZAMBIQUE
      </p>
     </div>
         <p className="text-violet-950   text-2xl font-sans font-bold mt-3 ml-20 ">RBK INTERNATIONAL MOZAMBIQUE LIMITADA</p>
       <div  className="text-violet-950 ml-20 mr-28 text-xl ">
          <p >+258 84 601 9260</p>
          <p >Mozambique@rbkinternational.com</p>
          <p className='pb-10'>MOHAMOD ASSIF ZACARIS IDRIS MOZAMBIQUE</p>
    </div>
  </div>  
</div>

<div className="bg-slate-200 rounded-full rounded-tl-full shadow-lg mx-4 p-4 mr-10 relative">
    <img
    src="/madagascar.png"
    alt="Sample Image 2"
    className="xl:w-32 xl:h-24 rounded-sm h-40 ml-52    xl:pt-10"
   />
   <div>
     <div className='flex text-center text-2xl xl:pt-5'>
      <p className="px-4 ml-48  py-2 bg-yellow-200 text-xl text-violet-950 font-bold rounded-lg">
      MADAGASCAR
      </p>
     </div>
         <p className="text-violet-950   text-2xl font-sans font-bold mt-3 ml-20 ">RBK INTERNATIONAL MADAGASCAR LTD</p>
       <div  className="text-violet-950 ml-20   text-xl ">
          <p>+261349889536</p>
          <p>madagascar@rbkinternational.com</p>
          <p>LOT 583 RDC 67 HA Centre Quest Antananarivo Madagascar</p>
   </div>
  </div>  
</div>
</div>

</>
        
    );
}

export default ContactForm;





