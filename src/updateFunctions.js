import { ITEMS, MAXQ } from './Costants';

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

const updateCommon = () => {
  return null;
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
