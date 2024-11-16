let B = BABYLON;

let canvas = document.getElementById("renderCanvas");

let engine = new B.Engine(canvas, true);

let createScene = function () {

    let scene = new B.Scene(engine);
    scene.gravity = new BABYLON.Vector3(0, -0.15, 0);
    scene.collisionsEnabled = true;

    let hemi = new B.HemisphericLight("hemi-light", new B.Vector3(0, 1, 0), scene);
    hemi.intensity = 0.7;

    let camera = new BABYLON.UniversalCamera("UniversalCamera", new BABYLON.Vector3(13, 3, 0), scene);
    camera.attachControl(canvas, true);
    //camera.inertia = 0.3

    camera.applyGravity = true;
    camera.ellipsoid = new BABYLON.Vector3(1, 1, 1);
    camera.ellipsoidOffset = new BABYLON.Vector3(0, 0.9, 0);
    camera.checkCollisions = true;
    camera.rotation.y = -Math.PI / 2;

    addGroundAndSkybox(scene)

    BABYLON.SceneLoader.ImportMesh(null, "./assets/", "bench.glb", scene,
        function (meshes, particalSystem, skeletons) {
            console.log(meshes)

            for (let mesh of meshes) {
                mesh.checkCollisions = true;

                mesh.rotation.y = 0.8
            }

            let bench = meshes[0]
            for (let i = 1; i < meshes.length; i++) {
                meshes[i].setParent(bench)
            }

            bench.position.y = 2.5;
        })


    BABYLON.SceneLoader.ImportMesh(null, "./assets/", "bush3.glb", scene,
        function (meshes, particalSystem, skeletons) {
            console.log(meshes)

            for (let mesh of meshes) {
                mesh.checkCollisions = true;

                mesh.rotation.y = 0.8
            }

            let bush = meshes[0]
            for (let i = 1; i < meshes.length; i++) {
                meshes[i].setParent(bush)
            }

            bush.position.y = 2;
            bush.position.x = 4;
            bush.position.z = 2;

            bush.scaling.x = 0.8;
            bush.scaling.y = 0.8;
            bush.scaling.z = 0.8;
        })

        BABYLON.SceneLoader.ImportMesh(null, "./assets/", "bush1.glb", scene,
        function (meshes, particalSystem, skeletons) {
            console.log(meshes)

            for (let mesh of meshes) {
                mesh.checkCollisions = true;

                mesh.rotation.y = 0.8
            }

            let bush = meshes[0]
            for (let i = 1; i < meshes.length; i++) {
                meshes[i].setParent(bush)
            }

            bush.position.y = 2;
            bush.position.x = 3;
            bush.position.z = 3;

            bush.scaling.x = 0.7;
            bush.scaling.y = 0.7;
            bush.scaling.z = 0.7;
        })

        BABYLON.SceneLoader.ImportMesh(null, "./assets/", "bush2.glb", scene,
        function (meshes, particalSystem, skeletons) {
            console.log(meshes)

            for (let mesh of meshes) {
                mesh.checkCollisions = true;

                mesh.rotation.y = 0.8
            }

            let bush = meshes[0]
            for (let i = 1; i < meshes.length; i++) {
                meshes[i].setParent(bush)
            }

            bush.position.y = 2;
            bush.position.x = 3;
            bush.position.z = 1.5;

            bush.scaling.x = 0.8;
            bush.scaling.y = 0.8;
            bush.scaling.z = 0.8;
        })

        BABYLON.SceneLoader.ImportMesh(null, "./assets/", "ground.glb", scene,
        function (meshes, particalSystem, skeletons) {
            console.log(meshes)

            for (let mesh of meshes) {
                mesh.checkCollisions = true;

                mesh.rotation.y = 0.8
            }

            let ground = meshes[0]
            for (let i = 1; i < meshes.length; i++) {
                meshes[i].setParent(ground)
            }

            ground.position.y = 2.4;
            ground.position.x = -2;
            ground.position.z = 2;

            ground.scaling.y = 0.5;
            ground.scaling.x = 1.3;
            ground.scaling.z = 1.3;
        })

        BABYLON.SceneLoader.ImportMesh(null, "./assets/", "swing.glb", scene,
        function (meshes, particalSystem, skeletons) {
            console.log(meshes)

            for (let mesh of meshes) {
                mesh.checkCollisions = true;

                mesh.rotation.y = -0.4;
            }

            let swing = meshes[0]
            for (let i = 1; i < meshes.length; i++) {
                meshes[i].setParent(swing)
            }

            swing.position.y = 2.4;
            swing.position.x = 2;
            swing.position.z = -3;

            swing.scaling.y = 0.9;
            swing.scaling.x = 0.9;
            swing.scaling.z = 0.9;
        })


        BABYLON.SceneLoader.ImportMesh(null, "./assets/", "tree3.glb", scene,
        function (meshes, particalSystem, skeletons) {
            console.log(meshes)

            for (let mesh of meshes) {
                mesh.checkCollisions = true;

                mesh.rotation.y = 0.625;
            }

            let tree = meshes[0]
            for (let i = 1; i < meshes.length; i++) {
                meshes[i].setParent(tree)
            }

            tree.position.y = 2.4;
            tree.position.x = 2;
            tree.position.z = -6;

            tree.scaling.y = 0.8;
            tree.scaling.x = 0.8;
            tree.scaling.z = 0.8;
        })

        BABYLON.SceneLoader.ImportMesh(null, "./assets/", "slide.glb", scene,
        function (meshes, particalSystem, skeletons) {
            console.log(meshes)

            for (let mesh of meshes) {
                mesh.checkCollisions = true;

                mesh.rotation.y = -0.5;
            
            }

            let slide = meshes[0]
            for (let i = 1; i < meshes.length; i++) {
                meshes[i].setParent(slide)
            }

            slide.position.y = 2.4;
            slide.position.x = 2;
            slide.position.z = 7;

            slide.scaling.y = 0.9;
            slide.scaling.x = 0.9;
            slide.scaling.z = 0.9;
        })


        BABYLON.SceneLoader.ImportMesh(null, "./assets/", "flower-red.glb", scene,
        function (meshes, particalSystem, skeletons) {
            console.log(meshes)

            for (let mesh of meshes) {
                mesh.checkCollisions = true;
            
            }

            let flower = meshes[0]
            for (let i = 1; i < meshes.length; i++) {
                meshes[i].setParent(flower)
            }

            flower.position.y = 2.35;
            flower.position.x = 7;
            flower.position.z = 3;

            flower.scaling.y = 0.9;
            flower.scaling.x = 0.9;
            flower.scaling.z = 0.9;
        })

        BABYLON.SceneLoader.ImportMesh(null, "./assets/", "flower-blue.glb", scene,
        function (meshes, particalSystem, skeletons) {
            console.log(meshes)

            for (let mesh of meshes) {
                mesh.checkCollisions = true;
            
            }

            let flower = meshes[0]
            for (let i = 1; i < meshes.length; i++) {
                meshes[i].setParent(flower)
            }

            flower.position.y = 2.4;
            flower.position.x = 5;
            flower.position.z = -5;

            flower.scaling.y = 0.9;
            flower.scaling.x = 0.9;
            flower.scaling.z = 0.9;
        })


    BABYLON.SceneLoader.ImportMesh(null, "./assets/", "flower-white.glb", scene,
    function (meshes, particalSystem, skeletons) {
        console.log(meshes)

        for (let mesh of meshes) {
            mesh.checkCollisions = true;
        
        }

        let flower = meshes[0]
        for (let i = 1; i < meshes.length; i++) {
            meshes[i].setParent(flower)
        }

        flower.position.y = 2.4;
        flower.position.x = 3;
        flower.position.z = -1;

        flower.scaling.y = 0.9;
        flower.scaling.x = 0.9;
        flower.scaling.z = 0.9;
    })

return scene;
}; 




let addGroundAndSkybox = function (scene) {

    let ground = BABYLON.MeshBuilder.CreateGroundFromHeightMap("ground", "images/moon.png", {
        width: 10000, height: 10000, subdivisions: 8, maxHeight: 4, minHeight: 0
    }, scene, false);
    ground.checkCollisions = true;

    let materialground = new BABYLON.StandardMaterial("texture1", scene);
    materialground.diffuseTexture = new BABYLON.Texture("images/moon.png", scene);
    ground.material = materialground;

    let skybox = B.Mesh.CreateBox("skyBox", 500, scene);
    skybox.position.y = -4;
    skybox.infiniteDistance = true;

    let skyboxMaterial = new B.StandardMaterial("skyBoxMat", scene);
    skyboxMaterial.backFaceCulling = false;
    let files = ["_px.png", "_py.png", "_pz.png", "_nx.png", "_ny.png", "_nz.png"];
    skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("images/skybox/", scene, files);
    skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
    skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
    skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
    skybox.material = skyboxMaterial;

}

let scene = createScene();

let loop = function () {
    scene.render();
};

engine.runRenderLoop(loop);

let resize = function () {
    engine.resize();
}

window.addEventListener("resize", resize);

