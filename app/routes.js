//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here
router.post('/form-handler', function(req, res) {

    let page = req.session.data.pageNumber
    if (page == "1"){
        req.session.data.something = "1"
        res.redirect("page-1")
    } else if (page == "2"){
        req.session.data.something = "2"
        res.redirect("page-2")
    } else if (page == "3"){
        req.session.data.something = "3"
        res.redirect("page-3")
    } else {
        req.session.data.something = "Index"
        res.redirect("/")
    }

    })

router.post('/page-3', function(req, res) {

    res.redirect("page-1")
    })