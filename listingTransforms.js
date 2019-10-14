import _ from 'lodash';

function remove_first_character(element) {
  return element.substr(1, element.length)
}

export const extractAllPrices = (listings) => {
  let allPrices = [];
  // Prices come in as strings like '$8675309'. Here we remove the $ and cast to an integer.
  listings.forEach((listing) => {
    let cleanedPrice = parseInt(remove_first_character(listing.price));
    allPrices.push(cleanedPrice);
  });
  return allPrices;
};

// Search terms are just the `properties` of a `listing` as a string.
// Example: 'price' or 'title'. 
export const filterByProperty = (listings, ...searchTerms) => {
  let filteredListings = [];

  listings.forEach((listing) => {
    filteredListings
      .push(
        _.pick(listing, searchTerms)
      );
  });
  return filteredListings;
}
