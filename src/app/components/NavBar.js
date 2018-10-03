import React, { Component } from 'react'

class NavBar extends Component {
    render(){
        return (
            <div className="NavBar flex horizontal">
                <div className="flex-2 flex flex-center">
                    <img alt="Logo" src={`${process.env.PUBLIC_URL}/media/image/logo.png`} height="60px" />
                </div>
                <div className="flex-3 flex flex-center">
                    <div>
                        <input className="Input" name="pesquisa" placeholder="Pesquise aqui..." />
                    </div>
                </div>
                <div className="flex-3 flex horizontal-only padding-10">
                    <div className="no-show-mb flex-1 flex flex-center vertical">
                        <span className="text-center">
                            Acessar
                        </span>
                    </div>
                    <div className="flex-2 flex flex-center vertical">
                        <span className="text-center">
                            Sacola - 0 itens
                        </span>              
                    </div>
                </div>
            </div>
        )
    }
}

export default NavBar;