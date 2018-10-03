import React, { Component } from 'react'

const data = [
    {
        texto: "Ótimo relógio! Muito elegante, recomendo muito!",
        data: "24/09/2018",
        estrelas: 4,
        nome: "João"
    },
    {
        texto: "Gostei muito, muito detalhado e bem feito.",
        data: "24/09/2018",
        estrelas: 5,
        nome: "Antônio"
    },
    {
        texto: "Muito bom, já é a segunda vez que compro e veio muito rápido.",
        data: "24/09/2018",
        estrelas: 5,
        nome: "Marcos"
    }
];

class Avaliacoes extends Component {
    render(){
        return (
            <div className="Avaliacoes flex vertical">
                <div className="flex flex-center">
                    <h2>Avaliações</h2>
                </div>
                <div className="flex container horizontal">

                    {
                        data.map((item, index) => (
                            <div className="flex-1" key={index}>
                                <div className="Avaliacao container panel flex vertical">
                                    <div className="flex-3 flex flex-center">
                                        {item.texto}
                                    </div>
                                    <div className="flex-1 flex horizontal">
                                        <div className="flex-1 flex flex-center">
                                            <div>
                                                <br />
                                                <span>
                                                    {
                                                        Array
                                                        .from({length: item.estrelas}, (v, k) => k+1)
                                                        .map((_d,i) => (<span role="img" aria-label="star" key={i}>⭐️</span>) )
                                                    }
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex-1 flex vertical">
                                            <br />
                                            <span>{item.nome}</span>
                                            <small>{item.data}</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        )
    }
}

export default Avaliacoes;