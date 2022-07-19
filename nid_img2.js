function triggerNID2() {
    document.querySelector("#nidImage2").click();
  }
  
  
  nidImage2.onchange = (evt) => {
    const [file] = nidImage2.files;
    if (file) {
      nidDisplay2.src = URL.createObjectURL(file);
    }
  };