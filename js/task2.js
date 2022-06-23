// Створити функцію, яка видаляє з рядка всі символи, які ми передали другим аргументом. 'func("hello world", ['l', 'd'])' поверне нам "heo wor"

function removeCertainCharacters(text, arr) {
    for(i=0;i<arr.length;i++){
        text = text.replaceAll(arr[i], '');
    }
    console.log(text)
}
let someText = 'Hello world'
let removeElevent = ['l','d'];
removeCertainCharacters(someText, removeElevent);