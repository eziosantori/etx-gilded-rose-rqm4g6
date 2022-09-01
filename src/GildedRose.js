import { ITEMS, MAXQ } from './Costants';
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
      if (
        this.items[i].name != ITEMS.AGEDBRIE &&
        this.items[i].name != ITEMS.BACKSTAGEPASSES
      ) {
        if (this.items[i].quality > 0) {
          if (this.items[i].name != ITEMS.SULFURAS) {
            this.items[i].quality = this.items[i].quality - 1;
          }
        }
      } else {
        if (this.items[i].quality < MAXQ) {
          this.items[i].quality = this.items[i].quality + 1;
          if (this.items[i].name == ITEMS.BACKSTAGEPASSES) {
            if (this.items[i].sellIn < 11) {
              if (this.items[i].quality < MAXQ) {
                this.items[i].quality = this.items[i].quality + 1;
              }
            }
            if (this.items[i].sellIn < 6) {
              if (this.items[i].quality < MAXQ) {
                this.items[i].quality = this.items[i].quality + 1;
              }
            }
          }
        }
      }
      if (this.items[i].name != ITEMS.SULFURAS) {
        this.items[i].sellIn = this.items[i].sellIn - 1;
      }
      if (this.items[i].sellIn < 0) {
        if (this.items[i].name != ITEMS.AGEDBRIE) {
          if (this.items[i].name != ITEMS.BACKSTAGEPASSES) {
            if (this.items[i].quality > 0) {
              if (this.items[i].name != ITEMS.SULFURAS) {
                this.items[i].quality = this.items[i].quality - 1;
              }
            }
          } else {
            this.items[i].quality =
              this.items[i].quality - this.items[i].quality;
          }
        } else {
          if (this.items[i].quality < MAXQ) {
            this.items[i].quality = this.items[i].quality + 1;
          }
        }
      }
    }

    return this.items;
  }
}
