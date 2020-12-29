import { getBoards } from '../../apis';
import { List, ListItemText, ListItem, Button, } from '@material-ui/core';
import Link from 'next/link';
import Router from 'next/router';

const BoardList = ({ pageProps }) => {
    return (
        <div>
            <h1>Board List</h1>
            <Button onClick={() => Router.push('/board/create')}>작성</Button>
            <List>
                {pageProps.boards.map(board =>
                    <Link href={"/board/" + board._id.toString()}>
                        <a>
                            <ListItem button>
                                <ListItemText primary={board.title} />
                            </ListItem>
                        </a>
                    </Link>
                )}
            </List>
        </div>
    );
}

BoardList.getInitialProps = async () => {
    const res = await getBoards();
    return {
        boards: res.data,
    };
}

export default BoardList;