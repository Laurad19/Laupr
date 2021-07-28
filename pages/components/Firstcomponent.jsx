import React from 'react';
import { jsx as _jsx } from 'react/jsx-runtime';
import Maps from "../components/Maps"
import Info from '../components/Info';


export default function firstComponent() {
    return (
        <>
            <div class="principal"
            >
                <div

                >
                <img style={{ height: "250px", width: "361px", borderRadius: "0.5em", margin: "20px" }} src={'../images/playa.jpg'} />
                </div>
                <div class="info">
                    <Info/>
                </div>

                <div class="ubicacion">
                    <Maps/>
                    <a class="link" href="https://www.google.com.mx/maps/dir/Colima/Hoa+Bar,+Blvd.+Miguel+de+la+Madrid+15675,+Olas+Altas,+28860+Manzanillo,+Col./@19.0782563,-104.4857274,10z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x842545523455a217:0xb6b497fc5af555e6!2m2!1d-103.7240868!2d19.2452342!1m5!1m1!1s0x8424d6c76c1b9d03:0xd35dedef838e49e7!2m2!1d-104.3636118!2d19.1187279">Cómo LLegar</a>
                </div>

            </div>
        </>
    );

}


