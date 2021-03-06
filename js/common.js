$(document).ready(function() {
  if (!("ontouchstart" in document.documentElement)) {
    document.documentElement.className += "no-touch";
  }


  // content  to 100% if we don't have sidebar nav
  var window_width = $(window).width();
  var submenu = $(".submenu").length;
  if (window_width <= 480) {
      $('.action-item h3').on('click', function(e) {
           e.preventDefault();
           $(this).toggleClass('is-open').next('.mobile-closed-content').toggle();
       });
  }
  else if ((window_width <= 1024) && submenu == 0) {
    $(".sidebar_l, .content").css({"width": "100%","float":"none"});
  }
  else if ((window_width <= 768) && submenu !== 0) {
    $(".sidebar_l, .content").css({"width": "100%","float":"none"});
  }
  else {
    $(".sidebar_l").css({"width": "24.4%","float":"left"});
    $(".content").css({"width": "75%","float":"right"});
  }
  $(window).resize(function(){
    var window_width = $(window).width();
    var submenu = $(".submenu").length;
    if ((window_width <= 1024) && submenu == 0) {
      $(".sidebar_l, .content").css({"width": "100%","float":"none"});
    }
    else if ((window_width <= 768) && submenu !== 0) {
      $(".sidebar_l, .content").css({"width": "100%","float":"none"});
    }
    else {
      $(".sidebar_l").css({"width": "24.4%","float":"left"});
      $(".content").css({"width": "75%","float":"right"});
    }
  });

  var sidebar = $(".sidebar").length;
  if (sidebar == 0) {
    $(".content").css({"width": "100%","float":"none"});
  }
  $(window).resize(function(){
    var sidebar = $(".sidebar").length;
    if (sidebar == 0) {
      $(".content").css({"width": "100%","float":"none"});
    }
  });

  $('.js-slider').cycle({ 
      fx:     'fade',
      timeout: 2000,
      speed: 1000,
      pager:  '.js-main-nav'
  });
  $('.js-slider-comp').cycle({ 
      fx:     'fade',
      timeout: 2000,
      speed: 1000,
      pager:  '.js-our-comp-nav'
  });
  $('.js-scroll-shop').scrollable({
      next:'.next_shop',
      prev:'.prev_shop'
  });
  $('.js-actions-slide').scrollable({
      next:'.next_action',
      prev:'.prev_action'
  });
  $('.js-slider-cont').cycle({ 
      fx:     'fade',
      timeout: 2000,
      speed: 1000,
      pager:  '.js-main-nav'
  });
   if ($(".js-scroll-shop").length>0) {
     // Get the Scrollable control
     var scrollable_list_1 = $(".js-scroll-shop").data("scrollable");
     // Set to the number of visible items
     var number_list = 5;
     // Handle the Scrollable control's onSeek event
     scrollable_list_1.onSeek(function(event, index) {
       // Check to see if we're at the end
       if (this.getIndex() >= this.getSize() - number_list) {      // Disable the Next link
         $(".next_shop").addClass("disabled");
       }
     });
     // Handle the Scrollable control's onBeforeSeek event
     scrollable_list_1.onBeforeSeek(function(event, index) {
       // Check to see if we're at the end
       if (this.getIndex() >= this.getSize() - number_list) { 
         // Check to see if we're trying to move forward
         if (index > this.getIndex()) {
           // Cancel navigation
           return false;
         }
       }
     });
   }

   // show/hide popup on map
   $(".popup__close").click(function(){
      $(this).prev().parent().fadeOut();
   });

   // play video
   $(".video__play").click(function(){
      $(this).prev().hide();
      $(this).next().show();
      $(this).hide();
   });

   // show-hide subnav
   $(".menu-key").click(function(){
     if ($(".menu-key").hasClass("menu-key_act")) {
          $(this).removeClass("menu-key_act");
          $(".menu ul").hide();
          $(".menu").removeClass("menu_act");
      }
     else {
          $(this).addClass("menu-key_act");
          $(".menu ul").show();
          $(".menu").addClass("menu_act");
      }
   });

  // select
  $(".select select").change(function(){
     var select_val = $(this).val();
     $(this).prev().html(select_val);
  });

  // tabs
  $(".tab-cont").hide();
  $(".tab1").show();
  $(".tab ul li:first").addClass("tab__active");
  $(".tab li").click(function(){
    $(".tab li").removeClass("tab__active");
    $(this).addClass("tab__active");
    var act_tab = $(this).attr("data-tab");
    $(".tab-cont").hide();
    $(act_tab).show();
  });

  // show/hide select list
  $(".select-list div").click(function(){
    if ($(this).hasClass("select-list-act")) {
      $(this).next().slideUp("fast");
      $(this).removeClass("select-list-act");
    }
    else {
      $(this).addClass("select-list-act");
      $(this).next().slideDown("fast");
    }
  });
  $(".select-list li").click(function(){
    $(this).parent().prev().removeClass("select-list-act");
    $(this).parent().slideUp("fast");
    var city = $(this).text();
    $(this).parent().prev().children("b").text(city);
  });
  $(".select-list_ukr li").click(function(){
    $(this).parent().slideUp("fast");
    var city = $(this).text();
    $(this).parent().prev().parent().parent().next().text(city);
  });
  
  // show/hide answer
  $(".js-quest-body").hide();
  $(".question__answer-link").click(function(){
    $(".js-quest-body").slideUp("fast");
    if ($(this).hasClass("question__answer-link-act")) {
      $(this).removeClass("question__answer-link-act");
      $(this).parent().parent().removeClass("question_act");
      $(this).parent().next().slideUp("fast");
    }
    else {
      $(this).addClass("question__answer-link-act");
      $(this).parent().parent().addClass("question_act");
      $(this).parent().next().slideDown("fast");
    }

    return false;
  });
  $(".question__answer-link").each(function(){
    if ($(this).hasClass("question__answer-link-act")) {
        $(this).parent().parent().addClass("question_act");
    }
  });

  // show/hide all shopes
  $(".js-hidden-shop").hide();
  $(".js-more-shopes").click(function(){
    $(this).parent().hide();
    $(this).parent().parent().children(".js-hidden-shop").show();
    return false;
  });

  // show/hide hidden fancybox photos
  $(".js-hidden-photo").hide();
  $(".js-more-photos").click(function(){
    $(this).hide();
    $(this).parent().children(".js-hidden-photo").show();
    return false;
  });

  // show/hide promo telephone
  $(".show-tel-hidden").hide();
  $(".show_tel_click").click(function(){
    $(this).parent().hide();
    $(this).parent().parent().children(".show-tel-hidden").show();
    return false;
  });

  // fancybox gallery
  var width_test = $(".fancybox-test").width();
  if (width_test == 0) {}
  else {
    $('.js-fancy a').fancybox({
          openEffect  : 'none',
          closeEffect : 'none',
          prevEffect : 'none',
          nextEffect : 'none',

          closeBtn  : true,
          padding: [30,40,30,40],
          helpers : {
            title : {
              type : 'inside'
            },
            buttons : {}
          },

          afterLoad : function() {
            this.title = '<span class="fancy-counter">' + '<b>' + (this.index + 1) + '</b>' + ' / ' + '<span>' + this.group.length + '</span>' + '</span>' + (this.title ? '' + '<strong>' + this.title : '' + '</strong>');
          }
    });
  }
  // get title
  $(".cont-gallery img").each(function(){
    var title = $(this).parent().attr("title") || $(this).attr("title");
    $(this).next().text(title);
  });
  var img_caption = $(".cont-gallery a:first").attr("title");
  $(".cont-gallery span:first").text(img_caption);
  
   
  
  
  
  
  

});