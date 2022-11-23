import * as React from "react";
import Header from "./header";
import Footer from "./footer";

type Props = {
    children?: React.ReactNode;
    c_name?: string;
    name?: string;
    id?: string;
    address?: any;
    urlPrenotazione?: string;
    urlStrutturaSitoGVM?: string;
    regione?: any;
};

const PageLayout = (props: Props) => {
    const { name, children, c_name, id, address, urlPrenotazione, urlStrutturaSitoGVM, regione } = props;
    return (<>
        <div className="min-h-screen">
            <Header logo="https://www.gvmnet.it/App_Themes/GVMNet/images/gruppovillamaria_logo.png"
                nomeStruttura={c_name}
                name={name}
                id={id}
                address={address}
                urlPrenotazione={urlPrenotazione}
                urlStrutturaSitoGVM={urlStrutturaSitoGVM}
            />
            <div className="section section_breadcrumbs" data-ya-scope="SectionBreadcrumbs">
                <div className="container">
                    <a className="br_home" data-ya-track="LinkHome" href="/index.html">
                        Home
                    </a>{" > "}
                    {regione && regione.map((el: any) => {
                        if (el.meta.entityType.id == "ce_region")
                            return (
                                <>
                                    <a className="br_regione" data-ya-track="LinkRegione" href={el.slug}>
                                        {el.name}
                                    </a>
                                    {" > "}
                                </>)
                    })
                    }
                    <span className="active_page br_ospedale">
                        {c_name ? c_name : name}
                    </span>
                </div>
            </div>
            {children}
            <Footer />
        </div>
    </>
    );
};


export default PageLayout;
