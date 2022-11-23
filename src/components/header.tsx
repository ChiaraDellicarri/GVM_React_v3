import * as React from "react";

export type Link = {
    label: string;
    url: string;
};

type Header = {
    name?: string;
    id?: string;
    links?: Link[];
    logo?: string;
    nomeStruttura?: string;
    address?: any;
    urlPrenotazione?: string;
    urlStrutturaSitoGVM?: string;
};

const Header = (props: Header) => {
    const { name, id, logo, nomeStruttura, address, urlPrenotazione, urlStrutturaSitoGVM } = props;

    return (
        <>
            <div className="header sticky top-0" data-ya-scope="SectionIntestazione">
                <div className="spacer">
                    <div className="header_left">
                        <a className="logo_gvm" href="/" data-ya-track="CTALogo">
                            <img src={logo} alt={name} width="214" height="72" />
                        </a>
                        <div className="tagline">
                            <svg className="svg-inline--fa fa-caret-right fa-w-6 fa-2x mr-1 mr-md-2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512" data-fa-i2svg=""><path fill="currentColor" d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"></path></svg>
                            <div>
                                <h1 className="facility-name" data-yext-field={name} data-yext-id={id}>
                                    {nomeStruttura ? nomeStruttura : name}
                                </h1>
                                <span className="facility-location" data-yext-field="city" data-yext-id={id}>{address.city}</span>
                            </div>
                        </div>
                    </div>
                    {urlStrutturaSitoGVM &&
                        <div className="header_right hidden m-l:flex">
                            <a href={urlPrenotazione} className="trigger trigger_prenota" data-ya-track="CTAPrenotazione">
                                <span className="mr-1">
                                    <svg width="21px" height="24px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="calendar-check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M160 32V64H288V32C288 14.33 302.3 0 320 0C337.7 0 352 14.33 352 32V64H400C426.5 64 448 85.49 448 112V160H0V112C0 85.49 21.49 64 48 64H96V32C96 14.33 110.3 0 128 0C145.7 0 160 14.33 160 32zM0 192H448V464C448 490.5 426.5 512 400 512H48C21.49 512 0 490.5 0 464V192zM328.1 304.1C338.3 295.6 338.3 280.4 328.1 271C319.6 261.7 304.4 261.7 295 271L200 366.1L152.1 319C143.6 309.7 128.4 309.7 119 319C109.7 328.4 109.7 343.6 119 352.1L183 416.1C192.4 426.3 207.6 426.3 216.1 416.1L328.1 304.1z"></path></svg>

                                </span>Prenota
                            </a>
                            <a href={urlStrutturaSitoGVM} className="trigger trigger_struttura" data-ya-track="CTAVisitaStruttura">
                                <span className="mr-2">
                                    <svg className="" width="25px" height="20px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="hospital" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg=""><path fill="currentColor" d="M192 48C192 21.49 213.5 0 240 0H400C426.5 0 448 21.49 448 48V512H368V432C368 405.5 346.5 384 320 384C293.5 384 272 405.5 272 432V512H192V48zM312 64C303.2 64 296 71.16 296 80V104H272C263.2 104 256 111.2 256 120V136C256 144.8 263.2 152 272 152H296V176C296 184.8 303.2 192 312 192H328C336.8 192 344 184.8 344 176V152H368C376.8 152 384 144.8 384 136V120C384 111.2 376.8 104 368 104H344V80C344 71.16 336.8 64 328 64H312zM160 96V512H48C21.49 512 0 490.5 0 464V320H80C88.84 320 96 312.8 96 304C96 295.2 88.84 288 80 288H0V224H80C88.84 224 96 216.8 96 208C96 199.2 88.84 192 80 192H0V144C0 117.5 21.49 96 48 96H160zM592 96C618.5 96 640 117.5 640 144V192H560C551.2 192 544 199.2 544 208C544 216.8 551.2 224 560 224H640V288H560C551.2 288 544 295.2 544 304C544 312.8 551.2 320 560 320H640V464C640 490.5 618.5 512 592 512H480V96H592z"></path></svg>
                                </span>Visita la struttura
                            </a>
                        </div>}
                    {urlStrutturaSitoGVM &&
                        <div className="header_sticky sticky top-0 flex m-l:hidden" data-ya-scope="SectionMenuMobile">
                            <a href={urlPrenotazione} className="trigger trigger_prenota" data-ya-track="CTAPrenotazione">
                                <span>
                                    <svg width="21px" height="24px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="calendar-check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M160 32V64H288V32C288 14.33 302.3 0 320 0C337.7 0 352 14.33 352 32V64H400C426.5 64 448 85.49 448 112V160H0V112C0 85.49 21.49 64 48 64H96V32C96 14.33 110.3 0 128 0C145.7 0 160 14.33 160 32zM0 192H448V464C448 490.5 426.5 512 400 512H48C21.49 512 0 490.5 0 464V192zM328.1 304.1C338.3 295.6 338.3 280.4 328.1 271C319.6 261.7 304.4 261.7 295 271L200 366.1L152.1 319C143.6 309.7 128.4 309.7 119 319C109.7 328.4 109.7 343.6 119 352.1L183 416.1C192.4 426.3 207.6 426.3 216.1 416.1L328.1 304.1z"></path></svg>
                                </span><span className="menu-label">Prenota</span>
                            </a>
                            <a href={urlStrutturaSitoGVM} className="trigger trigger_struttura" data-ya-track="CTAVisitaStruttura">
                                <span>
                                    <svg className="" width="25px" height="20px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="hospital" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg=""><path fill="currentColor" d="M192 48C192 21.49 213.5 0 240 0H400C426.5 0 448 21.49 448 48V512H368V432C368 405.5 346.5 384 320 384C293.5 384 272 405.5 272 432V512H192V48zM312 64C303.2 64 296 71.16 296 80V104H272C263.2 104 256 111.2 256 120V136C256 144.8 263.2 152 272 152H296V176C296 184.8 303.2 192 312 192H328C336.8 192 344 184.8 344 176V152H368C376.8 152 384 144.8 384 136V120C384 111.2 376.8 104 368 104H344V80C344 71.16 336.8 64 328 64H312zM160 96V512H48C21.49 512 0 490.5 0 464V320H80C88.84 320 96 312.8 96 304C96 295.2 88.84 288 80 288H0V224H80C88.84 224 96 216.8 96 208C96 199.2 88.84 192 80 192H0V144C0 117.5 21.49 96 48 96H160zM592 96C618.5 96 640 117.5 640 144V192H560C551.2 192 544 199.2 544 208C544 216.8 551.2 224 560 224H640V288H560C551.2 288 544 295.2 544 304C544 312.8 551.2 320 560 320H640V464C640 490.5 618.5 512 592 512H480V96H592z"></path></svg>
                                </span><span className="menu-label">Struttura</span>
                            </a>
                        </div>}
                </div>
            </div>

        </>
    );
};

export default Header;