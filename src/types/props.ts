export interface Props {
    allTags: string[];
    selectedTag: string | null;
    onTagClick: (tag: string | null) => void;
}