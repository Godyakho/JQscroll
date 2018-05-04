$('.menuBtnMbl').click(function(){
    $('.accordion').slideToggle();
    $('.accordion').find('.sub').slideUp().siblings().removeClass('open').find('img').attr('src','images/add.png')
  });
  
var scroll = function(el, isAutoUp) {
    this.el = el || {};
    this.isAutoUp = isAutoUp || false;
    var toScroll = this.el.find('.link');
    toScroll.on('click',{el:this.el,isAutoUp:this.isAutoUp},this.ScrollFunc)
  };

  scroll.prototype.ScrollFunc = function(e) {
    var nowLi = $(this);
    nowLi.toggleClass('open');
    nowLi.find('img').attr('src','images/minus.png')
    nowLiCtn = $(this).next();
    nowLiCtn.slideToggle();
    if(!nowLi.hasClass('open')) {
      nowLi.find('img').attr('src','images/add.png')
    }
    if(e.data.isAutoUp) {
      e.data.el.find('.sub').not(nowLiCtn).slideUp().siblings().removeClass('open').find('img').attr('src','images/add.png');
    }
  }

  new scroll($('#accordion'), true);