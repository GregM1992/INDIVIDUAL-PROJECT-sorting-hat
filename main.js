const radiantOrders = [ 
   {
    order: "Windrunner",
    spren: "Honor",
    symbol: "vimages/Jeseh_glyph.svg",
    surges: ["Adhesion", " Gravitation"]
   },
   {
    order: "Edgedancer",
    spren: "Cultivation",
    symbol: "vimages/Edgedancers_glyph.svg",
    surges: ["Abrasion", " Progression"]
   },
   {
    order: "Lightweaver",
    spren: "Cryptic",
    symbol: "vimages/Shash_glyph.svg",
    surges: ["Illumination", " Transformation"]
   },
   {
    order :"Elsecaller",
    spren: "Ink",
    symbol:"vimages/Beteb_glyph.svg",
    surges:["Transformation"," Transportation"]
   },
   {
    order: "Truthwatcher",
    spren: "Mist",
    symbol:"vimages/Truthwatchers_glyph.svg",
    surges:["Progression"," Illumination"]
   },
   {
    order: "Willshaper",
    spren: "Light",
    symbol:"vimages/Willshapers_glyph.svg",
    surges:["Transportation"," Cohesion"]
   },
   {
    order: "Stoneward",
    spren: "Peak",
    symbol:"vimages/Stonewards_glyph.svg",
    surges:["Cohesion"," Tension"]
   },
   {
    order: "Bondsmith",
    spren: "Unique",
    symbol:"vimages/Ishi_glyph.svg",
    surges:["Tension"," Adhesion"]
   },
   {
    order: "Skybreaker",
    spren: "High",
    symbol:"vimages/Skybreakers_glyph.svg",
    surges:["Gravitation"," Division"]
   },
   {
    order: "Dustbringer",
    spren: "Ash",
    symbol:"vimages/Dustbringers_glyph.svg",
    surges:["Division"," Abrasion"]
   }
  ]



const radiants = [
  {
    id: 1,
    name: "Kaladin Stormblessed",
    order: radiantOrders[0].order,
    symbol: radiantOrders[0].symbol,
    spren: radiantOrders[0].spren,
    surges: radiantOrders[0].surges,  
  },
  {
    id: 2,
    name: "Shallan Davar",
    order: radiantOrders[2].order,
    symbol: radiantOrders[2].symbol,
    spren: radiantOrders[2].spren,
    surges: radiantOrders[2].surges, 
  },
  {
    id: 3,
    name: "Lift",
    order: radiantOrders[1].order,
    symbol: radiantOrders[1].symbol,
    spren: radiantOrders[1].spren,
    surges: radiantOrders[1].surges,  
  },
  {
    id: 4,
    name: "Teft ",
    order: radiantOrders[0].order,
    symbol: radiantOrders[0].symbol,
    spren: radiantOrders[0].spren,
    surges: radiantOrders[0].surges,  
  },
  {
    id: 5,
    name: "Rock",
    order: radiantOrders[0].order,
    symbol: radiantOrders[0].symbol,
    spren: radiantOrders[0].spren,
    surges: radiantOrders[0].surges,   
  },
  {
    id: 6,
    name: "Cephandrius Hoid",
    order: radiantOrders[2].order,
    symbol: radiantOrders[2].symbol,
    spren: radiantOrders[2].spren,
    surges: radiantOrders[2].surges,  
  },
  {
    id:7,
    name: "Renarin Kholin",
    order: radiantOrders[4].order,
    symbol: radiantOrders[4].symbol,
    spren: radiantOrders[4].spren,
    surges: radiantOrders[4].surges,
  }
]

const corrupted = []
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
      <p class="card-text"> ${squire.order}</p>
      <p class="card-text"> ${squire.surges}</p>
      <button type="button" id="break-oath-btn--${squire.id}" class="btn btn-warning">BREAK OATH</button>
    </div>
    </div>
    `
  }
  renderToDom('#orderContainer', domString)
}





//   CORRUPT ON DOM FUNCTION 

const corruptOnDom = (array) => {
  let domString = ''
  for (const squire of array){
    domString +=  `
    <div class="card" style="width: 18rem;">
    <img src=${squire.symbol} class="card-img-top" alt="the symbol of the knights radiant">
      <div class="card-body">
        <p class="card-text">${squire.name}</p>
        <p class="card-text">Is there a path to redemption?</p>
      </div>
    </div>
    `
  }
  renderToDom('#corruptedContainer', domString)
}


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
        <form>
            <input class="form-control" id="new-radiant-name" placeholder="Name" type="text" required/>
        <div class="modal-footer">
          <button type="submit" class="btn btn-primary" id="take-oath-btn">THESE WORDS ARE ACCEPTED!</button>
        </div>
        </form>
      </div>
    </div>
  </div>
  `                  
  renderToDom("#formContainer", domString)
}


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
  <button type="button" id="all-radiants" class="btn btn-outline-light">All Radiants</button>
  `
  renderToDom('#btn-container', domString)
}


//       EVENT LISTENERS


const eventListeners = () => {
document.querySelector('#btn-container').addEventListener ('click', (event) => {
  if (event.target.id === 'all-radiants'){
    knightsOnDom(radiants)
  } else if (event.target.id === 'elsecaller'){
    const elseArr = radiants.filter(oath => oath.order === 'Elsecaller')
    knightsOnDom(elseArr)
  } else if (event.target.id === 'dustbringer'){
    const dustArr = radiants.filter(oath => oath.order === 'Dustbringer')
    knightsOnDom(dustArr)
  } else if (event.target.id === 'bondsmith'){
    const bondArr = radiants.filter(oath => oath.order === 'Bondsmith')
    knightsOnDom(bondArr)
  } else if (event.target.id === 'truthwatcher'){
    const truthArr = radiants.filter(oath => oath.order === 'Truthwatcher')
    knightsOnDom(truthArr)
  }else if (event.target.id === 'skybreaker'){
    const skyArr = radiants.filter(oath => oath.order === 'Skybreaker')
    knightsOnDom(skyArr)
  }else if (event.target.id === 'lightweaver'){
    const lightArr = radiants.filter(oath => oath.order === 'Lightweaver')
    knightsOnDom(lightArr)
  }else if (event.target.id === 'stoneward'){
    const stoneArr = radiants.filter(oath => oath.order === 'Stoneward')
    knightsOnDom(stoneArr)
  }else if (event.target.id === 'willshaper'){
    const willArr = radiants.filter(oath => oath.order === 'Willshaper')
    knightsOnDom(willArr)
  }else if (event.target.id === 'edgedancer'){
    const edgeArr = radiants.filter(oath => oath.order === 'Edgedancer')
    knightsOnDom(edgeArr)
  }else if (event.target.id === 'windrunner'){
    const windrunnerArr = radiants.filter(oath => oath.order === 'Windrunner')
    knightsOnDom(windrunnerArr)
  }
})

const fModal = new bootstrap.Modal(document.querySelector('#exampleModal'))

const form = document.querySelector('form')

form.addEventListener('submit',(event) => {
   event.preventDefault()

  const randomIndex = Math.floor(Math.random() * radiantOrders.length)

  const newRadiant = {
    id: radiantOrders.length + 1,
    name: document.getElementById("new-radiant-name").value,
    order: radiantOrders[randomIndex].order,
    spren: radiantOrders[randomIndex].spren,
    symbol:radiantOrders[randomIndex].symbol,
    surges:radiantOrders[randomIndex].surges
  };
  radiants.push(newRadiant);
  knightsOnDom(radiants);
  form.reset()
  fModal.hide()
})


document.querySelector("#sorted").addEventListener('click',(event) => {
if (event.target.id.includes('break-oath-btn')){
const [, int] = event.target.id.split('--');

const breakIndex = radiants.findIndex((squire)=> squire.id === Number(int));

let corruptedRadiant = radiants.splice(breakIndex, 1)[0];

corrupted.push(corruptedRadiant);

corruptOnDom(corrupted);

knightsOnDom(radiants);
 }
})
}


const startApp = () =>{
  formModal();
  filterBtns();
  knightsOnDom(radiants)
  eventListeners()
}

startApp()
