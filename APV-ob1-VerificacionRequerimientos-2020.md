# Verificación de los requerimientos del sistema

Para verificar los requerimientos del sistema se utilizó la técnica revisión de pares, porque se determinó que era la más adecuada porque se requiere poco tiempo y recursos (teniendo en cuenta las limitaciones del proyecto en tiempo y costo).

El objetivo de esta verificación fue determinar que todos los requerimientos cumplieran con las siguientes características deseables como, por ejemplo:
- Completo, correcto, factible, necesario, priorizado, no ambiguo y verificable.
- Consistente, modificable y trazable.
Cada requerimiento se consideró como un artefacto de software y para la verificación de estos, efectuamos la revisión de a pares entre dos miembros del equipo del obligatorio y se obtuvieron los siguientes resultados:

**ARTEFACTO 1- RF01 – Alta de Usuario. Rol**: Administrador

El sistema deberá permitir crear un nuevo usuario del tipo alumno, utilizando un formulario de registro. Se deberá proporcionar nombre completo, dirección de correo electrónico, teléfono de contacto y contraseña.

**DEFECTOS**: 

- No cumple con la característica de completitud:
    > Que formato se espera de la contraseña.

**ARTEFACTO 2- RF02 – Baja de Usuario. Rol**: Administrador

El sistema deberá permitir la eliminación permanente de usuarios del tipo alumno en el sistema. 

**DEFECTOS**:
- No se encontraron defectos

**ARTEFACTO 3- RF03 – Suspension temporal de usuario. Rol**: Administrador

El sistema deberá permitir la suspensión de un usuario temporalmente, impidiendo el acceso al sistema, sin eliminar sus datos e histórico de reproducciones

**DEFECTOS**:
- No cumple con la característica de completitud:
    > No se aclara a que rol de usuario puede suspender.

- Es ambiguo:
    > Ya que “temporalmente” puede ser interpratado como un periodo de tiempo que no es detallado o fijado seteado con anterioridad, o que quede suspendido hasta que manualmente sea habilitado.

**ARTEFACTO 4- RF04 – Login Rol**: Usuario no Autenticado

El sistema deberá detectar automáticamente solo con el nombre de usuario y contraseña que el usuario es del tipo administrador o tipo alumno. Al ingresar habilitará al usuario a acceder a las secciones correspondientes a su rol.

**DEFECTOS**:
- No se encontraron defectos.

**ARTEFACTO 5- RF05 – Alta Curso .Rol**: Administrador.

El sistema deberá contar con una funcionalidad que permita dar alta de nuevos cursos, ingresando nombre del curso (el cual debe ser único), descripción y nivel (el nivel se selecciona de un combo box que brinda la opción: Principiante, intermedio y avanzado).

**DEFECTOS**:
- No cumple con la característica de completitud:
    > No se aclara que requisitos debe cumplir la descripción para ser válida.
    > En ningún caso detalla cantidad mínima ni máxima de caracteres.

**ARTEFACTO 6 - RF06 – Baja Curso. Rol**: Administrador.

El sistema deberá contar con una funcionalidad que permita eliminar los cursos existentes. Se debe seleccionar el curso a eliminar y luego presionar “Eliminar”, se solicitará confirmar la operación.

Comentarios: No es posible eliminar un curso si el mismo tiene videos asociados.

**DEFECTOS**:
- No cumple con la característica de ser necesario:
    > El cliente no solicito que se deba tener en cuenta si el curso a eliminar tiene o no videos asociados. En el caso que tuviera demasiados videos asociados, le generaría una molestia innecesaria.

**ARTEFACTO 7- RF07 – Modificar Curso Rol**: Administrador.

El sistema deberá contar con una funcionalidad que permita modificar los cursos. El usuario administrador selecciona un curso. El sistema ofrece modificar el estado del curso, el nombre, la descripción y el nivel del curso.

Comentarios: No es posible habilitar un curso que no tenga videos asociados. No es posible modificar el nombre de un curso si el nombre que se desea ya existe.

**DEFECTOS**:
- No se encontraron defectos

**ARTEFACTO 8 - RF08 – Alta Video Rol**: Administrador.

El sistema será capaz de almacenar videos. El usuario hace click en el botón subir video y el sistema abre un cuadro de dialogo en donde el usuario selecciona un video de su ordenador.

Comentario: El botón de subir video está disponible en la ventana de Modificar Curso del curso seleccionado. Cuando el video termina de subir, aparece visible en la ventana modificar curso.

**DEFECTOS**:
- No cumple con la característica de completitud:
    > No aclara el límite del tamaño del video.
    > No aclara que el video subido queda asociado al curso el cual se esta modificando.

**ARTEFACTO 9- RF09 – Baja Video Rol**: Administrador.

El sistema será capaz de permitir al usuario administrador eliminar videos asociados a un curso. El usuario hace click en el botón eliminar video y luego confirma la eliminación. 

Comentario: El botón de eliminar video está disponible en la ventana de Modificar Curso del curso seleccionado. 

**DEFECTOS**:
- No se encontraron defectos

**ARTEFACTO 10– RF10 – Ver cursos Rol**: Alumno.

El sistema deberá mostrar la lista de cursos disponibles que se encuentren habilitados para los usuarios con el rol alumno.

**DEFECTOS**:
- No se encontraron defectos

**ARTEFACTO 11–RF11 – Seleccionar curso Rol**: Alumno.

El sistema deberá permitir seleccionar un curso. Luego de que el usuario selecciona el mismo, se mostrará en otra ventana los videos asociados al curso seleccionado.

**DEFECTOS**:
- No se encontraron defectos

**ARTEFACTO 12 –RF12 – Ver video Rol**: Alumno.

El sistema deberá permitir la reproducción de videos subidos en la plataforma.

Comentario: Para seleccionar un video a ser reproducido, se debe estar dentro de un curso seleccionado, el porcentaje de reproducción se guarda en un historial asociado al usuario alumno.

**DEFECTOS**:
- No se encontraron defectos


**ARTEFACTO 13- RF13 – Ver -Historial Rol**: Alumno.

El Sistema será capaz de mostrar al usuario alumno la lista de videos que ha reproducido y el porcentaje de reproducción de los mismos.

**DEFECTOS**:
- No se encontraron defectos

**ARTEFACTO 14- RNF01 – Diseño de Interfaz de Usuario**

La interfaz de usuario debe ser responsive (se debe adaptar a dispositivos web y móviles).

Categoría: Usabilidad.

**DEFECTOS**:
- No se encontraron defectos

**ARTEFACTO 15- RNF02 – Informe de Errores**

El sistema deberá informar en forma detallada los errores que surjan durante la ejecución del programa con el objetivo de retroalimentar al usuario.
Categoría: Usabilidad.

**DEFECTOS**:
- No se encontraron defectos

**ARTEFACTO 16-RNF03 - Sistema**

El sistema debe correr sobre Windows 10 o superior.

Categoría: Funcionalidad

**DEFECTOS**:
- No cumple con la característica de ser correcto
    > El sistema debe correr sobre navegadores web, no es una aplicación de escritorio como para tener en cuenta el SO a la hora de la programación.


## CORRECCIÓN DE DEFECTOS EN LA VERIFICACIÓN

Al finalizar esta técnica, se corrigieron los requerimientos en los cuales se encontraron defectos y se redactaron de esta manera:

**ARTEFACTO 1 Modificado- RF01 – Alta de Usuario.**

El sistema deberá permitir crear un nuevo usuario del tipo alumno, utilizando un formulario de registro. Se deberá proporcionar nombre completo, dirección de correo electrónico, teléfono de contacto y contraseña que deberá contener 8 caracteres incluyendo 1 mayúscula y 1 número.

**ARTEFACTO 3 Modificado RF03 – Suspension temporal de usuario.**

El sistema deberá permitir cambiar el estado para que un usuario con el rol alumno pueda acceder o no acceder a la sección privada destinada únicamente a los alumnos habilitados.

Esta función no modifica ni elimina los otros atributos y relaciones con el histórico del usuario alumno.

Si un alumno que se encuentra suspendido intenta ingresar al sistema, se le notificará que se encuentra suspendido.

**ARTEFACTO 5 Modificado RF05 – Alta Curso.**

El sistema deberá contar con una funcionalidad que permita dar alta de nuevos cursos, ingresando nombre del curso (el cual debe ser único), descripción y nivel (el nivel se selecciona de un combo box que brinda la opción: Principiante, intermedio y avanzado).

La descripción tendrá entre 5 y 200 caracteres. El nombre tiene entre 2 y 10 caracteres.

**ARTEFACTO 6 Modificado- RF06 – Baja Curso.**

El sistema deberá contar con una funcionalidad que permita eliminar los cursos existentes. Se debe seleccionar el curso a eliminar y luego presionar “Eliminar”, se solicitará confirmar la operación.

**ARTEFACTO 8 Modificado RF08 – Alta Video.**

Descripción: El sistema será capaz de almacenar videos. El usuario hace click en el botón subir video y el sistema abre un cuadro de dialogo en donde el usuario selecciona un video de su ordenador. El video queda asociado al curso que el usuario administrador se encuentra modificando.

Comentario: El botón de subir video está disponible en la ventana de Modificar Curso del curso seleccionado. Cuando el video termina de subir, aparece visible en la ventana modificar curso. El video no podrá superar los 100 MB.

**ARTEFACTO 16-RNF03 - Sistema.**

El sistema debe correr en internet Explorer versión 10 o superior, Google Chrome versión 76 o superior, Safari 5.1.10 o superior y Mozilla Firefox 77.01 o superior.

Categoría: Funcionalidad 