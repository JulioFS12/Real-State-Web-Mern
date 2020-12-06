import React from 'react';
import { avilableIcon, priceIcon, securityIcon } from '../assets/Images';

export const AbouUser = () => {
    return (
        <section className="container mt-5 text-center">
            <h2 className="mt-5">About us</h2>
            <div className="row mt-5">
                <div className="col-md-4">
                    <img src={securityIcon} alt="About icon security" className="mb-3"></img>
                    <h3>Title</h3>
                    <p>Sed auctor felis ac purus gravida facilisis. Vivamus vulputate dui ut odio sagittis gravida.Vivamus vulputate dui ut odio sagittis gravida.</p>
                </div>
                <div className="col-md-4">
                    <img src={priceIcon} alt="About icon prices" className="mb-3"></img>
                    <h3>Title</h3>
                    <p>Sed auctor felis ac purus gravida facilisis. Vivamus vulputate dui ut odio sagittis gravida.Vivamus vulputate dui ut odio sagittis gravida.</p>
                </div>
                <div className="col-md-4">
                    <img src={avilableIcon} alt="Abour icon avilable" className="mb-3"></img>
                    <h3>Title</h3>
                    <p>Sed auctor felis ac purus gravida facilisis. Vivamus vulputate dui ut odio sagittis gravida.Vivamus vulputate dui ut odio sagittis gravida.</p>
                </div>
            </div>
        </section>
    )
}
