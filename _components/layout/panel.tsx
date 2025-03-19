import { Sidebar } from 'lucide-react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../header/header';
import MainSidebar from '../sidebar/sideBar';
import Dashboard from '../content/presense';


const MainPanel: NextPage = () => {
  return (
    <div className="font-roboto bg-gray-100">
      <Head>
        <title>Layout with Collapsible Sidebar and Header</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="flex h-screen">
        <MainSidebar />
        <div className="flex-1 flex flex-col">
          <Header />
          <Dashboard/>
        </div>
      </div>
    </div>
  );
};

export default MainPanel;