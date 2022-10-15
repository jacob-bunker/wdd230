const button = document.querySelector("button");
const inputVar = document.querySelector("input")
const ListVar = document.querySelector('ul')


button.addEventListener('click', () =>{
    const book = inputVar.value;
    inputVar.value ='';

    const bookList = document.createElement("li");
    const bookText = document.createElement('span');
    const bookBTN = document.createElement('button');

    bookList.appendChild(bookText);
    bookText.textContent=book;
    bookList.appendChild(bookBTN);
    bookBTN.textContent= 'X';
    ListVar.appendChild(bookList);

    bookBTN.addEventListener('click', ()=>{
        ListVar.removeChild(bookList);
    });
    inputVar.focus();
})