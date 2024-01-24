import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Card from "./components/Card";
function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Card productName="Shampoo 1" productPrice="120" imgName="Slide_1.png" />
      <Card productName="Shampoo 2" productPrice="150" imgName="Slide_2.png" />
      <Card productName="Shampoo 3" productPrice="200" imgName="Slide_3.png" />
      <Card productName="Shampoo 4" productPrice="300" imgName="Slide_1.png" />
    </div>
  );
}

export default App;
// export { Ali, Ahmed };
