import { useState } from "react";

export default function TestColor() {
    const [color, setColor] = useState('white');
    
    function handleColorChange() {
        console.log(color)
        if(color == 'white') {
            setColor('red')
            console.log('color1')
        } else {
            setColor('white')
            console.log('color2')

        }
    }
    return (
        <div>
            <p style={{color: color}}>Style me!</p>
            <button onClick={handleColorChange}>Toggle style</button>
        </div>
    );
}