/**
 * - At the end of each day our system lowers both values for every item
 * - Once the _sell by date_ has passed, `quality` degrades twice as fast
 * - “Conjured” items degrade in `quality` twice as fast as normal items
 * - The `quality` of an item is never negative.
 * @param {*} item
 */
export const updateConjuredMana = (item) => {
  if (item.quality > 0) item.quality -= 2;

  item.sellIn--;
  if (item.sellIn < 0 && item.quality > 0) item.quality -= 2;

  return item;
};
