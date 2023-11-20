import eagle from "../assets/eagle.png";
import fox from "../assets/fox.png";

const Scratchers = () =>{
    return(
    <div className="mt-6 ml-6">
        <div className="flex gap-x-[768px]">
        <h1 className="font-bold text-2xl">Scratchers</h1>
        <a href="#">
        <p className="font-light mt-1 text-sm">View More</p>
        </a>
        </div>
        {/* Section start */}
        <div className="flex gap-5 mt-3">
            <div className="flex bg-primary-bg rounded-lg p-4">
                <div>
                    <div className="flex gap-3">
                    <p className="font-semibold text-xl">Fox Scratcher </p>
                    <div className="bg-white text-primary px-3 rounded-xl text-sm mt-1">
                    <p>2x</p>
                    </div>
                    </div>
                    <p className="font-light">Match this image. Win over 1000 pts.</p>
                    <a href="#">
                    <button className="mt-3 bg-primary text-white font-normal px-3 py-2 rounded-lg">Scratch Now</button>
                    </a>
                </div>
                <div>
                    <div className="text-8xl text-primary"> <img src={fox}/> </div>
                </div>
            </div>

            <div className="flex bg-secondary-bg rounded-lg p-4">
                <div>
                    <div className="flex gap-3">
                    <p className="font-semibold text-xl">Eagle Scratcher </p>
                    <div className="bg-white text-secondary px-3 rounded-xl text-sm mt-1">
                    <p>3x</p>
                    </div>
                    </div>
                    <p className="font-light">Match this image. Win over 1000 pts.</p>
                    <a href="#">
                    <button className="mt-3 bg-secondary text-white font-normal px-3 py-2 rounded-lg">Scratch Now</button>
                    </a>
                </div>
                <div>
                    <div className="text-8xl text-secondary"> <img src={eagle}/> </div>
                </div>
            </div>

            
        {/* Section end */}
        </div>
    </div>

    );
};

export default Scratchers;