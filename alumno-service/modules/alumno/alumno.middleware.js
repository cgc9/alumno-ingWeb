(function () {
    'use strict';

    module.exports = {
        addAlumno: addAlumno,
        getAlumnos: getAlumnos,
        getAlumnoById: getAlumnoById,
        modifyAlumno: modifyAlumno,
        removeAlumno: removeAlumno,
        getAverageCourse: getAverageCourse,
        modifyCourse: modifyCourse
    };

    var AlumnoService = require('./alumno.module')().AlumnoService;

    function addAlumno(req, res, next) {

        AlumnoService.createAlumno(req.body)
            .then(success)
            .catch(failure);

        function success(data) {
            req.response = data;
            next();
        }

        function failure(error) {
            next(error);
        }

    }

    function getAlumnos(req, res, next) {

        AlumnoService.fetchAlumnos()
            .then(success)
            .catch(failure);

        function success(data) {
            req.response = data;
            next();
        }

        function failure(err) {
            next(err);
        }

    }

    function getAverageCourse(req, res, next) {

        AlumnoService.averageCourse(req.params.course)
            .then(success)
            .catch(failure);

        function success(data) {
            req.response =  data;
            next();
        }

        function failure(err) {
            next(err);
        }

    }

    function modifyCourse(req, res, next) { 
        AlumnoService.updateCourse(req.params.course,Number(req.body.grade))
        .then(success)
        .catch(failure);
         function success(data) { 
             req.response = data;
             next(); 
            } 
        function failure(err) { 
            next(err); 
        } }

    function getAlumnoById(req, res, next) {

        AlumnoService.fetchAlumnoById(req.params.alumnoId)
            .then(success)
            .catch(failure);

        function success(data) {
            req.response = data;
            next();
        }

        function failure(err) {
            next(err);
        }

    }

    function modifyAlumno(req, res, next) {
        AlumnoService.updateAlumno(req.params.alumnoId, req.body)
            .then(success)
            .catch(error);

        function success(data) {
            req.response = data;
            next();
        }

        function error(err) {
            next(err);
        }
    }

    function removeAlumno(req, res, next) {

        AlumnoService.deleteAlumno(req.params.alumnoId)
            .then(success)
            .catch(error);

        function success(data) {
            req.response = data;
            next();
        }

        function error(err) {
            next(err);
        }

    }

})();