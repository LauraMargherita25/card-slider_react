import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const SliderCommandPalette = () =>{
    
    const addNewCard = (props) => {
        // const {handleNewCard} = props
        const newCard = {
            src: 'https://picsum.photos/id/100/100/100',
            title: 'Card 5',
            text: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
        };

        props.handleNewCard(newCard)
    }

    return (
        <nav className="w-3/4 mx-auto mb-12 flex justify-evenly items-center">
            <h1 className="text-6xl">Section Cards</h1>
            
            <button className='py-2 px-3 rounded-lg text-sm font-medium text-center text-white bg-red-700' onClick={addNewCard}>
                Add a card
            </button>
        </nav>
    )
}

const SliderNavigationController = () =>{
    return (
        <div>
            <button type="button" className="mb-2 px-5 py-2.5 rounded-full text-4xl font-medium text-gray-600 absolute top-1/2 left-[270px] translate-x-0 -translate-y-1/2 disabled:shadow-none disabled:text-gray-600 hover:shadow-2xl hover:transition-all active:shadow-inner focus:text-black">
                <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <button type="button" className="mb-2 px-5 py-2.5 rounded-full text-4xl font-medium text-gray-600 absolute top-1/2 right-[270px] translate-x-0 -translate-y-1/2 disabled:shadow-none disabled:text-gray-600 hover:shadow-2xl hover:transition-all active:shadow-inner focus:text-black">
                <FontAwesomeIcon icon={faArrowRight} />
            </button>
        </div>
    )
};

class Slider extends Component{
    render() {
        const { cardsData } = this.props;
        const { handleNewCard } = this.props;
        const cards = cardsData.map((card, index) => {
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
        })
        return (
            <div className="relative">
                <SliderCommandPalette />
                <ul className="w-fit mb-12 flex">
                    {cards}
                </ul>
                <SliderNavigationController handleNewCard={handleNewCard}/>
            </div>
        )
    }
}

export default Slider