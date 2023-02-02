window.onload =  () => {
    getHallOfFameData(2021);

    document.getElementById("submit").addEventListener("click", (e) => {
        year = document.getElementById("year").value;

        getHallOfFameData(year);

        e.preventDefault();
    });


};



const getHallOfFameData = (year) => {
    const url = "https://mudfoot.doc.stu.mmu.ac.uk/node/api/halloffame?year=" + year;
        
    fetch(url, {
        method: "get",
    })
    .then((response) => {
        if(response.status === 200){
            return response.json();
        }else{
            throw "Something went wrong";
        }
    })
    .then((resJson) => {
        let = tableHTML = "";

        

        for(let i = 0; i < resJson.data.length; i++){
            

            tableHTML += "<tr>";
            tableHTML += "<td><a href='"+ resJson.data[i].band.url + "'>" + resJson.data[i].band.name + "</a></td>";
            tableHTML += "<td><img class='HallOfFame-images' src ='" + resJson.data[i].image.source +"' alt = '"+ resJson.data[i].image.title +"'</td>"
            
            tableHTML += "<td> "
            for (let j = 0; j < resJson.data[i].inducted_members.length; j++){
                tableHTML += "<a class='HallofFame-members' href='"+ resJson.data[i].inducted_members[j].url + "'>" + resJson.data[i].inducted_members[j].name + "</a>"
                tableHTML += "<br>"
            }
            tableHTML += "</td>"

            if (resJson.data[i].inducted_by.name == undefined ){
                tableHTML += "<td >N/A</td>"
            }else{
                tableHTML += "<td ><a  href='"+ resJson.data[i].inducted_by.url + "'>" + resJson.data[i].inducted_by.name + "</a></td>"
            }

            tableHTML += "</tr>";

            
            
        };

        document.getElementById("HallOfFame-table-body").innerHTML = tableHTML;
        
    })
    .catch((error) => {
        document.getElementById("error").innerHTML = error;
    })
}

