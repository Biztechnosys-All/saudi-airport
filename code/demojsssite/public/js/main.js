(function ($) {
  "use strict";

  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 1);
  };
  spinner();

  // Initiate the wowjs
  new WOW().init();

  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 40) {
      $(".sticky-top").addClass("shadow-sm").css("top", "0px");
    } else {
      $(".sticky-top").removeClass("shadow-sm").css("top", "0px");
    }
  });

  // Facts counter
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 2000,
  });

  // Experience
  $(".experience").waypoint(
    function () {
      $(".progress .progress-bar").each(function () {
        $(this).css("width", $(this).attr("aria-valuenow") + "%");
      });
    },
    { offset: "80%" }
  );

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500);
    return false;
  });

  // Swiper Slider for Our Services
  var swiper = new Swiper(".our-services-slider", {
    slidesPerView: 3,
    loop: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
    // on: {
    //   init: function () {
    //     setTimeout(updateRoundedCorners, 50);
    //   },
    //   slideChangeTransitionEnd: function () {
    //     setTimeout(updateRoundedCorners, 50);
    //   },
    // },
  });

  // Function to update card border radius
  function updateRoundedCorners() {
    const swiperInstance = document.querySelector(
      ".our-services-slider"
    ).swiper;

    // Reset all border-radius and widths
    $(".our-services-card").css({
      "border-radius": "0",
      transform: "scale(1)",
      "z-index": "1",
    });

    const activeIndex = swiperInstance.activeIndex;
    const slidesPerView = swiperInstance.params.slidesPerView;

    for (let i = 0; i < swiperInstance.slides.length; i++) {
      const $slide = $(swiperInstance.slides[i]);
      const $card = $slide.find(".our-services-card");

      if (i === activeIndex) {
        // First visible card (left)
        $card.css("border-radius", "20px 0 0 20px");
      } else if (i === activeIndex + slidesPerView - 1) {
        // Last visible card (right)
        $card.css("border-radius", "0 20px 20px 0");
      } else if (i === activeIndex + 1 && slidesPerView === 3) {
        // Middle card - scale it up slightly
        $card.css({
          transform: "scale(1.08)",
          "z-index": "9",
        });
      }
    }
  }

  // Country Date and Time start
  function updateDateTime() {
    const now = new Date();

    // Time in Anchorage
    const time = now.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      //   second: "2-digit",
      hour12: true,
      timeZone: "Asia/Riyadh",
    });

    // Get full date manually with full month name
    const anchorageDate = new Date(
      now.toLocaleString("en-US", { timeZone: "Asia/Riyadh" })
    );
    const day = String(anchorageDate.getDate()).padStart(2, "0");
    const month = anchorageDate.toLocaleString("en-US", { month: "long" });
    const year = anchorageDate.getFullYear();
    const formattedDate = `${day} ${month} ${year}`;

    $("#time").text(time);
    $("#dates").text(formattedDate);
  }

  $(document).ready(function () {
    updateDateTime(); // initial call
    setInterval(updateDateTime, 1000);
  });

  // Country Date and Time end

  // weather forecatst start
  const apiKey = "dc4fbdf439105b6beae05acbe768a76f";
  const city = "Riyadh";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  $.getJSON(url, function (data) {
    $(".temperature").text(`${Math.round(data.main.temp)}°C`);
    $(".condition").text(data.weather[0].description);
    $(".location").text(data.name);

    const weatherMain = data.weather[0].main.toLowerCase();
    if (weatherMain.includes("clear")) {
      $(".weather-icon").text("☀️");
    } else {
      $(".weather-icon").text("🌤️");
    }
  }).fail(function (jqXHR, textStatus, errorThrown) {
    console.error("Weather fetch failed:", textStatus, errorThrown);
  });
  // weather forecatst end

  //language change drop down start
  $("select").each(function () {
    var $this = $(this),
      numberOfOptions = $(this).children("option").length;

    $this.addClass("select-hidden");
    $this.wrap('<div class="select"></div>');
    $this.after('<div class="select-styled"></div>');

    var $styledSelect = $this.next("div.select-styled");
    $styledSelect.text($this.children("option").eq(0).text());

    var $list = $("<ul />", {
      class: "select-options",
    }).insertAfter($styledSelect);

    for (var i = 0; i < numberOfOptions; i++) {
      $("<li />", {
        text: $this.children("option").eq(i).text(),
        rel: $this.children("option").eq(i).val(),
      }).appendTo($list);
      if ($this.children("option").eq(i).is(":selected")) {
        $('li[rel="' + $this.children("option").eq(i).val() + '"]').addClass(
          "is-selected"
        );
      }
    }

    var $listItems = $list.children("li");

    $styledSelect.click(function (e) {
      e.stopPropagation();
      $("div.select-styled.active")
        .not(this)
        .each(function () {
          $(this).removeClass("active").next("ul.select-options").hide();
        });
      $(this).toggleClass("active").next("ul.select-options").toggle();
    });

    $listItems.click(function (e) {
      e.stopPropagation();
      $styledSelect.text($(this).text()).removeClass("active");
      $this.val($(this).attr("rel"));
      $list.find("li.is-selected").removeClass("is-selected");
      $list
        .find('li[rel="' + $(this).attr("rel") + '"]')
        .addClass("is-selected");
      $list.hide();
      //console.log($this.val());
    });

    $(document).click(function () {
      $styledSelect.removeClass("active");
      $list.hide();
    });
  });

  $(document).on("click", ".close-btn", function () {
    $(".estimated-security").hide();
  });

  document
    .getElementById("calendarCheckIn")
    .addEventListener("click", function () {
      const input = document.getElementById("checkin");
      if (input.showPicker) input.showPicker();
      else input.focus();
    });

  document
    .getElementById("calendarCheckOut")
    .addEventListener("click", function () {
      const input = document.getElementById("checkout");
      if (input.showPicker) input.showPicker();
      else input.focus();
    });

  //language change drop down end
})(jQuery);
