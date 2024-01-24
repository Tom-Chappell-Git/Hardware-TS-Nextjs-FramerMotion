// components/ProductCard.tsx
import React from 'react';
import Image from "next/image";

interface GpuProductCardProps {
    product: {
        id: string;
        name: string;
        architecture: string;
        memory: string;
        coreClock: string;
        boostClock: string;
        powerConsumption: string;
    };
}

const GpuProductCard: React.FC<GpuProductCardProps> = ({ product }) => (
    <div className="product-card border p-4 rounded-md shadow-md mb-4" onClick={() => console.log("clicked")}>
        <Image className="w-full h-40 object-contain mb-4 rounded-md"
            src={`/assets/${product.id}.png`}
            alt={product.name}
            width={1000}
            height={1000}
        />
        <div className="product-info">
            <h3 className="text-xl font-bold mb-2">{product.name}</h3>
            <p>Architecture: {product.architecture}</p>
            <p>Memory: {product.memory}</p>
            <p>Core Clock: {product.coreClock}</p>
            <p>Boost Clock: {product.boostClock}</p>
            <p>Power Consumption: {product.powerConsumption}</p>
        </div>
    </div>
);

export default GpuProductCard;
