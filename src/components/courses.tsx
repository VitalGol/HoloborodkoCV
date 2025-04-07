'use client';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { Card, CardContent } from './ui/card';
import Autoplay from 'embla-carousel-autoplay';
import { courses } from '@/data';
import Image from 'next/image';

export default function Courses() {
  return (
    <div className="flex flex-col w-full px-2 lg:px-6">
      <h1 className="text-xl lg:text-2xl uppercase font-semibold tracking-widest">
        courses
      </h1>
      <Carousel
        plugins={[
          Autoplay({
            delay: 5000,
            stopOnMouseEnter: true,
            stopOnInteraction: false,
          }),
        ]}
        className="w-full max-w-6xl"
      >
        <CarouselContent>
          {courses.map((card) => (
            <CarouselItem key={card.id}>
              <div className="dark:bg-[#0a0a0a]">
                <Card className=" dark:bg-[#0a0a0a]">
                  <CardContent className="flex flex-col  items-center justify-center dark:bg-[#0a0a0a] ">
                    <h1 className="text-xl md:text-2xl font-semibold tracking-widest dark:text-slate-400 ">
                      {card.title}
                    </h1>
                    <p className="mb-4 font-medium text-base md:text-lg dark:text-slate-400">
                      {card.content}
                    </p>
                    <Image
                      src={card.pic}
                      alt={card.title}
                      placeholder="blur"
                      // width={100}
                      height={600}
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
