const urlParams = new URLSearchParams(window.location.search);
const queryName = urlParams.get('name') ?? "";
const queryDate = urlParams.get('date') ?? 15;

const guestNamePosition = document.getElementsByClassName('guest_name')[0];
const restaurantAddressPosition = document.getElementsByClassName('address')[0];
const weddingDatePosition = document.getElementsByClassName('wedding_date')[0];
const guestName = queryName ? window.atob(queryName) : "..."

guestNamePosition.innerHTML = guestName;

let restaurantAddress = "";

const crystalPalace = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7840.193477116355!2d106.71902376832435!3d10.727021688752828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f8a0a50410d%3A0xfc860eadb255fd80!2zVHJ1bmcgdMOibSBuaMOgIGjDoG5nIHRp4buHYyBjxrDhu5tpIENyeXN0YWwgUGFsYWNl!5e0!3m2!1sen!2s!4v1718209416317!5m2!1sen!2s";
const phoDoiPalace = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.6250278412995!2d106.74569071464876!3d10.916075616651447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d9a5821d8013%3A0x1275a20bff991f23!2zUEjhu5AgxJDDlEkgUEFMQUNF!5e0!3m2!1sen!2s!4v1718210052201!5m2!1sen!2s";

if (+queryDate === 15) {
  restaurantAddress = phoDoiPalace;
} else {
  restaurantAddress = crystalPalace;
}

const iframe = document.createElement("iframe");
iframe.setAttribute("width", "100%");
iframe.setAttribute("height", "450");
iframe.setAttribute("style", "border:0;");
iframe.setAttribute("src", restaurantAddress);

restaurantAddressPosition.appendChild(iframe);
weddingDatePosition.textContent = queryDate;