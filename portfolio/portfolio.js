let menu = document.querySelector('#menu-icon');
let header = document.querySelector('.header');

menu.onclick= () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

/*let themeToggler = document.querySelector('#theme-icon');

themeToggler.onclick= () =>{
    themeToggler.classList.toggle('fa-sun');
    if(themeToggler.classList.contains('fa-sun'))
    {
        document.body.classList.add('active');
    }

    else
    {
        document.body.classList.remove('active');
    }
}*/

/*to download CV*/

/*function downloadCV() {
    const fileUrl = "https://publuu.com/flip-book/104816/283010";
    const fileName = "CV1.pdf";
 
    fetch(fileUrl)
       .then(response => response.blob())
       .then(blob => {
          // Create a new anchor element and set its href and download attributes
          const anchor = document.createElement("a");
          anchor.href = URL.createObjectURL(blob);
          anchor.download = fileName;
 
          // Programmatically trigger a click event on the anchor element
          anchor.click();
 
          // Release the URL object
          URL.revokeObjectURL(anchor.href);
       })
       .catch(error => {
          console.log("Error downloading CV: " + error);
       });
 }*/