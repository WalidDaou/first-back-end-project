const express = require('express');
const router = express.Router();

router.get('/notes', (req, res) => {
    const str = [
        {
            "name": "walid Daou",
            "msg": "My first note",
            "username": "WalidDaou",
            "content": "homework to do in 5 days"
        },
        {
            "name": "wello daou",
            "msg": "My second note",
            "username": "WelloDaou",
            "content": "homework to do in 7 days"
        }
    ];
        res.end(JSON.stringify(str));

});

    router.post('/addnote', (req,res)=>{

        res.end("non");

    });

    module.exports = router