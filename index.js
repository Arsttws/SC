const mainContent = document.querySelector('.main-content')

for(let i = 1; i < 11; i++) {
    let item = document.createElement('div')
    item.classList.add('main-content-item')
    item.classList.add('item' + i)
    item.innerHTML = `
        <div class="main-content-item-text">
            <h3>Заголовок ${i}</h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quaerat, quo, quibusdam quasi,
                voluptatibus quia, quos, quas, quod, quidem.
            </p>
            <img src="https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp"></img>
                        <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quaerat, quo, quibusdam quasi,
                voluptatibus quia, quos, quas, quod, quidem.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quaerat, quo, quibusdam quasi,
                voluptatibus quia, quos, quas, quod, quidem.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quaerat, quo, quibusdam quasi,
                voluptatibus quia, quos, quas, quod, quidem.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quaerat, quo, quibusdam quasi,
                voluptatibus quia, quos, quas, quod, quidem.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quaerat, quo, quibusdam quasi,
                voluptatibus quia, quos, quas, quod, quidem.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quaerat, quo, quibusdam quasi,
                voluptatibus quia, quos, quas, quod, quidem.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quaerat, quo, quibusdam quasi,
                voluptatibus quia, quos, quas, quod, quidem.

            </p>

        </div>
    `
    mainContent.appendChild(item)
}

function toggleActiveClass(event) {
    // Находим все элементы с классом 'active' и удаляем этот класс
    document.querySelectorAll('.top-menu .active, .main-content .active').forEach(function(activeItem) {
      activeItem.classList.remove('active');
    });

    // Добавляем класс 'active' к текущему элементу
    event.target.classList.add('active');

    // Определяем класс текущего элемента
    const itemClass = event.target.className.split(' ')[1];
    console.log(itemClass);

    // Находим соответствующий элемент в 'main-content' и добавляем ему класс 'active'
    document.querySelector('.main-content .main-content-item.item' + itemClass).classList.add('active');
  }

  // Добавляем обработчики событий для элементов 'top-menu'
  document.querySelectorAll('.top-menu .items .item').forEach(function(item) {
    item.addEventListener('click', toggleActiveClass);
  });