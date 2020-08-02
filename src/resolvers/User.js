export default {
  //Field resolver for the type User, receives parent as user to resolve posts field
  posts(user, _args, { db }, _info) {
    return db.posts.filter((post) => post.author == user.id);
  },
};
