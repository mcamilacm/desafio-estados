import SocialButton from "./SocialButton";
import Formulario from './Formulario';
// import Alert from './components/Alert';

const Registro = () => {
  return (
    <>
      <SocialButton
        facebook="src/img/facebook.png"
        pinterest="src/img/pinterest.png"
        telegram="src/img/telegram.png"
      />
      <Formulario />
    </>
  );
};
export default Registro;

/* <img src="src/img/facebook.png" alt="Facebook" width="100px"height="100px"/>
     <img src="src/img/pinterest.png" alt="Pinterest" width="100px"height="100px"/>
     <img src="src/img/telegram.png" alt="Telegram" width="100px"height="100px"/> */
