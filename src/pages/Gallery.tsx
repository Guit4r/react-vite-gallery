import { useEffect, useState, useRef } from "react";
import { generateImageData } from "../utils/generateImage";
import ImageCard from "../components/ImageCard";
import HashtagFilter from "../components/HashtagFilter";
import type { ImageData } from "../types/image";
import Masonry from 'react-masonry-css';

export default function Gallery() {
    const [images, setImages] = useState<ImageData[]>([]);
    const [filter, setFilter] = useState<string | null>(null);
    const loaderRef = useRef<HTMLDivElement | null>(null);
    const [imgDataCount, setImgDataCount] = useState<number>(12);

    // Load initial images
    useEffect(() => {
        setImages(generateImageData(12));
    }, []);

    // Infinite scroll
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting && !filter) {
                setImages((prev) => [...prev, ...generateImageData(10, imgDataCount)]);
                setImgDataCount((prev) => prev + 10);
            }
        });

        if (loaderRef.current) observer.observe(loaderRef.current);
        return () => observer.disconnect();
    }, [imgDataCount, filter]);

    // All unique hashtags
    const allTags = Array.from(new Set(images.flatMap((img) => img.hashtags)));

    // Filtered images
    const filteredImages = filter ? images.filter((img) => img.hashtags.includes(filter)) : images;

    // Define breakpoints
    const breakpointColumnsObj = {
        default: 4,
        1024: 3,
        768: 2,
        640: 1,
    };

    return (
        <div className="min-h-screen">
            {/* Hashtag Filter Bar */}
            <HashtagFilter
                allTags={allTags}
                selectedTag={filter}
                onTagClick={(tag) => setFilter(tag)}
            />

            {/* Image Grid */}
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="flex gap-4"
                columnClassName="bg-clip-padding space-y-4"
            >
                {filteredImages.map((image) => (
                    <ImageCard
                        key={image.id}
                        image={image}
                        selectedTag={filter}
                        onTagClick={(tag) => setFilter(tag === filter ? null : tag)}
                    />
                ))}
                <div ref={loaderRef} className="h-10"></div>
            </Masonry>
        </div>
    );
}

