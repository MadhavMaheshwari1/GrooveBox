import Headphones from "../assets/Headphones.avif"
import HeadphonesSmall from "../assets/HeadphonesSmall.avif"

const Landing = () => {
  return (
    <div className="max-w-[1850px] mx-auto flex xl:flex-row flex-col h-[100vh]">
      <div className="xl:w-1/2 w-full flex flex-col gap-4 justify-center px-8 xl:items-start items-center xl:py-0 py-8 xl:mb-0 mb-4">
        <p className="xl:text-8xl text-6xl text-white xl:text-start text-center">Enjoy the music, live life to the fullest.</p>
        <p className="xl:text-2xl text-xl text-white px-1 xl:text-start text-center">Listen for your favourite music wherever you are.</p>
        <button className="py-3 px-4 bg-gradient-to-r from-blue-400 font-semibold to-blue-900 rounded-3xl text-white w-[250px] flex justify-between">Login with spotify <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevrons-right"><path d="m6 17 5-5-5-5" /><path d="m13 17 5-5-5-5" /></svg></span>
        </button>
      </div>
      <div className="flex items-center justify-center xl:w-1/2 w-full">
        <div className="flex cursor-pointer">
          <picture>
            <source
              srcSet={`${Headphones} 1200w, ${HeadphonesSmall} 600w`}
              sizes="(max-width: 600px) 60vw, (max-width: 1200px) 15vw"
              type="image/avif"
            />
            <img src={HeadphonesSmall} width="600px" height="600px" alt="Description of the image" />
          </picture>

        </div>
      </div>
    </div>
  );
};

export default Landing;
