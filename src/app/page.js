import { redirect } from "next/navigation";
import Link from "next/link";
import { carBrands } from "@/utils/constants";

export default async function Home() {
  return (
    <>
      <h1>Каталог</h1>
      <ul>
        {
          carBrands.map((brand =>
          (
            <li>
              <Link
                key={brand.id}
                href={`/cars/${brand.name}`}
              >
                {brand.name}
              </Link>
            </li>
          )
          ))}
      </ul>
    </>
  )
}