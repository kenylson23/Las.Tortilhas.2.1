import { motion } from "framer-motion";
import { MENU_ITEMS } from "../lib/constants";

export default function SimpleMenuShowcase() {
  const handleOrderItem = (itemName: string) => {
    // Redirect to WhatsApp with order details
    const message = encodeURIComponent(`Olá! Gostaria de pedir: ${itemName}`);
    window.location.href = `https://wa.me/244949639932?text=${message}`;
  };

  return (
    <section id="menu" className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nossos <span className="text-red-600">Pratos Especiais</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Sabores autênticos do México preparados com ingredientes frescos e muito amor
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MENU_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110" 
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-red-600">{item.price}</span>
                    <button 
                      onClick={() => handleOrderItem(item.name)}
                      className="bg-green-700 text-white px-3 sm:px-4 py-2 rounded-full hover:bg-green-800 transition-colors transform hover:scale-105 text-sm sm:text-base"
                    >
                      Pedir
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button 
            onClick={() => {
              const message = encodeURIComponent('Olá! Gostaria de ver o menu completo do Las Tortillas Mexican Grill.');
              window.location.href = `https://wa.me/244949639932?text=${message}`;
            }}
            className="bg-red-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-red-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span className="hidden sm:inline">Ver Menu Completo</span>
            <span className="sm:hidden">Menu Completo</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}