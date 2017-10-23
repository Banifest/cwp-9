const Promise = require('bluebird');
//const express = require('express');
const axios = require('axios');


let poke = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/',

                        });
/*
poke.get('pokemon/42')
    .then(res=>
    {
          console.log(res);
    })
    .catch(error =>
    {
        console.log(error);
    });

let pokemon = [];

let urls = [];
for(let i=0; i<3; i++)
{
    urls.push([]);
    for(let j=0; j<10; j++)
    {
        urls[i].push(`pokemon/${10 * (j) + (j + 1)}`)
    }
}
*/
/*
Promise.all(urls[0].map(poke.get))
        .then(result =>
              {
                  for(let iter of result)
                  {
                      console.log(`${iter.data.name}`)
                  }
                  Promise.all(urls[1].map(poke.get))
                      .then(result =>
                            {
                                for(let iter of result)
                                {
                                    console.log(`${iter.data.name}`)
                                }
                                Promise.all(urls[2].map(poke.get))
                                .then(result =>
                                      {
                                          console.log(result)
                                          for(let iter of result)
                                          {
                                              console.log(`${iter.data.name}`)
                                          }


                                      });
                            });
              });
*/
/*
Promise.any(['pokemon/1', 'pokemon/4', 'pokemon/7'].map(poke.get))
    .then(result =>
          {
              console.log(result.data.name);
              //console.log(`ANY${result.date.name}ANY`);
          });
*/
let urlsPoke = [];
let urlsItem = [];
let urlsLoc = [];
for(let i=1;i<11;i++)
{
    urlsItem.push(`item/${i}`);
    urlsLoc.push(`location/${i}`);
    urlsPoke.push(`pokemon/${i}`);
}
/*
Promise.props({
                  pokemons: Promise.all(urlsPoke.map(poke.get)),
                  locations: Promise.all(urlsLoc.map(poke.get)),
                  items: Promise.all(urlsItem.map(poke.get)),
              })
    .then(result=>
          {
              //console.log(result.items[0].data.name);
              for(let iter = 0; iter < 10; iter++)
              {
                  console.log(result.pokemons[iter].data.name);
                  console.log(result.locations[iter].data.name);
                  console.log(result.items[iter].data.name)
              }

          }
    );
*/

Promise.map(' ' ,(berry) =>
            {
                return Promise.all(['berry/1', 'berry/2', 'berry/3', 'berry/4'].map(poke.get));
            })
    .then(result =>
          {
              for(let iter = 0; iter < 4; iter++)
              {
                  console.log(result[0][iter].data.name)
                  console.log(result[0][iter].data.size)
              }
          });