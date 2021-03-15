import React, { Component, useState } from 'react';
import NevigationAndHeaderTemplate from '../component/nevigation-and-header/nevigation-and-header';

class NavigationAndHeader extends Component {

  state = {
    isToggleClicked: false
  }

  onToggleClick = (event) => {
    event.preventDefault();
    this.setState({ isToggleClicked: !this.state.isToggleClicked });
  }
  render() {
    return (
      <div>
        <NevigationAndHeaderTemplate nevState={this.state} onToggleClick={this.onToggleClick} />
      </div>
    )
  }
}

export default NavigationAndHeader;

// var menu = document.querySelector('.nav__list');
// var burger = document.querySelector('.burger');
// var doc = $(document);
// var l = $('.scrolly');
// var panel = $('.panel');
// var vh = $(window).height();

// var openMenu = function() {
//   burger.classList.toggle('burger--active');
//   menu.classList.toggle('nav__list--active');
// };

// // reveal content of first panel by default
// panel.eq(0).find('.panel__content').addClass('panel__content--active');

// var scrollFx = function() {
//   var ds = doc.scrollTop();
//   var of = vh / 4;
  
//   // if the panel is in the viewport, reveal the content, if not, hide it.
//   for (var i = 0; i < panel.length; i++) {
//     if (panel.eq(i).offset().top < ds+of) {
//      panel
//        .eq(i)
//        .find('.panel__content')
//        .addClass('panel__content--active');
//     } else {
//       panel
//         .eq(i)
//         .find('.panel__content')
//         .removeClass('panel__content--active')
//     }
//   }
// };

// var scrolly = function(e) {
//   e.preventDefault();
//   var target = this.hash;
//   var $target = $(target);

//   $('html, body').stop().animate({
//       'scrollTop': $target.offset().top
//   }, 300, 'swing', function () {
//       window.location.hash = target;
//   });
// }

// var init = function() {
//   burger.addEventListener('click', openMenu, false);
//   window.addEventListener('scroll', scrollFx, false);
//   window.addEventListener('load', scrollFx, false);
//   $('a[href^="#"]').on('click',scrolly);
// };

// doc.on('ready', init);
