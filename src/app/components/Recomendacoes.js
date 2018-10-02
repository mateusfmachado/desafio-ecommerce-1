import React, { Component } from 'react'

const data = [
    {
        foto: "/media/image/relogio-similar-1.png",
        titulo: "Relogio Orient Automático 3 Estrelas",
        preco: "R$ 739,00"
    },
    {
        foto: "/media/image/relogio-similar-2.png",
        titulo: "Relogio Orient FlyTech Titanium 469TI005",
        preco: "R$ 990,00"
    },
    {
        foto: "/media/image/relogio-similar-3.png",
        titulo: "Relogio Orient FlyTech Titanium MBTTC015",
        preco: "R$ 1399,00"
    },
    {
        foto: "/media/image/relogio-similar-4.png",
        titulo: "Relogio Orient Esqueleto Automatico",
        preco: "R$ 1209,00"
    }
]

class Recomendacoes extends Component {
    render(){
        return (
            <div className="Recomendacoes flex vertical">
                <div className="flex flex-center">
                    <h3>Algumas peças que você pode gostar...</h3>
                    <br />
                </div>
                <div className="flex horizontal">

                    {
                        data.map((item, index) => (
                            <div className="Recomendacao flex-1 flex vertical cursor" key={index}>
                                <div className="flex flex-center">
                                    <img alt={item.titulo} src={item.foto} height="200px" />
                                </div>
                                <div className="flex flex-center">
                                    <h4 className="text-center">{item.titulo}</h4>
                                </div>
                                <div className="flex flex-center">
                                    <h2 className="text-center">{item.preco}</h2>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        )
    }
}

export default Recomendacoes;