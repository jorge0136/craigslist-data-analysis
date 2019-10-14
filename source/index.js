import craigslist from 'node-craigslist';
let util = require('util');
import _ from 'lodash';
import { extractAllPrices, filterByProperty } from './listingTransforms';

let cityToSearch = 'seattle';
let searchTerm = 'van';
let searchCategory = 'cta';

let client = new craigslist.Client({ city: cityToSearch });

let options = {
  category: searchCategory,
  maxPrice: '90000',
  minPrice: '100',
  searchNearby: false
};

client
  .search(options, searchTerm)
  .then((listings) => {
    // console.log(listings);
    // console.log(`There are ${listings.length} listings for the search: ${searchTerm}`);
    // console.log(extractAllPrices(listings));
    console.log(filterByProperty(listings, 'hasPic'));
  })
  
  .catch((err) => {
    console.error(err);
  });
