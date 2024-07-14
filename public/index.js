// -----------------------------------------------------------------------
function generateImage({ number, parentNode }) {
  const image = document.createElement("img");
  image.setAttribute("src", `./assets/images/${+queryDate}/${number}.png`);
  parentNode.appendChild(image);
}

const urlParams = new URLSearchParams(window.location.search);
const queryName = urlParams.get("name") ?? "";
const queryDate = urlParams.get("date");

const guestNamePosition = document.getElementsByClassName("guest_name")[0];
const weddingPosition1 = document.getElementsByClassName("wedding-1")[0];
const weddingPosition2 = document.getElementsByClassName("wedding-2")[0];
const weddingPosition3 = document.getElementsByClassName("wedding-3")[0];
const weddingPosition4 = document.getElementsByClassName("wedding-4")[0];
const mainIntroductionPosition =
  document.getElementsByClassName("main_introduction")[0];
const restaurantAddressPosition = document.getElementsByClassName("address")[0];
const copywriterPosition = document.getElementsByClassName("copywriter")[0];

let restaurantAddress = "";

const crystalPalace =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7840.193477116355!2d106.71902376832435!3d10.727021688752828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f8a0a50410d%3A0xfc860eadb255fd80!2zVHJ1bmcgdMOibSBuaMOgIGjDoG5nIHRp4buHYyBjxrDhu5tpIENyeXN0YWwgUGFsYWNl!5e0!3m2!1sen!2s!4v1718209416317!5m2!1sen!2s";
const phoDoiPalace =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.6250278412995!2d106.74569071464876!3d10.916075616651447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d9a5821d8013%3A0x1275a20bff991f23!2zUEjhu5AgxJDDlEkgUEFMQUNF!5e0!3m2!1sen!2s!4v1718210052201!5m2!1sen!2s";

switch (+queryDate) {
  case 15:
    restaurantAddress = phoDoiPalace;
    break;

  case 22:
    restaurantAddress = crystalPalace;
    break;

  default:
    break;
}

if (+queryDate === 15 || +queryDate === 22) {
  const iframe = document.createElement("iframe");
  iframe.setAttribute("width", "100%");
  iframe.setAttribute("height", "450");
  iframe.setAttribute("style", "border:0;");
  iframe.setAttribute("src", restaurantAddress);

  restaurantAddressPosition.appendChild(iframe);

  // -----------------------------------------------------------------------
  generateImage({ number: 1, parentNode: weddingPosition1 });
  generateImage({ number: 2, parentNode: weddingPosition2 });
  generateImage({ number: 3, parentNode: weddingPosition3 });

  // -----------------------------------------------------------------------
  const introductionImage = document.createElement("img");
  introductionImage.setAttribute("width", "100%");
  introductionImage.setAttribute("src", `./assets/videos/${+queryDate}/1.gif`);
  mainIntroductionPosition.appendChild(introductionImage);

  // -----------------------------------------------------------------------
  const guestName = queryName ? Base64.decode(queryName) : "";
  guestNamePosition.innerHTML = guestName;

  // -----------------------------------------------------------------------
  const thankyouImage = document.createElement("img");
  thankyouImage.setAttribute("src", `./assets/images/4.png`);
  weddingPosition4.appendChild(thankyouImage);

  // -----------------------------------------------------------------------
  const copywriterText = document.createElement("span");
  copywriterText.innerHTML = "Created by Hoa Bui & Tam Nguyen";
  copywriterPosition.appendChild(copywriterText);
  copywriterPosition.setAttribute(
    "style",
    "padding-top: 0.4rem; padding-bottom: 1rem;"
  );
} else {
  // -----------------------------------------------------------------------
  const copywriterText = document.createElement("span");
  copywriterText.innerHTML = "Link bị lỗi, đám cưới chúng em diễn ra vào ngày 15 và 22 tháng 9 năm 2024, Anh/Chị vui lòng liên hệ admin ạ!";
  copywriterPosition.appendChild(copywriterText);
  copywriterPosition.setAttribute(
    "style",
    "color: red; padding-top: 0.8rem; padding-bottom: 1rem;"
  );
}
