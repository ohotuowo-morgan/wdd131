const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener("click", function () {
    if (input.value.trim !== "") {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = ''
        input.focus();
    }
});

function displayList(item) {
    const li = document.createElement('li');
    li.textContent = item;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';

    deleteButton.addEventListener("click", function () {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    });
    li.append(deleteButton);
    list.append(li);
    input.value = "";

}

function setChapterList(){
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function getChapterList(){
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

function deleteChapter(chapter) {
  chapter = chapter.slice(0, chapter.length - 1);
  chaptersArray = chaptersArray.filter(item => item !== chapter);
  setChapterList();
}


let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => { displayList(chapter) });


