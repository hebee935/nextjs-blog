import { signin } from '../../apis';
import Router from 'next/router';
import React, { Component, } from 'react';
import { Button } from '@material-ui/core';

class Signin extends Component {
    constructor() {
        super();
        this.state = {
            uid: '',
            pw: '',
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
        if (this.state.uid === '' || !this.state.uid) {
            return alert('아이디를 입력해주세요.');
        }
        if (this.state.pw === '' || !this.state.pw) {
            return alert('비밀번호를 입력해주세요.');
        }
        const res = await signin({
            uid: this.state.uid,
            password: this.state.pw,
        });
        if (res.success) {
            alert('로그인 success');
            Router.push('/');
        } else {
            switch (res.code) {
                case 1001: alert('존재하지 않는 계정입니다.'); break;
            }
        }
    }

    render() {
        return (
            <div>
                <form name="signin" method="POST" data-netlify="true" onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="uid">ID</label>
                        <input name="uid" placeholder="ID를 입력해주세요" value={this.state.uid} onChange={this.handleChanger} />
                    </div>
                    <div>
                        <label htmlFor="pw">PW</label>
                        <input type="password" name="pw" placeholder="Password를 입력해주세요" value={this.state.pw} onChange={this.handleChanger} />
                    </div>
                    <div>
                        <input type="submit" />
                    </div>
                </form>
                <div>
                    <Button onClick={() => Router.push('/signup')}>회원가입</Button>
                </div>
            </div>
        );
    }
}

export default Signin;