import Arrow from "/public/arrow.svg";
import Image from "next/image";
import { Handlee } from 'next/font/google';
import C1 from "/public/c1.svg";
import C2 from "/public/c2.svg";
import C3 from "/public/c3.svg";
import C4 from "/public/c4.svg";
const handlee = Handlee({ subsets: ['latin'], weight: '400' });
const FeauturedProjects = () => {
    return (
        <div className="mt-52 text-black text-2xl grid grid-cols-3 gap-8 mr-28 mb-20">
            <div className="mt-32 ml-20">
                <h2 className={`${handlee.className} text-3xl bg-[#FFC9F0] inline-block`} style={{ fontWeight: 600 }}>Featured Projects</h2>
                <Arrow className="ml-40 transform -rotate-45 mt-10 mb-10"/>
                <p>Have designed morethan <br></br>20 projects</p>
            </div>
            <div className=" border-2 border-black rounded-md items-center justify-center flex flex-col ">
                <div>
                    <Image src="/img1.png" alt="Image 2" width={360} height={300} className="" />
                </div>
              
                <div className="flex p-4">
                    <h2 className={`${handlee.className} mr-10`} style={{ fontWeight: 600 }}>4 Style portfolio <br></br> designs</h2>
                    <C1/>
                    <button className="bg-[#F072CD] border-2 border-[#DB4A90] px-6 py-2 rounded-full text-white text-lg  hover:bg-[#DB4A90]">
                        No-Code
                    </button>

                </div>

            </div>
            <div className="p-2 border-2 border-black rounded-md items-center justify-center flex flex-col ">
                <div> <Image src="/img2.jpg" alt="Image 2" width={360} height={300} /></div>
                <div className="flex p-4">
                    <h2 className={`${handlee.className} mr-10`} style={{ fontWeight: 600 }}>Color System <br></br>for app</h2>
                    <C2 />
                    <button className="bg-[#5AB5E8] border-2 border-[#1C6AB1] px-6 py-2 rounded-full text-white text-lg">UI Design</button>
                </div>
            </div>
            <div></div>
            <div className="p-2 border-2 border-black rounded-md items-center justify-center flex flex-col">
                <div> <Image src="/img3.jpg" alt="Image 2" width={360} height={300} /></div>
                <div className="flex p-4">
                    <h2 className={`${handlee.className} mr-10`} style={{ fontWeight: 600 }}>Onboarding <br></br>Screen Process</h2>
                    <C4 />
                    <button className="bg-[#E5C141] border-2 border-[#BB9C2A] px-6 py-2 rounded-full text-white text-lg">UX Design</button>
                </div>
            </div >
            <div className="p-2 border-2 border-black rounded-md items-center justify-center flex flex-col">
                <div><Image src="/img4.png" alt="Image 2" width={360} height={300} /></div>
                <div className="flex p-4 flex-row  ">
                    <h2 className={`${handlee.className} mr-10`} style={{ fontWeight: 600 }}>Finance Landing <br></br>Page</h2>
                    <C3 />
                    <button className="bg-[#7CF072] border-2 border-[#4ED543] px-6 py-2 rounded-full text-white text-lg">UI Design</button>
                </div>
            </div>

        </div>
    );
}

export default FeauturedProjects;