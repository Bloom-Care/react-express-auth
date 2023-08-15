const deletePost = async (req, res) => {
    const {
      session, // this req.session property is put here by the handleCookieSessions middleware
      db: { Post }, // this req.db.User property is put here by the addModelsToRequest middleware
      body: { Description, img_url, Owner_id, Address, Category }, // this req.body property is put here by the client
    } = req;
  
    // TODO: check if username is taken, what should you return?
    const post = await Post.delete(Description, img_url, Owner_id, Address, Category);
    // session.userId = post.id;
  
    res.send(post);
  };
  
  module.exports = deletePost;