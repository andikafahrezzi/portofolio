export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 max-w-xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>

      <form
        action="mailto:emailkamu@gmail.com"
        method="POST"
        className="space-y-4"
      >
        <input
          type="text"
          placeholder="Nama"
          className="w-full p-3 bg-slate-900 rounded"
        />
        <textarea
          placeholder="Pesan"
          className="w-full p-3 bg-slate-900 rounded h-32"
        />
        <button className="w-full bg-white text-black py-3 rounded font-semibold">
          Kirim Pesan
        </button>
      </form>

      <a
        href="https://wa.me/628xxxxxxxxxx"
        className="block text-center mt-6 text-green-400"
      >
        Atau hubungi via WhatsApp
      </a>
    </section>
  );
}
