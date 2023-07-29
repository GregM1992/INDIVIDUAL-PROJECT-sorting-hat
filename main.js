const radiants = [
  {
    id: 1,
    name: "Kaladin Stormblessed",
    order: "windrunner",
    symbol: "images/windrunner.jpg",
    spren: "honor",
    surges: ["adhesion", "gravitation"],
    corrupted: false
  },
  {
    id: 2,
    name: "Shallan Davar",
    order: "lightweaver",
    symbol: "images/windrunner.jpg",
    spren: "cryptic",
    surges: ["illumination", "transformation"],
    corrupted: false
  },
  {
    id: 3,
    name: "Lift",
    order: "edgedancer",
    symbol: "images/windrunner.jpg",
    spren: "cultivation",
    surges: ["abrasion", "progression"],
    corrupted: false
  }
]
const radiantOrders = [
  {
  windrunners:{
    spren: "honor",
    symbol: "tbd",
    surges: ["adhesion", "gravitation"]
  },
  edgedancers:{
    spren: "cultivation",
    symbol: "tbd",
    surges: ["abrasion", "progression"]
  },
  lightweavers:{
    spren: "cryptic",
    symbol: "tbd",
    surges: ["illumination", "transformation"]
  },
  elsecallers:{
    spren: "ink",
    symbol:"tbd",
    surges:["transformation","transportation"]
  },
  truthwatchers:{
    spren: "mist",
    symbol:"tbd",
    surges:["progression","illumination"]
  },
  willshapers:{
    spren: "light",
    symbol:"tbd",
    surges:["transportation","cohesion"]
  },
  stonewards:{
    spren: "peak",
    symbol:"tbd",
    surges:["cohesion","tension"]
  },
  bondsmiths:{
    spren: "unique",
    symbol:"tbd",
    surges:["tension","adhesion"]
  },
  skybreakers:{
    spren: "high",
    symbol:"tbd",
    surges:["gravitation","division"]
  },
  dustbringers:{
    spren: "ash",
    symbol:"tbd",
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
