(function () {
    'use strict';

    module.exports = {
        createAlumno: createAlumno,
        fetchAlumnos: fetchAlumnos,
        fetchAlumnoById: fetchAlumnoById,
        updateAlumno: updateAlumno,
        updateCourse: updateCourse,
        deleteAlumno: deleteAlumno,
        averageCourse: averageCourse
    };

    var AlumnoModel = require('./alumno.module')().AlumnoModel;

    function createAlumno(alumno) {
        return AlumnoModel.create(alumno);
    }

    function fetchAlumnos() {
        return AlumnoModel.find({})
            .exec();
    }

    function fetchAlumnoById(alumnoId) {
        return AlumnoModel.findById(alumnoId)
            .exec();
    }

    function updateAlumno(alumnoId, alumno) {
        return AlumnoModel
            .findByIdAndUpdate(alumnoId, alumno, {new: true})
            .exec();
    }

    function deleteAlumno(alumnoId) {
        return AlumnoModel
            .findByIdAndRemove(alumnoId)
            .exec();
    }

    function averageCourse(courseAl){
        return AlumnoModel.aggregate([{$match: {course:courseAl}},{$group:{_id:1, promedio:{$avg:"$grade"}}}]).exec();
    }


    function updateCourse(courseAl, gradeAl){
        return AlumnoModel.updateMany({ course: courseAl}, {"$set": {"grade": gradeAl}})
        .exec() 
    }


})();