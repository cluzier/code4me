import React from "react";
import { tw, css } from 'twind/css';

const headerStyle = css`
  min-height: calc(50vh - 35rem);
`;

const Shop = () => (
  <header className={tw(headerStyle, `mt-14`)}>
        <div className={tw(`text-center`)}>
          <h4 className={tw(`text-base text-indigo-600 font-semibold tracking-wide uppercase`)}>Shop</h4>
          <p className={tw(`mt-2 text-3xl lg:text-7xl font-bold tracking-tight text-gray-900`)}>
            our packages
          </p>
        </div>
  </header>
);

export default Shop;