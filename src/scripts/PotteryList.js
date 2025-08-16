// Import the usePottery function to get items for sale
import { usePottery } from './potteryCatalog.js';

// Function to generate HTML representation of all pottery for sale
export const potteryList = () => {
    // Get the array of pottery items to be sold
    const potteryForSale = usePottery();
    
    // Convert each pottery object to HTML string
    const htmlStrings = potteryForSale.map(pottery => {
        return `<article class="pottery">
    <h2 class="pottery__shape">${pottery.shape}</h2>
    <div class="pottery__properties">
        Weight: ${pottery.weight} | Height: ${pottery.height}
    </div>
    <div class="pottery__price">$${pottery.price}</div>
    </article>`;
    });
    
    // Join all HTML strings into a single string
    return htmlStrings.join('\n');
};