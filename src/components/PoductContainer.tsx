import { Suspense } from "react";
import { SkeletonCard } from "./SkeletonCard";
import { CarrouselProduct } from "./CarrouselProduct.tsx";
import { ProductType } from "../types/ProductType";
import { Button } from "./ui/button";
interface ProductContainerProps {
    title: string;
    btnTitle: string
    buttonOnClick: () => void;
    products: ProductType[]
}

export const ProductConTainer: React.FC<ProductContainerProps> = ({ btnTitle, buttonOnClick, products }) => {
    
    
    
    return (
        <>
            <Suspense fallback={<SkeletonCard/>}>
                <CarrouselProduct products={products}/>
            </Suspense>
            <Button
                type="button"
                variant="default"                
                onClick={buttonOnClick}
                className="bg-transparent rounded-[62px] border border-[#777] py-4 px-[54px] my-6 mx-4 text-sm font-medium text-black md:mt-[36px] md:mr-auto md:mb-4 md:ml-auto md:max-w-[228px]"
            >
                {btnTitle}
            </Button>    
        </>
  )
};