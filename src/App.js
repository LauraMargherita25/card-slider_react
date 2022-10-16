import React, { Component } from "react";
import SliderComponent from "./SliderComponent";


class App extends Component {
    state = {
        backgroundColor: "#ffedd5"
    }

    handleNewBackgroundColor = (newColor) => {
        this.setState({
            backgroundColor: newColor
        })
    }

    render() {
        return(
            <div className="w-full min-w-fit h-screen flex justify-center items-center" style={{ backgroundColor: this.state.backgroundColor}}>

                <SliderComponent backgroundColor={this.state.backgroundColor} handleNewBackgroundColor={this.handleNewBackgroundColor}/>

            </div>
        )
    }
}

export default App;