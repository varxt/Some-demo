import React,{Component} from 'react';
import ReactDOM from 'react-dom';


import Header from './Component/Header';
import Content from './Component/Content';
import Footer from './Component/Footer';


class App extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <section className="wrap">
                <Header></Header>
                <Content></Content>
                <Footer></Footer>
            </section>
        )
    }
}


ReactDOM.render(
    <App/>,
    document.getElementById('root')
);