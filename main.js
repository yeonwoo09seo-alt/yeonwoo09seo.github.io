document.getElementById('beginner-btn').addEventListener('click', function() {
    window.location.href = 'beginner.html';
});
document.getElementById('intermediate-btn').addEventListener('click', function() {
    window.location.href = 'intermediate.html';
});
document.getElementById('advanced-btn').addEventListener('click', function() {
    window.location.href = 'advanced.html';
});
document.getElementById('glossary-btn').addEventListener('click', function() {
    window.location.href = 'glossary.html';
});
document.getElementById('master-btn').addEventListener('click', function() {
    window.location.href = 'master.html';
});
document.getElementById('puzzles-btn').addEventListener('click', function() {
    window.location.href = 'puzzles.html';
});
document.getElementById('news-btn').addEventListener('click', function() {
    window.location.href = 'news.html';
});
document.addEventListener('DOMContentLoaded', function() {
    
    const sidebar = document.getElementById('mySidebar');
    const toggleButton = document.getElementById('toggleButton');
    // const mainContent = document.getElementById('mainContent'); // 메인 콘텐츠도 토글해야 한다면 사용

    if (sidebar && toggleButton) {
        toggleButton.addEventListener('click', function() {
            
            // 1. 사이드바에 'collapsed' 클래스를 토글합니다.
            sidebar.classList.toggle('collapsed');
            
            // 2. 버튼 아이콘을 변경하여 현재 상태를 시각적으로 나타냅니다.
            if (sidebar.classList.contains('collapsed')) {
                // 접혔을 때 (펼치라는 신호)
                toggleButton.querySelector('span').textContent = '▶';
            } else {
                // 펼쳤을 때 (접으라는 신호)
                toggleButton.querySelector('span').textContent = '◀';
            }
            
            /* // 3. 메인 콘텐츠에 스타일을 적용하여 사이드바 너비 변화에 반응하도록 할 수도 있습니다.
            // 하지만 flexbox를 사용하면 main-content는 자동으로 남은 공간을 채우므로 
            // 이 설정이 필요 없을 수 있습니다.
            if (mainContent) {
                // mainContent.classList.toggle('sidebar-closed'); 
            }
            */
        });
    }
});