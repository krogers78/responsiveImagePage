const apiURL = 'https://api.unsplash.com/search/photos/?query=sharks&client_id=3c8ef444b6f9284acd6886216ac7ec6b0f062a88e4b4211e6314278df06276ff'
const imageSection = document.querySelector('#imagesSection')
const options = { method: 'GET' }
let data = []

fetch (apiURL, options)
  .then(response => response.json())
  .then(responseAsJson => {
    data = responseAsJson.results
    console.log(data)

    // data.forEach((item, index) => {
    //   console.log(item.urls.small)
    // })
    // ImagePopulation(data)
  })
    .catch(error => {
      console.log('An Error Occured:', error)
    })

function ImagePopulation(arrayData) {
  arrayData.forEach((item, index) => {
    imagesSection.insertAdjacentHTML('beforeEnd', `<article>
                                                      <img src="${item.urls.small}">
                                                      <div>
                                                          <img src="./images/user-icon.svg">
                                                          <p>${item.user.name}</p>
                                                      </div>
                                                      <div>
                                                          <img src="./images/heart.svg">
                                                          <p>${item.likes}</p>
                                                      </div>
                                                    </article>
                                                      `)
  })
}
