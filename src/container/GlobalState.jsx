import React, { useState } from "react";
import ContextOrderFood from "../context/ContextOrderFood";
import uniqid from 'uniqid';

import ghormehsabziimage from '../img/ghormeh-sabzi-for-Order-Food.jpg';
import kebabimage from '../img/kebabforOrderFood.jpg';
import pizzaimage from '../img/Piazza-for-Order-Food.jpg';
import diziimage from '../img/dizi-for-Order_Food.jpg';
import beefstroganoffimage from '../img/Beef-Stroganoff-for-Order-Food.jpg';
import caesarsaladimage from '../img/Caesar-salad-for-Order-Food.jpg';
import halim from '../img/halim.jpg'
import ashreshteh from '../img/ash-reshteh.jpg'
import sholezard from '../img/shole-zard.jpg'
import mastebademjan from '../img/maste-bademjan.jpg'
import boranysfenag from '../img/borany-sfenag.jpg'
import sopejo from '../img/sope-jo.jpg'
import cholokareh from '../img/cholo-kareh.jpeg'
import cholokebabloghmezaeferany from '../img/cholo-kebab-loghme-zaeferany.jpeg'
import mirzaghasemi from '../img/mirza-ghasemi.jpeg'
import khorakshamigilanni from '../img/khorak-shami-gilanni.jpeg'
import noshabeghoti from '../img/noshabe-ghoti.jpg'
import cholojojehkebab from '../img/cholo-jojeh-kebab.jpg'
import khorakjojehkebab from '../img/khorak-jojeh-kebab.jpeg'
import zereshkpolobamorghsorkh from '../img/zereshk-polo-ba-morgh-sorkh.jpeg'
import cholokhoreshtghoremesabzi from '../img/cholo-khoresht-ghoreme-sabzi.jpeg'
import cholokhoreshtgheymesibzaminy from '../img/cholo-khoresht-gheyme-sibzaminy.jpeg'
import pizzapeperony from '../img/pizza-peperony.jpg'
import pizzabiken from '../img/pizza-biken.jpeg'
import pizzamargarita from '../img/pizza-margarita.jpg'
import pizzasalamy from '../img/pizza-salamy.jpeg'
import baghlavatabrizy from '../img/baghlava-tabrizy.jpeg'
import kashkbademjan from '../img/kashk-bademjan.jpeg'
import saladfasl from '../img/salad-fasl.jpeg'
import saladshirazi from '../img/salad-shirazi.jpeg'
import gazsfehan from '../img/gaz-sfehan.jpeg'
import zabangosandi from '../img/zaban-gosandi.jpg'
import magzgosfand from '../img/magz-gosfand.jpg'
import sirabshirdansofaly from '../img/sirab-shirdan-sofaly.jpeg'
import sirabmagzsofaly from '../img/sirab-magz-sofaly.jpeg'
import limotorsh from '../img/limo-torsh.jpeg'

import googlemaps from '../img/googlemap.jpg';
import LogoAsadorEtxebarri from '../img/Logo-For-Asador-Etxebarri.jpg';
import LogoCentral from '../img/Logo-For-Central.jpg';
import LogoGeranium from '../img/Logo-For-Geranium.jpg';
import LogoNoma from '../img/Logo-For-Noma.jpg';
import LogoAlbino from '../img/Logo-For-Albino-Resturant.jpg';
import LogoHamber from '../img/Logo-For-Hamber-Resturant.jpg';
import LogoResturantfake from '../img/Logo-For-Resturantfake.jpg';
import LogoTagline from '../img/Logo-For-Tagline-Here.jpg';


const GlobalState = ({ children }) => {

    const [getResturant, changeResturant] = useState([
        {
            id: uniqid(), name: "AsadorEtxebarri", logo: LogoAsadorEtxebarri, foods: [
                { id: uniqid(), numberorder: 0, picture: halim, namefood: "halim", descriptionfood: "a food great and perfect and nice", price: 50 },
                { id: uniqid(), numberorder: 0, picture: ashreshteh, namefood: "ash reshteh", descriptionfood: "a food perfect and nice and great", price: 80 },
                { id: uniqid(), numberorder: 0, picture: sholezard, namefood: "shole zard", descriptionfood: "a food great and perfect and nice", price: 65 },
                { id: uniqid(), numberorder: 0, picture: mastebademjan, namefood: "maste bademjan", descriptionfood: "a food perfect and nice and great", price: 100 },
                { id: uniqid(), numberorder: 0, picture: boranysfenag, namefood: "borany sfenag", descriptionfood: "a food great and perfect and nice", price: 90 },
                { id: uniqid(), numberorder: 0, picture: sopejo, namefood: "sope jo", descriptionfood: "a food perfect and nice and great", price: 30 }
            ], orderfood: []
        },
        {
            id: uniqid(), name: "Hamber", logo: LogoHamber, foods: [
                { id: uniqid(), numberorder: 0, picture: ghormehsabziimage, namefood: "ghormesabzi", descriptionfood: "a food great and perfect and nice", price: 50 },
                { id: uniqid(), numberorder: 0, picture: kebabimage, namefood: "kebab", descriptionfood: "a food perfect and nice and great", price: 80 },
                { id: uniqid(), numberorder: 0, picture: pizzaimage, namefood: "pizza", descriptionfood: "a food great and perfect and nice", price: 65 },
                { id: uniqid(), numberorder: 0, picture: diziimage, namefood: "dizi", descriptionfood: "a food perfect and nice and great", price: 100 },
                { id: uniqid(), numberorder: 0, picture: beefstroganoffimage, namefood: "beefstroganoff", descriptionfood: "a food great and perfect and nice", price: 90 },
                { id: uniqid(), numberorder: 0, picture: caesarsaladimage, namefood: "caesarsalad", descriptionfood: "a food perfect and nice and great", price: 30 }
            ], orderfood: []
        },

        {
            id: uniqid(), name: "Geranium", logo: LogoGeranium, foods: [
                { id: uniqid(), numberorder: 0, picture: cholokareh, namefood: "dizi", descriptionfood: "a food great and perfect and nice", price: 50 },
                { id: uniqid(), numberorder: 0, picture: cholokebabloghmezaeferany, namefood: "cholo kebab loghme zaeferany", descriptionfood: "a food perfect and nice and great", price: 80 },
                { id: uniqid(), numberorder: 0, picture: mirzaghasemi, namefood: "mirza ghasemi", descriptionfood: "a food great and perfect and nice", price: 65 },
                { id: uniqid(), numberorder: 0, picture: khorakshamigilanni, namefood: "khorakshamigilanni", descriptionfood: "a food great and perfect and nice", price: 90 },
                { id: uniqid(), numberorder: 0, picture: noshabeghoti, namefood: "noshabe ghoti", descriptionfood: "a food perfect and nice and great", price: 100 }
            ], orderfood: []
        },

        {
            id: uniqid(), name: "Noma", logo: LogoNoma, foods: [
                { id: uniqid(), numberorder: 0, picture: cholojojehkebab, namefood: "cholo jojeh kebab", descriptionfood: "a food great and perfect and nice", price: 50 },
                { id: uniqid(), numberorder: 0, picture: khorakjojehkebab, namefood: "khorak jojeh kebab", descriptionfood: "a food perfect and nice and great", price: 80 },
                { id: uniqid(), numberorder: 0, picture: zereshkpolobamorghsorkh, namefood: "zereshk polo ba morgh sorkh", descriptionfood: "a food great and perfect and nice", price: 65 },
                { id: uniqid(), numberorder: 0, picture: cholokhoreshtghoremesabzi, namefood: "cholo khoresht ghoreme sabzi", descriptionfood: "a food great and perfect and nice", price: 90 },
                { id: uniqid(), numberorder: 0, picture: cholokhoreshtgheymesibzaminy, namefood: "cholo khoresht gheyme sibzaminy", descriptionfood: "a food perfect and nice and great", price: 100 }
            ], orderfood: []
        },

        {
            id: uniqid(), name: "Tagline", logo: LogoTagline, foods: [
                { id: uniqid(), numberorder: 0, picture: pizzapeperony, namefood: "pizza peperony", descriptionfood: "a food great and perfect and nice", price: 50 },
                { id: uniqid(), numberorder: 0, picture: "", namefood: "pizza rost biff", descriptionfood: "a food perfect and nice and great", price: 80 },
                { id: uniqid(), numberorder: 0, picture: "", namefood: "pizza stayk", descriptionfood: "a food great and perfect and nice", price: 65 },
                { id: uniqid(), numberorder: 0, picture: "", namefood: "pizza mix", descriptionfood: "a food great and perfect and nice", price: 90 },
                { id: uniqid(), numberorder: 0, picture: pizzamargarita, namefood: "pizza margarita", descriptionfood: "a food perfect and nice and great", price: 100 },
                { id: uniqid(), numberorder: 0, picture: pizzabiken, namefood: "pizza biken", descriptionfood: "a food perfect and nice and great", price: 100 },
                { id: uniqid(), numberorder: 0, picture: "", namefood: "pizza morgh", descriptionfood: "a food perfect and nice and great", price: 100 },
                { id: uniqid(), numberorder: 0, picture: pizzasalamy, namefood: "pizza salamy", descriptionfood: "a food perfect and nice and great", price: 100 }
            ], orderfood: []
        },

        {
            id: uniqid(), name: "Central", logo: LogoCentral, foods: [
                { id: uniqid(), numberorder: 0, picture: baghlavatabrizy, namefood: "baghlava tabrizy", descriptionfood: "a food great and perfect and nice", price: 50 },
                { id: uniqid(), numberorder: 0, picture: kashkbademjan, namefood: "kashk bademjan", descriptionfood: "a food perfect and nice and great", price: 80 },
                { id: uniqid(), numberorder: 0, picture: saladfasl, namefood: "salad fasl", descriptionfood: "a food great and perfect and nice", price: 65 },
                { id: uniqid(), numberorder: 0, picture: saladshirazi, namefood: "salad shirazi", descriptionfood: "a food great and perfect and nice", price: 90 },
                { id: uniqid(), numberorder: 0, picture: gazsfehan, namefood: "gaz sfehan", descriptionfood: "a food perfect and nice and great", price: 100 },
            ], orderfood: []
        },

        {
            id: uniqid(), name: "Resturantfake", logo: LogoResturantfake, foods: [
                { id: uniqid(), numberorder: 0, picture: zabangosandi, namefood: "zaban gosandi", descriptionfood: "a food great and perfect and nice", price: 50 },
                { id: uniqid(), numberorder: 0, picture: magzgosfand, namefood: "magz gosfand", descriptionfood: "a food perfect and nice and great", price: 80 },
                { id: uniqid(), numberorder: 0, picture: sirabshirdansofaly, namefood: "sirab shirdan sofaly", descriptionfood: "a food great and perfect and nice", price: 65 },
                { id: uniqid(), numberorder: 0, picture: sirabmagzsofaly, namefood: "sirab magz sofaly", descriptionfood: "a food great and perfect and nice", price: 90 },
                { id: uniqid(), numberorder: 0, picture: limotorsh, namefood: "limo torsh", descriptionfood: "a food perfect and nice and great", price: 100 },
            ], orderfood: []
        },

        { id: uniqid(), name: "Albino", logo: LogoAlbino, foods: "", orderfood: [] },
    ]);

    const [getimageimportant] = useState([
        {
            id: 0,
            name: "imageghormehsabzi",
            img: <img src={ghormehsabziimage} alt="ghormehsabziimage" width="112px" height="112px" />
        },
        {
            id: 1,
            name: "imagekebab",
            img: <img src={kebabimage} alt="kebabimage" width="112px" height="112px" />
        },
        {
            id: 2,
            name: "imagepizza",
            img: <img src={pizzaimage} alt="pizzaimage" width="112px" height="112px" />
        },
        {
            id: 3,
            name: "imagedizi",
            img: <img src={diziimage} alt="diziimage" width="112px" height="112px" />
        },
        {
            id: 4,
            name: "imagebeefstroganoff",
            img: <img src={beefstroganoffimage} alt="beefstroganoffimage" width="112px" height="112px" />
        },
        {
            id: 5,
            name: "imagecaesarsalad",
            img: <img src={caesarsaladimage} alt="caesarsaladimage" width="112px" height="112px" />
        },
        {
            id: 6,
            name: "googlemaps",
            img: <img src={googlemaps} alt="googlemapsimage" className="w-100 h-75" />
        },
    ])

    let foodsresturant;

    for (let i = 0; i < getResturant.length; i++) {
        if (("/" + getResturant[i].name) === (window.location.pathname)) {
            foodsresturant = getResturant[i].name
        }
    }

    const AddedOrder = (resturant, id) => {
        const beforefood = [...getResturant]
        const findstate = beforefood.findIndex(p => p.name === resturant)
        const Accessibilityfake = beforefood[findstate]
        const findfood = Accessibilityfake.foods.findIndex(p => p.id === id)
        const Accessibilityasle = Accessibilityfake.foods[findfood]

        Accessibilityasle.numberorder += 1
        const editstateFood = [...beforefood];
        editstateFood[findstate].foods[findfood] = Accessibilityasle;
        changeResturant(editstateFood)

        const changeaddFoodOrder = {
            nameFoodOrder: Accessibilityasle.namefood,
            picture: Accessibilityasle.picture,
            price: Accessibilityasle.price,
            numberorderr: Accessibilityasle.numberorder,
            id: Accessibilityasle.id
        }

        const findstateOrder = Accessibilityfake.orderfood.findIndex(m => m.nameFoodOrder === Accessibilityasle.namefood)
        const AccessibilityOrder = Accessibilityfake.orderfood[findstateOrder]

        if (AccessibilityOrder === undefined || AccessibilityOrder === false) {
            Accessibilityfake.orderfood.push(changeaddFoodOrder)
        } else {
            AccessibilityOrder.numberorderr += 1
            editstateFood[findstate].orderfood[findstateOrder] = AccessibilityOrder;
            changeResturant(editstateFood)
        }
    }

    const deletorder = (resturant, id) => {
        const beforefood = [...getResturant]
        const findstate = beforefood.findIndex(p => p.name === resturant)
        const Accessibilityfake = beforefood[findstate]
        const findfood = Accessibilityfake.foods.findIndex(p => p.id === id)
        const Accessibilityasle = Accessibilityfake.foods[findfood]
        Accessibilityasle.numberorder -= 1
        const editstateFood = [...beforefood];
        editstateFood[findstate].foods[findfood] = Accessibilityasle;
        changeResturant(editstateFood)

        const findfoodordr = Accessibilityfake.orderfood.findIndex(p => p.id === id)
        const Accessibilityasleorder = Accessibilityfake.orderfood[findfoodordr]
        const filterorderinstate = Accessibilityfake.orderfood.filter(o => o.nameFoodOrder !== Accessibilityasleorder.nameFoodOrder)
        editstateFood[findstate].orderfood = filterorderinstate;
        changeResturant(editstateFood)
    }

    const Minesorder = (resturant, id) => {
        const beforefood = [...getResturant]
        const findstate = beforefood.findIndex(p => p.name === resturant)
        const Accessibilityfake = beforefood[findstate]
        const findfood = Accessibilityfake.foods.findIndex(p => p.id === id)
        const Accessibilityasle = Accessibilityfake.foods[findfood]
        Accessibilityasle.numberorder -= 1
        const editstateFood = [...beforefood];
        editstateFood[findstate].foods[findfood] = Accessibilityasle;
        changeResturant(editstateFood)

        const findfoodorder = Accessibilityfake.orderfood.findIndex(p => p.id === id)
        const Accessibilityasleorder = Accessibilityfake.orderfood[findfoodorder]
        Accessibilityasleorder.numberorderr -= 1
        editstateFood[findstate].orderfood[findfoodorder] = Accessibilityasleorder;
        changeResturant(editstateFood)
    }

    const AddinOrderFood = (resturant, id) => {
        const beforefood = [...getResturant]
        const findstate = beforefood.findIndex(p => p.name === resturant)
        const Accessibilityfake = beforefood[findstate]
        const findfood = Accessibilityfake.foods.findIndex(p => p.id === id)
        const Accessibilityasle = Accessibilityfake.foods[findfood]

        Accessibilityasle.numberorder += 1
        const editstateFood = [...beforefood];
        editstateFood[findstate].foods[findfood] = Accessibilityasle;

        const findfoodorder = Accessibilityfake.orderfood.findIndex(p => p.id === id)
        const Accessibilityasleorder = Accessibilityfake.orderfood[findfoodorder]
        Accessibilityasleorder.numberorderr += 1

        editstateFood[findstate].orderfood[findfoodorder] = Accessibilityasleorder;
        changeResturant(editstateFood)
    }

    const ClearStateOrderFood = () => {
        const beforefood = [...getResturant]
        const findstate = beforefood.findIndex(p => p.name === foodsresturant)
        beforefood[findstate].orderfood = [];
        for (let i = 0; i < beforefood[findstate].foods.length; i++) {
            beforefood[findstate].foods[i].numberorder = 0
        }
        changeResturant(beforefood)
    }

    return (
        <ContextOrderFood.Provider value={{
            resturant: getResturant,
            image: getimageimportant,
            AddedOrder: AddedOrder,
            deletorder: deletorder,
            Minesorder: Minesorder,
            AddinOrderFood: AddinOrderFood,
            ClearStateOrderFood: ClearStateOrderFood,
        }}>
            {children}
        </ContextOrderFood.Provider>
    )
}
export default GlobalState