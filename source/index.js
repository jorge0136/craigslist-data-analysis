import craigslist from 'node-craigslist';
import chalk from 'chalk';

import { extractAllPrices, average } from './listingTransforms';

let cityToSearch = 'Seattle';
let searchTerm = 'Van';
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

    console.log(`In ${ chalk.green(cityToSearch) }`);
    console.log(`There are ${ chalk.green(listings.length) } listings`);
    console.log(`For the search: ${ chalk.green(searchTerm) }`);
    // console.log(extractAllPrices(listings));
    console.log(`Average price ${ chalk.green('$')}${ chalk.green(average(extractAllPrices(listings))) }`);
    return listings;

  })

  .catch((err) => {
    console.error(err);
  });
