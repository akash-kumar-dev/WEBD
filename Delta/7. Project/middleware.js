module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        req.flash("error", "You must be logged in create new Listings");
        return res.redirect("/login");
    }
    console.log(req.user);
    next();
}