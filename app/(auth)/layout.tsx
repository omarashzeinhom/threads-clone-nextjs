import { ClerkProvider } from '@clerk/nextjs'
 
export const metadata = {
  title: "Threads",
  description: "A Social Media Platform",
};

 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  )
}