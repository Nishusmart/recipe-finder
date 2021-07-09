import React from "react";
import './Header.css'
const Header =function (){
    
return(
    <div className="header">
        <div style={{textAlign:'center',fontFamily:'Maven Pro',position:'relative',bottom:20,right:35,fontWeight:800}}>
            <h1> Recipe Finder</h1>
            </div>
            <input id="finder" type="text" placeholder="Enter the name of the dish"  onChange={(e) => console.log(e.target.value)} value="" />
            <button id="btn" type="submit">
            <span>Get ingredients</span>
            </button>
            </div>
)
}
    export default Header;
