import React from "react";
import { tw, css } from 'twind/css';

const featuresStyle = css`
  background-color: #fafafa;
`;

const Features = () => (
  <section className={tw(featuresStyle, `pb-6`)}>
    <div className={tw(featuresStyle,`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8`)}>
      <div className={tw(featuresStyle,`container mx-auto px-6 p-6 bg-white`)}>
        <div className={tw(featuresStyle,`mb-16 text-center`)}>
          <h4 className={tw(featuresStyle,`text-base text-indigo-600 font-semibold tracking-wide uppercase`)}>Features</h4>
          <p className={tw(`mt-2 text-3xl lg:text-7xl font-bold tracking-tight text-gray-900`)}>
            What We Offer
          </p>
        </div>
        <div className={tw(`flex flex-wrap my-12`)}>
          <div className={tw(`w-full border-b md:w-1/2 md:border-r lg:w-1/3 p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>              <div className={tw(`ml-4 text-xl`)}>Responsive design</div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>
              On your phone, tablet, computer? We've got you covered.
            </p>
          </div>
          <div className={tw(`w-full border-b md:w-1/2 lg:w-1/3 lg:border-r p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <div className={tw(`ml-4 text-xl`)}>Lightning fast</div>
            </div>
            <p className={tw(`leading-loose text-gray-500 `)}>
              Stop waiting for pages to load. When you click a link, know that it will be loaded instantly.
            </p>
          </div>
          <div className={tw(`w-full border-b md:w-1/2 md:border-r lg:w-1/3 lg:border-r-0 p-8`)}>
            <div className="flex items-center mb-6">
              <div className={tw(`ml-4 text-xl`)}>Full stack development</div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>
              No need to worry about finding a back-end developer for your site, we do it all!
            </p>
          </div>
          <div className={tw(`w-full border-b md:w-1/2 lg:w-1/3 lg:border-r lg:border-b-0 p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <div className={tw(`ml-4 text-xl`)}>Modern designs</div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>
              We use modern designs that are easy to use, maintain and update.
            </p>
          </div>
          <div className={tw(`w-full border-b md:w-1/2 md:border-r md:border-b-0 lg:w-1/3 lg:border-b-0 p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <div className={tw(`ml-4 text-xl`)}>Modern frameworks</div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>
              We only use the most modern of frameworks to develop your website so that you are getting top of the line material.
            </p>
          </div>
          <div className={tw(`w-full md:w-1/2 lg:w-1/3 p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <div className={tw(`ml-4 text-xl`)}>Fast delivery</div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>
              We have very fast response and delivery times, we have full stack developers working around the clock to deliver you high quality material.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Features;