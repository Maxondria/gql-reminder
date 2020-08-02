// type Post {
//     id: ID!
//     title: String!
//     body: String!
//     published: Boolean!
//     author: User! ************
//   }

/**
 * GraphQL will see the author field and it won't know how to resolve the author field
 *
 * As a result, it will go to the schema, see the "Post" type, and try to find the "Post" resolver.
 * It will then pass it the current post as the parent, to help in resolving the author field,
 * in this case, the post found.
 *
 * In other words, this just helps to resolve relationship part of the type
 */

//Extends Query, posts resolver, and resolves the author field

export default {
  author(post, _args, { db }, _info) {
    return db.users.find((user) => user.id == post.author);
  },
};
