import React, {Component} from 'react';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import ParticlesBg from 'particles-bg';
import Clarifai from 'clarifai';
// import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import './App.css';
import Signin from './components/Signin/Signin';


// const app = new Clarifai.App({
//   apiKey: '9f57432234524598b105ab1281cf95f7'
// });
// ///////////////////////////////////////////////////////////////////////////////////////////////////
// // In this section, we set the user authentication, user and app ID, model details, and the URL
// // of the image we want as an input. Change these strings to run your own example.
// //////////////////////////////////////////////////////////////////////////////////////////////////

// // Your PAT (Personal Access Token) can be found in the portal under Authentification
// const PAT = '6015c05c055844f493f298a36cd8b402';
// // Specify the correct user_id/app_id pairings
// // Since you're making inferences outside your app's scope
// const USER_ID = 'ninjafruit';
// const APP_ID = 'test';
// // Change these to whatever model and image URL you want to use
// const MODEL_ID = 'face-detection';
// const MODEL_VERSION_ID = '6dc7e46bc9124c5c8824be4822abe105';
// const IMAGE_URL = 'https://samples.clarifai.com/metro-north.jpg';
// // To use image bytes, assign its variable   
// // const IMAGE_BYTES_STRING = '/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAoACgDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAYDBQcE/8QAMBAAAQMDAwMDAgQHAAAAAAAAAQIDBAAFEQYSIQcTMTJBURRhCBYikSNScXKhsdH/xAAZAQACAwEAAAAAAAAAAAAAAAAFBgIDBAf/xAAtEQABAwMBBgQHAQAAAAAAAAABAgMRAAQhMQUSE0FRYQaBocEUFiJCcrHR8P/aAAwDAQACEQMRAD8A3+RYY1unSYzCS0ttZUkAgktn0q5yT7jPyDUC4wdGwycH5U2Kt9ZQ7VI1qw5PkvQy3CSVPpf7aQjuKyFH25xzn3pHn3TVNy01Hl2hyy6YdkSpKsS9sl/6RlI3rRu3dxWd6spwnAGPIJTfl925fcLaoSDHXvyo6i9SlCQrU9wKln3OyWiaDN1RAbW3kKbSd7gPtwMkH/tTWy9afuy1iPfnXMAblITwkE4yf08cn3pSbYt1uts24XH6fUbiLAuY1MWyGkLEmUW0rcCRvUpQ5CtwKQCPgi4S1ZbDe4sd9NntDEe79m3uOBLTr0IR9jzodSMqUpTu9JJ8owD7UTT4ZCfv9PbP7860m+s+HBSrejWRuz2kAxoesGYxTW/Zlpkwo1vkuSly3UgKWQUhHJUvIHsAaKTemF8XE6sWmxyZkiaZrMh1jv8ArQNpUVqB8FW0njHqx4zRVVhsph1KlKk5xQ+7uHmikaSJrQerMByet2IwvtuTLa4xv2k7Rk84H9x/esHv92d01boenLXGcuiWrFIhLlpbcaQ2/JdK3VJCkAq2pAR7Zz7YxWudY9fxNIdQbNGkR5TyX4aisNNpUMFZAzkj4NK0jq9ZpbLr0PSlzkhrlZDaQlP3P8Q4/ap3F87bPucJEkx/hHv60b2TYXLrKN5sramYECSQRk9M6c6zmJ+eb5Hi22M7cnWGIQgFLbX0zSo4PDa1YBcTgDyMjJ/qbGPabH08SJt1Uzc9QqRliGg5QySPKvgc+TyfYDmmTUWpNYz7ctxoQdPQshCktupckDJUPUcJT6DwMq8YyaQ9VL0pCS8zapcq4SVOBZmPDO8/cnknlWcDBwn4NYnPjLkQ+qE9OtOVlYpeVHDCEkkkJyT+SuQzy5Y0ru6Ez511/Efa5s1fdkOtyVurIxgdlQAA9gOKKPwolU7remU5hCGYEgo38KUv9I/0TRTDYJCWQBSF4rIN/CRgAR0iTpVD1j1g/qDqJcJqlKcjB9bcda142MpOEJAzgeMnjyTSyze5KEuNRpDoDvC0oe4X9iAeaKKFK+oya6fbOqYbDTeEiAPKpHdS3gBLYc7RQkp3ApQog+cq8nwPJrljzxnPZbUfnugn/NFFRgEVch9xKsH0H8pg6e3x3T3UC1ajaZITGkJLoS4MKbOUrzz/ACKVRRRVzVwtoQmhG1NkWu0HuI+JI8u/Kv/Z';

// ///////////////////////////////////////////////////////////////////////////////////
// // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
// ///////////////////////////////////////////////////////////////////////////////////

// const raw = JSON.stringify({
//     "user_app_id": {
//         "user_id": USER_ID,
//         "app_id": APP_ID
//     },
//     "inputs": [
//         {
//             "data": {
//                 "image": {
//                     "url": IMAGE_URL
//                     // "base64": IMAGE_BYTES_STRING
//                 }
//             }
//         }
//     ]
// });

// const requestOptions = {
//     method: 'POST',
//     headers: {
//         'Accept': 'application/json',
//         'Authorization': 'Key ' + PAT
//     },
//     body: raw
// };

// // NOTE: MODEL_VERSION_ID is optional, you can also call prediction with the MODEL_ID only
// // https://api.clarifai.com/v2/models/{YOUR_MODEL_ID}/outputs
// // this will default to the latest version_id

// fetch("https://api.clarifai.com/v2/models/" + MODEL_ID + "/versions/" + MODEL_VERSION_ID + "/outputs", requestOptions)
//     .then(response => response.json())
//     .then(result => {

//         const regions = result.outputs[0].data.regions;

//         regions.forEach(region => {
//             // Accessing and rounding the bounding box values
//             const boundingBox = region.region_info.bounding_box;
//             const topRow = boundingBox.top_row.toFixed(3);
//             const leftCol = boundingBox.left_col.toFixed(3);
//             const bottomRow = boundingBox.bottom_row.toFixed(3);
//             const rightCol = boundingBox.right_col.toFixed(3);

//             region.data.concepts.forEach(concept => {
//                 // Accessing and rounding the concept value
//                 const name = concept.name;
//                 const value = concept.value.toFixed(4);

//                 console.log(`${name}: ${value} BBox: ${topRow}, ${leftCol}, ${bottomRow}, ${rightCol}`);
                
//             });
//         });

//     })
//     .catch(error => console.log('error', error));
// onInputChange = (event) => {
//     this.setState({input: event.target.value});
// }





// onButtonSubmit = () => {
//     this.setState({imageUrl: this.state.input});
//     app.models
//     .predict(
//         Clarifai.FACE_DETECT_MODEL,
//         this.state.input)
//     .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
//     .catch(err => console.log(err))
// }

class App extends Component {
    constructor()
    {
        super();
        this.state = {
            input: '',
            imageUrl: '',
            box: {},
            route: 'signin'
        }
    }

    calculateFaceLocation = (data) => {
        const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
        const image = document.getElementById('inputimage');
        const width = Number(image.width);
        const height = Number(image.height);
        return {
          leftCol: clarifaiFace.left_col * width,
          topRow: clarifaiFace.top_row * height,
          rightCol: width - (clarifaiFace.right_col * width),
          bottomRow: height - (clarifaiFace.bottom_row * height)
        }
      }
    
      displayFaceBox = (box) => {
        this.setState({box: box});
      }
      
      onRouteChange = (route) => {
        // must wrap objects in {}
        this.setState({route: 'home'});
      }

  render() {
    return (
      <div className="App">
         <ParticlesBg className='particles'
         color="#ffffff" num={100} type="cobweb" bg={true} />
        <Navigation onRouteChange={this.onRouteChange} />
        { this.state.route === 'signin' 
        // if successful signin, will redirect to the home page
        ? <Signin onRouteChange={this.onRouteChange} />
        : <div>
            <Logo />
            <Rank/>
            <ImageLinkForm 
            onInputChange={this.onInputChange}
            onButtonSubmit={this.onButtonSubmit}/>
        <FaceRecognition box = {this.state.box} imageUrl={this.state.imageUrl} />
      </div>
  }
  </div>
  )}
}

export default App;