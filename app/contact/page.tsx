export default function Contact() {
  return (
    <main className="container">
      <h2>Contact</h2>

      <p>Email: test@email.com</p>

      <form>
        <input placeholder="name" />
        <br />
        <input placeholder="email" />
        <br />
        <textarea placeholder="message"></textarea>
        <br />
        <button>send</button>
      </form>
    </main>
  );
}