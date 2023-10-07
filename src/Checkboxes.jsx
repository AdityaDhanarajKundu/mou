import { useState } from "react";

export default function CheckBox(){
    const [selectedBoxes, setSelectedBoxes] = useState([]);

    function handleChange(e){
        if(e.target.checked){
            setSelectedBoxes([...selectedBoxes, e.target.value]);
        } else {
            setSelectedBoxes(selectedBoxes.filter(box => box !== e.target.value));
        }
    }

    return(
        <>
            <label>
                <input type="checkbox" value="Option 1" checked={selectedBoxes.includes("Option 1")} onChange={handleChange}/>
                Option 1
            </label>

            <label>
                <input type="checkbox" value="Option 2" checked={selectedBoxes.includes("Option 2")} onChange={handleChange}/>
                Option 2
            </label>

            <label>
                <input type="checkbox" value="Option 3" checked={selectedBoxes.includes("Option 3")} onChange={handleChange}/>
                Option 3
            </label>
        </>
    );
}