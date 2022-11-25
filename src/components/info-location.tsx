import * as React from "react";
import StaticMap from "../components/static-map";
import Hours from "../components/hours";
/*
export type Address = {
  line1: string;
  city: string;
  region: string;
  postalCode: string;
  countryCode: string;
};


const renderPrettyAddress = (address?: Address) => {
    return (
        <>
            {address && (
                <span>
                    {address.line1} in {address.city}, {address.region}
                </span>
            )}
        </>
    );
};
*/
type InfoLocation = {
    name?: string;
    defaultName?: string;
    address?: any;
    openTime?: string;
    children?: React.ReactNode;
    geocodedCoordinate?: any;
    hours?: any;
    regione?: any;
};


const InfoLocation = (props: InfoLocation) => {
    const { geocodedCoordinate, defaultName, address, hours, regione } = props;

    const regionePadreNome = regione.map((entity: any, index) => {
        if (entity.meta.entityType.id == "ce_region")
            return (
                <h2 className="narrow_title">
                    {entity.name}
                </h2>
            )
    });

    return (
        <>
            <div className="section section_location_details" data-ya-scope="SectionMappa">
                <div className="container mt-6">
                    <div className="flex items-stretch flex-wrap box_cartina_orari">
                        <div className="w-full md:w-3/5">
                            <div>
                                {geocodedCoordinate && (
                                    <StaticMap
                                        latitude={geocodedCoordinate.latitude}
                                        longitude={geocodedCoordinate.longitude}
                                    ></StaticMap>
                                )}

                            </div>

                        </div>
                        <div className="flex box_orari flex-col justify-between w-full md:w-2/5">
                            <div>
                                {regionePadreNome}
                                <a id="address" data-ya-track="LinkIndirizzo" className="via_struttura" href={`https://www.google.com/maps/dir/?api=1&destination=${defaultName} ${address.line1} ${address.city} ${address.region} ${address.postalCode}`} target="_blank" rel="noreferrer">
                                    <div><span data-yext-field={address.line1} data-yext-id="GVMICLAS11">{address.line1}</span>, <span data-yext-field={address.postalCode} data-yext-id="GVMICLAS11">{address.postalCode}</span>, <span data-yext-field={address.city} data-yext-id="GVMICLAS11">{address.city}</span>, <span data-yext-field={address.region} data-yext-id="GVMICLAS11">GE</span></div>
                                </a>
                            </div>
                            {hours && <Hours hours={hours} />}
                            <div>
                                <a data-ya-track="CTAOttieniIndicazioni" className="button-blue" href={`https://www.google.com/maps/dir/?api=1&destination=${defaultName} ${address.line1} ${address.city} ${address.region} ${address.postalCode}`} target="_blank" rel="noreferrer">
                                    <svg className="mr-2" width="27px" height="21px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="road" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M256 96C256 113.7 270.3 128 288 128C305.7 128 320 113.7 320 96V32H394.8C421.9 32 446 49.08 455.1 74.63L572.9 407.2C574.9 413 576 419.2 576 425.4C576 455.5 551.5 480 521.4 480H320V416C320 398.3 305.7 384 288 384C270.3 384 256 398.3 256 416V480H54.61C24.45 480 0 455.5 0 425.4C0 419.2 1.06 413 3.133 407.2L120.9 74.63C129.1 49.08 154.1 32 181.2 32H255.1L256 96zM320 224C320 206.3 305.7 192 288 192C270.3 192 256 206.3 256 224V288C256 305.7 270.3 320 288 320C305.7 320 320 305.7 320 288V224z"></path></svg>
                                    Ottieni indicazioni
                                </a>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default InfoLocation;
