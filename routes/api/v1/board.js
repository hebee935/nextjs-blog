'use strict';

import { Router } from 'express';

import * as BoardController from '../../../controllers/board';
import { generate } from '../../../lib/packet';

const router = Router();

router.route('/')
    .get(getBoardList)
    .post(createBoard);
router.route('/:boardid')
    .get(getBoard)
    .put(updateBoard)
    .delete(removeBoard);

async function createBoard(req, res, next) {
    try {
        const body = req.body;
        const board = await BoardController.createBoard(body);
        res.json(generate(board));
    } catch(err) {
        next(err);
    }
}

async function getBoardList(_req, res, next) {
    try {
        const boards = await BoardController.getBoards();
        res.json(generate(boards));
    } catch(err) {
        next(err);
    }
}

async function getBoard(req, res, next) {
    try {
        const boardid = req.params.boardid;
        const board = await BoardController.getBoardById(boardid);
        res.json(generate(board));
    } catch(err) {
        next(err);
    }
}

async function updateBoard(req, res, next) {
    try {
        const boardid = req.params.boardid;
        const input = req.body;
        const board = await BoardController.updateBoard(boardid, input);
        res.json(generate(board));
    } catch(err) {
        next(err);
    }
}

async function removeBoard(req, res, next) {
    try {
        const boardid = req.params.boardid;
        const board = await BoardController.removeBoard(boardid);
        res.json(generate(board));
    } catch(err) {
        next(err);
    }
}

export default router;