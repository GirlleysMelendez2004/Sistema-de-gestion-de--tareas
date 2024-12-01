# Historia de Usuario: Sistema de Gestión de Tareas

## Resumen

Como usuario, quiero poder gestionar mis tareas de manera eficiente, de modo que pueda crear, editar, eliminar y marcar tareas como completadas para organizar mi trabajo de manera efectiva.

## Detalles

**ID de la Historia de Usuario**: US001  
**Prioridad**: Alta  
**Estimada**: 5 puntos  
**Responsable**: Equipo de desarrollo

## Criterios de Aceptación

1. **Creación de tareas**: 
   - El usuario debe poder crear una nueva tarea ingresando un título y una descripción opcional.
   - La tarea debe tener una fecha de vencimiento opcional.
   - La tarea debe ser guardada y mostrada en la lista de tareas pendientes.

2. **Edición de tareas**: 
   - El usuario debe poder editar el título y la descripción de una tarea existente.
   - El cambio debe guardarse y reflejarse inmediatamente en la lista de tareas.

3. **Eliminación de tareas**: 
   - El usuario debe poder eliminar una tarea de la lista.
   - Al eliminar una tarea, debe mostrar un mensaje de confirmación y la tarea debe desaparecer de la lista.

4. **Marcar tareas como completadas**: 
   - El usuario debe poder marcar una tarea como completada, lo que cambiará su estado y la visualización en la lista.
   - Las tareas completadas deben ser visualizadas con un estado "Completada" y una marca visual que indique que están terminadas.

5. **Filtrar tareas**:
   - El usuario debe poder filtrar las tareas según su estado (Pendientes/Completadas).
   - El usuario debe poder ver tareas ordenadas por fecha de vencimiento.

## Notas Técnicas

- El sistema debe ser implementado utilizando JavaScript (React) y un backend basado en Node.js con una base de datos en MongoDB.
- El frontend debe ser responsivo y adaptarse a dispositivos móviles.
- El proyecto debe incluir pruebas unitarias para cada funcionalidad descrita en los criterios de aceptación.

## Tareas Técnicas

- [ ] Configuración inicial del proyecto (React, Node.js, MongoDB).
- [ ] Crear los modelos de datos para las tareas.
- [ ] Implementar la API para crear, editar, eliminar y marcar tareas como completadas.
- [ ] Desarrollar el frontend para mostrar la lista de tareas y permitir las interacciones.
- [ ] Escribir pruebas unitarias y de integración.

## Historias Relacionadas

- [US002] - Filtro de tareas por fecha de vencimiento.
- [US003] - Autenticación de usuarios.
