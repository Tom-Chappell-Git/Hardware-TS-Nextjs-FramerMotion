// components/ProductCard.tsx
import React from 'react';
import Image from "next/image";
import Tooltip from '@mui/material/Tooltip';

// Product is an interface that defines the type of the product prop.
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

// ProductCard is a functional component that takes in a product prop of type Product.
interface ProductCardProps {
    product: Product;
}

// ProductCard is a functional component that takes in a product prop of type ProductCardProps.
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

             {/* Tooltip that displays title as text in the tooltip on the webpage */}
            <Tooltip title="Generally, more cores means better multitasking and faster data processing." 
                        placement="right">
                <p>Cores: {product.cores}</p>
            </Tooltip>

            <Tooltip title="Enable simultaneous execution of multiple tasks, improving overall system performance and multitasking efficiency" 
                        placement="right">
                <p>Threads: {product.threads}</p>
            </Tooltip>

            <Tooltip title="Expected speed of the process under normal circumstances." 
                        placement="right">
                <p>Base Clock: {product.base_clock}</p>
            </Tooltip>

            <Tooltip title="Max speed the CPU can boost to when needed for heavy computing." 
                        placement="right">
                <p>Boost Clock: {product.boost_clock}</p>
            </Tooltip>

            <Tooltip title="Stores frequently accessed data and instructions to reduce latency and speed up computation." 
                        placement="right">
                <p>Cache: {product.cache}</p>
            </Tooltip>

            <Tooltip title="Max amount of heat generated by the CPU under typical workloads, used for selecting appropriate cooling solutions." 
                        placement="right">
                <p>TDP: {product.tdp}</p>
            </Tooltip>

            <Tooltip title="CPU design. Often used to check if it is compatible the motherboard and RAM." 
                        placement="right">
                <p>Architecture: {product.architecture}</p>
            </Tooltip>
        </div>
    </div>
);

export default ProductCard;
