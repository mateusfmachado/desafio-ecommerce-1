import React, { Component } from 'react';

import NavBar from './components/NavBar';
import Categorias from './components/Categorias';

import HeroShop from './components/HeroShop';
import Descricao from './components/Descricao';
import DetalhesProduto from './components/DetalhesProduto';

import Avaliacoes from './components/Avaliacoes';

import Recomendacoes from './components/Recomendacoes';

import Newsletter from './components/Newsletter';

import Footer from './components/Footer';

class App extends Component {
    render() {
        return (
            <div className="PDP">
                <NavBar />
                <Categorias />
                
                <HeroShop />
                <Descricao />
                <DetalhesProduto />

                <Avaliacoes />

                <Recomendacoes />

                <Newsletter />

                <Footer />
            </div>
        );
    }
}

export default App;
