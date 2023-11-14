import type { NextPage } from 'next';
import SingleFileUploadForm from '../../components/FileUpload';
import { TabNavItem } from '#/ui/tab-nav-item';

const Home: NextPage = () => {
  return (
    <div className="prose prose-sm prose-invert max-w-none">
      {/* <div className="flex items-center gap-x-4">
        {' '}
        <TabNavItem href="/">Back</TabNavItem>
      </div> */}

      <h1 className="text-xl font-bold text-black">Image and Video Uploader</h1>
      <main className="py-10">
        <div className="mx-auto w-full max-w-3xl px-3">
          <SingleFileUploadForm />
        </div>
      </main>
    </div>
  );
};

export default Home;
