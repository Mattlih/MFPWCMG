const screenWidth  = window.innerWidth
const screenHeight = window.innerHeight

let atlas = new Image()
atlas.src = 'images/Common.png'

export default class GameInfo {
  renderGameScore(ctx, score, absement) {
    ctx.fillStyle = "#ffffff"
    ctx.font      = "20px Arial"

    ctx.fillText(
      'Hit: ' + score.toFixed(2),
      10,
      30
    )
    ctx.fillText(
      'Absement: ' + absement.toFixed(2),
      10,
      50
    )
    let total = score / absement;
    ctx.fillText(
      'Score: ' + total.toFixed(2),
      10,
      70
    )

    // ctx.fillText(
    //   '|',
    //   150,
    //   80
    // )

    // ctx.fillText(
    //   '|',
    //   200,
    //   80
    // )
  }

  renderGameOver(ctx, score, absement) {
    ctx.drawImage(atlas, 0, 0, 119, 108, screenWidth / 2 - 150, screenHeight / 2 - 100, 300, 300)

    ctx.fillStyle = "#ffffff"
    ctx.font    = "20px Arial"

    ctx.fillText(
      'GAME OVER',
      screenWidth / 2 - 60,
      screenHeight / 2 - 100 + 50
    )

    score = score / absement;

    ctx.fillText(
      'SCORE: ' + score.toFixed(2),
      screenWidth / 2 - 60,
      screenHeight / 2 - 100 + 130
    )

    ctx.drawImage(
      atlas,
      120, 6, 39, 24,
      screenWidth / 2 - 60,
      screenHeight / 2 - 100 + 180,
      120, 40
    )

    ctx.fillText(
      'RESTART',
      screenWidth / 2 - 45,
      screenHeight / 2 - 100 + 205
    )

    /**
     * 重新开始按钮区域
     * 方便简易判断按钮点击
     */
    this.btnArea = {
      startX: screenWidth / 2 - 40,
      startY: screenHeight / 2 - 100 + 180,
      endX  : screenWidth / 2  + 50,
      endY  : screenHeight / 2 - 100 + 255
    }
  }
}

