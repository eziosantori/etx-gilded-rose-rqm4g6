import { MAXQ } from '../Costants';

/**
 * - Actually increases in `quality` the older it gets
 * - Once the _sell by date_ has passed, `quality` degrades twice as fast (opposite for Brie)
 * @param {*} item
 */
export const updateAgedBrie = (item) => {
  if (item.name != ITEMS.AGEDBRIE) throw new Error('Item type unexpected');

  // Actually increases in `quality` the older it gets
  if (item.quality < MAXQ) item.quality++;

  item.sellIn--;
  if (item.sellIn < 0 && item.quality < MAXQ) item.quality++;

  return item;
};
