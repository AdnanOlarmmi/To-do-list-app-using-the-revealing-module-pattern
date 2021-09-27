const add = document.querySelector('#addList');
const addForm = document.querySelector('#addForm')
const newEntry = document.querySelector('#newEntry')
const form = document.querySelector('form');
const listContent = document.querySelector('.listContent');
const listItems = document.querySelector('.listItems');

const app = (() => {

    const render = (newEntry) => {

        let markUp =
            ` <div class="listItems"> 
        ${newEntry}
        <span   class="delete misc">&times;</span>
        <input  type="checkbox" name="" id="checkbox" class="misc">
        </div> `

        listContent.insertAdjacentHTML('afterbegin', markUp)
    }

    const listener = _ => {
        add.addEventListener("click", () => {
            form.style.display = "inline-block";
        })

        addForm.addEventListener("click", (e) => {
            e.preventDefault()
            form.style.display = "none";
            let newValue = newEntry.value;
            render(newValue);
            newEntry.value = ""
        })

        listContent.addEventListener("click", (e) => {
                if (e.target.matches(".delete")) {
                e.target.parentNode.style.display = "none";
                }

                if (e.target.matches(".listItems")) {
                e.target.classList.toggle("done");
                }
                })
        }
    const init = _ => {
        listener()
    }

    return {
        init
    }
})()

app.init()
// add.addEventListener('click', () => {
//     form.style.display = 'block';
// })

// addForm.addEventListener('click', (e) => {
//     e.preventDefault();

//     form.style.display = 'none';

//     const newCheckBox = document.createElement("input")
//     newCheckBox.type = "checkbox";
//     newCheckBox.setAttribute("id", "checkbox");
//     newCheckBox.classList.add('misc');


//     const newDeleteButton = document.createElement("span")
//     newDeleteButton.innerHTML = "×";
//     newDeleteButton.setAttribute("class", "delete");
//     newDeleteButton.classList.add('misc');

//     let newListItem = createListItem(newEntry.value);
//     // listContent.appendChild(newListItem);
//     listContent.insertBefore(newListItem,listContent.childNodes[0]);
//     newListItem.appendChild(newDeleteButton);
//     newListItem.appendChild(newCheckBox)

//     newEntry.value = '';  
// });
// function createListItem(text) {
//     const newListElement = document.createElement("div");
//     newListElement.textContent = text;
//     newListElement.classList.add('listItems');
//     //  newListElement.setAttribute("class","listItems");
//     return newListElement;
// }

// listContent.addEventListener("click", (e)=>{
//     if(e.target.classList.contains("delete")){
//         e.target.parentNode.style.display = "none";
//     }

//     if (e.target.classList.contains("listItems")) {
//         e.target.classList.toggle("done");
//     }
// })