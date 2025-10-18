import React from 'react';

type TypographyPProps = React.HTMLAttributes<HTMLHeadingElement> & {
  text?: string;
};

export const TypographyP = ({ text, ...props }: TypographyPProps) => {
  return (
    <p className="leading-7 [&:not(:first-child)]:mt-6" {...props}>
      {text}
    </p>
  );
};
