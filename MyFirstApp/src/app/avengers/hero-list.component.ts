import {Component, OnInit} from '@angular/core';

import {IHero} from './hero';

@Component({
    selector: 'super-heroes',
    templateUrl: './hero-list.component.html',
    styleUrls: ['./hero-list.component.css']
})

export class HeroListComponent implements OnInit{
    pageTitle:string = "Hero List";
    imageWidth:number = 100;
    imageHeight:number = 100;
    imageMargin:number = 2;
    heroes:IHero[]=[
        {
            "heroId": 1,
            "heroName": "Captain America",
            "realName": "Steven Rogers",
            "heroStrength": "Shield",
            "heroNature": "Confident",
            "imageURL": "./assets/images/captain.jpg" 
        },
        {
            "heroId": 2,
            "heroName": "Iron Man",
            "realName": "Tony Stark",
            "heroStrength": "Suit and Jarvis",
            "heroNature": "Stylish",
            "imageURL": "./assets/images/ironMan.jpg" 
        },
        {
            "heroId": 3,
            "heroName": "Thor",
            "realName": "Thor",
            "heroStrength": "Hammer",
            "heroNature": "Confused",
            "imageURL": "./assets/images/thor.jpg" 
        },
        {
            "heroId": 4,
            "heroName": "Hulk",
            "realName": "Bruce Banner",
            "heroStrength": "Size",
            "heroNature": "Anger",
            "imageURL": "./assets/images/hulk.jpg" 
        },
        {
            "heroId": 5,
            "heroName": "Black Widow",
            "realName": "Agent Romanoff",
            "heroStrength": "Mind Games",
            "heroNature": "Smart",
            "imageURL": "./assets/images/blackWidow.jpg" 
        },
        {
            "heroId": 6,
            "heroName": "Agent Fury",
            "realName": "Nick Fury",
            "heroStrength": "Nothing",
            "heroNature": "Serious",
            "imageURL": "./assets/images/agentFury.jpg" 
        }
    ]
    showImage:boolean = false;
    toggleImage(): void{
        this.showImage = !this.showImage;
    }
    listFilter: string = 'm';
    ngOnInit(): void{
        console.log("I am using componemt lifecycle hook..!!");
    }
}