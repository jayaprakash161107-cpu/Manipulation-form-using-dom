const form = document.getElementById("form");
const history = document.getElementById("history");

const input = document.querySelectorAll(".main input");
const textarea = document.querySelectorAll(".main textarea");


history.innerHTML = `

<table class="table-history">

<thead>
<tr>
    <th>First Name:</th>
    <th>Last Name:</th>
    <th>Email:</th>
    <th>Address:</th>
    <th>PinCode:</th>
    <th>Gender:</th>
    <th>State:</th>
    <th>Contry:</th>
    <th>Veg Food:</th>
    <th>Non Veg Food:</th>
    <th>Fruits:</th>
</tr>
</thead>

<tbody id="tablebody">
</tbody>

</table>

`;

const tablebody = document.getElementById("tablebody");


form.addEventListener("submit", function(event) {

    event.preventDefault();


    const firstname = input[0].value;
    const lastname = input[1].value;
    const email = input[2].value;
    const pincode = input[3].value;
    const gender = input[4].value;
    const state = input[5].value;
    const contry = input[6].value;

    const address = textarea[0].value;


    // Radio buttons
    const Vegfood = document.querySelector(
        'input[name="Veg Food"]:checked'
    );

    const nonveg = document.querySelector(
        'input[name="Non veg"]:checked'
    );

    const fruits = document.querySelector(
        'input[name="Fruits"]:checked'
    );


    const row = document.createElement("tr");


    row.innerHTML = `

        <td>${firstname}</td>
        <td>${lastname}</td>
        <td>${email}</td>
        <td>${address}</td>
        <td>${pincode}</td>
        <td>${gender}</td>
        <td>${state}</td>
        <td>${contry}</td>

        <td>${Vegfood.value}</td>
        <td>${nonveg.value}</td>
        <td>${fruits.value}</td>

    `;


    tablebody.appendChild(row);

    form.reset();

});