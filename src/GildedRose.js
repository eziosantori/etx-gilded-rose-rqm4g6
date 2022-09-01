import { ITEMS, MAXQ } from './Costants';
import { updateGiledItem } from './updateFunctions';

export class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  constructor(items = []) {
    this.items = items;
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i];
      const updatedItem = updateGiledItem(item);
      if (updatedItem != null) {
        item.sellIn = updatedItem.sellIn;
        item.quality = updatedItem.quality;
      }
    }

    return this.items;
  }
}
