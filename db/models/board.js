'use strict';

import { Schema, model, } from 'mongoose';

const BoardSchema = new Schema({
    title: { type: String, },
    contents: { type: String, },
}, { timestamps: true, });

export default model('Board', BoardSchema);