let craigslist = require('node-craigslist');
let client = new craigslist.Client({ city : 'seattle' });

client
  .list()
  .then((listings) => {
    // play with listings here...
    console.log(listings);
    // listings.forEach((listing) => console.log(listing));
  })
  .catch((err) => {
    console.error(err);
  });
