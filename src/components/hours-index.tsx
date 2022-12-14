import * as React from "react";

type Hours = {
    hours: Week;
    children?: React.ReactNode;
};

interface Week extends Record<string, any> {
    monday?: Day;
    tuesday?: Day;
    wednesday?: Day;
    thursday?: Day;
    friday?: Day;
    saturday?: Day;
    sunday?: Day;
}

type Day = {
    isClosed: boolean;
    openIntervals: OpenIntervals[];
};

type OpenIntervals = {
    start: string;
    end: string;
};

const todayIndex = new Date().getDay() == 0 ? 6 : new Date().getDay() - 1;
console.log(todayIndex);
/**
 * Dynamically creates a sort order based on today's day.
 */
function getSorterForCurrentDay(): { [key: string]: number } {
    const dayIndexes = [0, 1, 2, 3, 4, 5, 6];

    return {
        monday: dayIndexes[0],
        tuesday: dayIndexes[1],
        wednesday: dayIndexes[2],
        thursday: dayIndexes[3],
        friday: dayIndexes[4],
        saturday: dayIndexes[5],
        sunday: dayIndexes[6]
    };
}

const defaultSorter: { [key: string]: number } = {
    monday: 0,
    tuesday: 1,
    wednesday: 2,
    thursday: 3,
    friday: 4,
    saturday: 5,
    sunday: 6,
};


function sortByDay(week: Week): Week {
    const tmp = [];
    for (const [k, v] of Object.entries(week)) {
        tmp[getSorterForCurrentDay()[k]] = { key: k, value: v };
    }

    const orderedWeek: Week = {};
    tmp.forEach((obj) => {
        orderedWeek[obj.key] = obj.value;
    });

    return orderedWeek;
}

const renderHours = (week: Week) => {

    const dayDom: JSX.Element[] = [];
    for (const [k, v] of Object.entries(sortByDay(week))) {
        if (isDayToday(k)) {
            dayDom.push(<DayRow key={k} day={v} />);
        }
    }

    return <div>{dayDom}</div>;
};

function isDayToday(dayName: string) {
    return defaultSorter[dayName] === todayIndex;
}


type DayRow = {
    day: Day;
};

const checkIfOpen = (props) => {
    const orario1 = (props.openIntervals[0].start).split(":");
    const orario2 = (props.openIntervals[0].end).split(":");
    let oreStart = orario1[0];
    let minStart = orario1[1];
    let oreEnd = orario2[0];
    let minEnd = orario2[1];
    const date = new Date();
    const timeComponents = [date.getHours(), date.getMinutes()];
    const deltaTime1 = Number(oreEnd) - Number(oreStart);
    const deltaTime2 = Number(minEnd) - Number(minStart);
    if (deltaTime1 == 23 && deltaTime2 == 59) {
        return (
            <div className="open-now-string"><strong>Aperto 24h</strong></div>
        )
    }
    else if (Number(oreEnd) >= Number(timeComponents[0]) && Number(timeComponents[0]) >= Number(oreStart)) {
        if ((Number(minEnd) >= Number(timeComponents[1]) || Number(minEnd) == 0) && (Number(timeComponents[1]) >= Number(minStart) || Number(minStart) == 0)) {
            if (Number(minStart) == 0) {
                minStart = "00"
            }
            if (Number(minEnd) == 0) {
                minEnd = "00"
            }
            return (
                <div className="open-now-string"><strong>Aperto</strong> ?? Chiude alle {oreEnd.toString() + ":" + minEnd}</div>
            )
        }
        else {
            return (
                <div className="open-now-string"><strong>Chiuso</strong> ?? Apre alle {oreStart.toString() + ":" + minStart}</div>
            )
        }
    }
    else {
        return (
            <div className="open-now-string"><strong>Chiuso</strong> ?? Apre alle {oreStart.toString() + ":" + minStart.toString()}</div>
        )
    }

};

const DayRow = (props: DayRow) => {
    const { day } = props;


    return (

        <div>
            {!day.isClosed && (checkIfOpen(day))}
            {day.isClosed && (
                <div>
                    Chiuso
                </div>
            )}
        </div>

    );
};

const Hours = (props: Hours) => {
    const { hours } = props;


    return (
        <>
            <div className="hours">
                {renderHours(hours)}

            </div>
        </>
    );
}

export default Hours;
