interface HeaderSearchProps {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

export const HeaderSearch: React.FC<HeaderSearchProps> = ({ onChange, placeholder }) => {
  return (
    <input
      type="text"
      className="hidden sm:block md:pt-[12px] md:pr-[26px] md:pb-[12px] md:pl-[40px] md:my-[24px] md:mx-[40px] md:bg-search-icon-bg md:bg-no-repeat md:[background-position-x:12px] md:[background-position-y:50%] md:rounded-[62px] 2xl:w-full lg:w-[45%] md:w-full md:max-w-[577px] text-sm md:outline-none md:[background-size:14px] md:bg-[#F0F0F0]"
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};
