import React from "react";
import { tw, css } from 'twind/css';

const wrapper = css`
    display: flex;
    justifyContent: space-between;
`;

const About = () => (
    <section className={tw(`mt-24 pb-6`)}>
        <div className={tw(`mb-16 text-center`)}>
            <h4 className={tw(`text-base text-indigo-600 font-semibold tracking-wide uppercase`)}>About</h4>
            <p className={tw(`mt-2 text-3xl lg:text-7xl font-bold tracking-tight text-gray-900`)}>
                a little about us
            </p>
        </div>
        <div className={tw(`flex`)}>
            <div className={wrapper}>
                <h4 className={tw(`text-base text-indigo-600 w-3/4 m-20 font-semibold tracking-wide uppercase`)}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas efficitur risus lacinia metus eleifend ornare ut et mi. 
                    Aenean augue sem, consectetur sed ligula non, consequat commodo ante.
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas efficitur risus lacinia metus eleifend ornare ut et mi. 
                    Aenean augue sem, consectetur sed ligula non, consequat commodo ante.
                </h4>
            </div>
            <div className={tw(`m-20 min-h-0 md:min-h-full`)}>
                <img src="https://cdn.dribbble.com/users/1787323/screenshots/6371250/lazy_programmer_dribbble-02_4x.png?compress=1&resize=1600x1200" alt="about us" />
            </div>
        </div>
    </section>
);

export default About;