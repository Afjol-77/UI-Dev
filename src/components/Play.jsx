import { BiSolidErrorAlt } from "react-icons/bi";

const Play = () => {
    return (
        <div className='mt-6 mr-3'>
            <div className="flex gap-x-[120px]">
                <h1 className="font-bold text-2xl">Karma Play</h1>
                <a href="#">
                <p className="font-light mt-1 text-sm">View More</p>
                </a>
            </div>
            <div className="flex gap-2 mt-3 bg-secondary-bg rounded-lg p-2">
                <div className="text-secondary text-4xl mt-0.5">
                    <BiSolidErrorAlt/>
                </div>
                <div>
                    <p className="font-bold text-lg">Finish your offers</p>
                    <p className="font-light text-sm">Karma Play allows you to keep get a rewards even when your offers with that game is done.</p>
                </div>
            </div>

        </div>
    );
};

export default Play;