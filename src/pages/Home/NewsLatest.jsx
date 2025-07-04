import React from 'react';
import Marquee from "react-fast-marquee";

const NewsLatest = () => {
    return (
        <div>
            <div>
                <button className="btn btn-secondary">Latest</button>
                <Marquee>
                    I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>
        </div>
    );
};

export default NewsLatest;