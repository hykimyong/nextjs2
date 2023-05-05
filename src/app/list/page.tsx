'use client'
import Image from "next/image";
import { useState } from "react";

export default function List() {
    const 상품: string[] = ['Tomatoes','Pasta','Coconut'];
    
    const [수량, 수량변경] = useState([0,0,0]);
    return (
      <div>
        <h4 className="title">상품목록</h4>
        
        {
          상품.map((product,index) => (
            <div className="food" key={index}>
              <Image className="food-img" src={`/food${index}.png`} alt="토마토" width={500} height={500}/>
              <h4>{product} $40</h4>
              <span>{수량[index]}</span>
              <button onClick={()=>{ 
                let copy = [...수량];
                copy[index]++;
                console.log(index,copy);
                수량변경(copy);
               }}>+</button>
              <button onClick={()=>{
                let copy = [...수량];
                copy[index]--;
                수량변경(copy);
              }}>-</button>
          </div>
          ))
        }
      </div>
    );
  }
  