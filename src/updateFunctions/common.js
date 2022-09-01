/**
 * - At the end of each day our system lowers both values for every item
 * - Once the _sell by date_ has passed, `quality` degrades twice as fast
 * @param {*} item
 */
export const updateCommon = () => {
  if (item.quality > 0) item.quality--;

  item.sellIn--;
  if (item.sellIn < 0 && item.quality > 0) item.quality--;

  return item;
};
