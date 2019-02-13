// VARIABLES
let car = {
    make: 'Lamborghini',
    model: 'Veneno',
    color: 'red',
    mileage: 0,
    isWorking: true;

    driveToWork() {
        alert(`Old Mileage: ${this.mileage}`);
        this.mileage += 10;
        alert(`New Mileage: ${this.mileage}`);
    },
};

// FUNCTION 
// Logs all of ur car's current stats to the console
/*
function reWriteStats() {
    
}
*/

//MAIN PROCESS
// Captures keyboard input and runs functions
document.onkeyup = (event) => {
    // Captures the key, converts to lowercase and saves it to a variable
    let letter = String.fromCharCode(event.keyCode).toLowerCase();
    
    if (letter === 'd') {
        car.driveToWork();
        reWriteStats();        
    };
};