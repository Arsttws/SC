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

    const correspondingMainContentItem = document.querySelector('.main-content .main-content-item.item' + itemClass);
    if (correspondingMainContentItem) {
      setTimeout(() => {
        correspondingMainContentItem.classList.add('active');
        console.log(correspondingMainContentItem);
        // correspondingMainContentItem.scrollIntoView({behavior: 'smooth', block:'start'});

        let c = correspondingMainContentItem.getBoundingClientRect(),
        scrolltop = c.top +  window.pageYOffset - 80,
        scrollleft = document.body.scrollLeft + c.left;
        console.log('top:' + scrolltop);

        window.scrollTo({
          top: scrolltop,
          behavior: "smooth",
        });
      })
    }
    // Находим соответствующий элемент в 'main-content' и добавляем ему класс 'active'
    document.querySelector('.main-content .main-content-item.item' + itemClass).classList.add('active');

    // Прокручиваем элемент в 'top-menu' так, чтобы он стал видимым и самым левым
    event.target.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
}

// Добавляем обработчики событий для элементов 'top-menu'
document.querySelectorAll('.top-menu .items .item').forEach(function(item) {
    item.addEventListener('click', toggleActiveClass);
});

  function syncScroll() {
    const mainContentItems = document.querySelectorAll('.main-content-item');
    let closestItem = null;
    let closestDistance = Infinity;

    mainContentItems.forEach(function(item) {
      const rect = item.getBoundingClientRect();
      const distance = Math.abs(rect.top);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestItem = item;
      }
    });

    if (closestItem) {
      // Удаляем активный класс со всех элементов top-menu
      document.querySelectorAll('.top-menu .items .item.active').forEach(function(activeItem) {
        activeItem.classList.remove('active');
      });

      // Определяем класс текущего элемента
      const itemClass = closestItem.className.split(' ')[1];
      let last = itemClass.toString().slice(4);

      // Находим соответствующий элемент в 'top-menu' и добавляем ему класс 'active'
      const correspondingMenuItem = document.getElementById('topMenuItem' + last);
      correspondingMenuItem.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
      if (correspondingMenuItem) {
        correspondingMenuItem.classList.add('active');
      }
    }
  }

  // Добавляем обработчик события прокрутки для main-content
  document.addEventListener('scroll', syncScroll);

const showMenuBtn = document.querySelector('.show-all-menu-items')
const menuItems = document.querySelector('.top-menu')

showMenuBtn.addEventListener('click', () => {
  menuItems.classList.toggle('show-menu')
  if(document.querySelector('.top-menu.show-menu')) {
    showMenuBtn.textContent = '-'
  } else {
    showMenuBtn.textContent = '+'
  }
})