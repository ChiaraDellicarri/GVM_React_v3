import * as React from 'react';
import { useState } from 'react';

type Nearby = {
    lat: any;
    lng: any;
}

const Nearby = (props: Nearby) => {
    const { lat, lng } = props;
    const baseURL = "https://liveapi.yext.com/v2/accounts/me/entities/geosearch?";
    const api_key = "41c4aa25e98644dc44dc57714b21d37f";
    const vparam = "20221116";
    const location = lat + ", " + lng;
    const limit = 3;
    const radius = 500;
    const savedFilterIds = "1234994255";
    const entityTypes = "healthcareFacility";
    const fields = "name,c_nomeStruttura,hours,neighborhood,address,mainPhone,timeZoneUtcOffset,c_baseURL,c_immagineStruttura,slug";
    const fullURL = baseURL + "api_key=" + api_key + "&v=" + vparam + "&location=" + location + "&limit=" + (limit + 1) + "&radius=" + radius + "&entityTypes=" + entityTypes + "&savedFilterIds=" + savedFilterIds + "&fields=" + fields + "&resolvePlaceholders=true";


    const [place, setPlace] = useState();


    const fetchPlaces = async () => {
        await fetch(fullURL)
            .then((response) => response.json())
            .then((data) => {
                setPlace(data.response.entities);
            })
    };
    if (fullURL) {
        fetchPlaces();
    }


    return (
        <>
            <div className="section" data-ya-scope="SectionClinicheVicine">
                <div className="container">
                    <div className="bg-gray-100 container_nearby">
                        <h4 className="text-center mb-2 title_nearby">Strutture vicine</h4>
                        <div className="location-data">
                            {place ? (<>
                                {place.map((el, index) => {
                                    if (index > 0) {
                                        return (
                                            <a data-ya-track="LinkStrutturaVicina" target="_blank" href={el.slug} className="location_nearby" rel="noreferrer">
                                                <div className="grid address-cta-column">
                                                    <div className="image" style={{ background: `url(${el.c_immagineStruttura.url})` }}></div>
                                                    <h5 className="name text-xl font-semibold">{el.c_nomeStruttura ? el.c_nomeStruttura : el.name}</h5>
                                                    <div className="address"><div>{el.address.line1}</div>
                                                        <div className="address-line-2">{el.address.city}, {el.address.region} {el.address.postalCode}</div>
                                                    </div>
                                                </div>
                                            </a>
                                        )
                                    }

                                })}</>
                            ) : (<div className="col">Nessun risultato</div>)}

                            <br /></div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Nearby;

