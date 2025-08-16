// Array to store pottery that will be sold (not exported)
const potteryToSell = [];

// Function to determine if pottery should be sold and set its price
export const toSellOrNotToSell = (potteryObject) => {
    // Only add price if the pottery is not cracked
    if (!potteryObject.cracked) {
        // Set price based on weight
        if (potteryObject.weight >= 6) {
            potteryObject.price = 40;
        } else {
            potteryObject.price = 20;
        }
        
        // Add the pottery to the array of items to be sold
        potteryToSell.push(potteryObject);
    }
    
    // Return the pottery object (with or without price property)
    return potteryObject;
};

// Function to return a copy of the array of items to be sold
export const usePottery = () => {
    return structuredClone(potteryToSell);
};