import { Injectable } from '@angular/core';
import { Menu } from '../API/api';

@Injectable({
  providedIn: 'root'
})
export class CustomapiService {

  constructor() { }
  getvalue(): Menu[] {
    return [
      {
        image: "../assets/images/img1.jpg",
        name: "Lorem",
        category: "BreakFast",
        price: "50",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam aut nisi corrupti repellendus saepe accusantium perferendis libero dolorum tenetur molestias."
      },
      {
        image: "../assets/images/img2.jpg",
        name: "Lorem",
        category: "BreakFast",
        price: "50",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam aut nisi corrupti repellendus saepe accusantium perferendis libero dolorum tenetur molestias."
      },
      {
        image: "../assets/images/img3.jpg",
        name: "Lorem",
        category: "BreakFast",
        price: "50",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam aut nisi corrupti repellendus saepe accusantium perferendis libero dolorum tenetur molestias."
      },
      {
        image: "../assets/images/img4.jpg",
        name: "Lorem",
        category: "BreakFast",
        price: "50",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam aut nisi corrupti repellendus saepe accusantium perferendis libero dolorum tenetur molestias."
      },
      {
        image: "../assets/images/img5.jpg",
        name: "Lorem",
        category: "BreakFast",
        price: "50",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam aut nisi corrupti repellendus saepe accusantium perferendis libero dolorum tenetur molestias."
      },
      {
        image: "../assets/images/img6.jpg",
        name: "Lorem",
        category: "BreakFast",
        price: "50",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam aut nisi corrupti repellendus saepe accusantium perferendis libero dolorum tenetur molestias."
      },
      {
        image: "../assets/images/img6.jpg",
        name: "Lorem",
        category: "Lunch",
        price: "50",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam aut nisi corrupti repellendus saepe accusantium perferendis libero dolorum tenetur molestias."
      },
      {
        image: "../assets/images/img5.jpg",
        name: "Lorem",
        category: "Lunch",
        price: "50",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam aut nisi corrupti repellendus saepe accusantium perferendis libero dolorum tenetur molestias."
      },
      {
        image: "../assets/images/img4.jpg",
        name: "Lorem",
        category: "Lunch",
        price: "50",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam aut nisi corrupti repellendus saepe accusantium perferendis libero dolorum tenetur molestias."
      },
      {
        image: "../assets/images/img3.jpg",
        name: "Lorem",
        category: "Lunch",
        price: "50",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam aut nisi corrupti repellendus saepe accusantium perferendis libero dolorum tenetur molestias."
      },
      {
        image: "../assets/images/img2.jpg",
        name: "Lorem",
        category: "Lunch",
        price: "50",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam aut nisi corrupti repellendus saepe accusantium perferendis libero dolorum tenetur molestias."
      },
      {
        image: "../assets/images/img1.jpg",
        name: "Lorem",
        category: "Lunch",
        price: "50",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam aut nisi corrupti repellendus saepe accusantium perferendis libero dolorum tenetur molestias."
      },
      {
        image: "../assets/images/img1.jpg",
        name: "Lorem",
        category: "Dinner",
        price: "50",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam aut nisi corrupti repellendus saepe accusantium perferendis libero dolorum tenetur molestias."
      },
      {
        image: "../assets/images/img6.jpg",
        name: "Lorem",
        category: "Dinner",
        price: "50",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam aut nisi corrupti repellendus saepe accusantium perferendis libero dolorum tenetur molestias."
      },
      {
        image: "../assets/images/img5.jpg",
        name: "Lorem",
        category: "Dinner",
        price: "50",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam aut nisi corrupti repellendus saepe accusantium perferendis libero dolorum tenetur molestias."
      },
      {
        image: "../assets/images/img2.jpg",
        name: "Lorem",
        category: "Dinner",
        price: "50",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam aut nisi corrupti repellendus saepe accusantium perferendis libero dolorum tenetur molestias."
      },
      {
        image: "../assets/images/img3.jpg",
        name: "Lorem",
        category: "Dinner",
        price: "50",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam aut nisi corrupti repellendus saepe accusantium perferendis libero dolorum tenetur molestias."
      },
      {
        image: "../assets/images/img4.jpg",
        name: "Lorem",
        category: "Dinner",
        price: "50",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam aut nisi corrupti repellendus saepe accusantium perferendis libero dolorum tenetur molestias."
      }
    ];
  }
}
