const apiURL = 'https://api.unsplash.com/search/photos/?query=travel&client_id=3c8ef444b6f9284acd6886216ac7ec6b0f062a88e4b4211e6314278df06276ff'
const imageSection = document.querySelector('#imagesSection')
const options = { method: 'GET' }

fetch (apiURL, options)
  .then(response => response.json())
  .then(responseAsJson => {
    let data = responseAsJson.results
    ImagePopulation(data)
  })
    .catch(error => {
      console.log('An Error Occured:', error)
    })

function ImagePopulation(arrayData) {
  let imagesString = ''

  arrayData.forEach((item, index) => {

    imagesString +=`<figure>
                      <img class="rimage"
                          src="${item.urls.small}"
                          alt="${item.description}"
                          srcset="${item.urls.small} 400w, ${item.urls.regular} 1080w">
                      <figcaption>
                        <div>
                            <img src="./images/user-icon.svg" alt="Icon for the user.">
                            <p>${item.user.name}</p>
                        </div>
                        <div>
                            <img src="./images/heart.svg" alt="Icon for the amount of likes.">
                            <p>${item.likes}</p>
                        </div>
                      </figcaption>
                    </figure>
                      `
  })
  imagesSection.innerHTML = imagesString
}

const globe = document.querySelector('header img')

globe.addEventListener('click', () => {
  if (globe.classList.contains('js-spinGlobe')) {
    globe.classList.remove('js-spinGlobe')
  } else {
    globe.classList.add('js-spinGlobe')
  }
})
