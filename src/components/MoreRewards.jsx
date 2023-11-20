import { SiCashapp } from "react-icons/si";
import { TbCoinFilled } from "react-icons/tb";

const MoreRewards = () => {
    return (
        <div className="mt-10 ml-6 mb-10">
        <h1 className="font-bold text-2xl"> More Rewards Here!</h1>
        {/* section start */}
        <div className="mt-3 gap-5">
            <div className="flex gap-4 bg-white rounded-lg p-3 shadow-2xl shadow-slate-200">
            <div className="text-5xl bg-[#f5f5f5] p-3 rounded-lg text-primary"><SiCashapp /></div>
            <div className="w-[762px]">
                <p className="font-medium">Open CashKarma</p>
                <p className="font-thin text-sm mb-1"> Which badges lets you increase your rewards</p>
                <span className="flex gap-2">
                    <p className="text-[#fcc302] text-2xl"> <TbCoinFilled /> </p>
                    <p className="font-bold"> 30</p>
                </span>
            </div >
            <div>
            <a href="#">
            <button className="text-white border-tartiary border-solid border-2 bg-tartiary mt-4 px-4 py-1 rounded-xl"> Open </button>
            </a>
            </div>
            </div>
        
        </div>

        </div>
    );
};

export default MoreRewards;