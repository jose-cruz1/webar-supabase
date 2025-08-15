const urlParams = new URLSearchParams(window.location.search);
const fileName = urlParams.get("file");

if (!fileName) {
  alert("No se ha especificado un modelo en la URL. Ejemplo: ?file=modelo.glb");
} else {
  const baseURL = "https://mcnzwoeuiiayseqxubyx.supabase.co/storage/v1/object/public/models/";
  const modelURL = baseURL + encodeURIComponent(fileName);
  document.getElementById("viewer").setAttribute("src", modelURL);
}
