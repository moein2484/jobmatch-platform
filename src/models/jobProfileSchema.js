const mongoose = require("mongoose");
import { schema as schemaUser } from "@/models/Users";
const jobProfileSchema = mongoose.Schema(
  {
    user: {
      type: schemaUser,
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

    expectedSalary: {
      type: Number,
    },

    employmentType: {
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
