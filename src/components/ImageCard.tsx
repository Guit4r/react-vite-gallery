import type { ImageData } from "../types/image";

interface Props {
    image: ImageData;
    selectedTag: string | null;
    onTagClick: (tag: string) => void;
}

export default function ImageCard({ image, selectedTag, onTagClick }: Props) {
    return (
        <div className="rounded shadow-md overflow-hidden bg-white">
            <img src={image.url} alt={`Image ${image.id}`} className="w-full" />
            <div className="p-2 flex flex-wrap gap-2">
                {image.hashtags.map((tag) => (
                    <button
                        key={tag}
                        onClick={() => onTagClick(tag)}
                        className={`text-xs px-2 py-1 rounded-full cursor-pointer ${tag === selectedTag
                            ? "bg-blue-600 text-white hover:bg-blue-700"
                            : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                            }`}
                    >
                        {tag}
                    </button>
                ))}
            </div>
        </div>
    );
}
