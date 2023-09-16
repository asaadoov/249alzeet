import React from 'react';
import logo from "../assets/logo_t.png";

const Footer = () => {
  return (
    <footer className='w-full flex justify-center items-center flex-col py-3 mt-6' dir="rtl">
      <p className='text-gray-600'>هذا المنتج مقدم من <span className='font-bold orange_gradient'>249Technologies</span></p>
      <div className="w-full flex justify-center items-center flex-col py-3 mt-6" dir="rtl">
          {/* <a href="/terms" className="text-blue-500 hover:underline mr-4">الشروط والأحكام</a> */}
          <span><a href="/terms" className="text-blue-500 hover:underline mr-4">الشروط والأحكام</a></span>
          <span><a href="/privacy" className="text-blue-500 hover:underline">الخصوصية</a></span>
      </div>
    </footer>
  );
};

export default Footer;
