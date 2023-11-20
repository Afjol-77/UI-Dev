import { TbXxx } from "react-icons/tb";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FaFacebook } from "react-icons/fa6";
import { TbCoinFilled } from "react-icons/tb";

const Rewards = () => {
    return (
        <div className="mt-10 ml-6">
        <h1 className="font-bold text-2xl"> Let's Claim Your Rewards</h1>
        {/* first row start */}
        <div className="mt-3 flex gap-5">
            <div className="flex gap-4 bg-white rounded-lg p-3 shadow-2xl shadow-slate-200">
            <div className="text-5xl bg-[#f5f5f5] p-3 rounded-lg text-tartiary"><TbXxx /></div>
            <div className="w-[270px]">
                <p className="font-medium">Enter referrer code</p>
                <p className="font-thin text-sm mb-1"> Use code--ak403</p>
                <span className="flex gap-2">
                    <p className="text-[#fcc302] text-2xl"> <TbCoinFilled /> </p>
                    <p className="font-bold"> 300</p>
                </span>
            </div >
            <div>
            <a href="#">
            <button className="text-tartiary border-solid border-2 border-tartiary mt-4 px-4 py-1 rounded-xl"> Claim </button>
            </a>
            </div>
            </div>
        
            <div className="flex gap-4 bg-white rounded-lg p-3 shadow-2xl shadow-slate-200">
            <div className="text-5xl bg-[#f5f5f5] p-3 rounded-lg text-secondary"><MdOutlineMarkEmailUnread /></div>
            <div className="w-[270px]">
                <p className="font-medium">Verify your email</p>
                <p className="font-thin text-sm mb-1"> Easy bonus opportunity</p>
                <span className="flex gap-2">
                    <p className="text-[#fcc302] text-2xl"> <TbCoinFilled /> </p>
                    <p className="font-bold"> 50</p>
                </span>
            </div >
            <div>
            <a href="#">
            <button className=" text-tartiary border-solid border-2 border-tartiary mt-4 px-4 py-1 rounded-xl"> Claim </button>
            </a>
            </div>
            </div>
        </div>
            {/*second row starts */}
        <div className="mt-5 flex gap-5">
            <div className="flex gap-4 bg-white rounded-lg p-3 shadow-2xl shadow-slate-200">
            <div className="text-5xl bg-[#f5f5f5] p-3 rounded-lg text-tartiary"><CgProfile /></div>
            <div className="w-[270px]">
                <p className="font-medium">Complete your profile</p>
                <p className="font-thin text-sm mb-1"> Easy bonus opportunity</p>
                <span className="flex gap-2">
                    <p className="text-[#fcc302] text-2xl"> <TbCoinFilled /> </p>
                    <p className="font-bold"> 50</p>
                </span>
            </div >
            <div>
            <a href="#">
            <button className="text-tartiary border-solid border-2 border-tartiary mt-4 px-4 py-1 rounded-xl"> Claim </button>
            </a>
            </div>
            </div>
        
            <div className="flex gap-4 bg-white rounded-lg p-3 shadow-2xl shadow-slate-200">
            <div className="text-5xl bg-[#f5f5f5] p-3 rounded-lg text-[#395a9c]"><FaFacebook /></div>
            <div className="w-[270px]">
                <p className="font-medium">Like us on Facebook</p>
                <p className="font-thin text-sm mb-1"> Like our page on Facebook</p>
                <span className="flex gap-2">
                    <p className="text-[#fcc302] text-2xl"> <TbCoinFilled /> </p>
                    <p className="font-bold"> 10</p>
                </span>
            </div >
            <div>
            <a href="#">
            <button className="text-tartiary border-solid border-2 border-tartiary mt-4 px-4 py-1 rounded-xl"> Claim </button>
            </a>
            </div>
            </div>
            
        </div>


        </div>
    );
};

export default Rewards;