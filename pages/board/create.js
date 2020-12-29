import { createBoard } from '../../apis';
import Router from 'next/router';
import React, { Component, } from 'react';

class BoardCreate extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            contents: '',
        };
    }

    handleChanger = e => {
        this.setState({ [e.target.name]: e.target.value, });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const res = await createBoard({
            title: this.state.title,
            contents: this.state.contents,
        });

        if (res.data) {
            alert('작성 완료되었습니다.');
            Router.push(`/board/${board._id}`);
        }
    }

    render() {
        return (
            <div>
                <form name="board" onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="title">Title</label>
                        <input name="title" placeholder="제목을 입력하세요" value={this.state.title} onChange={this.handleChanger} />
                    </div>
                    <div>
                        <label htmlFor="contents">Contents</label>
                        <input name="contents" placeholder="내용을 입력하세요" value={this.state.contents} onChange={this.handleChanger} />
                    </div>
                    <div>
                        <input type="submit" />
                    </div>
                </form>
            </div>
        );
    }
}

export default BoardCreate;