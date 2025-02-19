import { Handlee } from 'next/font/google';
import A1 from "/public/a1.svg";
import Image from "next/image";

const handlee = Handlee({ subsets: ['latin'], weight: '400' });

const Contact = () => {
    return (
        <div className="text-black relative p-6 sm:p-10 mt-10 bg-white min-h-screen">
         
            <div className="absolute inset-0 bg-[radial-gradient(#000000_1px,transparent_1px)] bg-[length:10px_10px] opacity-10 pointer-events-none"></div>

            <div className="grid grid-cols-1 md:grid-cols-4 mr-20 relative ">
                {/* Left Section */}
                <div className="md:col-span-1 flex flex-col justify-start">
                    <h2
                        className={`${handlee.className} text-2xl mr-28 sm:text-3xl bg-[#FFC9F0]  px-4 py-2 `}
                        style={{ fontWeight: 600 }}
                    >
                        Contact here
                    </h2>
                    <div className="mt-4">
                        <A1 />
                    </div>
                    <p className="mt-4 text-lg">
                        Have a project idea? <br />
                        Just say me <span className="font-bold">Hi</span>.
                    </p>
                </div>


                {/* Right Section - Form */}
                <div className="md:col-span-3 flex flex-col gap-6 mr-20 ml-80">
                    {/* Name Input */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
                        <label className={`${handlee.className} bg-[#FFC9F0] px-3 py-1 text-xl border-l-2 border-black`} style={{ fontWeight: 600 }}>
                            Name
                        </label>
                        <input
                            type="text"
                            placeholder="Zainab Nisa"
                            className="w-full border-b-2 border-black outline-none text-lg bg-transparent"
                        />
                    </div>

                    {/* Email Input */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
                        <label className={`${handlee.className} bg-[#FCEC9A] px-3 py-1 border-l-2 border-black text-xl `} style={{ fontWeight: 600 }}>
                            Your email
                        </label>
                        <input
                            type="email"
                            placeholder="zainab123@gmail.com"
                            className="w-full border-b-2 border-black outline-none text-lg bg-transparent"
                        />
                    </div>

                    {/* About Project Input */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
                        <label className={`${handlee.className} bg-[#AEE3F5] px-3 py-1 border-l-2 border-black text-xl `} style={{ fontWeight: 600 }}>
                            About Project
                        </label>
                        <input
                            type="text"
                            placeholder="I want to discuss you about ........"
                            className="w-full border-b-2 border-black outline-none text-lg bg-transparent"
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-end mt-4">
                        <button className="w-full sm:w-auto bg-black text-white text-lg px-8 py-3 shadow-md hover:bg-gray-800 transition-all duration-300">
                            Send Here
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
