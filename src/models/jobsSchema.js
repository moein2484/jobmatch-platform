import mongoose from "mongoose";

const jobSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    skills: [
      {
        type: String,
      },
    ],

    experience: {
      type: String,
      required: true,
    },

    education: {
      type: String,
    },

    location: {
      type: String,
      required: true,
    },

    salary: {
      type: Number,
    },

    jobType: {
      type: String,
      enum: [
        "full-time",
        "part-time",
        "remote",
        "internship",
        "contract",
      ],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Job =
  mongoose.models.Job ||
  mongoose.model("Job", jobSchema);

export default Job;