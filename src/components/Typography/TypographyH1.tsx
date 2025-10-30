import React from 'react';

type TypographyH1Props = React.HTMLAttributes<HTMLHeadingElement> & {
  text: string;
};

export const TypographyH1 = ({ text, ...props }: TypographyH1Props) => {
  return (
    <h2
      className="scroll-m-20 border-b pb-2 text-3xl font-semibold font-poppins tracking-tight first:mt-0"
      {...props}
    >
      {text}
    </h2>
  );
};
