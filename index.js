function myFunction() {


    const champion = document.getElementById("champ").value

    const caps = champion[0].toUpperCase() + champion.slice(1).toLowerCase()

    console.log(caps)

    console.log(champion)

    fetch("http://localhost:3000/data").then((response) => {
        console.log(response);
        response.json().then((data) => {

            if (data[caps] === undefined) {

                document.getElementById("champname").innerText = 'could not find champion! check your spelling'

            } else {

                console.log(data[caps])
                console.log(data.Zed.image.full)
                document.getElementById("champname").innerText = data[caps].name
                document.getElementById("title").innerText = data[caps].title
                document.getElementById("myImg").src = `http://ddragon.leagueoflegends.com/cdn/10.13.1/img/champion/${caps}.png`

                //"http://ddragon.leagueoflegends.com/cdn/10.13.1/img/champion/" + caps + ".png";





                // `http://ddragon.leagueoflegends.com/cdn/10.13.1/img/${champion.image.group}/${champion.image.full}`;

            }




        });
    });

}



