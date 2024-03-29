import React from 'react';

const SocialButton = (props) => {
    const { facebook, pinterest, telegram } =props 
    console.log(props);
    
  return (
      <div className='Social_icon'>
        <img src={facebook} alt="Facebook" width="70px"height="70px" />
        <img src={pinterest} alt="Pinterest"  width="70px"height="70px"/>
        <img src={telegram} alt="Telegram"  width="70px"height="70px"/>
      </div>
  );
}

export default SocialButton;



 /* <img src="src/img/facebook.png" alt="Facebook" width="100px"height="100px"/>
     <img src="src/img/pinterest.png" alt="Pinterest" width="100px"height="100px"/>
     <img src="src/img/telegram.png" alt="Telegram" width="100px"height="100px"/> */