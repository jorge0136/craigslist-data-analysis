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
  describe('when given a valid propety as a search term', () => {
    it('it returns only that property', () => {
      expect(filterByProperty(stubbedListings, 'price' ))
        .toEqual([ { price: "$3995" }, { price: "$12995" }]
        );
    });
  });

  describe('when given an invalid property as a search term', () => {
    it('returns empty results', () => {
      expect(filterByProperty(stubbedListings, 'soul' ))
        .toEqual([{}, {}]);
    });
  });
  
  describe('when there are no listings', () => {
    it('throws an error', () => {
      expect( () => filterByProperty([], 'hasPic' ))
        .toThrowError('No Craigslist listings were found');
    });
  });

  describe('when given no properties as a search term', () => {
    it('throws an error', () => {
      expect( () => filterByProperty(stubbedListings))
        .toThrowError('No properties passed');
    });
  });
});

describe('extractAllPrices', () => {
  describe('when given a valid propety as a search term', () => {
    it('it returns only that property', () => {
      expect(extractAllPrices(stubbedListings))
        .toEqual([ 3995, 12995 ]);
    });
  });
  
  describe('when there are no listings', () => {
    it('throws an error', () => {
      expect( () => extractAllPrices([]))
        .toThrowError('No Craigslist listings were found');
    });
  });
});

