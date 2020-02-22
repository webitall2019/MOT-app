document.addEventListener("DOMContentLoaded", function(){
  var arrow_down = document.querySelectorAll('.mot-history__box-info-arrow');
  var history_box = document.querySelectorAll('.mot-history__box-info');
  const history_box_more_info = document.querySelectorAll('.history__box-all-info');

  for(let i = 0; i < history_box.length; i++){
    history_box[i].addEventListener('click', function(){
      this.childNodes[2].nextElementSibling.classList.toggle('hide');
      if(this.childNodes[2].nextElementSibling.classList.contains('hide')){
        arrow_down[i].setAttribute('src','images/arrow-down.svg');
      }
      else{
        arrow_down[i].setAttribute('src','images/ic-arrow-up.svg');
      }
    });
  }
  
  /* header drop-down */
  var header__drop_down = document.querySelector('.header__drop-down');
  
  header__drop_down.addEventListener('click', function(){
    var drop_down_list = document.querySelector('.drop-down-list');
    console.log(drop_down_list);
    drop_down_list.classList.toggle('drop-down-show');
  })
  /* switcher */
  var switcher_btn = document.querySelector('.switcher_btn');
  var switcher_inside = document.querySelector('.switcher_btn-inside');
  
  switcher_btn.addEventListener('click', function(){
    this.style.backgroundColor='transparent';
    switcher_inside.classList.toggle('switcher-move');
    if(!switcher_inside.classList.contains('switcher-move')){
      this.style.backgroundColor='#3973e6';
    }
  })
  /* info modal */
  var info_btn = document.querySelectorAll('.right__button');
  var info_modal_box = document.querySelectorAll('.info-modal');
  var body = document.querySelector('body');
  var body_wrap = document.querySelector('body-wrap');
  var got_it_btn = document.querySelectorAll('.info-modal__btn');
  for(let i=0; i < info_btn.length; i++ ){
    
    info_btn[i].addEventListener('click', function(){
      body.classList.toggle('body-wrap');
      info_modal_box[i].classList.toggle('hide');
    });
    /* got_it_btn[i].addEventListener('click', function(){
      body.classList.remove('body-wrap');
    }) */
    
  }
  
  
  
});