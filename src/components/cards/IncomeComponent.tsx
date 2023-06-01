import React from 'react';
import {returnResultForIncome} from '../../API/results';
import { jsonInfo } from '../../API/jsonInfo.js' ;

const IncomeComponent = () => {

    const number = returnResultForIncome(jsonInfo);
    console.log(number);

    return (
            <div className="grow border-2 border-slate-300 rounded-md p-4 mr-2">
            <div className="pb-4 font-bold text-2xl color-black-500">{number}</div>
                <div className="pb-8">Income</div>
                <div className="text-end">
                    <button className="bg-sky-600 rounded-md px-12 py-2 text-white">See all</button>
            </div>
            </div>
    )
};

export default IncomeComponent;