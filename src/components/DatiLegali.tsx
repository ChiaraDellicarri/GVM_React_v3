import * as React from 'react';
import { Remark } from 'react-remark';

type DatiLegali = {
    dati1: any;
    dati2: any;
}

const DatiLegali = (props: DatiLegali) => {
    const { dati1, dati2 } = props;
    return (
        <div className="section" data-ya-scope="SectionDatiLegali">
            <div className="container">
                <div className="info_legali">
                    <div className="flexer">
                        <div className="col_1">
                            <Remark>{dati1}</Remark>
                        </div>
                        <div className="col_2">
                            <Remark>{dati2}</Remark>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DatiLegali;