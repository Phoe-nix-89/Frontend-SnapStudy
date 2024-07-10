import React from "react";

const AboutMe = () => {
    return (
        <div className="flex justify-center">
            <div className="text-white invisible sm:text-lg sm:mt-20 sm:mr-5 md:text-xl md:mt-16 md:mr-10 lg:text-2xl lg:mt-20 lg:mr-10 xl:text-3xl xl:mt-14 xl:mr-10 sm:visible md:visible lg:visible xl:visible">Hello all ! My name is <anchor className="hover:text-lime-400">Koustav Seth</anchor>. I'm an Undergraduate from Asansol Engineering College currently in my 3rd year .
            <br></br>
            <span>Some of my other projects are : </span>
            <ul className="mt-6">
                <l1>
                    <a className="text-yellow-400" href="https://github.com/Phoe-nix-89/Pokedex" target="_blank">Pokedex</a>
                    <span> - Tech Stacks used are ReactJs , Redux</span>
                </l1>
                <br />
                <l1>
                    <a className="text-yellow-400" href="https://github.com/Phoe-nix-89/GitHub-Profile-Finder" target="_blank">GitHub-Profile-Finder</a>
                    <span> - Tech Stacks used are ReactJs , Redux , TailwindCSS and made using Github API</span>
                </l1>
                <br />
                <l1>
                    <a className="text-yellow-400" href="https://github.com/Phoe-nix-89/Todo-List-ReactJs" target="_blank">Todo-List</a>
                    <span> - Tech Stacks used are ReactJs , CSS</span>
                </l1>
            </ul>
            </div>
        </div>
    )
}

export default AboutMe;