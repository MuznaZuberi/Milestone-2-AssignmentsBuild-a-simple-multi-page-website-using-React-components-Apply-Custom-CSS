import Image from "next/image";
export default function Fruit_cover() {
	return(
       
       <div>

       {/*FruitsCover Section*/}
       <Image
        alt="fruitfull_img"
        src={require("/img/fruit_slide.png")}
        className = "fruitfull_slider"      
      />

       </div>
	)
}