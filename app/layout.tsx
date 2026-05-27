import React from 'react';

export const metadata = {
  title: 'Onyele Emmanuel King Portfolio',
  description: 'Official Portfolio of Mr Eco International Nigeria 2026',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
