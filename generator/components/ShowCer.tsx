import Image from "next/image";
import React from "react";

type ShowCerProps = {
  data: Array<any>;
};

export default function ShowCer({ data }: ShowCerProps) {
  return (
    <div className="bg-white  mt-4 border border-solid border-gray-900/25 rounded">
      <div className="mx-auto max-w-2xl px-4 py-4 sm:px-2 sm:py-4 lg:max-w-7xl lg:px-4">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Result
        </h2>

        <div className="mt-6">
          {data.map((product, index) => (
            <div key={index} className="group w-full relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <Image
                  style={{ objectFit: "contain" }}
                  width={450}
                  height={150}
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              {/* <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {product.price}
                </p>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
