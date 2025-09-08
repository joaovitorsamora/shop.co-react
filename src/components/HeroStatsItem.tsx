import { useState } from "react";

interface HeroStatsItemProps { 
    statsItem?: Array<{ text?: string; description?: string, fullWidth?: boolean, isDivider?: boolean }>;
}

export const HeroStatsItem: React.FC<HeroStatsItemProps> = ({statsItem}) => { 
    
    return (
        <ul className="grid grid-cols-2 gap-8 py-5 px-4 relative lg:flex lg:pt-0 lg:pr-0 lg:pb-[auto] lg:pl-[100px] lg:items-center lg:justify-start lg:w-[596px] lg:gap-8 md:w-[58%] md:ml-[38px]">
            {statsItem?.map((stats, idx) => (
                stats.isDivider ? (
                    <li
                        key={idx}
                        className="sm:block lg:hidden absolute bg-black right-2/4 top-10 w-px h-10"
                        aria-hidden="true"
                    ></li>
                ) : (
 
                    <li
                        key={idx}
                        className={`p-4 text-start my-0 mx-auto flex flex-col justify-center items-start gap-2.5 ${stats.fullWidth ? "col-span-2 mt-4 lg:mt-0" : ""}`}
                    >
                        <h2 className="text-2xl font-bold">{stats.text}</h2>
                        <p className="text-xs font-normal">{stats.description}</p>
                    </li>      
                )
            ))}
        </ul>
    )
}