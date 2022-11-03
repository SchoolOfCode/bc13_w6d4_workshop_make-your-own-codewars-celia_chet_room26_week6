/* 
👉 Write your kata here!
*///👉 Write your tests below here:
//Number of hours till Deadline calculator assuming noon from starting day to noon on deadline day without using the DATE function 

//Date and deadline given as a string e.g. 10th January 2022

//plan to solve, number of hours is, find number of days between both dates and then multiply by 24
//Assume february has 28 days
//Assume dates within same year


function deadlineCalc(startDate, endDate){
    let arrayOfMonthsAndDays = [['January', 31],['February', 28], ['March', 31], ['April', 30], ['May', 31], ['June', 30], ['July', 31], ['August', 31], ['September', 30], ['October', 31], ['November', 30], ['December', 31]]
    let startDateArray = startDate.split(" ")
    let endDateArray = endDate.split(" ")
    let startMonth = startDateArray[1]
    let endMonth = endDateArray[1]
    let startDay = ""
    let endDay = ""

    
    if(startDate[1]==='s'||startDate[1]==='r'||startDate[1]==='t'||startDate[1]==='n'){
        startDay = startDateArray[0].substring(0,1);
    }
    else{
        startDay = startDateArray[0].substring(0,2);
    }

    if(endDate[1]==='s'||endDate[1]==='r'||endDate[1]==='t'||endDate[1]==='n'){
        endDay = endDateArray[0].substring(0,1);
    }
    else{
        endDay = endDateArray[0].substring(0,2);
    }


    let startIndex = 0;
    let endIndex = 0;
    for(let i=0; i<arrayOfMonthsAndDays.length; i++){
        if(arrayOfMonthsAndDays[i][0]===startMonth){
            startIndex = i;
        }
        if(arrayOfMonthsAndDays[i][0]===endMonth){
            endIndex = i;
        }
    }

    let answer = 0
    for(let i = startIndex+1; i<endIndex; i++){
        answer += arrayOfMonthsAndDays[i][1];
        console.log(answer)
    }

    if(startMonth === endMonth){
        answer += endDay - startDay
    }
    else{
        answer += arrayOfMonthsAndDays[startIndex][1]-Number(startDay);
        answer += Number(endDay);
    }


    console.log(answer)
    return answer
}


deadlineCalc('6th January 2022', '10th January 2022')

//👉 Write the function your CodeWarriors will start with below here:
