import * as React from "react";
import Aperto from "./IsOpen";
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

type Banner = {
    name?: string;
    /*    address?: Address;*/
    openTime?: string;
    info?: string;
    tel?: string;
    prenota?: string;
    immagine?: string;
    hours?: any;
};


const Banner = (props: Banner) => {
    const { name, info, tel, prenota, immagine, hours } = props;

    return (
        <>
            <div className="section section_main_banner" data-ya-scope="SectionBanner">
                <div className="container flex flex-col md:flex-row">
                    <div className="main_banner_info flex flex-col justify-between w-full md:w-2/5">
                        <div>
                            <div className="big_title">
                                {name}
                            </div>
                            <div> <div id="openorclosed" className="open">{hours && <Aperto hours={hours} />}</div>

                            </div>
                        </div>
                        <p className="descrizione">{info}</p>
                        <div className="flex flex-wrap main_banner_links">

                            <a data-ya-track="CTACentralino" className="flex w-1/2 items-center button button_prenota button_chiama_trigger" href={"tel:" + tel}>
                                <svg className="" width="28px" height="28px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="phone-flip" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M18.92 351.2l108.5-46.52c12.78-5.531 27.77-1.801 36.45 8.98l44.09 53.82c69.25-34 125.5-90.31 159.5-159.5l-53.81-44.04c-10.75-8.781-14.41-23.69-8.974-36.47l46.51-108.5c6.094-13.91 21.1-21.52 35.79-18.11l100.8 23.25c14.25 3.25 24.22 15.8 24.22 30.46c0 252.3-205.2 457.5-457.5 457.5c-14.67 0-27.18-9.968-30.45-24.22l-23.25-100.8C-2.571 372.4 5.018 357.2 18.92 351.2z"></path></svg>
                                <div className="button_part_right"><strong>Centralino</strong> <span data-yext-field="phone" data-yext-id="GVMAMC1">{tel}</span></div>
                            </a>

                            <a data-ya-track="CTAPrenota" className="flex w-1/2 items-center button button_prenota button_prenota_trigger" href={prenota} target="_blank" rel="noreferrer">
                                <svg className="" width="24.5" height="28px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="calendar-check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M160 32V64H288V32C288 14.33 302.3 0 320 0C337.7 0 352 14.33 352 32V64H400C426.5 64 448 85.49 448 112V160H0V112C0 85.49 21.49 64 48 64H96V32C96 14.33 110.3 0 128 0C145.7 0 160 14.33 160 32zM0 192H448V464C448 490.5 426.5 512 400 512H48C21.49 512 0 490.5 0 464V192zM328.1 304.1C338.3 295.6 338.3 280.4 328.1 271C319.6 261.7 304.4 261.7 295 271L200 366.1L152.1 319C143.6 309.7 128.4 309.7 119 319C109.7 328.4 109.7 343.6 119 352.1L183 416.1C192.4 426.3 207.6 426.3 216.1 416.1L328.1 304.1z"></path></svg>
                                <div className="button_part_right"><strong>Prenota</strong><span>Online attraverso il form</span></div>
                            </a>

                        </div>

                    </div>
                    <div className="main_banner main_banner_image w-full md:w-3/5">
                        <div className="relative z-20 overflow-hidden h-70 md:h-full">
                           
                            <img src={immagine} />
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Banner;
