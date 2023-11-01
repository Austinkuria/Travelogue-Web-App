import React from "react"
import img from "../assets/Media/Images/nature-2.jpg"
export default function About() {
    return (
        <div>
            <h1 className="text-center font-bold text-6xl bg-clip-text text-transparent " style = {{backgroundImage:`url(${img})`}}>ABOUT US</h1>
            <p className="text-center mt-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, eum aspernatur, necessitatibus commodi perferendis eos obcaecati laboriosam rerum, esse expedita earum</p>
            
        <div className="flex flex-row justify-around mt-9"> 
        <div className="w-[300px]  h-[200px] bg-slate-400 rounded-lg text-center">
                <h1 className="font-semibold text-xl">Our Mission</h1>
                <p className="mt-6">lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.</p>
            </div>

            <div className="w-[300px]  h-[200px] bg-slate-400 rounded-lg text-center">
                <h1 className="font-semibold text-xl">Our Mission</h1>
                <p className="mt-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.</p>
            </div>

            <div className="w-[300px]  h-[200px] bg-slate-400 rounded-lg text-center">
                <h1 className="font-semibold text-xl">Our Mission</h1>
                <p className="mt-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.</p>
            </div>
        </div>

        </div>
    )
}