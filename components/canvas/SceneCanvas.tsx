"use client";

import {
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";
import * as THREE from "three";
import { OrbitControls, TransformControls } from "three-stdlib";

export interface SceneHandle {
  addCube: () => void;
  addSphere: () => void;
  deleteSelected: () => void;
  duplicateSelected: () => void;
  setTransformMode: (mode: "translate" | "rotate" | "scale") => void;
  exportScene: () => any;
  importScene: (data: any) => void;
}

interface Props {
  onSelect?: (obj: THREE.Mesh | null) => void;
}

const SceneCanvas = forwardRef<SceneHandle, Props>(
  ({ onSelect }, ref) => {
    const mountRef = useRef<HTMLDivElement | null>(null);

    const sceneRef = useRef<THREE.Scene | null>(null);
    const selectedRef = useRef<THREE.Mesh | null>(null);
    const objectsRef = useRef<THREE.Mesh[]>([]);

    const transformRef = useRef<TransformControls | null>(null);

    const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
    const rendererRef = useRef<THREE.WebGLRenderer | null>(null);

    // 🔥 SAFE ATTACH
    const safeAttach = (obj: THREE.Object3D) => {
      if (!sceneRef.current) return;

      if (!sceneRef.current.children.includes(obj)) return;

      transformRef.current?.attach(obj);
    };

    // 🔥 reset colors
    const resetColors = () => {
      objectsRef.current.forEach((obj) => {
        const mat = obj.material as THREE.MeshStandardMaterial;
        if (obj.userData.originalColor) {
          mat.color.set(obj.userData.originalColor);
        }
      });
    };

    useImperativeHandle(ref, () => ({
      addCube() {
        if (!sceneRef.current) return;

        const color = "orange";

        const cube = new THREE.Mesh(
          new THREE.BoxGeometry(),
          new THREE.MeshStandardMaterial({ color })
        );

        cube.userData.originalColor = color;

        cube.position.set(Math.random() * 4 - 2, 0.5, Math.random() * 4 - 2);

        sceneRef.current.add(cube);
        objectsRef.current.push(cube);
      },

      addSphere() {
        if (!sceneRef.current) return;

        const color = "cyan";

        const sphere = new THREE.Mesh(
          new THREE.SphereGeometry(0.5, 32, 32),
          new THREE.MeshStandardMaterial({ color })
        );

        sphere.userData.originalColor = color;

        sphere.position.set(Math.random() * 4 - 2, 0.5, Math.random() * 4 - 2);

        sceneRef.current.add(sphere);
        objectsRef.current.push(sphere);
      },

      deleteSelected() {
        if (!selectedRef.current || !sceneRef.current) return;

        transformRef.current?.detach();

        sceneRef.current.remove(selectedRef.current);

        objectsRef.current = objectsRef.current.filter(
          (obj) => obj !== selectedRef.current
        );

        selectedRef.current = null;
        onSelect?.(null);
      },

      duplicateSelected() {
        if (!selectedRef.current || !sceneRef.current) return;

        const original = selectedRef.current;

        const clone = original.clone();

        // 🔥 deep clone material
        clone.material = (original.material as THREE.Material).clone();

        clone.position.x += 1;
        clone.position.z += 1;

        clone.userData.originalColor = original.userData.originalColor;

        sceneRef.current.add(clone);
        objectsRef.current.push(clone);
      },

      setTransformMode(mode) {
        transformRef.current?.setMode(mode);
      },

      exportScene() {
        return objectsRef.current.map((obj) => ({
          type: obj.geometry.type,
          position: {
            x: obj.position.x,
            y: obj.position.y,
            z: obj.position.z,
          },
          color: (obj.material as THREE.MeshStandardMaterial).color.getHex(),
        }));
      },

      importScene(data) {
        if (!sceneRef.current) return;

        transformRef.current?.detach();
        selectedRef.current = null;

        // clear old
        objectsRef.current.forEach((obj) => sceneRef.current?.remove(obj));
        objectsRef.current = [];

        data.forEach((item: any) => {
          let mesh;

          if (item.type === "BoxGeometry") {
            mesh = new THREE.Mesh(
              new THREE.BoxGeometry(),
              new THREE.MeshStandardMaterial({ color: item.color })
            );
          }

          if (item.type === "SphereGeometry") {
            mesh = new THREE.Mesh(
              new THREE.SphereGeometry(0.5, 32, 32),
              new THREE.MeshStandardMaterial({ color: item.color })
            );
          }

          if (!mesh) return;

          mesh.userData.originalColor = item.color;

          mesh.position.set(item.position.x, item.position.y, item.position.z);

          sceneRef.current!.add(mesh);
          objectsRef.current.push(mesh);
        });
      },
    }));

    useEffect(() => {
      if (!mountRef.current) return;

      const container = mountRef.current;

      const scene = new THREE.Scene();
      scene.background = new THREE.Color("#0f172a");
      sceneRef.current = scene;

      const camera = new THREE.PerspectiveCamera(
        75,
        container.clientWidth / container.clientHeight,
        0.1,
        1000
      );
      camera.position.set(5, 5, 8);
      cameraRef.current = camera;

      const renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(container.clientWidth, container.clientHeight);
      container.appendChild(renderer.domElement);
      rendererRef.current = renderer;

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;

      const transformControls = new TransformControls(
        camera,
        renderer.domElement
      );
      scene.add(transformControls);
      transformRef.current = transformControls;

      (transformControls as any).addEventListener("dragging-changed", (e: any) => {
        controls.enabled = !e.value;
      });

      // SNAP GRID
      (transformControls as any).addEventListener("objectChange", () => {
        const obj = transformControls.object as THREE.Mesh;
        if (!obj) return;

        const snap = 0.5;

        obj.position.x = Math.round(obj.position.x / snap) * snap;
        obj.position.y = Math.round(obj.position.y / snap) * snap;
        obj.position.z = Math.round(obj.position.z / snap) * snap;
      });

      // lights
      scene.add(new THREE.AmbientLight(0xffffff, 0.6));

      const light = new THREE.DirectionalLight(0xffffff, 1);
      light.position.set(5, 10, 5);
      scene.add(light);

      // ground
      const ground = new THREE.Mesh(
        new THREE.PlaneGeometry(50, 50),
        new THREE.MeshStandardMaterial({ color: "#1e293b" })
      );
      ground.rotation.x = -Math.PI / 2;
      scene.add(ground);

      // raycaster
      const raycaster = new THREE.Raycaster();
      const mouse = new THREE.Vector2();

      const handleClick = (event: MouseEvent) => {
        const rect = renderer.domElement.getBoundingClientRect();

        mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

        raycaster.setFromCamera(mouse, camera);

        const intersects = raycaster.intersectObjects(objectsRef.current);

        if (intersects.length > 0) {
          const obj = intersects[0].object as THREE.Mesh;

          selectedRef.current = obj;

          resetColors();

          (obj.material as THREE.MeshStandardMaterial).color.set("yellow");

          safeAttach(obj);

          onSelect?.(obj);
        } else {
          resetColors();
          transformControls.detach();
          selectedRef.current = null;
          onSelect?.(null);
        }
      };

      renderer.domElement.addEventListener("click", handleClick);

      // 🔥 resize fix
      const handleResize = () => {
        if (!mountRef.current || !cameraRef.current || !rendererRef.current)
          return;

        const width = mountRef.current.clientWidth;
        const height = mountRef.current.clientHeight;

        cameraRef.current.aspect = width / height;
        cameraRef.current.updateProjectionMatrix();

        rendererRef.current.setSize(width, height);
      };

      window.addEventListener("resize", handleResize);

      const animate = () => {
        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
      };

      animate();

      return () => {
        renderer.domElement.removeEventListener("click", handleClick);
        window.removeEventListener("resize", handleResize);

        controls.dispose();
        transformControls.dispose();
        renderer.dispose();

        container.removeChild(renderer.domElement);
      };
    }, []);

    return <div ref={mountRef} className="w-full h-full overflow-hidden" />;
  }
);
// dj
export default SceneCanvas;