let houses = [
    {
        "color":"red",
         "type" :"Big",
         "Rooms" : "15"
    },
    {
        "color":"blue",
         "type" :"small",
         "Rooms" : "3"
    },
    {
        "color":"green",
         "type" :"medium",
         "Rooms" : "7"
    },
    {
        "color":"pink",
         "type" :"small",
         "Rooms" : "3"
    }
]
console.log(houses.length)

const house  = () => {
        for(let i = 0; i < houses.length; i++){
           let newhouse = document.createElement("div");
           newhouse.textContent =
            `colors : ${houses[i].color}\n  type : ${houses[i].type} \n  room : ${houses[i].Rooms}`;
             newhouse.classList.add("container")
            document.body.appendChild(newhouse);
            
        }
}

