import React from "react";
import { tw, css } from 'twind/css';

const headerStyle = css`
  min-height: calc(50vh - 35rem);
  padding-top: 3rem;
  backgroundColor: #fafafa;
`;

const Header = () => (
  <header className={tw(headerStyle)}>
    <div className={tw(`max-w-4xl mx-auto py-16 px-14 sm:px-6 lg:px-8`)}>
      <h1 className={tw(`font-sans font-bold text-4xl md:text-5xl lg:text-8xl text-center leading-snug text-gray-800`)}>
        Code4Me
      </h1>
      <div className={tw(`max-w-xl mx-auto`)}>
        <p className={tw(`mt-5 text-gray-500 text-center text-xl lg:text-3xl`)}>
          Let us worry about the technicals
        </p>
      </div>
    </div>
  </header>
);

export default Header;