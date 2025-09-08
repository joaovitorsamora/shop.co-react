import * as React from 'react';

import { Card, CardContent } from '../ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel';
import { Suspense } from 'react';
import { SkeletonCard } from '../SkeletonCard';
import { ProductCard } from '../shared/ProductCard';
import { ProductType } from '../../types/ProductType';

interface CarouselProductProps {
  products?: ProductType[];
  layout?: 'carrousel' | 'grid';
}

export const CarrouselProduct: React.FC<CarouselProductProps> = ({ products, layout }) => {
  return (
    <div className="w-full">
      {layout === 'grid' ? (
        <div className="p-1">
          {products?.map(product => (
            <Card>
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <Suspense fallback={<SkeletonCard />}>
                  <ProductCard products={product} />
                </Suspense>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {products?.map(product => (
              <CarouselItem key={product.id} className="sm:basis-1 md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <Suspense fallback={<SkeletonCard />}>
                        <ProductCard products={product} />
                      </Suspense>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 text-white bg-black" />
          <CarouselNext className="right-2 text-white bg-black" />
        </Carousel>
      )}
    </div>
  );
};
