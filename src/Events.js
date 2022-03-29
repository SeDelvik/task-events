/*
   1. Создайте функцию createButton(). Необходимо, чтобы эта функция осуществила вставку в body тег button с текстом: "Удали меня".
      При клике по button удалить этот button.
*/
export function createButton() {
    let button = document.createElement('button');
    button.innerHTML = 'Удали меня';
    button.addEventListener('click', () => {
        document.body.removeChild(button);
    });
    document.body.append(button);
}

/*
   2. Создайте функцию createArrList(arr), в которую передается 1 параметр: arr - массив строк.
      Функция выводит этот массив в виде маркированного списка внутри тега body.
      При наведении курсора мыши на элемент списка у этого элемента создается атрибут title, в котором записан его текст.
*/
export function createArrList(arr) {
    let list = document.createElement('ul');
    document.body.append(list);
    for (let i = 0; i < arr.length; i++) {
        let tmp = document.createElement('li');
        tmp.innerHTML = arr[i];
        tmp.addEventListener('mouseover', () => {
            tmp.setAttribute('title', arr[i]);
        });
        list.append(tmp);
    }
}

/*
   3. Создайте функцию createLink(), которая сгенерирует следующую разметку и вставит ее в body:

      <a href="https://tensor.ru/">tensor</a>

      При первом клике по ссылке в конец ее текста через пробел дописывается ее href.
      При следующем клике происходит действие по умолчанию (переход по ссылке в текущей вкладке).
*/
export function createLink() {
    let link = document.createElement('a');
    link.setAttribute('href', 'https://tensor.ru/');
    link.innerHTML = 'tensor';
    link.addEventListener(
        'click',
        () => {
            link.innerHTML = link.innerHTML + ' ' + link.getAttribute('href');
        },
        { once: true },
    );
    document.body.append(link);
}

/*
   4. Создайте функцию createList(), которая сгенерирует следующую разметку и вставит ее в body:

      <ul>
         <li>Пункт</li>
      </ul>
      <button>Добавить пункт</button>

      При клике по элементу li ему в конец текста добавляется восклицательный знак.
      При клике по button в конец списка добавляется новый элемент li с текстом: "Пункт".
      Клик по новому li также добавляет восклицательный знак в конец текста.
*/
export function createList() {
    let list = document.createElement('ul');
    document.body.append(list);
    let elem = document.createElement('li');
    elem.innerHTML = 'Пункт';
    list.append(elem);
    let button = document.createElement('button');
    button.innerHTML = 'Добавить пункт';
    document.body.append(button);

    document.querySelector('ul').addEventListener('click', function (event) {
        if (event.target && event.target.nodeName === 'LI') {
            event.target.innerHTML += '!';
        }
    });
    button.addEventListener('click', () => {
        let elem2 = document.createElement('li');
        elem2.innerHTML = 'Пункт';
        list.append(elem2);
    });
}
