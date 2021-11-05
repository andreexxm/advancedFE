import React, {Component} from "react";
import "./Body.scss";

export default class Departments extends Component{
    render() {

        const jobList = (this.props.jobs).map((job, index) =>
        <li key={index}>{this.props.job}</li>
        )
        return(
            <>
                <div className="container_jobs">
                    <h2>Department name:{this.props.name}</h2>
                    <h3>Coordinator: {this.props.coordinator}</h3>
                    <h3>Jobs Available:</h3>
                    <ul className="jobList">{jobList}</ul>
                </div>
            </>
        );
    }
}