module.exports.isLoggedIn = (req, res, next) => {
    // console.log(req);
    // req.path, req.originalUrl have info about redirect url after signup or login
    if (!req.isAuthenticated()) {
        req.session.redirectUrl = req.originalUrl;
        // stored new field in session redirectUrl
        req.flash("error", "You must be logged in create new Listings");
        return res.redirect("/login");
    }
    console.log(req.user);
    next();
}

module.exports.saveRedirectUrl = (req, res, next) => {
    if(req.session.redirectUrl) {
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
};