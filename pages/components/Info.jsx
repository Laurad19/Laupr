import React from 'react';
import { MdLocationOn } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";


const info = () => {
    return (
        <>
            <h2>Hoa Bar</h2>
            <h4>Lugar con ambiente relajado y sin pretensiones, sombrillas frente al mar y una amplia carta de alimentos y bebidas.</h4>
            <span class="circulo"><MdLocationOn style={{ padding: "2px", color:"#00C5FF" }}></MdLocationOn></span>
            <span style={{ marginLeft: "10px" }}>15675 Blvd. Miguel de la Madrid Olas Altas,Col.28860</span>
            <p />
            <span class="circulo"><AiFillPhone style={{ padding: "2px", color:"#00C5FF" }}></AiFillPhone></span>
            <span style={{ marginLeft: "10px" }}>01 (314) 33-309-53</span>
        </>
    );
}

export default info;