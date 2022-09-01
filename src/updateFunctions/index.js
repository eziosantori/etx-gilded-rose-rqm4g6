import { ITEMS } from '../Costants';
import { updateCommon } from './common';
import { updateAgedBrie } from './agedBrie';
import { updateBackstagePasses } from './backstagePasses';

export const updateGiledItem = (item) => {
  const finalItem = { ...item };
  switch (item.name) {
    case ITEMS.AGEDBRIE:
      return updateAgedBrie(finalItem);
    case ITEMS.BACKSTAGEPASSES:
      return updateBackstagePasses(finalItem);
    case ITEMS.SULFURAS:
      return updateSulfuras(finalItem);
    default:
      return updateCommon(finalItem);
  }
};

const updateSulfuras = () => {
  return null;
};
