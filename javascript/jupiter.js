const frameRate = 10;

let jupiterAnimation = new BABYLON.Animation("jupiterAnimation",
    "rotation.y",
    frameRate,
    BABYLON.Animation.ANIMATIONTYPE_FLOAT,
    BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);


function jupiterKeyFrames() {
    const keyFrames = []

    keyFrames.push({
        frame: 0,
        value: -3.8,
    })

    keyFrames.push({
        frame: frameRate * 1 / 2,
        value: - 3.4,
    })

    keyFrames.push({
        frame: frameRate,
        value: - 3,
    })

    keyFrames.push({
        frame: frameRate * 3 / 2,
        value: - 2.6,
    })

    keyFrames.push({
        frame: frameRate * 2,
        value: - 2.2,
    })

    return keyFrames
}



jupiterAnimation.setKeys(jupiterKeyFrames());


export { jupiterAnimation }