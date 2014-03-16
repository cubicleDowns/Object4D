var Demo = Demo || {};
Demo.Cameras = Demo.Cameras || {};

/**
 * @namespace  Camera initialization
 * @class Creates cameras for the scene.
 */
Demo.Cameras = function (context) {

    this.context = context;

    this.liveCam = null;
    this.FOV = 70;
    this.WIDTH = context.jqContainer.width();
    this.HEIGHT = context.jqContainer.height();
    this.ASPECT_RATIO = this.WIDTH / this.HEIGHT;
    this.NEAR_PLANE = 1;
    this.FAR_PLANE = 100000;

    this.controls = null;

    this.init();
};

Demo.Cameras.prototype = {

    /**
     * Initialize the camera object and create default cameras.
     */
    init: function () {
        this.initPerspective();
        this.initControls();
    },

    initControls: function () {
        this.controls = new THREE.OrbitControls( this.liveCam, this.context.container );
    },

    /**
     * Initialize the perspective camera.
     */
    initPerspective: function () {
        this.liveCam = new THREE.PerspectiveCamera( this.FOV, this.ASPECT_RATIO, this.NEAR_PLANE, this.FAR_PLANE );
        this.liveCam.position.x = 200;
        this.liveCam.position.y = 200;
        this.liveCam.position.z = 200;

    }

};
