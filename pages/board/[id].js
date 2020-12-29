import { getBoardOne } from '../../apis';
import Router from 'next/router';
import { Button, } from '@material-ui/core';
import CommentBox from '../../components/Comment';

const Board = ({ pageProps }) => {
    const board = pageProps.board;
    return (
        <>
        <div>
            <h1>{board.title}</h1>
            <h3>{board.contents}</h3>
            <Button onClick={() => Router.push('/board/list')}>List</Button>
        </div>
        <div>
            <CommentBox board={board._id}/>
        </div>
        </>
    );
}

Board.getInitialProps = async ({ query }) => {
    const res = await getBoardOne(query.id);
    return {
        board: res.data
    };
}

export default Board;