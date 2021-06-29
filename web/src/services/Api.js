const getApiCard = (dataCard) => {
  console.log("fsdfjdhf");
  return fetch("/card/", {
    method: "POST",
    body: JSON.stringify(dataCard),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
};

export default getApiCard;
