import { Helmet } from "react-helmet-async";
import DirectoryCard from "../../components/DirectoryCard";
import { useEffect, useState } from "react";

const VendorDirectory = () => {
  const [vendors, setVendors] = useState([]);
  useEffect(() => {
    fetch('/data/vendors.json')
      .then(res => res.json())
      .then(data => setVendors(data))
  }, []);

  return (
    <main className="bg-[rgba(229,84,115,0.1)] py-10">
      <Helmet>
        <title>Vendor Directory - PreWedding</title>
      </Helmet>

      <section>
        <div className="container">
          <h2 className="text-center text-3xl font-semibold mb-2">Vendor <span className="text-primary">Directory</span></h2>
          <p className="text-center max-w-[550px] mx-auto text-para-color mb-10">Discover and connect with trusted wedding vendors in our comprehensive vendor directory.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {
              vendors.map(vendor => <DirectoryCard key={vendor.id} vendor={vendor} />)
            }
          </div>
        </div>
      </section>
    </main>
  );
};

export default VendorDirectory;