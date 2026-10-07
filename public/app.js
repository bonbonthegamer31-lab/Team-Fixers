const form = document.getElementById("applicationForm");
const status = document.getElementById("status");
const button = form.querySelector("button");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  status.textContent = "Submitting...";
  status.className = "status";
  button.disabled = true;

  try {
    const data = new FormData(form);
    data.append("_subject", "New PKSMP.NET Team Fixers Application");
    data.append("_captcha", "false");
    data.append("_template", "table");

    const response = await fetch("https://formsubmit.co/ajax/bonbonthegamer31@gmail.com", {
      method: "POST",
      headers: { "Accept": "application/json" },
      body: data
    });

    const result = await response.json();
    if (!response.ok || result.success === false) {
      throw new Error(result.message || "Something went wrong. Please try again.");
    }

    status.textContent = "Application submitted! Thank you!";
    status.className = "status success";
    form.reset();
  } catch (error) {
    status.textContent = error.message || "Something went wrong. Please try again.";
    status.className = "status error";
  } finally {
    button.disabled = false;
  }
});
