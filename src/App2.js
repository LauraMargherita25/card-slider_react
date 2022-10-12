import React, { Component } from "react";
import SliderComponent from "./SliderComponent";


class App extends Component {
    render() {
        return(
            <div className="w-full min-w-fit h-screen flex justify-center items-center">

                <SliderComponent />

            </div>
        )
    }
}

export default App;