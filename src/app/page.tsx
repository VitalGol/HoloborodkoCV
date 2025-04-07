import Top from '@/components/top';
import Work from '@/components/work';
import Skills from '@/components/skills';
import Courses from '@/components/courses';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col max-w-6xl mx-auto px-2 mb-8">
      <Top />
      <div className="flex flex-col lg:flex-row dark:text-slate-400 ">
        <div className="flex  w-full   lg:w-2/6 ">
          <Skills />
        </div>
        <div className="flex flex-col  w-full  lg:w-4/6">
          <Work />
          <Courses />
        </div>
      </div>
    </div>
  );
}
