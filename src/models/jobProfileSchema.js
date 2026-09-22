const mongoose = require("mongoose");
const jobProfileSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    jobTitle: {
      type: String,
      required: true,
    },

    skills: [
      {
        type: String,
      },
    ],

    experience: {
      type: Number,
      default: 0,
    },

    education: {
      type: String,
    },

    location: {
      type: String,
    },

    salary: {
      type: Number,
    },

    jobType: {
      type: String,
      enum: ["full-time", "part-time", "remote", "internship"],
    },
  },
  {
    timestamps: true,
  },
);

const model =
  mongoose.models.JobProfile || mongoose.model("JobProfile", jobProfileSchema);

export default model;
