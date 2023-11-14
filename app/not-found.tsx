import { Boundary } from '#/ui/boundary';

export default function NotFound() {
  return (
    <Boundary labels={['PAGE NOT FOUND']} color="pink">
      <div className="text-vercel-pink space-y-4">
        <h2 className="text-lg font-bold">404 Not Found</h2>

        <p className="text-sm">Could not find requested resource</p>
      </div>
    </Boundary>
  );
}
