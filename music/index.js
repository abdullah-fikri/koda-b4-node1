const generate = require('./lib/lagu')
const move = require('./lib/move')

const musik = [
    'dewa 19 - pupus.mp3',
    'dewa 19 - kangen.mp3',
    'dewa 19 - satu.mp3',
    'dewa 19 - aku milikmu.mp3',
    'peterpan - yang terdalam.mp3',
    'peterpan - semua tentang kita.mp3',
    'peterpan - separuh aku.mp3',
    'ghea indiawari - jangan bersedih.mp3',
    'ghea indiawari - teramini.mp3',
    'judika - aku yang tersakiti.mp3',
]

generate.lagug(musik)
move.move(musik)

