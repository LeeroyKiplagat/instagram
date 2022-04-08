import React from "react";

function About() {
  return (
    <div className="h-auto">
      <div className=" flex items-center justify-center space-x-2 ">
        <h1 className=" text-4xl font-bold mt-24 text-red-600">About</h1>
        <h1 className="text-4xl font-bold mt-24 ">Me</h1>
      </div>
      <div className="flex items-center justify-center"> 
        <div className="grid md:grid-cols-2">
          <div>
            {/**Image */}
            <div className=" h-[500px] flex items-center justify-center lg:ml-[150px]">
              <div className="flex items-center justify-center border-2 rounded-lg border-red-600 w-[250px] h-[300px] mt-[200px] shadow-lg bg-gray-200"></div>
            </div>
          </div>
          <div>
            <div className=" flex items-center justify-center h-[700px]">
              <div className=" w-[250px] md:w-[400px] lg:mr-[350px] border  rounded-xl shadow-xl y-[5px ] text-black bg-gray-200">
                <div className="text-center font-semibold flex items-center justify-center space-x-2">
                  <h1>Hello, I am</h1>
                  {""} <h1 className="text-red-600">Leeroy</h1>
                </div>
                <div>
                  <h2 className="p-4 w-[250px] md:w-[400px] h-auto text-xs md:text-sm">
                    I'm a software developer that loves building products and
                    web applications that impact millions of lives.I've been
                    developing full-stack application for more than 3yrs. After
                    learning HTML and struggling with CSS, I came up with a
                    brilliant idea of using utilising bootstrap so as not to
                    style everything by myself and for obvious reasons if you
                    knew bootstrap, you were cool, but now am knowledgeable in
                    HTML, JavaScript, CSS, ReactJS, NextJS, ReactNative,
                    TailWindCSS, FireBase, PHP, MySql, Adobe Xd and Illustrator
                  </h2>
                </div>

                <div className=" grid grid-cols-2 p-8 text-xs md:text-sm mr-10 md:mr-8 ">
                  <h2>Name</h2>
                  <h2>: Leeroy Kiplagat</h2>
                  <h2>Address</h2>
                  <h2>: Nairobi, Kenya</h2>
                  <h2>Phone No</h2>
                  <h2>: 0716963169</h2>
                  <h2>Email</h2>
                  <h2>:leeroykiplagat@gmail.com</h2>
                </div>
                <div className="flex justify-center">
                  <button className="text-center border mb-4 rounded-xl p-1 bg-red-600 border-red-600 font-semibold text-base  md:text-md shadow-lg ">
                    Download CV
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
