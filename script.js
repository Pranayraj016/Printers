// navbar
const toggle = document.getElementById("menuToggle");
const menu = document.getElementById("mobileMenu");
const hamburgerIcon = document.getElementById("hamburgerIcon");
const closeIcon = document.getElementById("closeIcon");
const links = document.querySelectorAll(".menu-link");

toggle.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  hamburgerIcon.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.add("hidden");
    hamburgerIcon.classList.remove("hidden");
    closeIcon.classList.add("hidden");
  });
});

// banner

const carousel = document.getElementById("carousel");
const wrapper = document.getElementById("carouselWrapper");

let currentIndex = 0;
const totalSlides = carousel.children.length;

setInterval(() => {
  currentIndex = (currentIndex + 1) % totalSlides;
  const scrollPosition = currentIndex * wrapper.clientWidth;
  wrapper.scrollTo({ left: scrollPosition, behavior: "smooth" });
}, 5000);

// product cards
const cards = [
  {
    image: "./img/useprinter1.png",
    title: "All In One Printers",
    description:
      "Print, scan, copy, and sometimes fax in one multifunctional device. Ideal for homes and offices.",
    link: "Printers.html",
  },
  {
    image: "./img/useprinter2.png",
    title: "Wireless Printers",
    description:
      "Print without cables using Wi-Fi, Bluetooth, or NFC. Great for flexible setups and multiple users.",
    link: "Printers.html",
  },
  {
    image: "./img/useprinter3.png",
    title: "Home & Office Printers",
    description:
      "Designed for homes and offices, offering basic printing and moderate workloads. Reliable and versatile.",
    link: "Printers.html",
  },
];

// Select the container
const container = document.getElementById("card-container");

// Generate cards dynamically
cards.forEach((card) => {
  const cardHTML = `
        <div class="relative rounded-lg overflow-hidden shadow-lg">
            <img src="${card.image}" alt="${card.title}" class="w-full h-96 object-cover">
            <div class="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center p-6">
                <h2 class="text-white text-2xl font-bold mb-2">${card.title}</h2>
                <p class="text-white mb-4">${card.description}</p>
                <a href="${card.link}" class="bg-orange-500 text-white py-2 px-4 rounded">SHOP NOW</a>
            </div>
        </div>
    `;
  container.innerHTML += cardHTML;
});

// slider
var swiper = new Swiper(".brand-slider", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: { slidesPerView: 2 },
    768: { slidesPerView: 3 },
    1024: { slidesPerView: 4 },
  },
});
