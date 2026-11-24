const gate = document.getElementById("gate");
const form = document.getElementById("gate-form");
const codeInput = document.getElementById("member-code");
const error = document.getElementById("gate-error");
const site = document.getElementById("site");
const MEMBER_CODE = "KGKKSG810";

function unlock() {
  gate.classList.add("open");
  site.classList.add("visible");
  site.setAttribute("aria-hidden", "false");
  sessionStorage.setItem("funabashi-member", "true");
  setTimeout(() => document.querySelector(".hero h1").focus?.(), 700);
}

if (sessionStorage.getItem("funabashi-member") === "true") {
  unlock();
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const value = codeInput.value.trim().toUpperCase();

  if (value === MEMBER_CODE) {
    unlock();
    return;
  }

  error.textContent = "CODE INVALID / アクセスできません";
  gate.classList.remove("shake");
  void gate.offsetWidth;
  gate.classList.add("shake");
  codeInput.select();
});

codeInput.addEventListener("input", () => {
  error.textContent = "";
});

function updateClock() {
  const clock = document.getElementById("clock");
  const now = new Intl.DateTimeFormat("ja-JP", {
    timeZone: "Asia/Tokyo",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(new Date());
  clock.textContent = `${now} JST`;
}

updateClock();
setInterval(updateClock, 30000);
