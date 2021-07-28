
let co = document.getElementById("co");
const consulta = () => {

let departamento = prompt("Ingrese el departamento al cual desea conocer su capital \n \n Digite 1 si desea salir")


departamento = departamento.toLowerCase();
while (
  departamento !== "1" &&
  departamento !== "amazonas" &&
  departamento !== "antioquia" &&
  departamento !== "arauca" &&
  departamento !== "atlantico" &&
  departamento !== "bolivar" &&
  departamento !== "boyaca" &&
  departamento !== "caldas" &&
  departamento !== "caqueta" &&
  departamento !== "casanare" &&
  departamento !== "cauca" &&
  departamento !== "cesar" &&
  departamento !== "choco" &&
  departamento !== "cordoba" &&
  departamento !== "cundinamarca" &&
  departamento !== "guainia" &&
  departamento !== "guaviare" &&
  departamento !== "huila" &&
  departamento !== "la guajira" &&
  departamento !== "magdalena" &&
  departamento !== "meta" &&
  departamento !== "nariño" &&
  departamento !== "norte de santander" &&
  departamento !== "putumayo" &&
  departamento !== "quindio" &&
  departamento !== "risaralda" &&
  departamento !== "san andres y providencia" &&
  departamento !== "san andres" &&
  departamento !== "providencia" &&
  departamento !== "santander" &&
  departamento !== "sucre" &&
  departamento !== "tolima" &&
  departamento !== "valle del cauca" &&
  departamento !== "vaupes" &&
  departamento !== "vichada" 
) {
  alert("Favor ingrese un departamento valido ó opción valida");
  departamento = prompt("Ingrese el departamento al cual desea conocer su capital \n Digite 1 si desea salir");
  departamento = departamento.toLowerCase();
}

if (departamento === "1") {
  window.close();
  ciudad.innerHTML = "";
  //document.getElementById("").innerHTML="-";
  
} 
else {
  
if ( departamento === "amazonas") {
  
  ciudad.innerHTML =  "Leticia es la capital del departamento del Amazonas";
  document.getElementById("LinkAmazonas").innerHTML="Link de la pagina";
}
else if ( departamento === "antioquia") {
  
  ciudad.innerHTML =  "Medellin es la capital del departamento de Antioquia";
  document.getElementById("LinkAntioquia").innerHTML="Link de la pagina";

}
else if (departamento === "arauca") {
  ciudad.innerHTML =  "Arauca es la capital del departamento de Arauca";
  document.getElementById("LinkArauca").innerHTML="Link de la pagina";
}
else if (departamento === "atlantico")
{
  ciudad.innerHTML =  "Barranquilla es la capital del departamento del Atlántico";
  document.getElementById("LinkAtlantico").innerHTML="Link de la pagina";
} 
else if (departamento === "bolivar")
{
  ciudad.innerHTML =  "Cartagena de Indias es la capital del departamento de Bolivar";
  document.getElementById("LinkBolivar").innerHTML="Link de la pagina";
} 
else if (departamento === "boyaca")
{
  ciudad.innerHTML =  "Tunja es la capital del departamento de Boyacá";
  document.getElementById("LinkBoyaca").innerHTML="Link de la pagina";
} 
else if (departamento === "caldas")
{
  ciudad.innerHTML =  "Manizales es la capital del departamento de Caldas";
  document.getElementById("LinkCaldas").innerHTML="Link de la pagina";
} 
else if (departamento === "caqueta")
{
  ciudad.innerHTML =  "Florencia es la capital del departamento de Caquetá";
  document.getElementById("LinkCaqueta").innerHTML="Link de la pagina";
} 
else if (departamento === "casanare")
{
  ciudad.innerHTML =  "Yopal es la capital del departamento de Casanare";
  document.getElementById("LinkCasanare").innerHTML="Link de la pagina";
} 
else if (departamento === "cauca")
{
  ciudad.innerHTML =  "Popayán es la capital del departamento del Cauca";
  document.getElementById("LinkCauca").innerHTML="Link de la pagina";
} 
else if (departamento === "cesar")
{
  ciudad.innerHTML =  "Valledupar es la capital del departamento del Cesar";
  document.getElementById("LinkCesar").innerHTML="Link de la pagina";
} 
else if (departamento === "choco")
{
  ciudad.innerHTML =  "Quibdó es la capital del departamento del Chocó";
  document.getElementById("LinkChoco").innerHTML="Link de la pagina";
} 
else if (departamento === "cordoba")
{
  ciudad.innerHTML =  "Monteria es la capital del departamento de Córdoba";
  document.getElementById("LinkCordoba").innerHTML="Link de la pagina";
} 
else if (departamento === "cundinamarca")
{
  ciudad.innerHTML =  "Bogota D.C. es la capital del departamento de Cundinamarca";
  document.getElementById("LinkCundinamarca").innerHTML="Link de la pagina";
} 
else if (departamento === "guainia")
{
  ciudad.innerHTML =  "Inírida es la capital del departamento de Guainía";
  document.getElementById("LinkGuainia").innerHTML="Link de la pagina";
} 
else if (departamento === "guaviare")
{
  ciudad.innerHTML =  "San José del Guaviare es la capital del departamento de Guaviare";
  document.getElementById("LinkGuaviare").innerHTML="Link de la pagina";
} 
else if (departamento === "huila")
{
  ciudad.innerHTML =  "Neiva es la capital del departamento del Huila";
  document.getElementById("LinkHuila").innerHTML="Link de la pagina";
} 
else if (departamento === "la guajira")
{
  ciudad.innerHTML =  "Riohacha es la capital del departamento de La Guajira";
  document.getElementById("LinkGuajira").innerHTML="Link de la pagina";
} 
else if (departamento === "magdalena")
{
  ciudad.innerHTML =  "Santa Marta es la capital del departamento del Magdalena";
  document.getElementById("LinkMagdalena").innerHTML="Link de la pagina";
} 
else if (departamento === "meta")
{
  ciudad.innerHTML =  "Villavicencio es la capital del departamento del Meta";
  document.getElementById("LinkMeta").innerHTML="Link de la pagina";
} 
else if (departamento === "nariño")
{
  ciudad.innerHTML =  "San Juan de Pasto es la capital del departamento de Nariño";
  document.getElementById("LinkNarino").innerHTML="Link de la pagina";
} 
else if (departamento === "norte de santander")
{
  ciudad.innerHTML =  "San José de Cúcuta es la capital del departamento de Norte de Santander";
  document.getElementById("LinkNorte_de_santander").innerHTML="Link de la pagina";
} 
else if (departamento === "putumayo")
{
  ciudad.innerHTML =  "Mocoa es la capital del departamento de Putumayo";
  document.getElementById("LinkPutumayo").innerHTML="Link de la pagina";
} 
else if (departamento === "quindio")
{
  ciudad.innerHTML =  "Armenia es la capital del departamento de Quindio";
  document.getElementById("LinkQuindio").innerHTML="Link de la pagina";
} 
else if (departamento === "risaralda")
{
  ciudad.innerHTML =  "Pereira es la capital del departamento de Risaralda";
  document.getElementById("LinkRisaralda").innerHTML="Link de la pagina";
} 
else if (departamento === "san andres y providencia" || departamento === "san andres" || departamento === "providencia")
{
  ciudad.innerHTML =  "San Andrés es la capital del departamento de San Andres y Providencia";
  document.getElementById("LinkSan_andres").innerHTML="Link de la pagina";
} 
else if (departamento === "santander")
{
  ciudad.innerHTML =  "Bucaramanga es la capital del departamento de Santander";
  document.getElementById("LinkSantander").innerHTML="Link de la pagina";
} 
else if (departamento === "sucre")
{
  ciudad.innerHTML =  "Sincelejo es la capital del departamento de Sucre";
  document.getElementById("LinkSucre").innerHTML="Link de la pagina";
} 
else if (departamento === "tolima")
{
  ciudad.innerHTML =  "Ibague es la capital del departamento de Tolima";
  document.getElementById("LinkTolima").innerHTML="Link de la pagina";
} 
else if (departamento === "valle del cauca")
{
  ciudad.innerHTML =  "Cali es la capital del departamento del Valle del Cauca";
  document.getElementById("LinkValle_del_cauca").innerHTML="Link de la pagina";
} 
else if (departamento === "vaupes")
{
  ciudad.innerHTML =  "Mitú es la capital del departamento de Vaupés";
  document.getElementById("LinkVaupes").innerHTML="Link de la pagina";
} 
else if (departamento === "vichada")
{
  ciudad.innerHTML =  "Puerto Carreño es la capital del departamento de vichada";
  document.getElementById("LinkVichada").innerHTML="Link de la pagina";
} 
}
}
//evento 
co.onclick = function () {
  consulta();
}
