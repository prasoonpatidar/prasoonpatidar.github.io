import './onhoveraction.css';
import * as React from "react";

export default function ResearchCard() {
    return (<>
            <div className="container text-center">
                <div className="row">
                    <div className="col-sm-4 text-center container-fluid container_foto">
                        <div className="ver_mas text-center">
                            <span className="lnr lnr-eye"></span>
                        </div>
                        <article className="text-left">
                            <h1>sssl</h1>
                            <hr/>
                            <p>some extra text</p>
                        </article>
                        <img
                            src="https://img-aws.ehowcdn.com/400x400/ds-img.studiod.com/Half_Dome_from_Glacier_Point0_1.jpg"
                            alt=""/>
                    </div>
                    <div className="col-sm-4 text-center container-fluid container_foto">
                        <div className="ver_mas text-center">
                            <span className="lnr lnr-eye"></span>
                        </div>
                        <article className="text-left">
                            <h1>sssl</h1>
                        </article>
                        <img
                            src="https://img-aws.ehowcdn.com/400x400/ds-img.studiod.com/Half_Dome_from_Glacier_Point0_1.jpg"
                            alt=""/>
                    </div>
                </div>
            </div>
        </>
    );
}