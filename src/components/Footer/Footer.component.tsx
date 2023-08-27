interface FooterItemType {
  footerContent: string;
  websiteName: string;
}

const defaultFooterItem: FooterItemType = {
  footerContent: 'Crafted with coffee and code by @HeriYantodotDev',
  websiteName: 'Cool Clothing Store😎',
};

export default function Footer({
  footerProps = defaultFooterItem,
}: {
  footerProps?: FooterItemType;
}) {
  const { footerContent, websiteName } = footerProps;
  return (
    <footer className="bg-dark text-light text-center py-3">
      <div className="container">
        <p className="mb-0">{footerContent}</p>
        <p className="mb-0">
          &copy; {new Date().getFullYear()} {websiteName}
        </p>
      </div>
    </footer>
  );
}

// Add defaultProps declaration
Footer.defaultProps = {
  footerProps: defaultFooterItem,
};
