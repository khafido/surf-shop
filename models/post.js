const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: String,
  price: String,
  description: String,
  images: [String],
  lat: Number,
  lng: Number,
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  reviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Review'
    }
  ]
});

module.exports = mongoose.model('Post', PostSchema);
/*
Post:
- title: string
- price: string
- description: string
- image: array of string
- location: string
- lat: number
- lng: number
- author: object id
- reviews: array of object -> Reviews
*/
