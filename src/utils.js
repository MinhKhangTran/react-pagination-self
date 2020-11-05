export const paginate = (followers) => {
  const itemsPerPage = 9;
  const seiten = Math.ceil(followers.length / itemsPerPage);
  //console.log(seiten);

  const newFollowers = Array.from({ length: seiten }, (item, index) => {
    const start = index * itemsPerPage;
    return followers.slice(start, start + itemsPerPage);
  });
  return newFollowers;
};
