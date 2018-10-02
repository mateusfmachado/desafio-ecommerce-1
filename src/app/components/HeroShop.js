import React, { Component } from 'react'

const urlPhotos = [
    "/media/image/foto-1.png",
    "/media/image/foto-2.png",
    "/media/image/foto-4.png",
    "/media/image/foto-5.png",
    "/media/image/foto-6.png"
]

class HeroShop extends Component {

    state = {
        fotohero: urlPhotos[0]
    }
    
    renderPhotos(){
        return (
            <div className="fotos flex-3 flex horizontal">
                <div className="flex-1 flex vertical">
                    {
                        urlPhotos
                        .filter((item) => item !== this.state.fotohero)
                        .slice(0,2)
                        .map((item,index) => (
                            <div className="flex-1 flex flex-center" key={index} onClick={() => this.setState({ fotohero: item })}>
                                <img className="img-rounded" alt="foto-1-small" src={item} width="75%" height="75%" />
                            </div>
                        ))
                    }
                </div>
                <div className="flex-3 flex flex-center">
                    <img alt="foto-big" className="foto-big" src={this.state.fotohero} />  
                </div>
                <div className="flex-1 flex vertical">
                    {
                        urlPhotos
                        .filter((item) => item !== this.state.fotohero)
                        .slice(2,4)
                        .map((item,index) => (
                            <div className="flex-1 flex flex-center" key={index} onClick={() => this.setState({ fotohero: item })}>
                                <img className="img-rounded" alt="foto-1-small" src={item} width="75%" height="75%" />
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }

    renderData(){
        return (
            <div className="data flex-1">

                {/* <h2>Relógio Bulova Automático Esqueleto 21 Jewels</h2>
                <small>SKU: WB32004U</small>
                <hr /> */}

                {/* <div className="reviews">
                    ⭐️⭐️⭐️⭐️⭐️ - 124 avaliações                                     
                </div> */}

                <div className="price">
                    <h1><small>R$</small> 535,89</h1>
                </div>
                <div className="sub-price">
                    <small>ou 12x de R$ 52,42</small>
                </div>

                <div className="button-cta">
                    <button>COMPRAR</button>
                </div>
    
                {/* <hr />

                <h4>Prazo de Entrega</h4>
                <div>
                    <label>CEP:</label>
                    <input placeholder="00000-000" name="CPF" />
                </div>
                
                <div>                    
                    <input type="radio" name="tipo-entrega" value="registrada" />
                    <label>Carta Registrada - R$ 7,00</label>
                </div>
                <div>                    
                    <input type="radio" name="tipo-entrega" value="sedex" />
                    <label>Sedex - R$ 18,00</label>
                </div> */}

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
                                        ⭐️⭐️⭐️⭐️⭐️ - 124 avaliações                                     
                                    </div>
                                </div>
                            </div>

                            <div className="flex horizontal">
                                { this.renderPhotos() }
                                {/* { this.renderData() } */}
                            </div> 

                            <div className="flex flex-center">
                                <div className="flex-1 flex flex-center vertical">
                                    <div className="price text-center">
                                        <small>R$</small>
                                        <h1>535,89</h1>
                                    </div>
                                    <div className="sub-price text-center">
                                        <span>ou 12x de R$ 52,42</span>
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