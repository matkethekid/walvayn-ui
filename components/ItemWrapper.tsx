import IndividualItem from './IndividualItem';

export default async function ItemWrapper({ slug }: { slug: string }) {
  const response = await fetch(
    `${process.env.BACKEND_URL}/products/${slug}`
  );

  const data = await response.json();

  return <IndividualItem item={data} />;
}