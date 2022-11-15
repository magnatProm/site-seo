const modol_info = [
  {
    "img": './img/flatline.png',
    "header": 'Социальные сети',
    "text": 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur optio excepturi tempore voluptas temporibus, repellat est at cum perferendis obcaecati? Molestias omnis soluta molestiae doloremque. Odit adipisci deleniti eaque facere.',
    "id": 1,
  },
  {
    "img": './img/Rectangle.png',
    "header": 'Реклама в Google',
    "text": 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur optio excepturi tempore voluptas temporibus, repellat est at cum perferendis obcaecati? Molestias omnis soluta molestiae doloremque. Odit adipisci deleniti eaque facere.',
    "id": 2,
  },
  {
    "img": './img/Group.png',
    "header": 'SEO продвижение',
    "text": 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur optio excepturi tempore voluptas temporibus, repellat est at cum perferendis obcaecati? Molestias omnis soluta molestiae doloremque. Odit adipisci deleniti eaque facere.',
    "id": 3,
  },
]


document.querySelector('.btn-menu').addEventListener('click', function () {
  this.classList.toggle('btn-menu_active');
  document.querySelector('.nav__menu').classList.toggle('nav__menu_active');
  document.querySelector('.nav__left').classList.toggle('nav__left_active');
})
document.querySelector('.black-btn').addEventListener('click', () => {
  document.querySelector('body').classList.toggle('black');
})

document.querySelector('.contacts__max').addEventListener('click', () => {
  document.querySelector('.contacts__blokc').classList.toggle('active');
  const checkbox = document.querySelector('.contacts__checkbox').checked;
  console.log(checkbox)
})


// ________
// модалное окно
const modal = document.querySelector('.modal'),
  modal_close = document.querySelector('[data-close]');

function close_modal() {
  modal.classList.remove('modal__active')
  document.body.style.overflow = '';

  let modal_content_delete = document.querySelectorAll('.modal_content_info');
  modal_content_delete[0].parentNode.removeChild(modal_content_delete[0]);
}

modal_close.addEventListener('click', close_modal)

modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    close_modal();
  }
})
// /модалное окно
// ________

window.addEventListener('click', (event) => {

  if (event.target.closest('.btn-main')) {
    event.target.classList.toggle('btn-main_active')
  }

  if (event.target.closest('[data-number]')) {
    modal.classList.add('modal__active')
    document.body.style.overflow = 'hidden';

    modol_info.forEach((item) => {
      if (item.id == event.target.getAttribute('data-number'))
        document.querySelector('.modal__content').insertAdjacentHTML("beforeend",
          `
      <div class="modal_content_info">
      <img src="${item.img}" alt="info">
      <h4>${item.header}</h4>
      <p>${item.text}</p>
      </div>
      `
        );
    })
  }
})



// форма новостей

const scrollContainer = document.querySelector(".news__carousel");

scrollContainer.addEventListener("wheel", (event) => {
  event.preventDefault();
  scrollContainer.scrollLeft += event.deltaY;
});

document.querySelector('.news__btn').addEventListener('click', news)

function news() {

  const news = document.querySelector('.news__carousel'),
        news__item = document.querySelectorAll('.news__item').length,
        text = 'SOS! Бизнес стонет и скрипит под давлением экономической нестабильности!';
  let text_2 = [],
      text_3 = [],
      re = /\s* \s*/,
      nameList,
      number = 0,
      i = 0;

  document.querySelector('.news').classList.remove('news__wrapper');
  document.querySelector('.news__inner').classList.add('news__wrapper');
  document.querySelector('.news__inner').style = "margin-right: inherit;";
  news.style = "overflow-x: scroll;";

  nameList = text.split(re);

  while (number < nameList.length) {
    text_2.push(Math.floor(Math.random() * nameList.length))

    number++;
  }

  text_2.forEach((item, i) => {
    text_3.push(nameList[item])
  })

  // _____________

  console.log(news__item);


  if (news__item > 30) {
    alert('все');
    return;
  }

  while (i < 3) {


    news.insertAdjacentHTML("afterbegin", `
                <article class="news__item">
                        <div class="news__content">
                            <img src="./img/Rectangle.png" alt="img">
                            <h4 class="news__title">${text_3.join(' ')}</h4>
                        </div>
                    </article>
                `);
    i++;
  }
}


let observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log(entry);
      entry.target.classList.add('effect-title')
      observer.unobserve(entry.target);
    }
  });
}, { rootMargin: "0px 0px -200px 0px" });
document.querySelectorAll('.box-title__title').forEach(effect => { observer.observe(effect) });


window.onload = () => {
  const options = {
    root: null,
    rootMargin: '40px 0px -40px 0px',
    threshold: 0.5
  }

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const lazyImg = entry.target

        lazyImg.style = "opacity: 1;";

        observer.unobserve(lazyImg)
      }
    })
  }, options)

  const arr = document.querySelectorAll('[class*="item"]')
  arr.forEach(i => {
    observer.observe(i)
  })
}




window.addEventListener('scroll', function () {

  const koScroll = scrollY,
        form = document.querySelector('.proposal__form'),
        timer = document.querySelector('.timer '),
        timer_2 = document.querySelectorAll('.timer__number')
  let i = 0;

  if (koScroll > form.offsetTop - 600) {
    form.style.transition = "1s all";
    form.style.transform = "translateX(0em)";
  }

  if (koScroll > timer.offsetTop - 400) {

    const timerId = setInterval(logger, 200);
    function logger() {
      i++;
      timer_2[0].innerHTML = i;

      if (i < 29) {
        timer_2[1].innerHTML = i;
      }
      if (i < 40) {
        timer_2[2].innerHTML = i;
      }
      if (i < 33) {
        timer_2[3].innerHTML = i;
      }

      if (i == 45) {
        clearInterval(timerId)
      }
    }
  }
})