// const glintsXImpactByte = [
//     'arb712',
//     'Frederick-88',
//     'EvanCharles16'
// ]

// glintsXImpactByte.forEach(item => {
//     fetch(`https://api.github.com/users/${item}`)
//         .then(response => {
//             console.log(response);
//         })
// })

fetch('https://swapi.co/api/people/1/')
    .then(response => {
        //  console.log(response);
        return response.json()
    })

    .then(data => {
        console.log(data);

        const { name , skin_color , gender, films} = data;

        const linkHTML = '<a href=""></a>';
        let linkFilm = '';
        
        films.forEach((item, index) => {
            linkFilm += ` "<a href="${item}">  film ${index + 1}</a>" , `;
        })

        const peopleHTMLString = `
        <div class = "col-sm-6 col-md-4">
            name : ${name},
            <br>
            skin color : ${skin_color},
            <br>
            gender : ${gender},
            <br>
            films : ${linkFilm}
        </div>`;

        document.getElementById('starwars').innerHTML = peopleHTMLString;
    })


// Wanderlink API

const addWanderLink = item => {
    const {destinationName, address, city, images} = item;

    const stringHTML = `
    <div class = " col-sm-12 col-md-6 col-lg-4">
        <img width = "100%" height = "200px" src = "${serverWanderLink}${item.images && item.images[0]} " />
        <br>
        ${item.destinationName}
        <br>
        ${item.address}
        <br>
        ${item.city}
    </div>`
    document.getElementById('wanderlink').innerHTML += stringHTML;
}

const serverWanderLink = 'http://35.240.201.155:3000/'
fetch (`${serverWanderLink}api/v1/wanderlink/show/idn/destination`)
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
        
        // Untuk Listkan semuanya
        /* 
        data.forEach(item => {
        })
        */

        // Untuk Listkan dari array no 0 - 21
        /*
        for (let i = 0 ; i < 21 ; i++){
            addWanderLink(data[i]);
        }
        */

        

        let dataWanderLink = [];
        let currentPages = 0;

        const show10 = (noIndex = 0) => {
            const maxNomor = 10 + maxNo
        }
    })


