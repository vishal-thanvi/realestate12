;
import Socialicons from '@/components/Socialicons';
import React from 'react';
const AgentInfo = ({id,name,type,mobileNo,whatsupNo,skype,image}) => {
  console.log(name)
  return (
    <div className='bg-[#f9faff]'>
      <section className="text-gray-600 body-font pt-3 overflow-hidden">
        <div className="container px-3 pb-10 mx-auto">
          <div className="mx-auto flex flex-wrap">
            <div className='w-full lg:w-2/4 mb-5 lg:mb-0'>
              <img alt="ecommerce" className="w-full  object-contain  rounded-3xl" src={image} />
              <div className='flex flex-row md:flex-row gap-3 pt-4 w-full'>
                <button type='phone' className='bg-blue-900 w-1/2 md-lg:w/2/3 text-white  px-3 md:px-6 lg:px-3 justify-center text-[14px] md:text-[16px] lg:text-[18px] font-bold rounded-3xl flex items-center  hover:bg-blue-800'>
                  <img src='/Images/call.png' alt="icon" className='h-5' /><h1>call +0 123456789</h1>
                </button>
                <button type='email' className='bg-blue-400 w-1/2  md-lg:w-2/3 text-white py-2 px-6 md:px-6 lg:px-3 justify-center text-[14px] md:text-[16px] lg:text-[18px] border-none outline-blue-300 font-bold rounded-3xl flex items-center gap-2 hover:bg-blue-300'>
                  <img src='/Images/email.png' alt="icon" className='h-6' /><h1 className='mx-1'>Send Email</h1>
                </button>
              </div>
            </div>

            <div className="lg:w-2/4 w-full lg:pl-10 pt-5 md:pt-0 lg:mt-0">
              <h1 className="title-font text-[20px] md:text-[25px] font-bold text-blue-900">{name}</h1>
              <div className="leading-relaxed flex text-black text-[15px]">
                {type}
              </div>

              <div>
                <div className='flex gap-3 pt-4 items-center'>
                  <div className='bg-gray-300 rounded-full p-1'>
                    <img src="/Images/agent-call.png" alt="" />
                  </div>
                  <span className='text-black'>{mobileNo}</span>
                </div>
                <div className='flex gap-3 pt-4 items-center'>
                  <div className='bg-gray-300 rounded-full p-1'>
                    <img src="/Images/agent-wp.png" className='h-6' alt="" />
                  </div>
                  <span className='text-black'>{whatsupNo}</span>
                </div>
                <div className='flex gap-3 pt-4 items-center'>
                  <div className='bg-gray-300 rounded-full p-1'>
                    <img src="/Images/agent-email.png" alt="" className='h-6' />
                  </div>
                  <span className='text-black'>info@realestate.com</span>
                </div>
                <div className='flex gap-3 pt-4 items-center'>
                  <div className='bg-gray-300 rounded-full p-1'>
                    <img src="/Images/agent-call.png" alt="" />
                  </div>
                  <span className='text-black'>{skype}</span>
                </div>

                <div className='w-2/3 pt-5'>
                <Socialicons/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AgentInfo;
