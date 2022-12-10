import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default function material() {
    return <div>material</div>;
}

export async function getStaticProps() {
    // Get files from the material dir
    const files = fs.readdirSync(path.join("material"));
    console.log(files);

    const posts = files.map((filename) => {
        // Create slug
        const slug = filename.replace(".md", "");
        
        //Get front matter
        const markdownWithMeta = fs.readFileSync(path.join("material",filename), "utf-8")

        return { slug };
    });

    console.log("Posts: ", posts);

    return { props: { posts } };
}
