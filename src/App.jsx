import { Hero, PopularProducts, SuperQuality, Services, SpecialOffer, CustomerReviews, Subscribe, Footer } from './sections';
import Nav from './components/Nav';

const App = () => (
  <main className="relative">
      <Nav/>
      <Hero/>
      <PopularProducts/>
      <SuperQuality/>
      <Services/>
      <SpecialOffer/>
      <CustomerReviews/>
      <Subscribe/>
      <Footer/>
  </main>
);

export default App;