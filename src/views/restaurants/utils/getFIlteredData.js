export const getFilterData = (data, filters) => {
  let filteredData = [];

  if (data) {
    filteredData = data
      .filter((value) => value.rating >= filters.rating)
      .filter((value) => value.price >= filters.prices)
      .filter((value) =>
        filters.cuisine ? value.cuisine === filters.cuisine : true
      );
    console.log(filteredData ? true : false);
    console.log(filteredData);
    return filteredData;
  }
  return filteredData;
};
