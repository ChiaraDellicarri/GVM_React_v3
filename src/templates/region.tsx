/**
 * This is an example of how to create a template that makes use of streams data.
 * The stream data originates from Yext's Knowledge Graph. When a template in
 * concert with a stream is built by the Yext Sites system, a static html page
 * is generated for every corresponding (based on the filter) stream document.
 *
 * Another way to think about it is that a page will be generated using this
 * template for every eligible entity in your Knowledge Graph.
 */

import {
    GetHeadConfig,
    GetPath,
    GetRedirects,
    HeadConfig,
    Template,
    TemplateConfig,
    TemplateProps,
    TemplateRenderProps,
} from "@yext/pages";
import * as React from "react";
import HeaderIndex from "../components/header-index";
import PageLayout from "../components/page-layout";
import getImageUUID from "@yext/pages/components/image";
import "../index.css";
import Footer from "../components/footer";


/**
 * Required when Knowledge Graph data is used for a template.
 */
export const config: TemplateConfig = {
    stream: {
        $id: "ce_region",
        // Specifies the exact data that each generated document will contain. This data is passed in
        // directly as props to the default exported function.
        filter: {
            savedFilterIds: ["dm_health-v2_r_regione"]
        },
        fields: [
            "id",
            "name",
            "slug",
            "dm_directoryChildren.name",
            "dm_directoryChildren.id",
            "dm_directoryChildren.slug",
            "dm_directoryChildren.c_nomeStruttura",
            "dm_directoryChildren.c_immagineStruttura",
            "dm_directoryChildren.address"
        ],
        // The entity language profiles that documents will be generated for.
        localization: {
            locales: ["it"],
            primary: false,
        },
    },
};

/**
 * Defines the path that the generated file will live at for production.
 *
 * NOTE: This currently has no impact on the local dev path. Local dev urls currently
 * take on the form: featureName/entityId
 */
export const getPath: GetPath<TemplateProps> = ({ document }) => {
    return document.slug
        ? document.slug
        : `${document.locale}/${document.address.region}/${document.address.city}/${document.address.address1
        }-${document.id.toString()}`;
};

/**
 * Defines a list of paths which will redirect to the path created by getPath.
 *
 * NOTE: This currently has no impact on the local dev path. Redirects will be setup on
 * a new deploy.
 */
export const getRedirects: GetRedirects<TemplateProps> = ({ document }) => {
    return [`index/${document.id.toString()}`];
};

/**
 * This allows the user to define a function which will take in their template
 * data and procude a HeadConfig object. When the site is generated, the HeadConfig
 * will be used to generate the inner contents of the HTML document's <head> tag.
 * This can include the title, meta tags, script tags, etc.
 */
export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
    relativePrefixToRoot,
    path,
    document,
}): HeadConfig => {
    return {
        title: document.name,
        charset: "UTF-8",
        viewport: "width=device-width, initial-scale=1",
        tags: [
            {
                type: "meta",
                attributes: {
                    name: "description",
                    content: document.description,
                },
            },
            {
                type: "meta",
                attributes: {
                    name: "author",
                    content: "Gruppo Villa Maria",
                },
            },
            {
                type: "link",
                attributes: {
                    rel: "stylesheet",
                    href: "https://use.typekit.net/yfq1avx.css"
                }
            }
        ],
    };
};


const Region: Template<TemplateRenderProps> = ({
    relativePrefixToRoot,
    path,
    document,
}) => {
    const {
        id,
        name,
        slug,
        dm_directoryChildren
    } = document;

    const strutture: any = [];

    const sortedStrutture = dm_directoryChildren.map((struttura: any) => {
        strutture.push(struttura);
        strutture.sort(function (a: any, b: any) {
            var a = a.c_nomeStruttura, b = b.c_nomeStruttura;
            return (a < b) ? -1 : (a > b) ? 1 : 0;
        })
    });

    return (
        <>
            <div className="header sticky top-0">
                <HeaderIndex
                    logo="https://www.gvmnet.it/App_Themes/GVMNet/images/gruppovillamaria_logo.png"
                ></HeaderIndex>
            </div>
            <div className="section section_breadcrumbs">
                <div className="container">
                    <a href="/index.html" className="br_home">Home</a> {" > "} <span className="active_page">{name}</span>
                </div>
            </div>
            <div className="section">
                <div className="container">
                    <div className="bg-gray-100 container_nearby">
                        <h4 className="text-center mb-2 title_nearby">Ospedali GVM in {name}</h4>
                        <div className="location-data">
                            {strutture.map(el => {
                                return (
                                    <a className="location_nearby" href={el.slug}>
                                        <div className="grid address-cta-column">
                                            <div className="image" style={{ background: `url(${el.c_immagineStruttura.url})` }}></div>
                                            <h5 className="name text-xl font-semibold">{el.c_nomeStruttura}</h5>
                                            <div className="address">
                                                <div>
                                                    <span data-yext-field="address.line1" data-yext-id={el.id}>{el.address.line1}</span>,{" "}
                                                    <span data-yext-field="address.postalCode" data-yext-id={el.id}>{el.address.postalCode}</span>,{" "}
                                                    <span data-yext-field="address.city" data-yext-id={el.id}>{el.address.city}</span>,{" "}
                                                    <span data-yext-field="address.region" data-yext-id={el.id}>{el.address.region}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                )
                            })}
                        </div>
                    </div>
                </div >
            </div >
            <div className="w-full bg-gray-100">
                <div className="">
                    <Footer />
                </div>
            </div>
        </>
    );
};

export default Region;
