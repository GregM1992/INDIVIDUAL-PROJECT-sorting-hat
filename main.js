const radiants = [
  {
    id: 1,
    name: "Kaladin Stormblessed",
    order: "windrunner",
    symbol: "images/Windrunner.webp",
    spren: "honor",
    surges: ["adhesion", "gravitation"],
    corrupted: false
  },
  {
    id: 2,
    name: "Shallan Davar",
    order: "lightweaver",
    symbol: "images/Lightweaver.webp",
    spren: "cryptic",
    surges: ["illumination", "transformation"],
    corrupted: false
  },
  {
    id: 3,
    name: "Lift",
    order: "edgedancer",
    symbol: "images/Edgedancer.webp",
    spren: "cultivation",
    surges: ["abrasion", "progression"],
    corrupted: false
  }
]
const radiantOrders = [
  {
  windrunners:{
    spren: "honor",
    symbol: "images/Windrunner.webp",
    surges: ["adhesion", "gravitation"]
  },
  edgedancers:{
    spren: "cultivation",
    symbol: "images/Edgedancer.webp",
    surges: ["abrasion", "progression"]
  },
  lightweavers:{
    spren: "cryptic",
    symbol: "images/Lightweaver.webp",
    surges: ["illumination", "transformation"]
  },
  elsecallers:{
    spren: "ink",
    symbol:"images/Elsecaller.webp",
    surges:["transformation","transportation"]
  },
  truthwatchers:{
    spren: "mist",
    symbol:"images/Truthwatcher.webp",
    surges:["progression","illumination"]
  },
  willshapers:{
    spren: "light",
    symbol:"images/Willshaper.webp",
    surges:["transportation","cohesion"]
  },
  stonewards:{
    spren: "peak",
    symbol:"images/Stoneward.webp",
    surges:["cohesion","tension"]
  },
  bondsmiths:{
    spren: "unique",
    symbol:"images/Bondsmith.webp",
    surges:["tension","adhesion"]
  },
  skybreakers:{
    spren: "high",
    symbol:"images/Skybreaker.webp",
    surges:["gravitation","division"]
  },
  dustbringers:{
    spren: "ash",
    symbol:"images/Dustbringer.webp",
    surges:["division","abrasion"]
  }
}
]




//  UTILITY FUNCTIONS

const renderToDom = (divId, html) => {
  const targetedDiv = document.querySelector(divId);
  targetedDiv.innerHTML = html;
}



// KNIGHTS ON DOM FUNCTION

const knightsOnDom = (array) => {
  let domString = ''
  for (const squire of array){
    domString += 
    `
    <div class="card" style="width: 18rem;">
    <img src=${squire.symbol} class="card-img-top" alt="the symbol of the knights radiant">
    <div class="card-body">
      <p class="card-text">${squire.name}</p>
      <p class="card-text">${squire.order}</p>
      <p class="card-text">${squire.surges}</p>
      <button type="button" class="btn btn-warning">BREAK OATH</button>
    </div>
    </div>
    `
  }
  renderToDom('#orderContainer', domString)
}
knightsOnDom(radiants)

//        SHOW FORM 
const formModal = () =>{
  let domString = ''
  domString += `
  <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  TAKE THE OATH!
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Take the first steps towards radiance!</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <input class="form-control" type="text" placeholder="NAME" aria-label="default input example">
      </div>
      <div class="modal-footer">
        <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">THESE WORDS ARE ACCEPTED!</button>
      </div>
    </div>
  </div>
</div>
  `
  renderToDom("#formContainer", domString)
}
formModal()
