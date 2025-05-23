export interface Props {
    allTags: string[];
    selectedTag: string | null;
    onTagClick: (tag: string | null) => void;
}

export default function HashtagFilter({ allTags, selectedTag, onTagClick }: Props) {
    return (
        <div className="flex flex-wrap gap-2 p-4">
            {allTags.map((tag) => (
                <button
                    key={tag}
                    onClick={() => onTagClick(tag === selectedTag ? null : tag)}
                    className={`text-xs px-2 py-1 rounded-full cursor-pointer ${tag === selectedTag
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                        }`}
                >
                    {tag}
                </button>
            ))}
        </div>
    );
}
