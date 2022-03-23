// fucntion fetch the data and return it
(async function leaderboard() {
    const response = await fetch('https://api.wls.gg/v5/leaderboards/0-0000-293320262789640192?page=0')
    const data = response.json()


    data.then(res => {
        let teams = res.teams

        let matrix = []
        teams.map(team => {
            let names = Object.entries(team.members).map((item) => item[1].name)
            let kills = Object.entries(team.sessions).map(item => item.reduce(
                (accum, current) => {
                    if (typeof current !== "string") {
                        accum = current
                    }
                    return accum.kills = current.kills
                }
            ), 0)

            let points = team.points
            let place = team.place

            if (!matrix.includes(names)) {
                let obj = {
                    names: names.join(" + "),
                    kills: kills.reduce((a, c) => a + c, 0),
                    points: points,
                    place: place
                }
                matrix.push(obj)
            }
        })

        // Your code goes here
        matrix.forEach((element) => {
            
            // Initial state
            const table_row = document.createElement('tr');
            const leaderboard = document.getElementById('leaderboard');
            leaderboard.appendChild(table_row);

            const set_duo_place = (() => {
                const table_data = document.createElement('td')
                table_data.textContent = element.place;
                table_row.appendChild(table_data)
            })();

            const set_duo_names = (() => {
                const table_data = document.createElement('td')
                table_data.textContent = element.names;
                table_row.appendChild(table_data)
            })();

            const set_duo_kills = (() => {
                const table_data = document.createElement('td')
                table_data.textContent = element.kills;
                table_row.appendChild(table_data)
            })();

            const set_duo_points = (() => {
                const table_data = document.createElement('td')
                table_data.textContent = element.points;
                table_row.appendChild(table_data)
            })();

        })
    })
})()

 // Set the date we're counting down to
 var countDownDate = new Date("Feb 10, 2022 21:30:00").getTime();
        
 // Update the count down every 1 second
 var x = setInterval(function() {
 
   // Get today's date and time
   var now = new Date().getTime();
 
   // Find the distance between now and the count down date
   var distance = countDownDate - now;
 
   // Time calculations for days, hours, minutes and seconds
   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
   var seconds = Math.floor((distance % (1000 * 60)) / 1000);
 
   // Display the result in the element with id="demo"
   document.getElementById("timer").innerHTML = "ARAB SCRIMS ONE LOBBY CUSTOM C3S2 | POWERED BY ACCXME | STARTING IN " + days + "d " + hours + "h "
   + minutes + "m " + seconds + "s ";
 
   // If the count down is finished, write some text
   if (distance < 0) {
     clearInterval(x);
     document.getElementById("timer").innerHTML = "ARAB SCRIMS ONE LOBBY CUSTOM C3S2 | POWERED BY ACCXME | SCORINGS ARE SYNCED WITH WARLEGEND" ;
   }
 }, 1000);
 function tableSearch() {
    let input, filter, table, tr, td, txtValue;

    //Intialising Variables
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("leaderboard");
    tr = table.getElementsByTagName("tr");

    for (let i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }

}