import "./AnalisisDeDatos.css";
import CardAnalisis from "../../common/CardAnalisis";
import torta1 from "../../../../src/assets/img/torta1.jpeg"
import torta2 from "../../../../src/assets/img/torta2.jpeg"
import barras1 from "../../../../src/assets/img/barras1.jpeg"
import barras2 from "../../../../src/assets/img/barras2.jpeg"
import barras3 from "../../../../src/assets/img/barras3.jpeg"
import vectores1 from "../../../../src/assets/img/vectores1.jpeg"
import vectores2 from "../../../../src/assets/img/vectores2.jpeg"

export default function AnalisisDeDatos() {
 const datos = [
        {
            imagen: torta1,
            titulo: "Cantidad de Estudiantes por Mes",
            tipo: "Barras verticales",
            descripcion: "Muestra cuántos estudiantes se matricularon en cada mes del año.",
            analisis: [
                "Permite observar en qué meses ocurre el mayor ingreso de estudiantes.",
                "Meses con picos altos suelen coincidir con el inicio del año escolar.",
                "Ingresos en meses intermedios pueden deberse a traslados o reingresos."
            ],
            aplicacion: "Planificación administrativa, gestión de inscripciones, y refuerzo en momentos críticos del calendario escolar."
        },
        {
            imagen: torta2,
            titulo: "Cantidad de Estudiantes por Mes",
            tipo: "Barras verticales",
            descripcion: "Muestra cuántos estudiantes se matricularon en cada mes del año.",
            analisis: [
                "Permite observar en qué meses ocurre el mayor ingreso de estudiantes.",
                "Meses con picos altos suelen coincidir con el inicio del año escolar.",
                "Ingresos en meses intermedios pueden deberse a traslados o reingresos."
            ],
            aplicacion: "Planificación administrativa, gestión de inscripciones, y refuerzo en momentos críticos del calendario escolar."
        },
        {
            imagen: barras1,
            titulo: "Cantidad de Estudiantes por Mes",
            tipo: "Barras verticales",
            descripcion: "Muestra cuántos estudiantes se matricularon en cada mes del año.",
            analisis: [
                "Permite observar en qué meses ocurre el mayor ingreso de estudiantes.",
                "Meses con picos altos suelen coincidir con el inicio del año escolar.",
                "Ingresos en meses intermedios pueden deberse a traslados o reingresos."
            ],
            aplicacion: "Planificación administrativa, gestión de inscripciones, y refuerzo en momentos críticos del calendario escolar."
        },
        {
            imagen: barras2,
            titulo: "Cantidad de Estudiantes por Mes",
            tipo: "Barras verticales",
            descripcion: "Muestra cuántos estudiantes se matricularon en cada mes del año.",
            analisis: [
                "Permite observar en qué meses ocurre el mayor ingreso de estudiantes.",
                "Meses con picos altos suelen coincidir con el inicio del año escolar.",
                "Ingresos en meses intermedios pueden deberse a traslados o reingresos."
            ],
            aplicacion: "Planificación administrativa, gestión de inscripciones, y refuerzo en momentos críticos del calendario escolar."
        },
        {
            imagen: barras3,
            titulo: "Cantidad de Estudiantes por Mes",
            tipo: "Barras verticales",
            descripcion: "Muestra cuántos estudiantes se matricularon en cada mes del año.",
            analisis: [
                "Permite observar en qué meses ocurre el mayor ingreso de estudiantes.",
                "Meses con picos altos suelen coincidir con el inicio del año escolar.",
                "Ingresos en meses intermedios pueden deberse a traslados o reingresos."
            ],
            aplicacion: "Planificación administrativa, gestión de inscripciones, y refuerzo en momentos críticos del calendario escolar."
        },
        {
            imagen: vectores1,
            titulo: "Cantidad de Estudiantes por Mes",
            tipo: "Barras verticales",
            descripcion: "Muestra cuántos estudiantes se matricularon en cada mes del año.",
            analisis: [
                "Permite observar en qué meses ocurre el mayor ingreso de estudiantes.",
                "Meses con picos altos suelen coincidir con el inicio del año escolar.",
                "Ingresos en meses intermedios pueden deberse a traslados o reingresos."
            ],
            aplicacion: "Planificación administrativa, gestión de inscripciones, y refuerzo en momentos críticos del calendario escolar."
        },
        {
            imagen: vectores2,
            titulo: "Cantidad de Estudiantes por Mes",
            tipo: "Barras verticales",
            descripcion: "Muestra cuántos estudiantes se matricularon en cada mes del año.",
            analisis: [
                "Permite observar en qué meses ocurre el mayor ingreso de estudiantes.",
                "Meses con picos altos suelen coincidir con el inicio del año escolar.",
                "Ingresos en meses intermedios pueden deberse a traslados o reingresos."
            ],
            aplicacion: "Planificación administrativa, gestión de inscripciones, y refuerzo en momentos críticos del calendario escolar."
        }    
    ]

  return (
        <div className="analisisDeDatos">
            <h1 className="tituloAnalisis">Análisis de Datos Académicos</h1>
            <p>Explora información clave sobre el rendimiento y matrícula de estudiantes mediante gráficos visuales.</p>
            
            <div className="contenedorTarjetas">
                {datos.map((dato, index) => (
                    <CardAnalisis
                        key={index}
                        imagen={dato.imagen}
                        titulo={dato.titulo}
                        tipo={dato.tipo}
                        descripcion={dato.descripcion}
                        analisis={dato.analisis}
                        aplicacion={dato.aplicacion}
                    />
                ))}
            </div>
        </div>
  )
}
