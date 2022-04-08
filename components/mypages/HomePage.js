import React from "react";
import Image from "next/image";
import NavBar from "../../components/NavBar";
import homeBg from "../../public/images/homebg.png";

function HomePage() {
  return (
    <div>
      <NavBar />
      <div className="grid md:grid-cols-2">
        <div className="flex flex-col items-center justify-center h-screen lg:ml-[250px]">
          <h1 className="font-bold text-2xl text-red-600 uppercase">
            Welcome!!
          </h1>
          <h2 className="font-bold text-lg">I am a Web Developer</h2>
          <p className="text-center font-semibold">
            I'm a Web Developer with extensive experience for over 3 years. My
            expertise is to create and design websites, graphic design and many
            more...
          </p>
        </div>
        <div className=" flex items-center justify-center object-fill lg:mr-[350px]">
          <Image src={homeBg} alt="Art" height={500} width={500}/>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
