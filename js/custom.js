document.addEventListener("DOMContentLoaded", function () {
  $("#img-modal").on("show.bs.modal", function (event) {
    var button = $(event.relatedTarget); // Button that triggered the modal
    var imgSrc = button.data("bs-img"); // Extract info from data-* attributes
    var modalImg = $(this).find("#modal-image");
    modalImg.attr("src", imgSrc);
  });

  const form = document.querySelector("form");
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const select = document.getElementById("select");
  const submitBtn = document.getElementById("submit-btn");
  const modal = new bootstrap.Modal(document.getElementById("form-modal"));

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (
      name.value.trim() === "" ||
      email.value.trim() === "" ||
      select.value.trim() === ""
    ) {
      alert("All fields must be filled out");
    } else {
      modal.show();
    }
  });

  document.getElementById("modal-close-btn").addEventListener("click", () => {
    location.reload();
  });
  $(".multiple-items").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    prevArrow: $(".prev"),
    nextArrow: $(".next"),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  });
  // Check cookie status
  window.onload = function () {
    if (getCookie("cookie_consent") !== "accepted") {
      document.getElementById("cookie-banner").style.display = "block";
    } else {
      document.getElementById("cookie-banner").style.display = "none";
    }
  };

  // Handle cookie consent
  document.getElementById("cookie-accept").onclick = function () {
    setCookie("cookie_consent", "accepted", 3650); // Set cookie expiration to 10 years (3650 days)
    setCookie("my_cookie", "dummy_value", 3650); // Set dummy cookie expiration to 10 years (3650 days)
    document.getElementById("cookie-banner").style.display = "none";
  };

  document.getElementById("cookie-decline").onclick = function () {
    setCookie("cookie_consent", "declined", 3650); // Set cookie expiration to 10 years (3650 days)
    document.getElementById("cookie-banner").style.display = "none";
  };

  // Helper function to get cookie value by name
  function getCookie(name) {
    var cookie_match = document.cookie.match(
      "(^|;)\\s*" + name + "\\s*=\\s*([^;]+)"
    );
    return cookie_match ? cookie_match.pop() : "";
  }

  // Helper function to set cookie with given name, value, and expiration in days
  function setCookie(name, value, expiration_days) {
    var expiration_date = new Date();
    expiration_date.setDate(expiration_date.getDate() + expiration_days);
    var cookie_value =
      encodeURIComponent(name) + "=" + encodeURIComponent(value) + "; ";
    cookie_value += "expires=" + expiration_date.toUTCString() + "; ";
    cookie_value += "path=/";
    document.cookie = cookie_value;
  }
});
