import { Link } from '@tanstack/react-router';

export function NotFound() {
  return (
    <div className="container mx-auto my-8">
      <div className="prose prose-lg">
        <h1>Page not found</h1>
        <p>The page you are looking for does not exist.</p>
        <Link to="/">Go to home</Link>
      </div>
    </div>
  );
}
