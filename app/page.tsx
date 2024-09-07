import MapComponent from './features/map/map-component';
import TitleComponent from './features/title/title-component'

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <TitleComponent />
        <MapComponent />
      </main>
  );
}
