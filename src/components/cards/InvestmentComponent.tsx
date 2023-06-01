import React from 'react';
import { returnResultForInvestment } from '../../API/results';
import { jsonInfo } from '../../API/jsonInfo.js';

const InvestmentComponent = () => {

    const number = returnResultForInvestment(jsonInfo);
    console.log(number);

    return (
    <div className="grow border-2 border-slate-300 rounded-md p-4">
                <div className="pb-4 font-bold text-2xl">{number}</div>
                <div className="pb-8">Investments</div>
                <div className="text-end">
                    <button className="bg-sky-600 rounded-md px-12 py-2 text-white">See all</button>
                </div>
            </div>
    )
};

export default InvestmentComponent;