import Hero from '@/components/hero';
import homeImg from '/public/home.jpg';

export default function HomePage() {
  return (
    <Hero
      imageData={homeImg}
      imgAlt='car factory'
      title='Performance Cloud Hosting'
    />
  );
}
