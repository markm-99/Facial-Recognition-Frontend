import React, {Component} from 'react';
import './App.css';
import Axios from 'axios';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import ParticlesBg from 'particles-bg';
import Clarifai from 'clarifai';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';

// Function to return Clarifai JSON request
const returnClarifiaiJSONRequest = (imageUrl) => {
    const PAT = '12735fa0adec494eb6942d537d87cce7';
    const USER_ID = 'ninjafruit';       
    const APP_ID = 'test';
    const MODEL_ID = 'face-detection';
    const MODEL_VERSION_ID = '6dc7e46bc9124c5c8824be4822abe105';    
    const IMAGE_URL = imageUrl;

    const raw = JSON.stringify({
      "user_app_id": {
          "user_id": 'ninjafruit',
          "app_id": 'test'
      },
      "inputs": [
          {
              "data": {
                  "image": {
                      "url": IMAGE_URL
                  }
              }
          }
      ]
  })

  const requestOptions = {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Authorization': 'Key ' + PAT
        },
      body: raw   
  }
  return requestOptions
}

// Main App component
class App extends Component {
    // Constructor method to initialize state
    constructor() {
        super();
        this.state = {
            input: '',
            imageUrl: '',
            box: {},
            route: 'signin',
            isSignedIn: false,
            user: {
                id: '',
                name: '',
                email: '',
                entries: 0,
                joined: ''
            }
        }
    }

        // Function to calculate face location
        calculateFaceLocation = (data) => {
        const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
        const image = document.getElementById('inputimage');
        const width = Number(image.width);
        const height = Number(image.height);
        // console.log(width, height);
        return {
            // return an object (image with orientation)
                leftCol: clarifaiFace.left_col * width,
                topRow: clarifaiFace.top_row * height,
                rightCol: width - (clarifaiFace.right_col * width),
                bottomRow: height - (clarifaiFace.bottom_row * height)
            }
            }

        displayFaceBox = (box) => {
            this.setState({box: box});
          }
        // Function to handle input change
        onInputChange = (event) => {
          console.log(event.target.value);
            this.setState({input: event.target.value});
        }
        // Function to handle button submit
        onButtonSubmit = () => { 
            this.setState({imageUrl: this.state.input})
            fetch("https://api.clarifai.com/v2/models/face-detection/outputs", 
              returnClarifiaiJSONRequest(this.state.input))
                .then(response => response.json())
                .then(result => {
                  if (result) {
                    fetch('http://localhost:3000/image', {
                      method: 'put',
                      headers: {'Content-Type': 'application/json'},
                      body: JSON.stringify({
                        id: this.state.user.id
                      })
                    })
                      .then(result => result.json())
                      .then(count => {
                        this.setState(Object.assign(this.state.user, { entries: count}))
                      })
          
                  }
                  this.displayFaceBox(this.calculateFaceLocation(result))
                })
                .catch(err => console.log(err));
          }
        // onButtonSubmit = () => {
        //     console.log('click');
        //     this.setState({imageUrl: this.state.input}, () => {
        //         fetch('http://localhost:3001/image', {
        //             method: 'PUT',
        //             headers: {'Content-Type': 'application/json'},
        //             body: JSON.stringify({
        //                 input: this.state.input
        //             })
        //         })
        //         .then(response => {
        //             // Handle response
        //         })
        //         .catch(err => console.log(err));
        //     });
        // }
                
        // Function to display face box
            // fetch("https://api.clarifai.com/v2/models/" + "face-detection" + "/outputs", returnClarifiaiJSONRequest(this.state.input))
            //     .then(response => response.json())
            //     .then(response => {
            //         console.log('Response: ', response);
            //         if (response) {
            //             fetch('http://localhost:3001/image', {
            //                 method: 'put',
            //                 headers: {'Content-Type': 'application/json'},
            //                 body: JSON.stringify({
            //                     id: this.state.user.id
            //                 })
            //             })
            //                 .then(response => response.json())
            //                 .then(count => {
            //                     this.setState(Object.assign(this.state.user, { entries: count }));
            //                 });
            //         }
            //     })
            //     .catch(error => console.log('Error fetching data:', error));
        
        // Lifecycle method: fetch data from a specific endpoint when the component mounts
        componentDidMount() {
            fetch('http://localhost:3001/')
                .then(response => response.json())
                .then(data => console.log(data))
                .catch(error => console.log('error', error));
        }
        // Function to load user data
        loadUser = (data) => {
            this.setState({
                user: {
                    id: data.id,
                    name: data.name,
                    email: data.email,
                    entries: data.entries,
                    joined: data.joined
                }
            })
        }

    // Function to handle route change
    onRouteChange = (route) => {
        if (route === 'signout') {
            this.setState({isSignedIn: false})
        } else if (route === 'home') {
            this.setState({isSignedIn: true});
        }
        this.setState({route: route});
    }

    // Render method
    render() {
        const { isSignedIn, imageUrl, route, box } = this.state;
        // const MODEL_ID = 'face-detection';
        // const MODEL_VERSION_ID = '6dc7e46bc9124c5c8824be4822abe105';
        // const requestOptions = returnClarifiaiJSONRequest(this.state.imageUrl);

        return (
            <div className="App">
                <ParticlesBg className='particles' color="#ffffff" num={100} type="cobweb" bg={true} />
                <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
                {route === 'home' ? (
                    <div>
                      <Rank />
                        <ImageLinkForm 
                            onInputChange={this.onInputChange}
                            onButtonSubmit={this.onButtonSubmit}
                        />
                        <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl} />
                        <Logo />
                    </div>
                ) : (
                    route === 'signin' 
                    ? <Signin onRouteChange={this.onRouteChange} /> 
                    : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
                )}
            </div>
        )
    }
}

export default App;

