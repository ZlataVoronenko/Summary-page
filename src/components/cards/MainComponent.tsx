import React from 'react';
import { Link } from 'react-router-dom';
import { returnAllArray } from '../../API/results';
import { jsonInfo } from '../../API/jsonInfo.js';


const MainComponent = () => {

    const SumOfArray = returnAllArray(jsonInfo)

    return (
            <div className="border-2 border-slate-300 mb-2">
                <div className="p-6 m-2">
                    <div className="pb-4 font-bold text-2xl pl-28">Welcome</div>
                    <div className="pb-6 text-center">With suppoting text below as a natural lead-in to additional content</div>
                    <div className="text-center">
                    <button className="bg-sky-600 px-4 py-2 rounded-md text-white "><Link to='/navigator?tab=0'>See transactions</Link></button>
                    </div>
                </div>
                <div className="bg-gray-100 p-4 border-t-2 border-t-gray-300 text-center">You have {SumOfArray} transictions</div>
            </div>
    )
};

export default MainComponent;