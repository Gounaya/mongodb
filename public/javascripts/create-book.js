
var setupListener =
    () => createbutton.addEventListener('click', createBook);

window.addEventListener('DOMContentLoaded', setupListener);

var createBook =
  () => {
    let newBook = { title : title.value, author : author.value, year : pubyear.value,  cover : cover.value };
    let body = JSON.stringify(newBook);
    let requestOptions = { method :'POST', headers : { "Content-Type": "application/json" }, body : body };
    fetch('http://127.0.0.1:3000/books/create', requestOptions)
      .then ( response => response.json().then( json => ({ ok : response.ok, json : json}) ) )
      .then ( response => {
          if (response.ok)
            { return response.json; }
          else { throw new Error(` creation failed  : ${response.json.message}` ); }
        })
      .then( book => result.textContent = `book with id ${book._id} created` )
      .then( () => clearField() )
      .catch( error => result.textContent = `error : ${error.message}` );
  }


var clearField = function() {
  title.value = "";
  author.value = "";
  pubyear.value = "";
  cover.value = "";
}
