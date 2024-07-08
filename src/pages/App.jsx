import { useState } from "react";
import Header from "../layouts/header.jsx";
import MainContent from "../layouts/maincontent.jsx";
import Features from "../layouts/features.jsx";
import Explanation from "../layouts/explanation.jsx";
import ExtensionProducts from "../layouts/extensionproducts.jsx";
import Faq from "../layouts/faq.jsx";
import Footer from "../layouts/footer.jsx";

function App() {
  return (
    <>
      <div className="mx-4 sm:mx-6 md:mx-8 lg:mx-10 xl:mx-36 2xl:mx-72">
        {" "}
        <Header />
        <MainContent />
        <Features />
        <Explanation />
        <ExtensionProducts />
        <Faq />
      </div>
      <Footer />
    </>
  );
}

export default App;
