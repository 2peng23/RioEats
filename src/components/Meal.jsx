import React, { useState } from "react";
import { meals } from "../data/data";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

function Meal({ title }) {
  const [foods, setFoods] = useState(meals);
  const [activeAll, setActiveAll] = useState(true);
  const [activePizza, setActivePizza] = useState(false);
  const [activeChicken, setActiveChicken] = useState(false);
  const [activeDessert, setActiveDessert] = useState(false);
  return (
    <div className="max-w-[1520px] m-auto px-3 py-12">
      <h1 className=" text-orange-500 font-bold text-center text-2xl py-2">
        {title}
      </h1>
      <div className="flex flex-col lg:flex-row justify-center py-2">
        <div className="flex justify-center md:justify-center">
          <button
            className={
              foods && activeAll
                ? "rounded-xl border-black bg-orange-700 w-[80px] text-white py-2 px-4 m-1 hover:bg-gray-200 hover:text-orange-700"
                : "rounded-xl border-black bg-orange-400 w-[80px] text-white py-2 px-4 m-1 hover:bg-gray-200 hover:text-orange-700"
            }
            onClick={() => {
              setFoods(meals);
              setActiveAll(true);
              setActiveChicken(false);
              setActiveDessert(false);
              setActivePizza(false);
            }}
          >
            All
          </button>
          <button
            className={
              foods && activePizza
                ? "rounded-xl border-black bg-orange-700 w-[80px] text-white py-2 px-4 m-1 hover:bg-gray-200 hover:text-orange-700"
                : "rounded-xl border-black bg-orange-400 w-[80px] text-white py-2 px-4 m-1 hover:bg-gray-200 hover:text-orange-700"
            }
            onClick={() => {
              const pizzaMeals = meals.filter(
                (meal) => meal.category === "Pizza"
              );
              setFoods(pizzaMeals);
              setActiveAll(false);
              setActiveChicken(false);
              setActiveDessert(false);
              setActivePizza(true);
            }}
          >
            Pizza
          </button>
          <button
            className={
              foods && activeChicken
                ? "rounded-xl border-black bg-orange-700 w-[80px] text-white py-2 px-4 m-1 hover:bg-gray-200 hover:text-orange-700"
                : "rounded-xl border-black bg-orange-400 w-[80px] text-white py-2 px-4 m-1 hover:bg-gray-200 hover:text-orange-700"
            }
            onClick={() => {
              const chickenMeals = meals.filter(
                (meal) => meal.category === "Chicken"
              );
              setFoods(chickenMeals);
              setActiveAll(false);
              setActiveChicken(true);
              setActiveDessert(false);
              setActivePizza(false);
            }}
          >
            Chicken
          </button>
          <button
            className={
              foods && activeDessert
                ? "rounded-xl border-black bg-orange-700 w-[80px] text-white py-2 px-4 m-1 hover:bg-gray-200 hover:text-orange-700"
                : "rounded-xl border-black bg-orange-400 w-[80px] text-white py-2 px-4 m-1 hover:bg-gray-200 hover:text-orange-700"
            }
            onClick={() => {
              const dessertMeals = meals.filter(
                (meal) => meal.category === "Dessert"
              );
              setFoods(dessertMeals);
              setActiveAll(false);
              setActiveChicken(false);
              setActiveDessert(true);
              setActivePizza(false);
            }}
          >
            Dessert
          </button>
        </div>
      </div>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {foods.map((food) => (
          <div
            className="border-none hover:scale-105 duration-300"
            key={food.id}
          >
            <img
              src={food.img}
              alt={food.title}
              className="w-full h-[200px] object-cover rounded-lg"
            />
            <div className="flex justify-between py-2 px-2">
              <p className="font-bold">{food.title}</p>
              <p className="bg-orange-700 rounded-full -mt-10 text-white px-5 border-8 py-5">
                {food.price}
              </p>
            </div>
            <div className="pl-2 py-4">
              <p className="flex items-center text-indigo-600 -mt-5">
                View More <BsFillArrowRightCircleFill className="ml-3" />
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Meal;
