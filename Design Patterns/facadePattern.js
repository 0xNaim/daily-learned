const getFetch = async (url, params = {}) => {
  const queryString = Object.entries(params)
    .map((param) => `${param[0]}=${param[1]}`)
    .join('&');
  const res = await fetch(`${url}?${queryString}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
  return await res.json();
};

const getUsers = async () => {
  const res = await getFetch('https://jsonplaceholder.typicode.com/users');
  return await res;
};

const getUserPosts = async (userId) => {
  const res = await getFetch(`https://jsonplaceholder.typicode.com/posts`, {
    userId,
  });
  return await res;
};

getUsers().then((users) => {
  users.forEach((user) => {
    getUserPosts(user.id).then((posts) => {
      console.log(user.name);
      console.log(posts.length);
    });
  });
});
