import React from "react";
import Departments from "./Departments";
import "./Body.scss";

const Body = (props) => {
    const {children} = props;
    console.log(props.randomText);
    
    const departmentData = [
        {
            id: 1,
            name:"Marketing",
            coordinator: "Eva Martins",
            jobs:["Brand Strategist", "SMM", "Video Editor",],
        },
        {
            id:2,
            name:"GMR",
            coordinator:"Vasco Sequeira",
            jobs:["Forex/Fixed Income", "M&A", "Private Equity", "Cryptoassets",],
        },

    ];


    return (
        <>
        <h1>Jobs:</h1>
        <div className="container">

        {/* ------HARDCODED------ */}
        <h1>HARDCODED</h1>
            
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

            <br /><br />

        {/* -----DYNAMIC ARRAY MAPPING------  we use keys*/}
        <h1>DYNAMIC ARRAY MAPPING</h1> 
        {departmentData.map((department) => (
            
            // ----FIRST APPROACH----
            // <div key={department.id}>
            //     <div className="container_jobs">
            //         <h2>{department.name}</h2>
            //         <h3>Coordinator: {department.coordinator}</h3>
            //         <h3>Jobs available:</h3>
            //         <ul>{department.jobs}</ul>
            //     </div>
            // </div>

            // ----SECOND APPROACH----
            <Departments
                key={department.id}
                name={department.name}
                coordinator={department.coordinator}
                jobs={department.jobs}
                />
        ))}

        </div>
        </>
    );
};

export default Body;