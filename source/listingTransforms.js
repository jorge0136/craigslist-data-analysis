import _ from 'lodash';

function validateListings(listings) {
  if (_.isNil(listings) || listings.length === 0) { 
    throw new Error('No Craigslist listings were found for this search.');
  }
}

function removeFirstCharacter(element) {
  return element.substr(1, element.length)
}

export const extractAllPrices = (listings) => {
  validateListings(listings);
  let filteredListings = filterByProperty(listings, "price");
  return filteredListings.map((listing) => {
    // Prices come in as strings like '$8675309'. Here we remove the `$` and cast to an integer.
    let cleanPrice = parseInt(removeFirstCharacter(listing.price));
    return cleanPrice
  });
};

export const average = (values) => (_.sum(values) / values.length);

// Filteres are the `properties` of a `listing` as a string.
// Example for a auto/car search: 'price' or 'title'. 
export const filterByProperty = (listings, ...properties) => {
  validateListings(listings);
  if (_.isNil(...properties)) { throw new Error("No properties passed to the filter."); }
  
  return listings.map((listing) => {
      return _.pick(listing, properties)
  });
};
