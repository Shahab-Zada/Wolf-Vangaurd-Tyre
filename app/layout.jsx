import 'bootstrap/dist/css/bootstrap.min.css';

import './globals.css';

export const metadata = {
  title: 'Tyre Shop',
  description: 'Premium Tyres Website',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}