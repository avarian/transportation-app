function Footer() {
  let date = new Date().getFullYear();
  return (
    <footer
      className="py-3 my-4 container-fluid"
      style={{
        backgroundColor: "#e3f2fd",
      }}
    >
      <p className="text-center text-body-secondary">&copy; {date} MyNamus</p>
    </footer>
  );
}

export default Footer;
