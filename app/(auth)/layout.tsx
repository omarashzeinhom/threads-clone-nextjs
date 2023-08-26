import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes';
import "../globals.css";
 
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
    <ClerkProvider
    appearance={{
      baseTheme: dark,
      
    }}
    
    >
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  )
}