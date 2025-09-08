import React from 'react';

type TypographyP = React.HTMLAttributes<HTMLHeadingElement> & {
  text?: string;
};

export const TypographyP = ({ text, ...props }: TypographyP) => {
  return (
    <p className="leading-7 [&:not(:first-child)]:mt-6" {...props}>
      {text}
    </p>
  );
};
