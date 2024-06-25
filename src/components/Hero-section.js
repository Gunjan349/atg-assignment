import React from "react";

const HeroSection = () => {
    return(
        <>
            <div className="hero-section relative">
                <img src="https://eco-n-tech.com/wp-content/cache/thumb/ec/890ddcd1c2ce5ec_3806x1034.png" className="h-full"/>
                <div className="content absolute bottom-20 left-[10%] text-white    font-semibold">
                 <div className="hidden-bar hidden">
                 <div className="hidden-bar-content absolute w-[80vw] bottom-36 flex justify-between">
                    <img src="data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M16%207H3.83L9.42%201.41L8%200L0%208L8%2016L9.41%2014.59L3.83%209H16V7Z'%20fill='white'/%3e%3c/svg%3e" />
                    <button className="border-2 border-white p-1.5 rounded-sm ">Join Group</button>
                </div>
                 </div>
                    <h1 className="text-4xl tracking-wide  ">Computer Engineering</h1>
                    <h3 className="text-lg">142,765 Comuter Engineers follow this</h3>
                </div>
            </div>
        </>
    );
};

export default HeroSection;