function triggerClick() {
    document.querySelector("#profileImage").click();
  }
  
  
  profileImage.onchange = (evt) => {
    const [file] = profileImage.files;
    if (file) {
      profileDisplay.src = URL.createObjectURL(file);
    }
  };


  

