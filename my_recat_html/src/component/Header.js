import React,{Component} from 'react';

export default class Header extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <header className="head">
            <div className="head_left fl">
                <div className="head_logo fl">
                    <a href="" className="onelogo fl"></a>
                    <a href="" className="twologo fl"></a>
                    <a href="" className="yeahlogo fl"></a>
                </div>
                <h2 className="head_title fl">中国第一大电子邮件服务商</h2>
            </div>
            <div className="head_right fr">
                <a href="" className="head_more">了解更多</a>
                <span>|</span>
                <a href="" className="head_fankui">反馈意见</a>
            </div>
            </header>
        )
    }
}