let buttonAdd = document.getElementById("dodaj");
let buttonDelete = document.getElementById("usun");
let description = document.getElementById("tekst");

buttonAdd.onclick = function() {
    description.textContent = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum est, quidem exercitationem laboriosam dolorem magnam voluptas quasi doloribus tenetur assumenda rem suscipit. Beatae vitae porro iusto praesentium aut, facilis fugit.";
}

buttonDelete.onclick = function() {
    description.textContent = "";
}

