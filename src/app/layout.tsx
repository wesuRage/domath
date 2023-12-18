import "@/app/globals.css";

export const metadata = {
  title: "DO MATH",
  description: "Conheça a matemática de pertinho!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
