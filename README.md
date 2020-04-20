
# Api Alumnos - Ingeniería Web

**Nombre: Carolina García Clavijo**

Esta Api desarrollada con NodeJs y MongoDb implementa varios servicios para manejar la información referente a alumnos, los cuales contienen la siguiente información:
firstName, lastName, phoneNumber, course, grade.

* **CrearAlumno:** Método **Post** que permite agregar un nuevo alumno de la siguiente forma:
    
    **Petición:** localhost:3000/alumnos
		
    **Información requerida en el Body:** { "firstName": "Carolina", "lastName": "Garcia", "phoneNumber": 22222, "email": "caro@correo.com", "course": "fisica", "grade": 5}
	
* **ObtenerAlumnos:** Método **Get** que permite la colección de alumnos:
	
	**Petición:** localhost:3000/alumnos

* **ObtenerAlumnoPorId**: Método **Get** que permite obtener el registro de un alumno que coincida con el parametro enviado (alumnoId).
	
	**Petición:** localhost:3000/alumnos/alumnoId
  
* **ActualizarAlumno**: Método **Put** que permite actualizar cualquier campo del alumno asocido al parametro alumnoId:

  **Petición:** localhost:3000/alumnos/alumnoId
  
  **Información requerida en el body:** Por ejemplo para actualizar el curso {"course": 4}
  
* **EliminarAlumno**: Método **Delete** que permite eliminar el registro del alumno al parametro alumnoId:

   **Petición:** localhost:3000/alumnos/alumnoId
   
* **PromedioDeCurso**: Método **Get** para obtener el promedio del curso asociado al parametro course:

  **Petición:** localhost:3000/alumnos/course
 
 * **ActualizarNota**: Metodo **Put** para actualizar la nota de todos los alumnos pertenecientes a un mismo curso asociado al parametro course:
 
   **Petición:** localhost:3000/alumnos/course}
   
   **Información requerida en el body:** Se envía la nueva nota {"course": 3.5}
  
 
 
