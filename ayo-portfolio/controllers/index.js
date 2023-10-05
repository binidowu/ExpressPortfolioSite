// This module.exports.home function is used to handle requests to the "home" route.
module.exports.home = (req, res) => {
    // It renders the "index" template and sets the title to "Ayomide's Portfolio Website."
    res.render('index', {
        title: 'Home',
        currentPage: 'Index'
    });
}

module.exports.about = (req, res) => {
    res.render('about', {
        title: "About",
        currentPage: 'About'
    });
}

module.exports.projects = (req, res) => {
    res.render('projects', {
        title: "Projects",
        currentPage: 'Projects'
    });
}

module.exports.services = (req, res) => {
    res.render('services', {
        title: "Services",
        currentPage: 'Services'
    });
}

module.exports.contact = (req, res) => {
    res.render('contact', {
        title: "Contact",
        currentPage: 'Contact'
    });
}
