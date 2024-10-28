function livelyPropertyListener(name, val) {
  switch (name) {
    // BRIGHTNESS VALUES
    case "brightnessBackgroundControl":
      document.getElementById("bgControl").style.opacity = `${100 - val}%`;
      break;
    case "brightnessSignControl":
      document.getElementById("bgSignControl").style.opacity = `${val}%`;
      break;

    // COLORS VALUES
    case "insideColorControl":
      document.documentElement.style.setProperty("--neon-inside-color", val);
      break;

    case "outsideColorControl":
      document.documentElement.style.setProperty(
        "--neon-border-inside-color",
        val
      );
      break;

    case "insideBorderColorControl":
      document.documentElement.style.setProperty("--neon-outside-color", val);
      break;

    case "outsideBorderColorControl":
      document.documentElement.style.setProperty(
        "--neon-border-outside-color",
        val
      );
      break;

    // OTHER VALUES
    case "speedControl":
      document.getElementById(
        "neon-border"
      ).style.animationDuration = `${val}s`;
      document.getElementById("neon-text").style.animationDuration = `${val}s`;
      break;

    case "name":
      document.getElementById("neon-name").innerHTML = val;
      break;

    case "timeControl":
      const time = document.getElementById("neon-clock-time");
      if (val === true) {
        time.style.display = "block";
      } else if (val === false) {
        time.style.display = "none";
      }
      break;

    case "dateControl":
      const clock = document.getElementById("neon-clock-date");
      if (val === true) {
        clock.style.display = "block";
      } else if (val === false) {
        clock.style.display = "none";
      }
      break;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // Setup the timer for the clock
  setInterval(function () {
    // Comprobar si esta hidden el reloj
    const clockDate = document.getElementById("neon-clock-date");
    const clockTime = document.getElementById("neon-clock-time");

    const date = new Date();
    if (clockDate.style.display != "none") {
      const formattedDate = date.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
      });
      clockDate.innerHTML = `${formattedDate}`;
    }

    if (clockTime.style.display != "none") {
      const hours = date.getHours().toString().padStart(2, "0");
      const minutes = date.getMinutes().toString().padStart(2, "0");
      const seconds = date.getSeconds().toString().padStart(2, "0");
      clockTime.innerHTML = `${hours}:${minutes}:${seconds}`;
    }
  }, 1000);
});
