import Hero from '@/components/hero';
import performanceImg from '/public/performance.jpg';

export default function PerformancePage() {
  return (
    <Hero
      imageData={performanceImg}
      imgAlt='welding'
      title='We serve high performance applications'
    />
  );
}
