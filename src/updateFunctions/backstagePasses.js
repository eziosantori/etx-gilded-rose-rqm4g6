import { ITEMS, MAXQ } from '../Costants';
/**
 * - “Backstage passes”, like aged brie, increases in `quality` as it’s `sellIn` value approaches
 * - `quality` increases by 2 when there are 10 days or less and by 3 when there are 5 days or less
 * - But Quality drops to 0 after the concert.
 * @param {*} item
 */
export const updateBackstagePasses = (item) => {
  if (item.name != ITEMS.BACKSTAGEPASSES)
    throw new Error('Item type unexpected');

  // “Backstage passes”, like aged brie, increases in `quality` as it’s `sellIn` value approaches
  if (item.quality < MAXQ) item.quality++;

  // `quality` increases by 2 when there are 10 days or less
  if (item.sellIn < 11 && item.quality < MAXQ) item.quality++;

  // `quality` increases by 3 when there are 5 days or less
  if (item.sellIn < 6 && item.quality < MAXQ) item.quality++;

  item.sellIn--;
  // But Quality drops to 0 after the concert.
  if (item.sellIn < 0) item.quality = 0;

  return item;
};
