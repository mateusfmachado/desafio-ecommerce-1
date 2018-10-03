import React, { Component } from 'react'

const urlPhotos = [
    `${process.env.PUBLIC_URL}/media/image/foto-1.png`,
    `${process.env.PUBLIC_URL}/media/image/foto-2.png`,
    `${process.env.PUBLIC_URL}/media/image/foto-4.png`,
    `${process.env.PUBLIC_URL}/media/image/foto-5.png`,
    `${process.env.PUBLIC_URL}/media/image/foto-6.png`
]

class HeroShop extends Component {

    state = {
        fotohero: urlPhotos[0]
    }
    
    renderPhotos(){
        return (
            <div className="fotos flex-3 flex horizontal">
                <div className="flex-1 flex vertical horizontal-mb">
                    {
                        urlPhotos
                        .filter((item) => item !== this.state.fotohero)
                        .slice(0,2)
                        .map((item,index) => (
                            <div className="flex-1 flex flex-center" key={index} onClick={() => this.setState({ fotohero: item })}>
                                <img className="img-rounded" alt="foto-1-small" src={item}/>
                            </div>
                        ))
                    }
                </div>
                <div className="flex-3 flex flex-center">
                    <img alt="foto-big" className="foto-big" src={this.state.fotohero} />  
                </div>
                <div className="flex-1 flex vertical horizontal-mb">
                    {
                        urlPhotos
                        .filter((item) => item !== this.state.fotohero)
                        .slice(2,4)
                        .map((item,index) => (
                            <div className="flex-1 flex flex-center" key={index} onClick={() => this.setState({ fotohero: item })}>
                                <img className="img-rounded" alt="foto-1-small" src={item} />
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }

    render(){
        return (
            <div className="HeroShop-bg">
                <div className="HeroShop">
                    <div className="container-big flex vertical">
                        <div className="arrow">
                            Inicio > Orient > Unissex
                        </div>
                        <div className="Hero-shop-data flex vertical">

                            <div className="padding-30 flex vertical flex-center ">
                                <h1 className="text-center">Relógio Bulova Automático Esqueleto 21 Jewels</h1>
                                <div className="flex flex-center">
                                    <div className="reviews text-center">
                                        <span role="img" aria-label="star">⭐️⭐️⭐️⭐️⭐️</span> - 124 avaliações                       
                                    </div>
                                </div>
                            </div>

                            <div className="flex horizontal">
                                { this.renderPhotos() }
                            </div> 

                            <div className="Price-box flex flex-center">
                                <div className="flex-1 flex flex-center vertical">
                                    <div className="price text-center">
                                        <small>R$</small>
                                        <h1>1.784,15</h1>
                                    </div>
                                    <div className="sub-price text-center">
                                        <span>ou 12x de R$ 174,92</span>
                                    </div>

                                    <div className="button-cta text-center">
                                        <button>COMPRAR</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HeroShop;