// @ts-ignore
import * as THREE from 'https://cdn.skypack.dev/three@0.134.0';
// @ts-ignore
import OrbitControls from 'https://cdn.skypack.dev/orbit-controls-es6@2.0.1';

const globe_map_url =
        'https://github.githubassets.com/images/modules/site/home/globe/map.png',
    image = new Image(),
    globe_el = document.getElementById('globe'),
    { width: W, height: H, x: X, y: Y } = globe_el.getBoundingClientRect(),
    GLOBE_RADIUS = 25,
    DEG2RAD = Math.PI / 180,
    worldDotRows = 200,
    worldDotSize = 0.095;

image.src = globe_map_url;
image.crossOrigin = 'Anonymous';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(20, W / H, 170, 260);
camera.position.set(0, 0, 220);

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(W, H);
globe_el.appendChild(renderer.domElement);

const parentContainer = new THREE.Group();
const euler = new THREE.Euler(0.3, 4.6, 0.05);
let rot = euler;
const offset = new Date().getTimezoneOffset() || 0;
rot.y = euler.y + Math.PI * (offset / 720);
parentContainer.rotation.copy(rot);
scene.add(parentContainer);
const haloContainer = new THREE.Group();
scene.add(haloContainer);

// Special Globe object
class GLOBE {
    constructor(t) {
        (this.props = t), this.init();
    }
    init() {
        const {
                radius: t,
                detail: e = 50,
                renderer: n,
                shadowPoint: i,
                highlightPoint: r,
                highlightColor: a,
                frontHighlightColor: s = 3555965,
                waterColor: o = 857395,
                landColorFront: l = 16777215,
                shadowDist: c,
                highlightDist: h,
                frontPoint: d,
            } = this.props,
            u = new THREE.SphereGeometry(t, e, e),
            p = new THREE.MeshStandardMaterial({
                color: o,
                metalness: 0,
                roughness: 0.9,
            });
        (this.uniforms = []),
            (p.onBeforeCompile = (t) => {
                (t.uniforms.shadowDist = {
                    value: c,
                }),
                    (t.uniforms.highlightDist = {
                        value: h,
                    }),
                    (t.uniforms.shadowPoint = {
                        value: new THREE.Vector3().copy(i),
                    }),
                    (t.uniforms.highlightPoint = {
                        value: new THREE.Vector3().copy(r),
                    }),
                    (t.uniforms.frontPoint = {
                        value: new THREE.Vector3().copy(d),
                    }),
                    (t.uniforms.highlightColor = {
                        value: new THREE.Color(a),
                    }),
                    (t.uniforms.frontHighlightColor = {
                        value: new THREE.Color(s),
                    }),
                    (t.vertexShader =
                        '#define GLSLIFY 1\n#define STANDARD\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\nvarying vec3 vWorldPosition;\n\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t// # include <worldpos_vertex>\n    vec4 worldPosition = vec4( transformed, 1.0 );\n\n\t#ifdef USE_INSTANCING\n\n\t\tworldPosition = instanceMatrix * worldPosition;\n\n\t#endif\n\n\tworldPosition = modelMatrix * worldPosition;\n\tvWorldPosition = worldPosition.xyz;\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}'),
                    (t.fragmentShader =
                        '#define GLSLIFY 1\n#define STANDARD\n#ifdef PHYSICAL\n\t#define REFLECTIVITY\n\t#define CLEARCOAT\n\t#define TRANSPARENCY\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef TRANSPARENCY\n\tuniform float transparency;\n#endif\n#ifdef REFLECTIVITY\n\tuniform float reflectivity;\n#endif\n#ifdef CLEARCOAT\n\tuniform float clearcoat;\n\tuniform float clearcoatRoughness;\n#endif\n#ifdef USE_SHEEN\n\tuniform vec3 sheen;\n#endif\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <lights_physical_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nuniform float shadowDist;\nuniform float highlightDist;\nuniform vec3 shadowPoint;\nuniform vec3 highlightPoint;\nuniform vec3 frontPoint;\nuniform vec3 highlightColor;\nuniform vec3 frontHighlightColor;\n\nvarying vec3 vWorldPosition;\n\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#ifdef USE_MAP\n\n\t\tvec4 texelColor = texture2D( map, vUv );\n\t\ttexelColor = mapTexelToLinear( texelColor );\n\t\t\n\t\t#ifndef IS_FILL\n\t\t\tdiffuseColor *= texelColor;\n\t\t#endif\n\n\t#endif\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <clearcoat_normal_fragment_begin>\n\t#include <clearcoat_normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#ifdef TRANSPARENCY\n\t\tdiffuseColor.a *= saturate( 1. - transparency + linearToRelativeLuminance( reflectedLight.directSpecular + reflectedLight.indirectSpecular ) );\n\t#endif\n\n    float dist;\n\tfloat distZ;\n\n    // highlights\n\t#ifdef USE_HIGHLIGHT\n\t\tdist = distance(vWorldPosition, highlightPoint);\n\t\tdistZ = distance(vWorldPosition.z, 0.0);\n\t\toutgoingLight = mix(highlightColor, outgoingLight, smoothstep(0.0, highlightDist, dist) * smoothstep(0.0, 3.0, pow(distZ, 0.5)));\n        outgoingLight = mix(outgoingLight * 2.0, outgoingLight, smoothstep(0.0, 12.0, distZ));\n\t#endif\n\n    // front hightlight\n    #ifdef USE_FRONT_HIGHLIGHT\n        dist = distance(vWorldPosition * vec3(0.875, 0.5, 1.0), frontPoint);\n        outgoingLight = mix(frontHighlightColor * 1.6, outgoingLight, smoothstep(0.0, 15.0, dist));\n    #endif\n\n    // shadows\n    dist = distance(vWorldPosition, shadowPoint);\n\toutgoingLight = mix(outgoingLight * 0.01, outgoingLight, smoothstep(0.0, shadowDist, dist));\n    // shadow debug\n\t// outgoingLight = mix(vec3(1.0, 0.0, 0.0), outgoingLight, smoothstep(0.0, shadowDist, dist));\n\n\t#ifdef IS_FILL\n\t\toutgoingLight = mix(outgoingLight, outgoingLight * 0.5, 1.0 - texelColor.g * 1.5);\n\t#endif\n\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}'),
                    this.uniforms.push(t.uniforms);
            }),
            (p.defines = {
                USE_HIGHLIGHT: 1,
                USE_HIGHLIGHT_ALT: 1,
                USE_FRONT_HIGHLIGHT: 1,
                DITHERING: 1,
            }),
            (this.mesh = new THREE.Group());
        const m = new THREE.Mesh(u, p);
        (m.renderOrder = 1),
            this.mesh.add(m),
            (this.meshFill = m),
            (this.materials = [p]);
    }
    setShadowPoint(t) {
        this.uniforms &&
            this.uniforms.forEach((e) => {
                e.shadowPoint.value.copy(t);
            });
    }
    setHighlightPoint(t) {
        this.uniforms &&
            this.uniforms.forEach((e) => {
                e.highlightPoint.value.copy(t);
            });
    }
    setFrontPoint(t) {
        this.uniforms &&
            this.uniforms.forEach((e) => {
                e.frontPoint.value.copy(t);
            });
    }
    setShadowDist(t) {
        this.uniforms &&
            this.uniforms.forEach((e) => {
                e.shadowDist.value = t;
            });
    }
    setHighlightDist(t) {
        this.uniforms &&
            this.uniforms.forEach((e) => {
                e.highlightDist.value = t;
            });
    }
    dispose() {
        (this.mesh = null),
            (this.materials = null),
            (this.uniforms = null),
            (this.meshFill = null);
    }
}

image.onload = () => {
    // init scene
    // draw globe
    // draw halo
    draw_world_dots();
    // draw arcs
};

// GLOBE WATER
const shadowPoint = new THREE.Vector3()
        .copy(parentContainer.position)
        .add(
            new THREE.Vector3(
                0.7 * GLOBE_RADIUS,
                0.3 * -GLOBE_RADIUS,
                GLOBE_RADIUS
            )
        ),
    highlightPoint = new THREE.Vector3()
        .copy(parentContainer.position)
        .add(new THREE.Vector3(1.5 * -GLOBE_RADIUS, 1.5 * -GLOBE_RADIUS, 0)),
    frontPoint = new THREE.Vector3()
        .copy(parentContainer.position)
        .add(new THREE.Vector3(0, 0, GLOBE_RADIUS)),
    globe = new GLOBE({
        radius: GLOBE_RADIUS,
        detail: 55,
        renderer: renderer,
        shadowPoint: shadowPoint,
        shadowDist: 1.5 * GLOBE_RADIUS,
        highlightPoint: highlightPoint,
        highlightColor: 5339494,
        highlightDist: 5,
        frontPoint: frontPoint,
        frontHighlightColor: 2569853,
        waterColor: 1513012,
        landColorFront: 16777215,
        landColorBack: 16777215,
    });
scene.add(globe.mesh);
//

// HALO
const a = new THREE.SphereGeometry(GLOBE_RADIUS, 45, 45),
    s = new THREE.ShaderMaterial({
        uniforms: {
            c: {
                type: 'f',
                value: 0.7,
            },
            p: {
                type: 'f',
                value: 15,
            },
            glowColor: {
                type: 'c',
                value: new THREE.Color(1844322),
            },
            viewVector: {
                type: 'v3',
                value: new THREE.Vector3(0, 0, 220),
            },
        },
        vertexShader:
            '#define GLSLIFY 1\nuniform vec3 viewVector;\nuniform float c;\nuniform float p;\nvarying float intensity;\nvarying float intensityA;\nvoid main() \n{\n  vec3 vNormal = normalize( normalMatrix * normal );\n  vec3 vNormel = normalize( normalMatrix * viewVector );\n  intensity = pow( c - dot(vNormal, vNormel), p );\n  intensityA = pow( 0.63 - dot(vNormal, vNormel), p );\n  \n  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}',
        fragmentShader:
            '#define GLSLIFY 1\nuniform vec3 glowColor;\nvarying float intensity;\nvarying float intensityA;\nvoid main()\n{\n  gl_FragColor = vec4( glowColor * intensity, 1.0 * intensityA );\n}',
        side: 1,
        blending: 2,
        transparent: !0,
        dithering: !0,
    }),
    halo = new THREE.Mesh(a, s);
halo.scale.multiplyScalar(1.15);
halo.rotateX(0.03 * Math.PI);
halo.rotateY(0.03 * Math.PI);
halo.renderOrder = 3;
haloContainer.add(halo);
haloContainer.position.set(0, 0, -10);

// LIGHTS
const light_amb = new THREE.AmbientLight(16777215, 0.8),
    light_spot_1 = new THREE.SpotLight(2197759, 12, 120, 0.3, 0, 1.1),
    light_spot_2 = new THREE.SpotLight(16018366, 5, 75, 0.5, 0, 1.25),
    light_dir = new THREE.DirectionalLight(11124735, 3);

light_spot_1.position.set(
    parentContainer.position.x - 2.5 * GLOBE_RADIUS,
    80,
    -40
); //.multiplyScalar(t);
light_spot_2.position.set(
    parentContainer.position.x + GLOBE_RADIUS,
    GLOBE_RADIUS,
    2 * GLOBE_RADIUS
); //.multiplyScalar(t)
light_spot_2.distance = 75; // * t
light_dir.position.set(
    parentContainer.position.x - 50,
    parentContainer.position.y + 30,
    10
); //.multiplyScalar(t)

light_spot_1.target = parentContainer;
light_spot_2.target = parentContainer;
light_dir.target = parentContainer;

scene.add(light_amb, light_spot_1, light_spot_2);

// rotate container instaed of camera!
const controls = new OrbitControls(camera, globe_el);
controls.rotateSpeed = 0.05;
controls.enableDamping = true;
controls.dampingFactor = 0.1;
controls.minPolarAngle = Math.PI * 0.3;
controls.maxPolarAngle = Math.PI * 0.6;
controls.enableZoom = false;

const animate = () => {
    requestAnimationFrame(animate);
    parentContainer.rotation.y += 0.002;
    controls.update();
    renderer.render(scene, camera);
};

animate();

function draw_world_dots() {
    const e = new THREE.Object3D(),
        d = getImageData(image),
        i = [],
        r = worldDotRows;
    for (let lat = -90; lat <= 90; lat += 180 / r) {
        const radius = Math.cos(Math.abs(lat) * DEG2RAD) * GLOBE_RADIUS;
        const circum = radius * Math.PI * 2 * 2;
        for (let r = 0; r < circum; r++) {
            const lng = (360 * r) / circum - 180;
            if (!visibilityForCoordinate(lng, lat, d)) continue;
            const s = calc_pos(lat, lng, GLOBE_RADIUS);
            e.position.set(s.x, s.y, s.z);
            const o = calc_pos(lat, lng, GLOBE_RADIUS + 5);
            e.lookAt(o.x, o.y, o.z);
            e.updateMatrix();
            i.push(e.matrix.clone());
        }
    }
    const dot = new THREE.CircleGeometry(worldDotSize, 5),
        dot_mat = new THREE.MeshStandardMaterial({
            color: 3818644,
            metalness: 0,
            roughness: 0.9,
            transparent: !0,
            alphaTest: 0.02,
        });
    dot_mat.onBeforeCompile = (t) => {
        t.fragmentShader = t.fragmentShader.replace(
            'gl_FragColor = vec4( outgoingLight, diffuseColor.a );',
            '\n        gl_FragColor = vec4( outgoingLight, diffuseColor.a );\n        if (gl_FragCoord.z > 0.51) {\n          gl_FragColor.a = 1.0 + ( 0.51 - gl_FragCoord.z ) * 17.0;\n        }\n      '
        );
    };

    const o = new THREE.InstancedMesh(dot, dot_mat, i.length);
    for (let l = 0; l < i.length; l++) o.setMatrixAt(l, i[l]);
    o.renderOrder = 3;
    //worldMesh = o;
    parentContainer.add(o);
}

function visibilityForCoordinate(lng, lat, data) {
    const i = 4 * data.width,
        // @ts-ignore
        r = parseInt(((lng + 180) / 360) * data.width + 0.5),
        // @ts-ignore
        a = data.height - parseInt(((lat + 90) / 180) * data.height - 0.5),
        // @ts-ignore
        s = parseInt(i * (a - 1) + 4 * r) + 3;
    return data.data[s] > 90;
}

function getImageData(img) {
    const el = document.createElement('canvas').getContext('2d');
    return (
        (el.canvas.width = img.width),
        (el.canvas.height = img.height),
        el.drawImage(img, 0, 0, img.width, img.height),
        el.getImageData(0, 0, img.width, img.height)
    );
}

function calc_pos(lat, lng, R, vec) {
    vec = vec || new THREE.Vector3();
    const V = (90 - lat) * DEG2RAD,
        H = (lng + 180) * DEG2RAD;
    return (
        vec.set(
            -R * Math.sin(V) * Math.cos(H),
            R * Math.cos(V),
            R * Math.sin(V) * Math.sin(H)
        ),
        vec
    );
}
