document.querySelector('#coinFlip').addEventListener('click', flipACoin)
let headsOrTails = 0

function flipACoin(){
  const displayResult = document.querySelector('#coinResult')
  fetch('/coinflip')
    .then(res => res.json())
    .then(data => {
      const coin = document.querySelector('#coin')
      coin.classList.remove('once')
      coin.classList.remove('twice')
      setTimeout(()=> {
        if (data.result === 1){
          coin.classList.add('once')
          
          console.log('once,red')
        } else {
          coin.classList.add('twice')
          
          console.log('twice,grey')
        }
        
      },100)
      setTimeout( () => {
        if (data.result ===1){
          document.querySelector('#coinResult').innerText = 'Heads'
        } else {
          document.querySelector('#coinResult').innerText = 'Tails'
        }
      },3100) 
      
    })
}