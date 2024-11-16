import { planetAnimation } from "../javascript/planet.js";
import { jupiterAnimation } from "../javascript/jupiter.js";

let B = BABYLON;

let canvas = document.getElementById("renderCanvas");

let engine = new B.Engine(canvas, true);
let sphere = undefined;
let jupiterAnimationGroup = undefined;
let planetAnimationGroup = undefined;

let createScene = function () {

    let scene = new B.Scene(engine);
    scene.gravity = new BABYLON.Vector3(0, -0.15, 0);
    scene.collisionsEnabled = true;

    let hemi = new B.HemisphericLight("hemi-light", new B.Vector3(0, 1, 0), scene);
    hemi.intensity = 0.7;

    let camera = new BABYLON.UniversalCamera("UniversalCamera", new BABYLON.Vector3(13, 3, 4), scene);
    camera.attachControl(canvas, true);
    //camera.inertia = 0.3

    camera.applyGravity = true;
    camera.ellipsoid = new BABYLON.Vector3(1, 1, 1);
    camera.ellipsoidOffset = new BABYLON.Vector3(0, 0.9, 0);
    camera.checkCollisions = true;
    camera.rotation.y = -Math.PI / 2;

    sphere = B.Mesh.CreateSphere("sphere", 6.0, 2.0, scene);

    let materialground = new BABYLON.StandardMaterial("texture1", scene);
    materialground.diffuseTexture = new BABYLON.Texture("images/sand.jpg", scene);
    sphere.material = materialground;

    sphere.position.y = 8;
    sphere.position.z = 40;
    sphere.position.x = - 13;
    
    //sphere.animations.push(planetAnimation)
    //scene.beginAnimation(sphere, 0, 60, true);

    planetAnimationGroup = new B.AnimationGroup("planetAnimation")
    planetAnimationGroup.addTargetedAnimation(planetAnimation, sphere)
    scene.animationGroups[0].play(true)


    let sphere2 = B.Mesh.CreateSphere("sphere", 9.0, 3.0, scene);

    let materialground2 = new BABYLON.StandardMaterial("texture1", scene);
    materialground2.diffuseTexture = new BABYLON.Texture("images/jupiter.png", scene);
    sphere2.material = materialground2;

    sphere2.position.y = 3;
    sphere2.position.z = 13;
    sphere2.position.x = -3;

    sphere2.rotation.y = - 0.4;

    jupiterAnimationGroup = new B.AnimationGroup("jupiterAnimation")
    jupiterAnimationGroup.addTargetedAnimation(jupiterAnimation, sphere2)
    scene.animationGroups[1].play(true)

    let sphere3 = B.Mesh.CreateSphere("sphere", 7.0, 3.0, scene);

    let materialground3 = new BABYLON.StandardMaterial("texture1", scene);
    materialground3.diffuseTexture = new BABYLON.Texture("images/venus.jpg", scene);
    sphere3.material = materialground3;

    sphere3.position.y = 3;
    sphere3.position.z = -4;
    sphere3.position.x = -9;

    jupiterAnimationGroup = new B.AnimationGroup("jupiterAnimation")
    jupiterAnimationGroup.addTargetedAnimation(jupiterAnimation, sphere3)
    scene.animationGroups[2].play(true)


    addMoons(scene)
    return scene;
}; 


let addGroundAndSkybox = function (scene) {

    let ground = BABYLON.MeshBuilder.CreateGroundFromHeightMap("ground", "images/moon.png", {
        width: 10000, height: 10000, subdivisions: 16, maxHeight: 4.5, minHeight: -60
    }, scene, false);
    ground.checkCollisions = true;

    let materialground = new BABYLON.StandardMaterial("texture1", scene);
    materialground.diffuseTexture = new BABYLON.Texture("images/sand2.jpg", scene);
    ground.material = materialground;

    let skybox = B.Mesh.CreateBox("skyBox", 500, scene);
    skybox.position.y = -4;
    skybox.infiniteDistance = true;

    let skyboxMaterial = new B.StandardMaterial("skyBoxMat", scene);
    skyboxMaterial.backFaceCulling = false;
    let files = ["_px.jpg", "_py.jpg", "_pz.jpg", "_nx.jpg", "_ny.jpg", "_nz.jpg"];
    skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("images/skybox3/", scene, files);
    skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
    skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
    skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
    skybox.material = skyboxMaterial;

}

async function addMoons(scene) {
    let capacity = 1000;
    const particleSystem = new BABYLON.ParticleSystem("particles", capacity, scene)
    particleSystem.particleTexture = new BABYLON.Texture("images/moon.png");

    particleSystem.emitter = sphere;
    particleSystem.emitRate = 70;

    particleSystem.start();

    particleSystem.minAngularSpeed = 0;
    particleSystem.maxAngularSpeed = Math.PI;

    particleSystem.minInitialRotation = 0;
    particleSystem.maxInitialRotation = Math.PI / 2;

    //particleSystem.direction1 = new BABYLON.Vector3(-7, 8, 3);
    //particleSystem.direction2 = new BABYLON.Vector3(7, 8, -3);

    particleSystem.minEmitPower = 0;
    particleSystem.maxEmitPower = 4;
    particleSystem.updateSpeed = 0.005;

    particleSystem.minSize = 2;
    particleSystem.maxSize = 7;

    particleSystem.minLifeTime = 1;
    particleSystem.maxLifeTime = 3;
}


let scene = createScene();

let loop = function () {
    scene.render();

   if (planetAnimationGroup.isPlaying === true) {
        sphere.position.y -= 0.005
    }
};

engine.runRenderLoop(loop);

let resize = function () {
    engine.resize();
}

addGroundAndSkybox(scene)


window.addEventListener("resize", resize);

