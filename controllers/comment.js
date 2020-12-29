'use strict';

import config from '../config';
import ServiceError from '../lib/ServiceError';
import packet from '../lib/packet';

import Comment from '../db/models/comment';

export const getComments = async (findOpt = {}, sortOpt = {}, selectOpt = {}) => {
    const comments = await Comment.find(findOpt, selectOpt).sort(sortOpt);
    return comments;
};

export const createComment = async (input) => {
    const comment = await Comment.create(input);
    return comment;
};

export const getCommentById = async (commentid) => {
    if (!commentid) {
        throw new ServiceError(packet.errcode.param.wrong);
    }
    const comment = await Comment.findById(commentid);
    return comment;
};

export const getCommentOne = async (opt) => {
    const comment = await Comment.findOne(opt);
    return comment;
};

export const updateComment = async (commentid, input) => {
    if (!commentid) {
        throw new ServiceError(packet.errcode.param.wrong);
    }
    const comment = await Comment.findByIdAndUpdate(commentid, { $set: input }, { new: true });
    return comment;
};

export const removeComment = async (commentid) => {
    if (!commentid) {
        throw new ServiceError(packet.errcode.param.wrong);
    }
    const comment = await Comment.findById(commentid);
    await comment.remove();
    return comment;
};