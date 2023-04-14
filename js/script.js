'use strict';

window.addEventListener('DOMContentLoaded', () => {
    const dotsBtn = document.querySelector('.menu-dots');

    moveForward();

    function moveForward() {
        let menuListElements = Array.from(document.querySelectorAll('.menu__list li')),
            invisibleElements = getInvisible(menuListElements),
            hideList = document.querySelector('.hide-list');

        invisibleElements.forEach(item => hideList.appendChild(item));

    }

    function moveBackward() {
        let hideListElements = Array.from(document.querySelectorAll('.hide-list li')),
            menuList = document.querySelector('.menu__list');

        hideListElements.forEach(item => menuList.appendChild(item));
    }

    function getInvisible(listElements) {
        let list = document.querySelector('.menu__list');

        let invisible = listElements.filter(item => {
            if (item.getBoundingClientRect().left + item.getBoundingClientRect().width < list.clientWidth) return item;
        });

        return invisible;
    }

    function restart() {
        moveBackward();
        moveForward();
    }

    function debounce(func, timeout = 250) {
        let timer;
        return (...args) => {
            clearTimeout(timer);
            timer = setTimeout(() => {
                func.apply(this, args);
            }, timeout);
        };
    }

    const processChanges = debounce(() => restart());

    window.addEventListener('resize', (e) => {
        let windowWidth = window.innerWidth;

        if (windowWidth >= 1140 && windowWidth <= 1815) {
            processChanges();
            dotsBtn.classList.remove('hide');
        } else {
            dotsBtn.classList.add('hide');
        }

    });

    // Аккордион
    const menuTitle = document.querySelectorAll('.footer-menu__title'),
        subMenuList = document.querySelectorAll('.footer-submenu__list');

    function accordion(menuTitle, menuList) {
        menuTitle.forEach((item, index) => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    menuList.forEach((menuListItem, i) => {
                        if (index == i) {
                            menuListItem.classList.toggle('active');
                            if (menuListItem.style.maxHeight) {
                                menuListItem.style.maxHeight = null;
                            } else {
                                menuListItem.style.maxHeight = menuListItem.scrollHeight + "px";
                            }
                        }
                    });
                }
            });
        });
    };

    accordion(menuTitle, subMenuList);


    // Бургер меню

    // const burgerBtn = document.querySelector('.burger');
    // const menuContainer = document.querySelector('.header-main__menu'),
    //     menu = document.querySelector('.menu')

    // burgerBtn.addEventListener('click', (e) => {
    //     if (e.target) {
    //         menu.classList.toggle('open-menu')
    //     }
    // })


    // Заугрузка товаров 
    // class ProductCard {
    //     constructor(img, alt, title, availability, article, price, parentSelector, ...classes) {
    //         this.img = img;
    //         this.alt = alt;
    //         this.title = title;
    //         this.availability = availability;
    //         this.article = article;
    //         this.price = price;
    //         this.classes = classes;
    //         this.parent = document.querySelector(parentSelector);
    //     }

    //     render() {
    //         const element = document.createElement('div');

    //         if (this.classes.length === 0) {
    //             this.classes = "product-list__card";
    //             element.classList.add(this.classes);
    //         } else {
    //             this.classes.forEach(className => element.classList.add(className));
    //         }

    //         element.innerHTML = `
    //         <div class="product-card__info">
    //             <a class="product-link_img" href="#">
    //                 <img src=${this.img} alt="${this.alt}">
    //             </a>
    //             <a class="product-link_title" href="#">
    //                 <h4>${this.title}</h4>
    //             </a>
    //             <div class="product-sidebar">
    //                 <div class="product-sidebar__button increase" title="Увеличить"></div>
    //                 <div class="product-sidebar__button fast-buy" title="Покупка в 1 клик"></div>
    //             </div>
    //         </div>
    //         <div class="product-card__description">
    //             <div class="status">${this.availability}</div>
    //             <div class="vendor-code">${this.article}</div>
    //         </div>
    //         <div class="product-card__buy">
    //             <span class="prices-value" data-price='${this.price}'> ₽</span>
    //             <button class="secondary-button">В корзину</button>
    //         </div>
    //         `;
    //         this.parent.append(element);
    //     }
    // }

    // getResource('http://localhost:3000/products')
    //     .then(data => {
    //         data.forEach(({ img, alt, title, availability, article, price }) => {
    //             new ProductCard(img, alt, title, availability, article, price, ".product-list ").render();
    //         });
    //     });

    // async function getResource(url) {
    //     let res = await fetch(url);

    //     if (!res.ok) {
    //         throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    //     }

    //     return await res.json();
    // }
});