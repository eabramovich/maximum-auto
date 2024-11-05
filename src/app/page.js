import { redirect } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header/Header";
import { carBrands } from "@/utils/constants";

export default async function Home() {
  return (
    <>
      <Header />
      <main className="content">
        <h1>Каталог</h1>
        <ul>
          {
            carBrands.map((brand =>
            (
              <li key={brand.name}>
                <Link
                  href={`/cars/${brand.name}`}
                >
                  {brand.name}
                </Link>
              </li>
            )
            ))}
        </ul>
      </main>
    </>
  )
}
