document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.app-section');
  const links = document.querySelectorAll('.nav-link');

  function showSection(id) {
    // 隐藏全部
    sections.forEach(sec => sec.classList.remove('active'));
    // 显示目标
    document.getElementById(id).classList.add('active');
    // 更新 URL hash
    history.pushState(null, '', '#' + id);
    // 回到页面顶部
    window.scrollTo({ top: 0, left: 0 });
  }

  // 默认显示 home（或根据 URL hash）
  const start = location.hash ? location.hash.substring(1) : 'home';
  showSection(start);

  // 点击导航时切换
  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = link.getAttribute('href').substring(1);
      showSection(target);
    });
  });

  // 浏览器返回/前进
  window.addEventListener('popstate', () => {
    const id = location.hash.substring(1) || 'home';
    showSection(id);
  });
});
