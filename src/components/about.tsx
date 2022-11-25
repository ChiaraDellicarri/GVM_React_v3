import React, { useState, useEffect } from "react";
/*import { Remark } from 'react-remark';*/

type About = {
    info: any;
    urlStrutturaSitoGVM?: string;
    urlOrari?: string;
    urlContatti?: string;
    urlPrenotazione?: string;
    direttoreSanitario?: string;
    amministratoreDelegato?: string;
    postiLetto?: string;
}


const About = (props: About) => {

    const {
        info,
        urlStrutturaSitoGVM,
        urlOrari,
        urlContatti,
        urlPrenotazione,
        direttoreSanitario,
        amministratoreDelegato,
        postiLetto,
    } = props;


    return (<>

        <div className="section">
            <div className="container">
                <div className="">
                    <div className="flex flex-wrap box_informazioni" data-ya-scope="SectionInformazioni">
                        <div className="w-full md:w-2/3">
                            <div className="container_descrizione">
                                <h2 className="mb-3 titolo_descrizione_lunga md:mb-5">Informazioni</h2>
                                <div className="descrizione_lunga" id="descrizione_lunga">
                                   {/* <Remark>{info}</Remark>*/}
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-between w-full md:w-1/3 box_informazioni_link">
                            <div className="sidebar_lista_link">
                                <a className="button-text" href={urlStrutturaSitoGVM} target="_blank" data-ya-track="LinkSitoStruttura" rel="noreferrer">
                                    <svg className="mr-2" width="12px" height="24px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" data-fa-i2svg=""><path fill="currentColor" d="M118.6 105.4l128 127.1C252.9 239.6 256 247.8 256 255.1s-3.125 16.38-9.375 22.63l-128 127.1c-9.156 9.156-22.91 11.9-34.88 6.943S64 396.9 64 383.1V128c0-12.94 7.781-24.62 19.75-29.58S109.5 96.23 118.6 105.4z"></path></svg>
                                    Visita il sito della struttura</a>
                                <a className="button-text" href={urlOrari} target="_blank" data-ya-track="LinkInfoGenerali" rel="noreferrer">
                                    <svg className="mr-2" width="12px" height="24px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" data-fa-i2svg=""><path fill="currentColor" d="M118.6 105.4l128 127.1C252.9 239.6 256 247.8 256 255.1s-3.125 16.38-9.375 22.63l-128 127.1c-9.156 9.156-22.91 11.9-34.88 6.943S64 396.9 64 383.1V128c0-12.94 7.781-24.62 19.75-29.58S109.5 96.23 118.6 105.4z"></path></svg>
                                    Orari e info generali
                                </a>
                                <a className="button-text" href={urlContatti} target="_blank" data-ya-track="LinkScrivici" rel="noreferrer">
                                    <svg className="mr-2" width="12px" height="24px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" data-fa-i2svg=""><path fill="currentColor" d="M118.6 105.4l128 127.1C252.9 239.6 256 247.8 256 255.1s-3.125 16.38-9.375 22.63l-128 127.1c-9.156 9.156-22.91 11.9-34.88 6.943S64 396.9 64 383.1V128c0-12.94 7.781-24.62 19.75-29.58S109.5 96.23 118.6 105.4z"></path></svg>
                                    Scrivici
                                </a>
                                <a className="button-text button-prenota" href={urlPrenotazione} target="_blank" data-ya-track="LinkPrenota" rel="noreferrer">
                                    <svg className="mr-2" width="12px" height="24px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" data-fa-i2svg=""><path fill="currentColor" d="M118.6 105.4l128 127.1C252.9 239.6 256 247.8 256 255.1s-3.125 16.38-9.375 22.63l-128 127.1c-9.156 9.156-22.91 11.9-34.88 6.943S64 396.9 64 383.1V128c0-12.94 7.781-24.62 19.75-29.58S109.5 96.23 118.6 105.4z"></path></svg>
                                    Prenota
                                </a>
                            </div>
                            <div className="dati_struttura_governance">
                                {direttoreSanitario ? <p><strong> Direttore sanitario: </strong> {direttoreSanitario} </p> : ""}
                                {amministratoreDelegato ? <p><strong> Amministratore delegato: </strong> {amministratoreDelegato} </p> : ""}
                                {postiLetto ? <p><strong> Posti Letto: </strong> {postiLetto} </p> : ""}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>


    </>)

}


export default About;