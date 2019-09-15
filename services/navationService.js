const navigationItems = [
    {
        link: "/books",
        title: "Books"
    },
    {
        link: "/authors",
        title: "Authors"
    }
];

const NavigationService = (() => {
    return {
        get: () => navigationItems
    }
})();

module.exports = NavigationService;