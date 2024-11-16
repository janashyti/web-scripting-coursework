import { planetAnimation } from "../javascript/planet.js";
import { jupiterAnimation } from "../javascript/jupiter.js";

let B = BABYLON;

let canvas = document.getElementById("renderCanvas");

let engine = new B.Engine(canvas, true);
let sphere = undefined;
let ground = undefined;
let jupiterAnimationGroup = undefined;
let planetAnimationGroup = undefined;

let createScene = function () {

    let scene = new B.Scene(engine);
    scene.gravity = new BABYLON.Vector3(0, -0.15, 0);
    scene.collisionsEnabled = true;

    let hemi = new B.HemisphericLight("hemi-light", new B.Vector3(0, 1, 0), scene);
    hemi.intensity = 0.5;

    let camera = new BABYLON.UniversalCamera("UniversalCamera", new BABYLON.Vector3(13, 5, 4), scene);
    camera.attachControl(canvas, true);

    camera.applyGravity = true;
    camera.ellipsoid = new BABYLON.Vector3(1, 1, 1);
    camera.ellipsoidOffset = new BABYLON.Vector3(4, 0.9, 0);
    camera.checkCollisions = true;
    camera.rotation.y = -Math.PI / 2;

    sphere = B.Mesh.CreateSphere("sphere", 4.0, 2.0, scene);

    let materialground = new BABYLON.StandardMaterial("texture1", scene);
    materialground.diffuseTexture = new BABYLON.Texture("images/sun3.jpg", scene);
    sphere.material = materialground;

    sphere.position.y = 8;
    sphere.position.z = 40;
    sphere.position.x = - 13;
    

    planetAnimationGroup = new B.AnimationGroup("planetAnimation")
    planetAnimationGroup.addTargetedAnimation(planetAnimation, sphere)
    scene.animationGroups[0].play(true)


    let sphere2 = B.Mesh.CreateSphere("sphere", 4.0, 2.0, scene);

    let materialground2 = new BABYLON.StandardMaterial("texture1", scene);
    materialground2.diffuseTexture = new BABYLON.Texture("images/sun1.png", scene);
    sphere2.material = materialground2;
	sphere2.isPickable = true;


    sphere2.position.y = 14.1;
    sphere2.position.z = -2;
    sphere2.position.x = -17;

    sphere2.rotation.y = - 0.4;

    jupiterAnimationGroup = new B.AnimationGroup("jupiterAnimation")
    jupiterAnimationGroup.addTargetedAnimation(jupiterAnimation, sphere2)
    scene.animationGroups[1].play(true)

    sphere2.actionManager = new BABYLON.ActionManager(scene);

    sphere2.actionManager.registerAction(
            new BABYLON.InterpolateValueAction (
            BABYLON.ActionManager.OnPickTrigger,
            sphere2,
            'visibility',
            0.2,
            1000
        )
    );

    let sphere3 = B.Mesh.CreateSphere("sphere", 5.0, 3.0, scene);

    let materialground3 = new BABYLON.StandardMaterial("texture1", scene);
    materialground3.diffuseTexture = new BABYLON.Texture("images/sun1.png", scene);
    sphere3.material = materialground3;

    sphere3.position.y = 12.5;
    sphere3.position.z = 9.5;
    sphere3.position.x = -9;
    sphere3.isPickable = true;

    jupiterAnimationGroup = new B.AnimationGroup("jupiterAnimation")
    jupiterAnimationGroup.addTargetedAnimation(jupiterAnimation, sphere3)
    scene.animationGroups[2].play(true)

    sphere3.actionManager = new BABYLON.ActionManager(scene);

    sphere3.actionManager.registerAction(
            new BABYLON.InterpolateValueAction (
            BABYLON.ActionManager.OnPickTrigger,
            sphere3,
            'visibility',
            0.2,
            1000
        )
    );


    let sphere5 = B.Mesh.CreateSphere("sphere", 2, 1.8, scene);
    sphere5.material = materialground3;
    sphere5.position.y = 4.85;
    sphere5.position.z = 1;
    sphere5.position.x = -9;
    sphere5.isPickable = true;

    jupiterAnimationGroup = new B.AnimationGroup("jupiterAnimation")
    jupiterAnimationGroup.addTargetedAnimation(jupiterAnimation, sphere5)
    scene.animationGroups[3].play(true)

    sphere5.actionManager = new BABYLON.ActionManager(scene);

    sphere5.actionManager.registerAction(
            new BABYLON.InterpolateValueAction (
            BABYLON.ActionManager.OnPickTrigger,
            sphere5,
            'visibility',
            0.2,
            1000
        )
    );


    let sphere6 = B.Mesh.CreateSphere("sphere", 3, 2, scene);
    sphere6.material = materialground3;
    sphere6.position.y = 13;
    sphere6.position.z = -3.2;
    sphere6.position.x = -9;
    sphere6.isPickable = true;

    jupiterAnimationGroup = new B.AnimationGroup("jupiterAnimation")
    jupiterAnimationGroup.addTargetedAnimation(jupiterAnimation, sphere6)
    scene.animationGroups[4].play(true)

    sphere6.actionManager = new BABYLON.ActionManager(scene);

    sphere6.actionManager.registerAction(
            new BABYLON.InterpolateValueAction (
            BABYLON.ActionManager.OnPickTrigger,
            sphere6,
            'visibility',
            0.2,
            1000
        )
    );

    
    let sphere7 = B.Mesh.CreateSphere("sphere", 3, 2, scene);
    sphere7.material = materialground3;
    sphere7.position.y = 13;
    sphere7.position.z = 5.5;
    sphere7.position.x = -9;
    sphere7.isPickable = true;

    jupiterAnimationGroup = new B.AnimationGroup("jupiterAnimation")
    jupiterAnimationGroup.addTargetedAnimation(jupiterAnimation, sphere7)
    scene.animationGroups[5].play(true)

    sphere7.actionManager = new BABYLON.ActionManager(scene);

    sphere7.actionManager.registerAction(
            new BABYLON.InterpolateValueAction (
            BABYLON.ActionManager.OnPickTrigger,
            sphere7,
            'visibility',
            0.2,
            1000
        )
    );

    let sphere8 = B.Mesh.CreateSphere("sphere", 1.5, 1.5, scene);
    sphere8.material = materialground3;
    sphere8.position.y = 10.3;
    sphere8.position.z = 6.5;
    sphere8.position.x = -9;
    sphere8.isPickable = true;

    jupiterAnimationGroup = new B.AnimationGroup("jupiterAnimation")
    jupiterAnimationGroup.addTargetedAnimation(jupiterAnimation, sphere8)
    scene.animationGroups[6].play(true)

    sphere8.actionManager = new BABYLON.ActionManager(scene);

    sphere8.actionManager.registerAction(
            new BABYLON.InterpolateValueAction (
            BABYLON.ActionManager.OnPickTrigger,
            sphere8,
            'visibility',
            0.2,
            1000
        )
    );



    BABYLON.SceneLoader.ImportMesh(null, "./assets/", "bar.glb", scene,
        function (meshes, particalSystem, skeletons) {
            console.log(meshes)

            for (let mesh of meshes) {
                mesh.checkCollisions = true;
                mesh.rotation.y = - 0.005;
            }

            let fence1 = meshes[0]
            for (let i = 1; i < meshes.length; i++) {
                meshes[i].setParent(fence1)
            }

            fence1.position.y = -1;
            fence1.position.x = -20;
            fence1.position.z = 6.6;

            fence1.scaling.x = 0.25;
            fence1.scaling.y = 0.25;
            fence1.scaling.z = 0.25;
        })


        BABYLON.SceneLoader.ImportMesh(null, "./assets/", "bar.glb", scene,
        function (meshes, particalSystem, skeletons) {
            console.log(meshes)

            for (let mesh of meshes) {
                mesh.checkCollisions = true;
                mesh.rotation.y = - 0.005;
            }

            let fence1 = meshes[0]
            for (let i = 1; i < meshes.length; i++) {
                meshes[i].setParent(fence1)
            }

            fence1.position.y = -1;
            fence1.position.x = -20;
            fence1.position.z = 11;

            fence1.scaling.x = 0.25;
            fence1.scaling.y = 0.25;
            fence1.scaling.z = 0.25;
        })


        BABYLON.SceneLoader.ImportMesh(null, "./assets/", "bank.glb", scene,
        function (meshes, particalSystem, skeletons) {
            console.log(meshes)

            for (let mesh of meshes) {
                mesh.checkCollisions = true;
                mesh.rotation.y = - 0.005;
            }

            let fence1 = meshes[0]
            for (let i = 1; i < meshes.length; i++) {
                meshes[i].setParent(fence1)
            }

            fence1.position.y = -1;
            fence1.position.x = -20;
            fence1.position.z = 6.6;

            fence1.scaling.x = 0.25;
            fence1.scaling.y = 0.25;
            fence1.scaling.z = 0.25;
        })


        BABYLON.SceneLoader.ImportMesh(null, "./assets/", "seaweed.obj", scene,
        function (meshes, particalSystem, skeletons) {
            console.log(meshes)

            for (let mesh of meshes) {
                mesh.checkCollisions = true;
                mesh.rotation.y = - 0.005;
            }

            let seaweed = meshes[0]
            for (let i = 1; i < meshes.length; i++) {
                meshes[i].setParent(seaweed)
            }

            seaweed.position.y = -1;
            seaweed.position.x = -5;
            seaweed.position.z = -1;

            seaweed.scaling.x = 3;
            seaweed.scaling.y = 5;
            seaweed.scaling.z = 1;
        })

        BABYLON.SceneLoader.ImportMesh(null, "./assets/", "church2.obj", scene,
        function (meshes, particalSystem, skeletons) {
            console.log(meshes)

            for (let mesh of meshes) {
                mesh.checkCollisions = true;
            }

            let church = meshes[0]
            for (let i = 1; i < meshes.length; i++) {
                meshes[i].setParent(church)
            }

            church.position.y = -3;
            church.position.x = -35;
            church.position.z = 22;

            church.scaling.x = 0.008;
            church.scaling.y = 0.008;
            church.scaling.z = 0.008;
        })


        BABYLON.SceneLoader.ImportMesh(null, "./assets/", "newhouse.obj", scene,
        function (meshes, particalSystem, skeletons) {
            console.log(meshes)

            for (let mesh of meshes) {
                mesh.checkCollisions = true;
            }

            let church = meshes[0]
            for (let i = 1; i < meshes.length; i++) {
                meshes[i].setParent(church)
            }

            church.position.y = -1;
            church.position.x = -13;
            church.position.z = 5;

            church.scaling.x = 0.3;
            church.scaling.y = 0.3;
            church.scaling.z = 0.3;
        })


        let box9 = B.Mesh.CreateBox("box", 200, scene);
        box9.position = new B.Vector3(-300, 5, 4);
        let material1 = new B.StandardMaterial("texture1", scene);
        material1.diffuseTexture = new BABYLON.Texture("images/starrynight.jpg", scene);
        box9.material = material1;
        box9.rotation.x = 1.5559

        box9.actionManager = new BABYLON.ActionManager(scene);

        box9.actionManager.registerAction(
            new BABYLON.InterpolateValueAction (
            BABYLON.ActionManager.OnPickTrigger,
            box9,
            'visibility',
            0.2,
            1000
            )
         );

        let material = new B.StandardMaterial("texture1", scene);
        material.diffuseColor = new B.Color3(10, 10, 10);
        material.emissiveColor = new B.Color3(10, 10, 10);
        material.specularColor = new B.Color3(10, 10, 10);
        material.wireframe = true;


        let sphere13 = B.Mesh.CreateSphere("sphere", 1.5, 1.5, scene);
        sphere13.position.y = 14.1;
        sphere13.position.z = -2;
        sphere13.position.x = -17;
        sphere13.material = material;

        let sphere14 = B.Mesh.CreateSphere("sphere", 2.8, 2.8, scene);
        sphere14.position.y = 12.5;
        sphere14.position.z = 9.5;
        sphere14.position.x = -9;
        sphere14.material = material;

        let sphere15 = B.Mesh.CreateSphere("sphere", 1.4, 1.4, scene);
        sphere15.position.y = 4.85;
        sphere15.position.z = 1;
        sphere15.position.x = -9;
        sphere15.material = material;

        let sphere16 = B.Mesh.CreateSphere("sphere", 1.5, 1.5, scene);
        sphere16.position.y = 13;
        sphere16.position.z = -3.2;
        sphere16.position.x = -9;
        sphere16.material = material;

        let sphere17 = B.Mesh.CreateSphere("sphere", 1.5, 1.5, scene);
        sphere17.position.y = 13;
        sphere17.position.z = 5.5;
        sphere17.position.x = -9;
        sphere17.material = material;

        let sphere18 = B.Mesh.CreateSphere("sphere", 1.2, 1.2, scene);
        sphere18.position.y = 10.3;
        sphere18.position.z = 6.5;
        sphere18.position.x = -9;
        sphere18.material = material;

    addMoons(scene)
    setTimeout(loadMoons, 3400, scene)
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
    particleSystem.particleTexture = new BABYLON.Texture("images/sun1.png");

    particleSystem.emitter = sphere;
    particleSystem.emitRate = 70;

    particleSystem.start();

    particleSystem.minAngularSpeed = 0;
    particleSystem.maxAngularSpeed = Math.PI;

    particleSystem.minInitialRotation = 0;
    particleSystem.maxInitialRotation = Math.PI / 2;

    particleSystem.minEmitPower = 0;
    particleSystem.maxEmitPower = 4;
    particleSystem.updateSpeed = 0.005;

    particleSystem.minSize = 2;
    particleSystem.maxSize = 5;

    particleSystem.minLifeTime = 1;
    particleSystem.maxLifeTime = 1;
}

let moonLoaded = false

function loadMoons(scene) {
    var duplicate = function (container, xOffset, zOffset) {
        let entries = container.instantiateModelsToScene();

        for (var node of entries.rootNodes) {
            node.position.x += xOffset;
            node.position.z += zOffset;
        }

    }

    BABYLON.SceneLoader.LoadAssetContainer("./assets/", "bush1.glb", scene, function (container) {
        container.addAllToScene();

        duplicate(container, -10, 10);
        duplicate(container, -12, 11);
        duplicate(container, -13, 9);
        duplicate(container, -9, 12);
        duplicate(container, -14, 11);
        duplicate(container, -11, 13);

        duplicate(container, -12, 12);
        duplicate(container, -13, 12);
        duplicate(container, -11, 11);
        duplicate(container, -11, 14);
        duplicate(container, -12, 9);
        duplicate(container, -13, 10);

        duplicate(container, -8, 8);
        duplicate(container, -11, 10);
        duplicate(container, -15, 8.5);
        duplicate(container, -7, 10);
        duplicate(container, -16, 13);
        duplicate(container, -9, 14);

        duplicate(container, -6, 6);
        duplicate(container, -11, 7);
        duplicate(container, -5, 8);
        duplicate(container, -7, 16);
        duplicate(container, -16, 15);
        duplicate(container, -9, 15.5);
    });

    moonLoaded = true;
}

let scene = createScene();

let volume = 0.1
function easeInVolume() {
    let interval = setInterval(() => {
        volume += 0.01;
        music.setVolume(volume)
    }, 100)

    setTimeout((interval) => {
        clearTimeout(interval)
    }, 3000)
}

var music = new BABYLON.Sound(
    "Music",
    "./audio/song.mp3",
    scene,
    easeInVolume,
    { loop: true, volume: 0, autoplay: true, offset: 13 }
);

let loop = function () {
    scene.render();

   if (planetAnimationGroup.isPlaying === true) {
        sphere.position.y -= 0.0003
    }
};

engine.runRenderLoop(loop);

let resize = function () {
    engine.resize();
}

addGroundAndSkybox(scene)


window.addEventListener("resize", resize);


    