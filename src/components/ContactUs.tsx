
import React, { useRef, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import Magnetar from '../assets/Magnetar.png';



  import { useState } from 'react';

  export const ContactUs: React.FC = () => {
    const form = useRef<HTMLFormElement>(null);
    const [showPopup, setShowPopup] = useState(false);

    const sendEmail = (e: FormEvent) => {
      e.preventDefault();

      if (form.current) {
        emailjs
          .sendForm('service_4kmqpma', 'template_qhchncq', form.current, {
            publicKey: 'x4ZuPFLT_ZHza0zFk',
          })
          .then(
            (result) => {
              console.log(result);
              setShowPopup(true);
              setTimeout(() => setShowPopup(false), 3000); // hide popup after 3 seconds
            },
            (error: Error) => {
              console.log('FAILED...', error.message);
            },
          );
      }
    };

    return (
      <div className=" py-10 bg-yellow-100">
        <p className="font-Acme px-20 text-[40px]">Contact Us</p>
        
        <div className='flex'>
        <form ref={form} onSubmit={sendEmail} className="flex   text-lg">

      <div className='flex flex-col w-[800px]'>
      <div className="flex flex-col gap-1 px-44 w-[800px] ">
          <label className="mt-4 font-bold font-another-font" >Name</label>
          <input placeholder='Enter your name . . . . .' type="text" name="user_name" className="font-another-font w-full h-11 px-2 outline-none rounded border border-gray-300 focus:border-green-400 text-[15px]" />
          <label className="mt-4 font-bold font-another-font">Email</label>
          <input placeholder='Enter your Email-ID . . . . .'  type="email" name="user_email" className=" font-another-font w-full h-11 px-2 outline-none rounded border border-gray-300 focus:border-green-400 text-[15px]" />
          <label className="mt-4 font-bold font-another-font">Message</label>
          <textarea placeholder='Type here . . . . .'  name="message" className="font-another-font w-full h-24 px-2 outline-none rounded border border-gray-300 focus:border-green-400 text-[15px]" />
          </div> 
        <input type="submit"  value="Send" className=" font-another-font font-bold mr-80 ml-80  mt-8 py-1 px-10 cursor-pointer bg-orange-500 text-white border-none rounded-full hover:bg-gray-600" />
      </div>
        <div className="size-[400px] flex items-center justify-center ml-28 -mt-10 ">
          <img className='transition-transform duration-500 ease-in-out hover:scale-110' src={Magnetar} alt="" />
        </div>
        </form>
        
        </div>
        
        {showPopup && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-4 rounded-full">
              <p className="text-xl font-another-font px-2 ">Message sent successfully!</p>
            </div>
          </div>
        )}
        
      </div>
    );
  };

