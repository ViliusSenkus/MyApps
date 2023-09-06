import { useState } from "react";

export default function Button() {

      let [color, setColor] = useState("cyan");

      function handleClick(){
            if (color=="cyan"){
                  setColor("red");
            } else{
                  setColor("cyan");
            }
            console.log(color);
      }

  return (
      <button onClick={handleClick} style={{background:color}}>
            Click Me to Change my color
      </button>
  );
}
