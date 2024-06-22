const buttonCreate = document.getElementsByClassName("guest_create_button")[0];
const guestNamePosition = document.getElementsByClassName("guest_input")[0];
const weddingDate = document.getElementsByClassName("wedding_date")[0];
const guestLink = document.getElementsByClassName("link")[0];
const guestLinkCopy = document.getElementsByClassName("copy")[0];

buttonCreate.addEventListener("click", function () {
  const guestName = window.btoa(guestNamePosition.value);
  const newGuestLink = `http://${window.location.host}?name=${guestName}&date=${weddingDate.value}`;
  
  if (guestLink.textContent.length) {
    const detailGuestLink = document.getElementsByClassName("detail_guest_link")[0];
    guestLink.removeChild(detailGuestLink);
  }
  const a = document.createElement("a");
  a.setAttribute("class", "detail_guest_link");
  a.setAttribute("target", "_blank");
  a.setAttribute("href", newGuestLink);
  a.innerHTML = newGuestLink;

  guestLink.appendChild(a);

  guestLinkCopy.addEventListener("click", function () {
    navigator.clipboard.writeText(newGuestLink);
  });
});
