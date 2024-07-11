import { afph, ellis, knife, mango, discover, nni } from '../assets';
import { styles } from '../styles';

const projects = [
  {
    name: 'Alliance for Positive Health',
    imgSrcColor: afph,
    link: 'https://www.allianceforpositivehealth.org/',
  },
  {
    name: 'The Foundation for Ellis Medicine',
    imgSrcColor: ellis,
    link: 'https://www.ellismedicinefoundation.org/',
  },
  {
    name: 'The Scarlet Knife',
    imgSrcColor: knife,
    link: 'https://www.scarletknife.com/',
  },
  {
    name: 'The Scarlet Mango Inn',
    imgSrcColor: mango,
    link: 'https://www.scarletmangoinn.com/',
  },
  {
    name: 'Discover Rensselaer',
    imgSrcColor: discover,
    link: 'https://www.discoverrensselaer.com/',
  },
  {
    name: 'The New Netherland Institute',
    imgSrcColor: nni,
    link: 'https://www.newnetherlandinstitute.org/',
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
                <h2 className={styles.sectionHeadTextWhite}>
                  <a href={project.link} target="_blank">{project.name}</a>
                </h2>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
