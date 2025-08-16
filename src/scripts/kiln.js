// Function to fire pottery in the kiln
export const firePottery = (potteryObject, firingTemperature) => {
    // Add the fired property with value true
    potteryObject.fired = true;
    
    // Add the cracked property based on firing temperature
    if (firingTemperature > 2200) {
        potteryObject.cracked = true;
    } else {
        potteryObject.cracked = false;
    }
    
    // Return the augmented pottery object
    return potteryObject;
};