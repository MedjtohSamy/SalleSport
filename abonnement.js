var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    on: {
      init: function () {
        // Créer des cartes pour chaque slide
        var swiperWrapper = document.querySelector('.swiper-wrapper');
        var slides = swiperWrapper.querySelectorAll('.swiper-slide');
  
        slides.forEach(function(slide) {
          var card = document.createElement('div');
          card.classList.add('card');
        
         /* var image = document.createElement('img');
          image.src = './img/crsclct.jpg' ;*/
        
          var content = document.createElement('div');
          content.classList.add('content');
        
          var title = slide.querySelector('h3').textContent;
          var description = slide.querySelector('p').textContent;
        
          var titleElement = document.createElement('h3');
          titleElement.textContent = title;
        
          var descriptionElement = document.createElement('p');
          descriptionElement.textContent = description;
        
          content.appendChild(titleElement);
          content.appendChild(descriptionElement);
        
          card.appendChild(image);
          card.appendChild(content);
        
          slide.innerHTML = '';
          slide.appendChild(card);
        });
        
      }
    }
  });