// VARIABLES
const car = {
    make: 'Lamborghini',
    model: 'Veneno',
    color: 'red',
    mileage: 0,
    isWorking: true,

    driveToWork(){
        alert(`Old Mileage: ${this.mileage}`);
        this.mileage += 10;
        alert(`New Mileage: ${this.mileage}`);
    },

    driveAroundUSA() {
        alert(`Old Mileage: ${this.mileage}`);
        this.mileage += 7000;
        alert(`New Mileage: ${this.mileage}`);
        alert(`Car needs a tuneup`);
        this.isWorking = false;
    },

    getTuneup() {
        this.isWorking = true;
        alert('Car is fixed and ready to go!');
    },

    honk() {
        alert('Honk! Honk!');
    }
};

// FUNCTIONS
// Logs all of our car's current stats to the console

reWriteStats = () => {
    document.getElementById("make").innerHTML = `${car.make}`;
    document.getElementById("model").innerHTML = `${car.model}`;
    document.getElementById("color").innerHTML = `${car.color}`;
    document.getElementById("mileage").innerHTML = `${car.mileage}`;

    let status;

    if (car.isWorking === true) {
        status = `working`;
    } else {
        status = `broken`;
    }
    document.getElementById("status").innerHTML = `${status}`;
}


// MAIN PROCESS
// Captures keyboard input. Depending on the letter pressed it will "call" (execute) different functions.
document.onkeyup = (event) => {
    // Captures the key press, converts it to lowercase, and saves it to a variable
    let letter = String.fromCharCode(event.keyCode).toLowerCase();

    if (car.isWorking === true) {
        if (letter === "t") {
            car.getTuneup();
            reWriteStats();
        }
    
            if (letter === "h") {
            car.honk();
            reWriteStats();
        }

        if (letter === "d" && car.isWorking === true) {
            car.driveToWork();
            reWriteStats();
        }

        if (letter === "r") {
            car.driveAroundUSA();
            reWriteStats();
        }
    } else {
        if (letter === "t") {
            car.getTuneup();
            reWriteStats();
        }
    
        if (letter === "h") {
            car.honk();
            reWriteStats();
        }

        if (letter === "d" || letter ==="r") {
            alert(`Can't drive. Fix you car, please.`);
        }
    }

    
}