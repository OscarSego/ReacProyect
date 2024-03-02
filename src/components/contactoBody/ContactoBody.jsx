import React from 'react';

function ContactPage() {
  return (
    <div className="max-w-md mx-auto mt-8 p-4 border border-gray-300 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Contacto</h1>
      <p className="mb-4">¡Hola! ¿Cómo podemos ayudarte? Envíanos un mensaje y te responderemos lo antes posible.</p>
      <form>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-semibold mb-1">Nombre:</label>
          <input type="text" id="name" name="name" required className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-semibold mb-1">Correo electrónico:</label>
          <input type="email" id="email" name="email" required className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-semibold mb-1">Mensaje:</label>
          <textarea id="message" name="message" rows="4" required className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Enviar</button>
      </form>
    </div>
  );
}

export default ContactPage;
