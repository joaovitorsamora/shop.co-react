import { HeaderTopPromo } from "../HeaderTopPromo";
import { HeaderMenu } from "../HeaderMenu";
import { HeaderSearch } from "../HeaderSearch";
import { HeaderIcons } from "../HeaderIcons";

interface HeaderProps { 
    logoText: string;
    renderIcon?: () => React.ReactNode;
    menuLinks?: Array<{ text: string; href: string }>;
    icons?: Array<{icon: React.ReactNode, href: string}>;
    placeholder?: string;
    textPromo: string;
    textSignUp: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Header: React.FC<HeaderProps> = ({logoText, textPromo, textSignUp, renderIcon, menuLinks, icons, placeholder, onChange}) => { 
    return (
        <header>
            <HeaderTopPromo textPromo={textPromo} textSignUp={textSignUp}/>
        <section className="flex justify-between items-center py-2.5 px-4">
                <HeaderMenu
                    logoText={logoText}
                    renderIcon={renderIcon}
                    menuLinks={menuLinks}
                />
                <HeaderSearch onChange={onChange} placeholder={placeholder} />
                <HeaderIcons
                    icons={icons}
                />
        </section>
    </header>
    )
}