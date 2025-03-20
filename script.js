 const imageUrls = [
    { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];

function downloadImage(imageObj){
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = imageObj.url;
        img.onload = () => resolve(img);
        img.onerror = () => reject(`Failed to load image: ${imageObj.url}`);
    });
}

async function downloadImages() {
    const loadingDiv = document.getElementById("loading");
    const outputDiv = document.getElementById("output");
    const errorDiv = document.getElementById("error");

    loadingDiv.style.display = "block";
    outputDiv,innerHTML = "";
    errorDiv.innerHTML = "";

    try{
        const images = await Promise.all(imageUrls.map(downloadImage));

    loadingDiv.style.display = "none";

    images.forEach(img => outputDiv.appendChild(img));
    }catch(error)
    {
        loadingDiv.style.display ="none";
        errorDiv.innerHTML = error;
    }
    
}