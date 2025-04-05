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
function scrollToSlide(index) {
  const wrapper = document.getElementById("carouselWrapper");
  const width = window.innerWidth;
  wrapper.scrollTo({
    left: width * index,
    behavior: "smooth",
  });
}

// product cards
const cards = [
  {
    image: "./img/useprinter1.png",
    title: "All In One Printers",
    description:
      "Handle printing, scanning, copying—and even faxing—with a single multifunction device. Perfect for both home and office use.",
    link: "Printers.html",
  },
  {
    image: "./img/useprinter2.png",
    title: "Wireless Printers",
    description:
      "Enjoy cable-free printing with built-in Wi-Fi, Bluetooth, or NFC. Ideal for shared spaces and modern, flexible workstations.",
    link: "Printers.html",
  },
  {
    image: "./img/useprinter3.png",
    title: "Home & Office Printers",
    description:
      "Designed to meet the needs of home offices and small teams, these printers offer dependable performance for routine tasks and moderate print volumes.",
    link: "Printers.html",
  },
];

// Select the container
const container = document.getElementById("card-container");

// Generate cards dynamically with looping animation
cards.forEach((card) => {
  const cardDiv = document.createElement("div");
  cardDiv.innerHTML = `
    <div class="group relative rounded-2xl overflow-hidden shadow-2xl hover:shadow-orange-500/30 transition-all duration-500 transform hover:scale-105 hover:rotate-[0.5deg] cursor-pointer bg-gradient-to-br from-[#1e293b] to-[#0f172a]">
      
      <img src="${card.image}" alt="${card.title}" class="w-full h-96 object-cover opacity-100 group-hover:opacity-100 transition duration-500">
      
      <div class="absolute inset-0 bg-black/40 backdrop-blur-sm group-hover:backdrop-blur-sm flex flex-col justify-end p-6 text-white transition-all duration-500">
        <div class="space-y-2">
          <h2 class="text-2xl font-extrabold tracking-tight">${card.title}</h2>
          <p class="text-sm leading-relaxed opacity-80">${card.description}</p>
          <a href="${card.link}" class="inline-block mt-4 px-4 py-2 rounded-full bg-orange-500 hover:bg-orange-600 transition text-sm font-semibold shadow-lg shadow-orange-500/20">
            SHOP NOW
          </a>
        </div>
      </div>
    </div>
  `;

  container.appendChild(cardDiv);
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
