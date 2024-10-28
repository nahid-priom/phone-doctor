import React from 'react';
import { Link } from 'react-router-dom';


const oilBurners = [
  {
    id: 1,
    name: 'Oil Burner 1',
    image: 'https://assets.holyart.it/images/BI000198/us/500/A/SN052962/CLOSEUP02_HD/h-29c7ab87/essential-oil-burner-black-10-cm.jpg',
  },
  {
    id: 2,
    name: 'Oil Burner 2',
    image: 'https://m.media-amazon.com/images/I/81ODsEEuT2L.jpg',
  },
  {
    id: 3,
    name: 'Oil Burner 3',
    image: 'https://sites.create-cdn.net/siteimages/64/0/2/640292/20/6/5/20657555/1000x1000.jpg?1692961698',
  },
  {
    id: 4,
    name: 'Oil Burner 4',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQouqoJm9Pq2t1DH3_2CgcluGDlF9NylK98PteaK7nkehF_ibP2bWXwTykZwX0mwkN3PTg&usqp=CAU',
  },
];

const soapButter = [
  {
    id: 1,
    name: 'Shea Soap 1',
    image: "https://onewithnature.com/wp-content/uploads/2016/05/DeadSeSalt-1-touchup_12-11-23.png",
  },
  {
    id: 2,
    name: 'Shea Butter 1',
    image: 'https://onewithnature.com/wp-content/uploads/2016/05/Sulfur_Chamomile-1-touchup_12-11-23.png',
  },
  {
    id: 3,
    name: 'Shea Soap 2',
    image: 'https://onewithnature.com/wp-content/uploads/2016/05/VanillaOatmeal-1-touchup_12-11-23.png',
  },
  
  {
    id: 4,
    name: 'Shea Butter 2',
    image: 'https://onewithnature.com/wp-content/uploads/2016/05/VanillaOatmeal-1-touchup_12-11-23.png',
  },
  
];
const bodyOils = [
    {
      id: 1,
      name: 'Body Oil 1',
      image: 'https://www.othosbrand.com/cdn/shop/products/citrus-removebg-preview_2048x.png?v=1639439855',
    },
    {
      id: 2,
      name: 'Body Oil 2',
      image: 'https://www.othosbrand.com/cdn/shop/products/mint-removebg-preview_1200x1200.png?v=1639439855',
    },
    {
      id: 3,
      name: 'Body Oil 3',
      image: 'https://images.summitmedia-digital.com/female/images/2021/03/29/ulap.jpg',
    },
    {
      id: 4,
      name: 'Body Oil 4',
      image: 'https://images.summitmedia-digital.com/female/images/2021/03/29/ulap.jpg',
    },
  ];

const BodyOils = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-10 lg:pt-44 bg-red-50 pt-36 pb-6 lg:pb-32">
        <div id="animatedDiv" className="max-w-7xl mx-auto  gap-x-12 items-center justify-between overflow-hidden md:flex md:px-8">
          <div className="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl">
            <h2 className="text-4xl text-center md:text-start font-extrabold md:text-5xl">
              BODY OILS & INCENSE
            </h2>
            <p className="text-center text-gray-600 md:text-start">
              You can find Over 300 Imported Body Oils and Premium Incense inside Phone Spot. Whether you are looking for specific body oil, essential oil, or Burner Oils, you can find it all inside Phone Spot.
            </p>
            <div className="items-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
              <Link to="/contact" className="flex items-center bg-red-600 justify-center gap-x-2 py-2 px-4 text-white hover:text-gray-500 font-medium duration-150 active:bg-gray-100 border rounded-lg md:inline-flex">
                Call Now
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                  <path
                    fillRule="evenodd"
                    d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
          <div className="flex-none mt-14 md:mt-0 md:max-w-xl opacity-100 transform translate-y-4 md:translate-y-0 md:opacity-100 md:translate-x-4 transition-all duration-1000 delay-1000">
            <img
              src="https://static.wixstatic.com/media/99b596_a2e5f1b05aa5463ca1af354fe9adab15~mv2.jpeg/v1/fill/w_640,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/99b596_a2e5f1b05aa5463ca1af354fe9adab15~mv2.jpeg"
              className="md:rounded-[108px]"
              alt="Body Oils and Incense"
            />
          </div>
        </div>
      </section>

      {/* Oil Burners Section */}
      <section className="py-10 bg-red-100">
        <div className="max-w-7xl mx-auto  gap-x-12 items-center justify-between md:px-8">
          <div className="space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl">
            <h2 className="text-4xl text-center md:text-start  font-extrabold md:text-5xl">
              OIL BURNERS
            </h2>
            <p className="text-center text-gray-700 md:text-start">
              Explore our wide range of oil burners that perfectly complement our premium oils. Find the one that suits your style.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 px-4">
            {oilBurners.map((burner) => (
              <div key={burner.id} className="bg-white p-4 rounded-lg shadow-lg">
                <img src={burner.image} alt={burner.name} className="w-full h-48 object-contain rounded-lg" />
                <h3 className="mt-4 text-lg font-bold text-black">{burner.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Body Oils Section */}
      <section className="py-10 bg-red-50">
        <div className="max-w-7xl mx-auto  gap-x-12 items-center justify-between md:px-8">
          <div className="space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl">
            <h2 className="text-4xl text-center md:text-start  font-extrabold md:text-5xl">
              BODY OILS
            </h2>
            <p className="text-center text-gray-600 md:text-start">
              Discover our curated selection of premium body oils, perfect for all your aromatherapy and skincare needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 px-4">
            {bodyOils.map((oil) => (
              <div key={oil.id} className="bg-white p-4 rounded-lg shadow-lg">
                <img src={oil.image} alt={oil.name} className="w-full h-48 object-contain rounded-lg" />
                <h3 className="mt-4 text-lg font-bold text-black">{oil.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
       {/* Shea Butter Section */}
       <section className="py-10 bg-red-100">
        <div className="max-w-7xl mx-auto  gap-x-12 items-center justify-between md:px-8">
          <div className="space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl">
            <h2 className="text-4xl text-center md:text-start  font-extrabold md:text-5xl">
            SHEA SOAP & BUTTER
            </h2>
            <p className="text-center text-gray-600 md:text-start">
            Nourish your skin with our rich collection of Shea Soap and Butter. Perfect for deep hydration and gentle care.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 px-4">
            {soapButter.map((soap) => (
              <div key={soap.id} className="bg-white p-4 rounded-lg shadow-lg">
                <img src={soap.image} alt={soap.name} className="w-full h-48 object-contain rounded-lg" />
                <h3 className="mt-4 text-lg font-bold text-black">{soap.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default BodyOils;
