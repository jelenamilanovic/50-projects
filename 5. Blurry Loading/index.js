window.onload = () => {
  let statusEl = document.querySelector(".loading-status");
  let progress = 1;
  let progressOpacity = 1;
  let filterAmount = 100;


  let progressInterval = setInterval(() => {
    progress++;
    progressOpacity -= 0.01;
    filterAmount -= 1;
    if (progress == 100) {
      window.clearInterval(progressInterval);
    }
    statusEl.style.opacity = `${progressOpacity}`;
    statusEl.innerText = `${progress}%`;
    document.body.style.backdropFilter = `blur(${filterAmount}px)`;
  }, 25);
}
