// Part A

let celcius, fahrenheit ; 

function convertToFahrenheit(celcius)
{
    let fahrenheit = celcius*1.8 +32 ; 
    console.log(`${celcius}°C is ${fahrenheit}°F`) ;
}
function convertToCelcius(fahrenheit)
{
    let celcius = (fahrenheit-32) * (5/9) ; 
    console.log(`${fahrenheit}°F is ${celcius}°C`) ;
}
convertToFahrenheit(3);
convertToCelcius(37.4); 


// Part B 

let lucasMass,lucasHeight, johnMass, johnHeight;
lucasMass = 78 ;
lucasHeight = 1.69 ; 
johnMass = 92; 
johnHeight = 1.95 ; 
function getBMI(mass, height)
{
    return mass/height **2 ; 
}

function compareBMI(lucasMass, lucasHeight, johnMass, johnHeight)
{
    let lucasBMI = getBMI(lucasMass,lucasHeight) ; 
    let johnBMI = getBMI(johnMass, johnHeight) ;
    if(lucasBMI>johnBMI) {
        console.log(`Lucas' BMI (${lucasBMI}) is higher than John's (${johnBMI})`) ; 
    }
    else if(lucasBMI<johnBMI) {
        console.log(`Lucas' BMI (${lucasBMI}) is lower than John's (${johnBMI})`) ; 
    }
    else{
        console.log(`Lucas' BMI (${lucasBMI}) is the same as John's (${johnBMI})`) ; 
    }
}

compareBMI(lucasMass,lucasHeight, johnMass,johnHeight) ; 

// Part C
let netsAverage, knicksAverage; 
function getAverage(score1, score2, score3)
{
    let average = (score1+score2+score3) / 3 ; 
    return average ; 
}
function getWinner(netsAverage, knicksAverage)
{
    if(netsAverage<100) {
        if(knicksAverage<100){
            console.log(`Nets: ${netsAverage} Knicks: ${knicksAverage}\nBoth teams scored an average under 100. There's no winner.`);
        }
        else if(knicksAverage>100)
        {
            console.log(`Nets: ${netsAverage} Knicks: ${knicksAverage}\nThe Knicks are your champions!`);
        }
       }
    
    else if(knicksAverage<100)
    {
        console.log(`Nets: ${netsAverage} Knicks: ${knicksAverage}\nThe Nets are your champions!`);
    }
    else if(netsAverage>knicksAverage)
    {
        console.log(`Nets: ${netsAverage} Knicks: ${knicksAverage}\nThe Nets are your champions!`);
    }
    else if(netsAverage<knicksAverage)
    {
        console.log(`Nets: ${netsAverage} Knicks: ${knicksAverage}\nThe Knicks are your champions!`);
    }
    else if(netsAverage==knicksAverage)
    {
        console.log(`Nets: ${netsAverage} Knicks: ${knicksAverage}\nIt's a draw! There's no champion.`);
    }
}

// Data 1 
netsAverage = getAverage(96,108,89) ; 
knicksAverage = getAverage(88,91,110) ; 
getWinner(netsAverage,knicksAverage) ; 

// Data 2 
netsAverage = getAverage(97,112,101) ; 
knicksAverage = getAverage(109,95,123) ; 
getWinner(netsAverage,knicksAverage) ; 

// Data 3 
netsAverage = getAverage(97,112,101) ; 
knicksAverage = getAverage(109,95,106) ; 
getWinner(netsAverage,knicksAverage) ; 
