import { TypographyH1 } from "./Typography/TypographyH1";

interface HeaderMenuProps { 
    logoText: string;
    renderIcon?: () => React.ReactNode;
    menuLinks?: Array<{ text: string; href: string }>;
}

export const HeaderMenu: React.FC<HeaderMenuProps> = ({logoText, renderIcon, menuLinks = []}) => { 
    return (
        <div className="flex items-center gap-4">
            <button className="bg-transparent border-none lg:hidden" aria-label="Abrir o Menu">{renderIcon && renderIcon()}</button>
            <TypographyH1 text={logoText} className="text-2xl font-bold"/>
            <nav className="hidden lg:flex sm:hidden">
                <ul className="flex gap-4">
                    {menuLinks?.map((link, index) => (
                            <li key={link.href || index}>
                                <a className="no-underline text-black" href={link.href}>{link.text}</a>
                            </li>
                    ))}
                </ul>
                </nav>
            </div>
    )
}