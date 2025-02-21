import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Post, PostSchema } from "../data/data";


export default function HomePage() {
    const { register, handleSubmit } = useForm<Post>({
        resolver: zodResolver(PostSchema),
    });
    const savePost = (post: Post) => {
        console.log(post);
    }

    return (
        <div>
            <h1>Home Page</h1>
            <form onSubmit={handleSubmit(savePost)} className="p-4 bg-slate-100 grid gap-2">
                <h1 className="text-2xl font-bold">New Post</h1>
                <input className="px-2 py-1 border rounded bg-slate-50 cursor-pointer"
                    type="text"
                    placeholder="Title"
                    {...register("title")}
                />
                <input className="px-2 py-1 border rounded bg-slate-50 cursor-pointer"
                    type="text"
                    placeholder="Description"
                    {...register("description")}
                />
                <input className="px-2 py-1 border rounded bg-slate-50 cursor-pointer"
                    type="text"
                    placeholder="Image"
                    {...register("image")}
                />
                <input className="px-2 py-1 border rounded bg-slate-50 cursor-pointer"
                    type="text"
                    placeholder="Author"
                    {...register("author")}
                />

                <button className="cursor-pointer px-2 py-1 border rounded bg-slate-50 hover:bg-slate-200" type="submit">Save</button>
            </form>
        </div>
    );
}