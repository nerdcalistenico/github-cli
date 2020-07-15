const async = require('async');

module.exports = (octokit, username) => {
  const getListFollowing = (options, cb) => octokit.users.listFollowingForUser(options, cb);
  const handleUnfollow = (options, cb) => octokit.users.unfollow(options, cb);

  const done = (error, users) => {
    if (error) {
      console.log(`An error occured: ${error}`);
      return;
    }
    unfollow(users);
  }

  const unfollow = users => {
    async.each(
      users,
      user => handleUnfollow({ user: user.login }, (error, response) => console.log(error, response)),
      done // (error)
    );
  }

  const fetch = (page, result) => {
    const PER_PAGE = 100;
    const getListRequest = (error, users) => {
      if (error) {
        done(error);
        return;
      }
      
      result = result.concat(users);

      if (users.length === PER_PAGE) {
        fetch(page + 1, result);
        return;
      }
      
      done(null, result);
    }

    getListFollowing({ username, page, per_page: PER_PAGE }, getListRequest);
  }

  fetch(1, [])
}
