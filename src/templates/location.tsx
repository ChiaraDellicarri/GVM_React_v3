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
import About from "../components/about";
import Banner from "../components/banner";
import InEvidenza from "../components/InEvidenza";
import InfoLocation from "../components/info-location";
import PageLayout from "../components/page-layout";
import SpecialitaServizi from "../components/SpecialitaServizi";
import "../index.css";
/*import InfoLocation from "../components/info-location";
import About from "../components/about";
import InEvidenza from "../components/InEvidenza";
import SpecialitaServizi from "../components/SpecialitaServizi";
import Nearby from "../components/Nearby";
import DatiLegali from "../components/DatiLegali";*/

/**
 * Required when Knowledge Graph data is used for a template.
 */
export const config: TemplateConfig = {
    stream: {
        $id: "locations",
        // Specifies the exact data that each generated document will contain. This data is passed in
        // directly as props to the default exported function.
        fields: [
            "id",
            "uid",
            "meta",
            "name",
            "address",
            "mainPhone",
            "description",
            "hours",
            "slug",
            "geocodedCoordinate",
            "c_nomeStruttura",
            "c_regione",
            "c_descrizioneLunga",
            "photoGallery",
            "c_immagineStruttura",
            "c_immagineSpecialita",
            "c_immagine_cartina",
            "c_descrizioneBreve",
            "services",
            "c_baseURL",
            "c_uRLStrutturaSitoGVM",
            "c_urlPrenotazione",
            "c_urlContatti",
            "c_urlOrari",
            "websiteUrl",
            "neighborhood",
            "paymentOptions",
            "primaryPhoto",
            "c_iniziativeCorrelate.primaryPhoto",
            "c_iniziativeCorrelate.c_descrizioneBreve",
            "c_iniziativeCorrelate.c_baseURL",
            "c_iniziativeCorrelate.slug",
            "c_iniziativeCorrelate.name",
            "c_contenutiInEvidenza",
            "c_direttoreSanitario",
            "c_amministratoreDelegato",
            "c_postiLetto",
            "c_datiAmministrazione_1",
            "c_datiAmministrazione_2",
            "c_elencoSpecialitaStrutturaGVM",
            "c_elencoServiziStrutturaGVM",
            "c_urlTutteLeSpecialita",
            "c_regioneStruttura.name",
            "c_regioneStruttura.id",
            "c_regioneStruttura.slug",
            "dm_directoryParents.name",
            "dm_directoryParents.slug",
            "dm_directoryParents.meta.entityType"
        ],
        // Defines the scope of entities that qualify for this stream.
        filter: {
            entityTypes: ["healthcareFacility"],
            savedFilterIds: ["1234994255"]
        },
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


const Location: Template<TemplateRenderProps> = ({
    relativePrefixToRoot,
    path,
    document,
}) => {
    const {
        name,
        id,
        address,
        openTime,
        hours,
        mainPhone,
        geocodedCoordinate,
        c_nomeStruttura,
        c_descrizioneBreve,
        c_urlPrenotazione,
        c_uRLStrutturaSitoGVM,
        c_immagineStruttura,
        dm_directoryParents,
        c_descrizioneLunga,
        c_urlOrari,
        c_urlContatti,
        c_direttoreSanitario,
        c_amministratoreDelegato,
        c_postiLetto,
        c_contenutiInEvidenza,
        c_elencoSpecialitaStrutturaGVM,
        c_immagineSpecialita,
        c_elencoServiziStrutturaGVM,
        c_urlTutteLeSpecialita,
        c_datiAmministrazione_1,
        c_datiAmministrazione_2,

    } = document;

    return (
        <>
            <PageLayout name={name} c_name={c_nomeStruttura} id={id} address={address} urlPrenotazione={c_urlPrenotazione} urlStrutturaSitoGVM={c_uRLStrutturaSitoGVM} regione={dm_directoryParents} >
                <Banner name={c_nomeStruttura} info={c_descrizioneBreve} openTime={openTime} tel={mainPhone} prenota={c_urlPrenotazione} immagine={c_immagineStruttura.url} hours={hours} />                
                <InfoLocation geocodedCoordinate={geocodedCoordinate} defaultName={name} address={address} hours={hours} regione={dm_directoryParents} />
                <About
                    info={c_descrizioneLunga ? c_descrizioneLunga : c_descrizioneBreve}
                    urlStrutturaSitoGVM={c_uRLStrutturaSitoGVM}
                    urlOrari={c_urlOrari}
                    urlContatti={c_urlContatti}
                    urlPrenotazione={c_urlPrenotazione}
                    direttoreSanitario={c_direttoreSanitario}
                    amministratoreDelegato={c_amministratoreDelegato}
                    postiLetto={c_postiLetto}
                />
                {c_contenutiInEvidenza && <InEvidenza articoli={c_contenutiInEvidenza} />}
                {c_elencoSpecialitaStrutturaGVM && <SpecialitaServizi name={name} c_name={c_nomeStruttura} immagine={c_immagineSpecialita} specialita={c_elencoSpecialitaStrutturaGVM} servizi={c_elencoServiziStrutturaGVM} link={c_urlTutteLeSpecialita} />}
            </PageLayout>
        </>
    );
};

export default Location;
