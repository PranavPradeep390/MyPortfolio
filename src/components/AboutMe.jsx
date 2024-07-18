import React from 'react'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

function AboutMe() {

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = 'https://drive.google.com/uc?export=download&id=1GY4StVpdTcsUxtdsLYYTUmyAdmBOg6Zs';
        link.download = 'PranavPradeepResume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };

  return (
    <div className='mt-12 p-4 md:p-10 text-white'>
        <div className='text-center'>
        <p className='font-normal text-[12px] md:text-[16px] leading-6 font_main text-[#7a7878] font_main pt-6'>Get to know me</p>
        <p className='text-[30px] md:text-[46px] font_main font-bold underline-with-space text-white'>About Me</p>
        </div>
        <div className='flex flex-wrap gap-14 p-2 md:p-14 mt-10 md:mt-0 md:items-center'>
            <div className='w-full md:w-[40%]'>
                <img className='mx-auto w-[50%] md:w-full md:h-full rounded-[40%] md:rounded-none' src="https://kaleidoscopic-pie-2341a3.netlify.app/template/img/info-img.jpg" alt="NA" />
            </div>
            <div className='w-full md:w-[55%]'>
                <p className='text-[#009e66] font-normal text-[18px] md:text-[25px] font_main mb-4'>Who am i?</p>
                <p className='font-bold font_main text-[20px] md:text-[30px] mb-4'>I'm Pranav Pradeep, a visual UX/UI Designer and Web Developer</p>
                <p className='text-[#7a7878] font_main leading-7 text-[14px] font-medium'>I am a freelancer based in the United Kingdom and i have been building noteworthy UX/UI designs and websites for years, which comply with the latest design trends. I help convert a vision and an idea into meaningful and useful products. Having a sharp eye for product evolution helps me prioritize tasks, iterate fast and deliver faster.</p>

                <hr className='border-1 border-[#009e66] my-8' />

                <div className='flex w-full md:gap-4 md:w-[80%] justify-between mb-8'>
                   <div>
                        <p className='font_main text-[12px] md:text-[17px]'>Name :<span className='text-[#009e66] font-light'> Pranav Pradeep</span></p>
                        <br />
                        <p className='font_main text-[12px] md:text-[17px]'>Age :<span className='text-[#009e66] font-light'> 23</span></p>
                   </div>
                    <div>
                        <p className='font_main text-[12px] md:text-[17px]'>Email : <span className='text-[#009e66] font-light'>pranavpradeep@gmail.com</span></p>
                        <br />
                        <p className='font_main text-[12px] md:text-[17px]'>From :<span className='text-[#009e66] font-light'> Angamaly,Ernakulam</span></p>

                    </div>
                </div>
                <div className='flex items-center justify-between w-full md:w-[64%]'>
                <div><button  onClick={handleDownload} className='mx-auto w-28 md:w-44 bg-[#009e66] px-4 py-3 rounded font-semibold font_main text-[10px] md:text-[14px] text-white'>Download Resume</button></div>

                <div className='w-[50px] md:w-[90px]'><hr className='border-1 border-[#7a7878]'/>
                </div>
                <div>
                <a href='' target='_blank'><FacebookRoundedIcon className='mb-1 me-2  text-[#7a7878]'/></a>
                <a href='' target='_blank'><WhatsAppIcon className='mb-1 me-2 text-[#7a7878]'/></a>
                <a href='' target='_blank'><LinkedInIcon className='mb-1 me-2 text-[#7a7878]'/></a>
                <a href='' target='_blank'><InstagramIcon className='mb-1 text-[#7a7878]'/></a>
       
                </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default AboutMe