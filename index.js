let craigslist = require('node-craigslist');
let util = require('util');

let client = new craigslist.Client({
  city: 'seattle'
});

let options = {
  category: 'cta',
  maxPrice: '90000',
  minPrice: '100'
};

function remove_first_character(element) {
  return element.substr(1, element.length)
}

let searchTerm = 'van';

client
  .search(options, searchTerm)
  .then((listings) => {

    console.log(`There are ${listings.length} listings for ${searchTerm}`);

    let allVanPrices = [];
    // Prices come in as strings like '$8675309'. Here we remove the $ and cast to an integer.
    listings.forEach((listing) => {
      let cleanedVanPrice = parseInt(remove_first_character(listing.price));
      allVanPrices.push(cleanedVanPrice);
    });

    console.log(allVanPrices);
  })
  .catch((err) => {
    console.error(err);
  });
