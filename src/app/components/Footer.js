import React, { Component } from 'react'

const data = [
    "EMAIL: contato@ttime.com.br",
    "TELEFONE: (42) 3523-4186 ou 0800-645-1516",
    "WHATSAPP: (42) 99162-3290",
    "HORÁRIO DE ATENDIMENTO: Seg. à Sex.: 8h às 12h e das 13h30m às 18h, horário de Brasília (exceto feriados)"
]

class Footer extends Component {
    render(){
        return (
            <div className="Footer">
                <div className="container flex horizontal">
                    {
                        data.map((item, index) => (
                            <div key={index} className="flex-1 flex vertical flex-center">
                                <span>{ item.split(': ')[0] }</span>
                                <br />
                                <span>{ item.split(': ')[1] }</span>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default Footer;