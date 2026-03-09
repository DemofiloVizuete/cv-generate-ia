const FooterSection = ({ t }) => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6 text-center">
        <p className="text-muted-foreground">
          © 2025 Demófilo Vizuete Diaz. {t('footer.rights')}
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
