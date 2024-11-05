// ハンバーガーメニュー
document.getElementById("hamburger").addEventListener("click", function () {
  document.querySelector(".sp-nav").classList.toggle("open");
  document.body.classList.toggle("hamburger-active");
});

// トップに戻るボタン
let pageTop = document.getElementById("pagetop");
window.addEventListener("scroll", () => {
  // スクロール量
  var scrollVolY = window.scrollY;
  /**
   * ページ上端からのスクロール量が
   * 100pxを超えたらTOPボタンを表示する
   */
  if (scrollVolY > 100) {
    pageTop.classList.add("visible");
  } else {
    pageTop.classList.remove("visible");
  }
});
// TOPボタンがクリックされたらページトップへ遷移する
pageTop.addEventListener("click", () => {
  window.scroll({ top: 0, behavior: "smooth" });
});

// ページスクロール
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate"); // 画面に入ったらアニメーション追加
      observer.unobserve(entry.target); // 1度アニメーションしたら監視を解除
    }
  });
});
// 対象要素を監視開始
const mvTitle = document.querySelector(".mv-title");
observer.observe(mvTitle);
