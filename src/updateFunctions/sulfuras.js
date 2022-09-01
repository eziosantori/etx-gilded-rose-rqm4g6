import { ITEMS } from '../Costants';

/**
 * - “Sulfuras”, being a legendary item, never has to be sold or decreases in `quality`
 * @param {*} item
 */
export const updateSulfuras = (item) => {
  if (item.name != ITEMS.SULFURAS) throw new Error('Item type unexpected');

  return item;
};
