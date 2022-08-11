function radianToDegree(radians) {
    const inputType = typeof radians;
    if (inputType === "number") {
        let pi = Math.PI;
        return radians * (180 / pi);
    }
    return "Please input a Number";
}


function isJavaScriptFile(fileName) {
    const inputType = typeof fileName;
    if (inputType === "string") {
        let fileType = fileName.slice(-3);
        if (fileType === '.js') {
            return true;
        }
        return false;
    }
    return "Please Input a Valid String";
}


function oilPrice(diesel, petrol, octane) {

    const dieselInput = typeof diesel;
    const petrolInput = typeof petrol;
    const octaneInput = typeof octane;

    if (dieselInput === 'number' && petrolInput === 'number' && octaneInput === 'number') {
        let dieselPrice = 114 * diesel;
        let petrolPrice = 130 * petrol;
        let octanePrice = 135 * octane;
        const total = dieselPrice + petrolPrice + octanePrice;
        return total;
    }
    return "Please input a valid number";
}

function publicBusFare(peoples) {
    const inputType = typeof peoples;
    if (inputType === 'number') {
        let reservedBusSeat = 50;
        let microbusSeat = 11;
        let totalSeat = reservedBusSeat + microbusSeat;
        let publicBusFare = 250;

        if (totalSeat > peoples) {
            return 0;
        }
        else {
            let extrapeople = peoples - totalSeat;
            let total = extrapeople * publicBusFare
            return total;
        }
    }
    return "Please Input a Valid Number";
}

function isBestFriend(first, second) {
    const firstInput = typeof first;
    const secondInput = typeof second

    if (firstInput === 'object' && secondInput === 'object') {
        if (first.name === second.friend && second.name === first.friend) {
            return true;
        }
        else {
            return false;
        }
    }
    return "Please Insert a Valid Object";
}