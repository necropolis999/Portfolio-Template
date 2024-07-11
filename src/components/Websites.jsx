import { afph, ellis, knife, mango, discover, nni } from '../assets';

const projects = [
  {
    name: 'Alliance for Positive Health',
    imgSrcColor: afph,
  },
  {
    name: 'The Foundation for Ellis Medicine',
    imgSrcColor: ellis,
  },
  {
    name: 'The Scarlet Knife',
    imgSrcColor: knife,
  },
  {
    name: 'The Scarlet Mango Inn',
    imgSrcColor: mango,
  },
  {
    name: 'Discover Rennsalaer',
    imgSrcColor: discover,
  },
  {
    name: 'The New Netherland Institute',
    imgSrcColor: nni,
  },
];

const Portfolio = () => {
  return (
    <div className="flex flex-wrap -mx-2">
      {projects.map((project, index) => (
        <div key={index} className="w-1/3 p-2">
          <div className="relative group">
            <img
              src={project.imgSrcColor}
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
