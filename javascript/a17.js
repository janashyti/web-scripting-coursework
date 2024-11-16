let B = BABYLON;

let canvas = document.getElementById("renderCanvas");

let engine = new B.Engine(canvas, true);

let createScene = function () {

    let scene = new B.Scene(engine);

    let camera = new B.ArcRotateCamera("cam", 0.75 * Math.PI, 0.40 * Math.PI, 60, new B.Vector3(0, -7, 0), scene);
    camera.attachControl(canvas, false);

    let light = new B.PointLight("Omni", new B.Vector3(50, 80, 80), scene);
    light.intensity = 0.4;

    var box1 = B.Mesh.CreateBox("box", 3.5, scene);
    box1.position.y = -23;
    material = new B.StandardMaterial("texture1", scene);
    material.diffuseColor = new B.Color3(0, 0, 0);
    box1.material = material;
    
    let box2 = B.Mesh.CreateBox("box", 4.0, scene);
    box2.position.x = 6;
    box2.position.y = -20;
    material = new B.StandardMaterial("texture1", scene);
    material.diffuseColor = new B.Color3(10, 10, 10);
    material.emissiveColor = new B.Color3(10, 10, 10);
    material.specularColor = new B.Color3(10, 10, 10);
    material.wireframe = true;
    box2.material = material;

    var box3 = B.Mesh.CreateBox("box", 5.0, scene);
    box3.position.x = -6;
    box3.position.y = -17;
    material = new B.StandardMaterial("texture1", scene);
    material.diffuseColor = new B.Color3(10, 10, 10);
    material.emissiveColor = new B.Color3(10, 10, 10);
    material.specularColor = new B.Color3(10, 10, 10);
    //material.wireframe = true;
    box3.material = material;

    var box4 = B.Mesh.CreateBox("box", 5.0, scene);
    box4.position = new B.Vector3(6, -14, 6);
    material = new B.StandardMaterial("texture1", scene);
    material.diffuseColor = new B.Color3(0, 0, 0);
    box4.material = material;

    let box5 = B.Mesh.CreateBox("box", 3.0, scene);
    box5.position = new B.Vector3(6, -11, -6);
    material = new B.StandardMaterial("texture1", scene);
    material.diffuseColor = new B.Color3(10, 10, 10);
    material.emissiveColor = new B.Color3(10, 10, 10);
    material.specularColor = new B.Color3(10, 10, 10);
    //material.wireframe = true;
    box5.material = material;

    let box6 = B.Mesh.CreateBox("box", 4.0, scene);
    box6.position = new B.Vector3(0, -8, -6);
    material = new B.StandardMaterial("texture1", scene);
    material.diffuseColor = new B.Color3(10, 10, 10);
    material.emissiveColor = new B.Color3(10, 10, 10);
    material.specularColor = new B.Color3(10, 10, 10);
    //material.wireframe = true;
    box6.material = material;

    let box7 = B.Mesh.CreateBox("box", 5.0, scene);
    box7.position = new B.Vector3(0, -5, 6);
    material = new B.StandardMaterial("texture1", scene);
    material.diffuseColor = new B.Color3(0, 0, 0);
    box7.material = material;

    let box8= B.Mesh.CreateBox("box", 3.0, scene);
    box8.position = new B.Vector3(-6, -2, 6);
    material = new B.StandardMaterial("texture1", scene);
    material.diffuseColor = new B.Color3(0, 0, 0);
    box8.material = material;

    let box9 = B.Mesh.CreateBox("box", 4.0, scene);
    box9.position = new B.Vector3(-8, 1, 0);
    material = new B.StandardMaterial("texture1", scene);
    material.diffuseColor = new B.Color3(10, 10, 10);
    material.emissiveColor = new B.Color3(10, 10, 10);
    material.specularColor = new B.Color3(10, 10, 10);
    material.wireframe = true;
    box9.material = material;
    


    var sphere = B.Mesh.CreateSphere("sphere", 20.0, 8.0, scene);

    material = new B.StandardMaterial("texture1", scene);
    material.diffuseColor = new B.Color3(1, 0, 0);
    material.emissiveColor = new B.Color3(1, 0, 0);
    material.specularColor = new B.Color3(1, 0, 0);
    sphere.material = material;


    var radius = 25;
    var tess = 90;
    var radians = 2 * Math.PI / tess;
    var path1 = [];
    var path2 = [];
    var path3 = [];
    for (var i = 0; i <= tess + 20; i++) {
        var x = radius * Math.sin(radians * i);
        var z = radius * Math.cos(radians * i);

        path1[i] = new B.Vector3(x, -10, z);
        path2[i] = new B.Vector3(x, -8, z);
        path3[i] = new B.Vector3(x, -1, z);
    }
    let ribbon = B.Mesh.CreateRibbon("ribbon", [path1, path2], true, true, 0, scene);
    ribbon.receiveShadows = true;

    material = new B.StandardMaterial("texture1", scene);
    material.wireframe = true;
    material.diffuseColor = new B.Color3(3, 3, 3);
    ribbon.material = material;

    let torus = B.Mesh.CreateTorus("torus", 10, 3, 10, scene, false);
    torus.position.y = 10;
    material = new B.StandardMaterial("texture1", scene);
    material.wireframe = true;
    //material.diffuseColor = new B.Color3(7, 4, 3);
    torus.material = material;

    let cylinder = B.Mesh.CreateCylinder("cylinder", 10, 8, 1, 30, 0, scene, false);
    cylinder.position.y = -13;

    material = new B.StandardMaterial("texture1", scene);
    material.diffuseColor = new B.Color3(6, 10, 3);
    cylinder.material = material;

    let lines = B.Mesh.CreateLines("lines", [
        new B.Vector3(-10, 0, 0),
        new B.Vector3(10, 0, 0),
        new B.Vector3(0, 0, -10),
        new B.Vector3(0, 10, 0),
        new B.Vector3(-6, -2, 6),
        new B.Vector3(-6, -2, 6),
        new B.Vector3(0, -5, 6),
        new B.Vector3(0, -8, -6),
        new B.Vector3(6, -11, -6),
        new B.Vector3(6, -14, 6),
        new B.Vector3(6, -20, 0),
        new B.Vector3(-5, -25, 0),
        new B.Vector3(-7, -17, 0)
    ], scene);

    let plane = B.Mesh.CreatePlane("plane", 11.0, scene, false, B.Mesh.DOUBLESIDE);
    material = new B.StandardMaterial("texture1", scene);
    material.diffuseColor = new B.Color3(1, 0, 0);
    material.alpha = 0.5;
    plane.material = material;
    plane.rotation.x = Math.PI / 4;


    let disc = B.Mesh.CreateDisc("disc2", 20, 70, scene);
    material = new B.StandardMaterial("texture1", scene);
    material.diffuseColor = new B.Color3(1, 0, 0);
    disc.material = material;
    


    return scene;
};


let scene = createScene();

var loop = function () {
    scene.render();
};

engine.runRenderLoop(loop);

var resize = function () {
    engine.resize();
}

window.addEventListener("resize", resize);
