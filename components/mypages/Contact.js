import React from "react";
import { FaInstagram, FaGithub, FaGooglePlusG, FaLinkedinIn } from "react-icons/fa";

function Contact() {
  return (
    <div className="h-screen">
      <div className="title space-x-2">
        <h1 className="mt-24">Contact</h1>
        <h1 className="text-red-600 mt-24">Me</h1>
      </div>
      <div className=" mt-4 overflow-hidden flex items-center justify-center">
        <form class="w-full max-w-lg">
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                First Name
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Jane"
              />
              <p class="text-red-500 text-xs italic">
                Please fill out this field.
              </p>
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Last Name
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="Doe"
              />
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-password"
              >
                E-mail
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="email"
                type="email"
              />
              <p class="text-gray-600 text-xs italic">Some tips ??</p>
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-password"
              >
                Message
              </label>
              <textarea
                class="no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                id="message"
              ></textarea>
            </div>
          </div>
          <div class="md:flex md:items-center">
            <div class="md:w-1/3">
              <button
                class="shadow bg-red-600 hover:bg-red-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="button"
              >
                Send
              </button>
            </div>
            <div class="md:w-2/3"></div>
          </div>
        </form>
      </div>
      <div className="  h-10  mt-[230px] flex items-center justify-center space-x-60">
        <div className="flex items-center justify-center space-x-4 ">
          <FaInstagram className="h-8 w-8 cursor-pointer"/>
          <FaGithub className="h-8 w-8 cursor-pointer"/>
          <FaGooglePlusG className="h-8 w-8 cursor-pointer"/>
          <FaLinkedinIn className="h-8 w-8 cursor-pointer"/>
          
        </div>
        <div>
          <p className="font-bold ">© Leeroy Kiplagat</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
