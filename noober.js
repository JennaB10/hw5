function levelOfService(ride) {
  let levelOfService
  if (ride.length > 1) {
    levelOfService = 'Noober Pool'
  } else if (ride[0].purpleRequested) {
    levelOfService = 'Noober Purple'
  } else if (ride[0].numberOfPassengers > 3) {
    levelOfService = 'Noober XL'
  } else {
    levelOfService = 'Noober X'
  }
  return levelOfService
}

function renderRides(ridesArray) {
  for (let i = 0; i < ridesArray.length; i++) {
    let ride = ridesArray[i]

    document.querySelector('.rides').insertAdjacentHTML('beforeend', `
      <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
        <i class="fas fa-car-side"></i>
        <span>${levelOfService(ride)}</span>
      </h1>
    `)

    let borderClass
    let backgroundClass
    if (levelOfService(ride) == 'Noober Purple') {
      borderClass = 'border-purple-500'
      backgroundClass = 'bg-purple-600'
    } else {
      borderClass = 'border-gray-900'
      backgroundClass = 'bg-gray-600'
    }

    for (let i = 0; i < ride.length; i++) {
      let leg = ride[i]

      document.querySelector('.rides').insertAdjacentHTML('beforeend', `
        <div class="border-4 ${borderClass} p-4 my-4 text-left">
          <div class="flex">
            <div class="w-1/2">
              <h2 class="text-2xl py-1">${leg.passengerDetails.first} ${leg.passengerDetails.last}</h2>
              <p class="font-bold text-gray-600">${leg.passengerDetails.phoneNumber}</p>
            </div>
            <div class="w-1/2 text-right">
              <span class="rounded-xl ${backgroundClass} text-white p-2">
                ${leg.numberOfPassengers} passengers
              </span>
            </div>
          </div>
          <div class="mt-4 flex">
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">PICKUP</div>
              <p>${leg.pickupLocation.address}</p>
              <p>${leg.pickupLocation.city}, ${leg.pickupLocation.state} ${leg.pickupLocation.zip}</p>
            </div>
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">DROPOFF</div>
              <p>${leg.dropoffLocation.address}</p>
              <p>${leg.dropoffLocation.city}, ${leg.dropoffLocation.state} ${leg.dropoffLocation.zip}</p>
            </div>
          </div>
        </div>
      `)
    }
  }
}

window.addEventListener('DOMContentLoaded', function() {
  // YOUR CODE

let AllRides = document.querySelector('#all-filter')
AllRides.addEventListener('click', async function(event) {
console.log(AllRides)
console.log('All Rides clicked')
event.preventDefault()

let response = await fetch ('https://kiei451.com/api/rides.json')
let json = await response.json()
let rides = json //any time something is in a function  
    
let PurpleRide = document.querySelector('#noober-purple-filter')
PurpleRide.addEventListener('click', async function(event) {
console.log(PurpleRide)
console.log('Noober Purple clicked')
event.preventDefault() 

let purpleArray = []
    for (let i=0; i<json.length; i++){
      let b= levelOfService(json[i])
      if(b=="Noober Purple"){
      purpleArray.push(json[i])
    let ridesDiv = document.querySelector('.rides')
    let html = renderRides(purpleArray)
    ridesDiv.insertAdjacentHTML('beforeend', `${html}`)
  }}
  

let PoolRide = document.querySelector('#noober-pool-filter')
PoolRide.addEventListener('click', async function(event) {
console.log(PoolRide)
console.log('Noober Pool clicked')
event.preventDefault() 

let PoolArray = []
    for (let j=0; j<json.length; j++){
      let c= levelOfService(json[j])
      if(c=="Noober Pool"){
      PoolArray.push(json[j])
    let ridesDiv = document.querySelector('.rides')
    let html = renderRides(PoolArray)
    ridesDiv.insertAdjacentHTML('beforeend', `${html}`)
  }}


let XLRide = document.querySelector('#noober-xl-filter')
XLRide.addEventListener('click', async function(event) {
console.log(XLRide)
console.log('Noober XL clicked')
event.preventDefault() 

let XLArray = []
    for (let k=0; k<json.length; k++){
      let d= levelOfService(json[k])
      if(d=="Noober XL"){
      XLArray.push(json[k])
    let ridesDiv = document.querySelector('.rides')
    let html = renderRides(XLArray)
    ridesDiv.insertAdjacentHTML('beforeend', `${html}`)
  }}


let XRide = document.querySelector('#noober-x-filter')
XRide.addEventListener('click', async function(event) {
console.log(XRide)
console.log('Noober X clicked')
event.preventDefault() 

let XNooberArray = []
    for (let l=0; l<json.length; l++){
      let e= levelOfService(json[l])
      if(e=="Noober X"){
      XNooberArray.push(json[l])
    let ridesDiv = document.querySelector('.rides')
    let html = renderRides(XNooberArray)
    ridesDiv.insertAdjacentHTML('beforeend', `${html}`)
  }}


let filterReset = document.querySelector('.rides')
  filterReset.innerHTML

  //  let newArray = []
  //  for (let n=0; n<json.length; n++) {
  // let a = json[n]}
  // levelOfService(AllRides)
  // console.log(levelOfService(poolRide))
  // if (levelOfService(AllRides) == 'All Rides') {
  //    newArray.push(json[n])
  //   }

   // firstNameInput.addEventListener(“change”, function (event)

AllRides.insertAdjacentHTML('beforeend', renderRides(rides))
})
})
})
})
})
})



// for (let n=0; n<json.length; n++) {
//   let poolRide = json[n]
//   levelOfService(poolRide)
//   // console.log(levelOfService(poolRide))
//   if (levelOfService(poolRide) == 'Noober Pool') {
//     let newArray
//     newArray.push(poolRide)
//   }

//classList -- adds a tailwinde class to change the background color

// let nooberpurplebutton =  document.querySelector('#noober-purple-filter')
// nooberpurplebutton.addEventListener('click', async function(event){
//   event.preventDefault()
//   console.log("Noober Purple button is clicked")
//   let  url= 'https://kiei451.com/api/rides.json'
//   let response = await fetch(url)
//   let json= await response.json()
//  let newArray=[]
//  for (let i=0; i<json.length; i++){
// let b= levelOfService(json[i])
// if(b=="Noober Purple"){
// newArray.push(json[i])
// }
// }
// renderRides(newArray)
// })

// event.target.innerHTML
//clear array by setting ti to empty//