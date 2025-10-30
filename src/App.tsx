import { HeroSection } from './components/sections/HeroSection';
import { ProductSection } from './containers/ProductSection';
import { DressStyleSection } from './components/DressStyleSection';
import { CarrouselTestimonial } from './components/CarrouselTestimonial';
import { useFilteredProducts } from './hooks/useFilteredProducts';
import { useFetchProducts } from './hooks/useFetchProducts';

function App() {
  const { filteredProducts } = useFilteredProducts();
  const { products, testimonials } = useFetchProducts();

  return (
    <div>
      <HeroSection
        titleText="FIND CLOTHES THAT MATCHES YOUR STYLE"
        descriptionText="Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style."
        stats={[
          { text: '200+', description: 'International Brands' },
          { isDivider: true },
          { text: '2,000+', description: 'High-Quality Products' },
          { text: '30,000+', description: 'Happy Customers', fullWidth: true },
        ]}
        brands={[
          { logo: './assets/versace-logo.png', alt: 'Logo da Versace' },
          { logo: './assets/zara-logo.png', alt: 'Logo da Zara' },
          { logo: './assets/gucci-logo.png', alt: 'Logo da Gucci' },
          { logo: './assets/prada-logo.png', alt: 'Logo da Prada' },
          { logo: './assets/calvin-klein-logo.png', alt: 'Logo da Calvin Klein' },
        ]}
      />
      <ProductSection
        id="newarrivals"
        title="NEW ARRIVALS"
        btnTitle="View All"
        buttonOnClick={() => {}}
        products={products}
      />
      <ProductSection
        id="onsale"
        title="TOP SELLING"
        btnTitle="View All"
        buttonOnClick={() => {}}
        products={filteredProducts}
      />

      <DressStyleSection
        title="BROWSE BY dress STYLE"
        clothesStyles={[
          {
            image: './assets/casual.png',
            alt: 'Homem usando roupa casual',
            href: '/category/casual',
            categoria: 'casual',
            area: 'casual',
          },
          {
            image: './assets/formal.png',
            alt: 'Homem usando roupa formal',
            href: '/category/formal',
            categoria: 'formal',
            area: 'formal',
          },
          {
            image: './assets/party.png',
            alt: 'Mulher usando roupa para festa',
            href: '/category/party',
            categoria: 'party',
            area: 'party',
          },
          {
            image: './assets/gym.png',
            alt: 'Homem usando roupa para academia',
            href: '/category/gym',
            categoria: 'gym',
            area: 'gym',
          },
        ]}
      />
      <CarrouselTestimonial
        testimonial={testimonials}
        layout="carrousel"
        text="OUR HAPPY CUSTOMERS"
      />
    </div>
  );
}

export default App;
