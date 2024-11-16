const frameRate = 10;

let planetAnimation = new BABYLON.Animation("planetAnimation",
    "position.z",
    frameRate,
    BABYLON.Animation.ANIMATIONTYPE_FLOAT,
    BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);


function planetKeyFrames() {
    const keyFrames = []

    keyFrames.push({
        frame: 0,
        value: 25,
    })

    keyFrames.push({
        frame: frameRate * 1 / 2,
        value: 15,
    })

    keyFrames.push({
        frame: frameRate,
        value: 5,
    })

    keyFrames.push({
        frame: frameRate * 3 / 2,
        value: -5,
    })

    keyFrames.push({
        frame: frameRate * 2,
        value: -15,
    })

    return keyFrames
}



planetAnimation.setKeys(planetKeyFrames());


export { planetAnimation }