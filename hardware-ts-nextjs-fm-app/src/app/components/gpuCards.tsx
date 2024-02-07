// components/ProductCard.tsx
import React from 'react';
import Image from "next/image";
import Tooltip from '@mui/material/Tooltip';

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
            
            <Tooltip title="The architecture of the GPU." 
            placement="right">
                <p>Architecture: {product.architecture}</p>
            </Tooltip>

            <Tooltip title="The more VRAM, the more graphics information can be processed at one time."
             placement="right">
                <p>Memory/VRAM: {product.memory}</p>
            </Tooltip>

            <Tooltip title="The base clock speed of the GPU's cores." 
            placement="right">
                <p>Core Clock: {product.coreClock}</p>
            </Tooltip>

            <Tooltip title="The maximum clock speed the GPU can achieve under load." 
            placement="right">
                <p>Boost Clock: {product.boostClock}</p>
            </Tooltip>

            <Tooltip title="The power consumption of the GPU." 
            placement="right">
                <p>Power Consumption: {product.powerConsumption}</p>
            </Tooltip>

        </div>
    </div>
);

export default GpuProductCard;
