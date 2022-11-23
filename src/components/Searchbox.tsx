import React, { Component, useEffect, useState } from 'react';
import Marker from './components/Marker';
// examples:
import GoogleMap from './components/GoogleMap';
import Autocomplete from './components/AutoComplete';
import Hours from './hours-index';
const defaultProps = {
    center: { lat: 42.159872, lng: 13.405838 },
}

let checkIfGeolocationisRequested = false;

type Props = {
    defaultLocations?: [];
}

const userLocation = {
    lat: 42.159872, lng: 13.405838
};


class Searchbox extends Component<Props> {
    constructor(props) {
        super(props);

        this.state = {
            mapApiLoaded: false,
            mapInstance: null,
            mapApi: null,
            places: [],
            hoverIndex: null,
            isHovering: false
        };

    }

    setCurrentPosition: any = (current) => {
        /* this.setState({ places: current });*/
        checkIfGeolocationisRequested = true;
        this.appFetch(current);
    }


    handleCurrentPosition = () => {
        const context = this;
        navigator.geolocation.getCurrentPosition(
            function (position) {
                console.log(position);
                const currentCoordinate = position;
                context.setCurrentPosition(currentCoordinate);
            },
            function (error) {
                console.error("Error Code = " + error.code + " - " + error.message);
            }
        );
        /*position.coords.latitude*/
        /*position.coords.longitude*/
    }



    apiHasLoaded = (map, maps) => {
        this.setState({
            mapApiLoaded: true,
            mapInstance: map,
            mapApi: maps,
            places: this.props.defaultLocations,
        });
    };

    addPlace = (place) => {
        this.setState({ places: place });
    };


    appFetch = (place) => {
        const context = this;
        var requestOptions = {
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            method: 'GET',
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            redirect: 'follow'
        };
        const fetchPlaces = async () => {
            let latitude;
            let longitude;
            if (checkIfGeolocationisRequested == false) {
                latitude = place.geometry.location.lat();
                longitude = place.geometry.location.lng();
            } else if (checkIfGeolocationisRequested == true) {
                latitude = place.coords.latitude;
                longitude = place.coords.longitude;
                userLocation.lat = latitude; userLocation.lng = longitude;
            }
            if (latitude && longitude) {
                await fetch('https://liveapi.yext.com/v2/accounts/me/entities/geosearch?api_key=41c4aa25e98644dc44dc57714b21d37f&v=20221031&savedFilterIds=1234994255&location=' + latitude + ', ' + longitude + '&radius=100', requestOptions)
                    .then((response) => response.json())
                    .then((data) => {
                        this.setState({ places: (data.response.entities) })
                    })
            }

        }

        if (place) {
            fetchPlaces();
        }

    }

    handleMouseOver = (elementIndex) => {
        this.setState({ hoverIndex: elementIndex, isHovering: true })
    };

    handleMouseOut = () => {
        this.setState({ hoverIndex: null, isHovering: false })
    };

    /*gelocation*/

    render() {
        const {
            places, mapApiLoaded, mapInstance, mapApi, hoverIndex, isHovering
        } = this.state;


        return (
            <div className="full-width-locator lista_struttura_mappa">
                <div className="panel px-3">
                    <div className="header-section">
                        <div className="lp-param mt-2">
                            <h2 className="strutture-vicinanze-title">Strutture nelle vicinanze</h2>
                        </div>
                        <div className="error-text"></div>
                        <div className="border border-gray-300 shadow-md rounded-lg w-full px-3 py-2 flex items-center focus-within:ring-2 focus-within:ring-blue-400">
                            <button className="search-bar-icon" aria-label="Search bar icon" id="search-location-button" type="submit" /*onclick="this.blur();"*/ >
                                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg" className="search-icon">
                                    <path opacity="0.45" d="M15.875 14.656l-3.781-3.781c-.094-.063-.188-.125-.281-.125h-.407A6.543 6.543 0 0013 6.5C13 2.937 10.062 0 6.5 0 2.906 0 0 2.938 0 6.5 0 10.094 2.906 13 6.5 13a6.58 6.58 0 004.25-1.563v.407c0 .094.031.187.094.281l3.781 3.781c.156.156.406.156.531 0l.719-.719c.156-.124.156-.374 0-.53zM6.5 11.5c-2.781 0-5-2.219-5-5 0-2.75 2.219-5 5-5 2.75 0 5 2.25 5 5 0 2.781-2.25 5-5 5z" fill="#000"></path>
                                </svg>        </button>
                            {mapApiLoaded && <Autocomplete map={mapInstance} mapApi={mapApi} addplace={this.appFetch} />}
                            <button className="search-location-arrow" title="Cerca usando la tua posizione" id="useLocation" onClick={this.handleCurrentPosition}>
                                <svg width="11" height="11" viewBox="0 0 11 11" fill="none" className="search-carrot" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.45" d="M9.912 0c-.107 0-.236.043-.365.086L.617 4.21c-1.03.473-.686 1.998.408 1.998h3.778V9.99c0 .645.537 1.01 1.052 1.01.365 0 .751-.172.944-.602l4.122-8.937C11.22.752 10.62 0 9.91 0zM5.833 9.99V5.178H1.047s-.022-.022 0-.043l8.886-4.082.022.021L5.833 9.99z" fill="#000">
                                    </path>
                                </svg>
                            </button>
                        </div>

                        <div className="search-center">{places.length} di 25 Ospedali</div>

                    </div>
                    <div className="result-list mt-3">
                        <div className="result-list-inner grid gap-y-1">
                            {places.map((struttura: any, index: number) => (
                                <div id={"result-" + index} key={index} className={`result border ${(isHovering == true && hoverIndex == index) ? "selected" : ""}`} onMouseOver={() => this.handleMouseOver(index)} onMouseOut={this.handleMouseOut} itemType="https://schema.org/MedicalClinic">
                                    <div className="left-column">{index + 1}.</div>
                                    <div className="center-column">
                                        <div className="lp-param-results lp-subparam-cardTitle lp-subparam-cardTitleLinkUrl">
                                            <div className="name" itemProp="name">
                                                <a key="uRL" href={struttura.slug}>
                                                    <p>{struttura.c_nomeStruttura}</p>                                             </a>
                                            </div>
                                        </div>
                                        <div className="lp-param-results lp-subparam-hours">{struttura.hours && <Hours hours={struttura.hours} />}</div>


                                        <div itemProp="address">
                                            <div className="c-AddressRow">
                                                <span className="c-address-street-1">{struttura.address.line1} <i></i></span>
                                            </div>
                                            {struttura.address.line2 &&
                                                <div className="c-AddressRow">
                                                    <span className="c-address-street-2">{struttura.address.line2}</span>
                                                </div>
                                            }
                                            <div className="c-AddressRow">
                                                <span className="c-address-postal-code" itemProp="postalCode">{struttura.address.postalCode} </span>
                                                <span className="c-address-city">{struttura.address.city} </span>
                                                <span className="c-address-state" itemProp="addressRegion">{struttura.address.region}</span>
                                            </div>
                                        </div>
                                        <div className="lp-param-results lp-subparam-getDirectionsLabel">
                                            <div className="link">
                                                <a target="_blank" itemProp="url" href={`https://www.google.com/maps/dir/?api=1&destination=${struttura.name} ${struttura.address.line1} ${struttura.address.city} ${struttura.address.region} ${struttura.address.postalCode}`} rel="noreferrer">
                                                    <p>Ottieni indicazioni</p>
                                                </a>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            ))
                            }
                        </div>
                    </div>
                </div>
                <div id="map" style={{ position: "relative", overflow: "hidden" }}>
                    <div className="google-map">
                        <GoogleMap
                            bootstrapURLKeys={{ key: import.meta.env.YEXT_PUBLIC_GOOGLE_API_KEY, language: 'it', libraries: ['places', 'geometry'] }}
                            defaultZoom={6}
                            defaultCenter={defaultProps.center}
                            yesIWantToUseGoogleMapApiInternals
                            onGoogleApiLoaded={({ map, maps }) => this.apiHasLoaded(map, maps)}
                        >
                            {places && places.map((place, index) => {
                                if (place.geocodedCoordinate) {
                                    if (checkIfGeolocationisRequested == true) {
                                        { mapInstance.setZoom(9) }
                                        { mapInstance.setCenter(userLocation) }
                                        checkIfGeolocationisRequested = false;
                                    }
                                    return (
                                        <Marker
                                            key={index}
                                            text={place.name}
                                            href={place.slug}
                                            ordine={index}
                                            isHover={hoverIndex}
                                            onMouseOver={() => { this.setState({ hoverIndex: index, isHovering: true }) }}
                                            onMouseOut={() => { this.setState({ hoverIndex: null, isHovering: false }) }}
                                            lat={place.geocodedCoordinate.latitude}
                                            lng={place.geocodedCoordinate.longitude}
                                        />
                                    )
                                }
                            })}


                        </GoogleMap>

                    </div>
                </div>
            </div>
        )

    }
}

export default Searchbox;
