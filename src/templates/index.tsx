/**
 * This is an example of how to create a static template that uses getStaticProps to retrieve data.
 */
import * as React from "react";
import "../index.css";
import {
  Template,
  GetPath,
  GetHeadConfig,
  HeadConfig,
  TransformProps,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
} from "@yext/pages";
import Searchbox from "../components/Searchbox";
import Footer from "../components/footer";
import HeaderIndex from "../components/header-index";

export const config: TemplateConfig = {
    stream: {
        $id: "ce_root",
        filter: {
            savedFilterIds: ["dm_health-v2"]
        },
        fields: [
            "id",
            "name",
            "slug",
            "dm_directoryChildren.name",
            "dm_directoryChildren.slug",
            "dm_directoryChildren.dm_directoryChildren.name",
            "dm_directoryChildren.dm_directoryChildren.c_nomeStruttura",
            "dm_directoryChildren.dm_directoryChildren.id",
            "dm_directoryChildren.dm_directoryChildren.slug",
            "dm_directoryChildren.dm_directoryChildren.address",
            "dm_directoryChildren.dm_directoryChildren.geocodedCoordinate",
            "dm_directoryChildren.dm_directoryChildren.hours"
        ],
        localization: {
            locales: ["it"],
            primary: false,
        },
    },
};

/**
 * Not required depending on your use case.
 */
/*export const config: TemplateConfig = {
  // The name of the feature. If not set the name of this file will be used (without extension).
  // Use this when you need to override the feature name.
  name: "turtlehead-tacos",
};*/

/**
 * A local type for transformProps. This could live in src/types but it's generally
 * best practice to keep unshared types local to their usage.
 */
/*type ExternalImageData = TemplateProps & { externalImage: ExternalImage };
*/
/**
 * Used to either alter or augment the props passed into the template at render time.
 * This function will be run during generation and pass in directly as props to the default
 * exported function.
 *
 * This can be used when data needs to be retrieved from an external (non-Knowledge Graph)
 * source. This example calls a public API and returns the data.
 *
 * If the page is truly static this function is not necessary.
 */
/*export const transformProps: TransformProps<ExternalImageData> = async (
  data
) => {
  const url = import.meta.env.YEXT_PUBLIC_EXTERNAL_IMAGE_API_BASE_URL + "/2";
  const externalImage = (await fetch(url).then((res: any) =>
    res.json()
  )) as ExternalImage;
  return { ...data, externalImage };
};*/

/**
 * Defines the path that the generated file will live at for production.
 *
 * NOTE: This currently has no impact on the local dev path. Local dev urls currently
 * take on the form: featureName/entityId
 */
export const getPath: GetPath<TemplateProps> = ({ document }) => {
    return `index.html`;
};
/*
type ExternalImageRenderData = TemplateRenderProps & {
  externalImage: ExternalImage;
};
*/

/**
 * This allows the user to define a function which will take in their template
 * data and produce a HeadConfig object. When the site is generated, the HeadConfig
 * will be used to generate the inner contents of the HTML document's <head> tag.
 * This can include the title, meta tags, script tags, etc.
 */
 export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
}): HeadConfig => {
  return {
    title: "Static Page Example",
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
    tags: [
      {
        type: "meta",
        attributes: {
          name: "description",
          content: "Static page example meta description.",
        },
      }
    ],
  };
};


/**
 * This is the main template. It can have any name as long as it's the default export.
 * The props passed in here are the direct result from `getStaticProps`.
 */
const Index: Template<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document
}) => {
    const {
        dm_directoryChildren
    } = document;

    const regioni: any = [];
    const strutture: any = [];

    const sortedRegioni = dm_directoryChildren.map((regione: any) => {
        regioni.push(regione);
        regioni.sort(function (a: any, b: any) {
            var a = a.name, b = b.name;
            return (a < b) ? -1 : (a > b) ? 1 : 0;
        })
    });

    const sortedStrutture = dm_directoryChildren.map((entity: any) => {
        { entity.dm_directoryChildren.map((struttura: any) => strutture.push(struttura)) }
        strutture.sort(function (a: any, b: any) {
            var a = a.c_nomeStruttura, b = b.c_nomeStruttura;
            return (a < b) ? -1 : (a > b) ? 1 : 0;
        })
    });

    return (
        <>
            <div className="flex min-h-screen w-full">
                <div className="w-full">
                    <div className="header sticky top-0">
                        <HeaderIndex
                            logo="https://www.gvmnet.it/App_Themes/GVMNet/images/gruppovillamaria_logo.png"
                        ></HeaderIndex>
                    </div>
                    <div className="w-full">
                        {sortedStrutture}
                        <Searchbox defaultLocations={strutture} />      
                    </div>
                    <div className="section" data-ya-scope="SectionListRegione">
                        <div className="container">
                            <div className="lista_regioni">
                                <h5 className="title_nearby">Ospedali GVM per Regione</h5>
                                <ul className="regioni-list">
                                    {regioni.map(r => {
                                        return (
                                            <li data-ya-track={"CTAListRegione_" + r.name}><a href={r.slug} title={"Ospedali GVM in " + r.name}>{r.name}</a></li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="w-full bg-gray-100">
                        <div className="">
                            <Footer />
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Index;
