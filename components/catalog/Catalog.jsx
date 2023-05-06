import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import classes from './catalog.module.css'

const Catalog = ({ fishes }) => {

  console.log(fishes)
  const [activeCategory, setActiveCategory] = useState('all')
  const [filteredFishes, setFilteredFishes] = useState([])

  // function countDistinct(arr) {
  //   let distinct = new Set();
  //   for (let i = 0; i < arr.length; i++) {
  //     distinct.add(arr[i].category);
  //   }
  //   let distinctArray = Array.from(distinct);
  //   return distinctArray ;
  // }
  // console.log(countDistinct(fishes)); 

  useEffect(() => {
     const filterFishes = () => {
      setFilteredFishes(() => {
        if(activeCategory){
          if(activeCategory === 'all'){
            return fishes
          }
          return [...fishes].filter((fish) => fish.category === activeCategory)
        }
      })
     }
     activeCategory && filterFishes()
  }, [activeCategory])

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.titles}>
          <h5>Pick some favorite Fish</h5>
          <h2>Fish and Categories</h2>
        </div>
        <div className={classes.categories}>
          <span onClick={() => setActiveCategory('all')} className={`${classes.category} ${activeCategory === 'all' ? classes.active : ''}`}>
            All
          </span>
          <span onClick={() => setActiveCategory('silver')} className={`${classes.category} ${activeCategory === 'silver' ? classes.active : ''}`}>
            Silver
          </span>
          <span onClick={() => setActiveCategory('highback')} className={`${classes.category} ${activeCategory === 'highback' ? classes.active : ''}`}>
            Highback
          </span>
          <span onClick={() => setActiveCategory('crossback')} className={`${classes.category} ${activeCategory === 'crossback' ? classes.active : ''}`}>
            Crossback
          </span>
          <span onClick={() => setActiveCategory('red')} className={`${classes.category} ${activeCategory === 'red' ? classes.active : ''}`}>
            Red
          </span>
          <span onClick={() => setActiveCategory('strange')} className={`${classes.category} ${activeCategory === 'strange' ? classes.active : ''}`}>
            Strange
          </span>
          <span onClick={() => setActiveCategory('Accessory')} className={`${classes.category} ${activeCategory === 'Accessory' ? classes.active : ''}`}>
            Accessory
          </span>
        </div>
        {
          filteredFishes?.length > 0
          ? <div className={classes.fishes}>
             {filteredFishes?.map((fish) => (
              <Link href={`/fish/${fish?._id}`} key={fish?._id} className={classes.fish}>
                <div className={classes.imgContainer}>
                  <Image src={fish?.image} alt='' width='250' height='250' />
                </div>
                <div className={classes.fishData}>
                  <h4>{fish?.title}</h4>
                  <span>${fish?.price}</span>
                </div>
              </Link>
             ))}
          </div>
          : <h2 className={classes.noFish}>There are no {activeCategory} fishes in stock</h2>
        }
      </div>
    </div>
  )
}

export default Catalog