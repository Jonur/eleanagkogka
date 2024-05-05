const Footer: React.FC = () => {
  const thisYear = new Date().getFullYear();

  return (
    <footer className="mt-[60px] flex flex-col items-center">
      <span>&copy;{`${thisYear} Designed by Eleana Gkogka`}</span>
    </footer>
  );
};

export default Footer;
