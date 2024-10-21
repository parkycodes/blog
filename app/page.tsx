
//you post blogs using this \/
import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Parker Zhang
      </h1>
      <p className="mb-4">
        {`I'm an undergrad student at University of Maryland focused on 
        being healthy and intelligent. I am currently exploring the concepts 
        of machine learning and software engineering in school and figuring out 
        how to live my best life. My goal: "Lock in, and Climb Mountains."`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
