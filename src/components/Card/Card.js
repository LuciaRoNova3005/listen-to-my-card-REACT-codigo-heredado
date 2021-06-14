//Esto debería llamarse Card y estar en components//

import "../../stylesheets/App.scss";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function Card() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default Card;
