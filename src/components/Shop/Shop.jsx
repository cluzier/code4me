import React from "react";
import { tw, css } from 'twind/css';

const headerStyle = css`
  min-height: calc(50vh - 35rem);
`;

const Shop = () => (
  <header className={tw(headerStyle)}>
    <div className={tw(`max-w-4xl mx-auto py-16 px-14 `)}>
      <h2 className={tw(`font-sans font-bold text-4xl md:text-5xl lg:text-6xl text-center leading-snug text-gray-800`)}>
        Our Offers
      </h2>
    </div>
  </header>
);

export default Shop;