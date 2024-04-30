import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#products", label: "Products" },
    { href: "#about-us", label: "About Us" },
    { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];

export const statistics = [
    { value: '1k+', label: 'Brands' },
    { value: '250+', label: 'Shops' },
    { value: '150k+', label: 'Customers' },
];

export const products = [
    {
        imgURL: shoe4,
        name: "Vortex Tempest - 01",
        price: "$199.90",
    },
    {
        imgURL: shoe5,
        name: "Vortex Gale - 01",
        price: "$209.90",
    },
    {
        imgURL: shoe6,
        name: "Vortex Typhoon - 01",
        price: "$219.90",
    },
    {
        imgURL: shoe7,
        name: "Vortex Storm - 01",
        price: "$229.90",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Fast Delivery",
        subtext: "Enjoy quick delivery with our efficient shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Transactions",
        subtext: "Experience worry-free payments with our secure transaction methods."
    },
    {
        imgURL: support,
        label: "Customer Support",
        subtext: "Our friendly team is available to assist you whenever you need help."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'John Davis',
        rating: 4.5,
        feedback: "Absolutely outstanding service! I couldn't be happier with the attention to detail and professionalism."
    },
    {
        imgURL: customer2,
        customerName: 'Sarah Thompson',
        rating: 4.5,
        feedback: "Great experience overall. The service was good, but there's always room for improvement."
    },
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Vortex Tempest - 01", link: "/" },
            { name: "Vortex Gale - 01", link: "/" },
            { name: "Vortex Typhoon - 01", link: "/" },
            { name: "Vortex Storm - 01", link: "/" },
            { name: "Vortex Tornado - 01", link: "/" },
            { name: "Vortex Wind - 01", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@vortex.com", link: "mailto:customer@vortex.com" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];