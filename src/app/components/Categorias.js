import React, { Component } from 'react'

class Categorias extends Component {
    render(){
        return (
            <div className="Categorias ">
                <div className="container flex horizontal">
                    <div className="flex-1 flex flex-center">
                        Relógios
                    </div>
                    <div className="flex-1 flex flex-center">
                        Marcas
                    </div>
                    <div className="flex-1 flex flex-center">
                        Masculino
                    </div>
                    <div className="flex-1 flex flex-center">
                        Feminino
                    </div>
                    <div className="flex-1 flex flex-center">
                        Lançamentos
                    </div>
                    <div className="flex-1 flex flex-center">
                        Maçonaria
                    </div>  
                    <div className="flex-1 flex flex-center">
                        Acessórios
                    </div>
                    <div className="flex-1 flex flex-center">
                        Outlet
                    </div>   
                </div>           
            </div>
        )
    }
}

export default Categorias;