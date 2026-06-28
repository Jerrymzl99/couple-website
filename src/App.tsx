import AppGallery from "./components/AppGallery"
import AppHeroSection from "./components/AppHeroSection"
import EditorialStats from "./components/EditorialStats"
import Footer from "./components/Footer"
import HeartSection from "./components/HeartSection"
import Timeline from "./components/Timeline"
import VideoIntro from "./components/VideoIntro"

function App() {
  return (
    <main className="w-full flex flex-col">
      <VideoIntro />
      <AppHeroSection />
      <Timeline />
      <AppGallery />
      <EditorialStats />
      <HeartSection />
      <Footer />
    </main>
  )
}

export default App