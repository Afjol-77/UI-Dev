import { FaArrowRight } from "react-icons/fa6";
import { RxVideo } from "react-icons/rx";
import { FaLocationDot } from "react-icons/fa6";

const Earnings = () => {
    return (
        <div className="mt-10 ml-6">
        <div>
            <h1 className="font-bold text-2xl"> More Earnings</h1>
        </div>
        <div className="flex gap-5 mt-3">
            {/* left section start */}
            <div className="bg-white flex items-center rounded-lg p-4 shadow-2xl shadow-slate-200">
                <div className="w-[390px]">
                    <p className="font-bold text-xl">Video Rewards</p>
                    <p className="font-light">Earn rewards watching videos</p>
                    <span className="flex justify-items-center text-primary mt-2">
                    <a href="#">
                    <p>Watch Now </p>
                    </a>
                    <a href="#" className="items-center mt-1 pl-2.5"><FaArrowRight /> </a>
                    </span>
                    
                    
                </div>
                <div>
                    <span className="text-primary text-5xl"> <RxVideo/></span>
                </div>
            </div>
            {/* right section start */}
            <div className="bg-white flex items-center rounded-lg p-4 shadow-2xl shadow-slate-200">
                <div className="w-[390px]">
                    <p className="font-bold text-xl">Location Rewards</p>
                    <p className="font-light">Earn rewards at nearby retailers</p>
                    <span className="flex justify-items-center text-secondary mt-2">
                    <a href="#">
                    <p>How it works </p>
                    </a>
                    <a href="#" className="items-center mt-1 pl-2.5"><FaArrowRight /> </a>
                    </span>
                    
                </div>
                <div>
                    <span className="text-secondary text-5xl"> <FaLocationDot/></span>
                </div>
            </div>
            
        </div>
        </div>
    );
};

export default Earnings;