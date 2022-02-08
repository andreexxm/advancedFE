
import React ,{useState, useEffect} from "react";

export const Playground = () => {
    //state hooks se pisuvaat najgore
    
    // vo zagradite kade sto imame invoke of function, pisuvame default-na vrednost za prviot parametar
    const [message, updateMessage] = useState("");

    const[firstName, setFirstName] = useState("Maxx");

    //e -> event
    const handleSetName = (e) => {
        const value = e.target.value;

        setFirstName(value);
    };

    useEffect(() => {
        //same shit so COMPONENT DID MOUNT
       
       console.log("COMPONENT DID MOUNT IN EFFECT")
    });

    useEffect(() => {
        return() => {
            console.log("COMPONENT WILL UNMOUNT")
        };
    })
    
    useEffect(() =>{
        console.log("Updated")
    }, [message]);

    return (
        <>
        <h1>hi {firstName}</h1>

        {/* First and Better approach */}
        <input type="text" onChange={handleSetName} value={firstName || ""}/>

        {/* Second approach */}

        <br /><br />
        <h2>porakata e: {message}</h2>
        <input 
            type="text" 
            onChange={(e) => updateMessage(e.target.value)}
             value={message || ""}/>

        </>
    )
}