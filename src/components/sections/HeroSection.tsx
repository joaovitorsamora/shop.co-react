import { HeroStatsItem } from "../HeroStatsItem";
import { HeroBrands } from "../HeroBrands"; 
import { TypographyH2 } from "../Typography/TypographyH2";
import { TypographyP } from "../Typography/TypographyP";
import { Button } from "../ui/button";

interface HeroSectionProps { 
    titleText: string;
    descriptionText: string;
    stats?: Array<{ text?: string; description?: string, fullWidth?: boolean, isDivider?: boolean}> | undefined;
    brands?: Array<{ logo: string; alt: string }>;
}


const banner_hero = '/assets/banner-hero.png';

export const HeroSection: React.FC<HeroSectionProps> = ({ titleText, descriptionText, stats, brands }) => { 
    return (
        <div className="w-full">
            <section className="w-full h-full md:block md:bg-[url('../public/assets/banner-hero-bg.png')] bg-no-repeat 2xl:bg-cover 2xl:bg-center bg-[#f2f0f1] lg:bg-[118%] lg:[background-size:80vw] lg:[background-position-x:110%] lg:[background-position-y:69%] 2xl:[height:auto] md:[background-position-x:118%] md:[background-position-y:86%] md:[background-size:80vw]">
            <div className="flex flex-col justify-center items-center py-5 px-4 gap-5 w-full md:items-start md:pt-[103px] md:pr-0 md:pb-0 md:pl-[100px]">
                <TypographyH2 text={titleText} className="text-4xl font-bold w-full md:text-4xl md:w-[384px]"/> 
                <TypographyP text={descriptionText} className="text-sm font-normal w-full md:w-[545px]"/>    
            </div>
                
            <div className="flex justify-center items-center md:justify-start md:w-full md:max-w-[577px] md:pt-0 md:pr-0 md:pb-[48px] md:pl-[100px]">
                <Button variant='default' className="bg-black py-4 px-14 rounded-full border-none my-6 mx-4 md:mt-[32px] md:mr-0 md:mb-0 md:ml-0">
                    <TypographyP text="Shop Now" className="text-white font-medium text-base"/>
                </Button>
            </div>
            <HeroStatsItem statsItem={stats} />
            <div className="flex justify-center w-full">
                <img className="w-full block md:hidden" src={banner_hero} alt="Mulher usando roupa casual" />
            </div>
            <HeroBrands brands={brands}/>
            </section>
        </div>    
    )
}    
