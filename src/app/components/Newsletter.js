import React, { Component } from 'react'

class Newsletter extends Component {
    render(){
        return (
            <div className="Newsletter flex horizontal">
                <div className="flex-1 flex flex-center">
                    <h2>NEWSLETTER</h2>
                </div>
                <div className="flex-2 flex flex-center vertical">
                    <span>
                        Digite seu email para acompanhar as novas promoções e receber ofertas e novidades exclusivas!
                    </span>
                </div>
                <div className="flex-2 flex horizontal flex-center vertical">
                    <div className="flex flex-center horizontal">
                        <input
                            name="email"
                            className="Input Input-newsletter"
                            placeholder="Digite seu email" />
                        <button className="button-newsletter">Enviar</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Newsletter;