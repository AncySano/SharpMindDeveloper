// access the parent div
var parent = document.querySelector(".parent");
// get size and position of parent element
var parentRect = parent.getBoundingClientRect();
console.log("parent :", parentRect);
// access the draggable div (child)
var draggable = document.querySelector(".child");
// get size and position of child element
var draggableRect = draggable.getBoundingClientRect();
console.log("child :", draggableRect);
// initially no dragging
var dragging = false;
//mouse pressed over element
document.addEventListener("mousedown", function (e) {
  // prevent the default action
  e.preventDefault();
  //   dragging started
  dragging = true;
});
//mouse button released
document.addEventListener("mouseup", function (e) {
  e.preventDefault();
  // dragging stopped
  dragging = false;
});
//mouse pointer moves over
document.addEventListener("mousemove", function (e) {
  e.preventDefault();
  if (dragging) {
    console.log("e.clientX ::", e.clientX);
    console.log("e.clientY ::", e.clientY);
    console.log("parentRect L R ::", parentRect.left, parentRect.right);
    console.log("parentRect B T ::", parentRect.bottom, parentRect.top);

    if (
      e.clientX > parentRect.left &&
      e.clientX + draggableRect.width < parentRect.right &&
      e.clientY > parentRect.top &&
      e.clientY + draggableRect.height < parentRect.bottom
    ) {
      // mouse inside the parent boundaries
      draggable.style.left = `${e.clientX}px`;
      draggable.style.top = `${e.clientY}px`;
    } else {
      //mouse went out of horizontal boudaries
      if (e.clientX + draggableRect.width > parentRect.right) {
        draggable.style.left = `${parentRect.right - draggableRect.width}px`;
      }
      //mouse went out of vertical boundaries
      if (e.clientY + draggableRect.height > parentRect.bottom) {
        draggable.style.top = `${parentRect.bottom - draggableRect.height}px`;
      }
    }
  }
});
