export default {
  //add img database in store and in localstorage
  addImgs(state, imgs) {
    state.imgs = imgs;
    localStorage.setItem("imgs", JSON.stringify(imgs));
  },
};
