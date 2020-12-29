import { postapi, getapi, putapi, removeapi, } from './common';

export const signin = async (body) => await postapi('/signin', body);
export const signup = async (body) => await postapi('/signup', body);

export const createBoard = async (body) => await postapi('/board', body);
export const getBoards = async () => await getapi('/board');
export const getBoardOne = async (id) => await getapi(`/board/${id}`);

export const createComment = async (body) => await postapi('/comment', body);
export const getComments = async (boardid) => await getapi(`/comment?board=${boardid}`);