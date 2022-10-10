import React, { Component } from "react";
import Slider from "./Slider";

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

    return (
      <div className="w-full min-w-fit h-screen flex justify-center items-center">
        <Slider cardsData={cardsData} />
      </div>
    )
  }
}

export default App;