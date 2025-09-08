import { Link } from 'react-router-dom';
import { TypographyH2 } from './Typography/TypographyH2';
import { TypographyH3 } from './Typography/TypographyH3';
import { TypographyP } from './Typography/TypographyP';

export const FooterSection = () => {
  return (
    <footer
      className="
        mx-4 mb-[77px] 
        2xl:mx-[100px] 2xl:mb-0
        2xl:grid 2xl:grid-cols-3 2xl:grid-areas-footer
      "
    >
      <div
        className="
          mb-6 
          2xl:pr-[113px] 2xl:mb-0
          [grid-area:footer__logo]
        "
      >
        <TypographyH2 className="text-[1.8rem] font-bold mb-[25px]" text="SHOP.CO" />
        <TypographyP
          className="mt-[14px] mb-5 text-[#777]"
          text="We have clothes that suits your style and which you’re proud to wear. From women to men."
        />
        <ul className="flex gap-3">
          <li>
            <Link to="https://x.com">
              <img src="/assets/twitter.png" alt="twitter" />
            </Link>
          </li>
          <li>
            <Link to="https://www.facebook.com/?locale=pt_BR">
              <img src="/assets/facebook.png" alt="facebook" />
            </Link>
          </li>
          <li>
            <Link to="https://www.instagram.com">
              <img src="/assets/instagram.png" alt="instagram" />
            </Link>
          </li>
          <li>
            <Link to="https://github.com">
              <img src="/assets/github.png" alt="github" />
            </Link>
          </li>
        </ul>
      </div>
      <section
        className="
          flex gap-[54px] mb-[22px]
          2xl:gap-[113px] 2xl:mb-0
          [grid-area:footer__links1]
        "
      >
        <div>
          <TypographyH3 className="mb-4 text-sm font-bold text-black" text="COMPANY" />
          <ul>
            <li className="mb-4 last:mb-0">
              <Link to="#" className="text-sm text-[#777] no-underline">
                About Us
              </Link>
            </li>
            <li className="mb-4 last:mb-0">
              <Link to="#" className="text-sm text-[#777] no-underline">
                Services
              </Link>
            </li>
            <li className="mb-4 last:mb-0">
              <Link to="#" className="text-sm text-[#777] no-underline">
                Policy
              </Link>
            </li>
            <li>
              <Link to="#" className="text-sm text-[#777] no-underline">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <TypographyH3 className="mb-4 text-sm font-bold text-black" text="F.A.Q" />
          <ul>
            <li className="mb-4 last:mb-0">
              <Link to="#" className="text-sm text-[#777] no-underline">
                Account
              </Link>
            </li>
            <li className="mb-4 last:mb-0">
              <Link to="#" className="text-sm text-[#777] no-underline">
                Manage Deliveries
              </Link>
            </li>
            <li className="mb-4 last:mb-0">
              <Link to="#" className="text-sm text-[#777] no-underline">
                Orders
              </Link>
            </li>
            <li>
              <Link to="#" className="text-sm text-[#777] no-underline">
                Payment
              </Link>
            </li>
          </ul>
        </div>
      </section>
      <section
        className="
          flex gap-[54px] mb-[22px]
          2xl:gap-[113px] 2xl:mb-0
          [grid-area:footer__links2]
        "
      >
        <div>
          <TypographyH3 className="mb-4 text-sm font-bold text-black" text="HELP" />
          <ul>
            <li className="mb-4 last:mb-0">
              <Link to="#" className="text-sm text-[#777] no-underline">
                Customer Support
              </Link>
            </li>
            <li className="mb-4 last:mb-0">
              <Link to="#" className="text-sm text-[#777] no-underline">
                Delivery Details
              </Link>
            </li>
            <li className="mb-4 last:mb-0">
              <Link to="#" className="text-sm text-[#777] no-underline">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link to="#" className="text-sm text-[#777] no-underline">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <TypographyH3 className="mb-4 text-sm font-bold text-black" text="RESOURCES" />
          <ul>
            <li className="mb-4 last:mb-0">
              <Link to="#" className="text-sm text-[#777] no-underline">
                Free eBook
              </Link>
            </li>
            <li className="mb-4 last:mb-0">
              <Link to="#" className="text-sm text-[#777] no-underline">
                Development Tutorial
              </Link>
            </li>
            <li className="mb-4 last:mb-0">
              <Link to="#" className="text-sm text-[#777] no-underline">
                How to - Blog
              </Link>
            </li>
            <li>
              <Link to="#" className="text-sm text-[#777] no-underline">
                Youtube Playlist
              </Link>
            </li>
          </ul>
        </div>
      </section>
      <div
        className="
          mt-[50px] mb-5 text-center
          2xl:flex 2xl:justify-between 2xl:items-center 2xl:mt-0 2xl:mb-0
          [grid-column:1/-1]
        "
      >
        <TypographyP className="text-sm text-[#777]" text="© 2025, All rights reserved" />
        <div className="flex gap-3 justify-center 2xl:justify-end items-center mt-4 2xl:mt-0">
          <img src="/assets/visa-icon.png" alt="visa" />
          <img src="/assets/mastercard-icon.png" alt="mastercard" />
          <img src="/assets/paypal-icon.png" alt="paypal" />
          <img src="/assets/applepay-icon.png" alt="apple pay" />
          <img src="/assets/googlepay-icon.png" alt="google pay" />
        </div>
      </div>
    </footer>
  );
};
