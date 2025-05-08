import type { ImageData } from "../types/image";

const TAGS = ["#cat", "#nature", "#car", "#tech", "#art", "#space", "#meme"];

export function generateImageData(count: number, ImgData?: number): ImageData[] {
    return Array.from({ length: count }, (_, i) => ({
        id: Date.now() + Math.random(),
        url: `https://placehold.co/${300 + Math.floor(Math.random() * 200)}x${200 + Math.floor(Math.random() * 200)}?text=img ${i + (ImgData ?? 0) + 1}`,
        hashtags: Array.from(
            new Set(
                Array.from({ length: Math.floor(Math.random() * 4 + 1) }, () =>
                    TAGS[Math.floor(Math.random() * TAGS.length)]
                )
            )
        ),
    }));
}