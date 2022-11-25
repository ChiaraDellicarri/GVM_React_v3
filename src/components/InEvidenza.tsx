import * as React from 'react';

type InEvidenza = {
    articoli?: any;
}

const InEvidenza = (props: InEvidenza) => {
    const { articoli } = props;

    return (
        <>
            <div className="section background_specialita" data-ya-scope="SectionInEvidenza">
                <div className="container">
                    <div className="inevidenza_container flex justify-start items-stretch flex-wrap">
                        <div className="intro">
                            <h2 className="titolo_descrizione_lunga">In evidenza</h2>
                        </div>
                        {articoli.map((art, index) => {
                            return (
                                <>
                                    <div className={"box_inevidenza box_inevidenza" + index}>
                                        <div className="bg_box" style={{ background: `url(${art.immagine.url})` }}></div>
                                        <div className="content">
                                            <h3 className="title_inevidenza">{art.titolo}</h3>
                                            <div className="description_inevidenza">{art.sommario}</div>
                                            <div className="link_inevidenza">
                                                <a href={art.link}>
                                                    <svg className="mr-2" width="12px" height="24px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" data-fa-i2svg=""><path fill="currentColor" d="M118.6 105.4l128 127.1C252.9 239.6 256 247.8 256 255.1s-3.125 16.38-9.375 22.63l-128 127.1c-9.156 9.156-22.91 11.9-34.88 6.943S64 396.9 64 383.1V128c0-12.94 7.781-24.62 19.75-29.58S109.5 96.23 118.6 105.4z"></path></svg>
                                                    <span>Scopri di più</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })}

                    </div>


                </div>
            </div>

        </>)
}

export default InEvidenza;