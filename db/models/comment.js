'use strict';

import { Schema, model, } from 'mongoose';

const CommentSchema = new Schema({
    board: { type: Schema.Types.ObjectId, ref: 'Board' },
    text: { type: String, },
}, { timestamps: true, });

export default model('Comment', CommentSchema);