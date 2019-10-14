
function remove_first_character(element) {
  return element.substr(1, element.length)
}

const extractAllPrices = (listings) => {
  let allPrices = [];
  // Prices come in as strings like '$8675309'. Here we remove the $ and cast to an integer.
  listings.forEach((listing) => {
    let cleanedPrice = parseInt(remove_first_character(listing.price));
    allPrices.push(cleanedPrice);
  });
  return allPrices;
};

export default extractAllPrices;
