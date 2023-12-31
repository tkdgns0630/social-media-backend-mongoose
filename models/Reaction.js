const { Schema, Types } = require("mongoose");
const moment = require("moment");

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: moment,
      get: getTime,
    },
  },
  { toJSON: { getters: true } }
);

function getTime() {
  return moment().format("DD-MM-YYYY");
}

module.exports = reactionSchema;
