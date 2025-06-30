info.onScore(5, function () {
    game.gameOver(true)
    music.play(music.createSong(hex`0078000408020205001c000f0a006400f4010a000004000000000000000000000000000000000218000400080001240c00100001241400180001241c002000012407001c00020a006400f4016400000400000000000000000000000000000000031e0000000400012408000c00012410001400012418001c000124200024000124`), music.PlaybackMode.UntilDone)
})
info.setLife(3)
info.startCountdown(10)
info.setScore(0)
scene.setBackgroundColor(5)
game.splash("hello welcome to the game answer the question to win the game!")
game.splash(game.askForNumber("12 306-1 048"))
music.play(music.stringPlayable("E G G A E A F G ", 120), music.PlaybackMode.UntilDone)
if (false) {
    info.changeLifeBy(-1)
    game.splash("fall", game.ask("11 258"))
    music.play(music.stringPlayable("C F E F C5 F G A ", 120), music.PlaybackMode.InBackground)
} else if (true) {
    info.changeScoreBy(3)
    game.splash(game.ask("11 258"), "")
    game.splash("yes or no")
    game.splash(game.ask("1+1=3"))
    if (false) {
        game.gameOver(false)
    } else if (true) {
        info.changeScoreBy(2)
    }
}
