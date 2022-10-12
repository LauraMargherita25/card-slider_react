import React, { Component } from "react";
import Slider from "./SliderComponent";

class App extends Component {

  render() {
    const cardsData = [
      {
        src: 'https://picsum.photos/id/100/100/100',
        title: 'Card 0',
        text: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
      },
      {
        src: 'https://picsum.photos/id/100/100/100',
        title: 'Card 1',
        text: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
      },
      {
        src: 'https://picsum.photos/id/100/100/100',
        title: 'Card 2',
        text: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
      },
      {
        src: 'https://picsum.photos/id/100/100/100',
        title: 'Card 3',
        text: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
      },
      {
        src: 'https://picsum.photos/id/100/100/100',
        title: 'Card 4',
        text: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
      }
    ];

    const handleNewCard = (card) => {
      cardsData.push(card)
    }

    return (
      <div className="w-full min-w-fit h-screen flex justify-center items-center">
        <Slider cardsData={cardsData} handleNewCard={handleNewCard}/>
      </div>
    )
  }
}

export default App;