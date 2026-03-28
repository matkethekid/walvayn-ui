import SaleComponent from './SaleComponent'
import { cacheLife, cacheTag } from 'next/cache';

const SaleServerComponent = async () => {
    async function getData() {
        "use cache";
        cacheLife("minutes");
        cacheTag("products");
        try {
            const response = await fetch(`${process.env.BACKEND_URL}/products/all?page=1`);
            const data = await response.json();
            
            console.log(data);
            return data?.items || []; 
        } catch (error) {
            return []; 
        }
    };
    const items = await getData();
  return (
    <div>
        <SaleComponent itemsInCollection={items}/>
    </div>
  )
}

export default SaleServerComponent