import { readFileSync } from 'fs';
import { dirname, normalize } from 'path';
import { First, Variation } from './interfaces/first';
import { Second, SecondInner } from './interfaces/second.js';

const DIRNAME = dirname(import.meta.url);

const firstPath = normalize(`${DIRNAME}/../data/first_array.json`);

const first: First[] = JSON.parse(
  readFileSync('/home/amli/workspace/amliProjects/js/data/first_array.json', 'utf8')
);

const second: Second[] = JSON.parse(
  readFileSync('/home/amli/workspace/amliProjects/js/data/second_array.json', 'utf8')
);

type MyMap = Map<string, SecondInner>;

const hm: MyMap = new Map();

second.forEach((x) => hm.set(x.Sku, new SecondInner(x)));

const firstMapped = first.map((item) => {
  item.variations = item.variations.map((variation) => mapFn(variation, hm));
  return item;
});

function mapFn(item: Variation, secondMap: MyMap): RequiredAndNotNull<Variation> {
  const additionalProps = secondMap.get(item.sku)!;
  const value: ReturnType<typeof mapFn> = { ...item, ...additionalProps };
  return value;
}

console.log(JSON.stringify(firstMapped));

/** Tipo que excluye null y undefined de las keys de un objeto y las pone en requeridas (quita el ?) */
type RequiredAndNotNull<T> = {
  [P in keyof T]-?: Exclude<T[P], null | undefined>;
};
