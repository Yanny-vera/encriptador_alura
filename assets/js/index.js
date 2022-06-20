//-ENCRIPTAR
const encriptar = document.getElementById("encriptar");
let encriptado = ''
encriptar.addEventListener("click", function (e){
  e.preventDefault();
  let mensaje = document.querySelector("#input").value;
  let resultado = validar(mensaje);
  const vocals= {'a':'ai', 'e':'enter', 'i':'imes', 'o':'ober', 'u':'ufat'}
  encriptado = mensaje.replaceAll(/[aeiou]/g, v=> vocals[v])

  if(resultado==true){
    limpiar();
    document.querySelector("#resultado").innerHTML = `
    <div class="column3">
      <h4 class="resultado">${encriptado}</h4>
      <div class="boton">
        <button type="submit" onclick="copiar(encriptado)" class="btn-copiar">Copiar</button>
      </div>
    </div>
    `
  }
});

//-DESENCRIPTAR
const desencriptar = document.getElementById("desencriptar");
let desencriptado =''
desencriptar.addEventListener("click", function (e){
  e.preventDefault();
  let mensaje = document.querySelector("#input").value;
  let resultado = validar(mensaje);
  const revelar = {'ai':'a', 'enter':'e', 'imes':'i', 'ober':'o', 'ufat':'u'}
  desencriptado = mensaje.replaceAll(/(ai|enter|imes|ober|ufat)/g, v=> revelar[v])

  if(resultado==true){
    limpiar();
    document.querySelector("#resultado").innerHTML = `
    <div class="column3">
    <h4 class="resultado" id="copia">${desencriptado}</h4>
    <div class="boton">
    <button class="btn-copiar" onclick="copiar(desencriptado)">Copiar</button>
    </div>
    </div>
    `
  }
});

//-COPIAR
function copiar(x){
  navigator.clipboard.writeText(x)
}

//-VALIDAR
function validar(mensaje){
  let enviadoConExito = true;
  let validacion = /[^a-z. ]/;

  if (validacion.test(mensaje)!==false){
    alert('Usar solo minúsculas sin tilde')
    enviadoConExito = false;
  } else if (mensaje == null || mensaje == ''){
    alert('Ningún mensaje fue encontrado')
    enviadoConExito = false
  }
  return enviadoConExito;
};

//-LIMPIAR
function limpiar() {
  const textarea = document.querySelector('.inputEncriptar');
  textarea.value = ''
}