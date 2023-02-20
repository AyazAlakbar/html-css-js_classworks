// let arr=[1,2,3];
// let sum=0;

// function Arr(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         const element = arr[i];
//         arr[i]=arr[i]+1
//     }
//     console.log(arr);
// }
// Arr(arr)


const company1={
    name:"Company1",
    createdDate:2001,
    terminateDate:2020,
    annualR:105000
}


const company2={
    name:"Company2",
    createdDate:2005,
    terminateDate:2020,
    annualR:250000
}


const company3={
    name:"Company3",
    createdDate:2002,
    terminateDate:2020,
    annualR:200050
}


let companies = [company1, company2, company3];

let highRevenueCompanies = companies.filter(company => company.annualR > 200000 && company.createdDate>=2002 && company.terminateDate<=2020);

console.log(highRevenueCompanies);
console.log(highRevenueCompanies.reduce((prev,next)=>prev+next.annualR),0);

