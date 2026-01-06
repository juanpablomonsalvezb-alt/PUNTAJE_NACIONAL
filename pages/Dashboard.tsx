import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ChevronRight, 
  Bot, 
  Calculator, 
  MessageCircle, 
  Sprout,
  ClipboardList,
  FileText,
  Video,
  BookOpen,
  Award,
  Globe
} from 'lucide-react';

const Dashboard: React.FC = () => {
  const quickLinks = [
    { icon: null, text: "¿Cómo usar Puntaje Nacional?", path: "#" },
    { icon: FileText, text: "Hacer ensayo", path: "#" },
    { icon: ClipboardList, text: "Subir hoja de respuestas", path: "#" },
    { icon: Video, text: "Clases en vivo: PAES", path: "#" },
    { icon: BookOpen, text: "Planes de Estudio", path: "/programas" },
    { icon: Award, text: "Logros", path: "#" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Hero Banner */}
      <div className="w-full mb-8 rounded-xl overflow-hidden shadow-lg group relative h-48 sm:h-64 bg-gradient-to-r from-[#0f4c81] to-[#0083cb]">
        {/* Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-10" 
          style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }}
        ></div>
        
        <div className="relative h-full flex flex-col sm:flex-row items-center justify-between px-8 sm:px-16 text-white">
          <div className="flex-1 z-10 text-center sm:text-left mt-6 sm:mt-0">
            <h1 className="text-3xl sm:text-5xl font-black mb-2 tracking-tight drop-shadow-md">
              <span className="text-accent-green">Haz</span> el TEST <br /> vocacional
            </h1>
          </div>
          
          <div className="flex-1 flex justify-center sm:justify-end z-10 mt-6 sm:mt-0">
            <button className="bg-white text-primary font-bold py-3 px-8 rounded-full shadow-lg transform group-hover:scale-105 transition-all duration-200 cursor-pointer flex items-center gap-2 hover:bg-gray-50">
              HAZLO AQUÍ
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          
          <div className="absolute right-6 bottom-4 opacity-50 hidden sm:block">
            <div className="text-white text-right flex flex-col items-center">
              <Sprout className="w-16 h-16 mb-1" />
              <div className="text-sm font-bold leading-tight">puntaje<br />nacional.cl</div>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-light mb-6 text-gray-700 dark:text-gray-200">Bienvenid@</h2>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column - Quick Links */}
        <div className="lg:col-span-4 space-y-4">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden divide-y divide-gray-100 dark:divide-gray-700">
            {quickLinks.map((item, idx) => (
              <Link 
                key={idx}
                to={item.path} 
                className="block px-6 py-4 text-primary hover:bg-blue-50 dark:hover:bg-gray-700 flex justify-between items-center transition-colors group"
              >
                <div className="flex items-center gap-3">
                  {item.icon && <item.icon className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />}
                  <span className="font-medium text-gray-700 dark:text-gray-200 group-hover:text-primary transition-colors">{item.text}</span>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-primary transition-colors" />
              </Link>
            ))}
          </div>
        </div>

        {/* Middle Column - Monthly Progress */}
        <div className="lg:col-span-5 space-y-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-primary rounded-full text-white shadow-sm">
              <ClipboardList className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-medium text-gray-800 dark:text-gray-100">PAES Regular mensuales</h3>
          </div>

          <div className="bg-gradient-to-r from-purple-500 to-purple-700 rounded-xl p-5 flex items-center justify-between text-white shadow-md relative overflow-hidden">
            <div className="z-10">
              <p className="font-bold text-sm sm:text-base">
                Tus ensayos mensuales ahora con: <span className="text-accent-green font-black text-lg ml-1">NutrIA</span>
              </p>
            </div>
            <div className="z-10">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm shadow-inner border border-white/30">
                <Bot className="w-7 h-7" />
              </div>
            </div>
            <div className="absolute inset-0 bg-white opacity-5 transform -skew-x-12 translate-x-1/2"></div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex justify-between items-center mb-6">
              <span className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide">Este mes:</span>
              <div className="text-xs text-right text-gray-500 dark:text-gray-500 leading-tight">
                Últimos <br /> resultados
              </div>
            </div>

            {/* Math */}
            <div className="flex items-start gap-4 mb-6 relative">
              <div className="w-12 h-12 bg-primary text-white flex items-center justify-center text-xl font-bold rounded-lg shadow-md flex-shrink-0">
                <Calculator className="w-6 h-6" />
              </div>
              <div className="flex-grow pt-1">
                <h4 className="text-sm font-bold text-gray-800 dark:text-white mb-2">Competencia Matemática</h4>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 text-xs rounded-md font-bold uppercase tracking-wider">No disponible</span>
              </div>
              <div className="text-xs text-gray-400 self-center font-medium">
                Por definir
              </div>
            </div>

            <hr className="border-gray-100 dark:border-gray-700 mb-6" />

            {/* Reading */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-accent-green text-white flex items-center justify-center text-xl font-bold rounded-lg shadow-md flex-shrink-0">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div className="flex-grow pt-1">
                <h4 className="text-sm font-bold text-gray-800 dark:text-white mb-2">Competencia Lectora</h4>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 text-xs rounded-md font-bold uppercase tracking-wider">No disponible</span>
              </div>
              <div className="text-xs text-gray-400 self-center font-medium">
                Por definir
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Promos */}
        <div className="lg:col-span-3 space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md group cursor-pointer relative h-48 bg-cover bg-center transition-transform hover:-translate-y-1 duration-300" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')" }}>
            <div className="absolute inset-0 bg-blue-900/80 flex flex-col justify-center items-center p-4 text-center backdrop-blur-[1px]">
              <div className="text-white mb-3 flex items-center gap-1 text-xs opacity-80">
                <Globe className="w-3 h-3" /> puntajenacional.cl
              </div>
              <h3 className="text-white text-sm font-medium mb-4 leading-relaxed px-2">
                Si quieres <span className="text-yellow-400 font-bold">ayuda</span> para saber qué estudiar, prueba realizando <span className="text-yellow-400 font-bold">nuestro TEST</span>
              </h3>
              <button className="bg-white text-primary text-xs font-bold py-2 px-6 rounded-full shadow hover:bg-gray-100 transition-colors uppercase tracking-wide">
                HAZLO AQUÍ
              </button>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md group cursor-pointer relative h-48 bg-cover bg-center transition-transform hover:-translate-y-1 duration-300" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')" }}>
            <div className="absolute inset-0 bg-slate-900/60 hover:bg-slate-900/50 transition-colors flex flex-col justify-end p-6">
              <div className="text-white mb-2 flex items-center gap-1 text-[10px] opacity-80">
                <Globe className="w-3 h-3" /> puntajenacional.cl
              </div>
              <h3 className="text-white text-xl font-bold leading-tight">Decidiste dar<br />la PAES</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;