import { signup } from '../../apis';
import Router from 'next/router';
import React, { Component, } from 'react';

class Signup extends Component {
    constructor() {
        super();
        this.state = {
            nickname: '',
            uid: '',
            pw: '',
            repw: '',
        };
    }

    handleChanger = e => {
        this.setState({ [e.target.name]: e.target.value, });
    }
    verifyPassword = e => {
        if (this.pw !== e.target.value) {

        }
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const res = await signup({
            nickname: this.state.nickname,
            uid: this.state.uid,
            password: this.state.pw,
        });

        if (res.success) {
            alert('회원가입 완료');
            Router.push('/board/list');
        }
    }

    render() {
        return (
            <div>
                <form name="signup" method="POST" data-netlify="true" onSubmit={this.handleSubmit}>
                    <div>
                        <input name="nickname" placeholder="닉네임" value={this.state.nickname} onChange={this.handleChanger} />
                    </div>
                    <div>
                        <label htmlFor="uid">ID</label>
                        <input name="uid" placeholder="ID를 입력해주세요" value={this.state.uid} onChange={this.handleChanger} />
                    </div>
                    <div>
                        <label htmlFor="pw">PW</label>
                        <input type="password" name="pw" placeholder="Password를 입력해주세요" value={this.state.pw} onChange={this.handleChanger} />
                    </div>
                    <div>
                        <label htmlFor="re_pw">RE:PW</label>
                        <input type="password" name="re_pw" placeholder="Password를 다시 입력해주세요" value={this.state.repw} onChange={this.verifyPassword} />
                    </div>
                    <div>
                        <input type="submit" />
                    </div>
                </form>
            </div>
        );
    }
}

export default Signup;