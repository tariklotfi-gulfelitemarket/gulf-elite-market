// Adding a comment to trigger rebuild
import MinimalClientComponent from '@/components/MinimalClientComponent';

// Server component rendering the minimal client component
export default function Home() {
  return (
    <div>
      <h1>Testing Minimal Client Component</h1>
      <MinimalClientComponent />
    </div>
  );
}

