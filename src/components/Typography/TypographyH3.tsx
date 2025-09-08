import React from "react"

type TypographyH3Props = React.HTMLAttributes<HTMLHeadingElement> & {
  text?: string;
};

export const TypographyH3 = ({text, ...props} : TypographyH3Props) => {
  return (
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight" {...props}>
      {text}
    </h3>
  )
}
