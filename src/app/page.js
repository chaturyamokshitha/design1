
import Image from "next/image";
import Frame3 from "/public/Frame 3.jpg"; // Import the image from the public folder
import Frame23 from "/public/Frame 23.jpg";
import { Inter } from 'next/font/google';
import Arrow from "/public/arrow.svg";
import Group1 from "/public/Group 1.svg";
import Group2 from "/public/Group 2.svg";
import Group10 from "/public/Group 10.svg";
import { Handlee } from 'next/font/google';
import Feature from "./featureprojects";
import Work from "./work";
import Contact from "./contact";

const handlee = Handlee({ subsets: ['latin'], weight: '400' });
const inter = Inter({ subsets: ['latin'] });
export default function Home() {
  return (
    <div className={inter.className}>
    


      <div className="text-black flex justify-end mr-52 mt-10">
        <ul className="flex space-x-10 mr-16">
          <li><Image src={Frame3} alt="Frame 3" width={106} height={30} className="mr-10"/></li>
          <li className="pt-2 ml-52">Portfolio</li>
          <li className="pt-2 ml-6">Hire Me</li></ul> 
      </div>
      <Image src={Frame23} alt="Frame 23" width={340.92} height={140.89} className="" />
      <div className="flex justify-between mt-10">
       
        <div>
         
          <h1 className="font-bold text-black text-5xl ml-6 font-inter">I design top<br></br>
             notch websites</h1>
        </div>

        <div className="">
          <h2 className="text-black text-xl mr-52">I’ll design your website and will develop to<br></br>
            land it on internet using No-code.
          </h2>
          <button className="bg-black pt-4 pb-4 pr-12 pl-12 mt-6 text-center">Hire me</button>
        </div>
      </div>

      <div className="mt-20">
        <h2 className={`${handlee.className} bg-[#FFC9F0] ml-16 text-black inline-block text-2xl`}>
          What I do?
        </h2>
        <Arrow className="ml-16 mt-4" />
        <div className="flex gap-6 mt-10">

         
          <div className="bg-[#FFE68C] p-10 border-4 border-[#EECD56] rounded-lg shadow-lg transform -rotate-6 mr-8 h-[500px] w-[400px]">
            <span className={`${handlee.className} absolute top-2 left-2 bg-[#9DDCFF] text-black  text-2xl`} style={{ fontWeight: 900 } }>Pen/Paper</span>
            <Group1 className="mb-4 mt-40"/>
            <p className="text-black font-semibold text-3xl">User Research <br></br>Design</p>
          </div>

          
          <div className="bg-[#9DDCFF] p-10 border-4 border-[#5AB5E8] rounded-lg shadow-lg transform rotate-6 mr-8 w-[400px]">
            <span className={`${handlee.className} absolute top-2 right-2 bg-[#FFC9F0] text-black  text-2xl `} style={{ fontWeight: 600 } }>Figma</span>
            <Group2  className="mb-4 mt-40"/>
            <p className="text-black font-semibold text-3xl">UI & Product Design</p>
          </div>

     
          <div className="bg-[#FFC9F0] p-10 border-4 border-[#F384D4] rounded-lg shadow-lg transform -rotate-6 w-[400px]">
            <span className={`${handlee.className} font-extrabold absolute top-2 right-2 bg-[#FFE68C] text-black  text-2xl`}style={{ fontWeight: 900 }}>Webflow</span>
            <Group10 className="mb-4 mt-40"/>
            <p className="text-black font-semibold text-3xl">No-code <br></br>Development</p>
          </div>
        </div>

      </div>
      <Feature/>
      <Work/>
      <Contact/>
   </div>
   

  );
}
