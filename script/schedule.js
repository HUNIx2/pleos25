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

        // 탭 메뉴 기능
        document.addEventListener("DOMContentLoaded", function () {
            const tabs = document.querySelectorAll(".tab-btn");
            const sections = document.querySelectorAll(".schedule-section");

            tabs.forEach(tab => {
                tab.addEventListener("click", function () {
                    tabs.forEach(t => t.classList.remove("active"));
                    sections.forEach(sec => sec.style.display = "none");

                    this.classList.add("active");
                    document.getElementById(this.dataset.tab).style.display = "block";
                });
            });
        });

        // 탑스크롤
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

            // 메뉴외부 클릭 시 닫기
            document.addEventListener("click", function (event) {
                if (!developerSites.contains(event.target)) {
                    developerSites.classList.remove("active");
                    toggleIcon.textContent = "+";
                }
            });
        });