import * as R from 'ramda';
import {getRandomValue} from './commonFunctions.js';

const appendCityToMap_ = (map) => (maxCities) => (city) =>
  R.assoc(city, createCity_(maxCities), map);

const createCity_ = R.applySpec({
  x: () => getRandomValue(R.identity),
  y: () => getRandomValue(R.identity),
  value: () => getRandomValue(R.identity)
});

const createMap = (maxCities) =>
  R.mergeAll(R.times(appendCityToMap_({max: maxCities})(maxCities), maxCities));

export {createMap};
