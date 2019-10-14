let craigslist = require('node-craigslist');
let util = require('util');
import extractAllPrices from './listingTransforms';

let cityToSearch = 'seattle';
let searchTerm = 'van';
let searchCategory = 'cta';

let client = new craigslist.Client({ city: cityToSearch });

let options = {
  category: searchCategory,
  maxPrice: '90000',
  minPrice: '100'
};

client
  .search(options, searchTerm)
  .then((listings) => {

    console.log(`There are ${listings.length} listings for ${searchTerm}`);
    console.log(extractAllPrices(listings));
  })
  .catch((err) => {
    console.error(err);
  });
