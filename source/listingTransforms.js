import _ from 'lodash';

function validateListings(listings) {
  if (_.isNil(listings) || listings.length === 0) { 
    throw new Error('Listings is null, did the query fail?');
  }
}

function removeFirstCharacter(element) {
  return element.substr(1, element.length)
}

export const extractAllPrices = (listings) => {
  validateListings(listings);
  let allPrices = [];
  // Prices come in as strings like '$8675309'. Here we remove the $ and cast to an integer.
  listings.forEach((listing) => {
    let cleanedPrice = parseInt(removeFirstCharacter(listing.price));
    allPrices.push(cleanedPrice);
  });
  return allPrices;
};

// Search terms are the `properties` of a `listing` as a string.
// Example for a auto/car search: 'price' or 'title'. 
export const filterByProperty = (listings, ...properties) => {
  validateListings(listings);
  if (_.isNil(...properties)) { throw new Error("No properties passed to the filter."); }
  let filteredListings = [];

  listings.forEach((listing) => {
    filteredListings
      .push(
        _.pick(listing, properties)
      );
  });
  return filteredListings;
};
