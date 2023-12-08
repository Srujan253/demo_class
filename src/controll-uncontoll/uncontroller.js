import React, { useRef } from "react";

function UnController() {
    const inputname = useRef(null);
 
    function handleSubmit() {
        alert(`Name: ${inputname.current.value}`);
    }
 
    return (
        <div className="App">
            <h1 className="geeks">GeeksForGeeks</h1>
            <h3>Uncontrolled Component</h3>
            <form onSubmit={handleSubmit}>
                <label>Name :</label>
                <input
                    type="text"
                    name="name"
                    ref={inputname}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
 
export default UnController;
