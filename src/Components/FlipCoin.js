
import React,{ Component } from 'react'
import Coin from './Coin'
 
class FlipCoin extends Component{
  static defaultProps = {
    coins : [
     
      // Sides of the coin
      {side:'head', imgSrc:
'https://media.geeksforgeeks.org/wp-content/uploads/20200916123059/SHalfDollarObverse2016head-300x300.jpg'},
      {side:'tail', imgSrc:
'https://media.geeksforgeeks.org/wp-content/uploads/20200916123125/tails-200x200.jpg'}
    ]
  }
 
  constructor(props){
    super(props)
     
    // Responsible to render current updated coin face
    this.state = {
       
      // Track total number of flips
      currFace : null,
      totalFlips:0,
      heads: 0
    }
     
    // Binding context of this keyword
    this.handleClick = this.handleClick.bind(this)
  }
 
   // Function takes array of different faces of a coin
  //  and return a random chosen single face
  choice(arr){
    const randomIdx = Math.floor(Math.random() * arr.length)
    return arr[randomIdx]
  }
   
  // Function responsible to update the states
  // according to users interactions
  flipCoin(){
    const newFace = this.choice(this.props.coins)
    this.setState(curState => {
      const heads = curState.heads +
      (newFace.side === 'head' ? 1 : 0)
      return {
        currFace:newFace,
        totalFlips:curState.totalFlips + 1,
        heads:heads
      }
    })
  }
 
  handleClick(){
    this.flipCoin()
  }
  render(){
    const {currFace, totalFlips, heads} = this.state
    return(
      <div className='flip'>
      
        <h3>Olayinka's Coin Spin Odyssey</h3>
        <h4>Let's flip a coin</h4>
        <hr class="uk-divider-icon" />
         
        {/* If current face exist then show current face */}
        {currFace && <Coin info={currFace} />}
        <br />
        <hr class="uk-divider-icon"></hr>
         
        {/* Button to flip the coin  */}
        {/* <button onClick={this.handleClick}>Flip Me!</button> */}
        <button class="uk-button uk-button-primary" onClick={this.handleClick}>Flip Me 😎</button>
         
         
 <br />

        {/* <div class="uk-card uk-card-default uk-card-body uk-width-1-2@m">
        <h1>
          Out of {totalFlips} flips, there have been {heads} heads
          and {totalFlips - heads} tails
        </h1>
        
</div> */}
<hr class="uk-divider-icon"></hr>

<div class="uk-child-width-expand@s uk-text-center" uk-grid>
    <div>
        <div class="uk-card uk-card-default uk-card-body"><h3>
          Out of {totalFlips} flips, there have been {heads} heads
          and {totalFlips - heads} tails
        </h3></div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-card-body"><iframe src="https://podcasters.spotify.com/pod/show/olayinka-fakanbi/embed/episodes/The-AI-Explorer-e26b765"  frameborder="0" scrolling="no"></iframe></div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-card-body"><h3>"Flip, match, and conquer the board – 🃏 Unleash your memory skills and conquer the emoji dance floor! 💃🕺"</h3></div>
    </div>
</div>
 
      </div>
    )
  }
}
 
export default FlipCoin