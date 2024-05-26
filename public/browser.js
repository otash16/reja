console.log("Frontend JS ishga tushdi");

function itemTemplate(data) {
    return `<li
    class = "list-group-item list-group-item-info d-flex align-items-center"
    >
    <span class = "item-text"><%=${item.reja}%></span>
    <div>
    <button
    data-id = "<%=${item._id}%>"
    class="edit-me btn btn-secondary btn-sm mr-1"
    >
      Ozgartirish
      </button>
      <button
      data-id = "<%=${item._id}%>"
         class = "delete-me btn btn-danger btn-sm"
   >
   
      Ochirish
      </button>
      </div>
      </li>`;
}
let createField = document.getElementById("create-field")
document.getElementById("create-form").addEventListener("submit", function(e) {
    e.preventDefault();
    axios
    .post("/create-item", {reja: createField.value})
    .then((data) =>{
        document.getElementById("item-list").insertAdjacentHTML("beforeend", itemTemplate(response.data))
        createField.value = "";
        createField.focus();
    })
    .catch((err) => {
        console.log("Iltimos qaytadan urunib koring")
    });
});

document.addEventListener("click", function(e) {
    //delete-oper
    console.log(e);
    if(e.target.classList.contains("delete-me")){
        if(confirm("Aniq ochirmoqchimisiz?")){
            axios
            .post("delete-item",{id: e.target.getAttribute("data-id")})
            .then(response => {
                console.log(response.data);
                e.target.parentElement.parentElement.remove();
            })
            .catch(error => {
                console.log("Iltimos qaytadan harakaat qiling");
            })
        }
        }
    if(e.target.classList.contains("edit-me")){
        alert("Siz edit tugmasini bosdingiz");
    }
})