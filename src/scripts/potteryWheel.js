// Variable to track the primary key for each piece of pottery
let potteryId = 1;

// Function to create a new piece of pottery
export const makePottery = (shape, weight, height) => {
    const pottery = {
        shape: shape,
        weight: weight,
        height: height,
        id: potteryId
    };
    
    // Increment the ID for the next piece of pottery
    potteryId++;
    
    return pottery;
};