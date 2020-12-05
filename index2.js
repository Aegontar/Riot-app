// Stores all the champion info in championInfo variable



let championInfo;

// this function fetches champion information from the end point
//fetch('http://localhost:3000/data')
fetch('/data')
  .then(response => response.json()) // resolve the response to json
  .then(champs => { // then, when the response is done resolving to json, we have all the champs in this 
    championInfo = champs
  });

// This part extract the champion names from the other informations 


// i just inserted all the code in theis function because of async, the previous lines of code does not execute fast enough for the next lines to not work

// this capatures the input value each time a latter  is type


function changeValue() {

  const container = document.getElementById('todo');

  container.innerHTML = '';


  const allChampionNames = Object.getOwnPropertyNames(championInfo)
  console.log(championInfo)
  console.log(allChampionNames)

  // match the champion name with input value

  const inputValue = document.getElementById("champ").value

  const lowerCaseInput = inputValue.toLowerCase()

  // filters and stores the names that matches with champ from input

  const results = allChampionNames.filter((champ) => {

    if (champ.toLowerCase().match(lowerCaseInput)) {
      return true;

    } else {

      return false;
    }


  });

  console.log(results)

  // this creates a list for each champions that matches with the input value

  results.forEach((champ) => {


    if (inputValue.length > 0) {

      const item = document.createElement('li');

      item.innerText = champ

      container.appendChild(item)
      

    }


  });


 

// selected champion after clicking




// display selected champion information after clicking the name



 }


 function showTextContent(event) {
  const selectedChampion = event.target.textContent
  //console.log(championInfo[selectedChampion])
  document.getElementById("Name").innerHTML = championInfo[selectedChampion].name
  document.getElementById("Title").innerHTML = championInfo[selectedChampion].title.charAt(0).toUpperCase() + championInfo[selectedChampion].title.slice(1).toLowerCase()
  document.getElementById("Blurb").innerHTML = championInfo[selectedChampion].blurb
  document.getElementById("myImg").src = `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${selectedChampion}_0.jpg`

  

  console.log(championInfo[selectedChampion])


  console.log(typeof 24)

  const container = document.getElementById('todo');

  container.innerHTML = '';

}
