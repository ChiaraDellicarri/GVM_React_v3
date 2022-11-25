import React from "react";

export type Link = {
    label: string;
    url: string;
};

type Header = {
    links?: Link[];
    logo: string;
};

const HeaderIndex = (props: Header) => {
    /*const { links, logo } = props;*/
    const { logo } = props;
    /*const linkDoms = links.map((link) => (
        <div key={link.label}>
            <a href={link.url} target="_blank" rel="noreferrer">
                {link.label}
            </a>
        </div>
    ));*/

    return (
        <>
            <div className="spacer">
                <div className="header_left">
                    <a className="logo_gvm">
                        <img src={logo} width="50" height="50"></img></a>
                    <div className="tagline">
                        <svg className="svg-inline--fa fa-caret-right fa-w-6 fa-2x mr-1 mr-md-2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512" data-fa-i2svg=""><path fill="currentColor" d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"></path></svg>
                        <div>
                            <h1 className="facility-name">
                                Ospedali
                            </h1>
                            <span className="facility-location">Trova le cliniche GVM</span>
                        </div>
                    </div>
                    {/*<div className="flex gap-x-10 text-lg font-semibold">{linkDoms}</div>
                       <div className="space-x-5">
                        <Cta buttonText="Order Pickup" url="#" style="primary-cta"></Cta>
                        <Cta
                            buttonText="Order Delivery"
                            url="#"
                            style="secondary-cta"
                        ></Cta>
                    </div>*/}
                </div>
            </div>
        </>
    );
};

export default HeaderIndex;