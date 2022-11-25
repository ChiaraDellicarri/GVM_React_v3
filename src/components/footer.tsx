import * as React from "react";

const Footer = () => {
    return (
        <footer className="w-full" data-ya-scope="SectionFooter">
            <div className="footer">
                <div className="bg-blue">
                    <div className="footer-links">
                        <div className="order-lg-3">
                            <a href="https://www.gvmspa.it/it-IT/contatti?c=ufficio-stampa" data-ya-track="LinkUfficioStampa" target="_blank" rel="noreferrer">Ufficio stampa</a><a href="https://www.gvmspa.it/it-IT/lavora-con-noi" target="_blank" rel="noreferrer">Lavora con noi</a><a href="https://gvminside.domgesa.grp/it/user/login?destination=/it" target="_blank" rel="noreferrer">Intranet Aziendale</a>
                        </div>
                        <div>
                            <span>© GVM Care &amp; Research. Tutti i diritti riservati.</span>
                            <a href="https://www.gvmnet.it/Privacy-Policy" data-ya-track="LinkPrivacyPolicy">Privacy Policy</a>
                            <a href="https://www.gvmnet.it/Cookie-Policy" data-ya-track="LinkCookiePolicy">Cookie Policy</a>
                        </div>
                    </div>
                </div>
                <div className="bottom container px-xl-5">
                    <div><strong>Gruppo Villa Maria Spa</strong></div>
                    <div>Sede legale: c.so Garibaldi, 11 - 48022 Lugo (RA)</div>
                    <div>CF. PI 00423510395</div>
                    <div><a href="https://www.gvmspa.it/" target="_blank" data-ya-track="LinkGVMSpa" rel="noreferrer">Gvmspa.it</a></div>
                    <div className="credits">An <a href="https://www.elogic.it/" target="_blank" rel="noreferrer">eLogic Project</a> powered by YEXT</div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
