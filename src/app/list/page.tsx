import Image from "next/image";

export default function Home() {
    const 상품: string[] = ['Tomatoes','Pasta','Coconut'];
    
    return (
      <div>
        <h4 className="title">상품목록</h4>
        {
          상품.map((product,index) => (
            <div className="food" key={index}>
              <Image className="food-img" src={`/food${index}.png`} alt="토마토" width={500} height={500}/>
              <h4>{product} $40</h4>
          </div>
          ))
        }
      </div>
    );
  }
  