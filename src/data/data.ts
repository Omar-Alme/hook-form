import { z } from "zod";

export interface Post {
    id: string;
    title: string;
    description: string;
    image: string;
    author: string;
    createdAt: Date;
}

export const PostSchema = z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    image: z.string(),
    author: z.string(),
    createdAt: z.date(),
})

export const mockedPosts: Post[] = [
    {
        id: '1',
        title: 'First Unique Post',
        description: 'This is the first unique post description.',
        image: 'https://images.unsplash.com/photo-1504198266287-1659872e6590?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
        author: 'Jane Smith',
        createdAt: new Date()
    },
    {
        id: '2',
        title: 'Second Unique Post',
        description: 'This is the second unique post description.',
        image: 'https://images.unsplash.com/photo-1581579205364-90f74055920c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
        author: 'John Doe',
        createdAt: new Date()
    },
    {
        id: '3',
        title: 'Third Unique Post',
        description: 'This is the third unique post description.',
        image: 'https://images.unsplash.com/photo-1574180045827-681f8a1e2dc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
        author: 'Alice Johnson',
        createdAt: new Date()
    },
    {
        id: '4',
        title: 'Fourth Unique Post',
        description: 'This is the fourth unique post description.',
        image: 'https://images.unsplash.com/photo-1579783329950-3a1f19ee00f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
        author: 'Bob Williams',
        createdAt: new Date()
    },
    {
        id: '5',
        title: 'Fifth Unique Post',
        description: 'This is the fifth unique post description.',
        image: 'https://images.unsplash.com/photo-1558981402-fe09c07b3f53?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
        author: 'John Smith',
        createdAt: new Date()
    },
    {
        id: '6',
        title: 'Sixth Unique Post',
        description: 'This is the sixth unique post description.',
        image: 'https://images.unsplash.com/photo-1589395937771-84c4f92c4332?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
        author: 'Sarah Green',
        createdAt: new Date()
    },
    {
        id: '7',
        title: 'Seventh Unique Post',
        description: 'This is the seventh unique post description.',
        image: 'https://images.unsplash.com/photo-1520786801934-3a9037b645ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
        author: 'Michael Brown',
        createdAt: new Date()
    },
    {
        id: '8',
        title: 'Eighth Unique Post',
        description: 'This is the eighth unique post description.',
        image: 'https://images.unsplash.com/photo-1474891097338-8ac4831eebb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
        author: 'Emily Taylor',
        createdAt: new Date()
    },
    {
        id: '9',
        title: 'Ninth Unique Post',
        description: 'This is the ninth unique post description.',
        image: 'https://images.unsplash.com/photo-1565120130299-4d16aa52b74f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
        author: 'Chris Anderson',
        createdAt: new Date()
    },
    {
        id: '10',
        title: 'Tenth Unique Post',
        description: 'This is the tenth unique post description.',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
        author: 'Samantha Lee',
        createdAt: new Date()
    }
]