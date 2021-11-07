import React from "react";
import { tw } from 'twind/css';

const About = () => (
    <section className={tw(`mt-24 pb-6`)}>
        <div className={tw(`mb-8 text-center`)}>
            <h4 className={tw(`text-base text-indigo-600 font-semibold tracking-wide uppercase`)}>About</h4>
            <p className={tw(`mt-2 text-3xl lg:text-7xl font-bold tracking-tight text-gray-900`)}>
                a little about us
            </p>
        </div>
        <div className={tw(`flex`)}>
            <div className={tw(`mb-8 text-center`)}>
                <p className={tw(`leading-loose text-gray-500 `)}>
                    <b>Code4Me</b> is run by a group of dedicated Full Stack Developers striving to make the internet a modern playground for
                    small businesses and customers alike.
                    While working for you, we make sure to use the most modern frameworks to date to make sure you get what you paid for
                    as well as get the most out of your product. Google SEO is implemented on each site we produce to make sure that Google sees and 
                    lists your webpage on the internet for everyone to see. No wondering if your site is public or not.
                </p>
            </div>
        </div>
    </section>
);

export default About;