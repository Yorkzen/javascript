function filterApiData(apiData, mandatoryKeys) {
  // Use the filter method to iterate through each object in apiData array
  // Return only the objects that have all the keys from the mandatoryKeys array
  return apiData.filter((obj) => {
    // Check if every key in mandatoryKeys is present in the current object (obj)
    return mandatoryKeys.every((key) => obj.hasOwnProperty(key));
  });
}

// Test examples
const data1 = [{ id: 1, price: 100 }, { price: 50 }];
const filteredData1 = filterApiData(data1, ["id"]);
console.log(filteredData1); // [{id: 1, price: 100}]

const data2 = [
  { id: 1, price: 100 },
  { id: 2, title: "" },
  { id: 3, price: 50 },
];
const filteredData2 = filterApiData(data2, ["id", "price"]);
console.log(filteredData2); // [{ id: 1, price: 100 }, { id: 3, price: 50 }]
