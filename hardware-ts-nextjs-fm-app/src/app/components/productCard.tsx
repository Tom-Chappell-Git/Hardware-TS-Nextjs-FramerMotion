// components/ProductCard.tsx
import React from 'react';
import Image from "next/image";

interface Product {
    id: string;
    model: string;
    cores: string;
    threads: string;
    base_clock: string;
    boost_clock: string;
    cache: string;
    tdp: string;
    architecture: string;
}

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => (
    <div className="product-card border p-4 rounded-md shadow-md mb-4" onClick={() => console.log("clicked")}>
        <Image className="w-full h-40 object-contain mb-4 rounded-md"
            src={`/assets/${product.id}.png`}
            alt={product.model}
            width={1000}
            height={1000}
        />
        <div className="product-info">
            <h3 className="text-xl font-bold mb-2">{product.model}</h3>
            <p>Cores: {product.cores}</p>
            <p>Threads: {product.threads}</p>
            <p>Base Clock: {product.base_clock}</p>
            <p>Boost Clock: {product.boost_clock}</p>
            <p>Cache: {product.cache}</p>
            <p>TDP: {product.tdp}</p>
            <p>Architecture: {product.architecture}</p>
        </div>
    </div>
);

export default ProductCard;
