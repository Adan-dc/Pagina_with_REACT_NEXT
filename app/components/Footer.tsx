export default function Footer() {
  return (
    <footer className="bg-dark text-light text-center py-3 mt-3">
      <div className="container-fluid">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3327.625748287463!2d-70.72807298770644!3d-33.48509327326483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c3f38c24a4d5%3A0x3ad749a22cab764d!2sBotilleria%20J%26C!5e0!3m2!1ses-419!2scl!4v1793077061831!5m2!1ses-419!2scl"
          width="100%"
          height={300}
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <p className="mb-0">&copy; 2026 Botilleria J&C</p>
    </footer>
  );
}