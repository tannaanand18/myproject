import React from "react";

function Port() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      {/* Navbar */}
      <header className="flex justify-between items-center px-6 py-4 bg-gray-800 shadow">
        <h1 className="text-2xl font-bold text-cyan-400">Dev Portfolio</h1>
        <nav className="space-x-4">
          <a href="#about" className="hover:text-cyan-400">About</a>
          <a href="#projects" className="hover:text-cyan-400">Projects</a>
          <a href="#contact" className="hover:text-cyan-400">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center text-center h-[80vh]">
        <h2 className="text-4xl font-bold mb-4">Hi, </h2>
        <p className="text-lg text-gray-400 max-w-md">
          I'm a full-stack developer passionate about building web applications with React, Node.js, and Tailwind CSS.
        </p>
        <a href="#projects" className="mt-6 px-6 py-2 bg-cyan-500 rounded hover:bg-cyan-600 transition">See My Work</a>
      </section>

      {/* Projects */}
      <section id="projects" className="px-8 py-12 bg-gray-800">
        <h3 className="text-3xl font-semibold text-center mb-8">Projects</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((n) => (
            <div key={n} className="bg-gray-700 rounded p-4 hover:shadow-lg">
              <h4 className="text-xl font-bold mb-2">Project {n}</h4>
              <p className="text-sm text-gray-400">Brief description of your project {n} goes here.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-12 px-8">
        <h3 className="text-3xl font-semibold text-center mb-6">Get in Touch</h3>
        <form className="max-w-lg mx-auto space-y-4">
          <input type="text" placeholder="Name" className="w-full p-3 rounded bg-gray-800 text-white" />
          <input type="email" placeholder="Email" className="w-full p-3 rounded bg-gray-800 text-white" />
          <textarea placeholder="Message" className="w-full p-3 rounded bg-gray-800 text-white h-32"></textarea>
          <button type="submit" className="w-full bg-cyan-500 py-2 rounded hover:bg-cyan-600 transition">Send</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-center py-4">
        <p className="text-sm text-gray-500">© 2025 Anand Tanna. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Port;
