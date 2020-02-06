const express = require('express')
const router = express.Router();

router.get('/scores', (req,res) =>{
    res.render('index',{
        title: 'High_scores',
        style: 'style.css',
        username: 'username',
        score: 'score'
    })
})
