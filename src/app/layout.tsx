
import './globals.css'
import '../styles/bootstrap.min.css'
import '../styles/main.css'
import '../lib/flaticon/font/flaticon.css'



import NavbarSection from "@/modules/NavbarSection";
import FooterSection from "@/modules/FooterSection";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
 
    <html lang="en">
    <head>
      <link
       rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
       
      />
    </head>
      <body >
        <div className="wrapper">
          <NavbarSection />
          {children}
          <FooterSection />
        </div>
      </body>
    </html>
  </>
  );
}
