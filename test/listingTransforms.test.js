import { extractAllPrices, filterByProperty } from '../source/listingTransforms';

const stubbedListings = [
  {
    category: 'seattle.craigslist.org',
    date: '2019-10-13 17:01',
    hasPic: false,
    location: '(Puyallup)',
    pid: '6998948646',
    price: '$3995',
    title: '2002 Scooby Doo Caravan Sport',
    url: 'https://seattle.craigslist.org/tac/cto/d/puyallup-2002-dodge-caravan-sport/6998948646.html'
  },
  {
    category: 'seattle.craigslist.org',
    date: '2019-10-13 16:36',
    hasPic: true,
    location: '(_Ram_ _ProMaster City Cargo Van_ _Van_)',
    pid: '6998936289',
    price: '$12995',
    title: '2016 Ram ProMaster City Cargo Van Wagon Van 4D',
    url: 'https://seattle.craigslist.org/see/ctd/d/everett-2016-ram-promaster-city-cargo/6998936289.html'
  }
];

describe('filterByProperty', () => {
  test('filters a valid property', () => {
    expect(filterByProperty(stubbedListings, 'hasPic' ))
      .toEqual([ { hasPic: false }, { hasPic: true }]
      );
  });

  test('throws an error with an invalid property', () => {
    expect(filterByProperty(stubbedListings, 'soul' ))
      .toThrow();
  });
});