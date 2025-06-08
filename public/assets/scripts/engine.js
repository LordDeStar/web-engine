/******/ var __webpack_modules__ = ({

/***/ "./node_modules/gl-matrix/esm/common.js":
/*!**********************************************!*\
  !*** ./node_modules/gl-matrix/esm/common.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
  /* harmony export */   ARRAY_TYPE: () => (/* binding */ ARRAY_TYPE),
  /* harmony export */   EPSILON: () => (/* binding */ EPSILON),
  /* harmony export */   RANDOM: () => (/* binding */ RANDOM),
  /* harmony export */   equals: () => (/* binding */ equals),
  /* harmony export */   setMatrixArrayType: () => (/* binding */ setMatrixArrayType),
  /* harmony export */   toRadian: () => (/* binding */ toRadian)
  /* harmony export */ });
  /**
   * Common utilities
   * @module glMatrix
   */
  // Configuration Constants
  var EPSILON = 0.000001;
  var ARRAY_TYPE = typeof Float32Array !== 'undefined' ? Float32Array : Array;
  var RANDOM = Math.random;
  /**
   * Sets the type of array used when creating new vectors and matrices
   *
   * @param {Float32ArrayConstructor | ArrayConstructor} type Array type, such as Float32Array or Array
   */
  
  function setMatrixArrayType(type) {
    ARRAY_TYPE = type;
  }
  var degree = Math.PI / 180;
  /**
   * Convert Degree To Radian
   *
   * @param {Number} a Angle in Degrees
   */
  
  function toRadian(a) {
    return a * degree;
  }
  /**
   * Tests whether or not the arguments have approximately the same value, within an absolute
   * or relative tolerance of glMatrix.EPSILON (an absolute tolerance is used for values less
   * than or equal to 1.0, and a relative tolerance is used for larger values)
   *
   * @param {Number} a The first number to test.
   * @param {Number} b The second number to test.
   * @returns {Boolean} True if the numbers are approximately equal, false otherwise.
   */
  
  function equals(a, b) {
    return Math.abs(a - b) <= EPSILON * Math.max(1.0, Math.abs(a), Math.abs(b));
  }
  if (!Math.hypot) Math.hypot = function () {
    var y = 0,
        i = arguments.length;
  
    while (i--) {
      y += arguments[i] * arguments[i];
    }
  
    return Math.sqrt(y);
  };
  
  /***/ }),
  
  /***/ "./node_modules/gl-matrix/esm/mat4.js":
  /*!********************************************!*\
    !*** ./node_modules/gl-matrix/esm/mat4.js ***!
    \********************************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
  /* harmony export */   add: () => (/* binding */ add),
  /* harmony export */   adjoint: () => (/* binding */ adjoint),
  /* harmony export */   clone: () => (/* binding */ clone),
  /* harmony export */   copy: () => (/* binding */ copy),
  /* harmony export */   create: () => (/* binding */ create),
  /* harmony export */   determinant: () => (/* binding */ determinant),
  /* harmony export */   equals: () => (/* binding */ equals),
  /* harmony export */   exactEquals: () => (/* binding */ exactEquals),
  /* harmony export */   frob: () => (/* binding */ frob),
  /* harmony export */   fromQuat: () => (/* binding */ fromQuat),
  /* harmony export */   fromQuat2: () => (/* binding */ fromQuat2),
  /* harmony export */   fromRotation: () => (/* binding */ fromRotation),
  /* harmony export */   fromRotationTranslation: () => (/* binding */ fromRotationTranslation),
  /* harmony export */   fromRotationTranslationScale: () => (/* binding */ fromRotationTranslationScale),
  /* harmony export */   fromRotationTranslationScaleOrigin: () => (/* binding */ fromRotationTranslationScaleOrigin),
  /* harmony export */   fromScaling: () => (/* binding */ fromScaling),
  /* harmony export */   fromTranslation: () => (/* binding */ fromTranslation),
  /* harmony export */   fromValues: () => (/* binding */ fromValues),
  /* harmony export */   fromXRotation: () => (/* binding */ fromXRotation),
  /* harmony export */   fromYRotation: () => (/* binding */ fromYRotation),
  /* harmony export */   fromZRotation: () => (/* binding */ fromZRotation),
  /* harmony export */   frustum: () => (/* binding */ frustum),
  /* harmony export */   getRotation: () => (/* binding */ getRotation),
  /* harmony export */   getScaling: () => (/* binding */ getScaling),
  /* harmony export */   getTranslation: () => (/* binding */ getTranslation),
  /* harmony export */   identity: () => (/* binding */ identity),
  /* harmony export */   invert: () => (/* binding */ invert),
  /* harmony export */   lookAt: () => (/* binding */ lookAt),
  /* harmony export */   mul: () => (/* binding */ mul),
  /* harmony export */   multiply: () => (/* binding */ multiply),
  /* harmony export */   multiplyScalar: () => (/* binding */ multiplyScalar),
  /* harmony export */   multiplyScalarAndAdd: () => (/* binding */ multiplyScalarAndAdd),
  /* harmony export */   ortho: () => (/* binding */ ortho),
  /* harmony export */   orthoNO: () => (/* binding */ orthoNO),
  /* harmony export */   orthoZO: () => (/* binding */ orthoZO),
  /* harmony export */   perspective: () => (/* binding */ perspective),
  /* harmony export */   perspectiveFromFieldOfView: () => (/* binding */ perspectiveFromFieldOfView),
  /* harmony export */   perspectiveNO: () => (/* binding */ perspectiveNO),
  /* harmony export */   perspectiveZO: () => (/* binding */ perspectiveZO),
  /* harmony export */   rotate: () => (/* binding */ rotate),
  /* harmony export */   rotateX: () => (/* binding */ rotateX),
  /* harmony export */   rotateY: () => (/* binding */ rotateY),
  /* harmony export */   rotateZ: () => (/* binding */ rotateZ),
  /* harmony export */   scale: () => (/* binding */ scale),
  /* harmony export */   set: () => (/* binding */ set),
  /* harmony export */   str: () => (/* binding */ str),
  /* harmony export */   sub: () => (/* binding */ sub),
  /* harmony export */   subtract: () => (/* binding */ subtract),
  /* harmony export */   targetTo: () => (/* binding */ targetTo),
  /* harmony export */   translate: () => (/* binding */ translate),
  /* harmony export */   transpose: () => (/* binding */ transpose)
  /* harmony export */ });
  /* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/gl-matrix/esm/common.js");
  
  /**
   * 4x4 Matrix<br>Format: column-major, when typed out it looks like row-major<br>The matrices are being post multiplied.
   * @module mat4
   */
  
  /**
   * Creates a new identity mat4
   *
   * @returns {mat4} a new 4x4 matrix
   */
  
  function create() {
    var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(16);
  
    if (_common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE != Float32Array) {
      out[1] = 0;
      out[2] = 0;
      out[3] = 0;
      out[4] = 0;
      out[6] = 0;
      out[7] = 0;
      out[8] = 0;
      out[9] = 0;
      out[11] = 0;
      out[12] = 0;
      out[13] = 0;
      out[14] = 0;
    }
  
    out[0] = 1;
    out[5] = 1;
    out[10] = 1;
    out[15] = 1;
    return out;
  }
  /**
   * Creates a new mat4 initialized with values from an existing matrix
   *
   * @param {ReadonlyMat4} a matrix to clone
   * @returns {mat4} a new 4x4 matrix
   */
  
  function clone(a) {
    var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(16);
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[8] = a[8];
    out[9] = a[9];
    out[10] = a[10];
    out[11] = a[11];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
    return out;
  }
  /**
   * Copy the values from one mat4 to another
   *
   * @param {mat4} out the receiving matrix
   * @param {ReadonlyMat4} a the source matrix
   * @returns {mat4} out
   */
  
  function copy(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[8] = a[8];
    out[9] = a[9];
    out[10] = a[10];
    out[11] = a[11];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
    return out;
  }
  /**
   * Create a new mat4 with the given values
   *
   * @param {Number} m00 Component in column 0, row 0 position (index 0)
   * @param {Number} m01 Component in column 0, row 1 position (index 1)
   * @param {Number} m02 Component in column 0, row 2 position (index 2)
   * @param {Number} m03 Component in column 0, row 3 position (index 3)
   * @param {Number} m10 Component in column 1, row 0 position (index 4)
   * @param {Number} m11 Component in column 1, row 1 position (index 5)
   * @param {Number} m12 Component in column 1, row 2 position (index 6)
   * @param {Number} m13 Component in column 1, row 3 position (index 7)
   * @param {Number} m20 Component in column 2, row 0 position (index 8)
   * @param {Number} m21 Component in column 2, row 1 position (index 9)
   * @param {Number} m22 Component in column 2, row 2 position (index 10)
   * @param {Number} m23 Component in column 2, row 3 position (index 11)
   * @param {Number} m30 Component in column 3, row 0 position (index 12)
   * @param {Number} m31 Component in column 3, row 1 position (index 13)
   * @param {Number} m32 Component in column 3, row 2 position (index 14)
   * @param {Number} m33 Component in column 3, row 3 position (index 15)
   * @returns {mat4} A new mat4
   */
  
  function fromValues(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
    var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(16);
    out[0] = m00;
    out[1] = m01;
    out[2] = m02;
    out[3] = m03;
    out[4] = m10;
    out[5] = m11;
    out[6] = m12;
    out[7] = m13;
    out[8] = m20;
    out[9] = m21;
    out[10] = m22;
    out[11] = m23;
    out[12] = m30;
    out[13] = m31;
    out[14] = m32;
    out[15] = m33;
    return out;
  }
  /**
   * Set the components of a mat4 to the given values
   *
   * @param {mat4} out the receiving matrix
   * @param {Number} m00 Component in column 0, row 0 position (index 0)
   * @param {Number} m01 Component in column 0, row 1 position (index 1)
   * @param {Number} m02 Component in column 0, row 2 position (index 2)
   * @param {Number} m03 Component in column 0, row 3 position (index 3)
   * @param {Number} m10 Component in column 1, row 0 position (index 4)
   * @param {Number} m11 Component in column 1, row 1 position (index 5)
   * @param {Number} m12 Component in column 1, row 2 position (index 6)
   * @param {Number} m13 Component in column 1, row 3 position (index 7)
   * @param {Number} m20 Component in column 2, row 0 position (index 8)
   * @param {Number} m21 Component in column 2, row 1 position (index 9)
   * @param {Number} m22 Component in column 2, row 2 position (index 10)
   * @param {Number} m23 Component in column 2, row 3 position (index 11)
   * @param {Number} m30 Component in column 3, row 0 position (index 12)
   * @param {Number} m31 Component in column 3, row 1 position (index 13)
   * @param {Number} m32 Component in column 3, row 2 position (index 14)
   * @param {Number} m33 Component in column 3, row 3 position (index 15)
   * @returns {mat4} out
   */
  
  function set(out, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
    out[0] = m00;
    out[1] = m01;
    out[2] = m02;
    out[3] = m03;
    out[4] = m10;
    out[5] = m11;
    out[6] = m12;
    out[7] = m13;
    out[8] = m20;
    out[9] = m21;
    out[10] = m22;
    out[11] = m23;
    out[12] = m30;
    out[13] = m31;
    out[14] = m32;
    out[15] = m33;
    return out;
  }
  /**
   * Set a mat4 to the identity matrix
   *
   * @param {mat4} out the receiving matrix
   * @returns {mat4} out
   */
  
  function identity(out) {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = 1;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 1;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
  }
  /**
   * Transpose the values of a mat4
   *
   * @param {mat4} out the receiving matrix
   * @param {ReadonlyMat4} a the source matrix
   * @returns {mat4} out
   */
  
  function transpose(out, a) {
    // If we are transposing ourselves we can skip a few steps but have to cache some values
    if (out === a) {
      var a01 = a[1],
          a02 = a[2],
          a03 = a[3];
      var a12 = a[6],
          a13 = a[7];
      var a23 = a[11];
      out[1] = a[4];
      out[2] = a[8];
      out[3] = a[12];
      out[4] = a01;
      out[6] = a[9];
      out[7] = a[13];
      out[8] = a02;
      out[9] = a12;
      out[11] = a[14];
      out[12] = a03;
      out[13] = a13;
      out[14] = a23;
    } else {
      out[0] = a[0];
      out[1] = a[4];
      out[2] = a[8];
      out[3] = a[12];
      out[4] = a[1];
      out[5] = a[5];
      out[6] = a[9];
      out[7] = a[13];
      out[8] = a[2];
      out[9] = a[6];
      out[10] = a[10];
      out[11] = a[14];
      out[12] = a[3];
      out[13] = a[7];
      out[14] = a[11];
      out[15] = a[15];
    }
  
    return out;
  }
  /**
   * Inverts a mat4
   *
   * @param {mat4} out the receiving matrix
   * @param {ReadonlyMat4} a the source matrix
   * @returns {mat4} out
   */
  
  function invert(out, a) {
    var a00 = a[0],
        a01 = a[1],
        a02 = a[2],
        a03 = a[3];
    var a10 = a[4],
        a11 = a[5],
        a12 = a[6],
        a13 = a[7];
    var a20 = a[8],
        a21 = a[9],
        a22 = a[10],
        a23 = a[11];
    var a30 = a[12],
        a31 = a[13],
        a32 = a[14],
        a33 = a[15];
    var b00 = a00 * a11 - a01 * a10;
    var b01 = a00 * a12 - a02 * a10;
    var b02 = a00 * a13 - a03 * a10;
    var b03 = a01 * a12 - a02 * a11;
    var b04 = a01 * a13 - a03 * a11;
    var b05 = a02 * a13 - a03 * a12;
    var b06 = a20 * a31 - a21 * a30;
    var b07 = a20 * a32 - a22 * a30;
    var b08 = a20 * a33 - a23 * a30;
    var b09 = a21 * a32 - a22 * a31;
    var b10 = a21 * a33 - a23 * a31;
    var b11 = a22 * a33 - a23 * a32; // Calculate the determinant
  
    var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
  
    if (!det) {
      return null;
    }
  
    det = 1.0 / det;
    out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
    out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
    out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
    out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
    out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
    out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
    out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
    out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
    out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
    out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
    out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
    out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
    out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
    out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
    out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
    out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;
    return out;
  }
  /**
   * Calculates the adjugate of a mat4
   *
   * @param {mat4} out the receiving matrix
   * @param {ReadonlyMat4} a the source matrix
   * @returns {mat4} out
   */
  
  function adjoint(out, a) {
    var a00 = a[0],
        a01 = a[1],
        a02 = a[2],
        a03 = a[3];
    var a10 = a[4],
        a11 = a[5],
        a12 = a[6],
        a13 = a[7];
    var a20 = a[8],
        a21 = a[9],
        a22 = a[10],
        a23 = a[11];
    var a30 = a[12],
        a31 = a[13],
        a32 = a[14],
        a33 = a[15];
    out[0] = a11 * (a22 * a33 - a23 * a32) - a21 * (a12 * a33 - a13 * a32) + a31 * (a12 * a23 - a13 * a22);
    out[1] = -(a01 * (a22 * a33 - a23 * a32) - a21 * (a02 * a33 - a03 * a32) + a31 * (a02 * a23 - a03 * a22));
    out[2] = a01 * (a12 * a33 - a13 * a32) - a11 * (a02 * a33 - a03 * a32) + a31 * (a02 * a13 - a03 * a12);
    out[3] = -(a01 * (a12 * a23 - a13 * a22) - a11 * (a02 * a23 - a03 * a22) + a21 * (a02 * a13 - a03 * a12));
    out[4] = -(a10 * (a22 * a33 - a23 * a32) - a20 * (a12 * a33 - a13 * a32) + a30 * (a12 * a23 - a13 * a22));
    out[5] = a00 * (a22 * a33 - a23 * a32) - a20 * (a02 * a33 - a03 * a32) + a30 * (a02 * a23 - a03 * a22);
    out[6] = -(a00 * (a12 * a33 - a13 * a32) - a10 * (a02 * a33 - a03 * a32) + a30 * (a02 * a13 - a03 * a12));
    out[7] = a00 * (a12 * a23 - a13 * a22) - a10 * (a02 * a23 - a03 * a22) + a20 * (a02 * a13 - a03 * a12);
    out[8] = a10 * (a21 * a33 - a23 * a31) - a20 * (a11 * a33 - a13 * a31) + a30 * (a11 * a23 - a13 * a21);
    out[9] = -(a00 * (a21 * a33 - a23 * a31) - a20 * (a01 * a33 - a03 * a31) + a30 * (a01 * a23 - a03 * a21));
    out[10] = a00 * (a11 * a33 - a13 * a31) - a10 * (a01 * a33 - a03 * a31) + a30 * (a01 * a13 - a03 * a11);
    out[11] = -(a00 * (a11 * a23 - a13 * a21) - a10 * (a01 * a23 - a03 * a21) + a20 * (a01 * a13 - a03 * a11));
    out[12] = -(a10 * (a21 * a32 - a22 * a31) - a20 * (a11 * a32 - a12 * a31) + a30 * (a11 * a22 - a12 * a21));
    out[13] = a00 * (a21 * a32 - a22 * a31) - a20 * (a01 * a32 - a02 * a31) + a30 * (a01 * a22 - a02 * a21);
    out[14] = -(a00 * (a11 * a32 - a12 * a31) - a10 * (a01 * a32 - a02 * a31) + a30 * (a01 * a12 - a02 * a11));
    out[15] = a00 * (a11 * a22 - a12 * a21) - a10 * (a01 * a22 - a02 * a21) + a20 * (a01 * a12 - a02 * a11);
    return out;
  }
  /**
   * Calculates the determinant of a mat4
   *
   * @param {ReadonlyMat4} a the source matrix
   * @returns {Number} determinant of a
   */
  
  function determinant(a) {
    var a00 = a[0],
        a01 = a[1],
        a02 = a[2],
        a03 = a[3];
    var a10 = a[4],
        a11 = a[5],
        a12 = a[6],
        a13 = a[7];
    var a20 = a[8],
        a21 = a[9],
        a22 = a[10],
        a23 = a[11];
    var a30 = a[12],
        a31 = a[13],
        a32 = a[14],
        a33 = a[15];
    var b00 = a00 * a11 - a01 * a10;
    var b01 = a00 * a12 - a02 * a10;
    var b02 = a00 * a13 - a03 * a10;
    var b03 = a01 * a12 - a02 * a11;
    var b04 = a01 * a13 - a03 * a11;
    var b05 = a02 * a13 - a03 * a12;
    var b06 = a20 * a31 - a21 * a30;
    var b07 = a20 * a32 - a22 * a30;
    var b08 = a20 * a33 - a23 * a30;
    var b09 = a21 * a32 - a22 * a31;
    var b10 = a21 * a33 - a23 * a31;
    var b11 = a22 * a33 - a23 * a32; // Calculate the determinant
  
    return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
  }
  /**
   * Multiplies two mat4s
   *
   * @param {mat4} out the receiving matrix
   * @param {ReadonlyMat4} a the first operand
   * @param {ReadonlyMat4} b the second operand
   * @returns {mat4} out
   */
  
  function multiply(out, a, b) {
    var a00 = a[0],
        a01 = a[1],
        a02 = a[2],
        a03 = a[3];
    var a10 = a[4],
        a11 = a[5],
        a12 = a[6],
        a13 = a[7];
    var a20 = a[8],
        a21 = a[9],
        a22 = a[10],
        a23 = a[11];
    var a30 = a[12],
        a31 = a[13],
        a32 = a[14],
        a33 = a[15]; // Cache only the current line of the second matrix
  
    var b0 = b[0],
        b1 = b[1],
        b2 = b[2],
        b3 = b[3];
    out[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    out[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    out[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    out[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
    b0 = b[4];
    b1 = b[5];
    b2 = b[6];
    b3 = b[7];
    out[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    out[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    out[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    out[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
    b0 = b[8];
    b1 = b[9];
    b2 = b[10];
    b3 = b[11];
    out[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    out[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    out[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    out[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
    b0 = b[12];
    b1 = b[13];
    b2 = b[14];
    b3 = b[15];
    out[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    out[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    out[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    out[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
    return out;
  }
  /**
   * Translate a mat4 by the given vector
   *
   * @param {mat4} out the receiving matrix
   * @param {ReadonlyMat4} a the matrix to translate
   * @param {ReadonlyVec3} v vector to translate by
   * @returns {mat4} out
   */
  
  function translate(out, a, v) {
    var x = v[0],
        y = v[1],
        z = v[2];
    var a00, a01, a02, a03;
    var a10, a11, a12, a13;
    var a20, a21, a22, a23;
  
    if (a === out) {
      out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
      out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
      out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
      out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
    } else {
      a00 = a[0];
      a01 = a[1];
      a02 = a[2];
      a03 = a[3];
      a10 = a[4];
      a11 = a[5];
      a12 = a[6];
      a13 = a[7];
      a20 = a[8];
      a21 = a[9];
      a22 = a[10];
      a23 = a[11];
      out[0] = a00;
      out[1] = a01;
      out[2] = a02;
      out[3] = a03;
      out[4] = a10;
      out[5] = a11;
      out[6] = a12;
      out[7] = a13;
      out[8] = a20;
      out[9] = a21;
      out[10] = a22;
      out[11] = a23;
      out[12] = a00 * x + a10 * y + a20 * z + a[12];
      out[13] = a01 * x + a11 * y + a21 * z + a[13];
      out[14] = a02 * x + a12 * y + a22 * z + a[14];
      out[15] = a03 * x + a13 * y + a23 * z + a[15];
    }
  
    return out;
  }
  /**
   * Scales the mat4 by the dimensions in the given vec3 not using vectorization
   *
   * @param {mat4} out the receiving matrix
   * @param {ReadonlyMat4} a the matrix to scale
   * @param {ReadonlyVec3} v the vec3 to scale the matrix by
   * @returns {mat4} out
   **/
  
  function scale(out, a, v) {
    var x = v[0],
        y = v[1],
        z = v[2];
    out[0] = a[0] * x;
    out[1] = a[1] * x;
    out[2] = a[2] * x;
    out[3] = a[3] * x;
    out[4] = a[4] * y;
    out[5] = a[5] * y;
    out[6] = a[6] * y;
    out[7] = a[7] * y;
    out[8] = a[8] * z;
    out[9] = a[9] * z;
    out[10] = a[10] * z;
    out[11] = a[11] * z;
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
    return out;
  }
  /**
   * Rotates a mat4 by the given angle around the given axis
   *
   * @param {mat4} out the receiving matrix
   * @param {ReadonlyMat4} a the matrix to rotate
   * @param {Number} rad the angle to rotate the matrix by
   * @param {ReadonlyVec3} axis the axis to rotate around
   * @returns {mat4} out
   */
  
  function rotate(out, a, rad, axis) {
    var x = axis[0],
        y = axis[1],
        z = axis[2];
    var len = Math.hypot(x, y, z);
    var s, c, t;
    var a00, a01, a02, a03;
    var a10, a11, a12, a13;
    var a20, a21, a22, a23;
    var b00, b01, b02;
    var b10, b11, b12;
    var b20, b21, b22;
  
    if (len < _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON) {
      return null;
    }
  
    len = 1 / len;
    x *= len;
    y *= len;
    z *= len;
    s = Math.sin(rad);
    c = Math.cos(rad);
    t = 1 - c;
    a00 = a[0];
    a01 = a[1];
    a02 = a[2];
    a03 = a[3];
    a10 = a[4];
    a11 = a[5];
    a12 = a[6];
    a13 = a[7];
    a20 = a[8];
    a21 = a[9];
    a22 = a[10];
    a23 = a[11]; // Construct the elements of the rotation matrix
  
    b00 = x * x * t + c;
    b01 = y * x * t + z * s;
    b02 = z * x * t - y * s;
    b10 = x * y * t - z * s;
    b11 = y * y * t + c;
    b12 = z * y * t + x * s;
    b20 = x * z * t + y * s;
    b21 = y * z * t - x * s;
    b22 = z * z * t + c; // Perform rotation-specific matrix multiplication
  
    out[0] = a00 * b00 + a10 * b01 + a20 * b02;
    out[1] = a01 * b00 + a11 * b01 + a21 * b02;
    out[2] = a02 * b00 + a12 * b01 + a22 * b02;
    out[3] = a03 * b00 + a13 * b01 + a23 * b02;
    out[4] = a00 * b10 + a10 * b11 + a20 * b12;
    out[5] = a01 * b10 + a11 * b11 + a21 * b12;
    out[6] = a02 * b10 + a12 * b11 + a22 * b12;
    out[7] = a03 * b10 + a13 * b11 + a23 * b12;
    out[8] = a00 * b20 + a10 * b21 + a20 * b22;
    out[9] = a01 * b20 + a11 * b21 + a21 * b22;
    out[10] = a02 * b20 + a12 * b21 + a22 * b22;
    out[11] = a03 * b20 + a13 * b21 + a23 * b22;
  
    if (a !== out) {
      // If the source and destination differ, copy the unchanged last row
      out[12] = a[12];
      out[13] = a[13];
      out[14] = a[14];
      out[15] = a[15];
    }
  
    return out;
  }
  /**
   * Rotates a matrix by the given angle around the X axis
   *
   * @param {mat4} out the receiving matrix
   * @param {ReadonlyMat4} a the matrix to rotate
   * @param {Number} rad the angle to rotate the matrix by
   * @returns {mat4} out
   */
  
  function rotateX(out, a, rad) {
    var s = Math.sin(rad);
    var c = Math.cos(rad);
    var a10 = a[4];
    var a11 = a[5];
    var a12 = a[6];
    var a13 = a[7];
    var a20 = a[8];
    var a21 = a[9];
    var a22 = a[10];
    var a23 = a[11];
  
    if (a !== out) {
      // If the source and destination differ, copy the unchanged rows
      out[0] = a[0];
      out[1] = a[1];
      out[2] = a[2];
      out[3] = a[3];
      out[12] = a[12];
      out[13] = a[13];
      out[14] = a[14];
      out[15] = a[15];
    } // Perform axis-specific matrix multiplication
  
  
    out[4] = a10 * c + a20 * s;
    out[5] = a11 * c + a21 * s;
    out[6] = a12 * c + a22 * s;
    out[7] = a13 * c + a23 * s;
    out[8] = a20 * c - a10 * s;
    out[9] = a21 * c - a11 * s;
    out[10] = a22 * c - a12 * s;
    out[11] = a23 * c - a13 * s;
    return out;
  }
  /**
   * Rotates a matrix by the given angle around the Y axis
   *
   * @param {mat4} out the receiving matrix
   * @param {ReadonlyMat4} a the matrix to rotate
   * @param {Number} rad the angle to rotate the matrix by
   * @returns {mat4} out
   */
  
  function rotateY(out, a, rad) {
    var s = Math.sin(rad);
    var c = Math.cos(rad);
    var a00 = a[0];
    var a01 = a[1];
    var a02 = a[2];
    var a03 = a[3];
    var a20 = a[8];
    var a21 = a[9];
    var a22 = a[10];
    var a23 = a[11];
  
    if (a !== out) {
      // If the source and destination differ, copy the unchanged rows
      out[4] = a[4];
      out[5] = a[5];
      out[6] = a[6];
      out[7] = a[7];
      out[12] = a[12];
      out[13] = a[13];
      out[14] = a[14];
      out[15] = a[15];
    } // Perform axis-specific matrix multiplication
  
  
    out[0] = a00 * c - a20 * s;
    out[1] = a01 * c - a21 * s;
    out[2] = a02 * c - a22 * s;
    out[3] = a03 * c - a23 * s;
    out[8] = a00 * s + a20 * c;
    out[9] = a01 * s + a21 * c;
    out[10] = a02 * s + a22 * c;
    out[11] = a03 * s + a23 * c;
    return out;
  }
  /**
   * Rotates a matrix by the given angle around the Z axis
   *
   * @param {mat4} out the receiving matrix
   * @param {ReadonlyMat4} a the matrix to rotate
   * @param {Number} rad the angle to rotate the matrix by
   * @returns {mat4} out
   */
  
  function rotateZ(out, a, rad) {
    var s = Math.sin(rad);
    var c = Math.cos(rad);
    var a00 = a[0];
    var a01 = a[1];
    var a02 = a[2];
    var a03 = a[3];
    var a10 = a[4];
    var a11 = a[5];
    var a12 = a[6];
    var a13 = a[7];
  
    if (a !== out) {
      // If the source and destination differ, copy the unchanged last row
      out[8] = a[8];
      out[9] = a[9];
      out[10] = a[10];
      out[11] = a[11];
      out[12] = a[12];
      out[13] = a[13];
      out[14] = a[14];
      out[15] = a[15];
    } // Perform axis-specific matrix multiplication
  
  
    out[0] = a00 * c + a10 * s;
    out[1] = a01 * c + a11 * s;
    out[2] = a02 * c + a12 * s;
    out[3] = a03 * c + a13 * s;
    out[4] = a10 * c - a00 * s;
    out[5] = a11 * c - a01 * s;
    out[6] = a12 * c - a02 * s;
    out[7] = a13 * c - a03 * s;
    return out;
  }
  /**
   * Creates a matrix from a vector translation
   * This is equivalent to (but much faster than):
   *
   *     mat4.identity(dest);
   *     mat4.translate(dest, dest, vec);
   *
   * @param {mat4} out mat4 receiving operation result
   * @param {ReadonlyVec3} v Translation vector
   * @returns {mat4} out
   */
  
  function fromTranslation(out, v) {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = 1;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 1;
    out[11] = 0;
    out[12] = v[0];
    out[13] = v[1];
    out[14] = v[2];
    out[15] = 1;
    return out;
  }
  /**
   * Creates a matrix from a vector scaling
   * This is equivalent to (but much faster than):
   *
   *     mat4.identity(dest);
   *     mat4.scale(dest, dest, vec);
   *
   * @param {mat4} out mat4 receiving operation result
   * @param {ReadonlyVec3} v Scaling vector
   * @returns {mat4} out
   */
  
  function fromScaling(out, v) {
    out[0] = v[0];
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = v[1];
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = v[2];
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
  }
  /**
   * Creates a matrix from a given angle around a given axis
   * This is equivalent to (but much faster than):
   *
   *     mat4.identity(dest);
   *     mat4.rotate(dest, dest, rad, axis);
   *
   * @param {mat4} out mat4 receiving operation result
   * @param {Number} rad the angle to rotate the matrix by
   * @param {ReadonlyVec3} axis the axis to rotate around
   * @returns {mat4} out
   */
  
  function fromRotation(out, rad, axis) {
    var x = axis[0],
        y = axis[1],
        z = axis[2];
    var len = Math.hypot(x, y, z);
    var s, c, t;
  
    if (len < _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON) {
      return null;
    }
  
    len = 1 / len;
    x *= len;
    y *= len;
    z *= len;
    s = Math.sin(rad);
    c = Math.cos(rad);
    t = 1 - c; // Perform rotation-specific matrix multiplication
  
    out[0] = x * x * t + c;
    out[1] = y * x * t + z * s;
    out[2] = z * x * t - y * s;
    out[3] = 0;
    out[4] = x * y * t - z * s;
    out[5] = y * y * t + c;
    out[6] = z * y * t + x * s;
    out[7] = 0;
    out[8] = x * z * t + y * s;
    out[9] = y * z * t - x * s;
    out[10] = z * z * t + c;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
  }
  /**
   * Creates a matrix from the given angle around the X axis
   * This is equivalent to (but much faster than):
   *
   *     mat4.identity(dest);
   *     mat4.rotateX(dest, dest, rad);
   *
   * @param {mat4} out mat4 receiving operation result
   * @param {Number} rad the angle to rotate the matrix by
   * @returns {mat4} out
   */
  
  function fromXRotation(out, rad) {
    var s = Math.sin(rad);
    var c = Math.cos(rad); // Perform axis-specific matrix multiplication
  
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = c;
    out[6] = s;
    out[7] = 0;
    out[8] = 0;
    out[9] = -s;
    out[10] = c;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
  }
  /**
   * Creates a matrix from the given angle around the Y axis
   * This is equivalent to (but much faster than):
   *
   *     mat4.identity(dest);
   *     mat4.rotateY(dest, dest, rad);
   *
   * @param {mat4} out mat4 receiving operation result
   * @param {Number} rad the angle to rotate the matrix by
   * @returns {mat4} out
   */
  
  function fromYRotation(out, rad) {
    var s = Math.sin(rad);
    var c = Math.cos(rad); // Perform axis-specific matrix multiplication
  
    out[0] = c;
    out[1] = 0;
    out[2] = -s;
    out[3] = 0;
    out[4] = 0;
    out[5] = 1;
    out[6] = 0;
    out[7] = 0;
    out[8] = s;
    out[9] = 0;
    out[10] = c;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
  }
  /**
   * Creates a matrix from the given angle around the Z axis
   * This is equivalent to (but much faster than):
   *
   *     mat4.identity(dest);
   *     mat4.rotateZ(dest, dest, rad);
   *
   * @param {mat4} out mat4 receiving operation result
   * @param {Number} rad the angle to rotate the matrix by
   * @returns {mat4} out
   */
  
  function fromZRotation(out, rad) {
    var s = Math.sin(rad);
    var c = Math.cos(rad); // Perform axis-specific matrix multiplication
  
    out[0] = c;
    out[1] = s;
    out[2] = 0;
    out[3] = 0;
    out[4] = -s;
    out[5] = c;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 1;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
  }
  /**
   * Creates a matrix from a quaternion rotation and vector translation
   * This is equivalent to (but much faster than):
   *
   *     mat4.identity(dest);
   *     mat4.translate(dest, vec);
   *     let quatMat = mat4.create();
   *     quat4.toMat4(quat, quatMat);
   *     mat4.multiply(dest, quatMat);
   *
   * @param {mat4} out mat4 receiving operation result
   * @param {quat4} q Rotation quaternion
   * @param {ReadonlyVec3} v Translation vector
   * @returns {mat4} out
   */
  
  function fromRotationTranslation(out, q, v) {
    // Quaternion math
    var x = q[0],
        y = q[1],
        z = q[2],
        w = q[3];
    var x2 = x + x;
    var y2 = y + y;
    var z2 = z + z;
    var xx = x * x2;
    var xy = x * y2;
    var xz = x * z2;
    var yy = y * y2;
    var yz = y * z2;
    var zz = z * z2;
    var wx = w * x2;
    var wy = w * y2;
    var wz = w * z2;
    out[0] = 1 - (yy + zz);
    out[1] = xy + wz;
    out[2] = xz - wy;
    out[3] = 0;
    out[4] = xy - wz;
    out[5] = 1 - (xx + zz);
    out[6] = yz + wx;
    out[7] = 0;
    out[8] = xz + wy;
    out[9] = yz - wx;
    out[10] = 1 - (xx + yy);
    out[11] = 0;
    out[12] = v[0];
    out[13] = v[1];
    out[14] = v[2];
    out[15] = 1;
    return out;
  }
  /**
   * Creates a new mat4 from a dual quat.
   *
   * @param {mat4} out Matrix
   * @param {ReadonlyQuat2} a Dual Quaternion
   * @returns {mat4} mat4 receiving operation result
   */
  
  function fromQuat2(out, a) {
    var translation = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(3);
    var bx = -a[0],
        by = -a[1],
        bz = -a[2],
        bw = a[3],
        ax = a[4],
        ay = a[5],
        az = a[6],
        aw = a[7];
    var magnitude = bx * bx + by * by + bz * bz + bw * bw; //Only scale if it makes sense
  
    if (magnitude > 0) {
      translation[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2 / magnitude;
      translation[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2 / magnitude;
      translation[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2 / magnitude;
    } else {
      translation[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2;
      translation[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2;
      translation[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2;
    }
  
    fromRotationTranslation(out, a, translation);
    return out;
  }
  /**
   * Returns the translation vector component of a transformation
   *  matrix. If a matrix is built with fromRotationTranslation,
   *  the returned vector will be the same as the translation vector
   *  originally supplied.
   * @param  {vec3} out Vector to receive translation component
   * @param  {ReadonlyMat4} mat Matrix to be decomposed (input)
   * @return {vec3} out
   */
  
  function getTranslation(out, mat) {
    out[0] = mat[12];
    out[1] = mat[13];
    out[2] = mat[14];
    return out;
  }
  /**
   * Returns the scaling factor component of a transformation
   *  matrix. If a matrix is built with fromRotationTranslationScale
   *  with a normalized Quaternion paramter, the returned vector will be
   *  the same as the scaling vector
   *  originally supplied.
   * @param  {vec3} out Vector to receive scaling factor component
   * @param  {ReadonlyMat4} mat Matrix to be decomposed (input)
   * @return {vec3} out
   */
  
  function getScaling(out, mat) {
    var m11 = mat[0];
    var m12 = mat[1];
    var m13 = mat[2];
    var m21 = mat[4];
    var m22 = mat[5];
    var m23 = mat[6];
    var m31 = mat[8];
    var m32 = mat[9];
    var m33 = mat[10];
    out[0] = Math.hypot(m11, m12, m13);
    out[1] = Math.hypot(m21, m22, m23);
    out[2] = Math.hypot(m31, m32, m33);
    return out;
  }
  /**
   * Returns a quaternion representing the rotational component
   *  of a transformation matrix. If a matrix is built with
   *  fromRotationTranslation, the returned quaternion will be the
   *  same as the quaternion originally supplied.
   * @param {quat} out Quaternion to receive the rotation component
   * @param {ReadonlyMat4} mat Matrix to be decomposed (input)
   * @return {quat} out
   */
  
  function getRotation(out, mat) {
    var scaling = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(3);
    getScaling(scaling, mat);
    var is1 = 1 / scaling[0];
    var is2 = 1 / scaling[1];
    var is3 = 1 / scaling[2];
    var sm11 = mat[0] * is1;
    var sm12 = mat[1] * is2;
    var sm13 = mat[2] * is3;
    var sm21 = mat[4] * is1;
    var sm22 = mat[5] * is2;
    var sm23 = mat[6] * is3;
    var sm31 = mat[8] * is1;
    var sm32 = mat[9] * is2;
    var sm33 = mat[10] * is3;
    var trace = sm11 + sm22 + sm33;
    var S = 0;
  
    if (trace > 0) {
      S = Math.sqrt(trace + 1.0) * 2;
      out[3] = 0.25 * S;
      out[0] = (sm23 - sm32) / S;
      out[1] = (sm31 - sm13) / S;
      out[2] = (sm12 - sm21) / S;
    } else if (sm11 > sm22 && sm11 > sm33) {
      S = Math.sqrt(1.0 + sm11 - sm22 - sm33) * 2;
      out[3] = (sm23 - sm32) / S;
      out[0] = 0.25 * S;
      out[1] = (sm12 + sm21) / S;
      out[2] = (sm31 + sm13) / S;
    } else if (sm22 > sm33) {
      S = Math.sqrt(1.0 + sm22 - sm11 - sm33) * 2;
      out[3] = (sm31 - sm13) / S;
      out[0] = (sm12 + sm21) / S;
      out[1] = 0.25 * S;
      out[2] = (sm23 + sm32) / S;
    } else {
      S = Math.sqrt(1.0 + sm33 - sm11 - sm22) * 2;
      out[3] = (sm12 - sm21) / S;
      out[0] = (sm31 + sm13) / S;
      out[1] = (sm23 + sm32) / S;
      out[2] = 0.25 * S;
    }
  
    return out;
  }
  /**
   * Creates a matrix from a quaternion rotation, vector translation and vector scale
   * This is equivalent to (but much faster than):
   *
   *     mat4.identity(dest);
   *     mat4.translate(dest, vec);
   *     let quatMat = mat4.create();
   *     quat4.toMat4(quat, quatMat);
   *     mat4.multiply(dest, quatMat);
   *     mat4.scale(dest, scale)
   *
   * @param {mat4} out mat4 receiving operation result
   * @param {quat4} q Rotation quaternion
   * @param {ReadonlyVec3} v Translation vector
   * @param {ReadonlyVec3} s Scaling vector
   * @returns {mat4} out
   */
  
  function fromRotationTranslationScale(out, q, v, s) {
    // Quaternion math
    var x = q[0],
        y = q[1],
        z = q[2],
        w = q[3];
    var x2 = x + x;
    var y2 = y + y;
    var z2 = z + z;
    var xx = x * x2;
    var xy = x * y2;
    var xz = x * z2;
    var yy = y * y2;
    var yz = y * z2;
    var zz = z * z2;
    var wx = w * x2;
    var wy = w * y2;
    var wz = w * z2;
    var sx = s[0];
    var sy = s[1];
    var sz = s[2];
    out[0] = (1 - (yy + zz)) * sx;
    out[1] = (xy + wz) * sx;
    out[2] = (xz - wy) * sx;
    out[3] = 0;
    out[4] = (xy - wz) * sy;
    out[5] = (1 - (xx + zz)) * sy;
    out[6] = (yz + wx) * sy;
    out[7] = 0;
    out[8] = (xz + wy) * sz;
    out[9] = (yz - wx) * sz;
    out[10] = (1 - (xx + yy)) * sz;
    out[11] = 0;
    out[12] = v[0];
    out[13] = v[1];
    out[14] = v[2];
    out[15] = 1;
    return out;
  }
  /**
   * Creates a matrix from a quaternion rotation, vector translation and vector scale, rotating and scaling around the given origin
   * This is equivalent to (but much faster than):
   *
   *     mat4.identity(dest);
   *     mat4.translate(dest, vec);
   *     mat4.translate(dest, origin);
   *     let quatMat = mat4.create();
   *     quat4.toMat4(quat, quatMat);
   *     mat4.multiply(dest, quatMat);
   *     mat4.scale(dest, scale)
   *     mat4.translate(dest, negativeOrigin);
   *
   * @param {mat4} out mat4 receiving operation result
   * @param {quat4} q Rotation quaternion
   * @param {ReadonlyVec3} v Translation vector
   * @param {ReadonlyVec3} s Scaling vector
   * @param {ReadonlyVec3} o The origin vector around which to scale and rotate
   * @returns {mat4} out
   */
  
  function fromRotationTranslationScaleOrigin(out, q, v, s, o) {
    // Quaternion math
    var x = q[0],
        y = q[1],
        z = q[2],
        w = q[3];
    var x2 = x + x;
    var y2 = y + y;
    var z2 = z + z;
    var xx = x * x2;
    var xy = x * y2;
    var xz = x * z2;
    var yy = y * y2;
    var yz = y * z2;
    var zz = z * z2;
    var wx = w * x2;
    var wy = w * y2;
    var wz = w * z2;
    var sx = s[0];
    var sy = s[1];
    var sz = s[2];
    var ox = o[0];
    var oy = o[1];
    var oz = o[2];
    var out0 = (1 - (yy + zz)) * sx;
    var out1 = (xy + wz) * sx;
    var out2 = (xz - wy) * sx;
    var out4 = (xy - wz) * sy;
    var out5 = (1 - (xx + zz)) * sy;
    var out6 = (yz + wx) * sy;
    var out8 = (xz + wy) * sz;
    var out9 = (yz - wx) * sz;
    var out10 = (1 - (xx + yy)) * sz;
    out[0] = out0;
    out[1] = out1;
    out[2] = out2;
    out[3] = 0;
    out[4] = out4;
    out[5] = out5;
    out[6] = out6;
    out[7] = 0;
    out[8] = out8;
    out[9] = out9;
    out[10] = out10;
    out[11] = 0;
    out[12] = v[0] + ox - (out0 * ox + out4 * oy + out8 * oz);
    out[13] = v[1] + oy - (out1 * ox + out5 * oy + out9 * oz);
    out[14] = v[2] + oz - (out2 * ox + out6 * oy + out10 * oz);
    out[15] = 1;
    return out;
  }
  /**
   * Calculates a 4x4 matrix from the given quaternion
   *
   * @param {mat4} out mat4 receiving operation result
   * @param {ReadonlyQuat} q Quaternion to create matrix from
   *
   * @returns {mat4} out
   */
  
  function fromQuat(out, q) {
    var x = q[0],
        y = q[1],
        z = q[2],
        w = q[3];
    var x2 = x + x;
    var y2 = y + y;
    var z2 = z + z;
    var xx = x * x2;
    var yx = y * x2;
    var yy = y * y2;
    var zx = z * x2;
    var zy = z * y2;
    var zz = z * z2;
    var wx = w * x2;
    var wy = w * y2;
    var wz = w * z2;
    out[0] = 1 - yy - zz;
    out[1] = yx + wz;
    out[2] = zx - wy;
    out[3] = 0;
    out[4] = yx - wz;
    out[5] = 1 - xx - zz;
    out[6] = zy + wx;
    out[7] = 0;
    out[8] = zx + wy;
    out[9] = zy - wx;
    out[10] = 1 - xx - yy;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
  }
  /**
   * Generates a frustum matrix with the given bounds
   *
   * @param {mat4} out mat4 frustum matrix will be written into
   * @param {Number} left Left bound of the frustum
   * @param {Number} right Right bound of the frustum
   * @param {Number} bottom Bottom bound of the frustum
   * @param {Number} top Top bound of the frustum
   * @param {Number} near Near bound of the frustum
   * @param {Number} far Far bound of the frustum
   * @returns {mat4} out
   */
  
  function frustum(out, left, right, bottom, top, near, far) {
    var rl = 1 / (right - left);
    var tb = 1 / (top - bottom);
    var nf = 1 / (near - far);
    out[0] = near * 2 * rl;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = near * 2 * tb;
    out[6] = 0;
    out[7] = 0;
    out[8] = (right + left) * rl;
    out[9] = (top + bottom) * tb;
    out[10] = (far + near) * nf;
    out[11] = -1;
    out[12] = 0;
    out[13] = 0;
    out[14] = far * near * 2 * nf;
    out[15] = 0;
    return out;
  }
  /**
   * Generates a perspective projection matrix with the given bounds.
   * The near/far clip planes correspond to a normalized device coordinate Z range of [-1, 1],
   * which matches WebGL/OpenGL's clip volume.
   * Passing null/undefined/no value for far will generate infinite projection matrix.
   *
   * @param {mat4} out mat4 frustum matrix will be written into
   * @param {number} fovy Vertical field of view in radians
   * @param {number} aspect Aspect ratio. typically viewport width/height
   * @param {number} near Near bound of the frustum
   * @param {number} far Far bound of the frustum, can be null or Infinity
   * @returns {mat4} out
   */
  
  function perspectiveNO(out, fovy, aspect, near, far) {
    var f = 1.0 / Math.tan(fovy / 2),
        nf;
    out[0] = f / aspect;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = f;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[11] = -1;
    out[12] = 0;
    out[13] = 0;
    out[15] = 0;
  
    if (far != null && far !== Infinity) {
      nf = 1 / (near - far);
      out[10] = (far + near) * nf;
      out[14] = 2 * far * near * nf;
    } else {
      out[10] = -1;
      out[14] = -2 * near;
    }
  
    return out;
  }
  /**
   * Alias for {@link mat4.perspectiveNO}
   * @function
   */
  
  var perspective = perspectiveNO;
  /**
   * Generates a perspective projection matrix suitable for WebGPU with the given bounds.
   * The near/far clip planes correspond to a normalized device coordinate Z range of [0, 1],
   * which matches WebGPU/Vulkan/DirectX/Metal's clip volume.
   * Passing null/undefined/no value for far will generate infinite projection matrix.
   *
   * @param {mat4} out mat4 frustum matrix will be written into
   * @param {number} fovy Vertical field of view in radians
   * @param {number} aspect Aspect ratio. typically viewport width/height
   * @param {number} near Near bound of the frustum
   * @param {number} far Far bound of the frustum, can be null or Infinity
   * @returns {mat4} out
   */
  
  function perspectiveZO(out, fovy, aspect, near, far) {
    var f = 1.0 / Math.tan(fovy / 2),
        nf;
    out[0] = f / aspect;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = f;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[11] = -1;
    out[12] = 0;
    out[13] = 0;
    out[15] = 0;
  
    if (far != null && far !== Infinity) {
      nf = 1 / (near - far);
      out[10] = far * nf;
      out[14] = far * near * nf;
    } else {
      out[10] = -1;
      out[14] = -near;
    }
  
    return out;
  }
  /**
   * Generates a perspective projection matrix with the given field of view.
   * This is primarily useful for generating projection matrices to be used
   * with the still experiemental WebVR API.
   *
   * @param {mat4} out mat4 frustum matrix will be written into
   * @param {Object} fov Object containing the following values: upDegrees, downDegrees, leftDegrees, rightDegrees
   * @param {number} near Near bound of the frustum
   * @param {number} far Far bound of the frustum
   * @returns {mat4} out
   */
  
  function perspectiveFromFieldOfView(out, fov, near, far) {
    var upTan = Math.tan(fov.upDegrees * Math.PI / 180.0);
    var downTan = Math.tan(fov.downDegrees * Math.PI / 180.0);
    var leftTan = Math.tan(fov.leftDegrees * Math.PI / 180.0);
    var rightTan = Math.tan(fov.rightDegrees * Math.PI / 180.0);
    var xScale = 2.0 / (leftTan + rightTan);
    var yScale = 2.0 / (upTan + downTan);
    out[0] = xScale;
    out[1] = 0.0;
    out[2] = 0.0;
    out[3] = 0.0;
    out[4] = 0.0;
    out[5] = yScale;
    out[6] = 0.0;
    out[7] = 0.0;
    out[8] = -((leftTan - rightTan) * xScale * 0.5);
    out[9] = (upTan - downTan) * yScale * 0.5;
    out[10] = far / (near - far);
    out[11] = -1.0;
    out[12] = 0.0;
    out[13] = 0.0;
    out[14] = far * near / (near - far);
    out[15] = 0.0;
    return out;
  }
  /**
   * Generates a orthogonal projection matrix with the given bounds.
   * The near/far clip planes correspond to a normalized device coordinate Z range of [-1, 1],
   * which matches WebGL/OpenGL's clip volume.
   *
   * @param {mat4} out mat4 frustum matrix will be written into
   * @param {number} left Left bound of the frustum
   * @param {number} right Right bound of the frustum
   * @param {number} bottom Bottom bound of the frustum
   * @param {number} top Top bound of the frustum
   * @param {number} near Near bound of the frustum
   * @param {number} far Far bound of the frustum
   * @returns {mat4} out
   */
  
  function orthoNO(out, left, right, bottom, top, near, far) {
    var lr = 1 / (left - right);
    var bt = 1 / (bottom - top);
    var nf = 1 / (near - far);
    out[0] = -2 * lr;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = -2 * bt;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 2 * nf;
    out[11] = 0;
    out[12] = (left + right) * lr;
    out[13] = (top + bottom) * bt;
    out[14] = (far + near) * nf;
    out[15] = 1;
    return out;
  }
  /**
   * Alias for {@link mat4.orthoNO}
   * @function
   */
  
  var ortho = orthoNO;
  /**
   * Generates a orthogonal projection matrix with the given bounds.
   * The near/far clip planes correspond to a normalized device coordinate Z range of [0, 1],
   * which matches WebGPU/Vulkan/DirectX/Metal's clip volume.
   *
   * @param {mat4} out mat4 frustum matrix will be written into
   * @param {number} left Left bound of the frustum
   * @param {number} right Right bound of the frustum
   * @param {number} bottom Bottom bound of the frustum
   * @param {number} top Top bound of the frustum
   * @param {number} near Near bound of the frustum
   * @param {number} far Far bound of the frustum
   * @returns {mat4} out
   */
  
  function orthoZO(out, left, right, bottom, top, near, far) {
    var lr = 1 / (left - right);
    var bt = 1 / (bottom - top);
    var nf = 1 / (near - far);
    out[0] = -2 * lr;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = -2 * bt;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = nf;
    out[11] = 0;
    out[12] = (left + right) * lr;
    out[13] = (top + bottom) * bt;
    out[14] = near * nf;
    out[15] = 1;
    return out;
  }
  /**
   * Generates a look-at matrix with the given eye position, focal point, and up axis.
   * If you want a matrix that actually makes an object look at another object, you should use targetTo instead.
   *
   * @param {mat4} out mat4 frustum matrix will be written into
   * @param {ReadonlyVec3} eye Position of the viewer
   * @param {ReadonlyVec3} center Point the viewer is looking at
   * @param {ReadonlyVec3} up vec3 pointing up
   * @returns {mat4} out
   */
  
  function lookAt(out, eye, center, up) {
    var x0, x1, x2, y0, y1, y2, z0, z1, z2, len;
    var eyex = eye[0];
    var eyey = eye[1];
    var eyez = eye[2];
    var upx = up[0];
    var upy = up[1];
    var upz = up[2];
    var centerx = center[0];
    var centery = center[1];
    var centerz = center[2];
  
    if (Math.abs(eyex - centerx) < _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON && Math.abs(eyey - centery) < _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON && Math.abs(eyez - centerz) < _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON) {
      return identity(out);
    }
  
    z0 = eyex - centerx;
    z1 = eyey - centery;
    z2 = eyez - centerz;
    len = 1 / Math.hypot(z0, z1, z2);
    z0 *= len;
    z1 *= len;
    z2 *= len;
    x0 = upy * z2 - upz * z1;
    x1 = upz * z0 - upx * z2;
    x2 = upx * z1 - upy * z0;
    len = Math.hypot(x0, x1, x2);
  
    if (!len) {
      x0 = 0;
      x1 = 0;
      x2 = 0;
    } else {
      len = 1 / len;
      x0 *= len;
      x1 *= len;
      x2 *= len;
    }
  
    y0 = z1 * x2 - z2 * x1;
    y1 = z2 * x0 - z0 * x2;
    y2 = z0 * x1 - z1 * x0;
    len = Math.hypot(y0, y1, y2);
  
    if (!len) {
      y0 = 0;
      y1 = 0;
      y2 = 0;
    } else {
      len = 1 / len;
      y0 *= len;
      y1 *= len;
      y2 *= len;
    }
  
    out[0] = x0;
    out[1] = y0;
    out[2] = z0;
    out[3] = 0;
    out[4] = x1;
    out[5] = y1;
    out[6] = z1;
    out[7] = 0;
    out[8] = x2;
    out[9] = y2;
    out[10] = z2;
    out[11] = 0;
    out[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
    out[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
    out[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
    out[15] = 1;
    return out;
  }
  /**
   * Generates a matrix that makes something look at something else.
   *
   * @param {mat4} out mat4 frustum matrix will be written into
   * @param {ReadonlyVec3} eye Position of the viewer
   * @param {ReadonlyVec3} center Point the viewer is looking at
   * @param {ReadonlyVec3} up vec3 pointing up
   * @returns {mat4} out
   */
  
  function targetTo(out, eye, target, up) {
    var eyex = eye[0],
        eyey = eye[1],
        eyez = eye[2],
        upx = up[0],
        upy = up[1],
        upz = up[2];
    var z0 = eyex - target[0],
        z1 = eyey - target[1],
        z2 = eyez - target[2];
    var len = z0 * z0 + z1 * z1 + z2 * z2;
  
    if (len > 0) {
      len = 1 / Math.sqrt(len);
      z0 *= len;
      z1 *= len;
      z2 *= len;
    }
  
    var x0 = upy * z2 - upz * z1,
        x1 = upz * z0 - upx * z2,
        x2 = upx * z1 - upy * z0;
    len = x0 * x0 + x1 * x1 + x2 * x2;
  
    if (len > 0) {
      len = 1 / Math.sqrt(len);
      x0 *= len;
      x1 *= len;
      x2 *= len;
    }
  
    out[0] = x0;
    out[1] = x1;
    out[2] = x2;
    out[3] = 0;
    out[4] = z1 * x2 - z2 * x1;
    out[5] = z2 * x0 - z0 * x2;
    out[6] = z0 * x1 - z1 * x0;
    out[7] = 0;
    out[8] = z0;
    out[9] = z1;
    out[10] = z2;
    out[11] = 0;
    out[12] = eyex;
    out[13] = eyey;
    out[14] = eyez;
    out[15] = 1;
    return out;
  }
  /**
   * Returns a string representation of a mat4
   *
   * @param {ReadonlyMat4} a matrix to represent as a string
   * @returns {String} string representation of the matrix
   */
  
  function str(a) {
    return "mat4(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ", " + a[6] + ", " + a[7] + ", " + a[8] + ", " + a[9] + ", " + a[10] + ", " + a[11] + ", " + a[12] + ", " + a[13] + ", " + a[14] + ", " + a[15] + ")";
  }
  /**
   * Returns Frobenius norm of a mat4
   *
   * @param {ReadonlyMat4} a the matrix to calculate Frobenius norm of
   * @returns {Number} Frobenius norm
   */
  
  function frob(a) {
    return Math.hypot(a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8], a[9], a[10], a[11], a[12], a[13], a[14], a[15]);
  }
  /**
   * Adds two mat4's
   *
   * @param {mat4} out the receiving matrix
   * @param {ReadonlyMat4} a the first operand
   * @param {ReadonlyMat4} b the second operand
   * @returns {mat4} out
   */
  
  function add(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    out[2] = a[2] + b[2];
    out[3] = a[3] + b[3];
    out[4] = a[4] + b[4];
    out[5] = a[5] + b[5];
    out[6] = a[6] + b[6];
    out[7] = a[7] + b[7];
    out[8] = a[8] + b[8];
    out[9] = a[9] + b[9];
    out[10] = a[10] + b[10];
    out[11] = a[11] + b[11];
    out[12] = a[12] + b[12];
    out[13] = a[13] + b[13];
    out[14] = a[14] + b[14];
    out[15] = a[15] + b[15];
    return out;
  }
  /**
   * Subtracts matrix b from matrix a
   *
   * @param {mat4} out the receiving matrix
   * @param {ReadonlyMat4} a the first operand
   * @param {ReadonlyMat4} b the second operand
   * @returns {mat4} out
   */
  
  function subtract(out, a, b) {
    out[0] = a[0] - b[0];
    out[1] = a[1] - b[1];
    out[2] = a[2] - b[2];
    out[3] = a[3] - b[3];
    out[4] = a[4] - b[4];
    out[5] = a[5] - b[5];
    out[6] = a[6] - b[6];
    out[7] = a[7] - b[7];
    out[8] = a[8] - b[8];
    out[9] = a[9] - b[9];
    out[10] = a[10] - b[10];
    out[11] = a[11] - b[11];
    out[12] = a[12] - b[12];
    out[13] = a[13] - b[13];
    out[14] = a[14] - b[14];
    out[15] = a[15] - b[15];
    return out;
  }
  /**
   * Multiply each element of the matrix by a scalar.
   *
   * @param {mat4} out the receiving matrix
   * @param {ReadonlyMat4} a the matrix to scale
   * @param {Number} b amount to scale the matrix's elements by
   * @returns {mat4} out
   */
  
  function multiplyScalar(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    out[2] = a[2] * b;
    out[3] = a[3] * b;
    out[4] = a[4] * b;
    out[5] = a[5] * b;
    out[6] = a[6] * b;
    out[7] = a[7] * b;
    out[8] = a[8] * b;
    out[9] = a[9] * b;
    out[10] = a[10] * b;
    out[11] = a[11] * b;
    out[12] = a[12] * b;
    out[13] = a[13] * b;
    out[14] = a[14] * b;
    out[15] = a[15] * b;
    return out;
  }
  /**
   * Adds two mat4's after multiplying each element of the second operand by a scalar value.
   *
   * @param {mat4} out the receiving vector
   * @param {ReadonlyMat4} a the first operand
   * @param {ReadonlyMat4} b the second operand
   * @param {Number} scale the amount to scale b's elements by before adding
   * @returns {mat4} out
   */
  
  function multiplyScalarAndAdd(out, a, b, scale) {
    out[0] = a[0] + b[0] * scale;
    out[1] = a[1] + b[1] * scale;
    out[2] = a[2] + b[2] * scale;
    out[3] = a[3] + b[3] * scale;
    out[4] = a[4] + b[4] * scale;
    out[5] = a[5] + b[5] * scale;
    out[6] = a[6] + b[6] * scale;
    out[7] = a[7] + b[7] * scale;
    out[8] = a[8] + b[8] * scale;
    out[9] = a[9] + b[9] * scale;
    out[10] = a[10] + b[10] * scale;
    out[11] = a[11] + b[11] * scale;
    out[12] = a[12] + b[12] * scale;
    out[13] = a[13] + b[13] * scale;
    out[14] = a[14] + b[14] * scale;
    out[15] = a[15] + b[15] * scale;
    return out;
  }
  /**
   * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
   *
   * @param {ReadonlyMat4} a The first matrix.
   * @param {ReadonlyMat4} b The second matrix.
   * @returns {Boolean} True if the matrices are equal, false otherwise.
   */
  
  function exactEquals(a, b) {
    return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && a[8] === b[8] && a[9] === b[9] && a[10] === b[10] && a[11] === b[11] && a[12] === b[12] && a[13] === b[13] && a[14] === b[14] && a[15] === b[15];
  }
  /**
   * Returns whether or not the matrices have approximately the same elements in the same position.
   *
   * @param {ReadonlyMat4} a The first matrix.
   * @param {ReadonlyMat4} b The second matrix.
   * @returns {Boolean} True if the matrices are equal, false otherwise.
   */
  
  function equals(a, b) {
    var a0 = a[0],
        a1 = a[1],
        a2 = a[2],
        a3 = a[3];
    var a4 = a[4],
        a5 = a[5],
        a6 = a[6],
        a7 = a[7];
    var a8 = a[8],
        a9 = a[9],
        a10 = a[10],
        a11 = a[11];
    var a12 = a[12],
        a13 = a[13],
        a14 = a[14],
        a15 = a[15];
    var b0 = b[0],
        b1 = b[1],
        b2 = b[2],
        b3 = b[3];
    var b4 = b[4],
        b5 = b[5],
        b6 = b[6],
        b7 = b[7];
    var b8 = b[8],
        b9 = b[9],
        b10 = b[10],
        b11 = b[11];
    var b12 = b[12],
        b13 = b[13],
        b14 = b[14],
        b15 = b[15];
    return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a7), Math.abs(b7)) && Math.abs(a8 - b8) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a8), Math.abs(b8)) && Math.abs(a9 - b9) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a9), Math.abs(b9)) && Math.abs(a10 - b10) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a10), Math.abs(b10)) && Math.abs(a11 - b11) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a11), Math.abs(b11)) && Math.abs(a12 - b12) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a12), Math.abs(b12)) && Math.abs(a13 - b13) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a13), Math.abs(b13)) && Math.abs(a14 - b14) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a14), Math.abs(b14)) && Math.abs(a15 - b15) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a15), Math.abs(b15));
  }
  /**
   * Alias for {@link mat4.multiply}
   * @function
   */
  
  var mul = multiply;
  /**
   * Alias for {@link mat4.subtract}
   * @function
   */
  
  var sub = subtract;
  
  /***/ }),
  
  /***/ "./node_modules/gl-matrix/esm/vec3.js":
  /*!********************************************!*\
    !*** ./node_modules/gl-matrix/esm/vec3.js ***!
    \********************************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
  /* harmony export */   add: () => (/* binding */ add),
  /* harmony export */   angle: () => (/* binding */ angle),
  /* harmony export */   bezier: () => (/* binding */ bezier),
  /* harmony export */   ceil: () => (/* binding */ ceil),
  /* harmony export */   clone: () => (/* binding */ clone),
  /* harmony export */   copy: () => (/* binding */ copy),
  /* harmony export */   create: () => (/* binding */ create),
  /* harmony export */   cross: () => (/* binding */ cross),
  /* harmony export */   dist: () => (/* binding */ dist),
  /* harmony export */   distance: () => (/* binding */ distance),
  /* harmony export */   div: () => (/* binding */ div),
  /* harmony export */   divide: () => (/* binding */ divide),
  /* harmony export */   dot: () => (/* binding */ dot),
  /* harmony export */   equals: () => (/* binding */ equals),
  /* harmony export */   exactEquals: () => (/* binding */ exactEquals),
  /* harmony export */   floor: () => (/* binding */ floor),
  /* harmony export */   forEach: () => (/* binding */ forEach),
  /* harmony export */   fromValues: () => (/* binding */ fromValues),
  /* harmony export */   hermite: () => (/* binding */ hermite),
  /* harmony export */   inverse: () => (/* binding */ inverse),
  /* harmony export */   len: () => (/* binding */ len),
  /* harmony export */   length: () => (/* binding */ length),
  /* harmony export */   lerp: () => (/* binding */ lerp),
  /* harmony export */   max: () => (/* binding */ max),
  /* harmony export */   min: () => (/* binding */ min),
  /* harmony export */   mul: () => (/* binding */ mul),
  /* harmony export */   multiply: () => (/* binding */ multiply),
  /* harmony export */   negate: () => (/* binding */ negate),
  /* harmony export */   normalize: () => (/* binding */ normalize),
  /* harmony export */   random: () => (/* binding */ random),
  /* harmony export */   rotateX: () => (/* binding */ rotateX),
  /* harmony export */   rotateY: () => (/* binding */ rotateY),
  /* harmony export */   rotateZ: () => (/* binding */ rotateZ),
  /* harmony export */   round: () => (/* binding */ round),
  /* harmony export */   scale: () => (/* binding */ scale),
  /* harmony export */   scaleAndAdd: () => (/* binding */ scaleAndAdd),
  /* harmony export */   set: () => (/* binding */ set),
  /* harmony export */   sqrDist: () => (/* binding */ sqrDist),
  /* harmony export */   sqrLen: () => (/* binding */ sqrLen),
  /* harmony export */   squaredDistance: () => (/* binding */ squaredDistance),
  /* harmony export */   squaredLength: () => (/* binding */ squaredLength),
  /* harmony export */   str: () => (/* binding */ str),
  /* harmony export */   sub: () => (/* binding */ sub),
  /* harmony export */   subtract: () => (/* binding */ subtract),
  /* harmony export */   transformMat3: () => (/* binding */ transformMat3),
  /* harmony export */   transformMat4: () => (/* binding */ transformMat4),
  /* harmony export */   transformQuat: () => (/* binding */ transformQuat),
  /* harmony export */   zero: () => (/* binding */ zero)
  /* harmony export */ });
  /* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/gl-matrix/esm/common.js");
  
  /**
   * 3 Dimensional Vector
   * @module vec3
   */
  
  /**
   * Creates a new, empty vec3
   *
   * @returns {vec3} a new 3D vector
   */
  
  function create() {
    var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(3);
  
    if (_common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE != Float32Array) {
      out[0] = 0;
      out[1] = 0;
      out[2] = 0;
    }
  
    return out;
  }
  /**
   * Creates a new vec3 initialized with values from an existing vector
   *
   * @param {ReadonlyVec3} a vector to clone
   * @returns {vec3} a new 3D vector
   */
  
  function clone(a) {
    var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(3);
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    return out;
  }
  /**
   * Calculates the length of a vec3
   *
   * @param {ReadonlyVec3} a vector to calculate length of
   * @returns {Number} length of a
   */
  
  function length(a) {
    var x = a[0];
    var y = a[1];
    var z = a[2];
    return Math.hypot(x, y, z);
  }
  /**
   * Creates a new vec3 initialized with the given values
   *
   * @param {Number} x X component
   * @param {Number} y Y component
   * @param {Number} z Z component
   * @returns {vec3} a new 3D vector
   */
  
  function fromValues(x, y, z) {
    var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(3);
    out[0] = x;
    out[1] = y;
    out[2] = z;
    return out;
  }
  /**
   * Copy the values from one vec3 to another
   *
   * @param {vec3} out the receiving vector
   * @param {ReadonlyVec3} a the source vector
   * @returns {vec3} out
   */
  
  function copy(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    return out;
  }
  /**
   * Set the components of a vec3 to the given values
   *
   * @param {vec3} out the receiving vector
   * @param {Number} x X component
   * @param {Number} y Y component
   * @param {Number} z Z component
   * @returns {vec3} out
   */
  
  function set(out, x, y, z) {
    out[0] = x;
    out[1] = y;
    out[2] = z;
    return out;
  }
  /**
   * Adds two vec3's
   *
   * @param {vec3} out the receiving vector
   * @param {ReadonlyVec3} a the first operand
   * @param {ReadonlyVec3} b the second operand
   * @returns {vec3} out
   */
  
  function add(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    out[2] = a[2] + b[2];
    return out;
  }
  /**
   * Subtracts vector b from vector a
   *
   * @param {vec3} out the receiving vector
   * @param {ReadonlyVec3} a the first operand
   * @param {ReadonlyVec3} b the second operand
   * @returns {vec3} out
   */
  
  function subtract(out, a, b) {
    out[0] = a[0] - b[0];
    out[1] = a[1] - b[1];
    out[2] = a[2] - b[2];
    return out;
  }
  /**
   * Multiplies two vec3's
   *
   * @param {vec3} out the receiving vector
   * @param {ReadonlyVec3} a the first operand
   * @param {ReadonlyVec3} b the second operand
   * @returns {vec3} out
   */
  
  function multiply(out, a, b) {
    out[0] = a[0] * b[0];
    out[1] = a[1] * b[1];
    out[2] = a[2] * b[2];
    return out;
  }
  /**
   * Divides two vec3's
   *
   * @param {vec3} out the receiving vector
   * @param {ReadonlyVec3} a the first operand
   * @param {ReadonlyVec3} b the second operand
   * @returns {vec3} out
   */
  
  function divide(out, a, b) {
    out[0] = a[0] / b[0];
    out[1] = a[1] / b[1];
    out[2] = a[2] / b[2];
    return out;
  }
  /**
   * Math.ceil the components of a vec3
   *
   * @param {vec3} out the receiving vector
   * @param {ReadonlyVec3} a vector to ceil
   * @returns {vec3} out
   */
  
  function ceil(out, a) {
    out[0] = Math.ceil(a[0]);
    out[1] = Math.ceil(a[1]);
    out[2] = Math.ceil(a[2]);
    return out;
  }
  /**
   * Math.floor the components of a vec3
   *
   * @param {vec3} out the receiving vector
   * @param {ReadonlyVec3} a vector to floor
   * @returns {vec3} out
   */
  
  function floor(out, a) {
    out[0] = Math.floor(a[0]);
    out[1] = Math.floor(a[1]);
    out[2] = Math.floor(a[2]);
    return out;
  }
  /**
   * Returns the minimum of two vec3's
   *
   * @param {vec3} out the receiving vector
   * @param {ReadonlyVec3} a the first operand
   * @param {ReadonlyVec3} b the second operand
   * @returns {vec3} out
   */
  
  function min(out, a, b) {
    out[0] = Math.min(a[0], b[0]);
    out[1] = Math.min(a[1], b[1]);
    out[2] = Math.min(a[2], b[2]);
    return out;
  }
  /**
   * Returns the maximum of two vec3's
   *
   * @param {vec3} out the receiving vector
   * @param {ReadonlyVec3} a the first operand
   * @param {ReadonlyVec3} b the second operand
   * @returns {vec3} out
   */
  
  function max(out, a, b) {
    out[0] = Math.max(a[0], b[0]);
    out[1] = Math.max(a[1], b[1]);
    out[2] = Math.max(a[2], b[2]);
    return out;
  }
  /**
   * Math.round the components of a vec3
   *
   * @param {vec3} out the receiving vector
   * @param {ReadonlyVec3} a vector to round
   * @returns {vec3} out
   */
  
  function round(out, a) {
    out[0] = Math.round(a[0]);
    out[1] = Math.round(a[1]);
    out[2] = Math.round(a[2]);
    return out;
  }
  /**
   * Scales a vec3 by a scalar number
   *
   * @param {vec3} out the receiving vector
   * @param {ReadonlyVec3} a the vector to scale
   * @param {Number} b amount to scale the vector by
   * @returns {vec3} out
   */
  
  function scale(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    out[2] = a[2] * b;
    return out;
  }
  /**
   * Adds two vec3's after scaling the second operand by a scalar value
   *
   * @param {vec3} out the receiving vector
   * @param {ReadonlyVec3} a the first operand
   * @param {ReadonlyVec3} b the second operand
   * @param {Number} scale the amount to scale b by before adding
   * @returns {vec3} out
   */
  
  function scaleAndAdd(out, a, b, scale) {
    out[0] = a[0] + b[0] * scale;
    out[1] = a[1] + b[1] * scale;
    out[2] = a[2] + b[2] * scale;
    return out;
  }
  /**
   * Calculates the euclidian distance between two vec3's
   *
   * @param {ReadonlyVec3} a the first operand
   * @param {ReadonlyVec3} b the second operand
   * @returns {Number} distance between a and b
   */
  
  function distance(a, b) {
    var x = b[0] - a[0];
    var y = b[1] - a[1];
    var z = b[2] - a[2];
    return Math.hypot(x, y, z);
  }
  /**
   * Calculates the squared euclidian distance between two vec3's
   *
   * @param {ReadonlyVec3} a the first operand
   * @param {ReadonlyVec3} b the second operand
   * @returns {Number} squared distance between a and b
   */
  
  function squaredDistance(a, b) {
    var x = b[0] - a[0];
    var y = b[1] - a[1];
    var z = b[2] - a[2];
    return x * x + y * y + z * z;
  }
  /**
   * Calculates the squared length of a vec3
   *
   * @param {ReadonlyVec3} a vector to calculate squared length of
   * @returns {Number} squared length of a
   */
  
  function squaredLength(a) {
    var x = a[0];
    var y = a[1];
    var z = a[2];
    return x * x + y * y + z * z;
  }
  /**
   * Negates the components of a vec3
   *
   * @param {vec3} out the receiving vector
   * @param {ReadonlyVec3} a vector to negate
   * @returns {vec3} out
   */
  
  function negate(out, a) {
    out[0] = -a[0];
    out[1] = -a[1];
    out[2] = -a[2];
    return out;
  }
  /**
   * Returns the inverse of the components of a vec3
   *
   * @param {vec3} out the receiving vector
   * @param {ReadonlyVec3} a vector to invert
   * @returns {vec3} out
   */
  
  function inverse(out, a) {
    out[0] = 1.0 / a[0];
    out[1] = 1.0 / a[1];
    out[2] = 1.0 / a[2];
    return out;
  }
  /**
   * Normalize a vec3
   *
   * @param {vec3} out the receiving vector
   * @param {ReadonlyVec3} a vector to normalize
   * @returns {vec3} out
   */
  
  function normalize(out, a) {
    var x = a[0];
    var y = a[1];
    var z = a[2];
    var len = x * x + y * y + z * z;
  
    if (len > 0) {
      //TODO: evaluate use of glm_invsqrt here?
      len = 1 / Math.sqrt(len);
    }
  
    out[0] = a[0] * len;
    out[1] = a[1] * len;
    out[2] = a[2] * len;
    return out;
  }
  /**
   * Calculates the dot product of two vec3's
   *
   * @param {ReadonlyVec3} a the first operand
   * @param {ReadonlyVec3} b the second operand
   * @returns {Number} dot product of a and b
   */
  
  function dot(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
  }
  /**
   * Computes the cross product of two vec3's
   *
   * @param {vec3} out the receiving vector
   * @param {ReadonlyVec3} a the first operand
   * @param {ReadonlyVec3} b the second operand
   * @returns {vec3} out
   */
  
  function cross(out, a, b) {
    var ax = a[0],
        ay = a[1],
        az = a[2];
    var bx = b[0],
        by = b[1],
        bz = b[2];
    out[0] = ay * bz - az * by;
    out[1] = az * bx - ax * bz;
    out[2] = ax * by - ay * bx;
    return out;
  }
  /**
   * Performs a linear interpolation between two vec3's
   *
   * @param {vec3} out the receiving vector
   * @param {ReadonlyVec3} a the first operand
   * @param {ReadonlyVec3} b the second operand
   * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
   * @returns {vec3} out
   */
  
  function lerp(out, a, b, t) {
    var ax = a[0];
    var ay = a[1];
    var az = a[2];
    out[0] = ax + t * (b[0] - ax);
    out[1] = ay + t * (b[1] - ay);
    out[2] = az + t * (b[2] - az);
    return out;
  }
  /**
   * Performs a hermite interpolation with two control points
   *
   * @param {vec3} out the receiving vector
   * @param {ReadonlyVec3} a the first operand
   * @param {ReadonlyVec3} b the second operand
   * @param {ReadonlyVec3} c the third operand
   * @param {ReadonlyVec3} d the fourth operand
   * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
   * @returns {vec3} out
   */
  
  function hermite(out, a, b, c, d, t) {
    var factorTimes2 = t * t;
    var factor1 = factorTimes2 * (2 * t - 3) + 1;
    var factor2 = factorTimes2 * (t - 2) + t;
    var factor3 = factorTimes2 * (t - 1);
    var factor4 = factorTimes2 * (3 - 2 * t);
    out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
    out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
    out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
    return out;
  }
  /**
   * Performs a bezier interpolation with two control points
   *
   * @param {vec3} out the receiving vector
   * @param {ReadonlyVec3} a the first operand
   * @param {ReadonlyVec3} b the second operand
   * @param {ReadonlyVec3} c the third operand
   * @param {ReadonlyVec3} d the fourth operand
   * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
   * @returns {vec3} out
   */
  
  function bezier(out, a, b, c, d, t) {
    var inverseFactor = 1 - t;
    var inverseFactorTimesTwo = inverseFactor * inverseFactor;
    var factorTimes2 = t * t;
    var factor1 = inverseFactorTimesTwo * inverseFactor;
    var factor2 = 3 * t * inverseFactorTimesTwo;
    var factor3 = 3 * factorTimes2 * inverseFactor;
    var factor4 = factorTimes2 * t;
    out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
    out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
    out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
    return out;
  }
  /**
   * Generates a random vector with the given scale
   *
   * @param {vec3} out the receiving vector
   * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
   * @returns {vec3} out
   */
  
  function random(out, scale) {
    scale = scale || 1.0;
    var r = _common_js__WEBPACK_IMPORTED_MODULE_0__.RANDOM() * 2.0 * Math.PI;
    var z = _common_js__WEBPACK_IMPORTED_MODULE_0__.RANDOM() * 2.0 - 1.0;
    var zScale = Math.sqrt(1.0 - z * z) * scale;
    out[0] = Math.cos(r) * zScale;
    out[1] = Math.sin(r) * zScale;
    out[2] = z * scale;
    return out;
  }
  /**
   * Transforms the vec3 with a mat4.
   * 4th vector component is implicitly '1'
   *
   * @param {vec3} out the receiving vector
   * @param {ReadonlyVec3} a the vector to transform
   * @param {ReadonlyMat4} m matrix to transform with
   * @returns {vec3} out
   */
  
  function transformMat4(out, a, m) {
    var x = a[0],
        y = a[1],
        z = a[2];
    var w = m[3] * x + m[7] * y + m[11] * z + m[15];
    w = w || 1.0;
    out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;
    out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;
    out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;
    return out;
  }
  /**
   * Transforms the vec3 with a mat3.
   *
   * @param {vec3} out the receiving vector
   * @param {ReadonlyVec3} a the vector to transform
   * @param {ReadonlyMat3} m the 3x3 matrix to transform with
   * @returns {vec3} out
   */
  
  function transformMat3(out, a, m) {
    var x = a[0],
        y = a[1],
        z = a[2];
    out[0] = x * m[0] + y * m[3] + z * m[6];
    out[1] = x * m[1] + y * m[4] + z * m[7];
    out[2] = x * m[2] + y * m[5] + z * m[8];
    return out;
  }
  /**
   * Transforms the vec3 with a quat
   * Can also be used for dual quaternions. (Multiply it with the real part)
   *
   * @param {vec3} out the receiving vector
   * @param {ReadonlyVec3} a the vector to transform
   * @param {ReadonlyQuat} q quaternion to transform with
   * @returns {vec3} out
   */
  
  function transformQuat(out, a, q) {
    // benchmarks: https://jsperf.com/quaternion-transform-vec3-implementations-fixed
    var qx = q[0],
        qy = q[1],
        qz = q[2],
        qw = q[3];
    var x = a[0],
        y = a[1],
        z = a[2]; // var qvec = [qx, qy, qz];
    // var uv = vec3.cross([], qvec, a);
  
    var uvx = qy * z - qz * y,
        uvy = qz * x - qx * z,
        uvz = qx * y - qy * x; // var uuv = vec3.cross([], qvec, uv);
  
    var uuvx = qy * uvz - qz * uvy,
        uuvy = qz * uvx - qx * uvz,
        uuvz = qx * uvy - qy * uvx; // vec3.scale(uv, uv, 2 * w);
  
    var w2 = qw * 2;
    uvx *= w2;
    uvy *= w2;
    uvz *= w2; // vec3.scale(uuv, uuv, 2);
  
    uuvx *= 2;
    uuvy *= 2;
    uuvz *= 2; // return vec3.add(out, a, vec3.add(out, uv, uuv));
  
    out[0] = x + uvx + uuvx;
    out[1] = y + uvy + uuvy;
    out[2] = z + uvz + uuvz;
    return out;
  }
  /**
   * Rotate a 3D vector around the x-axis
   * @param {vec3} out The receiving vec3
   * @param {ReadonlyVec3} a The vec3 point to rotate
   * @param {ReadonlyVec3} b The origin of the rotation
   * @param {Number} rad The angle of rotation in radians
   * @returns {vec3} out
   */
  
  function rotateX(out, a, b, rad) {
    var p = [],
        r = []; //Translate point to the origin
  
    p[0] = a[0] - b[0];
    p[1] = a[1] - b[1];
    p[2] = a[2] - b[2]; //perform rotation
  
    r[0] = p[0];
    r[1] = p[1] * Math.cos(rad) - p[2] * Math.sin(rad);
    r[2] = p[1] * Math.sin(rad) + p[2] * Math.cos(rad); //translate to correct position
  
    out[0] = r[0] + b[0];
    out[1] = r[1] + b[1];
    out[2] = r[2] + b[2];
    return out;
  }
  /**
   * Rotate a 3D vector around the y-axis
   * @param {vec3} out The receiving vec3
   * @param {ReadonlyVec3} a The vec3 point to rotate
   * @param {ReadonlyVec3} b The origin of the rotation
   * @param {Number} rad The angle of rotation in radians
   * @returns {vec3} out
   */
  
  function rotateY(out, a, b, rad) {
    var p = [],
        r = []; //Translate point to the origin
  
    p[0] = a[0] - b[0];
    p[1] = a[1] - b[1];
    p[2] = a[2] - b[2]; //perform rotation
  
    r[0] = p[2] * Math.sin(rad) + p[0] * Math.cos(rad);
    r[1] = p[1];
    r[2] = p[2] * Math.cos(rad) - p[0] * Math.sin(rad); //translate to correct position
  
    out[0] = r[0] + b[0];
    out[1] = r[1] + b[1];
    out[2] = r[2] + b[2];
    return out;
  }
  /**
   * Rotate a 3D vector around the z-axis
   * @param {vec3} out The receiving vec3
   * @param {ReadonlyVec3} a The vec3 point to rotate
   * @param {ReadonlyVec3} b The origin of the rotation
   * @param {Number} rad The angle of rotation in radians
   * @returns {vec3} out
   */
  
  function rotateZ(out, a, b, rad) {
    var p = [],
        r = []; //Translate point to the origin
  
    p[0] = a[0] - b[0];
    p[1] = a[1] - b[1];
    p[2] = a[2] - b[2]; //perform rotation
  
    r[0] = p[0] * Math.cos(rad) - p[1] * Math.sin(rad);
    r[1] = p[0] * Math.sin(rad) + p[1] * Math.cos(rad);
    r[2] = p[2]; //translate to correct position
  
    out[0] = r[0] + b[0];
    out[1] = r[1] + b[1];
    out[2] = r[2] + b[2];
    return out;
  }
  /**
   * Get the angle between two 3D vectors
   * @param {ReadonlyVec3} a The first operand
   * @param {ReadonlyVec3} b The second operand
   * @returns {Number} The angle in radians
   */
  
  function angle(a, b) {
    var ax = a[0],
        ay = a[1],
        az = a[2],
        bx = b[0],
        by = b[1],
        bz = b[2],
        mag1 = Math.sqrt(ax * ax + ay * ay + az * az),
        mag2 = Math.sqrt(bx * bx + by * by + bz * bz),
        mag = mag1 * mag2,
        cosine = mag && dot(a, b) / mag;
    return Math.acos(Math.min(Math.max(cosine, -1), 1));
  }
  /**
   * Set the components of a vec3 to zero
   *
   * @param {vec3} out the receiving vector
   * @returns {vec3} out
   */
  
  function zero(out) {
    out[0] = 0.0;
    out[1] = 0.0;
    out[2] = 0.0;
    return out;
  }
  /**
   * Returns a string representation of a vector
   *
   * @param {ReadonlyVec3} a vector to represent as a string
   * @returns {String} string representation of the vector
   */
  
  function str(a) {
    return "vec3(" + a[0] + ", " + a[1] + ", " + a[2] + ")";
  }
  /**
   * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
   *
   * @param {ReadonlyVec3} a The first vector.
   * @param {ReadonlyVec3} b The second vector.
   * @returns {Boolean} True if the vectors are equal, false otherwise.
   */
  
  function exactEquals(a, b) {
    return a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
  }
  /**
   * Returns whether or not the vectors have approximately the same elements in the same position.
   *
   * @param {ReadonlyVec3} a The first vector.
   * @param {ReadonlyVec3} b The second vector.
   * @returns {Boolean} True if the vectors are equal, false otherwise.
   */
  
  function equals(a, b) {
    var a0 = a[0],
        a1 = a[1],
        a2 = a[2];
    var b0 = b[0],
        b1 = b[1],
        b2 = b[2];
    return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2));
  }
  /**
   * Alias for {@link vec3.subtract}
   * @function
   */
  
  var sub = subtract;
  /**
   * Alias for {@link vec3.multiply}
   * @function
   */
  
  var mul = multiply;
  /**
   * Alias for {@link vec3.divide}
   * @function
   */
  
  var div = divide;
  /**
   * Alias for {@link vec3.distance}
   * @function
   */
  
  var dist = distance;
  /**
   * Alias for {@link vec3.squaredDistance}
   * @function
   */
  
  var sqrDist = squaredDistance;
  /**
   * Alias for {@link vec3.length}
   * @function
   */
  
  var len = length;
  /**
   * Alias for {@link vec3.squaredLength}
   * @function
   */
  
  var sqrLen = squaredLength;
  /**
   * Perform some operation over an array of vec3s.
   *
   * @param {Array} a the array of vectors to iterate over
   * @param {Number} stride Number of elements between the start of each vec3. If 0 assumes tightly packed
   * @param {Number} offset Number of elements to skip at the beginning of the array
   * @param {Number} count Number of vec3s to iterate over. If 0 iterates over entire array
   * @param {Function} fn Function to call for each vector in the array
   * @param {Object} [arg] additional argument to pass to fn
   * @returns {Array} a
   * @function
   */
  
  var forEach = function () {
    var vec = create();
    return function (a, stride, offset, count, fn, arg) {
      var i, l;
  
      if (!stride) {
        stride = 3;
      }
  
      if (!offset) {
        offset = 0;
      }
  
      if (count) {
        l = Math.min(count * stride + offset, a.length);
      } else {
        l = a.length;
      }
  
      for (i = offset; i < l; i += stride) {
        vec[0] = a[i];
        vec[1] = a[i + 1];
        vec[2] = a[i + 2];
        fn(vec, vec, arg);
        a[i] = vec[0];
        a[i + 1] = vec[1];
        a[i + 2] = vec[2];
      }
  
      return a;
    };
  }();
  
  /***/ }),
  
  /***/ "./node_modules/gl-matrix/esm/vec4.js":
  /*!********************************************!*\
    !*** ./node_modules/gl-matrix/esm/vec4.js ***!
    \********************************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
  /* harmony export */   add: () => (/* binding */ add),
  /* harmony export */   ceil: () => (/* binding */ ceil),
  /* harmony export */   clone: () => (/* binding */ clone),
  /* harmony export */   copy: () => (/* binding */ copy),
  /* harmony export */   create: () => (/* binding */ create),
  /* harmony export */   cross: () => (/* binding */ cross),
  /* harmony export */   dist: () => (/* binding */ dist),
  /* harmony export */   distance: () => (/* binding */ distance),
  /* harmony export */   div: () => (/* binding */ div),
  /* harmony export */   divide: () => (/* binding */ divide),
  /* harmony export */   dot: () => (/* binding */ dot),
  /* harmony export */   equals: () => (/* binding */ equals),
  /* harmony export */   exactEquals: () => (/* binding */ exactEquals),
  /* harmony export */   floor: () => (/* binding */ floor),
  /* harmony export */   forEach: () => (/* binding */ forEach),
  /* harmony export */   fromValues: () => (/* binding */ fromValues),
  /* harmony export */   inverse: () => (/* binding */ inverse),
  /* harmony export */   len: () => (/* binding */ len),
  /* harmony export */   length: () => (/* binding */ length),
  /* harmony export */   lerp: () => (/* binding */ lerp),
  /* harmony export */   max: () => (/* binding */ max),
  /* harmony export */   min: () => (/* binding */ min),
  /* harmony export */   mul: () => (/* binding */ mul),
  /* harmony export */   multiply: () => (/* binding */ multiply),
  /* harmony export */   negate: () => (/* binding */ negate),
  /* harmony export */   normalize: () => (/* binding */ normalize),
  /* harmony export */   random: () => (/* binding */ random),
  /* harmony export */   round: () => (/* binding */ round),
  /* harmony export */   scale: () => (/* binding */ scale),
  /* harmony export */   scaleAndAdd: () => (/* binding */ scaleAndAdd),
  /* harmony export */   set: () => (/* binding */ set),
  /* harmony export */   sqrDist: () => (/* binding */ sqrDist),
  /* harmony export */   sqrLen: () => (/* binding */ sqrLen),
  /* harmony export */   squaredDistance: () => (/* binding */ squaredDistance),
  /* harmony export */   squaredLength: () => (/* binding */ squaredLength),
  /* harmony export */   str: () => (/* binding */ str),
  /* harmony export */   sub: () => (/* binding */ sub),
  /* harmony export */   subtract: () => (/* binding */ subtract),
  /* harmony export */   transformMat4: () => (/* binding */ transformMat4),
  /* harmony export */   transformQuat: () => (/* binding */ transformQuat),
  /* harmony export */   zero: () => (/* binding */ zero)
  /* harmony export */ });
  /* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/gl-matrix/esm/common.js");
  
  /**
   * 4 Dimensional Vector
   * @module vec4
   */
  
  /**
   * Creates a new, empty vec4
   *
   * @returns {vec4} a new 4D vector
   */
  
  function create() {
    var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(4);
  
    if (_common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE != Float32Array) {
      out[0] = 0;
      out[1] = 0;
      out[2] = 0;
      out[3] = 0;
    }
  
    return out;
  }
  /**
   * Creates a new vec4 initialized with values from an existing vector
   *
   * @param {ReadonlyVec4} a vector to clone
   * @returns {vec4} a new 4D vector
   */
  
  function clone(a) {
    var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(4);
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    return out;
  }
  /**
   * Creates a new vec4 initialized with the given values
   *
   * @param {Number} x X component
   * @param {Number} y Y component
   * @param {Number} z Z component
   * @param {Number} w W component
   * @returns {vec4} a new 4D vector
   */
  
  function fromValues(x, y, z, w) {
    var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(4);
    out[0] = x;
    out[1] = y;
    out[2] = z;
    out[3] = w;
    return out;
  }
  /**
   * Copy the values from one vec4 to another
   *
   * @param {vec4} out the receiving vector
   * @param {ReadonlyVec4} a the source vector
   * @returns {vec4} out
   */
  
  function copy(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    return out;
  }
  /**
   * Set the components of a vec4 to the given values
   *
   * @param {vec4} out the receiving vector
   * @param {Number} x X component
   * @param {Number} y Y component
   * @param {Number} z Z component
   * @param {Number} w W component
   * @returns {vec4} out
   */
  
  function set(out, x, y, z, w) {
    out[0] = x;
    out[1] = y;
    out[2] = z;
    out[3] = w;
    return out;
  }
  /**
   * Adds two vec4's
   *
   * @param {vec4} out the receiving vector
   * @param {ReadonlyVec4} a the first operand
   * @param {ReadonlyVec4} b the second operand
   * @returns {vec4} out
   */
  
  function add(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    out[2] = a[2] + b[2];
    out[3] = a[3] + b[3];
    return out;
  }
  /**
   * Subtracts vector b from vector a
   *
   * @param {vec4} out the receiving vector
   * @param {ReadonlyVec4} a the first operand
   * @param {ReadonlyVec4} b the second operand
   * @returns {vec4} out
   */
  
  function subtract(out, a, b) {
    out[0] = a[0] - b[0];
    out[1] = a[1] - b[1];
    out[2] = a[2] - b[2];
    out[3] = a[3] - b[3];
    return out;
  }
  /**
   * Multiplies two vec4's
   *
   * @param {vec4} out the receiving vector
   * @param {ReadonlyVec4} a the first operand
   * @param {ReadonlyVec4} b the second operand
   * @returns {vec4} out
   */
  
  function multiply(out, a, b) {
    out[0] = a[0] * b[0];
    out[1] = a[1] * b[1];
    out[2] = a[2] * b[2];
    out[3] = a[3] * b[3];
    return out;
  }
  /**
   * Divides two vec4's
   *
   * @param {vec4} out the receiving vector
   * @param {ReadonlyVec4} a the first operand
   * @param {ReadonlyVec4} b the second operand
   * @returns {vec4} out
   */
  
  function divide(out, a, b) {
    out[0] = a[0] / b[0];
    out[1] = a[1] / b[1];
    out[2] = a[2] / b[2];
    out[3] = a[3] / b[3];
    return out;
  }
  /**
   * Math.ceil the components of a vec4
   *
   * @param {vec4} out the receiving vector
   * @param {ReadonlyVec4} a vector to ceil
   * @returns {vec4} out
   */
  
  function ceil(out, a) {
    out[0] = Math.ceil(a[0]);
    out[1] = Math.ceil(a[1]);
    out[2] = Math.ceil(a[2]);
    out[3] = Math.ceil(a[3]);
    return out;
  }
  /**
   * Math.floor the components of a vec4
   *
   * @param {vec4} out the receiving vector
   * @param {ReadonlyVec4} a vector to floor
   * @returns {vec4} out
   */
  
  function floor(out, a) {
    out[0] = Math.floor(a[0]);
    out[1] = Math.floor(a[1]);
    out[2] = Math.floor(a[2]);
    out[3] = Math.floor(a[3]);
    return out;
  }
  /**
   * Returns the minimum of two vec4's
   *
   * @param {vec4} out the receiving vector
   * @param {ReadonlyVec4} a the first operand
   * @param {ReadonlyVec4} b the second operand
   * @returns {vec4} out
   */
  
  function min(out, a, b) {
    out[0] = Math.min(a[0], b[0]);
    out[1] = Math.min(a[1], b[1]);
    out[2] = Math.min(a[2], b[2]);
    out[3] = Math.min(a[3], b[3]);
    return out;
  }
  /**
   * Returns the maximum of two vec4's
   *
   * @param {vec4} out the receiving vector
   * @param {ReadonlyVec4} a the first operand
   * @param {ReadonlyVec4} b the second operand
   * @returns {vec4} out
   */
  
  function max(out, a, b) {
    out[0] = Math.max(a[0], b[0]);
    out[1] = Math.max(a[1], b[1]);
    out[2] = Math.max(a[2], b[2]);
    out[3] = Math.max(a[3], b[3]);
    return out;
  }
  /**
   * Math.round the components of a vec4
   *
   * @param {vec4} out the receiving vector
   * @param {ReadonlyVec4} a vector to round
   * @returns {vec4} out
   */
  
  function round(out, a) {
    out[0] = Math.round(a[0]);
    out[1] = Math.round(a[1]);
    out[2] = Math.round(a[2]);
    out[3] = Math.round(a[3]);
    return out;
  }
  /**
   * Scales a vec4 by a scalar number
   *
   * @param {vec4} out the receiving vector
   * @param {ReadonlyVec4} a the vector to scale
   * @param {Number} b amount to scale the vector by
   * @returns {vec4} out
   */
  
  function scale(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    out[2] = a[2] * b;
    out[3] = a[3] * b;
    return out;
  }
  /**
   * Adds two vec4's after scaling the second operand by a scalar value
   *
   * @param {vec4} out the receiving vector
   * @param {ReadonlyVec4} a the first operand
   * @param {ReadonlyVec4} b the second operand
   * @param {Number} scale the amount to scale b by before adding
   * @returns {vec4} out
   */
  
  function scaleAndAdd(out, a, b, scale) {
    out[0] = a[0] + b[0] * scale;
    out[1] = a[1] + b[1] * scale;
    out[2] = a[2] + b[2] * scale;
    out[3] = a[3] + b[3] * scale;
    return out;
  }
  /**
   * Calculates the euclidian distance between two vec4's
   *
   * @param {ReadonlyVec4} a the first operand
   * @param {ReadonlyVec4} b the second operand
   * @returns {Number} distance between a and b
   */
  
  function distance(a, b) {
    var x = b[0] - a[0];
    var y = b[1] - a[1];
    var z = b[2] - a[2];
    var w = b[3] - a[3];
    return Math.hypot(x, y, z, w);
  }
  /**
   * Calculates the squared euclidian distance between two vec4's
   *
   * @param {ReadonlyVec4} a the first operand
   * @param {ReadonlyVec4} b the second operand
   * @returns {Number} squared distance between a and b
   */
  
  function squaredDistance(a, b) {
    var x = b[0] - a[0];
    var y = b[1] - a[1];
    var z = b[2] - a[2];
    var w = b[3] - a[3];
    return x * x + y * y + z * z + w * w;
  }
  /**
   * Calculates the length of a vec4
   *
   * @param {ReadonlyVec4} a vector to calculate length of
   * @returns {Number} length of a
   */
  
  function length(a) {
    var x = a[0];
    var y = a[1];
    var z = a[2];
    var w = a[3];
    return Math.hypot(x, y, z, w);
  }
  /**
   * Calculates the squared length of a vec4
   *
   * @param {ReadonlyVec4} a vector to calculate squared length of
   * @returns {Number} squared length of a
   */
  
  function squaredLength(a) {
    var x = a[0];
    var y = a[1];
    var z = a[2];
    var w = a[3];
    return x * x + y * y + z * z + w * w;
  }
  /**
   * Negates the components of a vec4
   *
   * @param {vec4} out the receiving vector
   * @param {ReadonlyVec4} a vector to negate
   * @returns {vec4} out
   */
  
  function negate(out, a) {
    out[0] = -a[0];
    out[1] = -a[1];
    out[2] = -a[2];
    out[3] = -a[3];
    return out;
  }
  /**
   * Returns the inverse of the components of a vec4
   *
   * @param {vec4} out the receiving vector
   * @param {ReadonlyVec4} a vector to invert
   * @returns {vec4} out
   */
  
  function inverse(out, a) {
    out[0] = 1.0 / a[0];
    out[1] = 1.0 / a[1];
    out[2] = 1.0 / a[2];
    out[3] = 1.0 / a[3];
    return out;
  }
  /**
   * Normalize a vec4
   *
   * @param {vec4} out the receiving vector
   * @param {ReadonlyVec4} a vector to normalize
   * @returns {vec4} out
   */
  
  function normalize(out, a) {
    var x = a[0];
    var y = a[1];
    var z = a[2];
    var w = a[3];
    var len = x * x + y * y + z * z + w * w;
  
    if (len > 0) {
      len = 1 / Math.sqrt(len);
    }
  
    out[0] = x * len;
    out[1] = y * len;
    out[2] = z * len;
    out[3] = w * len;
    return out;
  }
  /**
   * Calculates the dot product of two vec4's
   *
   * @param {ReadonlyVec4} a the first operand
   * @param {ReadonlyVec4} b the second operand
   * @returns {Number} dot product of a and b
   */
  
  function dot(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
  }
  /**
   * Returns the cross-product of three vectors in a 4-dimensional space
   *
   * @param {ReadonlyVec4} result the receiving vector
   * @param {ReadonlyVec4} U the first vector
   * @param {ReadonlyVec4} V the second vector
   * @param {ReadonlyVec4} W the third vector
   * @returns {vec4} result
   */
  
  function cross(out, u, v, w) {
    var A = v[0] * w[1] - v[1] * w[0],
        B = v[0] * w[2] - v[2] * w[0],
        C = v[0] * w[3] - v[3] * w[0],
        D = v[1] * w[2] - v[2] * w[1],
        E = v[1] * w[3] - v[3] * w[1],
        F = v[2] * w[3] - v[3] * w[2];
    var G = u[0];
    var H = u[1];
    var I = u[2];
    var J = u[3];
    out[0] = H * F - I * E + J * D;
    out[1] = -(G * F) + I * C - J * B;
    out[2] = G * E - H * C + J * A;
    out[3] = -(G * D) + H * B - I * A;
    return out;
  }
  /**
   * Performs a linear interpolation between two vec4's
   *
   * @param {vec4} out the receiving vector
   * @param {ReadonlyVec4} a the first operand
   * @param {ReadonlyVec4} b the second operand
   * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
   * @returns {vec4} out
   */
  
  function lerp(out, a, b, t) {
    var ax = a[0];
    var ay = a[1];
    var az = a[2];
    var aw = a[3];
    out[0] = ax + t * (b[0] - ax);
    out[1] = ay + t * (b[1] - ay);
    out[2] = az + t * (b[2] - az);
    out[3] = aw + t * (b[3] - aw);
    return out;
  }
  /**
   * Generates a random vector with the given scale
   *
   * @param {vec4} out the receiving vector
   * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
   * @returns {vec4} out
   */
  
  function random(out, scale) {
    scale = scale || 1.0; // Marsaglia, George. Choosing a Point from the Surface of a
    // Sphere. Ann. Math. Statist. 43 (1972), no. 2, 645--646.
    // http://projecteuclid.org/euclid.aoms/1177692644;
  
    var v1, v2, v3, v4;
    var s1, s2;
  
    do {
      v1 = _common_js__WEBPACK_IMPORTED_MODULE_0__.RANDOM() * 2 - 1;
      v2 = _common_js__WEBPACK_IMPORTED_MODULE_0__.RANDOM() * 2 - 1;
      s1 = v1 * v1 + v2 * v2;
    } while (s1 >= 1);
  
    do {
      v3 = _common_js__WEBPACK_IMPORTED_MODULE_0__.RANDOM() * 2 - 1;
      v4 = _common_js__WEBPACK_IMPORTED_MODULE_0__.RANDOM() * 2 - 1;
      s2 = v3 * v3 + v4 * v4;
    } while (s2 >= 1);
  
    var d = Math.sqrt((1 - s1) / s2);
    out[0] = scale * v1;
    out[1] = scale * v2;
    out[2] = scale * v3 * d;
    out[3] = scale * v4 * d;
    return out;
  }
  /**
   * Transforms the vec4 with a mat4.
   *
   * @param {vec4} out the receiving vector
   * @param {ReadonlyVec4} a the vector to transform
   * @param {ReadonlyMat4} m matrix to transform with
   * @returns {vec4} out
   */
  
  function transformMat4(out, a, m) {
    var x = a[0],
        y = a[1],
        z = a[2],
        w = a[3];
    out[0] = m[0] * x + m[4] * y + m[8] * z + m[12] * w;
    out[1] = m[1] * x + m[5] * y + m[9] * z + m[13] * w;
    out[2] = m[2] * x + m[6] * y + m[10] * z + m[14] * w;
    out[3] = m[3] * x + m[7] * y + m[11] * z + m[15] * w;
    return out;
  }
  /**
   * Transforms the vec4 with a quat
   *
   * @param {vec4} out the receiving vector
   * @param {ReadonlyVec4} a the vector to transform
   * @param {ReadonlyQuat} q quaternion to transform with
   * @returns {vec4} out
   */
  
  function transformQuat(out, a, q) {
    var x = a[0],
        y = a[1],
        z = a[2];
    var qx = q[0],
        qy = q[1],
        qz = q[2],
        qw = q[3]; // calculate quat * vec
  
    var ix = qw * x + qy * z - qz * y;
    var iy = qw * y + qz * x - qx * z;
    var iz = qw * z + qx * y - qy * x;
    var iw = -qx * x - qy * y - qz * z; // calculate result * inverse quat
  
    out[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy;
    out[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;
    out[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;
    out[3] = a[3];
    return out;
  }
  /**
   * Set the components of a vec4 to zero
   *
   * @param {vec4} out the receiving vector
   * @returns {vec4} out
   */
  
  function zero(out) {
    out[0] = 0.0;
    out[1] = 0.0;
    out[2] = 0.0;
    out[3] = 0.0;
    return out;
  }
  /**
   * Returns a string representation of a vector
   *
   * @param {ReadonlyVec4} a vector to represent as a string
   * @returns {String} string representation of the vector
   */
  
  function str(a) {
    return "vec4(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ")";
  }
  /**
   * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
   *
   * @param {ReadonlyVec4} a The first vector.
   * @param {ReadonlyVec4} b The second vector.
   * @returns {Boolean} True if the vectors are equal, false otherwise.
   */
  
  function exactEquals(a, b) {
    return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
  }
  /**
   * Returns whether or not the vectors have approximately the same elements in the same position.
   *
   * @param {ReadonlyVec4} a The first vector.
   * @param {ReadonlyVec4} b The second vector.
   * @returns {Boolean} True if the vectors are equal, false otherwise.
   */
  
  function equals(a, b) {
    var a0 = a[0],
        a1 = a[1],
        a2 = a[2],
        a3 = a[3];
    var b0 = b[0],
        b1 = b[1],
        b2 = b[2],
        b3 = b[3];
    return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3));
  }
  /**
   * Alias for {@link vec4.subtract}
   * @function
   */
  
  var sub = subtract;
  /**
   * Alias for {@link vec4.multiply}
   * @function
   */
  
  var mul = multiply;
  /**
   * Alias for {@link vec4.divide}
   * @function
   */
  
  var div = divide;
  /**
   * Alias for {@link vec4.distance}
   * @function
   */
  
  var dist = distance;
  /**
   * Alias for {@link vec4.squaredDistance}
   * @function
   */
  
  var sqrDist = squaredDistance;
  /**
   * Alias for {@link vec4.length}
   * @function
   */
  
  var len = length;
  /**
   * Alias for {@link vec4.squaredLength}
   * @function
   */
  
  var sqrLen = squaredLength;
  /**
   * Perform some operation over an array of vec4s.
   *
   * @param {Array} a the array of vectors to iterate over
   * @param {Number} stride Number of elements between the start of each vec4. If 0 assumes tightly packed
   * @param {Number} offset Number of elements to skip at the beginning of the array
   * @param {Number} count Number of vec4s to iterate over. If 0 iterates over entire array
   * @param {Function} fn Function to call for each vector in the array
   * @param {Object} [arg] additional argument to pass to fn
   * @returns {Array} a
   * @function
   */
  
  var forEach = function () {
    var vec = create();
    return function (a, stride, offset, count, fn, arg) {
      var i, l;
  
      if (!stride) {
        stride = 4;
      }
  
      if (!offset) {
        offset = 0;
      }
  
      if (count) {
        l = Math.min(count * stride + offset, a.length);
      } else {
        l = a.length;
      }
  
      for (i = offset; i < l; i += stride) {
        vec[0] = a[i];
        vec[1] = a[i + 1];
        vec[2] = a[i + 2];
        vec[3] = a[i + 3];
        fn(vec, vec, arg);
        a[i] = vec[0];
        a[i + 1] = vec[1];
        a[i + 2] = vec[2];
        a[i + 3] = vec[3];
      }
  
      return a;
    };
  }();
  
  /***/ }),
  
  /***/ "./public/engine/core/components/Animator.ts":
  /*!***************************************************!*\
    !*** ./public/engine/core/components/Animator.ts ***!
    \***************************************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
  /* harmony export */   AnimationClip: () => (/* binding */ AnimationClip),
  /* harmony export */   Animator: () => (/* binding */ Animator)
  /* harmony export */ });
  var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
      function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
      return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
          function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
          function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
  };
  class AnimationClip {
      constructor(target, update) {
          this.target = target;
          this.updateFunc = update;
      }
      toJson() {
          return __awaiter(this, void 0, void 0, function* () {
              return this.updateFunc.toString();
          });
      }
      Update() {
          this.updateFunc(this.target);
      }
  }
  class Animator {
      constructor(name) {
          this.name = "animator";
          this.clips = [];
          this.current = null;
          this.currentIndex = -1;
          this.owner = null;
          this.allowedToStart = false;
          this.subname = name;
      }
      AddClip(update) {
          if (!this.owner)
              return;
          this.clips.push(new AnimationClip(this.owner, update));
      }
      Next() {
          this.currentIndex++;
          if (this.currentIndex >= 0 && this.currentIndex < this.clips.length) {
              this.current = this.clips[this.currentIndex];
          }
      }
      OnStart() {
          return __awaiter(this, void 0, void 0, function* () {
          });
      }
      OnUpdate() {
          if (this.current && this.allowedToStart) {
              this.current.Update();
          }
      }
      BeforeRemove() {
      }
      // Исправленный метод toJson
      toJson() {
          return __awaiter(this, void 0, void 0, function* () {
              try {
                  // Ожидаем завершения всех асинхронных операций для клипов
                  const clipsJson = yield Promise.all(this.clips.map((clip) => __awaiter(this, void 0, void 0, function* () { return yield clip.toJson(); })));
                  // Сериализуем данные после завершения всех операций
                  return JSON.stringify({
                      name: this.name,
                      clips: clipsJson,
                      currentIndex: this.currentIndex,
                  });
              }
              catch (error) {
                  console.error("Error during Animator serialization:", error);
                  throw error;
              }
          });
      }
  }
  
  
  /***/ }),
  
  /***/ "./public/engine/core/components/Camera.ts":
  /*!*************************************************!*\
    !*** ./public/engine/core/components/Camera.ts ***!
    \*************************************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
  /* harmony export */   Camera: () => (/* binding */ Camera)
  /* harmony export */ });
  /* harmony import */ var gl_matrix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/mat4.js");
  /* harmony import */ var gl_matrix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/vec3.js");
  /* harmony import */ var _eng__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../eng */ "./public/engine/core/eng.ts");
  var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
      function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
      return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
          function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
          function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
  };
  
  
  class Camera {
      constructor(name) {
          this.owner = null;
          this.isGameStart = false;
          this.name = "camera";
          this.viewMatrix = gl_matrix__WEBPACK_IMPORTED_MODULE_1__.create();
          this.subname = name;
          this.eye = gl_matrix__WEBPACK_IMPORTED_MODULE_2__.fromValues(0, 0, 3);
          this.center = gl_matrix__WEBPACK_IMPORTED_MODULE_2__.fromValues(0, 0, 5);
          this.up = gl_matrix__WEBPACK_IMPORTED_MODULE_2__.fromValues(0, 1, 0);
      }
      updateMatrix() {
          if (this.owner) {
              this.eye = this.owner.transform.position;
          }
          gl_matrix__WEBPACK_IMPORTED_MODULE_1__.lookAt(this.viewMatrix, this.eye, this.center, this.up);
      }
      OnStart() {
          return __awaiter(this, void 0, void 0, function* () {
              this.updateMatrix();
              if (this.isGameStart)
                  _eng__WEBPACK_IMPORTED_MODULE_0__.Engine.viewMatrix = this.viewMatrix;
          });
      }
      OnUpdate() {
          this.updateMatrix();
          if (this.isGameStart)
              _eng__WEBPACK_IMPORTED_MODULE_0__.Engine.viewMatrix = this.viewMatrix;
      }
      BeforeRemove() {
          _eng__WEBPACK_IMPORTED_MODULE_0__.Engine.viewMatrix = _eng__WEBPACK_IMPORTED_MODULE_0__.Engine.createViewMatrix();
      }
      toJson() {
          return __awaiter(this, void 0, void 0, function* () {
              return '';
          });
      }
  }
  
  
  /***/ }),
  
  /***/ "./public/engine/core/components/Renderer.ts":
  /*!***************************************************!*\
    !*** ./public/engine/core/components/Renderer.ts ***!
    \***************************************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
  /* harmony export */   Renderer: () => (/* binding */ Renderer)
  /* harmony export */ });
  /* harmony import */ var _objects_geometries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../objects/geometries */ "./public/engine/core/objects/geometries.ts");
  /* harmony import */ var gl_matrix__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/mat4.js");
  /* harmony import */ var gl_matrix__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/vec4.js");
  /* harmony import */ var _objects_geometry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../objects/geometry */ "./public/engine/core/objects/geometry.ts");
  /* harmony import */ var _gl_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../gl/material */ "./public/engine/core/gl/material.ts");
  /* harmony import */ var _gl_gl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../gl/gl */ "./public/engine/core/gl/gl.ts");
  /* harmony import */ var _eng__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../eng */ "./public/engine/core/eng.ts");
  var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
      function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
      return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
          function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
          function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
  };
  
  
  
  
  
  
  
  class Renderer {
      constructor(geometryUrl, materialUrl, isDrawingEdges = false, textureUrl = undefined, color) {
          this.name = "renderer";
          this.owner = null;
          this.allowedToStart = true;
          this.subname = 'renderer';
          this._projection = gl_matrix__WEBPACK_IMPORTED_MODULE_5__.create();
          this._viewMatrix = gl_matrix__WEBPACK_IMPORTED_MODULE_5__.create();
          this.isDrawingEdges = isDrawingEdges;
          this.loadFromUrl(geometryUrl);
          this._isMaterialLoaded = false;
          this._materialUrl = materialUrl;
          this.color = color;
          this.textureUrl = textureUrl;
      }
      OnStart() {
          return __awaiter(this, void 0, void 0, function* () {
              var _a;
              this._transform = (_a = this.owner) === null || _a === void 0 ? void 0 : _a.transform;
              if (!this.material) {
                  const materials = yield _gl_gl__WEBPACK_IMPORTED_MODULE_3__.GLUtilities.loadMTL(this._materialUrl);
                  if (materials) {
                      this.material = new _gl_material__WEBPACK_IMPORTED_MODULE_2__.Material(_eng__WEBPACK_IMPORTED_MODULE_4__.Engine._light, materials);
                  }
                  else {
                      this.material = new _gl_material__WEBPACK_IMPORTED_MODULE_2__.Material(_eng__WEBPACK_IMPORTED_MODULE_4__.Engine._light, [{
                              name: 'default',
                              Ns: 0,
                              Ka: gl_matrix__WEBPACK_IMPORTED_MODULE_6__.fromValues(0, 0, 0, 1),
                              Kd: gl_matrix__WEBPACK_IMPORTED_MODULE_6__.fromValues(1, 1, 1, 1),
                              Ks: gl_matrix__WEBPACK_IMPORTED_MODULE_6__.fromValues(0, 0, 0, 1),
                              d: 1,
                              illum: 0
                          }]);
                  }
                  this.material.setCurrentMaterial(0);
                  this._isMaterialLoaded = true;
                  this.setColor(this.color[0], this.color[1], this.color[2], this.color[3]);
                  if (this.textureUrl) {
                      this.loadTexture(this.textureUrl);
                  }
              }
          });
      }
      OnUpdate() {
          this.draw();
      }
      BeforeRemove() {
      }
      setColor(r, g, b, a) {
          var _a;
          this.color[0] = r;
          this.color[1] = g;
          this.color[2] = b;
          this.color[3] = a;
          (_a = this.material) === null || _a === void 0 ? void 0 : _a.setColor(r, g, b, a);
      }
      OnResize(args) {
          this._projection = args._projection;
          this._viewMatrix = args._viewMatrix;
      }
      loadFromUrl(url) {
          return __awaiter(this, void 0, void 0, function* () {
              const geometry = yield _objects_geometries__WEBPACK_IMPORTED_MODULE_0__.TemplateGeometry.loadFromOBJ(url);
              this.geometryUrl = url;
              this.loadGeometry(geometry);
          });
      }
      loadGeometry(template) {
          this._geometry = _objects_geometry__WEBPACK_IMPORTED_MODULE_1__.Geometry.loadFromClass(template);
      }
      loadTexture(url) {
          return __awaiter(this, void 0, void 0, function* () {
              var _a, _b;
              this.textureUrl = url;
              yield ((_a = this.material) === null || _a === void 0 ? void 0 : _a.loadTexture(url, (_b = this.material) === null || _b === void 0 ? void 0 : _b.getCurrentMaterialIndex()));
          });
      }
      toJson() {
          return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
              resolve(JSON.stringify({
                  name: this.name,
                  color: Array.from(this.color),
                  materialUrl: this._materialUrl,
                  geometryUrl: this.geometryUrl,
                  textureUrl: this.textureUrl
              }));
          }));
      }
      draw() {
          if (!this._transform) {
              console.error("[Transform] must be not null");
              return;
          }
          else if (!this.material) {
              console.error("[Material] must be not null");
              return;
          }
          else if (!this._geometry) {
              console.error("[Geometry] must be not null");
              return;
          }
          this.material.basicUse();
          let posLocation = this.material.getAttributePosition('pos', 'basic');
          if (posLocation == -1) {
              console.log('attrib not found');
              return;
          }
          let texCoordLocation = this.material.getAttributePosition('texCoord', 'basic');
          if (texCoordLocation == -1) {
              console.log('texCoord attrib not found');
              return;
          }
          this._geometry.bindBuffers();
          const mvpMatrix = this._transform.getMvpMatrix(this._projection, this._viewMatrix);
          let loc = this.material.getUniformPosition('matrix', 'basic');
          _gl_gl__WEBPACK_IMPORTED_MODULE_3__.gl.uniformMatrix4fv(loc, false, new Float32Array(mvpMatrix));
          this._geometry.draw();
          if (this.isDrawingEdges) {
              this.material.edgeUse();
              posLocation = this.material.getAttributePosition('pos', 'edge');
              if (posLocation == -1) {
                  console.log('attrib not found');
                  return;
              }
              this._geometry.bindEdgeBuffers();
              loc = this.material.getUniformPosition('matrix', 'edge');
              _gl_gl__WEBPACK_IMPORTED_MODULE_3__.gl.uniformMatrix4fv(loc, false, new Float32Array(mvpMatrix));
              this._geometry.drawEdges();
          }
      }
  }
  
  
  /***/ }),
  
  /***/ "./public/engine/core/components/Script.ts":
  /*!*************************************************!*\
    !*** ./public/engine/core/components/Script.ts ***!
    \*************************************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
  /* harmony export */   Script: () => (/* binding */ Script)
  /* harmony export */ });
  /* harmony import */ var _eng__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../eng */ "./public/engine/core/eng.ts");
  var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
      function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
      return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
          function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
          function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
  };
  
  class Script {
      constructor(scriptData) {
          this.owner = null;
          this.name = "script";
          this.allowedToStart = false;
          this.data = scriptData;
          this.subname = scriptData.name;
          this.init();
      }
      setParams(newData) {
          this.params = newData;
      }
      OnStart() {
          return __awaiter(this, void 0, void 0, function* () {
              if (this.data.onStart)
                  this.data.onStart(this.owner, this.params);
              if (this.data.onKeyDown && typeof this.data.onKeyDown === 'function')
                  _eng__WEBPACK_IMPORTED_MODULE_0__.Engine.eventEmitter.on('keydown', (event) => {
                      this.data.onKeyDown(event, this.owner, this.params);
                  });
              if (this.data.onKeyUp && typeof this.data.onKeyUp === 'function')
                  _eng__WEBPACK_IMPORTED_MODULE_0__.Engine.eventEmitter.on('keyup', (event) => {
                      this.data.onKeyUp(event, this.owner, this.params);
                  });
              if (this.data.onMouseDown && typeof this.data.onMouseDown === 'function')
                  _eng__WEBPACK_IMPORTED_MODULE_0__.Engine.eventEmitter.on('mousedown', (event) => {
                      this.data.onMouseDown(event, this.owner, this.params);
                  });
              if (this.data.onMouseUp && typeof this.data.onMouseUp === 'function')
                  _eng__WEBPACK_IMPORTED_MODULE_0__.Engine.eventEmitter.on('mouseup', (event) => {
                      this.data.onMouseUp(event, this.owner, this.params);
                  });
          });
      }
      OnUpdate() {
          if (this.data.onUpdate && this.allowedToStart)
              this.data.onUpdate(this.owner, this.params);
      }
      BeforeRemove() {
          if (this.data.beforeRemove)
              this.data.beforeRemove(this.owner);
          ;
      }
      toJson() {
          return new Promise(resolve => {
              resolve(JSON.stringify({
                  name: this.name,
                  subname: this.subname,
                  fileUrl: this.fileUrl
              }));
          });
      }
      init() {
          if (this.data.init)
              this.params = this.data.init();
      }
  }
  
  
  /***/ }),
  
  /***/ "./public/engine/core/eng.ts":
  /*!***********************************!*\
    !*** ./public/engine/core/eng.ts ***!
    \***********************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
  /* harmony export */   AnimationClip: () => (/* reexport safe */ _components_Animator__WEBPACK_IMPORTED_MODULE_9__.AnimationClip),
  /* harmony export */   Animator: () => (/* reexport safe */ _components_Animator__WEBPACK_IMPORTED_MODULE_9__.Animator),
  /* harmony export */   Camera: () => (/* reexport safe */ _components_Camera__WEBPACK_IMPORTED_MODULE_10__.Camera),
  /* harmony export */   Cube: () => (/* reexport safe */ _objects_geometries__WEBPACK_IMPORTED_MODULE_8__.Cube),
  /* harmony export */   Engine: () => (/* binding */ Engine),
  /* harmony export */   GLUtilities: () => (/* reexport safe */ _gl_gl__WEBPACK_IMPORTED_MODULE_2__.GLUtilities),
  /* harmony export */   GameObject: () => (/* reexport safe */ _objects_GameObject__WEBPACK_IMPORTED_MODULE_3__.GameObject),
  /* harmony export */   Material: () => (/* reexport safe */ _gl_material__WEBPACK_IMPORTED_MODULE_5__.Material),
  /* harmony export */   Renderer: () => (/* reexport safe */ _components_Renderer__WEBPACK_IMPORTED_MODULE_6__.Renderer),
  /* harmony export */   Script: () => (/* reexport safe */ _components_Script__WEBPACK_IMPORTED_MODULE_1__.Script),
  /* harmony export */   Sphere: () => (/* reexport safe */ _objects_geometries__WEBPACK_IMPORTED_MODULE_8__.Sphere),
  /* harmony export */   TemplateGeometry: () => (/* reexport safe */ _objects_geometries__WEBPACK_IMPORTED_MODULE_8__.TemplateGeometry),
  /* harmony export */   Transform: () => (/* reexport safe */ _objects_transform__WEBPACK_IMPORTED_MODULE_7__.Transform),
  /* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
  /* harmony export */ });
  /* harmony import */ var _event_system_keyboard_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event-system/keyboard-manager */ "./public/engine/core/event-system/keyboard-manager.ts");
  /* harmony import */ var _components_Script__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Script */ "./public/engine/core/components/Script.ts");
  /* harmony import */ var _gl_gl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gl/gl */ "./public/engine/core/gl/gl.ts");
  /* harmony import */ var _objects_GameObject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./objects/GameObject */ "./public/engine/core/objects/GameObject.ts");
  /* harmony import */ var gl_matrix__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/mat4.js");
  /* harmony import */ var gl_matrix__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/vec3.js");
  /* harmony import */ var _gl_light__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gl/light */ "./public/engine/core/gl/light.ts");
  /* harmony import */ var _gl_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gl/material */ "./public/engine/core/gl/material.ts");
  /* harmony import */ var _components_Renderer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Renderer */ "./public/engine/core/components/Renderer.ts");
  /* harmony import */ var _objects_transform__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./objects/transform */ "./public/engine/core/objects/transform.ts");
  /* harmony import */ var _objects_geometries__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./objects/geometries */ "./public/engine/core/objects/geometries.ts");
  /* harmony import */ var _components_Animator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/Animator */ "./public/engine/core/components/Animator.ts");
  /* harmony import */ var _components_Camera__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/Camera */ "./public/engine/core/components/Camera.ts");
  /* harmony import */ var _event_system_emitter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./event-system/emitter */ "./public/engine/core/event-system/emitter.ts");
  /* harmony import */ var _event_system_mouse_manager__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./event-system/mouse-manager */ "./public/engine/core/event-system/mouse-manager.ts");
  var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
      function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
      return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
          function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
          function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
  };
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  class Engine {
      constructor(width, height) {
          this._objects = [];
          this._color = null;
          this.isInited = false;
          Engine.eventEmitter = new _event_system_emitter__WEBPACK_IMPORTED_MODULE_11__.EventEmitter();
      }
      init(id, theme) {
          Engine.canvas = _gl_gl__WEBPACK_IMPORTED_MODULE_2__.GLUtilities.init(id);
          this._color = theme;
          Engine._light = this.createLight();
          Engine.viewMatrix = Engine.createViewMatrix();
          this.keyboardManager = new _event_system_keyboard_manager__WEBPACK_IMPORTED_MODULE_0__.KeyboardManager(Engine.eventEmitter);
          this.mouseManager = new _event_system_mouse_manager__WEBPACK_IMPORTED_MODULE_12__.MouseManager(Engine.eventEmitter);
          this.isInited = true;
      }
      createLight() {
          const light = new _gl_light__WEBPACK_IMPORTED_MODULE_4__.Light();
          light.setDirection(0.0, 1.0, 0.0);
          return light;
      }
      resize() {
          var _a, _b;
          if (!Engine.canvas) {
              return;
          }
          // Синхронизируем физические размеры canvas с его отображаемыми размерами
          const displayWidth = (_a = Engine.canvas) === null || _a === void 0 ? void 0 : _a.clientWidth;
          const displayHeight = (_b = Engine.canvas) === null || _b === void 0 ? void 0 : _b.clientHeight;
          if (Engine.canvas.width !== displayWidth || Engine.canvas.height !== displayHeight) {
              Engine.canvas.width = displayWidth;
              Engine.canvas.height = displayHeight;
          }
          // Обновляем viewport и матрицу проекции
          _gl_gl__WEBPACK_IMPORTED_MODULE_2__.gl.viewport(0, 0, Engine.canvas.width, Engine.canvas.height);
          this._objects.forEach(i => {
              let renderer = i.GetComponent("renderer");
              if (renderer) {
                  renderer.OnResize({ _projection: Engine.createPerspectiveMatrix(), _viewMatrix: Engine.viewMatrix });
              }
          });
      }
      static createPerspectiveMatrix() {
          const projectionMatrix = gl_matrix__WEBPACK_IMPORTED_MODULE_13__.create();
          if (!Engine.canvas) {
              return projectionMatrix;
          }
          const fieldOfView = 45 * Math.PI / 180;
          const aspect = Engine.canvas.clientWidth / Engine.canvas.clientHeight;
          const zNear = 0.1;
          const zFar = 100.0;
          gl_matrix__WEBPACK_IMPORTED_MODULE_13__.perspective(projectionMatrix, fieldOfView, aspect, zNear, zFar);
          return projectionMatrix;
      }
      static createViewMatrix() {
          const viewMatrix = gl_matrix__WEBPACK_IMPORTED_MODULE_13__.create();
          const eye = gl_matrix__WEBPACK_IMPORTED_MODULE_14__.fromValues(0, 0, 3);
          const center = gl_matrix__WEBPACK_IMPORTED_MODULE_14__.fromValues(0, 0, 5);
          const up = gl_matrix__WEBPACK_IMPORTED_MODULE_14__.fromValues(0, 1, 0);
          gl_matrix__WEBPACK_IMPORTED_MODULE_13__.lookAt(viewMatrix, eye, center, up);
          return viewMatrix;
      }
      start(theme) {
          return __awaiter(this, void 0, void 0, function* () {
              this._color = theme;
              if (this._color && this._color == "light") {
                  _gl_gl__WEBPACK_IMPORTED_MODULE_2__.gl.clearColor(1, 1, 1, 1);
              }
              else {
                  _gl_gl__WEBPACK_IMPORTED_MODULE_2__.gl.clearColor(0, 0, 0, 1);
              }
              _gl_gl__WEBPACK_IMPORTED_MODULE_2__.gl.enable(_gl_gl__WEBPACK_IMPORTED_MODULE_2__.gl.DEPTH_TEST);
              window.addEventListener('resize', () => this.resize());
              yield Promise.all(this._objects.map(obj => Promise.all(obj.components.map((component) => __awaiter(this, void 0, void 0, function* () {
                  return yield component.OnStart();
              })))));
              this.resize();
              this.loop();
          });
      }
      loop() {
          _gl_gl__WEBPACK_IMPORTED_MODULE_2__.gl.clear(_gl_gl__WEBPACK_IMPORTED_MODULE_2__.gl.COLOR_BUFFER_BIT | _gl_gl__WEBPACK_IMPORTED_MODULE_2__.gl.DEPTH_BUFFER_BIT);
          this._objects.forEach(i => {
              i.components.forEach(j => {
                  j.OnUpdate();
              });
          });
          requestAnimationFrame(() => this.loop());
      }
      saveToJson() {
          return __awaiter(this, void 0, void 0, function* () {
              if (!Engine.viewMatrix)
                  throw new Error("Camera must be initialized!");
              if (!Engine._light)
                  throw new Error("Light must be initialized!");
              const objects = yield Promise.all(this._objects.map((object) => __awaiter(this, void 0, void 0, function* () {
                  return yield object.toJson();
              })));
              return JSON.stringify({
                  camera: Array.from(Engine.viewMatrix),
                  light: Engine._light.toJson(),
                  objects: objects,
              });
          });
      }
  }
  
  const SDK = {
      Camera: _components_Camera__WEBPACK_IMPORTED_MODULE_10__.Camera,
      AnimationClip: _components_Animator__WEBPACK_IMPORTED_MODULE_9__.AnimationClip,
      Animator: _components_Animator__WEBPACK_IMPORTED_MODULE_9__.Animator,
      Engine,
      GameObject: _objects_GameObject__WEBPACK_IMPORTED_MODULE_3__.GameObject,
      Material: _gl_material__WEBPACK_IMPORTED_MODULE_5__.Material,
      Renderer: _components_Renderer__WEBPACK_IMPORTED_MODULE_6__.Renderer,
      Transform: _objects_transform__WEBPACK_IMPORTED_MODULE_7__.Transform,
      Cube: _objects_geometries__WEBPACK_IMPORTED_MODULE_8__.Cube,
      Sphere: _objects_geometries__WEBPACK_IMPORTED_MODULE_8__.Sphere,
      TemplateGeometry: _objects_geometries__WEBPACK_IMPORTED_MODULE_8__.TemplateGeometry,
      Script: _components_Script__WEBPACK_IMPORTED_MODULE_1__.Script,
      GLUtilities: _gl_gl__WEBPACK_IMPORTED_MODULE_2__.GLUtilities
  };
  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SDK);
  
  
  /***/ }),
  
  /***/ "./public/engine/core/event-system/emitter.ts":
  /*!****************************************************!*\
    !*** ./public/engine/core/event-system/emitter.ts ***!
    \****************************************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
  /* harmony export */   EventEmitter: () => (/* binding */ EventEmitter)
  /* harmony export */ });
  class EventEmitter {
      constructor() {
          this.listeners = new Map();
      }
      on(eventType, callback) {
          var _a;
          if (!this.listeners.has(eventType)) {
              this.listeners.set(eventType, []);
          }
          (_a = this.listeners.get(eventType)) === null || _a === void 0 ? void 0 : _a.push(callback);
      }
      off(eventType, callback) {
          if (!this.listeners.has(eventType)) {
              throw new Error("Такого события не существует!");
          }
          const callbacks = this.listeners.get(eventType);
          if (callbacks) {
              this.listeners.set(eventType, callbacks.filter(cb => cb != callback));
          }
      }
      emit(event) {
          const callbacks = this.listeners.get(event.type);
          if (callbacks) {
              callbacks.forEach(callback => callback(event));
          }
      }
  }
  
  
  /***/ }),
  
  /***/ "./public/engine/core/event-system/keyboard-manager.ts":
  /*!*************************************************************!*\
    !*** ./public/engine/core/event-system/keyboard-manager.ts ***!
    \*************************************************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
  /* harmony export */   KeyboardManager: () => (/* binding */ KeyboardManager)
  /* harmony export */ });
  class KeyboardManager {
      constructor(emitter) {
          this.emitter = emitter;
          window.addEventListener('keydown', this.handleKeyDown.bind(this));
          window.addEventListener('keyup', this.handleKeyUp.bind(this));
      }
      handleKeyDown(event) {
          this.emitter.emit({
              type: "keydown",
              data: { key: event.key, keyCode: event.keyCode }
          });
      }
      handleKeyUp(event) {
          this.emitter.emit({
              type: "keyup",
              data: { key: event.key, keyCode: event.keyCode }
          });
      }
  }
  
  
  /***/ }),
  
  /***/ "./public/engine/core/event-system/mouse-manager.ts":
  /*!**********************************************************!*\
    !*** ./public/engine/core/event-system/mouse-manager.ts ***!
    \**********************************************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
  /* harmony export */   MouseManager: () => (/* binding */ MouseManager)
  /* harmony export */ });
  /* harmony import */ var _eng__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../eng */ "./public/engine/core/eng.ts");
  /* harmony import */ var gl_matrix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/vec4.js");
  /* harmony import */ var gl_matrix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/mat4.js");
  
  
  class MouseManager {
      constructor(emitter) {
          var _a, _b, _c;
          this.emitter = emitter;
          (_a = _eng__WEBPACK_IMPORTED_MODULE_0__.Engine.canvas) === null || _a === void 0 ? void 0 : _a.addEventListener('mousedown', this.handleMouseDown.bind(this));
          (_b = _eng__WEBPACK_IMPORTED_MODULE_0__.Engine.canvas) === null || _b === void 0 ? void 0 : _b.addEventListener('mouseup', this.handleMouseUp.bind(this));
          (_c = _eng__WEBPACK_IMPORTED_MODULE_0__.Engine.canvas) === null || _c === void 0 ? void 0 : _c.addEventListener('mousemove', this.handleMouseMove.bind(this));
      }
      screenToWorld(x, y, canvasWidth, canvasHeight) {
          // 1. Переводим координаты экрана в нормализованные координаты устройства (NDC)
          const ndcX = (x / canvasWidth) * 2 - 1; // От -1 до 1 по оси X
          const ndcY = 1 - (y / canvasHeight) * 2; // От -1 до 1 по оси Y (инвертируем Y)
          // 2. Создаем вектор в клиповом пространстве (clip space)
          const clipSpace = gl_matrix__WEBPACK_IMPORTED_MODULE_1__.fromValues(ndcX, ndcY, -1, 1); // Z = -1 (ближняя плоскость), W = 1
          // 3. Получаем обратную матрицу проекции и матрицу вида
          if (!_eng__WEBPACK_IMPORTED_MODULE_0__.Engine.viewMatrix)
              throw new Error("View matrix is not initialized!");
          const projectionMatrix = _eng__WEBPACK_IMPORTED_MODULE_0__.Engine.createPerspectiveMatrix(); // Матрица проекции
          const inverseProjectionMatrix = gl_matrix__WEBPACK_IMPORTED_MODULE_2__.create();
          const inverseViewMatrix = gl_matrix__WEBPACK_IMPORTED_MODULE_2__.create();
          gl_matrix__WEBPACK_IMPORTED_MODULE_2__.invert(inverseProjectionMatrix, projectionMatrix);
          gl_matrix__WEBPACK_IMPORTED_MODULE_2__.invert(inverseViewMatrix, _eng__WEBPACK_IMPORTED_MODULE_0__.Engine.viewMatrix);
          // 4. Преобразуем вектор из клипового пространства в мировое пространство
          const viewSpace = gl_matrix__WEBPACK_IMPORTED_MODULE_1__.create();
          const worldSpace = gl_matrix__WEBPACK_IMPORTED_MODULE_1__.create();
          // Применяем обратную матрицу проекции
          gl_matrix__WEBPACK_IMPORTED_MODULE_1__.transformMat4(viewSpace, clipSpace, inverseProjectionMatrix);
          // Применяем обратную матрицу вида
          gl_matrix__WEBPACK_IMPORTED_MODULE_1__.transformMat4(worldSpace, viewSpace, inverseViewMatrix);
          // 5. Нормализуем вектор (делим на W)
          const worldX = worldSpace[0] / worldSpace[3];
          const worldY = worldSpace[1] / worldSpace[3];
          const worldZ = worldSpace[2] / worldSpace[3];
          return { worldX, worldY, worldZ };
      }
      handleMouseDown(event) {
          if (!_eng__WEBPACK_IMPORTED_MODULE_0__.Engine.canvas)
              throw new Error('Before create manager you must init the game engine!');
          const { worldX, worldY } = this.screenToWorld(event.clientX, event.clientY, _eng__WEBPACK_IMPORTED_MODULE_0__.Engine.canvas.clientWidth, _eng__WEBPACK_IMPORTED_MODULE_0__.Engine.canvas.clientHeight);
          this.emitter.emit({
              type: "mousedown",
              data: {
                  x: worldX,
                  y: worldY,
                  button: event.button
              }
          });
      }
      handleMouseUp(event) {
          if (!_eng__WEBPACK_IMPORTED_MODULE_0__.Engine.canvas)
              throw new Error('Before create manager you must init the game engine!');
          const { worldX, worldY } = this.screenToWorld(event.clientX, event.clientY, _eng__WEBPACK_IMPORTED_MODULE_0__.Engine.canvas.clientWidth, _eng__WEBPACK_IMPORTED_MODULE_0__.Engine.canvas.clientHeight);
          this.emitter.emit({
              type: "mousedown",
              data: {
                  x: worldX,
                  y: worldY,
                  button: event.button
              }
          });
      }
      handleMouseMove(event) {
          if (!_eng__WEBPACK_IMPORTED_MODULE_0__.Engine.canvas)
              throw new Error('Before create manager you must init the game engine!');
          const { worldX, worldY } = this.screenToWorld(event.clientX, event.clientY, _eng__WEBPACK_IMPORTED_MODULE_0__.Engine.canvas.clientWidth, _eng__WEBPACK_IMPORTED_MODULE_0__.Engine.canvas.clientHeight);
          this.emitter.emit({
              type: 'mousemove',
              data: {
                  x: worldX,
                  y: worldY
              }
          });
      }
  }
  
  
  /***/ }),
  
  /***/ "./public/engine/core/gl/gl.ts":
  /*!*************************************!*\
    !*** ./public/engine/core/gl/gl.ts ***!
    \*************************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
  /* harmony export */   GLUtilities: () => (/* binding */ GLUtilities),
  /* harmony export */   gl: () => (/* binding */ gl)
  /* harmony export */ });
  /* harmony import */ var gl_matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/vec4.js");
  var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
      function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
      return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
          function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
          function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
  };
  
  let gl;
  class GLUtilities {
      static init(elementId) {
          let canvas;
          if (elementId) {
              const element = document.getElementById(elementId);
              if (element === undefined) {
                  throw new Error(`Cannot find a element with id=[${elementId}]`);
              }
              canvas = document.createElement('canvas');
              canvas.style.width = "100%";
              canvas.style.height = "100%";
              element.appendChild(canvas);
          }
          else {
              canvas = document.createElement('canvas');
              document.body.appendChild(canvas);
          }
          gl = canvas.getContext('webgl');
          if (gl === null) {
              throw new Error('Unable to init webgl');
          }
          return canvas;
      }
      static resizeCanvasToDisplaySize(canvas) {
          const displayWidth = window.innerWidth;
          const displayHeight = window.innerHeight;
          if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
              canvas.width = displayWidth;
              canvas.height = displayHeight;
              return true;
          }
          return false;
      }
      static loadMTL(url) {
          return __awaiter(this, void 0, void 0, function* () {
              try {
                  const response = yield fetch(url);
                  const data = yield response.text();
                  const materials = []; // Массив для хранения материалов
                  let currentMaterial = null; // Текущий материал
                  const lines = data.split('\n');
                  for (const line of lines) {
                      // Пропускаем комментарии и пустые строки
                      if (line.startsWith('#') || line.trim() === '')
                          continue;
                      const parts = line.trim().split(/\s+/);
                      const keyword = parts[0];
                      switch (keyword) {
                          case 'newmtl':
                              // Если текущий материал существует, добавляем его в массив
                              if (currentMaterial) {
                                  materials.push(currentMaterial);
                              }
                              // Создаем новый материал
                              currentMaterial = {
                                  name: parts[1],
                                  Ns: 0,
                                  Ka: gl_matrix__WEBPACK_IMPORTED_MODULE_0__.fromValues(0, 0, 0, 1),
                                  Kd: gl_matrix__WEBPACK_IMPORTED_MODULE_0__.fromValues(0, 0, 0, 1),
                                  Ks: gl_matrix__WEBPACK_IMPORTED_MODULE_0__.fromValues(0, 0, 0, 1),
                                  d: 1,
                                  illum: 0
                              };
                              break;
                          case 'Ns':
                          case 'd':
                              if (currentMaterial && !isNaN(parseFloat(parts[1]))) {
                                  currentMaterial[keyword] = parseFloat(parts[1]);
                              }
                              break;
                          case 'Ka':
                          case 'Kd':
                          case 'Ks':
                              if (currentMaterial && parts.length >= 4) {
                                  currentMaterial[keyword] = gl_matrix__WEBPACK_IMPORTED_MODULE_0__.fromValues(parseFloat(parts[1]), parseFloat(parts[2]), parseFloat(parts[3]), 1);
                              }
                              break;
                          case 'illum':
                              if (currentMaterial && !isNaN(parseInt(parts[1]))) {
                                  currentMaterial.illum = parseInt(parts[1]);
                              }
                              break;
                          case 'map_Kd':
                          case 'map_Bump':
                          case 'map_Ks':
                              if (currentMaterial) {
                                  const baseUrl = url.substring(0, url.lastIndexOf('/') + 1);
                                  currentMaterial[keyword] = baseUrl + parts[1];
                              }
                              break;
                          default:
                              console.warn(`Неизвестный параметр в MTL-файле: ${keyword}`);
                              break;
                      }
                  }
                  // Добавляем последний материал в массив, если он существует
                  if (currentMaterial) {
                      materials.push(currentMaterial);
                  }
                  return materials;
              }
              catch (error) {
                  console.error('Ошибка загрузки MTL-файла:', error);
                  throw error;
              }
          });
      }
  }
  
  
  /***/ }),
  
  /***/ "./public/engine/core/gl/light.ts":
  /*!****************************************!*\
    !*** ./public/engine/core/gl/light.ts ***!
    \****************************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
  /* harmony export */   Light: () => (/* binding */ Light)
  /* harmony export */ });
  /* harmony import */ var gl_matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/vec3.js");
  /* harmony import */ var gl_matrix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/vec4.js");
  
  class Light {
      constructor() {
          this.position = gl_matrix__WEBPACK_IMPORTED_MODULE_0__.fromValues(0, 0, 0);
          this.direction = gl_matrix__WEBPACK_IMPORTED_MODULE_0__.fromValues(-1.0, -1.0, -1.0);
          this.ambient = gl_matrix__WEBPACK_IMPORTED_MODULE_1__.fromValues(0.4, 0.4, 0.4, 1.0);
          this.diffuse = gl_matrix__WEBPACK_IMPORTED_MODULE_1__.fromValues(1, 1, 1, 1.0);
          this.specular = gl_matrix__WEBPACK_IMPORTED_MODULE_1__.fromValues(1.0, 1.0, 1.0, 1.0);
          this.shininess = 32.0;
      }
      setPosition(x, y, z) {
          this.position = gl_matrix__WEBPACK_IMPORTED_MODULE_0__.fromValues(x, y, z);
      }
      setDirection(x, y, z) {
          this.direction = gl_matrix__WEBPACK_IMPORTED_MODULE_0__.fromValues(x, y, z);
      }
      setAmbient(r, g, b, a) {
          this.ambient = gl_matrix__WEBPACK_IMPORTED_MODULE_1__.fromValues(r, g, b, a);
      }
      setDiffuse(r, g, b, a) {
          this.diffuse = gl_matrix__WEBPACK_IMPORTED_MODULE_1__.fromValues(r, g, b, a);
      }
      setSpecular(r, g, b, a) {
          this.specular = gl_matrix__WEBPACK_IMPORTED_MODULE_1__.fromValues(r, g, b, a);
      }
      setShininess(shininess) {
          this.shininess = shininess;
      }
      toJson() {
          return new Promise(resolve => {
              resolve(JSON.stringify({
                  position: Array.from(this.position),
                  direction: Array.from(this.direction),
                  ambient: Array.from(this.ambient),
                  diffuse: Array.from(this.diffuse),
                  specular: Array.from(this.specular),
                  shininess: this.shininess
              }));
          });
      }
      static fromJson(json) {
          return new Promise(resolve => {
              const light = new Light();
              const obj = JSON.parse(json);
              const pos = obj.position;
              const dir = obj.direction;
              const amb = obj.ambient;
              const diff = obj.diffuse;
              const spec = obj.specular;
              light.position = gl_matrix__WEBPACK_IMPORTED_MODULE_0__.fromValues(...pos);
              light.direction = gl_matrix__WEBPACK_IMPORTED_MODULE_0__.fromValues(...dir);
              light.ambient = gl_matrix__WEBPACK_IMPORTED_MODULE_1__.fromValues(...amb);
              light.diffuse = gl_matrix__WEBPACK_IMPORTED_MODULE_1__.fromValues(...diff);
              light.specular = gl_matrix__WEBPACK_IMPORTED_MODULE_1__.fromValues(...spec);
              light.shininess = obj.shininess;
              resolve(light);
          });
      }
  }
  
  
  /***/ }),
  
  /***/ "./public/engine/core/gl/material.ts":
  /*!*******************************************!*\
    !*** ./public/engine/core/gl/material.ts ***!
    \*******************************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
  /* harmony export */   Material: () => (/* binding */ Material)
  /* harmony export */ });
  /* harmony import */ var _gl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gl */ "./public/engine/core/gl/gl.ts");
  /* harmony import */ var gl_matrix__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/vec4.js");
  /* harmony import */ var _shader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shader */ "./public/engine/core/gl/shader.ts");
  /* harmony import */ var _texture__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./texture */ "./public/engine/core/gl/texture.ts");
  var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
      function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
      return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
          function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
          function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
  };
  
  
  
  
  class Material {
      constructor(light, materials) {
          this._textures = [];
          this._materials = [];
          this._currentMaterialIndex = 0;
          this._color = gl_matrix__WEBPACK_IMPORTED_MODULE_3__.fromValues(1.0, 1.0, 1.0, 1.0);
          this._light = light;
          this._materials = materials;
          this._shader = this.loadShader();
          this._edgeShader = this.loadEdgeShader();
          this._materials.forEach((material, index) => {
              if (material.map_Kd) {
                  const texture = new _texture__WEBPACK_IMPORTED_MODULE_2__.Texture();
                  texture.loadTexture(_gl__WEBPACK_IMPORTED_MODULE_0__.gl, material.map_Kd);
                  this._textures[index] = texture;
              }
          });
      }
      setCurrentMaterial(index) {
          if (index >= 0 && index < this._materials.length) {
              this._currentMaterialIndex = index;
          }
          else {
              console.warn(`Индекс материала ${index} вне диапазона.`);
          }
      }
      getCurrentMaterial() {
          return this._materials[this._currentMaterialIndex];
      }
      getCurrentMaterialIndex() {
          return this._currentMaterialIndex;
      }
      loadTexture(url, index) {
          return __awaiter(this, void 0, void 0, function* () {
              if (index >= 0 && index < this._materials.length) {
                  const texture = new _texture__WEBPACK_IMPORTED_MODULE_2__.Texture();
                  yield texture.loadTexture(_gl__WEBPACK_IMPORTED_MODULE_0__.gl, url);
                  this._textures[index] = texture;
              }
              else {
                  console.warn(`Индекс материала ${index} вне диапазона.`);
              }
          });
      }
      loadEdgeShader() {
          const vertex = `
        attribute vec3 pos;
        uniform mat4 matrix;
        void main(){
          gl_Position = matrix * vec4(pos, 1.0);
        }
      `;
          const fragment = `
        precision mediump float;
        void main(void) {
          gl_FragColor = vec4(0.0, 1.0, 0.0, 1.0); // зеленый цвет для ребер
        }
      `;
          return new _shader__WEBPACK_IMPORTED_MODULE_1__.Shader('edge', vertex, fragment);
      }
      loadShader() {
          const vertex = `
        attribute vec3 pos;
        attribute vec2 texCoord;
        uniform mat4 matrix;
        varying vec3 vPos;
        varying vec2 vTexCoord;
        void main(){
          gl_Position = matrix * vec4(pos, 1.0);
          vPos = vec3(matrix * vec4(pos, 1.0));
          vTexCoord = texCoord;
        }
      `;
          const fragment = `
        precision mediump float;
  
        uniform vec4 Ka;
        uniform vec4 Kd;
        uniform vec4 Ks;
        uniform vec3 lightDirection;
        uniform vec4 ambientLight;
        uniform vec4 diffuseLight;
        uniform sampler2D uSampler;
        uniform vec4 uColor;
        uniform bool hasTexture;
        varying vec3 vPos;
        varying vec2 vTexCoord;
  
        void main(void) {
          vec3 normal = normalize(vPos);
          vec3 lightDir = normalize(lightDirection);
          float diff = max(dot(normal, lightDir), 0.0);
  
          vec4 ambient = ambientLight * Ka;
  
          vec4 diffuse = diffuseLight * Kd * diff;
  
          // Используем Ks для зеркального отражения
          vec4 specular = vec4(1.0) * Ks * pow(max(dot(reflect(-lightDir, normal), vec3(0.0, 0.0, 1.0)), 0.0), 32.0);
  
          vec4 finalColor = ambient + diffuse + specular;
  
          vec4 texColor = texture2D(uSampler, vTexCoord);
          if (hasTexture) {
            gl_FragColor = finalColor * texColor * uColor;
          } else {
            gl_FragColor = finalColor * uColor;
          }
        }
      `;
          return new _shader__WEBPACK_IMPORTED_MODULE_1__.Shader('basic', vertex, fragment);
      }
      setColor(red, green, blue, alpha) {
          this._color = gl_matrix__WEBPACK_IMPORTED_MODULE_3__.fromValues(red, green, blue, alpha);
      }
      getAttributePosition(attr, shaderName) {
          return (shaderName !== 'edge') ? this._shader.getAttributeLocation(attr) : this._edgeShader.getAttributeLocation(attr);
      }
      getUniformPosition(uniform, shaderName) {
          return (shaderName !== 'edge') ? this._shader.getUniformLocation(uniform) : this._edgeShader.getUniformLocation(uniform);
      }
      loadFromMLT(url) {
          return __awaiter(this, void 0, void 0, function* () {
              const materials = yield _gl__WEBPACK_IMPORTED_MODULE_0__.GLUtilities.loadMTL(url);
              this._materials = materials;
              this._textures = []; // Сбрасываем текстуры
              materials.forEach((material, index) => {
                  if (material.map_Kd) {
                      const texture = new _texture__WEBPACK_IMPORTED_MODULE_2__.Texture();
                      texture.loadTexture(_gl__WEBPACK_IMPORTED_MODULE_0__.gl, material.map_Kd);
                      this._textures[index] = texture;
                  }
              });
          });
      }
      basicUse() {
          this._shader.use();
          const currentMaterial = this.getCurrentMaterial();
          let loc = this._shader.getUniformLocation('Ka');
          _gl__WEBPACK_IMPORTED_MODULE_0__.gl.uniform4fv(loc, currentMaterial.Ka);
          loc = this._shader.getUniformLocation('Kd');
          _gl__WEBPACK_IMPORTED_MODULE_0__.gl.uniform4fv(loc, currentMaterial.Kd);
          loc = this._shader.getUniformLocation('Ks');
          _gl__WEBPACK_IMPORTED_MODULE_0__.gl.uniform4fv(loc, currentMaterial.Ks);
          loc = this._shader.getUniformLocation('lightDirection');
          _gl__WEBPACK_IMPORTED_MODULE_0__.gl.uniform3fv(loc, this._light.direction);
          loc = this._shader.getUniformLocation('ambientLight');
          _gl__WEBPACK_IMPORTED_MODULE_0__.gl.uniform4fv(loc, this._light.ambient);
          loc = this._shader.getUniformLocation('diffuseLight');
          _gl__WEBPACK_IMPORTED_MODULE_0__.gl.uniform4fv(loc, this._light.diffuse);
          loc = this._shader.getUniformLocation('uColor');
          _gl__WEBPACK_IMPORTED_MODULE_0__.gl.uniform4fv(loc, this._color);
          const texture = this._textures[this._currentMaterialIndex];
          loc = this._shader.getUniformLocation('hasTexture');
          _gl__WEBPACK_IMPORTED_MODULE_0__.gl.uniform1i(loc, texture && texture.isLoaded() ? 1 : 0);
          if (texture && texture.isLoaded()) {
              texture.bind(_gl__WEBPACK_IMPORTED_MODULE_0__.gl, 0);
              loc = this._shader.getUniformLocation('uSampler');
              _gl__WEBPACK_IMPORTED_MODULE_0__.gl.uniform1i(loc, 0);
          }
      }
      edgeUse() {
          this._edgeShader.use();
      }
      toJson() {
          return __awaiter(this, void 0, void 0, function* () {
              try {
                  // Ожидаем завершения всех асинхронных операций для текстур
                  const texturesJson = yield Promise.all(this._textures.map((texture) => __awaiter(this, void 0, void 0, function* () { return yield texture.toJson(); })));
                  // Ожидаем завершения всех асинхронных операций для материалов
                  const materialsJson = yield Promise.all(this._materials.map((material) => __awaiter(this, void 0, void 0, function* () { return yield this.stringifyProperties(material); })));
                  // Сериализуем данные после завершения всех операций
                  return JSON.stringify({
                      shader: yield this._shader.toJson(),
                      edgeShader: yield this._edgeShader.toJson(),
                      color: Array.from(this._color),
                      textures: texturesJson,
                      materials: materialsJson,
                      currentIndex: this._currentMaterialIndex
                  });
              }
              catch (error) {
                  console.error("Error during material serialization:", error);
                  throw error;
              }
          });
      }
      stringifyProperties(property) {
          return new Promise(resolve => {
              resolve(JSON.stringify({
                  name: property.name,
                  Ns: property.Ns,
                  Ka: property.Ka,
                  Kd: property.Kd,
                  Ks: property.Ks,
                  d: property.d,
                  illum: property.illum,
                  map_Kd: property.map_Kd,
                  map_Bump: property.map_Bump,
                  map_Ks: property.map_Ks
              }));
          });
      }
      ;
  }
  
  
  /***/ }),
  
  /***/ "./public/engine/core/gl/shader.ts":
  /*!*****************************************!*\
    !*** ./public/engine/core/gl/shader.ts ***!
    \*****************************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
  /* harmony export */   Shader: () => (/* binding */ Shader)
  /* harmony export */ });
  /* harmony import */ var _gl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gl */ "./public/engine/core/gl/gl.ts");
  
  class Shader {
      constructor(name, vertexSrc, fragmentSrc) {
          this._attributes = {};
          this._uniforms = {};
          this._name = name;
          this._vertexSrc = vertexSrc;
          this._fragmentSrc = fragmentSrc;
          let vertex = this.loadShader(vertexSrc, _gl__WEBPACK_IMPORTED_MODULE_0__.gl.VERTEX_SHADER);
          let fragment = this.loadShader(fragmentSrc, _gl__WEBPACK_IMPORTED_MODULE_0__.gl.FRAGMENT_SHADER);
          this._program = this.createProgram(vertex, fragment);
          this.detectAttributes();
          this.detectUniforms();
      }
      get name() {
          return this._name;
      }
      use() {
          _gl__WEBPACK_IMPORTED_MODULE_0__.gl.useProgram(this._program);
      }
      getAttributeLocation(name) {
          if (this._attributes[name] === undefined)
              throw new Error(`Shader [${this._name}] has no attribute [${name}]`);
          return this._attributes[`${name}`];
      }
      getUniformLocation(name) {
          if (this._uniforms[name] === undefined)
              throw new Error(`Shader [${this._name}] has no uniform [${name}]`);
          return this._uniforms[`${name}`];
      }
      toJson() {
          return JSON.stringify({
              name: this._name,
              vertexSrc: this._vertexSrc,
              fragmentSrc: this._fragmentSrc,
              attributes: Object.keys(this._attributes),
              uniforms: Object.keys(this._uniforms)
          });
      }
      static fromJson(json) {
          const data = JSON.parse(json);
          const shader = new Shader(data.name, data.vertexSrc, data.fragmentSrc);
          data.attributes.forEach((attr) => {
              if (!shader._attributes[attr]) {
                  throw new Error(`Attribute [${attr}] not found in restored shader [${data.name}]`);
              }
          });
          data.uniforms.forEach((uniform) => {
              if (!shader._uniforms[uniform]) {
                  throw new Error(`Uniform [${uniform}] not found in restored shader [${data.name}]`);
              }
          });
          return shader;
      }
      loadShader(source, shaderType) {
          let shader = _gl__WEBPACK_IMPORTED_MODULE_0__.gl.createShader(shaderType);
          _gl__WEBPACK_IMPORTED_MODULE_0__.gl.shaderSource(shader, source);
          _gl__WEBPACK_IMPORTED_MODULE_0__.gl.compileShader(shader);
          let error = _gl__WEBPACK_IMPORTED_MODULE_0__.gl.getShaderInfoLog(shader);
          if (error !== "") {
              throw new Error(`Error compiling shader [${this._name}]: ` + error);
          }
          return shader;
      }
      createProgram(vertex, fragment) {
          let program = _gl__WEBPACK_IMPORTED_MODULE_0__.gl.createProgram();
          _gl__WEBPACK_IMPORTED_MODULE_0__.gl.attachShader(program, vertex);
          _gl__WEBPACK_IMPORTED_MODULE_0__.gl.attachShader(program, fragment);
          _gl__WEBPACK_IMPORTED_MODULE_0__.gl.linkProgram(program);
          let error = _gl__WEBPACK_IMPORTED_MODULE_0__.gl.getProgramInfoLog(program);
          if (error !== "") {
              throw new Error(`Error creating program for shader [${this._name}]: ` + error);
          }
          return program;
      }
      detectAttributes() {
          let count = _gl__WEBPACK_IMPORTED_MODULE_0__.gl.getProgramParameter(this._program, _gl__WEBPACK_IMPORTED_MODULE_0__.gl.ACTIVE_ATTRIBUTES);
          for (let i = 0; i < count; i++) {
              let attrInfo = _gl__WEBPACK_IMPORTED_MODULE_0__.gl.getActiveAttrib(this._program, i);
              if (!attrInfo)
                  break;
              this._attributes[attrInfo.name] = _gl__WEBPACK_IMPORTED_MODULE_0__.gl.getAttribLocation(this._program, attrInfo.name);
          }
      }
      detectUniforms() {
          let count = _gl__WEBPACK_IMPORTED_MODULE_0__.gl.getProgramParameter(this._program, _gl__WEBPACK_IMPORTED_MODULE_0__.gl.ACTIVE_UNIFORMS);
          for (let i = 0; i < count; i++) {
              let info = _gl__WEBPACK_IMPORTED_MODULE_0__.gl.getActiveUniform(this._program, i);
              if (!info)
                  break;
              this._uniforms[info.name] = _gl__WEBPACK_IMPORTED_MODULE_0__.gl.getUniformLocation(this._program, info.name);
          }
      }
  }
  
  
  /***/ }),
  
  /***/ "./public/engine/core/gl/texture.ts":
  /*!******************************************!*\
    !*** ./public/engine/core/gl/texture.ts ***!
    \******************************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
  /* harmony export */   Texture: () => (/* binding */ Texture)
  /* harmony export */ });
  /* harmony import */ var _gl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gl */ "./public/engine/core/gl/gl.ts");
  var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
      function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
      return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
          function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
          function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
  };
  
  class Texture {
      constructor() {
          this._width = 0;
          this._height = 0;
          this._isLoaded = false;
          this._texture = null;
      }
      loadTexture(gl, url) {
          return new Promise((resolve, reject) => {
              const texture = gl.createTexture();
              if (!texture) {
                  reject(new Error("Failed to create WebGL texture"));
                  return;
              }
              gl.bindTexture(gl.TEXTURE_2D, texture);
              const level = 0;
              const internalFormat = gl.RGBA;
              const width = 1;
              const height = 1;
              const border = 0;
              const srcFormat = gl.RGBA;
              const srcType = gl.UNSIGNED_BYTE;
              const pixel = new Uint8Array([0, 0, 255, 255]); // Непрозрачный синий пиксель
              gl.texImage2D(gl.TEXTURE_2D, level, internalFormat, width, height, border, srcFormat, srcType, pixel);
              const image = new Image();
              image.onload = () => {
                  gl.bindTexture(gl.TEXTURE_2D, texture);
                  gl.texImage2D(gl.TEXTURE_2D, level, internalFormat, srcFormat, srcType, image);
                  if (this.isPowerOf2(image.width) && this.isPowerOf2(image.height)) {
                      gl.generateMipmap(gl.TEXTURE_2D);
                  }
                  else {
                      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
                      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
                      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
                  }
                  this._texture = texture;
                  this._width = image.width;
                  this._height = image.height;
                  resolve(); // Указываем, что текстура загружена
              };
              image.onerror = () => {
                  reject(new Error(`Failed to load image: ${url}`));
              };
              image.crossOrigin = 'anonymous';
              image.src = url;
          });
      }
      bind(gl, unit) {
          if (this._texture) {
              gl.activeTexture(gl.TEXTURE0 + unit);
              gl.bindTexture(gl.TEXTURE_2D, this._texture);
          }
          else {
              console.error(`Texture not loaded`);
          }
      }
      isLoaded() {
          return this._texture !== null;
      }
      isPowerOf2(value) {
          return (value & (value - 1)) == 0;
      }
      toJson() {
          return __awaiter(this, void 0, void 0, function* () {
              if (!this.isLoaded()) {
                  throw new Error("Texture is not loaded or dimensions are unknown");
              }
              const framebuffer = _gl__WEBPACK_IMPORTED_MODULE_0__.gl.createFramebuffer();
              _gl__WEBPACK_IMPORTED_MODULE_0__.gl.bindFramebuffer(_gl__WEBPACK_IMPORTED_MODULE_0__.gl.FRAMEBUFFER, framebuffer);
              _gl__WEBPACK_IMPORTED_MODULE_0__.gl.framebufferTexture2D(_gl__WEBPACK_IMPORTED_MODULE_0__.gl.FRAMEBUFFER, _gl__WEBPACK_IMPORTED_MODULE_0__.gl.COLOR_ATTACHMENT0, _gl__WEBPACK_IMPORTED_MODULE_0__.gl.TEXTURE_2D, this._texture, 0);
              const pixels = new Uint8Array(this._width * this._height * 4);
              _gl__WEBPACK_IMPORTED_MODULE_0__.gl.readPixels(0, 0, this._width, this._height, _gl__WEBPACK_IMPORTED_MODULE_0__.gl.RGBA, _gl__WEBPACK_IMPORTED_MODULE_0__.gl.UNSIGNED_BYTE, pixels);
              _gl__WEBPACK_IMPORTED_MODULE_0__.gl.bindFramebuffer(_gl__WEBPACK_IMPORTED_MODULE_0__.gl.FRAMEBUFFER, null);
              _gl__WEBPACK_IMPORTED_MODULE_0__.gl.deleteFramebuffer(framebuffer);
              // Преобразуем пиксели в Base64
              const canvas = document.createElement("canvas");
              canvas.width = this._width;
              canvas.height = this._height;
              const ctx = canvas.getContext("2d");
              if (!ctx) {
                  throw new Error("Failed to create 2D context");
              }
              const imageData = ctx.createImageData(this._width, this._height);
              imageData.data.set(pixels);
              ctx.putImageData(imageData, 0, 0);
              const base64 = canvas.toDataURL("image/png");
              return JSON.stringify({
                  base64: base64,
                  width: this._width,
                  height: this._height
              });
          });
      }
      /**
       * Загрузка текстуры из Base64
       */
      static fromJson(json) {
          const data = JSON.parse(json);
          const texture = new Texture();
          const image = new Image();
          image.src = data.base64;
          return new Promise((resolve, reject) => {
              image.onload = () => {
                  const tex = _gl__WEBPACK_IMPORTED_MODULE_0__.gl.createTexture();
                  _gl__WEBPACK_IMPORTED_MODULE_0__.gl.bindTexture(_gl__WEBPACK_IMPORTED_MODULE_0__.gl.TEXTURE_2D, tex);
                  _gl__WEBPACK_IMPORTED_MODULE_0__.gl.texImage2D(_gl__WEBPACK_IMPORTED_MODULE_0__.gl.TEXTURE_2D, 0, _gl__WEBPACK_IMPORTED_MODULE_0__.gl.RGBA, _gl__WEBPACK_IMPORTED_MODULE_0__.gl.RGBA, _gl__WEBPACK_IMPORTED_MODULE_0__.gl.UNSIGNED_BYTE, image);
                  _gl__WEBPACK_IMPORTED_MODULE_0__.gl.texParameteri(_gl__WEBPACK_IMPORTED_MODULE_0__.gl.TEXTURE_2D, _gl__WEBPACK_IMPORTED_MODULE_0__.gl.TEXTURE_WRAP_S, _gl__WEBPACK_IMPORTED_MODULE_0__.gl.CLAMP_TO_EDGE);
                  _gl__WEBPACK_IMPORTED_MODULE_0__.gl.texParameteri(_gl__WEBPACK_IMPORTED_MODULE_0__.gl.TEXTURE_2D, _gl__WEBPACK_IMPORTED_MODULE_0__.gl.TEXTURE_WRAP_T, _gl__WEBPACK_IMPORTED_MODULE_0__.gl.CLAMP_TO_EDGE);
                  _gl__WEBPACK_IMPORTED_MODULE_0__.gl.texParameteri(_gl__WEBPACK_IMPORTED_MODULE_0__.gl.TEXTURE_2D, _gl__WEBPACK_IMPORTED_MODULE_0__.gl.TEXTURE_MIN_FILTER, _gl__WEBPACK_IMPORTED_MODULE_0__.gl.LINEAR);
                  texture._texture = tex;
                  texture._width = data.width;
                  texture._height = data.height;
                  resolve(texture);
              };
              image.onerror = () => {
                  reject(new Error("Failed to load texture from Base64"));
              };
          });
      }
  }
  
  
  /***/ }),
  
  /***/ "./public/engine/core/objects/GameObject.ts":
  /*!**************************************************!*\
    !*** ./public/engine/core/objects/GameObject.ts ***!
    \**************************************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
  /* harmony export */   GameObject: () => (/* binding */ GameObject)
  /* harmony export */ });
  /* harmony import */ var _transform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transform */ "./public/engine/core/objects/transform.ts");
  var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
      function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
      return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
          function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
          function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
  };
  
  class GameObject {
      constructor(tag) {
          this.components = [];
          this.transform = new _transform__WEBPACK_IMPORTED_MODULE_0__.Transform();
          this.tag = tag;
      }
      AddComponent(component) {
          component.owner = this;
          this.components.push(component);
      }
      GetComponent(name) {
          let component = this.components.find(com => com.name === name);
          if (component) {
              return component;
          }
      }
      RemoveComponent(name, subname) {
          let components = this.components.filter(com => com.name === name);
          if (components.length == 1) {
              let index = this.components.findIndex(comp => comp === components[0]);
              this.components[index].BeforeRemove();
              this.components.splice(index, 1);
          }
          else if (components.length > 1 && subname) {
              let component = this.components.findIndex(com => com.subname == subname);
              this.components[component].BeforeRemove();
              this.components.splice(component, 1);
          }
          else {
              console.error(`Component with name [${name}] is undefined`);
          }
      }
      static fromJson(json) {
          return __awaiter(this, void 0, void 0, function* () {
              const data = JSON.parse(json);
              const components = Promise.all(data.components.map((component) => __awaiter(this, void 0, void 0, function* () {
                  let comp = JSON.parse(component);
                  switch (comp.name) {
                      case 'renderer':
                          return;
                  }
              })));
              const gameObject = new GameObject(data.tag);
              gameObject.transform = yield _transform__WEBPACK_IMPORTED_MODULE_0__.Transform.fromJson(data.transform);
              return gameObject;
          });
      }
      toJson() {
          return __awaiter(this, void 0, void 0, function* () {
              const componentsJson = yield Promise.all(this.components.map((component) => __awaiter(this, void 0, void 0, function* () { return yield component.toJson(); })));
              return JSON.stringify({
                  tag: this.tag,
                  transform: yield this.transform.toJson(),
                  components: componentsJson
              });
          });
      }
  }
  
  
  /***/ }),
  
  /***/ "./public/engine/core/objects/geometries.ts":
  /*!**************************************************!*\
    !*** ./public/engine/core/objects/geometries.ts ***!
    \**************************************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
  /* harmony export */   Cube: () => (/* binding */ Cube),
  /* harmony export */   Sphere: () => (/* binding */ Sphere),
  /* harmony export */   TemplateGeometry: () => (/* binding */ TemplateGeometry)
  /* harmony export */ });
  var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
      function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
      return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
          function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
          function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
  };
  class TemplateGeometry {
      constructor(vertices, normals, texCoords, indices, edges) {
          this.vertices = vertices;
          this.normals = normals;
          this.texCoords = texCoords;
          this.indices = indices;
          this.edges = edges;
      }
      static loadFromOBJ(url) {
          return __awaiter(this, void 0, void 0, function* () {
              try {
                  const response = yield fetch(url);
                  const data = yield response.text();
                  const vertices = [];
                  const normals = [];
                  const texCoords = [];
                  const indices = [];
                  const edges = [];
                  const lines = data.split('\n');
                  lines.forEach(line => {
                      const parts = line.trim().split(/\s+/);
                      if (parts[0] === 'v') {
                          vertices.push(parseFloat(parts[1]), parseFloat(parts[2]), parseFloat(parts[3]));
                      }
                      else if (parts[0] === 'vn') {
                          normals.push(parseFloat(parts[1]), parseFloat(parts[2]), parseFloat(parts[3]));
                      }
                      else if (parts[0] === 'vt') {
                          texCoords.push(parseFloat(parts[1]), 1 - parseFloat(parts[2]));
                      }
                      else if (parts[0] === 'f') {
                          const v1 = parts[1].split('/').map(Number);
                          const v2 = parts[2].split('/').map(Number);
                          const v3 = parts[3].split('/').map(Number);
                          const v4 = parts[4] ? parts[4].split('/').map(Number) : null;
                          indices.push(v1[0] - 1, v2[0] - 1, v3[0] - 1);
                          if (v4) {
                              indices.push(v4[0] - 1);
                          }
                          // Добавим ребра
                          edges.push(v1[0] - 1, v2[0] - 1, v2[0] - 1, v3[0] - 1, v3[0] - 1, v1[0] - 1);
                          if (v4) {
                              edges.push(v3[0] - 1, v4[0] - 1, v4[0] - 1, v1[0] - 1);
                          }
                      }
                  });
                  return new TemplateGeometry(vertices, normals, texCoords, indices, edges);
              }
              catch (error) {
                  console.error('Ошибка загрузки модели:', error);
                  throw error;
              }
          });
      }
  }
  class Cube extends TemplateGeometry {
      constructor() {
          const vertices = [
              // Передняя грань
              -1, -1, -1,
              1, -1, -1,
              1, 1, -1,
              -1, 1, -1,
              // Задняя грань
              -1, -1, 1,
              1, -1, 1,
              1, 1, 1,
              -1, 1, 1,
          ];
          const normals = [
              // Нормали для каждой грани
              0, 0, -1, // передняя грань
              0, 0, -1,
              0, 0, -1,
              0, 0, -1,
              0, 0, 1, // задняя грань
              0, 0, 1,
              0, 0, 1,
              0, 0, 1,
              // Нормали для остальных граней
              0, -1, 0, // нижняя грань
              0, -1, 0,
              0, -1, 0,
              0, -1, 0,
              1, 0, 0, // правая грань
              1, 0, 0,
              1, 0, 0,
              1, 0, 0,
              -1, 0, 0, // левая грань
              -1, 0, 0,
              -1, 0, 0,
              -1, 0, 0,
              0, 1, 0, // верхняя грань
              0, 1, 0,
              0, 1, 0,
              0, 1, 0,
          ];
          const texCoords = [
              // Передняя грань
              2, 1, // левый верхний
              -1, -1, // левый нижний
              1, -1, // правый нижний
              1, 1, // правый верхний
              // Задняя грань
              1, 1, // правый верхний
              1, -1, // правый нижний
              -1, -1, // левый нижний
              -1, 1, // левый верхний
              // Верхняя грань
              -1, 1, // левый верхний
              -1, -1, // левый нижний
              1, -1, // правый нижний
              1, 1, // правый верхний
              // Нижняя грань
              -1, -1, // левый нижний
              -1, 1, // левый верхний
              1, 1, // правый верхний
              1, -1, // правый нижний
              // Левая грань
              -1, 1, // левый верхний
              -1, -1, // левый нижний
              1, -1, // правый нижний
              1, 1, // правый верхний
              // Правая грань
              1, 1, // правый верхний
              1, -1, // правый нижний
              -1, -1, // левый нижний
              -1, 1, // левый верхний
          ];
          const indices = [
              // Индексы
              0, 1, 2, 0, 2, 3, // передняя грань
              4, 5, 6, 4, 6, 7, // задняя грань
              0, 1, 5, 0, 5, 4, // нижняя грань
              2, 3, 7, 2, 7, 6, // верхняя грань
              1, 2, 6, 1, 6, 5, // правая грань
              0, 3, 7, 0, 7, 4 // левая грань
          ];
          const edges = [
              // Ребра
              0, 1, 1, 2, 2, 3, 3, 0, // передняя грань
              4, 5, 5, 6, 6, 7, 7, 4, // задняя грань
              0, 4, 1, 5, 2, 6, 3, 7 // соединяющие ребра
          ];
          super(vertices, normals, indices, edges, texCoords);
      }
  }
  function createSphere(radius, widthSegments, heightSegments) {
      const _vertices = [];
      const _normals = [];
      const _texCoords = [];
      const _indices = [];
      const _edgeIndices = [];
      for (let i = 0; i <= heightSegments; i++) {
          const v = i / heightSegments;
          const theta = v * Math.PI;
          for (let j = 0; j <= widthSegments; j++) {
              const u = j / widthSegments;
              const phi = u * 2 * Math.PI;
              const x = radius * Math.sin(theta) * Math.cos(phi);
              const y = radius * Math.cos(theta);
              const z = radius * Math.sin(theta) * Math.sin(phi);
              _vertices.push(x, y, z);
              _normals.push(x, y, z);
              _texCoords.push(u, 1 - v); // Текстурные координаты
          }
      }
      for (let i = 0; i < heightSegments; i++) {
          for (let j = 0; j < widthSegments; j++) {
              const first = (i * (widthSegments + 1)) + j;
              const second = first + widthSegments + 1;
              _indices.push(first, second, first + 1);
              _indices.push(second, second + 1, first + 1);
              _edgeIndices.push(first, second);
              _edgeIndices.push(first, first + 1);
          }
      }
      return { _vertices, _normals, _indices, _edgeIndices, _texCoords };
  }
  class Sphere extends TemplateGeometry {
      constructor() {
          const { _vertices, _normals, _indices, _edgeIndices, _texCoords } = createSphere(1, 32, 32);
          super(_vertices, _normals, _indices, _edgeIndices, _texCoords);
      }
  }
  
  
  /***/ }),
  
  /***/ "./public/engine/core/objects/geometry.ts":
  /*!************************************************!*\
    !*** ./public/engine/core/objects/geometry.ts ***!
    \************************************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
  /* harmony export */   Geometry: () => (/* binding */ Geometry)
  /* harmony export */ });
  /* harmony import */ var _gl_gl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../gl/gl */ "./public/engine/core/gl/gl.ts");
  // geometry.js
  
  class Geometry {
      constructor() {
          this._vertexBuffer = null;
          this._texCoordBuffer = null;
          this._indexBuffer = null;
          this._edgeIndexBuffer = null;
          this._vertexCount = 0;
          this._edgeCount = 0;
          this._vertices = null;
          this._texCoords = null;
          this._indices = null;
          this._edges = null;
      }
      static loadFromClass(template) {
          const geometry = new Geometry();
          // Вершины
          geometry._vertices = new Float32Array(template.vertices);
          geometry._vertexBuffer = _gl_gl__WEBPACK_IMPORTED_MODULE_0__.gl.createBuffer();
          _gl_gl__WEBPACK_IMPORTED_MODULE_0__.gl.bindBuffer(_gl_gl__WEBPACK_IMPORTED_MODULE_0__.gl.ARRAY_BUFFER, geometry._vertexBuffer);
          _gl_gl__WEBPACK_IMPORTED_MODULE_0__.gl.bufferData(_gl_gl__WEBPACK_IMPORTED_MODULE_0__.gl.ARRAY_BUFFER, geometry._vertices, _gl_gl__WEBPACK_IMPORTED_MODULE_0__.gl.STATIC_DRAW);
          // Текстурные координаты
          geometry._texCoords = new Float32Array(template.texCoords);
          geometry._texCoordBuffer = _gl_gl__WEBPACK_IMPORTED_MODULE_0__.gl.createBuffer();
          _gl_gl__WEBPACK_IMPORTED_MODULE_0__.gl.bindBuffer(_gl_gl__WEBPACK_IMPORTED_MODULE_0__.gl.ARRAY_BUFFER, geometry._texCoordBuffer);
          _gl_gl__WEBPACK_IMPORTED_MODULE_0__.gl.bufferData(_gl_gl__WEBPACK_IMPORTED_MODULE_0__.gl.ARRAY_BUFFER, geometry._texCoords, _gl_gl__WEBPACK_IMPORTED_MODULE_0__.gl.STATIC_DRAW);
          // Индексы
          geometry._indices = new Uint16Array(template.indices);
          geometry._indexBuffer = _gl_gl__WEBPACK_IMPORTED_MODULE_0__.gl.createBuffer();
          _gl_gl__WEBPACK_IMPORTED_MODULE_0__.gl.bindBuffer(_gl_gl__WEBPACK_IMPORTED_MODULE_0__.gl.ELEMENT_ARRAY_BUFFER, geometry._indexBuffer);
          _gl_gl__WEBPACK_IMPORTED_MODULE_0__.gl.bufferData(_gl_gl__WEBPACK_IMPORTED_MODULE_0__.gl.ELEMENT_ARRAY_BUFFER, geometry._indices, _gl_gl__WEBPACK_IMPORTED_MODULE_0__.gl.STATIC_DRAW);
          geometry._vertexCount = template.indices.length;
          // Ребра
          geometry._edges = new Uint16Array(template.edges);
          geometry._edgeIndexBuffer = _gl_gl__WEBPACK_IMPORTED_MODULE_0__.gl.createBuffer();
          _gl_gl__WEBPACK_IMPORTED_MODULE_0__.gl.bindBuffer(_gl_gl__WEBPACK_IMPORTED_MODULE_0__.gl.ELEMENT_ARRAY_BUFFER, geometry._edgeIndexBuffer);
          _gl_gl__WEBPACK_IMPORTED_MODULE_0__.gl.bufferData(_gl_gl__WEBPACK_IMPORTED_MODULE_0__.gl.ELEMENT_ARRAY_BUFFER, geometry._edges, _gl_gl__WEBPACK_IMPORTED_MODULE_0__.gl.STATIC_DRAW);
          geometry._edgeCount = template.edges.length;
          return geometry;
      }
      bindBuffers() {
          // Привязываем буфер вершин
          _gl_gl__WEBPACK_IMPORTED_MODULE_0__.gl.bindBuffer(_gl_gl__WEBPACK_IMPORTED_MODULE_0__.gl.ARRAY_BUFFER, this._vertexBuffer);
          _gl_gl__WEBPACK_IMPORTED_MODULE_0__.gl.vertexAttribPointer(0, 3, _gl_gl__WEBPACK_IMPORTED_MODULE_0__.gl.FLOAT, false, 0, 0);
          _gl_gl__WEBPACK_IMPORTED_MODULE_0__.gl.enableVertexAttribArray(0);
          // Привязываем буфер текстурных координат
          _gl_gl__WEBPACK_IMPORTED_MODULE_0__.gl.bindBuffer(_gl_gl__WEBPACK_IMPORTED_MODULE_0__.gl.ARRAY_BUFFER, this._texCoordBuffer);
          _gl_gl__WEBPACK_IMPORTED_MODULE_0__.gl.vertexAttribPointer(1, 2, _gl_gl__WEBPACK_IMPORTED_MODULE_0__.gl.FLOAT, false, 0, 0);
          _gl_gl__WEBPACK_IMPORTED_MODULE_0__.gl.enableVertexAttribArray(1);
          // Привязываем буфер индексов
          _gl_gl__WEBPACK_IMPORTED_MODULE_0__.gl.bindBuffer(_gl_gl__WEBPACK_IMPORTED_MODULE_0__.gl.ELEMENT_ARRAY_BUFFER, this._indexBuffer);
      }
      bindEdgeBuffers() {
          _gl_gl__WEBPACK_IMPORTED_MODULE_0__.gl.bindBuffer(_gl_gl__WEBPACK_IMPORTED_MODULE_0__.gl.ARRAY_BUFFER, this._vertexBuffer);
          _gl_gl__WEBPACK_IMPORTED_MODULE_0__.gl.bindBuffer(_gl_gl__WEBPACK_IMPORTED_MODULE_0__.gl.ELEMENT_ARRAY_BUFFER, this._edgeIndexBuffer);
      }
      draw() {
          _gl_gl__WEBPACK_IMPORTED_MODULE_0__.gl.drawElements(_gl_gl__WEBPACK_IMPORTED_MODULE_0__.gl.TRIANGLES, this._vertexCount, _gl_gl__WEBPACK_IMPORTED_MODULE_0__.gl.UNSIGNED_SHORT, 0);
      }
      drawEdges() {
          _gl_gl__WEBPACK_IMPORTED_MODULE_0__.gl.drawElements(_gl_gl__WEBPACK_IMPORTED_MODULE_0__.gl.LINES, this._edgeCount, _gl_gl__WEBPACK_IMPORTED_MODULE_0__.gl.UNSIGNED_SHORT, 0);
      }
      toJson() {
          return new Promise(resolve => {
              resolve(JSON.stringify({
                  vertices: Array.from(this._vertices || []),
                  texCoords: Array.from(this._texCoords || []),
                  indices: Array.from(this._indices || []),
                  edges: Array.from(this._edges || []),
                  vertexCount: this._vertexCount,
                  edgeCount: this._edgeCount
              }));
          });
      }
  }
  
  
  /***/ }),
  
  /***/ "./public/engine/core/objects/transform.ts":
  /*!*************************************************!*\
    !*** ./public/engine/core/objects/transform.ts ***!
    \*************************************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
  /* harmony export */   Transform: () => (/* binding */ Transform)
  /* harmony export */ });
  /* harmony import */ var gl_matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/vec3.js");
  /* harmony import */ var gl_matrix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/mat4.js");
  
  class Transform {
      constructor() {
          this.scale = gl_matrix__WEBPACK_IMPORTED_MODULE_0__.fromValues(1, 1, 1);
          this.position = gl_matrix__WEBPACK_IMPORTED_MODULE_0__.create();
          this.rotation = gl_matrix__WEBPACK_IMPORTED_MODULE_0__.create();
      }
      getMvpMatrix(projection, view) {
          const modelMatrix = gl_matrix__WEBPACK_IMPORTED_MODULE_1__.create();
          gl_matrix__WEBPACK_IMPORTED_MODULE_1__.translate(modelMatrix, modelMatrix, this.position);
          gl_matrix__WEBPACK_IMPORTED_MODULE_1__.scale(modelMatrix, modelMatrix, this.scale);
          gl_matrix__WEBPACK_IMPORTED_MODULE_1__.rotateX(modelMatrix, modelMatrix, this.rotation[0]);
          gl_matrix__WEBPACK_IMPORTED_MODULE_1__.rotateY(modelMatrix, modelMatrix, this.rotation[1]);
          gl_matrix__WEBPACK_IMPORTED_MODULE_1__.rotateZ(modelMatrix, modelMatrix, this.rotation[2]);
          const mvpMatrix = gl_matrix__WEBPACK_IMPORTED_MODULE_1__.create();
          gl_matrix__WEBPACK_IMPORTED_MODULE_1__.multiply(mvpMatrix, projection, view);
          gl_matrix__WEBPACK_IMPORTED_MODULE_1__.multiply(mvpMatrix, mvpMatrix, modelMatrix);
          return mvpMatrix;
      }
      toJson() {
          return new Promise(resolve => {
              resolve(JSON.stringify({
                  scale: [...this.scale.values()],
                  position: [...this.position.values()],
                  rotation: [...this.rotation.values()]
              }));
          });
      }
      static fromJson(json) {
          return new Promise(resolve => {
              const transform = new Transform();
              const object = JSON.parse(json);
              transform.scale = gl_matrix__WEBPACK_IMPORTED_MODULE_0__.fromValues(object.scale[0], object.scale[1], object.scale[2]);
              transform.position = gl_matrix__WEBPACK_IMPORTED_MODULE_0__.fromValues(object.position[0], object.position[1], object.position[2]);
              transform.rotation = gl_matrix__WEBPACK_IMPORTED_MODULE_0__.fromValues(object.rotation[0], object.rotation[1], object.rotation[2]);
              resolve(transform);
          });
      }
  }
  
  
  /***/ })
  
  /******/ });
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/ 
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
  /******/ 	// Check if module is in cache
  /******/ 	var cachedModule = __webpack_module_cache__[moduleId];
  /******/ 	if (cachedModule !== undefined) {
  /******/ 		return cachedModule.exports;
  /******/ 	}
  /******/ 	// Create a new module (and put it into the cache)
  /******/ 	var module = __webpack_module_cache__[moduleId] = {
  /******/ 		// no module.id needed
  /******/ 		// no module.loaded needed
  /******/ 		exports: {}
  /******/ 	};
  /******/ 
  /******/ 	// Execute the module function
  /******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
  /******/ 
  /******/ 	// Return the exports of the module
  /******/ 	return module.exports;
  /******/ }
  /******/ 
  /************************************************************************/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
  /******/ 	// define getter functions for harmony exports
  /******/ 	__webpack_require__.d = (exports, definition) => {
  /******/ 		for(var key in definition) {
  /******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
  /******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
  /******/ 			}
  /******/ 		}
  /******/ 	};
  /******/ })();
  /******/ 
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
  /******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
  /******/ })();
  /******/ 
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
  /******/ 	// define __esModule on exports
  /******/ 	__webpack_require__.r = (exports) => {
  /******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
  /******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
  /******/ 		}
  /******/ 		Object.defineProperty(exports, '__esModule', { value: true });
  /******/ 	};
  /******/ })();
  /******/ 
  /************************************************************************/
  /******/ 
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module is referenced by other modules so it can't be inlined
  /******/ var __webpack_exports__ = __webpack_require__("./public/engine/core/eng.ts");
  /******/ var __webpack_exports__AnimationClip = __webpack_exports__.AnimationClip;
  /******/ var __webpack_exports__Animator = __webpack_exports__.Animator;
  /******/ var __webpack_exports__Camera = __webpack_exports__.Camera;
  /******/ var __webpack_exports__Cube = __webpack_exports__.Cube;
  /******/ var __webpack_exports__Engine = __webpack_exports__.Engine;
  /******/ var __webpack_exports__GLUtilities = __webpack_exports__.GLUtilities;
  /******/ var __webpack_exports__GameObject = __webpack_exports__.GameObject;
  /******/ var __webpack_exports__Material = __webpack_exports__.Material;
  /******/ var __webpack_exports__Renderer = __webpack_exports__.Renderer;
  /******/ var __webpack_exports__Script = __webpack_exports__.Script;
  /******/ var __webpack_exports__Sphere = __webpack_exports__.Sphere;
  /******/ var __webpack_exports__TemplateGeometry = __webpack_exports__.TemplateGeometry;
  /******/ var __webpack_exports__Transform = __webpack_exports__.Transform;
  /******/ var __webpack_exports__default = __webpack_exports__["default"];
  /******/ export { __webpack_exports__AnimationClip as AnimationClip, __webpack_exports__Animator as Animator, __webpack_exports__Camera as Camera, __webpack_exports__Cube as Cube, __webpack_exports__Engine as Engine, __webpack_exports__GLUtilities as GLUtilities, __webpack_exports__GameObject as GameObject, __webpack_exports__Material as Material, __webpack_exports__Renderer as Renderer, __webpack_exports__Script as Script, __webpack_exports__Sphere as Sphere, __webpack_exports__TemplateGeometry as TemplateGeometry, __webpack_exports__Transform as Transform, __webpack_exports__default as default };
  /******/ 
  
  //# sourceMappingURL=engine.js.map