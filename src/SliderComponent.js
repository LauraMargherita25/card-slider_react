import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const SliderCommandPalette = () => {
    return (
        <nav className="w-3/4 mx-auto mb-12 flex justify-evenly items-center">
            <h1 className="text-6xl">Section Cards</h1>
            
            <button className='py-2 px-3 rounded-lg text-sm font-medium text-center text-white bg-red-700'>
                Add a card
            </button>
        </nav>
    )
};

const SliderSection = (props) => {

    let getActiveArray = () => {
        return props.cardsData.slice(props.arrMinSize, props.arrMaxSize)
    };

    const cards = getActiveArray().map((card, index) => {
        return (
            <li key={index} className="w-[280px] h-[400px] mx-8 rounded-[25px] bg-white inline-block overflow-hidden shadow-xl first-of-type:opacity-50 last-of-type:opacity-50">
                <div>
                    <img src={card.src} alt=""  className="rounded-full mx-auto my-9"/>
                </div>
        
                <div className="card_bottom text-center p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight">{card.title}</h5>
                    <p className="mb-3 font-normal text-gray-600">{card.text}</p>
                    <a href="https:picsum.photos/" className="py-2 px-3 rounded-lg text-sm font-medium text-center text-white bg-red-700 bg-gradient-to-r inline-flex items-center hover:from-red-700 hover:to-red-500 active:from-red-500 active:to-red-700 visited:text-black">
                    Read more
                    </a>
                </div>
            </li>
        )
    });

    return (
        <ul className="w-fit mb-12 flex">
            {cards}
        </ul>
    )
};

const SliderNavigationController = (props) => {
    return (
        <div>
            <button type="button" className="mb-2 px-5 py-2.5 rounded-full text-4xl font-medium text-gray-600 absolute top-1/2 left-[270px] translate-x-0 -translate-y-1/2 disabled:shadow-none disabled:text-gray-600 hover:shadow-2xl hover:transition-all active:shadow-inner focus:text-black" onClick={props.prev}>
                <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <button type="button" className="mb-2 px-5 py-2.5 rounded-full text-4xl font-medium text-gray-600 absolute top-1/2 right-[270px] translate-x-0 -translate-y-1/2 disabled:shadow-none disabled:text-gray-600 hover:shadow-2xl hover:transition-all active:shadow-inner focus:text-black" onClick={props.next}>
                <FontAwesomeIcon icon={faArrowRight} />
            </button>
        </div>
    )
};

// const SliderPaginationController = () => {
//     return (

//     )
// };

class SliderComponent extends Component{
    state = {
        cardsData: [
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
            },
            {
                src: 'https://picsum.photos/id/100/100/100',
                title: 'Card 5',
                text: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
            }

            // {},
            // {},
            // {
            //     src: 'https://picsum.photos/id/100/100/100',
            //     title: 'Card 2',
            //     text: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
            // },
            // {},
            // {},
        ],

        arrMinSize: 0,
        arrMaxSize: 5,
    };

    prev = () => {
        this.setState({arrMinSize: this.state.arrMinSize - 1, arrMaxSize: this.state.arrMaxSize - 1 })
        console.log(this.state.arrMinSize, this.state.arrMaxSize)
    };
    
    next = () => {
        this.setState({arrMinSize: this.state.arrMinSize + 1, arrMaxSize: this.state.arrMaxSize + 1 })
        console.log(this.state.arrMinSize, this.state.arrMaxSize)
    };

    render() {
        const { cardsData,arrMinSize,arrMaxSize } = this.state;

        return (
            <div className="relative">
                <SliderCommandPalette />
                <SliderSection cardsData={cardsData} arrMinSize={arrMinSize} arrMaxSize={arrMaxSize} />
                <SliderNavigationController prev={this.prev} next={this.next} />
                {/* <SliderPaginationController /> */}
            </div>
        )
    }
}

export default SliderComponent