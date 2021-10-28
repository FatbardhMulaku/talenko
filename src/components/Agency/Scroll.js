import React from 'react';
import { Stickyroll } from '@stickyroll/stickyroll';

const headlines = [
    "Our Promises",
    "Eine flexible und unkompliziert Partnerscha",
    "Rund um die Uhr erreichbar zu sein.",
    "Let's continue with the next lesson!"
]

const Scroll = () => {
    return (
        <Stickyroll pages={headlines}>
            {({ page, pageIndex, pages }) => {
                console.log(pageIndex, pages)
                return (
                    <div className="Agency__Scroll">
                        {/*  <div><strong>{page}</strong> of <strong>{pages}</strong></div>
                    <br/>
                    Progress: <strong>{progress}</strong> */}

                        <div className="flex flex-col">
                            {headlines.map((item, idx) => (
                                <h3 key={idx} className={`Agency__Scroll-focus Agency__Scroll-focus${page}${idx}`}>
                                    {item}
                                </h3>
                            ))}
                        </div>
                    </div>
                );
            }}
        </Stickyroll>
    )
};

export default Scroll;