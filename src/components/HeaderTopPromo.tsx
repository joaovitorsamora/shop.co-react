import { TypographyP } from './Typography/TypographyP';

interface HeaderTopPromoProps {
  textPromo: string;
  textSignUp: string;
}
export const HeaderTopPromo: React.FC<HeaderTopPromoProps> = ({ textPromo, textSignUp }) => {
  return (
    <aside className="bg-black w-full py-2.5 px-5 flex flex-row justify-center items-center gap-2.5 text-white text-xs font-medium">
      <TypographyP text={textPromo} />
      <button className="text-white underline">
        <TypographyP text={textSignUp} />
      </button>
    </aside>
  );
};
