// getElementsByClassName: Returns a HTMLCollection of the elements in the object on which the method was invoked (a document or an element) that have all the classes given by classNames.
const accordion = document.getElementsByClassName("container");

// attach a click listener to each element within the container class
for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    /**toggle active class
     * (if element has active class onclick: remove active class)
     * (else element doesnt have active class onclick: add active class)
     */
    this.classList.toggle("active");
  });
}
