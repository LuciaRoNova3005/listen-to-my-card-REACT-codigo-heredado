const getApiCard = (dataCard) => {
  return fetch("https://awesome-profile-cards.herokuapp.com/card", {
    method: "POST",
    body: JSON.stringify(dataCard),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

export default getApiCard;
