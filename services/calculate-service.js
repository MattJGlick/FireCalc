/**
 * Created by MattGlick on 4/1/2015.
 */

exports.calculate = function (req, res, next) {
    console.log(JSON.stringify(req.body, null, 2));

    res.render('index', {
        title: 'Welcome'
    });
};