import Image from "next/image";
import A1 from "/public/a1.svg";
import { Handlee } from 'next/font/google';

const handlee = Handlee({ subsets: ['latin'], weight: '400' });

const Work = () => {
    return (
        <div className="mt-20 text-black  flex flex-row justify-between gap-8 mr-28 mb-20 bg-white p-8  relative">
            {/* Left Section */}
            <div className="absolute inset-0 bg-[radial-gradient(#000000_1px,transparent_1px)] bg-[length:10px_10px] opacity-10 pointer-events-none"></div>

            <div className=" flex flex-col justify-start items-center relative">
                <h2 className={`${handlee.className} text-3xl bg-[#FFC9F0] inline-block px-4 py-2 `} style={{ fontWeight: 600 }}>
                    Work Experience
                </h2>
                <div className="mt-8 ml-52 mb-8">
                    <A1 />
                </div>
                <p className="mt-4 text-center text-2xl leading-6">Have been designing<br />since my past 4 years</p>
            </div>

            {/* Right Section */}
            <div className=" flex flex-col gap-8 mr-56">
                {/* Row 1 */}
                <div className="flex flex-row items-start gap-4">
                    <div className={`${handlee.className} h-[80px] w-[100px] flex justify-center items-center text-3xl mr-8 bg-[#FCEC9A] rounded-md shadow-md`}>
                        1
                    </div>
                    <div>
                        <h2 className="font-semibold text-lg">Design intern at <span className="font-bold">Google</span></h2>
                        <h3 className="text-sm text-gray-600">Worked on design system at Material 3 designs</h3>
                        <span className="text-sm text-gray-400">20, April 2021</span>
                    </div>
                </div>

                {/* Row 2 */}
                <div className="flex flex-row items-start gap-4">
                    <div className={`${handlee.className} h-[80px] w-[100px] flex justify-center mr-8 items-center text-3xl bg-[#AEE3F5] rounded-md shadow-md`}>
                        2
                    </div>
                    <div>
                        <h2 className="font-semibold text-lg">Sr. UI/UX Designer at <span className="font-bold">Microsoft</span></h2>
                        <h3 className="text-sm text-gray-600">Worked on design system at Material 3 designs</h3>
                        <span className="text-sm text-gray-400">20, April 2022</span>
                    </div>
                </div>

                {/* Row 3 */}
                <div className="flex flex-row items-start gap-4">
                    <div className={`${handlee.className} h-[80px] w-[100px] flex justify-center mr-8 items-center text-3xl bg-[#FFC9F0] rounded-md shadow-md`}>
                        3
                    </div>
                    <div>
                        <h2 className="font-semibold text-lg">Software Engineer at <span className="font-bold">SASS Startup</span></h2>
                        <h3 className="text-sm text-gray-600">Worked on design system at Material 3 designs</h3>
                        <span className="text-sm text-gray-400">20, April 2023</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Work;
