import { Separator } from "@/components/ui/separator";
import { useCallback, useState } from "react";
import PageControl from "@/modules/pageControl";
import TopNav from "@/modules/topNav";
import SideNav from "@/modules/sideNav";

const fetchData = async (url: string) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

export default function Home({ topFiveData, invoiceData }: any) {
  const [tab, setTab] = useState<"customer" | "promo" | "voucher">("customer");
  const [filteredData, setFilteredData] = useState(invoiceData?.data || []);

  const searchFilter = (data: any, query: any, setFiltered: any) => {
    if (!query) {
      setFiltered(invoiceData.data);
      return;
    }

    const normalizedQuery = query.toLowerCase();

    const filteredData = data.filter((item: any) => {
      const { name, level, fav_item } = item.customer;

      return (
        name.toLowerCase().includes(normalizedQuery) ||
        level.toLowerCase().includes(normalizedQuery) ||
        fav_item.toLowerCase().includes(normalizedQuery)
      );
    });

    setFiltered(filteredData);
  };

  const handleSearchChange = useCallback(
    (e: any) => {
      const query = e.target.value;
      searchFilter(filteredData, query, setFilteredData);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [filteredData],
  );

  return (
    <main className="flex h-full flex-col">
      <TopNav tab={tab} setTab={setTab} />
      <Separator />
      <div className="flex h-full gap-4 p-4">
        <PageControl
          handleSearchChange={handleSearchChange}
          filteredData={filteredData}
        />
        <SideNav topFiveData={topFiveData} />
      </div>
    </main>
  );
}

export async function getStaticProps() {
  const topFiveData = await fetchData("http://localhost:3333/api/v1/top5");
  const invoiceData = await fetchData(
    "http://localhost:3333/api/v1/invoice-detail/",
  );

  return {
    props: {
      topFiveData,
      invoiceData,
    },
    revalidate: 60,
  };
}
