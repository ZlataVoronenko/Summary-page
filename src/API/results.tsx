export const returnResultForIncome = (arr: any[]) => {

    let arrayForIncome = arr.filter(elem => elem.type.includes("income"));
    const numberForIncome = arrayForIncome.length;

    return numberForIncome
};

export function returnResultForOutcome(arr: any[]) {

        let arrayForOutcome = arr.filter(elem => elem.type.includes("outcome"));
        const numberForOutcome = arrayForOutcome.length;

        return numberForOutcome
    }

export function returnResultForLoan(arr: any[]) {

        let arrayForLoan = arr.filter(elem => elem.type.includes("loan"));
        const numberForLoan = arrayForLoan.length;

        return numberForLoan
}
    

export function returnResultForInvestment(arr: any[]) {

        let arrayForInvestment = arr.filter(elem => elem.type.includes("investment"));
        const numberForInvestment = arrayForInvestment.length;

        return numberForInvestment
}
    
export function returnAllArray(arr: any[]) {

    let sumOfArray = arr.length;

    return sumOfArray
}