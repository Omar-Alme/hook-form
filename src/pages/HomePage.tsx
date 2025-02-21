import { SubmitHandler, useForm } from "react-hook-form";
import { Post } from "../data/data";


export default function HomePage() {
    const { register, handleSubmit } = useForm<Post>();
    const savePost: SubmitHandler<Post> = (data) => {
        console.log(data);
    }

    return (
        <div>
            <h1>Home Page</h1>
            <form onSubmit={handleSubmit(savePost)} className="p-4 bg-slate-100 grid gap-2">
                <h1 className="text-2xl font-bold">New Post</h1>
                <input className="px-2 py-1 border rounded bg-slate-50"
                    type="text"
                    placeholder="Title"
                    {...register("title")}
                />
                <input className="px-2 py-1 border rounded bg-slate-50"
                    type="text"
                    placeholder="Description"
                    {...register("description")}
                />
                <input className="px-2 py-1 border rounded bg-slate-50"
                    type="text"
                    placeholder="Image"
                    {...register("image")}
                />
                <input className="px-2 py-1 border rounded bg-slate-50"
                    type="text"
                    placeholder="Author"
                    {...register("author")}
                />

                <button className="px-2 py-1 border rounded bg-slate-50 hover:bg-slate-200" type="submit">Save</button>
            </form>
        </div>
    );
}