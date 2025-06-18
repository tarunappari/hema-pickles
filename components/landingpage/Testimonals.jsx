import React from 'react'
import styles from '@/styles/landingpage/Testimonals.module.scss'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

import granny from '@/public/assets/landingpage/granny.png'
import Image from 'next/image'
import StarIcon from '@/public/assets/icons/star.svg'
import Link from 'next/link'

const testimonials = [
    {
        name: 'Sowmya Reddy',
        country: 'India',
        review: "The mango pickle took me straight back to my childhood summers at grandma’s house. It’s pure nostalgia in a jar!",
        image: granny
    },
    {
        name: 'Ramesh Kumar',
        country: 'India',
        review: "We ordered the chicken and prawns pickle — both were incredibly flavorful and fresh. Absolutely chemical-free, just as promised!",
        image: granny
    },
    {
        name: 'Aparna Iyer',
        country: 'India',
        review: "My whole family loves Hemapickles! The taste, the packaging, the tradition — everything feels made with heart.",
        image: granny
    },
    {
        name: 'Emily Thompson',
        country: 'USA',
        review: "These pickles are a treasure! I’ve never had anything like the coconut and chili powder mix — it's spicy and unforgettable.",
        image: granny
    },
    {
        name: 'James Walker',
        country: 'UK',
        review: "Tried the chicken pickle and instantly became a fan. Authentic flavors that remind me of my trips to South India!",
        image: granny
    }
];


const Testimonals = () => {
    return (
        <div className={styles.testimonalContainer}>
            <Carousel className={styles.testimonalCarousel}>
                <CarouselContent>
                    {testimonials.map((item, index) => (
                        <CarouselItem key={index} className={'carouselItemTestimonal'}>
                            <div className="p-1">
                                <div className={styles.testimonalCard}>
                                    <div className={styles.cardInfo}>
                                        <div><span>People Are Talking</span></div>
                                        <div className={styles.customerTestimonal}>
                                            <div>
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                            </div>
                                            <p>"{item.review}"</p>
                                        </div>
                                        <div>
                                            <span>– {item.name}, {item.country}</span>
                                        </div>
                                    </div>
                                    <div className={styles.imgContainer}>
                                        <Image src={item.image} alt={item.name} />
                                    </div>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className={'carouselbtn'} />
                <CarouselNext className={'carouselbtn'} />
            </Carousel>
        </div>
    )
}

export default Testimonals;