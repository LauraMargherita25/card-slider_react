import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

// const SliderCommandPalette = (props) => {

//     let rangeValue = 1

//     let newCards = []

//     const handleChange = (event) => {
//         const { value } = event.target
//         rangeValue = value
//         let y = 100
//         for (let i = 0; i < value; i++) {
//             const newCard = {
//                 src: 'https://picsum.photos/id/'+ y++ +'/100/100',
//                 title: 'Card ' + (i + 1),
//                 text: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
//             }
//             newCards.push(newCard)
//         }
//         props.addCard(newCards)
//     }

//     let backgroundColor = props.backgroundColor
//     const changeBackgroundColor = (event) => {
//         props.handleNewBackgroundColor(event.target.value)
//     }

//     return (
//         <nav className="w-3/4 mx-auto mb-12 flex justify-evenly items-center">
//             <h1 className="text-6xl">Section Cards</h1>
            
            
//             <div className="w-1/8">
//                 <label htmlFor="small-range" className="mb-2 text-sm font-medium text-gray-900 block">Number of Cards:{rangeValue}</label>
//                 <input id="small-range" type="range" defaultValue={rangeValue} min="1" max="10" className="h-1 border-none rounded-lg text-black bg-zinc-300 appearance-none cursor-pointer" onChange={handleChange}/>
//             </div>

//             <div className="flex items-center">
//                 <label htmlFor="color">Background color: </label>
//                 <input type="color" id="color" name="color" value={backgroundColor} className="w-12 h-8 m-2 border-2 border-solid border-white rounded-full cursor-pointer" onChange={changeBackgroundColor}/> 
//             </div>
            
//         </nav>
//     )
// };

class SliderCommandPalette extends Component {
    initialValue = 1;
    state = {
        rangeValue: this.initialValue
    }
    handleChange = (event) => {
        const value = event.target.value;

        this.setState({
            rangeValue: value, 
        })

        let newCards = []
        let y = 100
        for (let i = 0; i < value; i++) {
            const newCard = {
                src: 'https://picsum.photos/id/'+ y++ +'/100/100',
                title: 'Card ' + (i + 1),
                text: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
            }
            newCards.push(newCard)
        }
        this.props.addCard(newCards)
    }

    changeBackgroundColor = (event) => {
        this.props.handleNewBackgroundColor(event.target.value)
    }
    render() {
        return(

            <nav className="w-3/4 mx-auto mb-12 flex justify-evenly items-center">
                <h1 className="text-6xl">Section Cards</h1>

                <div>
                    <label htmlFor="small-range" className="mb-2 text-sm font-medium text-gray-900 block">Number of Cards:{this.state.rangeValue}</label>
                    <input id="small-range" type="range" value={this.state.rangeValue} min="1" max="10" className="h-1 border-none rounded-lg text-black bg-zinc-300 appearance-none cursor-pointer" onChange={this.handleChange}/>
                </div>

                {/* <div className="w-1/8">
                    <label htmlFor="small-range" className="mb-2 text-sm font-medium text-gray-900 block">Number of Cards:{rangeValue}</label>
                    <input id="small-range" type="range" defaultValue={rangeValue} min="1" max="10" className="h-1 border-none rounded-lg text-black bg-zinc-300 appearance-none cursor-pointer" onChange={handleChange}/>
                </div> */}

                <div className="flex items-center">
                    <label htmlFor="color">Background color: </label>
                    <input type="color" id="color" name="color" value={this.props.backgroundColor} className="w-12 h-8 m-2 border-2 border-solid border-white rounded-full cursor-pointer" onChange={this.changeBackgroundColor}/> 
                </div>

            </nav>
        )
    }
}

const SliderSection = (props) => {

    const cards = props.getActiveArray().map((card, index) => {
        return (
            <li key={index} className={`w-[280px] h-[400px] mx-8 rounded-[25px] bg-white inline-block overflow-hidden shadow-xl first-of-type:opacity-50 last-of-type:opacity-50 ${Object.keys(card).length === 0 ? 'invisible' : ''}`}>
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
            <button type="button" className="mb-2 px-5 py-2.5 rounded-full text-4xl font-medium text-gray-600 absolute top-1/2 left-[270px] translate-x-0 -translate-y-1/2 disabled:shadow-none disabled:text-gray-600 hover:shadow-2xl hover:transition-all active:shadow-inner focus:text-black" onClick={props.prev} disabled={props.arrMinSize === 0}>
                <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <button type="button" className="mb-2 px-5 py-2.5 rounded-full text-4xl font-medium text-gray-600 absolute top-1/2 right-[270px] translate-x-0 -translate-y-1/2 disabled:shadow-none disabled:text-gray-600 hover:shadow-2xl hover:transition-all active:shadow-inner focus:text-black" onClick={props.next} disabled={props.arrMaxSize >= props.getArrayLimit()}>
                <FontAwesomeIcon icon={faArrowRight} />
            </button>
        </div>
    )
};

const SliderPaginationController = (props) => {

    const indicators = props.cardsData.map((indicator, index) => {
        return (    
            <li className="inline mr-3" key={index}>
                <button className={`w-3 h-3 rounded-full hover:w-5 hover:h-5 hover:transition-all active:w-2 active:h-2 ${Object.keys(indicator).length === 0 ? 'hidden' : ''} ${indicator === props.getActiveArray()[2] ? 'bg-zinc-700' : 'bg-zinc-300'}`} onClick={() => {props.setActiveArray(index)}}></button>
            </li>
        )
    })

    return (
        <ul className="flex justify-center items-center h-28">
            {indicators}
        </ul>
    )
};

class SliderComponent extends Component{
    state = {
        cardsData: [
            {},
            {},
            {
                src: 'https://picsum.photos/id/100/100/100',
                title: 'Card 1',
                text: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
            },
            {},
            {},
        ],

        arrMinSize: 0,
        arrMaxSize: 5,
    };

    prev = () => {
        this.setState({arrMinSize: this.state.arrMinSize - 1, arrMaxSize: this.state.arrMaxSize - 1 })
    };
    
    next = () => {
        this.setState({arrMinSize: this.state.arrMinSize + 1, arrMaxSize: this.state.arrMaxSize + 1 })
    };

    getArrayLimit = () => {
        return this.state.cardsData.length;
    };

    getActiveArray = () => {
        return this.state.cardsData.slice(this.state.arrMinSize, this.state.arrMaxSize)
    };

    setActiveArray = (index) => {
        this.setState({arrMinSize: index - 2, arrMaxSize: index + 3 })
    }


    addCard = (newCards) => {
        this.setState({
            cardsData: [...this.state.cardsData.slice(0, 2), ...newCards, ...this.state.cardsData.slice(this.getArrayLimit() - 2)]
        })
        
        console.log([...this.state.cardsData.slice(0, 2), ...this.state.cardsData.slice(this.getArrayLimit() - 2)])
        console.log(newCards)

        // this.setState({
        //     cardsData: [...this.state.cardsData.slice(0, this.getArrayLimit() - 2), ...newCards, ...this.state.cardsData.slice(this.getArrayLimit() - 2)]
        // })
    }

    render() {
        const { backgroundColor,handleNewBackgroundColor } = this.props
        const { cardsData,arrMinSize,arrMaxSize } = this.state;

        return (
            <div className="relative">
                <SliderCommandPalette addCard={this.addCard} backgroundColor={backgroundColor} handleNewBackgroundColor={handleNewBackgroundColor}/>
                <SliderSection getActiveArray={this.getActiveArray} /> 
                <SliderNavigationController prev={this.prev} next={this.next} arrMinSize={arrMinSize} arrMaxSize={arrMaxSize} getArrayLimit={this.getArrayLimit} />
                <SliderPaginationController cardsData={cardsData} setActiveArray={this.setActiveArray} getActiveArray={this.getActiveArray}/>
            </div>
        )
    }
}

export default SliderComponent