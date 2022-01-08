// Your code here
function createEmployeeRecord([a, b, c, d]){
    return { firstName : a,
            familyName : b,
            title : c,
            payPerHour : d,
            timeInEvents : [],
            timeOutEvents : []

    }
    
}

function createEmployeeRecords(arrs){
    let el = []
    for(let arr of arrs){el.push(createEmployeeRecord(arr))}
    return el   

}

function createTimeInEvent(recordObj, date){
   
    let obj = {
        type : "TimeIn",
        hour : parseInt(date.split(' ')[1], 10),
        date : date.split(' ')[0]
    }
    recordObj.timeInEvents.push(obj)
    return recordObj

}
function createTimeOutEvent(recordObj, date){
    
    let obj = {
        type : "TimeOut",
        hour : parseInt(date.split(' ')[1], 10),
        date : date.split(' ')[0]
    }
    recordObj.timeOutEvents.push(obj)
    return recordObj

}

function hoursWorkedOnDate(recordObj, date){
    let timeIn = createTimeInEvent(recordObj, date).timeInEvents[0].hour
    let timeOut = createTimeOutEvent(recordObj, date).timeOutEvents[0].hour

    return (timeOut - timeIn)/100

}

function wagesEarnedOnDate(recordObj, date){
    let pay = parseInt(recordObj.payPerHour, 10)
    let hr = hoursWorkedOnDate(recordObj, date)
    return pay*parseInt(hr, 10)

}
function allWagesFor(recordObj){
   
   

}


function calculatePayroll(){
    
}
      

