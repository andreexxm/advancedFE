import React from "react";
import "./Body.scss";

const Body = () => {

    return (
        <>
        <h1>Jobs:</h1>
        <div className="container">
          
            {/* MKT Jobs */}
            <div className="container_jobs">
                <h2>Marketing</h2>
                <ul>
                    <li>Brand Strategist</li>
                    <li>SMM</li>
                    <li>Video Editor</li>
                </ul>
            </div>

            {/* GMR Jobs */}
            <div className="container_jobs">
                <h2>Global Markets Research</h2>
                <ul>
                    <li>Forex/Fixed Income</li>
                    <li>M&A</li>
                    <li>Private Equity</li>
                    <li>Cryptoassets</li>
                </ul>
            </div>

        </div>
        </>
    )
};

export default Body;