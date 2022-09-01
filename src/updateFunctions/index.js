import { ITEMS } from '../Costants';
import { updateCommon } from './common';

export const updateGiledItem = (item) => {
  const finalItem = { ...item };
  switch (item.name) {
    case ITEMS.AGEDBRIE:
      return updateBrie(finalItem);
    case ITEMS.BACKSTAGEPASSES:
      return updateBackstage(finalItem);
    case ITEMS.SULFURAS:
      return updateSulfuras(finalItem);
    default:
      return updateCommon(finalItem);
  }
};

const updateBrie = () => {
  return null;
};

const updateBackstage = () => {
  return null;
};

const updateSulfuras = () => {
  return null;
};
