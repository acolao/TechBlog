//withAuth middleware is to check if the user is authenticated before allowing access to a specific route or performing a certain action.
const withAuth = (req, res, next) => {
    if (!req.session.userId) {
     //redirects the user to the /auth route or page, indicating that they need to authenticate before proceeding further.
     res.redirect('/auth')
    } else {
        next()}
    }
    
    module.exports = withAuth