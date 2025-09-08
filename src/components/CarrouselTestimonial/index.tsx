import * as React from 'react';
import { Card } from '../ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel';
import { Suspense } from 'react';
import { SkeletonCard } from '../SkeletonCard';
import { TestimonialsCard } from '../shared/TestimonialsCard';
import { TestimonialTypes } from '../../types/TestimonialTypes';
import { TypographyP } from '../Typography/TypographyP';

interface CarrouselTestimonialProps {
  testimonial: TestimonialTypes[];
  layout: 'carrousel' | 'grid';
  text?: string;
  className?: React.CSSProperties;
}

export const CarrouselTestimonial: React.FC<CarrouselTestimonialProps> = ({
  testimonial,
  layout,
  text,
  className,
}) => {
  return (
    <div className="w-full">
      {text && (
        <TypographyP
          text={text}
          className="text-[2rem] font-bold text-center mb-6"
          style={className}
        />
      )}

      {layout === 'grid' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6" style={className}>
          {testimonial?.map(t => (
            <Card
              key={t.id}
              className="bg-white text-gray-900 rounded-xl shadow-md border border-gray-200 h-full w-full p-6"
            >
              <Suspense fallback={<SkeletonCard />}>
                <TestimonialsCard card={t} />
              </Suspense>
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
            {testimonial?.map(list => (
              <CarouselItem
                key={list.id}
                className="basis-full mobile:basis-full xs:basis-full sm:basis-4/5 md:basis-1/2 lg:basis-1/3 p-4"
              >
                <Card className="bg-white text-gray-900 rounded-xl shadow-md border border-gray-200 h-auto min-w-[318px] w-full flex flex-col justify-between p-6">
                  <Suspense fallback={<SkeletonCard />}>
                    <TestimonialsCard card={list} />
                  </Suspense>
                </Card>
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
