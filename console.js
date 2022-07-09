/**Тег H1 */
var titleH1 = document.querySelector("._ac78").firstChild;
let title = titleH1.innerHTML
title

/**Количество подписчиков/ подписок */

const totals = document.querySelectorAll('._aacl._aacp._aacu._aacx._aad6._aade');
const total_count = totals[1].querySelector('._ac2a').textContent;
/** */

/**Получение значения атрибута href каждого аккаунта */
var ul_accounts = document.getElementsByClassName("_aaey"); // класс тега ul списка аккаунтов
var accounts = ul_accounts[0].innerHTML;
var searching_nick = accounts.match(/href="[^"]+"/g);

/**Удаление повторяющихся элементов из массива */
const uniqueSet = new Set(searching_nick);
const result_nick = [...uniqueSet];          //Clean array


/**Отсчёт 7знаков от начала и 2 знака  от конца */

let result_nick_name = [];

for (let i = 0; i < result_nick.length; i++) {
    let a = 7;
    let b = result_nick[i].length - 2;
    result_nick_name.push(result_nick[i].substring(a, b))
}

result_nick_name = result_nick_name.map(i => '"' + i);

console.log(result_nick_name.join('",\r\n'));

// result_nick_name = JSON.stringify(result_nick_name);
// result_nick_name = result_nick_name.match(/[^{}"]+/g).join('').match(/[^,]+/g).join('\n').match(/[^:]+/g).join(' : ');
// console.log(result_nick_name);


