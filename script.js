// 移动端导航菜单
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // 关闭移动端菜单当点击链接时
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
});

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 标签页切换
document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetCategory = this.getAttribute('data-category');

            // 移除所有活动状态
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // 添加活动状态到当前选中的标签
            this.classList.add('active');
            const targetContent = document.getElementById(targetCategory);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
});

// 滚动时的导航栏效果
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
    }
});

// 图片懒加载
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
});

// 添加滚动动画
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeIn 0.6s ease-in-out';
            entry.target.style.opacity = '1';
        }
    });
}, observerOptions);

// 观察需要动画的元素
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.feature-card, .example-card, .tip-card, .resource-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });
});

// 复制提示词功能
document.addEventListener('DOMContentLoaded', function() {
    const copyButtons = document.querySelectorAll('.copy-prompt');

    copyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const promptText = this.getAttribute('data-prompt');
            navigator.clipboard.writeText(promptText).then(() => {
                // 临时更改按钮文本
                const originalText = this.innerHTML;
                this.innerHTML = '<i class="fas fa-check"></i> 已复制!';
                this.classList.add('copied');

                setTimeout(() => {
                    this.innerHTML = originalText;
                    this.classList.remove('copied');
                }, 2000);
            }).catch(err => {
                console.error('复制失败:', err);
            });
        });
    });
});

// 搜索功能（可选）
function searchPrompts(query) {
    const examples = document.querySelectorAll('.example-card');
    const searchQuery = query.toLowerCase();

    examples.forEach(example => {
        const title = example.querySelector('.example-title').textContent.toLowerCase();
        const description = example.querySelector('.example-description').textContent.toLowerCase();
        const prompt = example.querySelector('.prompt-text').textContent.toLowerCase();

        if (title.includes(searchQuery) ||
            description.includes(searchQuery) ||
            prompt.includes(searchQuery)) {
            example.style.display = 'block';
        } else {
            example.style.display = 'none';
        }
    });
}

// 统计功能（可选）
function trackView(element) {
    // 这里可以添加分析代码
    console.log('Viewed:', element);
}

// 错误处理
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
});

// 性能优化
document.addEventListener('DOMContentLoaded', function() {
    // 预加载关键图片
    const criticalImages = document.querySelectorAll('.hero-image img, .feature-icon img');
    criticalImages.forEach(img => {
        if (img.dataset.src) {
            img.src = img.dataset.src;
        }
    });
});

// 主题切换功能（可选）
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
}

// 加载保存的主题
document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }
});

console.log('Nano Banana Pro 提示词整理网站已加载完成!');