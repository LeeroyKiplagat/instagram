import React from "react";
import {
  GlobeAltIcon,
  DeviceTabletIcon,
  CameraIcon,
  CashIcon,
  SearchIcon,
  ServerIcon
} from "@heroicons/react/outline";
function Services() {
  return (
    <div className="h-auto">
      <div className="title">
        <h1 className="mt-24">My</h1>
        <h1 className="text-red-600 ml-2 mt-24  ">Services</h1>
      </div>
      <div className=" flex items-center justify-center">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 m-20">
          <div className="card">
            <GlobeAltIcon className="icon" />
            <h1 className="font-bold mt-2 ">Web Development</h1>
          </div>
          <div className="card">
            <DeviceTabletIcon className="icon" />
            <h1 className="font-bold mt-2">App Development</h1>
          </div>
          <div className="card">
            <CashIcon className="icon" />
            <h1 className="font-bold mt-2">Graphics Design</h1>
          </div>
          <div className="card">
            <CameraIcon className="icon" />
            <h1 className="font-bold mt-2">Vector Drawing</h1>
          </div>
          <div className="card">
            <SearchIcon className="icon" />
            <h1 className="font-bold mt-2">SEO Expart</h1>
          </div>
          <div className="card">
            <ServerIcon className="icon" />
            <h1 className="font-bold mt-2">Networking and Switching</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
