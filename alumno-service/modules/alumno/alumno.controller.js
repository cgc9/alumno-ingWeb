(function () {
    'use strict';

    var express = require('express');
    var router = express.Router();

    var AlumnoMiddleware = require('./alumno.module')().AlumnoMiddleware;

    router.post('/',
        AlumnoMiddleware.addAlumno,
        function (req, res) {
            res.status(201).json(req.response);
        });

    router.get('/',
        AlumnoMiddleware.getAlumnos,
        function (req, res) {
            res.status(200).json(req.response);
        });

    router.get('/:alumnoId',
        AlumnoMiddleware.getAlumnoById,
        function (req, res) {
            res.status(200).json(req.response);
        });

    router.get('/course/:course',
        AlumnoMiddleware.getAverageCourse,
        function (req, res) {
            res.status(200).json(req.response);
        });
    
    router.put('/course/:course',
        AlumnoMiddleware.modifyCourse,
        function (req, res) {
            res.status(200).json(req.response);
        });

    router.put('/:alumnoId',
        AlumnoMiddleware.modifyAlumno,
        function (req, res) {
            res.status(200).json(req.response);
        });
    
    router.delete('/:alumnoId',
        AlumnoMiddleware.removeAlumno,
        function (req, res) {
            res.status(200).json(req.response);
        });
    module.exports = router;

})();