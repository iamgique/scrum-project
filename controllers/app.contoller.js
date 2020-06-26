const fizzbuzz = require('../app/fizzbuzz')
const maxchar = require('../app/maxchar')
const palindrome = require('../app/palindrome')
const reverseint = require('../app/reverseint')
const vowels = require('../app/vowels')

class AppController {
    static async fizzBuzz(req, res){
        try {
            const result = await fizzbuzz(req.body.value)
            if(result === '') throw "Something wrong please try again";
            req.flash('success', result)
            req.flash('fizzbuzz', 'strips__strip--expanded')
            res.render('', {
                title: 'Fizbuzz',
                value: req.body.value
            })
        } catch (err) {
            req.flash('error', err);
            req.flash('fizzbuzz', 'strips__strip--expanded')
            res.render('', {
                title: 'Fizbuzz',
                value: req.body.value
            })
        }
    }

    static async maxChar(req, res){
        try {
            const result = await maxchar(req.body.value)
            if(result === '') throw "Something wrong please try again";
            req.flash('success', result)
            req.flash('maxchar', 'strips__strip--expanded')
            res.render('', {
                title: 'MaxChar',
                value: req.body.value
            })
        } catch (err) {
            req.flash('error', err);
            req.flash('maxchar', 'strips__strip--expanded')
            res.render('', {
                title: 'MaxChar',
                value: req.body.value
            })
        }
    }

    static async palindrome(req, res){
        try {
            const result = await palindrome(req.body.value)
            if(result === '' || req.body.value === '') throw "Something wrong please try again";
            const ret = result ? 'Palindrome' : 'Not palindrome'
            req.flash('success', ret)
            req.flash('palindrome', 'strips__strip--expanded')
            res.render('', {
                title: 'Palindrome',
                value: req.body.value
            })
        } catch (err) {
            req.flash('error', err);
            req.flash('palindrome', 'strips__strip--expanded')
            res.render('', {
                title: 'Palindrome',
                value: req.body.value
            })
        }
    }

    static async reverseInt(req, res){
        try {
            const result = await reverseint(req.body.value)
            if(isNaN(result) || result === '') throw "Something wrong please try again";
            req.flash('success', result)
            req.flash('reverseint', 'strips__strip--expanded')
            res.render('', {
                title: 'ReverseInt',
                value: req.body.value
            })
        } catch (err) {
            req.flash('error', err);
            req.flash('reverseint', 'strips__strip--expanded')
            res.render('', {
                title: 'ReverseInt',
                value: req.body.value
            })
        }
    }

    static async vowels(req, res){
        try {
            const result = await vowels(req.body.value)
            if(isNaN(result) || result === '') throw "Something wrong please try again";
            req.flash('success', result)
            req.flash('vowels', 'strips__strip--expanded')
            res.render('', {
                title: 'Vowels',
                value: req.body.value
            })
        } catch (err) {
            req.flash('error', err);
            req.flash('vowels', 'strips__strip--expanded')
            res.render('', {
                title: 'Vowels',
                value: req.body.value
            })
        }
    }
}

module.exports = AppController