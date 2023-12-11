import Hero from '@/components/hero';
import reliabilityImg from '/public/reliability.jpg';

export default function ReliabilityPage() {
  return (
    <Hero
      imageData={reliabilityImg}
      imgAlt='welding'
      title='Super high reliability hosting'
    />
  );
}
