const alterPage = () => {
    // Get homepage container from page
    const homepage_elements = document.getElementsByClassName("homepage-container");
    if (homepage_elements.length === 0) return;
    const homepage = homepage_elements[0];

    // Delete annoying announcement banner
    const homepageCols = homepage.getElementsByClassName("homepage-col-12");
    if (homepageCols.length === 0) return;
    const announcementBanner = homepageCols[0];
    announcementBanner.style.display = "none";

    // Get main content container from homepage container
    const rows = homepage.getElementsByClassName("homepage-row");
    if (rows.length === 0) return;

    // Make columns full width
    const content = rows[0];
    const cols = content.getElementsByClassName("homepage-col-6");
    for (let col of cols) {
        col.style.width = "100%";
    }

    // Get announcements and deadlines from content
    const extras = cols[1];
    const pathParts = window.location.href.split('/');
    if (pathParts[pathParts.length - 1] === "home") {
        const helpBanner = extras.children[0];
        extras.children[0].remove()
        extras.appendChild(helpBanner)
    }
    const temp = extras.children[0];
    extras.children[0].remove();
    extras.appendChild(temp, extras.children[0]);

}

alterPage();
