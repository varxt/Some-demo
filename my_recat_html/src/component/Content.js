import React,{Component} from 'react'

export default class Content extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="content">
            <div className="content_top">
                <h3 className="top_title">欢迎注册网易免费邮！邮件地址可以作为网易通行证，使用其他网易旗下产品。</h3>
            </div>
            <div className="content_main">
                <div className="main_left fl">
                    <div className="main_tab">
                        <a href="" className="tab_zimu fl">
                            注册字母邮箱
                        </a>
                        <a href="" className="tab_phone fl">
                            注册手机号码邮箱
                        </a>
                    </div>
                    <form className="main_info">
                        <ul className="item_wrap">
                            <li className="item clearfix">
                                <label className="text fl">*邮件地址</label>
                                <div className="i_box fl">
                                    <div className="i_boxtop">
                                        <input type="text" className="i_text"/>
                                        <span className="and">@</span>
                                        <select className="i_select">
                                            <option>163.com</option>
                                            <option>126.com</option>
                                            <option>yeah.net</option>
                                        </select>
                                    </div>
                                    <div className="i_boxtag">
                                        <span>6~18个字符，可使用字母、数字、下划线，需以字母开头</span>
                                    </div>
                                </div>
                            </li>
                            <li className="item clearfix">
                                <label htmlFor="user" className="text fl">*密码</label>
                                <div className="i_box fl">
                                    <div className="i_boxtop">
                                        <input type="password" className="i_password"/>
                                    </div>
                                    <div className="i_boxtag">
                                        <span>6~16个字符，区分大小写</span>
                                    </div>
                                </div>
                            </li>
                            <li className="item clearfix">
                                <label htmlFor="user" className="text fl">*确认密码</label>
                                <div className="i_box fl">
                                    <div className="i_boxtop">
                                        <input type="password" className="i_password"/>
                                    </div>
                                    <div className="i_boxtag">
                                        <span>请再次填写密码</span>
                                    </div>
                                </div>
                            </li>
                            <li className="item yanzhengma clearfix">
                                <label className="text fl">*验证码</label>
                                <div className="yanzhengma_r fl">
                                    <div className="i_box fl">
                                        <div className="i_boxtop">
                                            <input type="text" className="i_text"/>
                                        </div>
                                        <div className="i_boxtag">
                                            <span>请填写图片中的字符，不区分大小写</span>
                                        </div>
                                    </div>
                                    <div className="yanzheng_info fl">
                                        <a href="" className="yazheng_pic">
                                            <img src="../assets/img/yanzhengma.jpg" />
                                        </a>
                                        <a href="" className="yanzheng_text">
                                            看不清楚？换张图片
                                        </a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <div className="fuwu">
                            <input type="checkbox" className="i_agree fl"/>
                            <div className="fuwu_text">
                                <span>同意</span>
                                <a href="">“服务条款”</a>
                                <span>和</span>
                                <a href="">“隐私权相关政策”</a>
                            </div>
                        </div>
                        <div className="submit">
                            <input type="button" value="立即注册" className="zhuce"/>
                        </div>
                    </form>
                </div>
                <div className="main_right fl">
                    <a href="" className="ad">
                        <img src="../assets/img/ad.jpg" />
                    </a>
                </div>
            </div>
        </div>
        )
    }


}
