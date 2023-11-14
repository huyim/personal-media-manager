import type { NextPage } from 'next';
import SingleFileUploadForm from '../../components/FileUpload';

const Home: NextPage = () => {
  return (
    <div className="prose prose-sm prose-invert max-w-none">
      <h1 className="text-xl font-bold text-black">Upload and Adding Tags</h1>
      <main className="py-10">
        <div className="mx-auto w-full max-w-3xl px-3">
          <SingleFileUploadForm />
        </div>
      </main>
    </div>
  );
};

export default Home;
