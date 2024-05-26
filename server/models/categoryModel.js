import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  slug: {
    type: String,
    lowercase: true,
  },
});

// Pre-save hook to generate and lowercase the slug before saving
// categorySchema.pre("save", function (next) {
//   if (!this.isModified("name")) {
//     return next();
//   }
//   this.slug = slugify(this.name, { lower: true });
//   next();
// });

export default mongoose.model("Category", categorySchema);