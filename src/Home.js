import React from "react";
import "./css/Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="156465"
            title="Cup Set"
            price={34.99}
            image="https://5.imimg.com/data5/SELLER/Default/2021/7/YS/AX/PV/40053611/swachh-premium-tea-500x500.jpg"
            rating={5}
          />
          <Product
            id="156257465"
            title="The lean startup"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="4561285"
            title="Perfume"
            price={99}
            image="https://m.media-amazon.com/images/I/51EW7sSIXVL._SL1100_.jpg"
            rating={5}
          />
          <Product
            id="456456"
            title="Tooth brush"
            price={9}
            image="https://nypost.com/wp-content/uploads/sites/2/2022/02/Best-Electric-Toothbrushes.jpg?quality=75&strip=all"
            rating={5}
          />
          <Product
            id="54675657"
            title="Mixer Grinder"
            price={74.99}
            image="https://www.ubuy.co.in/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNjFqbFJtWHJqdVMuX0FDX1NMMTEwMF8uanBn.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="45675271"
            title="Mac mini"
            price={2499}
            image="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/macmini-og-202011?wid=600&hei=315&fmt=jpeg&qlt=95&.v=1604278674000"
            rating={5}
          />
          <Product
            id="1564632575"
            title="Samsung TV"
            price={700}
            image="https://m.media-amazon.com/images/I/91o08DsRplL._AC_SL1500_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
