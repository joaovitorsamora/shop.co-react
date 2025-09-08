interface DressStyleSectionProps{
    title: string
    clothesStyles: Array<{
        image: string,
        categoria: string, 
        alt: string,
        href: string,
        area: 'casual' | 'formal' | 'party' | 'gym'
    }>
}

export const DressStyleSection: React.FC<DressStyleSectionProps> = ({ clothesStyles, title}) => {
    const gridAreaClasses = {
        casual: 'xl1024:col-span-1 xl1024:row-span-1 md:col-span-1 md:row-span-1 ',
        formal: 'xl1024:col-span-2 xl1024:row-span-1 md:col-span-2 md:row-span-1 ',
        party: 'xl1024:col-span-2 xl1024:row-span-1 md:col-span-2 md:row-span-1 ',
        gym: 'xl1024:col-span-1 xl1024:row-span-1 md:col-span-1 md:row-span-1 ',
    };

    return (
       <section className="bg-[#f0f0f0] rounded-[20px] mx-4 my-[54px] xl1024:mx-[100px] xl1024:mb-[80px]">
            <h2 className="text-center uppercase text-black text-[2rem] font-bold px-[56px] pt-[40px] pb-[20px]">{title}</h2>
            <div className="flex flex-col gap-4 mx-4 xl1024:grid xl1024:grid-cols-3 xl1024:grid-rows-2 xl1024:gap-4 xl1024:px-[64px] xl1024:pb-[76px] md:grid md:grid-cols-3 md:grid-rows-2 md:gap-4 md:px-[64px] md:pb-[76px]">
                {clothesStyles.map((style, index) => (
                    <figure
                        key={style.area + index}
                        className={`relative overflow-hidden ${gridAreaClasses[style.area]}`}>
                        <a href={style.href}>
                            {/* Imagem mobile */}
                            <img
                                src={style.image.replace('-desktop.png', '.png')}
                                alt={style.alt}
                                className="sm:hidden w-full object-cover rounded-[20px]"
                            />
                            {/* Imagem desktop */}
                            <img
                                src={style.image.includes('-desktop.png') ? style.image : style.image.replace('.png', '-desktop.png')}
                                alt={style.alt}
                                className="hidden md:block xl1024:block w-full h-full object-cover rounded-[20px]"
                            />
                        </a>
                        <figcaption className="absolute top-2 left-0.5 text-black text-[1rem] font-bold  px-3 py-1 rounded">
                            {style.categoria}
                        </figcaption>
                    </figure>
                ))}
            </div>
        </section> 
    )
}