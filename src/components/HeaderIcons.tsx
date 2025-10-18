import React from 'react';

interface HeaderIconsProps {
  icons?: Array<{ icon: React.ReactNode; href: string }>;
}

export const HeaderIcons: React.FC<HeaderIconsProps> = ({ icons }) => {
  return (
    <nav className="header__nav">
      <ul className="flex gap-3">
        {icons?.map((icon, index) => (
          <li className="header__nav-item" key={index}>
            <a className="header__nav-link" href={icon.href} aria-label={`link-${index}`}>
              {icon.icon}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
