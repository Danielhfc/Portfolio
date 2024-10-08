import Strings from "../Shared/Strings"
import { IoArrowForwardOutline } from "react-icons/io5";

function Services() {
    const servicesList = [
        {
            id:5,
            title : Strings.FRONTEND,
            desc: Strings.FRONTEND_DESC,
            logo: '../assets/react.svg'           
        },

        {
            id:6,
            title : Strings.BACKEND,
            desc: Strings.BACKEND_DESC,
            logo: '../assets/react.svg'           
        },

        {
            id:7,
            title : Strings.ONLINE,
            desc: Strings.ONLINE_DESC,
            logo: '../assets/react.svg'           
        }
    ];
  return (
    <div className="px-12 mt-12">
        <div className="flex items-center">
            <div className="w-[20px] h-[7px] bg-green-600 rounded-full"/>
            <div className="w-full border-[1px] mx-4 mt-[-2px]"/>
            <h2 className="text-[24px] font-bold">{Strings.SERVICES}</h2>
            <div className="w-full border-[1px] mt-[-2px] mx-4"/>
            <div className="w-[20px] h-[7px] bg-green-600 rounded-full"/>
        </div>
        <div className="flex justify-around mt-16">
            {servicesList.map((item)=>
                <div className="text-center flex flex-col justify-center items-center gap-6">
                    <div className="bg-gray-50 rounded-full w-[80px] h-[80px] p-5">
                        <img src={item.logo} alt="Logo" className="w-[80px] h-[80px] p-5 hover:scale-110 transition-all cursor-pointer"/>
                    </div>
                    <h2 className="mt-5 font-bold">{item.title}</h2>
                    <h2 className="text-gray-300">{item.desc}</h2>
                    <span className="bg-green-500 text-[35px] p-2 text-white rounded-full cursor-pointer pulse">  
                        <IoArrowForwardOutline />
                    </span>
                    
                </div>
            )}
        </div>
    </div>
  )
}

export default Services