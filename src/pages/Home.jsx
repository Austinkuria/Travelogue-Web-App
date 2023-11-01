import { Link } from "react-router-dom";
import backgroundImage from "../assets/Media/Images/woman.jpg";

export default function Home() {
    return (
        <>
        {/* <div className="overflow-y-hidden h-[470px]"> */}
            <div
            className="bg-fixed bg-cover h-[490px] flex flex-col justify-center items-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="h-[250px] ">
            <h1 className="text-center font-bold text-3xl">UNLEASH THE TRAVELLER WITHIN YOU</h1>
            <h2 className="text-center font-semibold text-2xl">TRAVELOGUE TOURS - REVEALING THE WORLD TO YOU</h2>
            <p className="text-center font-semibold text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ex
                nesciunt illum iste cum pariatur sunt, et fugit cupiditate dolor.
            </p>
            <button className="bg-white rounded-md mt-5 w-[150px] text-center font-bold text-black p-[5px] mx-[45%]">
                <Link to="/discover-tours">DISCOVER TOURS </Link>
            </button>
            </div>
        </div>
        {/* </div> */}
        </>
    );
}