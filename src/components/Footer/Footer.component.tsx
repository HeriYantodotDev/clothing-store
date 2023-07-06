const defaultFooterItem = {
  footerContent: 'Crafted with coffee and code by @HeriYantodotDev',
  websiteName: 'Cool Clothing Store😎',
};

export function Footer({
  footerProps = defaultFooterItem,
}) {
  const {
    footerContent,
    websiteName,
  } = footerProps;
  return (
    <footer className="bg-dark text-light text-center py-3">
      <div className="container">
        <p className="mb-0">{footerContent}</p>
        <p className="mb-0">&copy; {new Date().getFullYear()} {websiteName}</p>
      </div>
    </footer>
  );
}
