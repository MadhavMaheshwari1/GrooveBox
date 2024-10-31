import Headphones from "../assets/Headphones.avif"
// import HeadphonesSmall from "../assets/HeadphonesSmall.avif"

const Landing = () => {
  return (
    <div className="max-w-[1850px] mx-auto flex xl:flex-row flex-col h-[100vh] py-8 xl:px-8">
      <div className="xl:w-1/2 w-full flex flex-col gap-4 justify-center px-8 xl:items-start items-center xl:ps-0 pt-8 pb-4">
        <p className="xl:text-7xl md:text-6xl text-4xl text-white xl:text-start text-center">Enjoy the music, live life to the fullest.</p>
        <p className="xl:text-2xl md:text-xl text-md text-white px-1 xl:text-start text-center">Listen for your favourite music wherever you are.</p>
        <button className="md:py-3 md:px-4 py-1 px-2 bg-gradient-to-r from-blue-400 font-semibold to-blue-900 rounded-3xl text-white xl:w-[250px] md:w-[200px] w-[150px] md:text-[16px] text-[10px] flex justify-between items-center">Login with spotify <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevrons-right"><path d="m6 17 5-5-5-5" /><path d="m13 17 5-5-5-5" /></svg></span>
        </button>
      </div>
      <div className="flex items-center justify-center xl:w-1/2 w-full">
        <div className="flex cursor-pointer px-12">
          <picture>
            <source
              srcSet={Headphones}
              type="image/avif"
            />
            <img src={Headphones} width="600px" height="600px" alt="Description of the image" />
          </picture>

        </div>
      </div>
    </div>
  );
};

export default Landing;
