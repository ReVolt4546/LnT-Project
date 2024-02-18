function changeTab(tabId) {
    const tabs = document.querySelectorAll(".tab-panel");
    tabs.forEach((tab) => {
        tab.classList.remove("active");
    });

    const selectedTab = document.getElementById(tabId);
    selectedTab.classList.add("active");
}
