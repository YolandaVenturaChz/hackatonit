window.addEventListener("load", function () {

    var stop = document.getElementById("stop");
    var up = document.getElementById("up");

    /**creando elementos */
    var form = document.createElement("form");
    var input = document.createElement("input");
    var btn = document.createElement("button");
    /**creando contenido */

    var txt = document.createTextNode("click");
    var type = document.createAttribute("type");
    type.value = "text";
    var autofocus = document.createAttribute("autofocus");

    /**agregando contenido */
    input.setAttributeNode(type);
    input.setAttributeNode(autofocus);
    btn.appendChild(txt);

    form.appendChild(input);
    form.appendChild(btn);
    stop.appendChild(form);
    /**agregando classes */
    stop.classList.add('msj');
    up.classList.add('new-msj');
    
    
    btn.addEventListener('click', function (event) {
        event.preventDefault();
        
    
    if (input.value) {

        var txt1 = document.createElement('textarea');
        txt1.textContent = input.value;
        up.appendChild(txt1);
        input.value = '';
        event.target.disabled = false;
        txt1.classList.add('nuevo');

        console.log('hola');    
    }
    })
    
    input.addEventListener('keyup', function (event) {
        event.preventDefault();

        
    })







})