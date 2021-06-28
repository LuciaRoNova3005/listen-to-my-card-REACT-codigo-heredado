const getApiCard = (dataCard) => {
  console.log("fsdfjdhf");
  return fetch("http://localhost:3000/card/", {
    method: "POST",
    body: JSON.stringify(dataCard),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
};

export default getApiCard;
