import { API_KEY } from 'env';
let searchTerm = '';

const apiBase = 'http://api.giphy.com/v1/gifs';
const apiRandom = `random?api_key=${API_KEY}`
const apiTrending = `trending?api_key=${API_KEY}&limit=100`;

const searchInput = document.querySelector('#searchInput')
const searchButton = document.querySelector('#submit-button')
const trendingButton = document.querySelector('#trending-button')
const randomButton = document.querySelector('#random-button')
const gifDisplay = document.querySelector('.gif-holder')



randomButton.addEventListener('click', (e) => {
    e.preventDefault()

    const gifArray = gifDisplay.childNodes

    gifArray.forEach(gif => {
        console.log("GIF", gif)
        gifDisplay.removeChild(gif)
    })

    axios.get(`${apiBase}/${apiRandom}`)
        .then(response => {
            const img_url = response.data.data.image_url

            let randomGif = document.createElement('img')
            randomGif.src = img_url

            gifDisplay.appendChild(randomGif)
        })
})


trendingButton.addEventListener('click', (e) => {
    e.preventDefault()

    const gifArray = gifDisplay.childNodes
    gifArray.forEach(gif => {
        console.log("GIF", gif)
        gifDisplay.removeChild(gif)
    })

    axios.get(`${apiBase}/${apiTrending}`)
        .then(response => {
            let gifs = response.data.data

            for (let i = Math.floor(Math.random() * 100); i < 100; i += 100){
                const img_url = gifs[i].images.original.url

                let trendingGif = document.createElement('img')
                trendingGif.src = img_url
    
                gifDisplay.appendChild(trendingGif)
            }
        })
    // e.preventDefault()
    // let gifs;

    // axios.get(`${apiBase}/${apiTrending}`)
    // .then(response => {
    //     gifs = response.data.data
    //     console.log("GIFS", gifs)

    //     const gifArray = gifDisplay.childNodes
    //     gifArray.forEach(gif => {
    //         console.log("GIF", gif)
    //         gifDisplay.removeChild(gif)
    //     })
    // })
    // .then(() => {
    //     // const gifs = response.data.data
    //     // console.log("GIFS", gifs)

    //     gifs.forEach(gif => {
    //         const img = gif.images.original.url;
    //         let trendingGif = document.createElement('img');
    //         trendingGif.src = img;
    //         trendingGif.style.margin = "20px";
    //         gifDisplay.appendChild(trendingGif)
    //     })
    // })
})

searchButton.addEventListener('click', (e) => {
    e.preventDefault()
    const apiSearch = `search?q=${searchTerm}&api_key=${API_KEY}&limit=100`;

    const gifArray = gifDisplay.childNodes
    gifArray.forEach(gif => {
        console.log("GIF", gif)
        gifDisplay.removeChild(gif)
    })

    axios.get(`${apiBase}/${apiSearch}`)
        .then(response => {
            console.log("RESPONSE", response)
            let gifs = response.data.data

            for (let i = Math.floor(Math.random() * 100); i < 100; i += 100){
                const img_url = gifs[i].images.original.url

                let searchGif = document.createElement('img')
                searchGif.src = img_url
    
                gifDisplay.appendChild(searchGif)
            }
        })

    // e.preventDefault()
    // const apiSearch = `search?q=${searchTerm}&api_key=${API_KEY}&limit=1`;

    // const gifArray = gifDisplay.childNodes
    // gifArray.forEach(gif => {
    //     gifDisplay.removeChild(gif)
    // })

    // axios.get(`${apiBase}/${apiSearch}`)
    // .then(response => {
    //     const gifs = response.data.data
    //     console.log("GIFS", gifs)

    //     gifs.forEach(gif => {
    //         const img = gif.images.original.url;
    //         let searchGif = document.createElement('img');
    //         searchGif.src = img;
    //         searchGif.style.margin = "20px";
    //         gifDisplay.appendChild(searchGif)
    //     })
    // })
})

searchInput.addEventListener('change', (e) => {
    searchTerm = e.target.value;
})