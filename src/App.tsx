import { HeroSection } from './components/sections/HeroSection';
import { ProductSection } from './containers/ProductSection';
import { useFetchProducts } from './hooks/useFetchProducts';
import { DressStyleSection } from './components/DressStyleSection';
import { ProductType } from './types/ProductType';
import { CarrouselTestimonial } from './components/CarrouselTestimonial';

function App() {
  const { products, testimonials } = useFetchProducts();
  const filteredProducts = products.filter(
    (product: ProductType | ProductType) => product.review > 4.0
  );

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
        title="NEW ARRIVALS"
        btnTitle="View All"
        buttonOnClick={() => {}}
        products={products}
      />
      <ProductSection
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
            href: '#',
            categoria: 'casual',
            area: 'casual',
          },
          {
            image: './assets/formal.png',
            alt: 'Homem usando roupa formal',
            href: '#',
            categoria: 'formal',
            area: 'formal',
          },
          {
            image: './assets/party.png',
            alt: 'Mulher usando roupa para festa',
            href: '#',
            categoria: 'party',
            area: 'party',
          },
          {
            image: './assets/gym.png',
            alt: 'Homem usando roupa para academia',
            href: '#',
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
