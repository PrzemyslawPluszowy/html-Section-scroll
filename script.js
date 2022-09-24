document.addEventListener("DOMContentLoaded", function () {
  const sections = [...document.querySelectorAll("Section")];

  const menuItems = [...document.querySelectorAll(".aside_nav li")];
  const ulMenu = document.querySelector(".aside_nav");
  let index = 0;
  let fingerDropY = null;
  let directionSwipe;
  let isThrottled = false;
  menuListener(0);

  function menuListener() {
    for (const el of menuItems) {
      el.addEventListener("click", (el) => {
        liIndex = parseFloat(el.target.getAttribute("data-menu"));

        changeSection(liIndex, el);
      });
    }
  }

  document.addEventListener("mousewheel", (e) => {
    if (e.deltaY < 0) {
      if (index <= 0) {
        index = 0;
      } else index -= 1;
    } else if (e.deltaY > 0) {
      if (index < sections.length - 1) {
        index += 1;
      }
    }
    setTimeout(changeSection(index), 500);
  });

  function changeSection(index) {
    drawActiveMenuItem(index);
    sections[index].scrollIntoView({ behavior: "smooth" });
  }

  function drawActiveMenuItem(index) {
    for (const i of menuItems) {
      i.classList.remove("active");
    }
    menuItems[index].classList.add("active");
  }

  addEventListener("touchstart", (e) => {
    fingerDropY = e.touches[0].clientY;
  });

  document.addEventListener("touchmove", (e) => {
    if (!fingerDropY) return;
    fingerSwipeY = e.touches[0].clientY;
    directionSwipe = fingerDropY - fingerSwipeY;

    directionSwipe = directionSwipe < 0 ? 1 : -1;
    fingerDropY = null;
    directionTouch(directionSwipe);
  });

  function directionTouch(direction) {
    console.log(index);
    if (direction > 0) {
      if (index <= 0) {
        index = 0;
      } else index -= 1;
    } else if (direction < 0) {
      if (index < sections.length - 1) {
        index += 1;
      }
    }
    changeSection(index);
  }
});
