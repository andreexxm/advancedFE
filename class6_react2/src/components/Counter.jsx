import React from 'react';
import "./Counter.scss"


export default class Counter extends React.Component {
    constructor(props){
        super(props); //method called in the constructor which inherits all the functionalities, properites and methods within the component we are extending
        // bez super ne mozeme da pristapime do state properties na extendiranata komponenta

        this.state = {
            number:0,
        };

        // this.incrementNumber = this.incrementNumber.bind(this);
        //If we initialize a mehtod without an arrow function, we have to bind it to the constructor manually
    }

    incrementNumber = () => {
        this.setState(
            {
            number: this.state.number +1,
            }
        )
    };


    // Example 1
    // decrementNumber = () => {
    //     this.setState(()=>({
    //         number: this.state.number -1,
    //     }))
    // }


    //Example 2
    decrementNumber = () => {
        this.setState((prevState) => (
            {
            number: prevState.number === 0 ? prevState.number : prevState.number -1,
            }
        ))
    };

    render() { 
        return(
            <>
                <div className="wrapper">
                    <div className="wrapper_buttons">
                        <button className="buttons"
                            
                            //Example1
                            // onClick = {()=>
                            // this.setState(
                            //     {
                            //     number: this.state.number +1
                            //     }, 
                            //     () => console.log("State was updated successfully")
                            //     )
                            // }

                            //Example2
                            onClick = {this.incrementNumber}
                        >
                            Increment</button>
                        <button className="buttons"
                        onClick={this.decrementNumber}
                        >Decrement</button>
                    </div>
                    
                    <br /> <br />
                    <div className="wrapper_result">Result: {this.state.number}</div>
                </div>



            </>
        )
    }

}