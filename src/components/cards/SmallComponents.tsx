import React from 'react';
import IncomeComponent from './IncomeComponent';
import LoanComponent from './LoanComponent';
import OutcomeComponent from './OutcomeComponent';
import InvestmentComponent from './InvestmentComponent';

const SmallComponents = () => {
    return (
        <div>
            <div className='flex mb-2'>
                <IncomeComponent />
                <InvestmentComponent/>
            </div>
            <div className='flex'>
                <OutcomeComponent />
                <LoanComponent />
            </div>
        </div>
    )
};

export default SmallComponents;