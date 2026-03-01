import { Project, Testimonial } from '../types';

export const PROJECTS: Project[] = [
    {
        id: '1',
        title: 'The Eternal Peak',
        category: 'Commercial / Travel',
        thumbnail: 'https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&q=80',
        videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    },
    {
        id: '2',
        title: 'Urban Rhythm',
        category: 'Music Video',
        thumbnail: 'https://images.unsplash.com/photo-1493225457124-a1a2a5f0857c?auto=format&fit=crop&q=80',
        videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    },
    {
        id: '3',
        title: 'Midnight Drive',
        category: 'Automotive',
        thumbnail: 'https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&q=80',
        videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    },
    {
        id: '4',
        title: 'Silent Echoes',
        category: 'Short Film',
        thumbnail: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80',
        videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    },
];

export const TESTIMONIALS: Testimonial[] = [
    {
        id: '1',
        name: 'Arjun Mehta',
        role: 'Creative Director',
        company: 'Vogue India',
        content: 'Editor transformed our vision into a cinematic masterpiece. The attention to pacing and color grading is truly unparalleled.',
    },
    {
        id: '2',
        name: 'Priya Sharma',
        role: 'Head of Production',
        company: 'Luxury Brands Co.',
        content: 'Working with this studio was a seamless experience. They deeply understand the nuance of high-end storytelling for the Indian market.',
    },
];

export const PROCESS_STEPS = [
    { title: 'Vision', description: 'Deep dive into your brand story and objectives.' },
    { title: 'Curation', description: 'Selecting the most impactful moments from raw footage.' },
    { title: 'Craft', description: 'Meticulous editing, sound design, and color grading.' },
    { title: 'Delivery', description: 'Polished cinematic content ready for global screens.' },
];
