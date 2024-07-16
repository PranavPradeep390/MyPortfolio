import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { IoLogoIonic } from "react-icons/io5";
import { RiRoadMapFill } from "react-icons/ri";
import { IoCallSharp } from "react-icons/io5";
import { IoSend } from "react-icons/io5";

export const Contact = () => {
  const form = useRef();
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    const formElements = form.current.elements;
    const userName = formElements.user_name.value.trim();
    const userEmail = formElements.user_email.value.trim();
    const userMessage = formElements.message.value.trim();

    if (!userName || !userEmail || !userMessage) {
      setMessage('Please fill all fields');
      return;
    }

    emailjs
      .sendForm('service_55pr3eb', 'template_r3f03pi', form.current, 'bSJ3juf-APE3Sp7Fj')
      .then(
        () => {
          setMessage('Message sent successfully!');
        },
        (error) => {
          setMessage(`FAILED... ${error.text}`);
        },
      );
  };

  return (


<>
    <div className='animated-bar'></div>
  <div className='flex flex-wrap p-4 md:p-10 md:gap-8 justify-center'>
  
        <form ref={form} onSubmit={sendEmail} className=' w-full lg:w-[53%]'>
        <h1 className='font-semibold text-[27px] md:text-[30px] mb-5 font_main'>Message Me</h1>
          <input className=' p-2 w-full bg-[]   h-12 rounded outline-none mb-4 mt-2 placeholder:p-2' type="text" name="user_name" placeholder='Your Name'/>
    
          <input className=' p-2 w-full bg-[] h-12 rounded outline-none mb-4 mt-2 placeholder:p-2' type="email" name="user_email" placeholder='Your Email'/>
    
          <textarea className=' p-2 w-full bg-[]  h-24 rounded outline-none mb-4 mt-2 placeholder:p-2' name="message" placeholder='Your Message Goes Here' />
    
          <button type="submit" value="Send" className='mx-auto md:w-34 bg-[#009e66] px-4 py-3 rounded font-semibold font_main text-[14px] text-white'>Send Message</button>
    
          <div className='h-12'>{message && <p className=' text-red-500 font_main text-[14px] pt-3 md:text-[18px] font-semibold'>{message}</p>}</div>
  
        </form>
  
        <div className='w-full lg:w-[44%] mt-2 md:mt-0'>
        <div>
          <h1 className='text-[27px] md:text-[30px] font-semibold font_main mb-5'>Contact Info</h1>
          <p className='font-normal text-[14px] md:text-[16px] leading-6 font_main text-[#7a7878]'>Always available for freelance work if the right project comes along, Feel free to contact me!</p>
        </div>
        <div className='flex items-center mt-5'>
          <div className='flex-col me-5 mb-4'>
          <IoLogoIonic  className='text-[32px] text-[#009e66] my-[30px]'/>
          <RiRoadMapFill  className='text-[32px] text-[#009e66] my-[30px]'/>
          <IoCallSharp  className='text-[32px] text-[#009e66] my-[30px]'/>
          <IoSend  className='text-[32px] text-[#009e66] my-[30px]'/>
          </div>
          <div className='border-l-2 border-[#009e66] ps-5'>
          <div>
            <p className='font-semibold text-[17px] font_main'>Name</p>
            <p className='font-normal text-[16px] font_main mb-[13px] text-[#7a7878]'>Pranav Pradeep</p>
          </div>
          <div>
            <p className='font-semibold text-[17px] font_main'>Location</p>
            <p className='font-normal text-[16px] font_main mb-[13px] text-[#7a7878]'>Kochi, Ernakulam</p>
          </div>
          <div>
           <p className='font-semibold text-[17px] font_main'>Call Me</p>
           <p className='font-normal text-[16px] font_main mb-[13px] text-[#7a7878]'>7736634272</p>
          </div>
          <div>
           <p className='font-semibold text-[17px] font_main'>Email</p>
           <p className='font-normal text-[16px] font_main mb-[13px] text-[#7a7878]'>pranavpradeep786@gmail.com</p>
          </div>
          </div>
         
        </div>
  
        </div>
  </div>
</>

  );
};
