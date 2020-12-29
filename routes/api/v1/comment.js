'use strict';

import { Router } from 'express';

import * as CommentController from '../../../controllers/comment';
import { generate } from '../../../lib/packet';

const router = Router();

router.route('/')
    .get(getCommentList)
    .post(createComment);
router.route('/:commentid')
    .get(getComment)
    .put(updateComment)
    .delete(removeComment);

async function createComment(req, res, next) {
    try {
        const body = req.body;
        const comment = await CommentController.createComment(body);
        res.json(generate(comment));
    } catch(err) {
        next(err);
    }
}

async function getCommentList(req, res, next) {
    try {
        const { board } = req.query;
        const comments = await CommentController.getComments({ board });
        res.json(generate(comments));
    } catch(err) {
        next(err);
    }
}

async function getComment(req, res, next) {
    try {
        const commentid = req.params.commentid;
        const comment = await CommentController.getCommentById(commentid);
        res.json(generate(comment));
    } catch(err) {
        next(err);
    }
}

async function updateComment(req, res, next) {
    try {
        const commentid = req.params.commentid;
        const input = req.body;
        const comment = await CommentController.updateComment(commentid, input);
        res.json(generate(comment));
    } catch(err) {
        next(err);
    }
}

async function removeComment(req, res, next) {
    try {
        const commentid = req.params.commentid;
        const comment = await CommentController.removeComment(commentid);
        res.json(generate(comment));
    } catch(err) {
        next(err);
    }
}

export default router;