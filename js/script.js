window.addEventListener('DOMContentLoaded', function() {
  try {
    $('.jq-photos').magnificPopup({
      delegate: 'a',
      type: 'image',
      closeOnContentClick: false,
      closeBtnInside: false,
      mainClass: 'mfp-with-zoom mfp-img-mobile',
      image: {
        verticalFit: true,
        titleSrc: function(item) {
          return item.el.attr('title') ;
        }
      },
      gallery: {
        enabled: true
      },
      zoom: {
        enabled: true,
        duration: 300, // don't foget to change the duration also in CSS
        opener: function(element) {
          return element.find('img');
        }
      }

    });

    const burgerMenu = () => {
      const menu = document.querySelector('.js-mobile-nav');

      document.addEventListener('click', (e) => {
          if (e.target.closest('.js-burger-btn')) {
              menu.classList.add('opened');
          } else if (e.target === menu) {
              return;
          } else {
              menu.classList.remove('opened');
          }
      });
    }
    burgerMenu();

  } catch (error) {
    console.error(error);
  }
});
