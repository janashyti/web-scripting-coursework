async function cardsAgainstHumanity() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '870a65cda9msh1e12933ef13c2f0p11f580jsnd80fc84eecbe',
            'X-RapidAPI-Host': 'cards-against-humanity.p.rapidapi.com'
        }
    };

    let response = await fetch('https://cards-against-humanity.p.rapidapi.com/black', options)

    if (response.status == 200) {

        let result = await response.json()
        console.log(result.text)
        console.log("jana")
        console.log(response)

        let main = document.querySelector("main") 
        main.innerHTML = "Complete the Following: " + result.text

    }

    else{
        console.log(response.error)
    }
    
}
cardsAgainstHumanity()