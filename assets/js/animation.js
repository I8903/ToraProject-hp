"use strict";

// {
//   function callback(entries, obs) {
//     entries.forEach(entry => {
//       if (!entry.isIntersecting) { //isIntersecting画面上に入ったら。!entry.isIntersecting画面上に入らなかったら。
//         return;
//       }

//       entry.target.classList.add("hero-appear");//画面に入っているとき、classList.add("appear")でappearをつける。CSSで反応する。
//       obs.unobserve(entry.target);//appearを追加したら、監視を止める。
//     });
//   }

//   const observer = new IntersectionObserver(callback,option);   //場所取得
//   const targets = document.querySelector(".hero-animate");  //監視する3つ物取得
  
//   targets.forEach(target => {  //1つ1つバラバラにして
//     observer.observe(target); //observe()でobserverに入ればtargetを監視対象内に
//   });
// }

{
  function callback(entries, obs) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) { //isIntersecting画面上に入ったら。!entry.isIntersecting画面上に入らなかったら。
        return;
      }

      entry.target.classList.add("appear");//画面に入っているとき、classList.add("appear")でappearをつける。CSSで反応する。
      obs.unobserve(entry.target);//appearを追加したら、監視を止める。
    });
  }

    const option = {
    threshold: 0.3,    //画面上に20%超えた場合、appearを追加
  };

  const observer = new IntersectionObserver(callback,option);   //場所取得
  const targets = document.querySelectorAll(".animate");  //監視する3つ物取得
  
  targets.forEach(target => {  //1つ1つバラバラにして
    observer.observe(target); //observe()でobserverに入ればtargetを監視対象内に
  });
}

{
  function uearcallback(entries, obs) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) { //isIntersecting画面上に入ったら。!entry.isIntersecting画面上に入らなかったら。
        return;
      }

      entry.target.classList.add("wppear");//画面に入っているとき、classList.add("appear")でappearをつける。CSSで反応する。
      obs.unobserve(entry.target);//appearを追加したら、監視を止める。
    });
  }

  const option = {
    threshold: 0.2,    //画面上に20%超えた場合、appearを追加
  };

  const Uearobservers = new IntersectionObserver(uearcallback, option);   //場所取得
  const contents = document.querySelectorAll(".content");  //監視する3つ物取得
  
  contents.forEach(content => {  //1つ1つバラバラにして
    Uearobservers.observe(content); //observe()でobserverに入ればtargetを監視対象内に
  });
}