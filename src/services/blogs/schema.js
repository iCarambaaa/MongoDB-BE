import mongoose from 'mongoose';

const {Schema, model} = mongoose

const blogsSchema = new Schema({
        category: { type: String, required: true},
        title: { type: String, required: true},
        cover: { type: String, required: true},
        readTime: {                                  // this way order is messed up in res
              value: {
                type: Number,
                required: true,
              },
              unit: {
                type: String,
                required: true,
            },
          },
          author: {                                  // this way the order is kept in order
            type: Object,
            required: true,
            nested: {
              name: {
                type: String,
                required: true,
              },
              avatar: {
                type: String,
                required: true,
              },
            },
          },
        content: {type: String, required: true}
}, {
    timestamps: true // adds createdAt & updatedAt 
})

export default model("Blog", blogsSchema) // link to "blogs" collection, if not there it will be created