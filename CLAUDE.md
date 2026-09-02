# AGENTS.md

# Portfolio Maximiliano Farias — Project & QA Philosophy

Este archivo define las reglas técnicas, visuales, de contenido y de QA para el portfolio de Maximiliano Farias.

Claude Code debe leer y respetar estas instrucciones antes de modificar cualquier parte del proyecto.

El objetivo no es solamente mantener un sitio funcional.

El objetivo es construir un portfolio que funcione como una **muestra real de cómo trabaja Maximiliano como QA**: cómo analiza, cómo prueba, cómo documenta, cómo comunica problemas, cómo automatiza y cómo piensa la calidad.

---

# 1. Identidad del proyecto

Portfolio profesional de:

**Maximiliano Farias**

Rol:

**QA Tester Semi-Senior**

Experiencia:

* +4 años trabajando en QA / Software Testing.
* Experiencia en proyectos internacionales.
* Experiencia destacada en fintech y plataformas financieras.
* Experiencia con productos orientados al mercado estadounidense.
* Evolución profesional desde Trainee hasta Semi-Senior.
* Experiencia en testing manual, funcional y automatización.

El portfolio debe transmitir:

* profesionalismo
* criterio técnico
* curiosidad
* pensamiento crítico
* autonomía
* ownership
* capacidad de aprendizaje
* comunicación clara
* visión de usuario
* interés genuino por la calidad

No debe transmitir:

* arrogancia
* exageración de seniority
* lenguaje corporativo vacío
* acumulación artificial de certificaciones
* frases genéricas de LinkedIn
* claims que no puedan demostrarse

---

# 2. Objetivo principal del portfolio

El portfolio no debe funcionar como un CV visual.

Debe responder rápidamente:

1. ¿Quién es Maximiliano?
2. ¿Cómo piensa como QA?
3. ¿Qué sabe hacer?
4. ¿Cómo trabaja?
5. ¿Qué evidencia existe de ese trabajo?
6. ¿Qué herramientas utiliza?
7. ¿Cómo documenta problemas?
8. ¿Cómo conecta testing manual con automatización?
9. ¿Cómo trabaja con desarrollo, producto y negocio?
10. ¿Qué nivel de autonomía tiene?

La experiencia debe poder entenderse tanto por:

* un recruiter no técnico
* un QA Lead
* un Engineering Manager
* un desarrollador
* una persona de producto

---

# 3. Filosofía de QA de Maximiliano

La filosofía del portfolio debe girar alrededor de esta idea:

> **Probar como QA. Pensar como usuario.**

QA no debe presentarse únicamente como búsqueda de bugs.

Para Maximiliano, testing implica:

* entender el producto
* entender el negocio
* entender los requerimientos
* identificar riesgos
* hacer preguntas
* explorar
* pensar escenarios alternativos
* validar comportamiento
* comunicar resultados
* prevenir regresiones
* automatizar cuando aporta valor

La calidad empieza antes de ejecutar el primer test.

El tester debe intentar entender:

**qué estamos construyendo + para quién + por qué + qué puede salir mal.**

---

# 4. Forma de pensar de Maximiliano

Cuando Claude cree contenido relacionado con QA, debe priorizar estas características:

### Pensamiento analítico

Entender el sistema antes de probarlo.

Descomponer funcionalidades complejas en flujos, escenarios, reglas y dependencias.

### Pensamiento crítico

No asumir que el happy path representa todo el comportamiento del sistema.

Cuestionar:

* requerimientos
* reglas de negocio
* estados
* datos
* permisos
* errores
* integraciones
* límites
* comportamiento inesperado

### Curiosidad

Explorar más allá del escenario inicialmente definido.

Preguntar:

> ¿Qué pasa si...?

Esta pregunta representa una parte importante de la mentalidad de testing de Maximiliano.

### Ownership

No limitarse a ejecutar una tarea.

Cuando aparece un problema:

1. investigar
2. reproducir
3. entender
4. documentar
5. comunicar
6. hacer seguimiento
7. validar la solución

### Visión de usuario

El producto no se prueba únicamente desde la especificación.

También se prueba desde la perspectiva de quien lo utiliza.

### Aprendizaje

Maximiliano se caracteriza por aprender herramientas y conceptos mientras trabaja y por buscar entender cómo funcionan las cosas.

El portfolio debe mostrar evolución, no perfección artificial.

---

# 5. QA como proceso

Cuando se represente el proceso de trabajo, utilizar preferentemente este modelo:

```text
Requirement
    ↓
Understanding
    ↓
Risk Analysis
    ↓
Test Design
    ↓
Manual / Exploratory Testing
    ↓
Bug Discovery
    ↓
Bug Documentation
    ↓
Fix Validation
    ↓
Regression
    ↓
Automation
    ↓
CI/CD
    ↓
Feedback
```

No todas las funcionalidades requieren todas las etapas.

El proceso debe adaptarse al riesgo y al contexto.

---

# 6. Risk-Based Testing

El portfolio debe mostrar que el testing no consiste en probar absolutamente todo de la misma manera.

Priorizar según:

* impacto para el usuario
* impacto para el negocio
* criticidad funcional
* probabilidad de fallo
* complejidad
* dependencias
* frecuencia de uso
* riesgo financiero
* integraciones

En productos financieros, prestar especial atención a:

* cálculos
* montos
* estados
* fechas
* validaciones
* permisos
* datos sensibles
* workflows
* transiciones de estado
* integraciones
* errores de negocio

Nunca inventar reglas financieras específicas que no estén documentadas.

---

# 7. Manual Testing

Las muestras de testing manual deben demostrar:

* análisis de requerimientos
* diseño de escenarios
* test cases
* happy path
* negative testing
* edge cases
* exploratory testing
* regression testing
* smoke testing
* retesting
* validación de integraciones

Los casos de prueba deben ser:

* claros
* reproducibles
* trazables
* específicos
* orientados al objetivo

Evitar test cases artificialmente largos cuando un caso simple es suficiente.

---

# 8. Exploratory Testing

Exploratory Testing debe presentarse como una actividad estructurada, no como "probar cosas al azar".

Cuando corresponda, documentar:

* objetivo
* alcance
* hipótesis
* áreas de riesgo
* datos utilizados
* observaciones
* findings
* bugs
* conclusiones

Mentalidad:

> explorar para aprender y aprender para probar mejor.

---

# 9. Bug Reporting

Los bug reports del portfolio deben representar cómo trabaja realmente Maximiliano.

Un buen bug debe permitir que otra persona entienda rápidamente:

* qué pasó
* dónde pasó
* cómo reproducirlo
* qué debería pasar
* qué ocurrió realmente
* cuál es el impacto
* qué evidencia existe

Estructura recomendada:

```text
ID
Title
Severity
Priority
Environment
Device
Browser
Preconditions
Steps to Reproduce
Expected Result
Actual Result
Evidence
Impact
Status
Fix
Regression
```

---

# 10. Cómo escribir títulos de bugs

Preferir:

```text
[Area] + [Action] + [Unexpected behavior]
```

Ejemplo:

```text
[Loan Application] Submitted application remains in Pending state after successful approval
```

Evitar:

```text
It doesn't work
Something is wrong
Bug in application
Error when clicking button
```

El título debe ser específico y útil.

---

# 11. Severity vs Priority

Nunca tratar Severity y Priority como sinónimos.

### Severity

Representa el impacto técnico/funcional del problema.

### Priority

Representa qué tan urgente es resolverlo desde la perspectiva del producto o negocio.

Ejemplo:

Un problema visual puede tener:

```text
Severity: Low
Priority: High
```

si afecta una campaña o una pantalla crítica.

---

# 12. Jira

Cuando el portfolio represente creación de tickets Jira, seguir un flujo realista.

Flujo:

```text
Requirement / Test
       ↓
Finding
       ↓
Reproduction
       ↓
Bug Report
       ↓
Jira
       ↓
Triage
       ↓
Development
       ↓
Fix
       ↓
Retest
       ↓
Regression
       ↓
Closed
```

Un ticket Jira debe incluir como mínimo:

* Summary
* Description
* Environment
* Preconditions
* Steps
* Expected Result
* Actual Result
* Severity
* Priority
* Evidence
* Related Test Case
* Related Requirement cuando corresponda

Nunca crear tickets ficticios que parezcan tickets reales de clientes o empresas si no existe evidencia.

Los ejemplos del portfolio deben estar claramente identificados como:

* Example
* Demonstration
* Anonymized
* Sample

cuando corresponda.

---

# 13. Test Cases

Los Test Cases deben demostrar criterio, no cantidad.

Estructura:

```text
ID
Title
Objective
Preconditions
Test Data
Steps
Expected Result
Environment
Status
Related Bug
Related Requirement
Automation Status
```

Evitar:

* pasos redundantes
* texto innecesario
* casos excesivamente genéricos
* expected results ambiguos

Un buen expected result debe ser verificable.

---

# 14. Gherkin

Utilizar Gherkin cuando ayude a expresar comportamiento.

Formato:

```gherkin
Feature:
  Scenario:
    Given
    When
    Then
```

Evitar utilizar Gherkin simplemente para decorar una tarjeta.

Debe existir una relación lógica entre:

```text
Feature
→ Scenario
→ Steps
→ Expected behavior
```

---

# 15. Automation

La automatización debe presentarse como una herramienta para mejorar la calidad, no como un objetivo por sí mismo.

Stack conocido de Maximiliano:

* Cypress
* Playwright
* Selenium
* TypeScript
* Python
* Node.js
* npm
* Postman

Principios:

* automatizar escenarios repetitivos
* automatizar regresiones importantes
* priorizar flujos críticos
* evitar automatizar por automatizar
* mantener tests legibles
* reducir duplicación
* utilizar Page Object Model cuando corresponda
* mantener separación entre datos, acciones y validaciones

---

# 16. Cypress

Cuando se agreguen ejemplos de Cypress:

Preferir:

```text
Page Object / reusable commands
↓
Test
↓
Assertions
↓
CI
↓
Report
```

Los tests deben demostrar:

* claridad
* mantenibilidad
* assertions relevantes
* manejo de datos
* estabilidad
* trazabilidad

Evitar tests gigantes que prueben toda una aplicación en un único spec.

---

# 17. Playwright

Cuando corresponda, mostrar:

* TypeScript
* Page Object Model
* fixtures
* assertions
* cross-browser testing
* traces
* screenshots
* CI

No presentar Playwright simplemente como "otra herramienta".

Explicar qué problema resuelve dentro de la estrategia.

---

# 18. Selenium

Selenium debe presentarse como parte de la evolución técnica y no como herramienta principal obligatoria.

Cuando se muestre:

* Python
* Page Object Model
* locators
* waits
* assertions
* browser interaction

Priorizar claridad sobre complejidad.

---

# 19. API Testing

Maximiliano tiene experiencia trabajando con APIs y backend.

Las muestras de API testing deben contemplar cuando corresponda:

* HTTP methods
* status codes
* request
* response
* headers
* authentication
* validation
* negative scenarios
* data consistency
* integration behavior

Herramientas:

* Postman
* API automation cuando corresponda

No limitar API testing a comprobar solamente `200 OK`.

---

# 20. Backend / Database Thinking

Cuando una funcionalidad tenga impacto backend, pensar en:

```text
UI
↓
API
↓
Backend
↓
Database
↓
External integrations
```

Cuando corresponda, validar que el comportamiento observado en UI sea consistente con backend y datos.

No inventar estructuras de base de datos o queries que no estén respaldadas por el proyecto.

---

# 21. CI/CD

La automatización debe conectarse con el ciclo de desarrollo.

Arquitectura conceptual:

```text
Code Change
   ↓
GitHub
   ↓
GitHub Actions
   ↓
Cypress / Automated Tests
   ↓
Result
   ↓
Feedback
```

El portfolio debe mostrar que la automatización puede funcionar como mecanismo de feedback continuo.

---

# 22. Cypress Cloud

El portfolio ya posee integración con Cypress Cloud.

Cuando se muestre información de ejecución:

Priorizar:

* execution status
* duration
* branch
* environment
* browser
* pass/fail
* test coverage

No inventar métricas.

Si un dato no está disponible desde la API, no simularlo como real.

---

# 23. Jira + GitHub + Cypress

Una de las fortalezas diferenciales del portfolio es demostrar integración entre herramientas.

Cuando sea posible, representar:

```text
Jira
   ↓
Requirement / Issue
   ↓
Test Case
   ↓
Automation
   ↓
GitHub
   ↓
GitHub Actions
   ↓
Cypress
   ↓
Result
```

El objetivo es mostrar trazabilidad.

No mostrar integraciones únicamente como logos.

Mostrar qué información viaja entre ellas y qué valor aporta.

---

# 24. Sprint Reporting

El Sprint Report debe ayudar a responder:

* ¿Qué se trabajó?
* ¿Qué se testeó?
* ¿Qué bugs aparecieron?
* ¿Qué automatización existe?
* ¿Cuál es el estado de ejecución?
* ¿Qué riesgos quedan abiertos?

Métricas válidas cuando existan datos reales:

* Test Cases
* Bugs
* Automation Coverage
* Pass Rate
* Fail Rate
* Execution Duration
* Sprint Status

Nunca inventar métricas para hacer que el portfolio parezca más impresionante.

---

# 25. Portfolio como evidencia

Cada ejemplo de trabajo debería intentar responder:

```text
Context
↓
Problem / Objective
↓
QA Approach
↓
Execution
↓
Finding
↓
Evidence
↓
Result
```

La cantidad importa menos que la calidad de la evidencia.

Es preferible:

**3 casos bien explicados**

que:

**20 tarjetas superficiales.**

Los portfolios QA actuales que mejor funcionan tienden a organizar el trabajo alrededor de casos y evidencia concreta, incluyendo bug reports, test cases, estrategias y trazabilidad.

---

# 26. Case Studies

Cuando se cree una nueva muestra de trabajo, utilizar preferentemente:

### Context

¿Qué se estaba probando?

### Challenge

¿Qué había que validar?

### Approach

¿Cómo se decidió probarlo?

### Execution

¿Qué se hizo?

### Finding

¿Qué se encontró?

### Resolution

¿Qué ocurrió después?

### Learning

¿Qué se aprendió?

No convertir cada case study en una historia artificial.

Debe sentirse como trabajo real.

---

# 27. Confidencialidad

Toda experiencia profesional real debe respetar confidencialidad.

Nunca incluir:

* nombres privados de clientes
* URLs internas
* credenciales
* tokens
* información personal
* datos reales de usuarios
* información financiera real
* screenshots con información sensible
* código propietario
* identificadores internos confidenciales

Cuando sea necesario:

```text
Fintech Platform
Mortgage Platform
Lending Platform
US Financial Product
```

Usar descripciones de dominio en lugar de revelar información confidencial.

---

# 28. IA

La IA puede mostrarse como herramienta de productividad y aprendizaje.

No presentarla como sustituto del criterio de QA.

Uso recomendado:

* generación de ideas de escenarios
* análisis inicial
* documentación
* refactorización
* generación de datos
* ayuda con código
* exploración de edge cases
* análisis de errores

Siempre mantener revisión humana.

Principio:

> IA puede ayudar a pensar más rápido. QA sigue siendo responsable de decidir qué significa calidad.

---

# 29. Diseño visual

La paleta existente es definitiva.

NO cambiar:

* colores
* tokens
* modo claro/oscuro
* identidad visual principal

La diferenciación visual debe venir de:

* tipografía
* spacing
* composición
* jerarquía
* grid
* contraste
* densidad
* microinteracciones
* navegación
* storytelling

No agregar colores nuevos sin una necesidad funcional clara.

---

# 30. Sistema visual actual

Paleta:

```text
--bg
--surface
--surface-2
--text-1
--text-2
--petrol
--ocre
--border
--pass
--fail
```

Utilizar siempre los tokens existentes.

No hardcodear colores en componentes.

Excepción:

Hero, que es always-light y mantiene sus colores definidos.

---

# 31. Tipografía

Sistema actual:

```text
font-display → DM Serif Display
font-body    → Inter
font-mono    → JetBrains Mono
```

Uso:

### DM Serif Display

* grandes headings
* títulos editoriales
* frases principales

### Inter

* contenido
* descripción
* navegación
* experiencia

### JetBrains Mono

* labels
* IDs
* metadata
* status
* tags
* información técnica

No abusar de la tipografía mono.

---

# 32. Dirección visual

El sitio debe sentirse:

**editorial + técnico + humano**

No:

**dashboard corporativo**

No:

**landing page SaaS genérica**

No:

**CV convertido en página web**

La interfaz debe tener personalidad sin sacrificar legibilidad.

---

# 33. Editorial Layout

Las secciones principales utilizan:

```text
[ Label + Heading ] | [ Content ]
```

Desktop:

```text
260px | 1px | 1fr
```

Mobile:

```text
Heading
↓
Content
```

El divisor debe ser una columna independiente.

Nunca utilizar `border-r` en el contenedor izquierdo si provoca que el texto se acerque o toque la línea.

---

# 34. Presentación de información

Evitar grandes bloques de texto.

Preferir:

* frases cortas
* metadata
* labels
* números
* pequeños bloques
* listas
* tarjetas cuando tengan propósito
* jerarquía visual

El usuario debe poder escanear el sitio rápidamente.

---

# 35. UX del portfolio

El portfolio también debe ser tratado como un producto.

Antes de considerar una sección terminada:

* ¿se entiende?
* ¿se puede escanear?
* ¿la jerarquía es clara?
* ¿el usuario sabe dónde está?
* ¿hay información repetida?
* ¿hay demasiado texto?
* ¿hay elementos que parecen interactivos pero no lo son?
* ¿funciona en mobile?
* ¿el contraste es correcto?
* ¿los links funcionan?
* ¿el contenido está traducido?

---

# 36. Hero

El Hero actual utiliza split layout:

```text
Left → Petrol / identity
Right → Cream / profile
```

Debe permanecer:

```text
height: 100svh
overflow: hidden
```

Headline:

> Probar como QA, pensar como usuario.

Pillars actuales:

* Calidad
* Metodología
* Excelencia
* IA aplicada

No modificar el concepto sin una razón clara.

---

# 37. Home structure

Orden conceptual recomendado:

```text
Hero
↓
How I Think
↓
About
↓
Skills
↓
Experience
↓
Training
↓
Professional Competencies
↓
Contact
```

El objetivo es contar una historia:

```text
Who I am
↓
How I think
↓
What I can do
↓
Where I learned it
↓
What I have done
↓
How I work
↓
Contact
```

---

# 38. Work section

`/work` debe funcionar como una demostración práctica.

No debe sentirse como una lista de proyectos.

Debe mostrar diferentes capas del trabajo:

```text
Bug Reports
Test Cases
Automation
CI
Reports
```

Siempre priorizar calidad de presentación sobre cantidad.

---

# 39. Bug Report UI

Severity y Priority:

```text
justify-end
```

Environment / Device / Browser:

```text
justify-end
```

PASS / FAIL:

usar:

```text
--pass
--fail
```

Gherkin:

usar colores semánticos según keyword.

---

# 40. Test Case UI

Los Test Cases deben ser expandibles cuando el contenido sea demasiado largo.

Header:

```text
ID + Bug ID
```

usar:

```text
items-baseline
```

cuando los tamaños de texto sean diferentes.

Mostrar información técnica como metadata, no como párrafos.

---

# 41. Datos y contenido

Fuente única de verdad:

```text
src/data/profile.ts
src/data/translations.ts
src/data/workTranslations.ts
```

Nunca hardcodear contenido profesional dentro de componentes.

Todo nuevo contenido visible debe existir en:

```text
es
en
```

No agregar contenido en un idioma solamente.

---

# 42. Traducciones

Idiomas:

```text
es
en
```

Las traducciones deben conservar el significado, no traducir literalmente cuando eso produzca una frase poco natural.

Terminología técnica debe mantenerse correctamente.

Ejemplos:

```text
Bug
Test Case
Regression
Retest
Severity
Priority
Environment
Automation
Deployment
Sprint
Requirement
```

No traducir términos técnicos cuando la traducción empeore la claridad profesional.

---

# 43. Experience writing style

La experiencia debe utilizar verbos concretos.

Preferir:

* Analicé
* Diseñé
* Ejecuté
* Automaticé
* Validé
* Investigué
* Documenté
* Implementé
* Colaboré
* Acompañé
* Mejoré

Evitar:

* "fui responsable de garantizar la excelencia"
* "aseguré la máxima calidad"
* "lideré estratégicamente la transformación"
* "impulsé soluciones innovadoras"

salvo que exista evidencia concreta.

---

# 44. Professional competencies

Competencias principales:

```text
Pensamiento analítico
Pensamiento crítico
Ownership
Resolución de problemas
Comunicación efectiva
Gestión de prioridades
Liderazgo y mentoría
```

Las descripciones deben ser breves y concretas.

Ejemplo:

```text
Pensamiento analítico
Entender el sistema antes de empezar a probarlo.
```

No utilizar definiciones genéricas de recursos humanos.

---

# 45. Personal voice

La comunicación del portfolio debe sonar:

* directa
* clara
* humana
* profesional
* segura
* curiosa

No debe sonar:

* arrogante
* excesivamente formal
* motivacional
* artificial
* excesivamente corporativa
* generada por IA

Regla:

> Si una frase podría aparecer en cualquier portfolio de QA del mundo, intentar hacerla más específica a Maximiliano.

---

# 46. Claims y seniority

No exagerar experiencia.

Utilizar:

```text
QA Tester Semi-Senior
```

No utilizar automáticamente:

```text
Senior QA Engineer
QA Lead
QA Architect
Expert
Specialist
Authority
```

salvo que exista una razón real y explícita.

El portfolio debe mostrar crecimiento hacia mayor autonomía sin inventar responsabilidades.

---

# 47. Formación

La formación debe mostrar aprendizaje continuo.

Actualmente:

```text
ISTQB CTFL — En curso

AWS para Testers
Cypress Automation Testing
Software Testing
Exploratory Testing
Python
Full Stack
JavaScript
TypeScript
```

No convertir la sección en el elemento principal del portfolio.

Los certificados respaldan la experiencia.

No reemplazan la experiencia.

---

# 48. Contact

El contacto debe ser simple.

Debe quedar claro:

* quién es Maximiliano
* qué busca
* cómo contactarlo

Evitar formularios innecesariamente complejos.

---

# 49. Accesibilidad

Toda nueva UI debe considerar:

* semantic HTML
* keyboard navigation
* focus states
* labels
* aria cuando sea necesario
* contraste
* reduced motion cuando corresponda
* alt text
* botones reales para acciones

No usar `div` como botón si existe un `<button>` apropiado.

---

# 50. Responsive

Todo componente nuevo debe probarse como mínimo en:

```text
Mobile
Tablet
Desktop
Large Desktop
```

Nunca diseñar solamente para desktop.

Particular atención a:

* grids
* tablas
* chips
* cards
* headings
* navegación
* Hero
* metadata

---

# 51. Performance

Evitar:

* imágenes innecesarias
* JavaScript innecesario
* client components innecesarios
* polling innecesario
* requests duplicados
* dependencias innecesarias

Preferir Server Components.

Utilizar `use client` únicamente cuando exista una necesidad real de:

* state
* browser API
* interaction
* event handlers

---

# 52. Integración Jira

Route:

```text
src/app/api/jira-sprints/route.ts
```

Cache server-side:

```text
15s
```

Cada issue debe proporcionar:

```text
url
```

con formato:

```text
${BASE}/browse/${key}
```

No exponer credenciales en frontend.

---

# 53. Integración GitHub

Route:

```text
src/app/api/cypress-status/route.ts
```

Debe manejar:

* runs
* status
* conclusion
* branch
* duration
* tcCoverage

No exponer `GITHUB_TOKEN`.

---

# 54. Polling

Jira y CI son procesos independientes.

### Jira

```text
60 seconds
```

mientras exista sprint activo.

Debe detenerse automáticamente cuando ya no sea necesario.

### CI

```text
30 seconds
```

mientras existan runs en progreso.

Debe detenerse automáticamente cuando finalicen.

Nunca convertir ambos procesos en un único polling loop.

---

# 55. Smart updates

Cuando se comparen respuestas de API:

utilizar comparación para evitar renders innecesarios.

La idea actual de:

```text
JSON.stringify comparison
```

puede mantenerse si continúa siendo apropiada.

No introducir state updates cuando la información realmente no cambió.

---

# 56. Environment variables

Variables requeridas:

```text
JIRA_BASE_URL
JIRA_EMAIL
JIRA_API_TOKEN
JIRA_BOARD_ID
GITHUB_TOKEN
```

Nunca hardcodear:

* tokens
* emails
* URLs privadas
* secrets

Nunca imprimir secrets en logs.

---

# 57. Git workflow

Branch principal:

```text
main
```

Production:

```text
main → Vercel production
```

Branch de diseño:

```text
design/editorial-hero
```

Los cambios experimentales de diseño deben realizarse en branch.

No tocar `main` directamente para experimentación.

---

# 58. Cambios de contenido

Si el cambio es:

* nombre
* experiencia
* skills
* formación
* descripción
* traducción
* work sample

editar:

```text
src/data/profile.ts
src/data/translations.ts
src/data/workTranslations.ts
```

No modificar componentes para cambiar texto.

---

# 59. Cambios de diseño

Antes de cambiar una sección existente, comprobar:

1. ¿respeta la paleta?
2. ¿respeta la tipografía?
3. ¿respeta el grid?
4. ¿respeta mobile?
5. ¿mejora realmente la jerarquía?
6. ¿reduce o aumenta ruido?
7. ¿mejora la lectura?
8. ¿mantiene la identidad editorial?

No cambiar diseño simplemente porque "se ve más moderno".

---

# 60. Nueva sección

Toda nueva sección debe responder primero:

```text
¿Qué información aporta?
¿Por qué existe?
¿A quién ayuda?
¿Dónde encaja dentro de la historia?
```

Si no aporta información nueva, no crearla.

Mantener el layout editorial:

```text
260px | 1px | 1fr
```

en desktop.

---

# 61. Microinteracciones

Las animaciones deben ser:

* sutiles
* rápidas
* funcionales
* consistentes

Utilizarlas para:

* feedback
* navegación
* revelar información
* estados
* hover

No utilizar animaciones para decorar sin propósito.

---

# 62. Visual hierarchy

Prioridad visual:

```text
1. Identity
2. Main message
3. Section heading
4. Key information
5. Supporting information
6. Metadata
```

No competir visualmente con el contenido principal.

---

# 63. Anti-patterns

No hacer:

* exceso de cards
* exceso de badges
* exceso de colores
* gradientes innecesarios
* glassmorphism genérico
* dashboards innecesarios
* animaciones excesivas
* textos gigantes sin propósito
* métricas inventadas
* barras de skill porcentuales
* "10/10 JavaScript"
* estrellas de nivel
* claims sin evidencia

Evitar especialmente:

```text
★★★★★
90% Cypress
95% QA
Expert in...
```

No representan correctamente el nivel profesional.

---

# 64. Portfolio QA como producto QA

Claude debe tratar el propio portfolio como una aplicación que necesita testing.

Cada cambio relevante debe considerar:

### Functional

¿Funciona?

### Visual

¿Se ve correctamente?

### Responsive

¿Funciona en diferentes tamaños?

### Accessibility

¿Se puede utilizar correctamente?

### Performance

¿Agrega coste innecesario?

### Integration

¿Rompe Jira/GitHub/Cypress?

### Content

¿Está correctamente traducido?

### Regression

¿Rompe otra sección?

---

# 65. Definition of Done

Un cambio está terminado cuando:

```text
✓ Funciona
✓ Respeta el diseño
✓ Respeta la paleta
✓ Es responsive
✓ No rompe otras secciones
✓ No agrega client-side JS innecesario
✓ Tiene traducción ES/EN
✓ Mantiene accesibilidad
✓ No expone secrets
✓ No introduce código duplicado innecesario
✓ Fue revisado visualmente
✓ Fue probado en el flujo correspondiente
```

---

# 66. Antes de modificar código

Checklist obligatorio:

```text
1. Entender el objetivo.
2. Identificar qué archivos son responsables.
3. Revisar componentes existentes antes de crear nuevos.
4. Revisar los datos antes de hardcodear contenido.
5. Revisar tokens antes de introducir estilos.
6. Verificar si existe un patrón reutilizable.
7. Evitar refactors no relacionados.
8. Implementar el cambio mínimo necesario.
9. Revisar responsive.
10. Revisar regresiones.
```

---

# 67. Principio de minimal change

No refactorizar todo el proyecto para resolver un problema puntual.

Preferir:

```text
small change
→ verify
→ continue
```

sobre:

```text
large refactor
→ introduce unrelated risk
```

Los refactors solamente deben hacerse cuando aporten un beneficio claro.

---

# 68. Prioridad de decisiones

Cuando existan conflictos, priorizar:

```text
1. Correctness
2. User experience
3. Accessibility
4. Maintainability
5. Performance
6. Visual polish
```

---

# 69. Regla final

El portfolio debe comunicar una idea simple:

> **Maximiliano no solamente ejecuta pruebas. Entiende lo que está probando, piensa en el usuario, analiza riesgos, comunica problemas y busca mejorar continuamente la calidad.**

La tecnología es parte de su perfil.

Pero no es su identidad completa.

La identidad profesional debe ser:

**QA + pensamiento crítico + curiosidad + tecnología + visión de usuario + aprendizaje continuo.**

---

# 70. Mobile & Responsive — Reglas obligatorias

## Principio fundamental

El portfolio debe verse y funcionar correctamente en **todos los dispositivos**.

Responsive no es opcional. No es un ajuste posterior. Es parte del Definition of Done (§65).

Si un diseño no funciona bien en mobile, no se considera terminado.

Si el estilo de una sección no es cómodo o legible en pantallas chicas, debe crearse un **modelo alternativo mobile**, fiel a la identidad visual original (misma paleta, misma tipografía, mismo tono), pero con cambios de layout, tamaño y visibilidad que garanticen la mejor experiencia posible en ese viewport.

---

## Breakpoints (Tailwind v4)

| Clase Tailwind | Viewport mínimo | Dispositivos típicos              |
|----------------|-----------------|-----------------------------------|
| (sin prefijo)  | 0px             | Mobile portrait (base)            |
| `sm:`          | 640px           | Mobile landscape / tablet pequeño |
| `md:`          | 768px           | Tablet                            |
| `lg:`          | 1024px          | iPad Pro / laptop pequeño         |
| `xl:`          | 1280px          | Desktop estándar                  |
| `2xl:`         | 1536px          | Desktop ancho                     |

**Regla:** diseñar mobile-first. El estilo base (sin prefijo) es para mobile. Los prefijos agregan comportamiento para pantallas más grandes.

---

## Viewports de referencia para testing

Siempre verificar en al menos estos tamaños:

```
375px  — iPhone SE / iPhone 13 mini (viewport crítico)
390px  — iPhone 14 / 15
428px  — iPhone 14 Plus / 15 Plus
768px  — iPad Air portrait
1024px — iPad Pro / laptop
1280px — Desktop estándar
1440px — Desktop ancho
```

---

## Hero en mobile

El Hero usa un split layout horizontal que en desktop (≥640px) funciona bien.

En mobile, los dos paneles horizontales no son viables: el panel teal de 160px mínimo consume el 43% de una pantalla de 375px, dejando el contenido muy apretado.

**Comportamiento requerido en mobile (< 640px):**

```
┌──────────────────────┐
│   Logo (pequeño)     │  ← Panel teal compacto: ~80px de alto, 100% ancho
└──────────────────────┘
│                      │
│  Nombre              │
│  Rol                 │  ← Panel crema: flex-1, overflow-y: auto
│  Headline            │
│  Pillars             │
│  Links               │
│                      │
└──────────────────────┘
```

**Comportamiento en desktop (≥ 640px):**

```
┌──────────┬───────────────────────────┐
│  Logo    │  Nombre / Rol             │
│  grande  │  Headline                 │
│  (teal)  │  Pillars / Links          │
└──────────┴───────────────────────────┘
```

Implementación: usar `flex-col sm:flex-row` en el section. El panel izquierdo tiene `h-[80px] w-full sm:h-full sm:w-[clamp(160px,30%,300px)]`.

El logo debe ser más pequeño en mobile (40-48px) vs desktop (96px).

El texto "QA · ANALYTIC" se oculta en mobile (`hidden sm:block`).

El panel derecho debe tener `overflow-y: auto` en mobile para que el contenido pueda scrollearse si no entra en la altura restante.

---

## Navigation en mobile

Actualmente los links de navegación están ocultos en mobile (`hidden sm:flex`).

En mobile solo son visibles: botón Work/Portfolio + toggle de idioma.

**Documentado como limitación conocida.**

Si se agrega hamburger menu en el futuro, debe:
- tener `min-height: 44px` de touch target
- cerrar al hacer click en un link
- no bloquear el scroll del body cuando está abierto
- tener `aria-expanded` y `aria-controls` correctos

---

## Editorial grid en mobile

Todas las secciones usan `grid grid-cols-1 sm:grid-cols-[260px_1px_1fr]`.

En mobile colapsan a 1 columna. El divisor `hidden sm:block` desaparece.

**Orden en mobile:**

```
Label (ocre, mono)
↓
Heading (display)
↓
Content
```

Separados con `pb-6 sm:pb-0` en el bloque izquierdo.

Padding mínimo mobile: `px-5` (20px) — nunca menos de 16px.

---

## Tipografía en mobile

Usar `clamp()` para headings que deben escalar:

```css
font-size: clamp(min, preferred-vw, max)
```

Ejemplos aplicados en el proyecto:

```
h1 hero:   clamp(2rem, 4.5vw, 3.8rem)
subtítulo: clamp(0.9rem, 1.4vw, 1rem)
```

Tamaños mínimos legibles:

| Elemento         | Mínimo    |
|------------------|-----------|
| Texto corrido    | 0.9rem    |
| Labels / mono    | 0.6rem    |
| Headings mobile  | 1.5rem    |
| Hero headline    | 2rem      |

No usar fuentes por debajo de `0.6rem` en mobile.

---

## Touch targets

Todo elemento interactivo (botón, link, toggle) debe tener un área mínima de toque de `44px × 44px`.

Si el elemento visualmente es más chico, agregar padding invisible para cumplir el mínimo.

Ejemplos de implementación:

```tsx
// Mal — área de toque muy chica
<button className="text-[0.7rem] px-2 py-1">Toggle</button>

// Bien — padding aumentado para touch
<button className="text-[0.7rem] px-3 py-[10px]">Toggle</button>
```

---

## Cards y grids en mobile

| Elemento              | Desktop          | Mobile          |
|-----------------------|------------------|-----------------|
| Skills cards          | grid-cols-2      | grid-cols-1     |
| Philosophy cards      | grid-cols-3      | grid-cols-1     |
| Sprint stats          | grid-cols-3      | grid-cols-1     |
| Competency cards      | grid-cols-2      | grid-cols-1     |
| Sprint CI details     | flex-wrap        | flex-wrap ✓     |
| Bug report chips      | justify-end      | justify-end ✓   |

---

## Overflow y scroll horizontal

**Nunca** debe existir scroll horizontal en el `body`.

Elementos que pueden generar overflow horizontal y necesitan contenedor propio:

```tsx
// Siempre envolver en overflow-x: auto
<div className="overflow-x-auto">
  <pre>...</pre>  // Gherkin code blocks
  <table>...</table>
  <div className="flex gap-... [ancho fijo]">
</div>
```

Esto ya está aplicado en el bloque Gherkin de WorkContent. Mantener para cualquier elemento que tenga contenido de ancho variable.

---

## Modelo alternativo mobile

Si un componente tiene un layout que no se adapta bien a mobile con simples cambios de clase, se crea un **modelo alternativo** con estas reglas:

1. **Misma paleta**: exactamente los mismos tokens CSS (`--petrol`, `--ocre`, `--bg`, etc.).
2. **Misma tipografía**: DM Serif Display, Inter, JetBrains Mono.
3. **Misma información**: sin eliminar contenido, solo reorganizar.
4. **Layout simplificado**: single column, sin grids complejos, sin divisores verticales.
5. **Visible en mobile**: `block sm:hidden` o `flex sm:hidden`.
6. **Oculto en desktop**: el componente original `hidden sm:block` o `hidden sm:flex`.

Ejemplo de uso: si el Hero split no es viable en mobile, el modelo alternativo mobile (`sm:hidden`) muestra el contenido en columna, y el Hero original (`hidden sm:flex`) solo aparece en desktop.

**Naming convention**: si se crea un componente alternativo mobile, nombrarlo con sufijo `Mobile`:

```
Hero.tsx         — desktop (sm+)
HeroMobile.tsx   — mobile (< sm)
```

O implementarlo internamente con secciones condicionales.

---

## Imágenes y assets en mobile

- Siempre `max-width: 100%` en imágenes.
- Usar `width` y `height` explícitos para evitar layout shift (CLS).
- SVGs: siempre responsive con `viewBox` definido.
- No incluir imágenes pesadas sin optimizar (Next.js `<Image>` cuando corresponda).

---

## Performance en mobile

En redes móviles, la performance importa más.

- Preferir Server Components (no `use client`) cuando no sea necesario.
- No cargar dependencias JavaScript pesadas sin necesidad real.
- El polling (Jira: 60s, CI: 30s) ya está optimizado con parada automática — mantenerlo así.
- Evitar re-renders innecesarios: el `JSON.stringify` comparison en polling es correcto.
- No agregar animaciones pesadas en elementos que se renderizan muchas veces.

---

## Checklist responsive antes de considerar terminado

```
✓ Funciona en 375px (iPhone SE)
✓ Funciona en 390px (iPhone 14)
✓ Funciona en 768px (iPad)
✓ Funciona en 1280px (Desktop)
✓ No hay scroll horizontal en ningún viewport
✓ Touch targets ≥ 44px en elementos interactivos
✓ Texto legible sin zoom (mínimo 0.9rem para contenido)
✓ Los grids colapsan correctamente a 1 columna en mobile
✓ El Hero se muestra en stack vertical en mobile
✓ El contenido no se corta ni se superpone
✓ Los chips y badges son legibles en mobile
✓ Las cards de bugs y TCs son usables en mobile
✓ El CI widget funciona en mobile
```

---

## Anti-patterns responsive

No hacer:

```
// Nunca hardcodear anchos fijos que no funcionen en mobile
style={{ width: "920px" }}

// Nunca usar px en lugar de rem para tipografía
style={{ fontSize: "14px" }}  // → usar 0.875rem

// Nunca asumir que el desktop layout escala bien a mobile
// Si no escala, crear modelo alternativo

// Nunca ocultar información importante solo en mobile
// Reorganizar, no eliminar

// Nunca usar position: fixed en mobile sin probar el comportamiento
// del keyboard virtual (iOS/Android)
```
