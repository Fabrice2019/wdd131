document.addEventListener("DOMContentLoaded", function () {
  const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
    },
    {
      templeName: "Asunción Paraguay",
      location: "Asunción, Alto Paraguay, Paraguay",
      dedicated: "2002, May, 19",
      area: 11906,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/asuncion-paraguay/400x250/4-e49cfde212b104b97a0463371127c11e47f9c084.jpeg",
    },
    {
      templeName: "Calgary Alberta",
      location: "Calgary, Alberta, Canada",
      dedicated: "2012, October, 28",
      area: 33000,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/calgary-alberta/400x250/calgary-albert-temple-lds-1059122-wallpaper.jpg",
    },
    {
      templeName: "Belém Brazil",
      location: "Belém, Para, Brazil",
      dedicated: "2022, November, 20",
      area: 28675,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/belem-brazil/400x250/belem_brazil_temple_exterior.jpg",
    },
  ];

  function displayTemples(filteredTemples) {
    const templeContainer = document.getElementById("temple-container");
    templeContainer.innerHTML = "";

    filteredTemples.forEach((temple) => {
      const templeCard = document.createElement("div");
      templeCard.classList.add("temple-card");

      templeCard.innerHTML = `
          <img src="${temple.imageUrl}" alt="${
        temple.templeName
      }" loading="lazy">
          <h3>${temple.templeName}</h3>
          <div class="temple-info">
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
            <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
          </div>
        `;

      templeContainer.appendChild(templeCard);
    });
  }

  function filterTemples(criteria) {
    let filteredTemples = temples;

    if (criteria === "old") {
      filteredTemples = temples.filter(
        (temple) => new Date(temple.dedicated).getFullYear() < 1900
      );
    } else if (criteria === "new") {
      filteredTemples = temples.filter(
        (temple) => new Date(temple.dedicated).getFullYear() > 2000
      );
    } else if (criteria === "large") {
      filteredTemples = temples.filter((temple) => temple.area > 90000);
    } else if (criteria === "small") {
      filteredTemples = temples.filter((temple) => temple.area < 10000);
    }

    displayTemples(filteredTemples);
  }

  window.filterTemples = filterTemples;
  window.showSidebar = function () {
    document.querySelector(".off-screen-menu").style.display = "block";
    document.querySelector(".sidebar").style.display = "flex";
  };

  window.hideSidebar = function () {
    document.querySelector(".off-screen-menu").style.display = "none";
    document.querySelector(".sidebar").style.display = "none";
  };

  document
    .querySelector(".off-screen-menu")
    .addEventListener("click", hideSidebar);

  filterTemples("home");
});
