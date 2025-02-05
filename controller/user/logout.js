const logout = (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).json({ message: 'Error logging out', error: err });
        }
        // res.status(200).json({ message: 'Logged out successfully' });
        res.redirect('/')
    });
};

module.exports = { logout };
