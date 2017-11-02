import React,{Component} from 'react';

export default class Footer extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <footer className="foot">
            <a href="">关于网易</a>
            <a href="">关于网易免费邮</a>
            <a href="">邮箱官方博客</a>
            <a href="">客户服务</a>
            <a href="">隐私政策</a>
            <span className="last">|</span>
            <a href="">网易公司版权所有 © 1997-2013</a>
            </footer>
        )
    }
}
