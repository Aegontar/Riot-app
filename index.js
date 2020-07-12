


function myFunction() {

   // This grabs the input with id champ

   const champion = document.getElementById("champ").value
  
   // This makes sure the first letter is capital case and the rest are lower case

    const caps = champion[0].toUpperCase() + champion.slice(1).toLowerCase()

    console.log(caps)

    console.log(champion)

   // This gets us the information that you would get from that end point

    fetch("http://localhost:3000/data").then((response) => {
        console.log(response);
        response.json().then((data) => {

            if (data[caps] === undefined) {

                document.getElementById("champname").innerText = 'could not find champion! check your spelling'

            } else {
                console.log(data)
                console.log(data[caps])
                console.log(data.Zed.image.full)
                document.getElementById("champname").innerText = data[caps].name
                document.getElementById("title").innerText = data[caps].title
                document.getElementById("myImg").src = `http://ddragon.leagueoflegends.com/cdn/10.13.1/img/champion/${caps}.png`

                //"http://ddragon.leagueoflegends.com/cdn/10.13.1/img/champion/" + caps + ".png";


                // `http://ddragon.leagueoflegends.com/cdn/10.13.1/img/${champion.image.group}/${champion.image.full}`;

            
            

            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            }




            const inputValue = document.getElementById("champ").value

            const lowerCaseInput = inputValue.toLowerCase()
          
            const allChampionNames = Object.getOwnPropertyNames(data)
          
            console.log(allChampionNames)
          
              const results = allChampionNames.filter((champ) => {
             
                if (champ.toLowerCase().match(lowerCaseInput)) {
                return true; 
          
                } else {
          
                  return false;
                }
          
          
          });
          





          console.log('all done', results);

           
 




        });
    });

}




/* function autoComplete() {



  results.forEach((champ) => {

    const item = document.createElement('li');
    
    const container = document.getElementById('todo');
    
    item.innerText = champ
    
    container.appendChild(item)
    
    console.log(champ)
    
    }); 







} */