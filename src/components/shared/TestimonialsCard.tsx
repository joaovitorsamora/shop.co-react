import { TestimonialTypes } from '../../types/TestimonialTypes';

interface TestimonialsCardProps {
  card: TestimonialTypes;
}

export const TestimonialsCard: React.FC<TestimonialsCardProps> = ({ card }) => {
  return (
    <div className="flex flex-col h-full justify-between items-start">
      <img src={card.starsReviewImage} alt="Stars review" className="h-5 w-auto object-contain" />
      <div className="flex items-center gap-2 mt-3">
        <h3 className="text-base font-bold">{card.name}</h3>
        <img
          src={card.verificationImage}
          alt="verification icon"
          className="w-4 h-4 object-contain"
        />
      </div>
      <blockquote className="text-gray-600 text-sm mt-2 leading-relaxed line-clamp-3">
        {card.quote}
      </blockquote>
    </div>
  );
};
