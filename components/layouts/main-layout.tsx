import Head from "next/head";
import { ReactNode } from "react";
import { NavbarComponent } from "../ui/Navbar";

type MainLayoutProps = {
    children: ReactNode;
    title?: string;
};

export const MainLayout = ({ children, title }: MainLayoutProps) => {
  return (
    <>
      <Head>
        <title>{title || 'Pokemon App'}</title>
        <meta name="author" content="Santiago Rodriguez"/>
        <meta name="description" content={`Informacion sobre algun pokemon ${ title }`}/>
        <meta name="keywords" content={`${ title } pokemon, pokedex`}/>
      </Head>

      <NavbarComponent />

      <main>
        { children }
      </main>
    </>
  );
};
