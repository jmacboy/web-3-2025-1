const createSessionCookie = (res, token, refreshToken) => {
    res.cookie('access', token, {
        httpOnly: true,
        secure: true,
        maxAge: 10 * 60 * 1000, // 10 minutes
        sameSite: 'None',
    });
    if (refreshToken) {
        res.cookie('refresh', refreshToken, {
            httpOnly: true,
            secure: true,
            maxAge: 24 * 60 * 60 * 1000, // 1 day
            sameSite: 'None',
        });
    }
}
module.exports = {
    createSessionCookie
}