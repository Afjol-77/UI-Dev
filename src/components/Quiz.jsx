import { GiRoundStar } from "react-icons/gi";
import { TbCoinFilled } from "react-icons/tb";

const Quiz = () => {
    return (
        <div className="mt-10 ml-6">
        <h1 className="font-bold text-2xl"> Quick Quiz</h1>
        {/* section start */}
        <div className="mt-3 flex gap-5">
            <div className="flex gap-4 bg-white rounded-lg p-3 shadow-2xl shadow-slate-200">
            <div className="text-5xl bg-[#f5f5f5] p-3 rounded-lg text-tartiary"><GiRoundStar /></div>
            <div className="w-[270px]">
                <p className="font-medium">AppKarma Bonus</p>
                <p className="font-thin text-sm mb-1"> How much Redeem Bonus do you</p>
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
        
            <div className="flex gap-4 bg-white rounded-lg p-3 shadow-2xl shadow-slate-200">
            <div className="text-5xl bg-[#f5f5f5] p-3 rounded-lg text-tartiary"><GiRoundStar /></div>
            <div className="w-[270px]">
                <p className="font-medium">AppKarma</p>
                <p className="font-thin text-sm mb-1"> Karma Plays: 10</p>
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

export default Quiz;