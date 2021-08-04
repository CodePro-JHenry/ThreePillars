console.log('hello world');
let count = 0;
const maxCount = 10;
document.getElementById('myBtn').onclick = function () {
    ++count;
    makeMagic(count);
};

function makeMagic(count) {
    let msg = `${count} magical thing was added! ☜(⌒▽⌒)☞`;
    if (count > 1 && count < maxCount) {
        msg = `and there are ${count} magical things now! ☜(⌒▽⌒)☞`;
    } else if (count >= maxCount) {
        msg = `are you sure that are ${count}:magical things here? (Ծ‸ Ծ)`;
    }
    document.getElementById('counter').innerText = msg;
}
