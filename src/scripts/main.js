// Import functions
import { makePottery } from './potteryWheel.js';
import { firePottery } from './kiln.js';
import { toSellOrNotToSell } from './potteryCatalog.js';
import { potteryList } from './PotteryList.js';

// Create pottery
const mug = makePottery("Mug", 2, 4);
const platter = makePottery("Platter", 8, 1);
const bowl = makePottery("Bowl", 3, 3);
const vase = makePottery("Vase", 4, 12);
const cup = makePottery("Cup", 1, 3);

// Fire pottery
const firedMug = firePottery(mug, 2000);
const firedPlatter = firePottery(platter, 2100);
const firedBowl = firePottery(bowl, 2200);
const firedVase = firePottery(vase, 2300);
const firedCup = firePottery(cup, 2500);

// Add to catalog
toSellOrNotToSell(firedMug);
toSellOrNotToSell(firedPlatter);
toSellOrNotToSell(firedBowl);
toSellOrNotToSell(firedVase);
toSellOrNotToSell(firedCup);

// Display pottery list
const potteryHTML = potteryList();
document.querySelector('article').innerHTML = potteryHTML;