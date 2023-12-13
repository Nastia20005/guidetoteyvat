 
let mainMenu = [
  {    title: 'Регионы',        linkPath: null,    parent: 0,    menuValue: 1,    enabled: true  },
  {    title: 'Персонажи',      linkPath: null,    parent: 0,    menuValue: 2,    enabled: true  },

  {    title: 'Мондштадт',      linkPath: 'content/regions/mondstadt.html',     parent: 1,    menuValue: 0,    enabled: true  },
  {    title: 'Ли Юэ',          linkPath: 'content/regions/liue.html',          parent: 1,    menuValue: 0,    enabled: true  },
  {    title: 'Инадзума',       linkPath: null,                                 parent: 1,    menuValue: 0,    enabled: false  },
  {    title: 'Сумеру',         linkPath: null,                                 parent: 1,    menuValue: 0,    enabled: false  },
  {    title: 'Фонтейн',        linkPath: null,                                 parent: 1,    menuValue: 0,    enabled: false  },
  {    title: 'Натлан',         linkPath: null,                                 parent: 1,    menuValue: 0,    enabled: false  },
  {    title: 'Снежная',        linkPath: null,                                 parent: 1,    menuValue: 0,    enabled: false  },

  {    title: 'Анемо',          linkPath: null,                                 parent: 2,    menuValue: 3,    enabled: true  },
  {    title: 'Венти',          linkPath: 'content/characters/venti.html',      parent: 3,    menuValue: 0,    enabled: true  },
  {    title: 'Джинн',          linkPath: null,                                 parent: 3,    menuValue: 0,    enabled: false  }, 
  {    title: 'Кадзуха',        linkPath: null,                                 parent: 3,    menuValue: 0,    enabled: false  },
  {    title: 'Линетт',         linkPath: null,                                 parent: 3,    menuValue: 0,    enabled: false  },
  {    title: 'Сахароза',       linkPath: null,                                 parent: 3,    menuValue: 0,    enabled: false  },
  {    title: 'Саю',            linkPath: null,                                 parent: 3,    menuValue: 0,    enabled: false  },
  {    title: 'Странник',       linkPath: null,                                 parent: 3,    menuValue: 0,    enabled: false  },
  {    title: 'Сяо',            linkPath: 'content/characters/xiao.html',       parent: 3,    menuValue: 0,    enabled: true  },
  {    title: 'Фарузан',        linkPath: null,                                 parent: 3,    menuValue: 0,    enabled: false  },
  {    title: 'Хэйдзо',         linkPath: null,                                 parent: 3,    menuValue: 0,    enabled: false  },

  {    title: 'Гео',            linkPath: null,                                 parent: 2,    menuValue: 4,    enabled: true  },
  {    title: 'Альбедо',        linkPath: null,                                 parent: 4,    menuValue: 0,    enabled: false  }, 
  {    title: 'Горо',           linkPath: null,                                 parent: 4,    menuValue: 0,    enabled: false  }, 
  {    title: 'Итто',           linkPath: null,                                 parent: 4,    menuValue: 0,    enabled: false  }, 
  {    title: 'Нин Гуан',       linkPath: 'content/characters/ningguang.html',  parent: 4,    menuValue: 0,    enabled: true  },
  {    title: 'Ноэлль',         linkPath: null,                                 parent: 4,    menuValue: 0,    enabled: false  }, 
  {    title: 'Чжун Ли',        linkPath: null,                                 parent: 4,    menuValue: 0,    enabled: false  }, 
  {    title: 'Юнь Цзинь',      linkPath: null,                                 parent: 4,    menuValue: 0,    enabled: false  },

  {    title: 'Электро',        linkPath: null,                                 parent: 2,    menuValue: 5,    enabled: true  },
  {    title: 'Дори',           linkPath: null,                                 parent: 5,    menuValue: 0,    enabled: false  }, 
  {    title: 'Кэ Цин',         linkPath: null,                                 parent: 5,    menuValue: 0,    enabled: false  }, 
  {    title: 'Лиза',           linkPath: null,                                 parent: 5,    menuValue: 0,    enabled: false  },
  {    title: 'Райдэн',         linkPath: null,                                 parent: 5,    menuValue: 0,    enabled: false  }, 
  {    title: 'Рэйзор',         linkPath: null,                                 parent: 5,    menuValue: 0,    enabled: false  }, 
  {    title: 'Сайно',          linkPath: null,                                 parent: 5,    menuValue: 0,    enabled: false  },
  {    title: 'Сара',           linkPath: null,                                 parent: 5,    menuValue: 0,    enabled: false  }, 
  {    title: 'Синобу',         linkPath: null,                                 parent: 5,    menuValue: 0,    enabled: false  }, 
  {    title: 'Фишль',          linkPath: null,                                 parent: 5,    menuValue: 0,    enabled: false  },
  {    title: 'Яэ Мико',        linkPath: null,                                 parent: 5,    menuValue: 0,    enabled: false  },

  {    title: 'Дендро',         linkPath: null,                                 parent: 2,    menuValue: 6,    enabled: true  },
  {    title: 'Аль-Хайтам',     linkPath: null,                                 parent: 6,    menuValue: 0,    enabled: false  }, 
  {    title: 'Бай Чжу',        linkPath: null,                                 parent: 6,    menuValue: 0,    enabled: false  }, 
  {    title: 'Кавех',          linkPath: null,                                 parent: 6,    menuValue: 0,    enabled: false  },
  {    title: 'Кирара',         linkPath: null,                                 parent: 6,    menuValue: 0,    enabled: false  }, 
  {    title: 'Коллеи',         linkPath: null,                                 parent: 6,    menuValue: 0,    enabled: false  },
  {    title: 'Нахида',         linkPath: null,                                 parent: 6,    menuValue: 0,    enabled: false  },
  {    title: 'Тигнари',        linkPath: null,                                 parent: 6,    menuValue: 0,    enabled: false  }, 
  {    title: 'Яо Яо',          linkPath: null,                                 parent: 6,    menuValue: 0,    enabled: false  },

  {    title: 'Гидро',          linkPath: null,                                 parent: 2,    menuValue: 7,    enabled: true  },
  {    title: 'Аято',           linkPath: null,                                 parent: 7,    menuValue: 0,    enabled: false  },
  {    title: 'Барбара',        linkPath: null,                                 parent: 7,    menuValue: 0,    enabled: false  },
  {    title: 'Е Лань',         linkPath: null,                                 parent: 7,    menuValue: 0,    enabled: false  },
  {    title: 'Кандакия',       linkPath: null,                                 parent: 7,    menuValue: 0,    enabled: false  },
  {    title: 'Кокоми',         linkPath: null,                                 parent: 7,    menuValue: 0,    enabled: false  },
  {    title: 'Мона',           linkPath: null,                                 parent: 7,    menuValue: 0,    enabled: false  },
  {    title: 'Нёвиллет',       linkPath: null,                                 parent: 7,    menuValue: 0,    enabled: false  },
  {    title: 'Нилу',           linkPath: null,                                 parent: 7,    menuValue: 0,    enabled: false  },
  {    title: 'Син Цю',         linkPath: null,                                 parent: 7,    menuValue: 0,    enabled: false  },
  {    title: 'Тарталья',       linkPath: null,                                 parent: 7,    menuValue: 0,    enabled: false  },
  {    title: 'Фурина',         linkPath: null,                                 parent: 7,    menuValue: 0,    enabled: false  },
  
  {    title: 'Пиро',           linkPath: null,                                 parent: 2,    menuValue: 8,    enabled: true  },
  {    title: 'Беннет',         linkPath: null,                                 parent: 8,    menuValue: 0,    enabled: false  },
  {    title: 'Дилюк',          linkPath: 'content/characters/diluc.html',      parent: 8,    menuValue: 0,    enabled: true  },
  {    title: 'Дэхья',          linkPath: null,                                 parent: 8,    menuValue: 0,    enabled: false  },
  {    title: 'Ёимия',          linkPath: null,                                 parent: 8,    menuValue: 0,    enabled: false  },
  {    title: 'Кли',            linkPath: null,                                 parent: 8,    menuValue: 0,    enabled: false  },
  {    title: 'Лини',           linkPath: null,                                 parent: 8,    menuValue: 0,    enabled: false  },
  {    title: 'Синь Янь',       linkPath: null,                                 parent: 8,    menuValue: 0,    enabled: false  },
  {    title: 'Сян Лин',        linkPath: null,                                 parent: 8,    menuValue: 0,    enabled: false  },
  {    title: 'Тома',           linkPath: null,                                 parent: 8,    menuValue: 0,    enabled: false  },
  {    title: 'Ху Тао',         linkPath: null,                                 parent: 8,    menuValue: 0,    enabled: false  },
  {    title: 'Эмбер',          linkPath: null,                                 parent: 8,    menuValue: 0,    enabled: false  },
  {    title: 'Янь Фэй',        linkPath: null,                                 parent: 8,    menuValue: 0,    enabled: false  },

  {    title: 'Крио',           linkPath: null,                                 parent: 2,    menuValue: 9,    enabled: true  },
  {    title: 'Аяка',           linkPath: null,                                 parent: 9,    menuValue: 0,    enabled: false  },
  {    title: 'Гань Юй',        linkPath: null,                                 parent: 9,    menuValue: 0,    enabled: false  },
  {    title: 'Диона',          linkPath: null,                                 parent: 9,    menuValue: 0,    enabled: false  },
  {    title: 'Кэйа',           linkPath: null,                                 parent: 9,    menuValue: 0,    enabled: false  },
  {    title: 'Лайла',          linkPath: null,                                 parent: 9,    menuValue: 0,    enabled: false  },
  {    title: 'Мика',           linkPath: null,                                 parent: 9,    menuValue: 0,    enabled: false  },
  {    title: 'Ризли',          linkPath: null,                                 parent: 9,    menuValue: 0,    enabled: false  },
  {    title: 'Розария',        linkPath: null,                                 parent: 9,    menuValue: 0,    enabled: false  },
  {    title: 'Фремине',        linkPath: null,                                 parent: 9,    menuValue: 0,    enabled: false  },
  {    title: 'Ци Ци',          linkPath: null,                                 parent: 9,    menuValue: 0,    enabled: false  },
  {    title: 'Чун Юнь',        linkPath: null,                                 parent: 9,    menuValue: 0,    enabled: false  },
  {    title: 'Шарлотта',       linkPath: null,                                 parent: 9,    menuValue: 0,    enabled: false  },
  {    title: 'Шэнь Хэ',        linkPath: null,                                 parent: 9,    menuValue: 0,    enabled: false  },
  {    title: 'Эола',           linkPath: null,                                 parent: 9,    menuValue: 0,    enabled: false  },

];

function InitiolizeSubSubMenu()
{
  // Добавляем событие для открытия подменю
  $('li.dropdown-submenu a[data-toggle="dropdown"]').on('click', function (event) {
    event.preventDefault();
    event.stopPropagation();
    $('li.dropdown-submenu').not($(this).parent()).removeClass('open');
    $(this).parent().toggleClass('open');
  });
}

function CreateSubSubMenu(currentPath, parentElement)
{
  submenu = mainMenu.filter(element => element.parent == parentElement.menuValue);
  var li = document.createElement('li');
  if (submenu.length == 0) {
     var al = document.createElement('a');
     al.innerHTML = parentElement.title;
     al.setAttribute('href', parentElement.linkPath != null ? currentPath + parentElement.linkPath : '#');
     li.appendChild(al);
     return li;
  }
  // создание элемента с подменю
  li.classList.add("dropdown-submenu");

  //создаем ссылку на под меню
  var al1 = document.createElement('a');
  al1.innerHTML = parentElement.title;
  al1.setAttribute('href', '#'); // element.linkPath != null ? currentPath + element.linkPath : '#'
  al1.setAttribute("data-toggle", "dropdown");
  al1.setAttribute("role", "button");
  al1.setAttribute("aria-haspopup", "true");
  al1.setAttribute("aria-expanded", "false");
  al1.classList.add("dropdown-toggle");
  li.appendChild(al1);

  var ul1 = document.createElement('ul');
  ul1.classList.add("dropdown-menu");

  submenu.forEach(element => {
    // создание пункта меню
    var li1 = document.createElement('li');
    if (!element.enabled) {
      li1.classList.add("disabled");
    }
    path = element.linkPath != null ? currentPath + element.linkPath : '#';
    li1.innerHTML = "<a href='" + path + "'>" + element.title + "</a>";
    ul1.appendChild(li1);
  });
  li.appendChild(ul1);

  return li;
}

function CreateSubMenu(currentPath, parent) {

  submenu = mainMenu.filter(element => element.parent == parent);
  if (submenu.length == 0) return;

  let i = 1;
  var ul = document.createElement('ul');
  ul.classList.add("dropdown-menu");
  submenu.forEach(element => {
    // создание пункта меню

    if (element.menuValue != 0) {
      ul.appendChild(CreateSubSubMenu(currentPath, element));
    }
    else 
    {
      var li = document.createElement('li');
      if (!element.enabled) {
        li.classList.add("disabled");
      }
  
      var al = document.createElement('a');
      al.innerHTML = element.title;
      al.setAttribute('href', element.linkPath != null ? currentPath + element.linkPath : '#');
      li.appendChild(al);
      ul.appendChild(li);
  
      // li.appendChild(ul1);
  
      i += 1;
      if (i <= submenu.length) {
        // создание divider
        li = document.createElement('li');
        li.classList.add("divider");
        li.setAttribute("role", "separator");
        ul.appendChild(li);
      }
    }
  });

  return ul;
}

function CreateMenu(currentPath) {
  const $evenLi = document.querySelectorAll('[data-toggle="dropdown"]');
  // создадим пустой фрагмент
  $evenLi.forEach((elem) => {
    parent = elem.getAttribute('data-menu');
    if (parent != null) {
      elem.after(CreateSubMenu(currentPath, parent));
    }
  });
  InitiolizeSubSubMenu();
}




