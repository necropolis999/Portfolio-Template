import React from 'react';
import './Portfolio.css'; // Import the custom CSS for grayscale effect

const projects = [
  {
    name: 'Website 1',
    imgSrcBW: 'path-to-bw-image1.jpg', // Black and white image path
    imgSrcColor: 'path-to-color-image1.jpg', // Color image path
  },
  {
    name: 'Website 2',
    imgSrcBW: 'path-to-bw-image2.jpg',
    imgSrcColor: 'path-to-color-image2.jpg',
  },
  // Add more projects as needed
];

const Portfolio = () => {
  return (
    <div className="flex flex-wrap -mx-2">
      {projects.map((project, index) => (
        <div key={index} className="w-1/3 p-2">
          <div className="relative group">
            <img
              src={project.imgSrcBW}
              alt={project.name}
              className="w-full grayscale transition-all duration-300 ease-in-out group-hover:grayscale-0"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="text-white text-center">
                <p>{project.name}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;

