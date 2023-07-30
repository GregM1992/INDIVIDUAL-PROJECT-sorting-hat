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
  },
  {
    id: 4,
    name: "Teft ",
    order: "windrunner",
    symbol: "images/Windrunner.webp",
    spren: "honor",
    surges: ["adhesion", "gravitation"],
    corrupted: false
  },
  {
    id: 5,
    name: "Rock numuhukumakiaki'aialunamor",
    order: "windrunner",
    symbol: "images/Windrunner.webp",
    spren: "honor",
    surges: ["adhesion", "gravitation"],
    corrupted: false
  },
  {
    id: 6,
    name: "Cephandrius Hoid",
    order: "lightweaver",
    symbol: "images/Lightweaver.webp",
    spren: "cryptic",
    surges: ["illumination", "transformation"],
    corrupted: false
  },
  {
    id:7,
    name: "Renarin Kholin",
    order: "truthwatcher",
    symbol: "images/Truthwatcher.webp",
    spren: "mist",
    surges: ["progression","illumination"],
    corrupted: true
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

//      FILTER BUTTONS
const filterBtns = () => {
  let domString = ''
  domString += `
  <button type="button" id="windrunner" class="btn btn-outline-primary">Windrunners</button>
  <button type="button" id="edgedancer" class="btn btn-outline-secondary">Edgedancers</button>
  <button type="button" id="truthwatcher" class="btn btn-outline-success">Truthwatchers</button>
  <button type="button" id="dustbringer" class="btn btn-outline-danger">Dustbringers</button>
  <button type="button" id="bondsmith" class="btn btn-outline-warning">Bondsmiths</button>
  <button type="button" id="elsecaller" class="btn btn-outline-info">Elsecallers</button>
  <button type="button" id="skybreaker" class="btn btn-outline-light">Skybreakers</button>
  <button type="button" id="stoneward" class="btn btn-outline-dark">Stonewards</button>  
  <button type="button" id="willshaper" class="btn btn-outline-primary">Willshapers</button>
  <button type="button" id="lightweaver" class="btn btn-outline-danger">Lightweavers</button>
  <button type="button" id="all-radiants" class="btn btn-primary">All Radiants</button>
  `
  renderToDom('#btn-container', domString)
}
filterBtns()

//       EVENT LISTENERS
document.querySelector('#btn-container').addEventListener ('click', (event) => {
  if (event.target.id === 'all-radiants'){
    knightsOnDom(radiants)
  } else if (event.target.id === 'elsecaller'){
    const elseArr = radiants.filter(oath => oath.order === 'elsecaller')
    knightsOnDom(elseArr)
  } else if (event.target.id === 'dustbringer'){
    const dustArr = radiants.filter(oath => oath.order === 'dustbringer')
    knightsOnDom(dustArr)
  } else if (event.target.id === 'bondsmith'){
    const bondArr = radiants.filter(oath => oath.order === 'bondsmith')
    knightsOnDom(bondArr)
  } else if (event.target.id === 'truthwatcher'){
    const truthArr = radiants.filter(oath => oath.order === 'truthwatcher')
    knightsOnDom(truthArr)
  }else if (event.target.id === 'skybreaker'){
    const skyArr = radiants.filter(oath => oath.order === 'skybreaker')
    knightsOnDom(skyArr)
  }else if (event.target.id === 'lightweaver'){
    const lightArr = radiants.filter(oath => oath.order === 'lightweaver')
    knightsOnDom(lightArr)
  }else if (event.target.id === 'stoneward'){
    const stoneArr = radiants.filter(oath => oath.order === 'stoneward')
    knightsOnDom(stoneArr)
  }else if (event.target.id === 'willshaper'){
    const willArr = radiants.filter(oath => oath.order === 'willshaper')
    knightsOnDom(willArr)
  }else if (event.target.id === 'edgedancer'){
    const edgeArr = radiants.filter(oath => oath.order === 'edgedancer')
    knightsOnDom(edgeArr)
  }else if (event.target.id === 'windrunner'){
    const windrunnerArr = radiants.filter(oath => oath.order === 'windrunner')
    knightsOnDom(windrunnerArr)
  }
})
