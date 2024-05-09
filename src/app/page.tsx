import Image from "next/image";
import Input from "@/components/Input";
import Button from "@/components/Button";
 import { FaFacebookF } from "react-icons/fa";
 import { FaTwitter } from "react-icons/fa";
 import { ImGooglePlus3 } from "react-icons/im";

export default function Home() {
  return (
    <div className=" bg-gradient-to-r from-red-600 to-blue-500 flex  justify-center items-center h-screen   "><div className=" container bg-black py-10 flex-wrap text-center  border border-black rounded-3xl ml-[675px] mr-[675px] px-14 2xl: ">
      <h1 className="text-center font-semibold text-4xl text-white mb-4">LOGIN</h1>
      <p className="text-gray-500 text-xl">Please enter your Username and Password</p>
      <div className=" gap-x-3 mb-3">

        <p>User name</p>
        <Input type="e-mail" placeholder="Username" />


      </div>
      <div className=" gap-3 mb-3 ">
        <p>Password</p>
        <Input type="password" placeholder="Password" />
      </div>
      <div className="py-6 ">
        <p className="text-gray-500 underline text-lg cursor-pointer hover:text-white" >Forgot password?</p>
       
      </div><div className=" text-center">
        <Button text="Login" /></div>
        <div className="flex gap-x-11 justify-center items-center pt-9">
          {/*facebook */}
           <FaFacebookF className="text-white text-3xl cursor-pointer "/>
           {/* Twitter  */}
           <FaTwitter className="text-white text-3xl cursor-pointer "/>
           {/* Google  */}
           <ImGooglePlus3 className="text-3xl text-white cursor-pointer"/>



        </div>
    </div></div>
  );
}
