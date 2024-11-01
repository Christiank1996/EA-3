
// Get the WebGL context.
var canvas = document.getElementById('canvas');
var gl = canvas.getContext('experimental-webgl');

// Pipeline setup.
gl.clearColor(1, 1, 1, 1);
// Backface culling.
gl.frontFace(gl.CCW);
gl.enable(gl.CULL_FACE);
gl.cullFace(gl.BACK); // or gl.FRONT

// Compile vertex shader.
var vsSource = ''+
    'attribute vec3 pos;'+
    'attribute vec4 col;'+
    'varying vec4 color;'+
    'void main(){'+
    'color = col;'+                 
    'gl_Position = vec4(pos, 1);'+
    '}'; 
var vs = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(vs, vsSource);
gl.compileShader(vs);

// Compile fragment shader.
fsSouce = 'precision mediump float;'+ 
  'varying vec4 color;'+
  'void main() {'+
  'gl_FragColor = color;'+
  '}';
var fs = gl.createShader(gl.FRAGMENT_SHADER);
gl.shaderSource(fs, fsSouce);
gl.compileShader(fs);

// Link shader together into a program.
var prog = gl.createProgram();
gl.attachShader(prog, vs);
gl.attachShader(prog, fs);
gl.linkProgram(prog);
gl.useProgram(prog);

  // Farben
  // braun: 0.37,0.23,0.1,1
  // blau: 0.14,0.34,0.36,1
  // rot: 0.98,0.31,0.13,1

// Vertex data. Positions.
var vertices = new Float32Array([
  // Schuhe
  0.05,0,0, 0.2,0,0, 0.2,0.05,0, 0.05,0.05,0,
  0.1,0.05,0, 0.2,0.05,0, 0.2,0.1,0, 0.1,0.1,0,
  0.4,0,0, 0.55,0,0, 0.55,0.05,0, 0.4,0.05,0,
  0.4,0.05,0, 0.5,0.05,0, 0.5,0.1,0, 0.4,0.1,0,
  
  // Hose
  0.1,0.1,0, 0.25,0.1,0, 0.25,0.15,0, 0.1,0.15,0,
  0.35,0.1,0, 0.50,0.1,0, 0.50,0.15,0, 0.35,0.15,0,
  0.1,0.15,0, 0.5,0.15,0, 0.5,0.2,0, 0.1,0.2,0,
  0.15,0.2,0, 0.45,0.2,0, 0.45,0.25,0, 0.15,0.25,0,
  0.15,0.25,0, 0.2,0.25,0, 0.2,0.3,0, 0.15,0.3,0,
  0.4,0.25,0, 0.45,0.25,0, 0.45,0.3,0, 0.4,0.3,0,
  0.25,0.25,0, 0.35,0.25,0, 0.35,0.3,0, 0.25,0.3,0,
  0.2,0.3,0, 0.4,0.3,0, 0.4,0.35,0, 0.2,0.35,0,
  0.2,0.35,0, 0.25,0.35,0, 0.25,0.45,0, 0.2,0.45,0,
  0.35,0.35,0, 0.4,0.35,0, 0.4,0.45,0, 0.35,0.45,0,
  
  // Knöpfe
  0.2,0.25,0, 0.25,0.25,0, 0.25,0.3,0, 0.2,0.3,0,
  0.35,0.25,0, 0.4,0.25,0, 0.4,0.3,0, 0.35,0.3,0,
  
  // Hände
  0,0.15,0, 0.1,0.15,0, 0.1,0.3,0, 0,0.3,0,
  0.5,0.15,0, 0.6,0.15,0, 0.6,0.3,0, 0.5,0.3,0,
  0.1,0.2,0, 0.15,0.2,0, 0.15,0.25,0, 0.1,0.25,0,
  0.45,0.2,0, 0.5,0.2,0, 0.5,0.25,0, 0.45,0.25,0,
  
  // rote Jacke
  0.1,0.25,0, 0.15,0.25,0, 0.15,0.30,0, 0.1,0.30,0,
  0.45,0.25,0, 0.5,0.25,0, 0.5,0.30,0, 0.45,0.30,0,
  0,0.30,0, 0.05,0.30,0, 0.05,0.35,0, 0,0.35,0,
  0.55,0.3,0, 0.6,0.3,0, 0.6,0.35,0, 0.55,0.35,0,
  0.05,0.3,0, 0.2,0.3,0, 0.2,0.4,0, 0.05,0.4,0,
  0.4,0.3,0, 0.55,0.3,0, 0.55,0.4,0, 0.4,0.4,0,
  0.1,0.4,0, 0.2,0.4,0, 0.2,0.45,0, 0.1,0.45,0,
  0.4,0.4,0, 0.5,0.4,0, 0.5,0.45,0, 0.4,0.45,0,
  0.25,0.35,0, 0.35,0.35,0, 0.35,0.45,0, 0.25,0.45,0,
  
  // Gesicht
  0.15,0.45,0, 0.35,0.45,0, 0.35,0.55,0, 0.15,0.55,0,
  0.25,0.55,0, 0.35,0.55,0, 0.35,0.7,0, 0.25,0.7,0,
  0.35,0.45,0, 0.45,0.45,0, 0.45,0.5,0, 0.35,0.5,0,
  0.35,0.55,0, 0.4,0.55,0, 0.4,0.6,0, 0.35,0.6,0,
  0.2,0.6,0, 0.25,0.6,0, 0.25,0.65,0, 0.2,0.65,0,
  0.1,0.55,0, 0.15,0.55,0, 0.15,0.65,0, 0.1,0.65,0,
  0.4,0.65,0, 0.45,0.65,0, 0.45,0.7,0, 0.4,0.7,0,
  0.4,0.6,0, 0.55,0.6,0, 0.55,0.65,0, 0.4,0.65,0,
  0.45,0.55,0, 0.6,0.55,0, 0.6,0.6,0, 0.45,0.6,0,
  
  // Haare
  0.05,0.5,0, 0.15,0.5,0, 0.15,0.55,0, 0.05,0.55,0,
  0.05,0.55,0, 0.1,0.55,0, 0.1,0.65,0, 0.05,0.65,0,
  0.1,0.65,0, 0.25,0.65,0, 0.25,0.7,0, 0.1,0.7,0,
  0.15,0.55,0, 0.2,0.55,0, 0.2,0.65,0, 0.15,0.65,0,
  0.2,0.55,0, 0.25,0.55,0, 0.25,0.6,0, 0.2,0.6,0,
  0.35,0.5,0, 0.55,0.5,0, 0.55,0.55,0, 0.35,0.55,0,
  0.4,0.55,0, 0.45,0.55,0, 0.45,0.6,0, 0.4,0.6,0,
  
  // Augen
  0.35,0.6,0, 0.4,0.6,0, 0.4,0.7,0, 0.35,0.7,0,
  
  // Mütze
  0.1,0.7,0, 0.55,0.7,0, 0.55,0.75,0, 0.1,0.75,0,
  0.15,0.75,0, 0.4,0.75,0, 0.4,0.8,0, 0.15,0.8,0,
  
  
]);
var colors = new Float32Array([
  // Schuhe
  0.37,0.23,0.1,1, 0.37,0.23,0.1,1, 0.37,0.23,0.1,1, 0.37,0.23,0.1,1,
  0.37,0.23,0.1,1, 0.37,0.23,0.1,1, 0.37,0.23,0.1,1, 0.37,0.23,0.1,1,
  0.37,0.23,0.1,1, 0.37,0.23,0.1,1, 0.37,0.23,0.1,1, 0.37,0.23,0.1,1,
  0.37,0.23,0.1,1, 0.37,0.23,0.1,1, 0.37,0.23,0.1,1, 0.37,0.23,0.1,1,
  
  // Hose
  0.14,0.34,0.94,1, 0.14,0.34,0.94,1, 0.14,0.34,0.94,1, 0.14,0.34,0.94,1,
  0.14,0.34,0.94,1, 0.14,0.34,0.94,1, 0.14,0.34,0.94,1, 0.14,0.34,0.94,1,
  0.14,0.34,0.94,1, 0.14,0.34,0.94,1, 0.14,0.34,0.94,1, 0.14,0.34,0.94,1,
  0.14,0.34,0.94,1, 0.14,0.34,0.94,1, 0.14,0.34,0.94,1, 0.14,0.34,0.94,1,
  0.14,0.34,0.94,1, 0.14,0.34,0.94,1, 0.14,0.34,0.94,1, 0.14,0.34,0.94,1,
  0.14,0.34,0.94,1, 0.14,0.34,0.94,1, 0.14,0.34,0.94,1, 0.14,0.34,0.94,1,
  0.14,0.34,0.94,1, 0.14,0.34,0.94,1, 0.14,0.34,0.94,1, 0.14,0.34,0.94,1,
  0.14,0.34,0.94,1, 0.14,0.34,0.94,1, 0.14,0.34,0.94,1, 0.14,0.34,0.94,1,
  0.14,0.34,0.94,1, 0.14,0.34,0.94,1, 0.14,0.34,0.94,1, 0.14,0.34,0.94,1,
  0.14,0.34,0.94,1, 0.14,0.34,0.94,1, 0.14,0.34,0.94,1, 0.14,0.34,0.94,1,
  
  // Knöpfe
  0.94,0.9,0.1,1, 0.94,0.9,0.1,1, 0.94,0.9,0.1,1, 0.94,0.9,0.1,1,
  0.94,0.9,0.1,1, 0.94,0.9,0.1,1, 0.94,0.9,0.1,1, 0.94,0.9,0.1,1,
  
  // Hände
  1,0.86,0.7,1, 1,0.86,0.7,1, 1,0.86,0.7,1, 1,0.86,0.7,1,
  1,0.86,0.7,1, 1,0.86,0.7,1, 1,0.86,0.7,1, 1,0.86,0.7,1,
  1,0.86,0.7,1, 1,0.86,0.7,1, 1,0.86,0.7,1, 1,0.86,0.7,1,
  1,0.86,0.7,1, 1,0.86,0.7,1, 1,0.86,0.7,1, 1,0.86,0.7,1,
  
  // rote Jacke
  0.98,0.31,0.13,1, 0.98,0.31,0.13,1, 0.98,0.31,0.13,1, 0.98,0.31,0.13,1,
  0.98,0.31,0.13,1, 0.98,0.31,0.13,1, 0.98,0.31,0.13,1, 0.98,0.31,0.13,1,
  0.98,0.31,0.13,1, 0.98,0.31,0.13,1, 0.98,0.31,0.13,1, 0.98,0.31,0.13,1,
  0.98,0.31,0.13,1, 0.98,0.31,0.13,1, 0.98,0.31,0.13,1, 0.98,0.31,0.13,1,
  0.98,0.31,0.13,1, 0.98,0.31,0.13,1, 0.98,0.31,0.13,1, 0.98,0.31,0.13,1,
  0.98,0.31,0.13,1, 0.98,0.31,0.13,1, 0.98,0.31,0.13,1, 0.98,0.31,0.13,1,
  0.98,0.31,0.13,1, 0.98,0.31,0.13,1, 0.98,0.31,0.13,1, 0.98,0.31,0.13,1,
  0.98,0.31,0.13,1, 0.98,0.31,0.13,1, 0.98,0.31,0.13,1, 0.98,0.31,0.13,1,
  0.98,0.31,0.13,1, 0.98,0.31,0.13,1, 0.98,0.31,0.13,1, 0.98,0.31,0.13,1,
  
  // Gesicht
  1,0.86,0.7,1, 1,0.86,0.7,1, 1,0.86,0.7,1, 1,0.86,0.7,1,
  1,0.86,0.7,1, 1,0.86,0.7,1, 1,0.86,0.7,1, 1,0.86,0.7,1,
  1,0.86,0.7,1, 1,0.86,0.7,1, 1,0.86,0.7,1, 1,0.86,0.7,1,
  1,0.86,0.7,1, 1,0.86,0.7,1, 1,0.86,0.7,1, 1,0.86,0.7,1,
  1,0.86,0.7,1, 1,0.86,0.7,1, 1,0.86,0.7,1, 1,0.86,0.7,1,
  1,0.86,0.7,1, 1,0.86,0.7,1, 1,0.86,0.7,1, 1,0.86,0.7,1,
  1,0.86,0.7,1, 1,0.86,0.7,1, 1,0.86,0.7,1, 1,0.86,0.7,1,
  1,0.86,0.7,1, 1,0.86,0.7,1, 1,0.86,0.7,1, 1,0.86,0.7,1,
  1,0.86,0.7,1, 1,0.86,0.7,1, 1,0.86,0.7,1, 1,0.86,0.7,1,
  
  // Haare
  0.37,0.23,0.1,1, 0.37,0.23,0.1,1, 0.37,0.23,0.1,1, 0.37,0.23,0.1,1,
  0.37,0.23,0.1,1, 0.37,0.23,0.1,1, 0.37,0.23,0.1,1, 0.37,0.23,0.1,1,
  0.37,0.23,0.1,1, 0.37,0.23,0.1,1, 0.37,0.23,0.1,1, 0.37,0.23,0.1,1,
  0.37,0.23,0.1,1, 0.37,0.23,0.1,1, 0.37,0.23,0.1,1, 0.37,0.23,0.1,1,
  0.37,0.23,0.1,1, 0.37,0.23,0.1,1, 0.37,0.23,0.1,1, 0.37,0.23,0.1,1,
  0.37,0.23,0.1,1, 0.37,0.23,0.1,1, 0.37,0.23,0.1,1, 0.37,0.23,0.1,1,
  0.37,0.23,0.1,1, 0.37,0.23,0.1,1, 0.37,0.23,0.1,1, 0.37,0.23,0.1,1,
  
  // Augen
  0,0,0,1, 0,0,0,1, 0,0,0,1, 0,0,0,1,
  
  // Mütze
  0.98,0.31,0.13,1, 0.98,0.31,0.13,1, 0.98,0.31,0.13,1, 0.98,0.31,0.13,1,
  0.98,0.31,0.13,1, 0.98,0.31,0.13,1, 0.98,0.31,0.13,1, 0.98,0.31,0.13,1,
  
  
]);          
// Index data.
var indices = new Uint16Array([
  // Schuhe
  0,1,2, 0,2,3,
  4,5,6, 4,6,7,
  8,9,10, 8,10,11,
  12,13,14, 12,14,15,
  
  // Hose
  16,17,18, 16,18,19,
  20,21,22, 20,22,23,
  24,25,26, 24,26,27,
  28,29,30, 28,30,31,
  32,33,34, 32,34,35,
  36,37,38, 36,38,39,
  40,41,42, 40,42,43,
  44,45,46, 44,46,47,
  48,49,50, 48,50,51,
  52,53,54, 52,54,55,
  
  // Knöpfe
  56,57,58, 56,58,59,
  60,61,62, 60,62,63,
  
  // Hände
  64,65,66, 64,66,67,
  68,69,70, 68,70,71,
  72,73,74, 72,74,75,
  76,77,78, 76,78,79,
  80,81,82, 80,82,83,
  84,85,86, 84,86,87,
  88,89,90, 88,90,91,
  92,93,94, 92,94,95,
  96,97,98, 96,98,99,
  100,101,102, 100,102,103,
  104,105,106, 104,106,107,
  108,109,110, 108,110,111,
  112,113,114, 112,114,115,
  
  // Gesicht
  116,117,118, 116,118,119,
  120,121,122, 120,122,123,
  124,125,126, 124,126,127,
  128,129,130, 128,130,131,
  132,133,134, 132,134,135,
  136,137,138, 136,138,139,
  140,141,142, 140,142,143,
  144,145,146, 144,146,147,
  148,149,150, 148,150,151,
  
  // Haare
  152,153,154, 152,154,155,
  156,157,158, 156,158,159,
  160,161,162, 160,162,163,
  164,165,166, 164,166,167,
  168,169,170, 168,170,171,
  172,173,174, 172,174,175,
  176,177,178, 176,178,179,
  180,181,182, 180,182,183,
  
  // Mütze
  184,185,186, 184,186,187,
  188,189,190, 188,190,191,
]);

// Setup position vertex buffer object.
var vboPos = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, vboPos);
gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
// Bind vertex buffer to attribute variable.
var posAttrib = gl.getAttribLocation(prog, 'pos');
gl.vertexAttribPointer(posAttrib, 3, gl.FLOAT, false, 0, 0);
gl.enableVertexAttribArray(posAttrib);

// Setup color vertex buffer object.
var vboCol = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, vboCol);
gl.bufferData(gl.ARRAY_BUFFER, colors, gl.STATIC_DRAW);
// Bind vertex buffer to attribute variable.
var colAttrib = gl.getAttribLocation(prog, 'col');
gl.vertexAttribPointer(colAttrib, 4, gl.FLOAT, false, 0, 0);
gl.enableVertexAttribArray(colAttrib);

// Setup index buffer object.
var ibo = gl.createBuffer();
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, ibo);
gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, indices, 
              gl.STATIC_DRAW);
ibo.numerOfEmements = indices.length;

// Clear framebuffer and render primitives.
gl.clear(gl.COLOR_BUFFER_BIT);
gl.drawElements(gl.TRIANGLES, ibo.numerOfEmements, 
                gl.UNSIGNED_SHORT, 0);
