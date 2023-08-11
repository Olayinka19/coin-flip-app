import React from 'react'

function NavBar() {
  return (
    <div>
    
<button class="uk-button uk-button-default" type="button" uk-toggle="target: #offcanvas-overlay"><img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.iconbolt.com%2Fpreview%2Ffacebook%2Fdripicons%2Fmenu.svg&f=1&nofb=1&ipt=3dad0d32135d4c435bb7097284feac2dae6061687936bc992985f600f871a4b6&ipo=images" width="30px" height="30px" />Menu</button>

<div id="offcanvas-overlay" uk-offcanvas="overlay: true">
    <div class="uk-offcanvas-bar">

        <button class="uk-offcanvas-close" type="button" uk-close></button>


        <h3>🎮 Welcome to the Ultimate Coin-Flip Challenge! Let's Dive In! 🎉</h3>

        <p>🎮 **Welcome to the Coin-Flip Challenge! Ready to Play?** 🪙
1. **Flip with Flair:** Hold your coin, tap to flip, and ride the excitement!
2. **Gravity's Gamble:** Watch it land, hearts racing – did you guess right?
3. **Flip Champ:** Celebrate wins, learn from losses, and join the flip community for endless fun! 🏆🌍</p>

    </div>
</div>
        
    </div>
  )
}

export default NavBar