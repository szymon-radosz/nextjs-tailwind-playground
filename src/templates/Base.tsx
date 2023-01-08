import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Footer } from './Footer';
import Content from "./Content"


const Base = () => (
  // <div className="antialiased text-gray-600">
  //   <Meta title={AppConfig.title} description={AppConfig.description} />
  //   <Hero />
  //   <VerticalFeatures />
  //   <Banner />
  //   <Footer />
  // </div>
  <Content />
);


export { Base };
