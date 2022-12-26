import "./index";
import { Suspense, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

//useGLTF lets you import a 3d model
function ShoeModel({ ...props }) {
  const group = useRef();
  // Give it the relative path to the gltf file
  const { nodes, materials } = useGLTF("/shoe-model/shoe.gltf");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.shoe.geometry} material={materials.laces} />
      <mesh geometry={nodes.shoe_1.geometry} material={materials.mesh} />
      <mesh geometry={nodes.shoe_2.geometry} material={materials.caps} />
      <mesh geometry={nodes.shoe_3.geometry} material={materials.inner} />
      <mesh geometry={nodes.shoe_4.geometry} material={materials.sole} />
      <mesh geometry={nodes.shoe_5.geometry} material={materials.stripes} />
      <mesh geometry={nodes.shoe_6.geometry} material={materials.band} />
      <mesh geometry={nodes.shoe_7.geometry} material={materials.patch} />
    </group>
  );
}

function App() {
  // const ref = useRef();
  const [mainColor, setMainColor] = useState("");
  return (
    <div className="App">
      <div className="wrapper">
        <div className="card">
          <div className="product-canvas">
            <Canvas>
              {/* 3-D model goes here */}
              <Suspense fallback={null}>
                <ambientLight />
                <ShoeModel />
                {/* When rendering complex stuff, need to catch any errors using Suspense */}
              </Suspense>
            </Canvas>
          </div>
          <h2>Color chooser</h2>
          <div className="colors">
            <div>
              <input type="color" id="head" name="head" value="#e66465" />
              <label htmlFor="head">Main</label>
            </div>

            <div>
              <input type="color" id="body" name="body" value="#f6b73c" />
              <label htmlFor="body">Stripes</label>
            </div>
            <div>
              <input type="color" id="body" name="body" value="#f6b73c" />
              <label htmlFor="body">Soul</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
