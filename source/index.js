import craigslist from 'node-craigslist';
import _ from 'lodash';
import { extractAllPrices, average } from './listingTransforms';

let cityToSearch = 'seattle';
let searchTerm = 'van';
let searchCategory = 'cta'; // https://github.com/brozeph/node-craigslist#categories

let client = new craigslist.Client({ city: cityToSearch, nocache: true });

let options = {
  category: searchCategory,
  // maxPrice: '16000',
  // minPrice: '14999',
  searchNearby: 1
};

client
  .search(options, searchTerm)
  .then((listings) => {
    console.log(`In ${ cityToSearch }`)
    console.log(`There are ${ listings.length } listings`);
    console.log(`For the search: ${ searchTerm }`);
    console.log(extractAllPrices(listings));
    console.log(`Average price is: $${ average(extractAllPrices(listings)) }`);
    return listings;
  })
  
  .catch((err) => {
    console.error(err);
  });
