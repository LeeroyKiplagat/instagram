import React from "react";

function Project() {
  return (
    <div className="h-auto">
      <div className="title space-x-2">
        <h1 className="text-red-600 mt-24">My</h1>
        <h1 className="mt-24">Projects</h1>
      </div>
      <div>
        <div className="flex items-center justify-center">
          <div className="grid md:grid-cols-2 m-12">
            <div className="">
              <div className="project"></div>
              <div className="project-info">
                <h1>Title:</h1>
                <h1>Instagram Clone</h1>
              </div>
              <a href="" className="ml-4">Git repo of Instagram clone</a>
            </div>
            <div>
              <div className="project"></div>
              <div className="project-info">
                <h1 className="">Title:</h1>
                <h1>Spotify Clone</h1>
              </div>
              <a href="" className="ml-4">Git repo of Spotify clone</a>
            </div>
            <div>
              <div className="project"></div>
              <div className="project-info">
                <h1>Title:</h1>
                <h1>Hulu Clone</h1>
              </div>
              <a href="" className="ml-4">Git repo of Hulu clone</a>
            </div>
            <div>
              <div className="project"></div>
              <div className="project-info">
                <h1>Title:</h1>
                <h1>Portfolio Website</h1>
              </div>
              <a href="" className="ml-4">Git repo of Portfolio</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
