import { Component } from "react";
import "./App.css";
import ImageLinkForm from "./components/imageForm/ImageLinkForm";
import Logo from "./components/logo/Logo";
import Navigation from "./components/navigation/Navigation";
import Rank from "./components/rank/Rank";

import FaceRecognition from "./components/faceRecognition/FaceRecognition";
import SignIn from "./components/signIn/SignIn";
import SignUp from "./components/register/SignUp";

const setUpClarifai = (imgUrl) => {
  // Your PAT (Personal Access Token) can be found in the portal under Authentification
  const PAT = "3f5a40b8fef8460398d97b4be32b6cde";
  // Specify the correct user_id/app_id pairings
  // Since you're making inferences outside your app's scope
  const USER_ID = "vk40n9nn69ds";
  const APP_ID = "smart-brain";
  // Change these to whatever model and image URL you want to use
  const MODEL_ID = "face-detection";
  const MODEL_VERSION_ID = "6dc7e46bc9124c5c8824be4822abe105";
  const IMAGE_URL = imgUrl;

  const raw = JSON.stringify({
    user_app_id: {
      user_id: USER_ID,
      app_id: APP_ID,
    },
    inputs: [
      {
        data: {
          image: {
            url: IMAGE_URL,
          },
        },
      },
    ],
  });

  const requestOptions = {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: "Key " + PAT,
    },
    body: raw,
  };
  return requestOptions;
};

///////////////////////////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
///////////////////////////////////////////////////////////////////////////////////

// NOTE: MODEL_VERSION_ID is optional, you can also call prediction with the MODEL_ID only
// https://api.clarifai.com/v2/models/{YOUR_MODEL_ID}/outputs
// this will default to the latest version_id

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imgUrl: "",
      box:{},
      route: 'signIn',
      isSignIn: false
    };
  }
 
  calculateFaceLocation = (data) =>{
    const img = document.getElementById('inputImg');
    const width = Number(img.width);
    const height = Number(img.height);
    return{
      topRow: data.top_row * height,
      rightCol: width - (data.right_col * width),
      bottomRow: height - (data.bottom_row * height),
      leftCol: data.left_col * width
     
      
     
    }
  }

  displayFaceBox = (box) =>{
    console.log(box)
    this.setState({box: box})
  }

  onInputChage = (event) => {
    this.setState({ input: event.target.value });
  };

  onRouteChange = (route) => {
    if(route === 'signIn'){
      this.setState({isSignIn:false})
    }
    else if (route === 'home'){
      this.setState({isSignIn:true})
    }
    this.setState({route: route})
  }

  onButtonSubmit = () => {
    this.setState({ imgUrl: this.state.input });
    fetch(
      "https://api.clarifai.com/v2/models/" + "face-detection" + "/outputs",
      setUpClarifai(this.state.input)
    )
      .then((response) => response.json())
      .then((result) =>
     
        this.displayFaceBox(this.calculateFaceLocation
          (result.outputs[0].data.regions[0].region_info.bounding_box)
          )
      )
      .catch((error) => console.log("error", error));
  };
  // .regions[0].region_info.bounding_box
  render() {
    return (
      <div className="App">
       
        <Navigation isSignIn={this.state.isSignIn} onRouteChange = {this.onRouteChange}/>
        { this.state.route === 'home'?
        <div>
        <Logo />
        <Rank />
        <ImageLinkForm
          onInputChage={this.onInputChage}
          onButtonSubmit={this.onButtonSubmit}
        />
        <FaceRecognition imgUrl={this.state.imgUrl} box = {this.state.box} />
        </div>
        :
        (
          this.state.route === 'signIn' ?
          <SignIn onRouteChange = {this.onRouteChange}/>
          :
          <SignUp onRouteChange = {this.onRouteChange}/>
        )
        
        
  }

      </div>
    );
  }
}

export default App;
