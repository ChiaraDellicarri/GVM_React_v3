import * as React from "react";

type Coordinates = {
    latitude: string;
    longitude: string;
};

const StaticMap = (props: Coordinates) => {
    const { latitude, longitude } = props;

    return (
        <>
            <img
                className="w-full"
                width="300"
                height="200"
                src={
                    "https://maps.googleapis.com/maps/api/staticmap?size=600x400&maptype=roadmap&style=feature:all%7Csaturation:-100&markers=icon:https://www.gvmnet.it/App_Themes/GVMNet/images/markerBlue.png%7C" +
                    `${latitude}` +
                    "," +
                    `${longitude}` +
                    "&center=" +
                    `${latitude}` +
                    "," +
                    `${longitude}` +
                    "&key=" + `${import.meta.env.YEXT_PUBLIC_GOOGLE_API_KEY}` + "&zoom=15"
                }
            ></img>
        </>
    );
};

export default StaticMap;

