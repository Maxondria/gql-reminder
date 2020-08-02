export default {
  me() {
    return {
      id: 1,
      name: "Max",
      email: "max@user.com",
      age: 22,
    };
  },

  users(_parent, { query }, { db }, _info) {
    if (query) {
      return db.users.filter((user) =>
        user.name.toLowerCase().includes(query.toLowerCase())
      );
    }
    return db.users;
  },

  posts(_parent, { query }, { db }, _info) {
    if (query) {
      //Whichever post is found here, it will passed as a parent to the "Post" type resolver
      //... Then,it will find author for that post
      return db.posts.filter((post) =>
        post.title.toLowerCase().includes(query.toLowerCase())
      );
    } else return db.posts;
  },
};
