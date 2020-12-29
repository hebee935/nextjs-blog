'use strict';

import config from '../config';
import ServiceError from '../lib/ServiceError';
import packet from '../lib/packet';

import Board from '../db/models/board';

export const getBoards = async (findOpt = {}, sortOpt = {}, selectOpt = {}) => {
    const boards = await Board.find(findOpt, selectOpt).sort(sortOpt);
    return boards;
};

export const createBoard = async (input) => {
    const board = await Board.create(input);
    return board;
};

export const getBoardById = async (boardid) => {
    if (!boardid) {
        throw new ServiceError(packet.errcode.param.wrong);
    }
    const board = await Board.findById(boardid);
    return board;
};

export const getBoardOne = async (opt) => {
    const board = await Board.findOne(opt);
    return board;
};

export const updateBoard = async (boardid, input) => {
    if (!boardid) {
        throw new ServiceError(packet.errcode.param.wrong);
    }
    const board = await Board.findByIdAndUpdate(boardid, { $set: input }, { new: true });
    return board;
};

export const removeBoard = async (boardid) => {
    if (!boardid) {
        throw new ServiceError(packet.errcode.param.wrong);
    }
    const board = await Board.findById(boardid);
    await board.remove();
    return board;
};