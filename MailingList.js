window.onload = () => {

    document.getElementById("submit-button").addEventListener("click", (e) => {
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;

        const url = "https://mudfoot.doc.stu.mmu.ac.uk/node/api/mailinglist";
        const data = {
            "name": name,
            "email": email
        };

        fetch(url, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then((response) => {
            if (response.status === 200){
                return response.json();
            }else if(response.status === 400){
                throw "Bad data was sent to the server";
            }else{
                throw "Something went wrong";
            }
        })
        .then((resjson) => {
            document.getElementById("output").innerHTML = resjson.message;
            document.getElementById("output").classList = "success";
        })
        .catch((error) => {
            document.getElementById("output").innerHTML = error;
            document.getElementById("output").classList = "error";
        })

        
        e.preventDefault();
    })
}




