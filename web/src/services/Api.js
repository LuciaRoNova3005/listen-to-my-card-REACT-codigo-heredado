const getApiCard = (dataCard) => {
  return fetch("http://localhost:4000/users", {
    method: "GET",
    // body: JSON.stringify(dataCard),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    });
};

export default getApiCard;
