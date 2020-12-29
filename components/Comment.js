import Router from 'next/router';
import React, { Component, } from 'react';
import { createComment, getComments, } from '../apis';
import { List, ListItemText, ListItem, Button, } from '@material-ui/core';

class CommentBox extends Component {
    render() {
        return (
            <div>
                board {this.props.board}
                <CommentForm board={this.props.board}/>
                <CommentList board={this.props.board}/>
            </div>
        );
    }
}

class CommentList extends Component {
    constructor() {
        super();
        this.state = {
            comments: [],
        };
    }

    getInitialProps = async (ctx) => {
        const res = await getComments(this.props.board);
        console.log(res);
        return { comments: res.data };
    }

    render() {
        const { comments } = this.props;
        return (
            <div>
                <h3>Comments</h3>
                {/*<List>
                    {comments.map(comment =>
                        <a>
                            <ListItem>
                                <ListItemText primary={comment.text} />
                            </ListItem>
                        </a>
                    )}
                </List>*/}
            </div>
        )
    }
}

class CommentForm extends Component {
    constructor() {
        super();
        this.state = {
            text: '',
        };
    }

    handleChanger = e => {
        this.setState({ [e.target.name]: e.target.value, });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const res = await createComment({
            text: this.state.text,
            board: this.props.board,
        });

        if (res.data) {
            alert('success');
        }
    }

    render() {
        return (
            <div>
                <form name="comment" onSubmit={this.handleSubmit}>
                    <div>
                        <input name="text" placeholder="댓글을 입력하세요" value={this.state.text} onChange={this.handleChanger} />
                    </div>
                    <div>
                        <input type="submit" />
                    </div>
                </form>
            </div>
        );
    }
}

export default CommentBox;