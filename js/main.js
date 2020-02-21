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
  
});