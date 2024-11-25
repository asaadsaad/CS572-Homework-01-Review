const getName = (params: { first: string; last: string; }) => {
  if (params.last) {
    return `${params.first} ${params.last}`;
  }
  return params.first;
};

const name1 = getName({
  first: "Theo",
});

const name2 = getName({
  first: "Asaad",
  last: "Saad",
});