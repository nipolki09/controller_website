const listofcontrollers = [
    { name:"nintendo wii u pro", image:"wiuupro.jpg", url:"playstation/PS_Controller.html" },
    { name:"playstation 4", image:"playstation4.jpg", url:"playstation/PS_Controller.html" },
    { name:"xbox one", image:"xboxone.jpg", url:"playstation/PS_Controller.html" },
];

const cont = document.getElementById("mainContainer");

const tablas = listofcontrollers.map( control => {
    return `<table class="tableContainer"  border="0">
          <tr>
            <td>
                <img class="imgController" src="images/${ control.image }" alt="${ control.name } controller">
            </td>
          </tr>
          <tr>
            <td>
                <div class="nameController">
                    ${ control.name }
                </div>
            </td>
          </tr>
          <tr>
            <td>
                <a href="${ control.url }">
                    <p class="btn">Ver Más</p>
                </a>
            </td>
          </tr>
        </table>`;
}).join("");

cont.innerHTML = tablas;
