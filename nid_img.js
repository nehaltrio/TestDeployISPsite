function triggerNID() {
    document.querySelector("#nidImage").click();
  }
  
  
  nidImage.onchange = (evt) => {
    const [file] = nidImage.files;
    if (file) {
      nidDisplay.src = URL.createObjectURL(file);
    }
  };


  

