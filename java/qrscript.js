     const wrapper = document.querySelector(".wrapper"),
      qrInput = wrapper.querySelector(".form input"),
      generateBtn = wrapper.querySelector(".form button"),
      qrImg = wrapper.querySelector("#qr-img"),
      downloadBtn = wrapper.querySelector("#download-btn");
    let preValue;

    generateBtn.addEventListener("click", () => {
      let qrValue = qrInput.value.trim();
      if (!qrValue || preValue === qrValue) return;
      preValue = qrValue;
      generateBtn.innerText = "Generating QR Code...";
      qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
      qrImg.addEventListener("load", () => {
        wrapper.classList.add("active");
        generateBtn.innerText = "Generate QR Code";
      });
    });

    downloadBtn.addEventListener("click", () => {
      if (qrImg.src) {
        const a = document.createElement('a');
        a.href = qrImg.src;
        a.download = 'qrcode.png';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      }
    });

    qrInput.addEventListener("keyup", () => {
      if (!qrInput.value.trim()) {
        wrapper.classList.remove("active");
        preValue = "";
      }
    });