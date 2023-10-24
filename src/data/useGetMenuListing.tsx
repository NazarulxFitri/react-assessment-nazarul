export interface MenuListingsConfig {
  text: string;
  cta: string;
}

export default function useGetMenuListings() {
  const data: MenuListingsConfig[] = [
    {
      text: "Item 1",
      cta: "/#",
    },
    {
      text: "Item 2",
      cta: "/#",
    },
    {
      text: "Item 3",
      cta: "/#",
    },
  ];

  return { data };
}
