// 等待 DOM 載入完成
document.addEventListener('DOMContentLoaded', function() {
    // 平滑滾動
    initSmoothScroll();
    
    // 響應式導航
    initResponsiveNav();
});

// 響應式導航初始化
function initResponsiveNav() {
    // 滾動時的導航效果
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }, false);
}

// 錯誤處理
window.addEventListener('error', function(event) {
    console.error('發生錯誤:', event.error);
});
