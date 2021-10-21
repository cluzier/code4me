import { tw } from 'twind';

const Footer = () => (
  <footer className={tw(`text-center bg-white border-t border-gray-200 pt-5 pb-5`)}>
    <p>Copyright &copy; <script>document.write(new Date().getFullYear())</script> Code4Me</p>
  </footer>
);

export default Footer;