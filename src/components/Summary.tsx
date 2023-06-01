import React from "react";
import MainComponent from "./cards/MainComponent";
import SmallComponents from "./cards/SmallComponents";

const Summary = () => {

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="max-w-2xl p-2">
                <MainComponent />
                <SmallComponents/>
            </div>
        </div>
        
    )
};

export default Summary;