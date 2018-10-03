import React, { Component } from 'react'

const data = [{"label":"MARCA","valor":"Bulova","tipo":"estilo"},{"label":"GÊNERO","valor":"Masculino","tipo":"especificacao"},{"label":"ESTILO","valor":"Casual, Social, Urbano","tipo":"estilo"},{"label":"MODELO","valor":"Analógico","tipo":"especificacao"},{"label":"MECANISMO","valor":"Automático","tipo":"estilo"},{"label":"ALIMENTAÇÃO","valor":"Automático","tipo":"especificacao"},{"label":"FUNÇÕES","valor":"Hora","tipo":"estilo"},{"label":"TAMANHO","valor":"Médio","tipo":"especificacao"},{"label":"DIÂMETRO DA CAIXA","valor":"41.7 mm","tipo":"estilo"},{"label":"ESPESSURA DA CAIXA","valor":"11.9 mm","tipo":"especificacao"},{"label":"PESO DO RELÓGIO","valor":"160 g","tipo":"estilo"},{"label":"COR DA CAIXA:Dourado","tipo":"especificacao"},{"label":"COR DO FUNDO DO VISOR","valor":"Preto","tipo":"estilo"},{"label":"COR DA PULSEIRA","valor":"Dourado","tipo":"especificacao"},{"label":"MATERIAL DO VISOR","valor":"Cristal Mineral","tipo":"estilo"},{"label":"MATERIAL DA CAIXA","valor":"Aço Inoxidável","tipo":"especificacao"},{"label":"MATERIAL DA PULSEIRA","valor":"Aço Inoxidável","tipo":"estilo"},{"label":"RESISTÊNCIA À ÁGUA","valor":"3 atm / 30 metros","tipo":"especificacao"},{"label":"GARANTIA","valor":"1 ano","tipo":"estilo"},{"label":"FORNECEDOR","valor":"Magnum Industria da Amazônia S/A","tipo":"especificacao"},{"label":"CONTEÚDO DA EMBALAGEM","valor":"Relógio, Estojo Original, Acessórios Originais, Certificado de Garantia, Manual e Nota fiscal.","tipo":"estilo"}];

class DetalhesProduto extends Component {

    state = {
        show: "estilo"
    }

    render(){
        return (
            <div className="DetalhesProduto flex horizontal">
                <div className="flex-1" style={{margin:"0px",padding:"0px",overflow:"hidden"}}>
                    <iframe 
                        src="https://www.youtube.com/embed/X0DjGPO7THQ?rel=0&amp;autoplay=1&mute=1" 
                        allow="autoplay; encrypted-media" 
                        title="Video"
                        allowFullScreen
                        frameBorder="0" 
                        style={{overflow:"hidden", width:"100%"}} 
                        height="100%" 
                        width="100%">
                    </iframe>
                </div>
                <div className="flex-1 flex vertical Espec-all">

                    <div className="padding-10">
                        <h2 className="text-center">Descrição</h2>
                    </div>

                    <div className="flex horizontal-only">
                        <div className={`flex-1 button ${this.state.show === "estilo" ? "button-active" : "" }`} onClick={()=>this.setState({ show: "estilo" })}>
                            Estilo
                        </div>
                        <div className={`flex-1 button ${this.state.show === "especificacao" ? "button-active" : "" }`} onClick={()=>this.setState({ show: "especificacao" })}>
                            Especificações
                        </div>
                    </div>

                    <div className="flex vertical">
                        {
                            data
                            .filter((item) => item.tipo === this.state.show)
                            .map((item, index) => (
                                <div key={index} className="espec flex-1 flex horizontal-only">
                                    <div className="flex-1 flex">
                                        { item.label }
                                    </div>
                                    <div className="flex-1 flex">
                                        { item.valor }
                                    </div>
                                </div>
                            ))
                        }                        
                    </div>

                </div>
            </div>
        )
    }
}

export default DetalhesProduto;