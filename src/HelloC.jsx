import React from "react";
import { Link } from "react-router-dom";

function HelloC(){
return (
    <div>
          Go to  
            <Link to={"/home"}> Home</Link>
    </div>
    
)

}
export default HelloC