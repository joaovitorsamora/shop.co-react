import React from "react";

type TypographyH2Props = React.HTMLAttributes<HTMLHeadingElement> & {
  text?: string;
};

export const TypographyH2 = ({ text, ...props }: TypographyH2Props) => {
  return (
    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0" {...props}>
      {text}
    </h2>
  );
};