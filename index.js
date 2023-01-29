let usernameEl = document.getElementById("username")
let passwordEl = document.getElementById("password")
let passwordBtn = document.getElementById("password-btn")
let usernameBtn = document.getElementById("username-btn")

usernameBtn.addEventListener("click", function () {
    let adjectives = ['adorable', 'beautiful', 'clean', 'drab', 'elegant', 'fancy',
    'glamorous', 'handsome', 'long', 'magnificent', 'old-fashioned', 'plain', 'quaint',
    'sparkling', 'ugliest', 'unsightly', 'wide-eyed', 'alive', 'better', 'careful',
    'clever', 'dead', 'easy', 'famous', 'gifted', 'helpful', 'important', 'inexpensive',
    'mushy', 'odd', 'powerful', 'rich', 'shy', 'tender', 'uninterested', 'vast', 'wrong', 
    'angry', 'bewildered', 'clumsy', 'defeated', 'embarrassed', 'fierce', 'grumpy', 'helpless',
    'itchy', 'jealous', 'lazy', 'mysterious', 'nervous', 'obnoxious', 'panicky', 'repulsive', 
    'scary', 'thoughtless', 'uptight', 'worried']

    let nouns = ['women', 'men', 'children', 'teeth', 'feet', 'people',
    'leaves', 'mice', 'geese', 'halves', 'knives', 'wives', 'lives', 'elves',
    'loaves', 'potatoes', 'tomatoes', 'cacti', 'foci', 'fungi', 'nuclei', 
    'syllabuses', 'analyses', 'diagnoses', 'oases', 'theses', 'crises', 'phenomena',
    'criteria', 'data']

    let randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)]
    let randomNoun = nouns[Math.floor(Math.random() * nouns.length)]

    let username = randomAdjective + "-" + randomNoun

    usernameEl.textContent = username
})

passwordBtn.addEventListener("click", function() {
    let length = 10;
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnop0123456789"
    let password = ""

    for (let i = 0; i < length; i++){
        password += characters.charAt(Math.floor(Math.random() * characters.length))
    }

    passwordEl.textContent = password
})

let clearBtn = document.getElementById("clear-btn")
let outputEl = document.getElementById("output")

clearBtn.addEventListener("click", function() {
    passwordEl.textContent = ""
    usernameEl.textContent = ""
})

























