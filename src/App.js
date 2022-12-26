import "./index";
import { Suspense, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

//useGLTF lets you import a 3d model
function ShoeModel({ ...props }) {
  // Get colors from props
  const { customColors } = props;
  console.log(customColors);
  const group = useRef();
  // Give it the relative path to the gltf file
  const { nodes, materials } = useGLTF("/shoe-model/shoe.gltf");
  return (
    <group ref={group} {...props} dispose={null} scale={3}>
      {/* give it a 'scale' prop to change its size */}
      <mesh
        geometry={nodes.shoe.geometry}
        material={materials.laces}
        material-color={customColors.stripes}
      />
      <mesh
        geometry={nodes.shoe_1.geometry}
        material={materials.mesh}
        material-color={customColors.main}
      />
      <mesh
        geometry={nodes.shoe_2.geometry}
        material={materials.caps}
        material-color={customColors.main}
      />
      <mesh
        geometry={nodes.shoe_3.geometry}
        material={materials.inner}
        material-color={customColors.main}
      />
      <mesh
        geometry={nodes.shoe_4.geometry}
        material={materials.sole}
        material-color={customColors.sole}
      />
      <mesh
        geometry={nodes.shoe_5.geometry}
        material={materials.stripes}
        material-color={customColors.stripes}
      />
      <mesh
        geometry={nodes.shoe_6.geometry}
        material={materials.band}
        material-color={customColors.main}
      />
      <mesh
        geometry={nodes.shoe_7.geometry}
        material={materials.patch}
        material-color={customColors.stripes}
      />
    </group>
  );
}

function App() {
  // const ref = useRef();
  const [main, setMain] = useState("#ffffff");
  const [stripes, setStripes] = useState("#ffffff");
  const [sole, setSole] = useState("#ffffff");

  return (
    <div className="App">
      <div className="wrapper">
        <div className="card">
          <div className="product-canvas">
            <Canvas>
              {/* 3-D stuff goes here */}
              {/* When rendering complex stuff, need to catch any errors using Suspense */}
              <Suspense fallback={null}>
                <ambientLight />
                <spotLight
                  intensity={0.9}
                  angle={0.1}
                  penumbra={1}
                  position={[10, 15, 10]}
                  castShadow
                />
                <ShoeModel customColors={{ main, stripes, sole }} />
                {/* Allows camera rotation based on mouse */}
                <OrbitControls
                  enablePan={true}
                  enableZoom={true}
                  enableRotate={true}
                />
              </Suspense>
            </Canvas>
          </div>
          <h2>Color chooser</h2>
          <div className="colors">
            <div>
              <input
                type="color"
                id="main"
                name="main"
                value={main}
                onChange={(e) => {
                  setMain(e.target.value);
                }}
              />
              <label htmlFor="main">Main</label>
            </div>
            <div>
              <input
                type="color"
                id="stripes"
                name="stripes"
                value={stripes}
                onChange={(e) => setStripes(e.target.value)}
              />
              <label htmlFor="stripes">Stripes</label>
            </div>
            <div>
              <input
                type="color"
                id="sole"
                name="sole"
                value={sole}
                onChange={(e) => setSole(e.target.value)}
              />
              <label htmlFor="sole">Sole</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
