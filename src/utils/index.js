import $ from "jquery";

export const handleScrollElementById = (id) => {
  let el = document.getElementById(id);
  if (el) {
    let offset = el.offsetTop();
    $("html, body").animate({ scrollTop: offset });
  }
};
