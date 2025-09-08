import { TypographyH2 } from "../components/Typography/TypographyH2";
import { ProductConTainer } from "../components/PoductContainer";
import { ProductType } from "../types/ProductType";

interface ProductSectionProps {
    title: string;
    btnTitle: string
    buttonOnClick: () => void;
    products: ProductType[]
}

export const ProductSection: React.FC<ProductSectionProps> = ({ title, buttonOnClick, btnTitle, products}) => { 
    
    return (
            <section className="flex flex-col xl1440:mx-[100px] xl1440:mt-[72px] xl1440:mb-[128px]">
                <div className="text-center pt-0 pb-12 px-4 xl1440:px-16">
                    <TypographyH2 text={title} className="text-3xl font-bold"/>
                </div>
                <ProductConTainer
                    buttonOnClick={buttonOnClick}
                    btnTitle={btnTitle}
                    title={title}
                    products={products}
                />
            </section>
    ) 
}
