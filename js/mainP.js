// Import the THREE.js library
import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";

// Import OrbitControls for camera movement
import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";

// Import GLTFLoader for loading .gltf models
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";

// Create a new Three.js scene
const scene = new THREE.Scene();

// Set up a Perspective Camera with field of view, aspect ratio, and clipping planes
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 0, 20);

// Create a WebGL renderer with transparency enabled
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Instantiate OrbitControls for camera movement
const controls = new OrbitControls(camera, renderer.domElement);

// Function to handle the received planet name
export function sendPlanetNameToMain(planetName) {
  console.log(`Received planet name: ${planetName}`);
  loadAndAnimateModel(planetName);
}

// Array to store loaded models
let models = [];

// Function to load a single model using GLTFLoader
function loadSingleModel(folderName, scale = [1, 1, 1], position = [0, 0, 0], rotation = [0, 0, 0], animation = false) {
  const loader = new GLTFLoader();

  return new Promise((resolve, reject) => {
    loader.load(
      `planet_models/${folderName}/scene.gltf`,
      (gltf) => {
        const model = gltf.scene;
        
        // Set rotation
        model.rotation.set(...rotation);

        // Set scale and position
        model.scale.set(...scale);
        model.position.set(...position);

        // Handle animation if needed
        if (animation) {
          model.mixer = new THREE.AnimationMixer(model);
          model.mixer.clipAction(gltf.animations[0]).play();
        }

        // Add the model to the scene
        scene.add(model);
        models.push(model);
        resolve(model);
      },
      undefined,
      (error) => reject(error)
    );
  });
}

// Function to load and animate the model
async function loadAndAnimateModel(folderName) {
  let scale, position, rotation, animation;

  // Conditional logic for resizing and customizing each planet model
  if (folderName === "mercury") {
    scale = [10, 10, 10];
    position = [0, 0, 0];
    rotation = [0, 0, 0];
    animation = true;
  } else if (folderName === "earth") {
    scale = [8, 8, 8]; // Smaller planet
    position = [0, 0, 0];    // Slightly offset position
    animation = true;
  } else if (folderName === "mars") {
    scale = [0.25, 0.25, 0.25]; // Smaller planet
    position = [0, 0, 0];    // Slightly offset position
    animation = true;
  } else if (folderName === "jupiter") {
    scale = [1, 1, 1];  // Larger planet
    position = [0, 0, 0];   // Offset to the left
    animation = false;
  } else if (folderName === "venus") {
    scale = [0.14, 0.14, 0.14];  // Custom size
    position = [0, 0, 0];      // Position it lower
    animation = true;
  } else if (folderName === "saturn") {
    scale = [.01, .01, .01];  // Larger planet
    position = [0, 0, 0];   // Offset to the left     
    animation = false;
  } else if (folderName === "uranus") {
    scale = [30, 30, 30];
    position = [0, 0, 10];
    rotation = [0, 0, 0];
    animation = true;
  } else if (folderName === "neptune") {
     scale = [0.03, 0.03, 0.03];
    position = [0, 0, 0];
    rotation = [0, 0, 0];
    animation = true;
  }
  
  try {
    const model = await loadSingleModel(folderName, scale, position, rotation, animation);
    console.log(`Model loaded successfully: ${folderName}`);
  } catch (error) {
    console.error(`Error loading model ${folderName}:`, error);
  }
}

// Usage example: replace 'earth' with any planet you want to load
loadAndAnimateModel(planetName);

// Add ambient lighting to the scene
const ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientLight);

// Add a directional light for more lighting effects
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 5, 5); // Position the light
scene.add(directionalLight);

// Handle window resizing
window.addEventListener('resize', () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
   
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
});

// Animation loop to render the scene
function animate() {
  renderer.setAnimationLoop(() => {
    controls.update(); // Update camera controls
    renderer.render(scene, camera); // Render the scene with the camera
  });
}
animate(); // Start the rendering loop