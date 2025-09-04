// 페이지가 로드되면 content.js의 데이터를 기반으로 콘텐츠를 표시합니다.
document.addEventListener('DOMContentLoaded', function() {
    // heroData는 content.js 파일에 정의되어 있습니다.
    if (typeof heroData !== 'undefined') {
        const titleEl = document.getElementById('hero-title');
        const descriptionEl = document.getElementById('hero-description');
        const periodEl = document.getElementById('hero-period');

        if (titleEl) titleEl.innerHTML = heroData.title;
        if (descriptionEl) descriptionEl.innerHTML = heroData.description;
        if (periodEl) periodEl.innerHTML = heroData.period;
    } else {
        console.error('heroData를 찾을 수 없습니다. assets/js/content.js 파일이 올바르게 로드되었는지 확인하세요.');
        const heroContent = document.querySelector('.hero-content');
        if(heroContent) heroContent.innerHTML = "<h2>콘텐츠를 불러오는 데 실패했습니다.</h2>";
    }
});