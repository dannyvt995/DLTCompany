import './globals.css'
import '../styles/bootstrap.min.css'
import '../styles/main.css'


import FooterSection from "@/modules/FooterSection";

import Script from 'next/script';
//import UseGui from '../../hook/useGui';


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
        />
          <link
            rel="stylesheet"
            href="/lib/flaticon/font/flaticon.css"
          />
      


        <link href="/lib/animate/animate.min.css" rel="stylesheet"/>
        <link href="/lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet"/>
        <link href="/lib/lightbox/css/lightbox.min.css" rel="stylesheet"/>
        <link href="/lib/slick/slick.css" rel="stylesheet"/>
        <link href="/lib/slick/slick-theme.css" rel="stylesheet"/>
      </head>
      <body>
        <div className="wrapper">
         {/*  <UseGui/> */}
          {children}
          <FooterSection />
        </div>
        {/* Load scripts here */}
        <Script src="https://code.jquery.com/jquery-3.4.1.min.js"  />
        <Script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js" />
        <Script src="/lib/easing/easing.min.js" />
        <Script src="/lib/wow/wow.min.js" />
        <Script src="/lib/owlcarousel/owl.carousel.min.js" />
        <Script src="/lib/isotope/isotope.pkgd.min.js" />
        <Script src="/lib/lightbox/js/lightbox.js" />
        <Script src="/lib/waypoints/waypoints.min.js" />
        <Script src="/lib/counterup/counterup.min.js" />
        <Script src="/lib/slick/slick.min.js" />
      {/*   <Script src="/lib/main.js"  strategy="lazyOnload"/> */}
      </body>
    </html>
  );
}
