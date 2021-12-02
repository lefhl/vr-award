window.addEventListener("load", handleProgressbar, { once: true });

function handleProgressbar() {
  const scrollbar = document.querySelector(".progress__status");

  if (scrollbar) {
    window.addEventListener("scroll", changeProgress, { passive: true });
  }

  function changeProgress() {
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrollTop =
      document.body.scrollTop || document.documentElement.scrollTop;
    scrollbar.style.width = `${(scrollTop / height) * 100}%`;
  }
}
