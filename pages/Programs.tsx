import React from 'react';
import { 
  Star, 
  BookOpen, 
  CheckCircle, 
  ArrowRight, 
  Laptop, 
  Users, 
  Menu
} from 'lucide-react';

const Programs: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
      {/* Header Text */}
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">Elige tu camino al éxito</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-light">
          Prepárate con los mejores profesores y material actualizado para la PAES.
        </p>
      </div>

      {/* Destacado Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
          <Star className="text-primary fill-current" /> Destacado del Mes
        </h2>
        
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700 flex flex-col md:flex-row relative transform hover:scale-[1.01] transition-transform duration-300">
          <div className="absolute top-0 right-0 bg-accent-green text-white text-xs font-bold px-4 py-2 rounded-bl-xl z-20 uppercase tracking-wide shadow-sm">
            Más Popular
          </div>
          
          <div className="md:w-5/12 bg-blue-100 dark:bg-gray-700 relative min-h-[250px] overflow-hidden">
             {/* Abstract shape or image placeholder */}
             <img 
               src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
               alt="Estudiantes estudiando" 
               className="w-full h-full object-cover opacity-90 mix-blend-multiply"
             />
             <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                <BookOpen className="text-white w-20 h-20 drop-shadow-lg opacity-90" />
             </div>
          </div>
          
          <div className="p-8 md:w-7/12 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Programa de Comprensión Lectora Anual</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-sm">
                Domina todas las estrategias de lectura necesarias para la PAES. Incluye clases en vivo, material descargable, ensayos ilimitados y corrección personalizada de tus avances. Ideal para quienes buscan el máximo puntaje.
              </p>
              
              <ul className="space-y-3 mb-8">
                {["Clases semanales en vivo", "Acceso a plataforma 24/7", "Ensayos nacionales"].map((item, i) => (
                  <li key={i} className="flex items-center text-sm text-gray-600 dark:text-gray-400 font-medium">
                    <CheckCircle className="text-green-500 w-5 h-5 mr-3" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between border-t border-gray-100 dark:border-gray-700 pt-6 gap-4 sm:gap-0">
              <div>
                <span className="text-xs text-gray-500 dark:text-gray-400 block font-semibold uppercase tracking-wider mb-1">Precio anual</span>
                <span className="text-4xl font-black text-primary dark:text-blue-400 tracking-tight">$346.000</span>
              </div>
              <button className="w-full sm:w-auto bg-primary hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2">
                Inscribirme <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Plans Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Online Plans */}
        <section>
          <div className="flex items-center gap-3 mb-6 border-b border-gray-200 dark:border-gray-700 pb-4">
            <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-primary">
              <Laptop className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Planes Online</h2>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-shadow group">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">Pack Matemáticas + Ciencias</h3>
                  <p className="text-xs text-primary font-bold mt-1 uppercase tracking-wide">100% Online - A tu ritmo</p>
                </div>
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-[10px] font-bold px-2 py-1 rounded uppercase">Recomendado</span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 h-10">
                Preparación integral para las pruebas obligatorias de matemáticas y ciencias. Acceso completo a videoteca y banco de preguntas.
              </p>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-2xl font-bold text-gray-900 dark:text-white">$280.000</span>
                <button className="text-primary font-bold text-sm hover:underline flex items-center">Ver detalles <ArrowRight className="w-3 h-3 ml-1" /></button>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-shadow group">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">Plan Intensivo Historia</h3>
                  <p className="text-xs text-primary font-bold mt-1 uppercase tracking-wide">Clases Grabadas + Tutorías</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 h-10">
                Enfocado en el temario de Historia y Ciencias Sociales. Ideal para repasar contenidos clave en poco tiempo.
              </p>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-2xl font-bold text-gray-900 dark:text-white">$150.000</span>
                <button className="text-primary font-bold text-sm hover:underline flex items-center">Ver detalles <ArrowRight className="w-3 h-3 ml-1" /></button>
              </div>
            </div>
          </div>
        </section>

        {/* Presential Plans */}
        <section>
          <div className="flex items-center gap-3 mb-6 border-b border-gray-200 dark:border-gray-700 pb-4">
             <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg text-green-600">
              <Users className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Planes Presenciales</h2>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-shadow relative overflow-hidden group">
              <div className="absolute left-0 top-0 h-full w-1 bg-accent-green"></div>
              <div className="flex justify-between items-start mb-3">
                <div className="pl-2">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-green-600 transition-colors">Preuniversitario Full Presencial</h3>
                  <p className="text-xs text-green-600 dark:text-green-400 font-bold mt-1 uppercase tracking-wide">Sedes: Santiago, Viña, Concepción</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 h-10 pl-2">
                Experiencia completa en aula. Clases presenciales para todas las materias, orientación vocacional personalizada y talleres de estudio.
              </p>
              <div className="flex items-center justify-between mt-auto pl-2">
                <span className="text-2xl font-bold text-gray-900 dark:text-white">$890.000</span>
                <button className="text-green-600 font-bold text-sm hover:underline flex items-center">Ver sedes <ArrowRight className="w-3 h-3 ml-1" /></button>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-shadow relative overflow-hidden group">
              <div className="absolute left-0 top-0 h-full w-1 bg-accent-green"></div>
              <div className="flex justify-between items-start mb-3">
                 <div className="pl-2">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-green-600 transition-colors">Plan Híbrido Matemáticas</h3>
                  <p className="text-xs text-green-600 dark:text-green-400 font-bold mt-1 uppercase tracking-wide">Presencial + Plataforma Online</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 h-10 pl-2">
                Combina lo mejor de dos mundos. Asiste a clases prácticas de resolución de problemas y estudia la teoría online a tu ritmo.
              </p>
              <div className="flex items-center justify-between mt-auto pl-2">
                <span className="text-2xl font-bold text-gray-900 dark:text-white">$450.000</span>
                <button className="text-green-600 font-bold text-sm hover:underline flex items-center">Ver horarios <ArrowRight className="w-3 h-3 ml-1" /></button>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Bottom CTA */}
      <div className="mt-16 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-r from-blue-900 to-primary relative">
        {/* Pattern */}
        <div 
          className="absolute inset-0 opacity-10" 
          style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}
        ></div>
        
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-10 md:p-14">
          <div className="md:w-2/3 mb-8 md:mb-0 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">¿No sabes qué estudiar?</h2>
            <p className="text-blue-100 text-lg md:text-xl font-medium">Realiza nuestro Test Vocacional gratuito y descubre tu carrera ideal.</p>
          </div>
          <div className="md:w-1/3 flex justify-center md:justify-end">
            <button className="bg-white text-blue-900 hover:bg-gray-100 font-extrabold py-4 px-10 rounded-full shadow-lg transform transition hover:-translate-y-1 text-sm tracking-wider uppercase">
              HACER TEST GRATIS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;