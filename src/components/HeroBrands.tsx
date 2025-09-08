interface HeroBrandsProps { 
    brands?: Array<{ logo: string; alt: string }>;
}

export const HeroBrands: React.FC<HeroBrandsProps> = ({brands}) => { 
    return (
        <ul className="flex flex-wrap justify-center lg:justify-around gap-5 items-center py-5 px-4 bg-black mb-12">
            {brands?.map((brand) => (
                <li className="text-white white-space-nowrap" key={brand.alt}>
                    <img src={brand.logo} alt={brand.alt} />
                </li>
            ))}
            </ul>
    ) 
}