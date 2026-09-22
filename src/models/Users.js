  const mongoose = require("mongoose");

  const schema = mongoose.Schema(
    {
      first_name: {
        type: String,
        required: true,
      },

      last_name: {
        type: String,
        required: true,
      },

      email: {
        type: String,
        required: true,
        unique: true,
      },

      password: {
        type: String,
        required: true,
      },
    },
    {
      timestamps: true,
    },
  );

  const model = mongoose.models.User || mongoose.model("User", schema);

  export default model;
