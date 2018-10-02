import React, { Component } from 'react'

class NavBar extends Component {
    render(){
        return (
            <div className="NavBar flex horizontal">
                <div className="flex-2 flex flex-center">
                    <img src={"/media/image/logo.png"} height="60px" />
                </div>
                <div className="flex-3 flex flex-center">
                    <div>
                        <input className="Input" name="pesquisa" placeholder="Pesquise aqui..." />
                    </div>
                </div>
                <div className="no-show-mb flex-1 flex flex-center vertical">
                    <span>
                        Acessar
                    </span>
                </div>
                <div className="flex-2 flex flex-center vertical">
                    <span>
                        Sacola - 0 itens
                    </span>              
                </div>
            </div>
        )
    }
}

export default NavBar;