// 영상 viewport가 적당한 스크롤값이 오면 안보이게
window.addEventListener("scroll", function () {
    const video = document.querySelector(".bg-video");
    const scrollY = window.scrollY;
    const viewportHeight = window.innerHeight;

    if (scrollY > viewportHeight * 2.2) {
        video.style.opacity = "0";
        video.style.visibility = "hidden";
    } else {
        video.style.opacity = "1";
        video.style.visibility = "visible";
    }
});

// 맨위 nav가 스크롤 60하면 내려오게
window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
        document.body.classList.add('scrolled');
    } else {
        document.body.classList.remove('scrolled');
    }
});
  //login
  document.addEventListener("DOMContentLoaded", function () {
    const loginBtn = document.getElementById("loginBtn");
    loginBtn.addEventListener("click", function () {
        alert("서비스 기간이 아닙니다.");
    });
});

// 햄버거 메뉴
document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const sidebarMenu = document.getElementById("sidebarMenu");

    hamburger.addEventListener("click", function () {
        sidebarMenu.classList.toggle("active");
    });

    hamburger.addEventListener("mouseenter", function () {
        sidebarMenu.classList.add("active");
    });

    sidebarMenu.addEventListener("mouseenter", function () {
        sidebarMenu.classList.add("active");
    });

    sidebarMenu.addEventListener("mouseleave", function () {
        sidebarMenu.classList.remove("active");
    });

    document.addEventListener("click", function (event) {
        if (!sidebarMenu.contains(event.target) && !hamburger.contains(event.target)) {
            sidebarMenu.classList.remove("active");
        }
    });
});


// more-btn 버튼 클릭 시 alert 창 띄우기
document.addEventListener("DOMContentLoaded", function () {
    const moreBtns = document.querySelectorAll(".more-btn");

    moreBtns.forEach(btn => {
        btn.addEventListener("click", function () {
            alert("이 사이트는 학습 목적으로 제작된 비상업적 카피사이트입니다.");
        });
    });
});

//scroll ~ top btn
document.addEventListener("DOMContentLoaded", function () {
    const scrollTopBtn = document.getElementById("scrollTop");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 200) {
            scrollTopBtn.classList.add("show");
        } else {
            scrollTopBtn.classList.remove("show");
        }
    });

    scrollTopBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});

// 푸터 중 연관사이트 토글, + or - 버튼 상태 텍스트
document.addEventListener("DOMContentLoaded", function () {
    const developerSites = document.getElementById("developerSites");
    const dropdownMenu = document.getElementById("dropdownMenu");
    const toggleIcon = document.getElementById("toggleIcon");

    developerSites.addEventListener("click", function () {
        this.classList.toggle("active");

        if (this.classList.contains("active")) {
            toggleIcon.textContent = "-";
        } else {
            toggleIcon.textContent = "+";
        }
    });

    // 메뉴 외부 클릭 시 닫기
    document.addEventListener("click", function (event) {
        if (!developerSites.contains(event.target)) {
            developerSites.classList.remove("active");
            toggleIcon.textContent = "+";
        }
    });
});