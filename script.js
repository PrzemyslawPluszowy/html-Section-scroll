document.addEventListener("DOMContentLoaded", function () {
  const sections = [...document.querySelectorAll("Section")];
  const section = document.querySelector("Section");

  const menuItems = [...document.querySelectorAll(".aside_nav li")];
  const ulMenu = document.querySelector(".aside_nav");
  const li1 = document.getElementById("1");
  // changeSection(0);
  let index = 0;
  console.log(section);

  const rec = section.getBoundingClientRect();
  console.log(rec);

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
    console.log(index);
    changeSection(index);
  });

  menuItems.forEach((el, index) => {
    el.addEventListener("click", (el) => {
      liIndex = parseFloat(el.target.getAttribute("data-menu"));

      console.log(rec);
      changeSection(liIndex);
    });
  });

  function changeSection(index) {
    sections[index].scrollIntoView({ behavior: "smooth" });
  }
});
