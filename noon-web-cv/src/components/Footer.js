import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return(
 <footer className="bg-dark text-white text-center py-5 px-5">
        <p className="mb-0">&copy; {currentYear} Noon Web CV. All rights reserved.</p>
      </footer>
      );
};
      export default Footer;