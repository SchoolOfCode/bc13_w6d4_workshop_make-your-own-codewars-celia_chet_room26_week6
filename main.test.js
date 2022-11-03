//👉 Write your tests below here:
//Number of hours till Deadline calculator assuming noon from starting day to noon on deadline day without using the DATE function 

//Date and deadline given as a string e.g. 10th January 2022

//plan to solve, number of hours is, find number of days between both dates and then multiply by 24
//Assume february has 28 days


function deadlineCalc(startDate, endDate){
    let numOfDaysInMonth = [['January', 31],['February', 28], ['March', 31], ['April', 30], ['May', 31], ['June', 30], ['July', 31], ['August', 31], ['September', 30], ['October', 31], ['November', 30], ['December', 31]]

    let startDateArray = startDate.split(" ")
    let month = startDateArray[1]
    console.log(month)


    return answer
}


deadlineCalc('10th January 2022', '10th January 2022')